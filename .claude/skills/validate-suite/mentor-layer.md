# Mentor Layer — calibration, accountability, memory (chỉ STATEFUL — bản có backend / private)

> Đây là lớp biến validator thành mentor. Chỉ chạy ở `mode = STATEFUL`. Nó lấp đúng hai thứ mà không
> file nào tự lấp được: **trí nhớ về người dùng** và **bằng chứng rằng phán đoán của bộ là đúng**.
> Ánh xạ thẳng lên lớp trí nhớ nhiều tầng; scheduled jobs được thay bằng heartbeat tại Step 0 của
> skill (xem `store.md`). STATELESS bỏ qua toàn bộ file này.

Bốn thành phần, theo thứ tự phụ thuộc: Ledger → Outcome → Calibration → Profile → (Nudges).

## 1. Decision ledger (episodic memory)
Mỗi Dossier hoàn tất được lưu nguyên vào sổ: `verdict`, `confidence`, `confidence_threshold`,
`decision_type`, `key_assumptions`, `reversal_conditions`, timestamp. Đây là episodic memory của hệ thống.
PostgreSQL: bảng `dossiers` (đã có trong schema) + view `decision_ledger`.

## 2. Outcome tracking (khép vòng)
Mỗi Dossier nhận một bản ghi kết quả theo thời gian — đây là mảnh mọi người bỏ qua, và là mảnh khiến
con số thôi võ đoán.

```jsonc
"outcome": {
  "status": "TOO_EARLY | SUCCEEDED | FAILED | PIVOTED | KILLED",
  "recorded_at": "ISO8601",
  "notes": "Điều thật sự đã xảy ra",
  "predicted_confidence": 0.72,        // copy từ decision.confidence lúc quyết
  "predicted_verdict": "GO"            // để đối chiếu dự đoán vs thực tế
}
```
Một scheduled job định kỳ (vd cron hằng đêm) hỏi: *"Dossier X quyết N tháng trước — kết quả
ra sao?"* Cập nhật outcome. Không có outcome thì không có calibration — đây là điều kiện tiên quyết.

## 3. Calibration engine (làm con số hết võ đoán)
Trên tập Dossier ĐÃ có outcome, kiểm xem confidence có tương quan thật với thành công không.

- **Reliability bins:** chia theo dải confidence (0.5–0.6, 0.6–0.7, 0.7–0.8, 0.8–0.9, 0.9–1.0). Mỗi
  dải: tỉ lệ thành công thực tế vs confidence dự đoán (điểm giữa dải). Lệch lớn = lệch hiệu chỉnh.
- **Brier score** cho chất lượng dự đoán tổng thể.
- **Điều chỉnh:** nếu một dải overconfident có hệ thống (thực tế ≪ dự đoán) → khuyến nghị nâng ngưỡng
  GO hoặc áp haircut confidence cho người/loại quyết định đó. Tách calibration theo `decision_type`
  (Type-1 và Type-2 thường hiệu chỉnh khác nhau).

```jsonc
"calibration_report": {
  "bins": [ { "band": "0.7-0.8", "n_resolved": 12, "predicted": 0.75, "actual_success": 0.5, "verdict": "OVERCONFIDENT" } ],
  "brier_score": 0.21,
  "recommended_threshold_shift": { "TYPE_1": "+0.05" }
}
```

**Quy tắc trung thực (guardrails áp lên chính calibration):** KHÔNG báo cáo calibration từ mẫu nhỏ.
Mỗi dải cần `n_resolved` tối thiểu (gợi ý ≥15–20) mới cho ra số; dưới ngưỡng → ghi "chưa đủ dữ liệu",
không bịa độ chính xác. Calibration non tự nó là một dạng ảo giác.

## 4. Founder learning profile (semantic memory)
Tích lũy pattern XUYÊN các quyết định — đây là chỗ "phát triển *người*", không chỉ chấm từng quyết định.

