# Store — hợp đồng lưu trữ của STATEFUL (backend-agnostic)

> STATEFUL := **có một store thật sự ghi được**. File này định nghĩa store đó phải làm gì, không
> phụ thuộc cách làm. Backend mặc định là **file store** tại `~/.validate-suite/` — không cần hạ tầng nào.
> Mini-app sau này có thể đổi sang PostgreSQL cùng đúng interface này.
>
> File store nằm **ngoài thư mục của mọi agent** — chạy bằng Claude hôm nay, Codex ngày mai, vẫn
> cùng một sổ quyết định và hồ sơ người dùng. Mentor theo người, không theo agent.

## Layout

```
~/.validate-suite/
  ledger/<dossier_id>.dossier.json   # episodic — mỗi Dossier hoàn tất một file nguyên vẹn
  outcomes.jsonl                     # append-only, mỗi dòng một bản ghi outcome
  tripwires.json                     # [{dossier_id, title, condition, armed_at, due_at, status}]
  founder_profile.json               # derived — cấu trúc theo mentor-layer.md mục 4
  calibration_report.json            # derived — tính lại khi có outcome mới (mentor-layer.md mục 3)
```

- `outcomes.jsonl` là append-only: ghi thêm dòng, không sửa dòng cũ. Dòng hỏng format → **bỏ qua
  khi đọc** (self-healing), không chặn cả store.
- File shapes mirror các bảng SQL ở `dossier-schema.md` mục 6 để sau này import PostgreSQL chỉ cần
  một script.

## Interface (mọi backend phải có)

| hàm | vào → ra | ý nghĩa |
|---|---|---|
| `save_dossier(d)` | Dossier hoàn tất → ghi ledger | episodic memory: lưu nguyên vẹn một quyết định |
| `record_outcome(rec)` | `{dossier_id, status, recorded_at, notes, predicted_confidence, predicted_verdict}` → thêm dòng `outcomes.jsonl` | khép vòng dự đoán vs thực tế |
| `list_due_outcomes(now)` | thời điểm → danh sách Dossier >60 ngày chưa có outcome | việc cần hỏi lại người dùng |
| `arm_tripwires(d)` | Dossier → thêm các `reversal_conditions` thành tripwire `ARMED` | canh điều kiện đảo ngược quyết định |
| `eval_tripwires(now)` | thời điểm → các tripwire đến hạn / cần người dùng xác nhận | nguồn nudge trách nhiệm |
| `load_profile()` | → `founder_profile` (hoặc rỗng) | prior cá nhân hóa cho lần chạy sau |
| `save_profile(p)` | profile mới → ghi đè `founder_profile.json` | tích lũy pattern xuyên quyết định |
| `recompute_calibration()` | ledger + outcomes → `calibration_report.json` | bins/Brier/threshold shift — chỉ khi đủ n (≥15–20 mỗi dải) |

## File backend — cách làm (mặc định)

- Mọi hàm đọc/ghi file thường trong `~/.validate-suite/`; thư mục chưa có → tạo khi người dùng
  đồng ý bật trí nhớ lần đầu (hỏi MỘT câu, nhớ lựa chọn).
- `list_due_outcomes`: quét `ledger/*.json`, join với `outcomes.jsonl`, lấy các Dossier có
  `decision.journal.decided_at` cách đây >60 ngày và chưa có dòng outcome.
- `eval_tripwires`: đọc `tripwires.json`, lấy các mục `due_at <= now` còn `ARMED` hoặc cần xác nhận.
- `recompute_calibration`: thu thập các Dossier ĐÃ có outcome → bins theo dải confidence (0.5–0.6
  ... 0.9–1.0), Brier score, khuyến nghị threshold shift tách theo `decision_type`. Dưới ngưỡng n
  → ghi rõ "chưa đủ dữ liệu", không bịa số (guardrails áp lên chính calibration).

### Ví dụ các file

`outcomes.jsonl` (mỗi dòng một bản ghi):
```jsonc
{"dossier_id":"d-9f2a","status":"SUCCEEDED","recorded_at":"2026-09-20T08:00:00Z",
 "notes":"10 khách trả tiền add-on sau 6 tuần","predicted_confidence":0.752,"predicted_verdict":"GO"}
{"dossier_id":"d-a31c","status":"FAILED","recorded_at":"2026-08-02T10:00:00Z",
 "notes":"Pilot 30 ngày không ra khách trả tiền","predicted_confidence":0.68,"predicted_verdict":"GO"}
```

`tripwires.json`:
```jsonc
[{"dossier_id":"d-9f2a","title":"Cầu ZNS thấp hơn kỳ vọng","condition":"<2/5 khách phỏng vấn sẵn lòng trả tiền",
  "armed_at":"2026-06-13T09:40:00Z","due_at":"2026-07-13T09:40:00Z","status":"ARMED"}]
```
(`status`: `ARMED | TRIPPED | RESOLVED | OVERRIDDEN`)

`founder_profile.json` / `calibration_report.json`: cấu trúc y như ví dụ ở `mentor-layer.md` mục 3–4.

## Heartbeat — thay scheduled job

Scheduled job của bản PostgreSQL được thay bằng **heartbeat tại Step 0 của SKILL.md** (chỉ STATEFUL,
chạy trước Intake): đọc store qua `list_due_outcomes` + `eval_tripwires`; có gì đến hạn → nudge
người dùng tối đa 1–2 dòng, hỏi kết quả, `record_outcome` ngay trong phiên. Không có gì → im lặng.
Tùy chọn nâng cao: cấu hình hook/session-start của agent để mở phiên là chạy heartbeat.

## PostgreSQL sau này

Mini-app / đa người dùng: cùng interface, bảng theo `dossier-schema.md` mục 6 (`dossiers`,
`assumptions`, ...). Vì file shapes đã mirror các bảng đó, chuyển đổi = một script import, không
đổi logic skill.

## Giới hạn trung thực

- Nudge chỉ xảy ra khi có phiên làm việc — không có server cron 24/7 gọi anh lúc nửa đêm.
- Calibration cần ≥15–20 outcome mỗi dải mới ra số; trước đó mentor "gieo hạt", không "biết anh".
- Câu "đã lưu" trong báo cáo phải đi kèm đường dẫn file thật — không hứa hụt (guardrails.md).