```jsonc
"founder_profile": {
  "recurring_blind_spots": [ "Liên tục overestimate cầu (3/4 lần giả định cầu sai)" ],
  "calibration_tendency": "overconfident +0.1 ở Type-1",
  "discipline_score": 0.6,             // tỉ lệ tôn trọng chính tripwire mình đặt
  "lens_signal": "PREMORTEM bắt đúng killer thật 4/5 lần — tăng trọng số cho người này",
  "assumption_miss_categories": { "demand": 3, "timing": 1, "focus": 2 }
}
```
Cách dựng: tag `key_assumptions` theo loại (demand/timing/focus/moat/economics...), đối chiếu với
outcome để biết loại nào hay sai; đo lệch confidence-vs-outcome; đếm lần tripwire được tôn trọng.
**Tiêm ngược vào Dossier mới:** ở framing/decision-gate, profile thành prior cá nhân hóa —
*"Lần thứ 3 cầu là giả định số một của anh; hai lần trước đều trật. Giả định này cần bằng chứng đo được, không phải USER_STATED."*

## 5. Accountability loop (giữ anh đúng lời mình hứa)
Mỗi `reversal_conditions` được lưu thành tripwire trạng thái `ARMED`. Heartbeat đánh giá định kỳ với
thực tế (hỏi người dùng hoặc kéo dữ liệu). Khi một tripwire `TRIPPED`:

> "Sáu tháng trước anh nói: nếu pilot không ra khách trả tiền → NO_GO. Pilot không ra khách. Sao vẫn đang làm?"

Buộc một hành động: revisit / override-có-lý-do / resolve. **Tỉ lệ tôn trọng tripwire** là tín hiệu
kỷ luật, nuôi `founder_profile.discipline_score`. Đây là thứ một validator một-lần không bao giờ làm được.

## 6. Proactive nudges (chủ động, không đợi gọi)
Trên scheduled job, mentor tự khởi xướng — không đợi bạn mang quyết định tới:
- Tripwire đã chạm (mục 5).
- Dossier quá hạn rà outcome (mục 2).
- Dossier MỚI đang lặp lại một blind spot cũ (mục 4) → cảnh báo ngay tại cổng framing.

## File backend (mặc định — không cần PostgreSQL)
Toàn bộ bốn thành phần trên chạy được bằng **file store** tại `~/.validate-suite/` (layout +
interface chi tiết ở `store.md`): ledger là các file Dossier, outcome là JSONL append-only,
tripwire/profile/calibration là JSON. Điều khác bản PostgreSQL:

- **Scheduled jobs → heartbeat:** nudge outcome quá hạn / tripwire đến hạn chạy tại Step 0 của
  skill, chỉ khi có phiên làm việc — không có cron 24/7.
- **Calibration tính lúc đọc** (`recompute_calibration`), không cần job riêng; vẫn tôn trọng ngưỡng
  ≥15–20 outcome mỗi dải trước khi ra số.
- File store nằm ngoài thư mục mọi agent — mentor theo người, không theo agent.

PostgreSQL vẫn là đích cho mini-app đa người dùng — cùng interface, bảng theo schema mục 6.

## Ánh xạ lên một backend stateful
- **episodic** ← decision ledger + outcomes (mục 1–2)
- **semantic** ← founder_profile + calibration_report (mục 3–4)
- **procedural** ← chính pipeline validate (các stages)
- **working** ← Dossier đang chạy dở
- **scheduled jobs** ← outcome polling, tripwire eval, nudges (mục 2,5,6)
- **Cổng phê duyệt con người** ← `confidence < threshold` (đã có) + tripwire TRIPPED cần người duyệt

## Ranh giới phải giữ (đúng tinh thần trung thực của bộ)
Mentor này mạnh ở lý trí và phải KHIÊM TỐN ở phần người. Nó KHÔNG đọc trạng thái cảm xúc, KHÔNG thay
quan hệ thật, KHÔNG biết khi nào anh ép một quyết định vì sợ hay vì cái tôi. Mục tiêu của một super
mentor tử tế là khiến anh **cần nó ÍT đi theo thời gian** — chuyển giao phán đoán, không tạo lệ thuộc.
Khi profile cho thấy anh đã tự calibrate tốt ở một loại quyết định, mentor nên lùi lại, không xen vào.
