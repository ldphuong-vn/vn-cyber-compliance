# Guardrails — Kỷ luật bằng chứng & chống ảo giác

> **Vì sao file này tồn tại:** đầu ra của cả pipeline chỉ tốt bằng chất lượng đầu vào tầng 0–5.
> Một agent điền đại CAC/TAM/retention "nghe hợp lý" sẽ tạo ra một verdict trông tự tin nhưng dựa
> trên hư cấu — tệ hơn là không thẩm định. Mọi stage PHẢI tuân các quy tắc dưới đây. Đây là phần
> nâng chất lượng phân tích và chặn AI ảo giác.

## 1. Phân loại nguồn bằng chứng (bắt buộc gắn cho mỗi gate)

Mỗi `evidence` đi kèm một `evidence_type`:

| type | nghĩa | độ mạnh |
|---|---|---|
| `MEASURED` | dữ liệu first-party có thật: analytics, doanh số, phỏng vấn ĐÃ thực hiện | mạnh nhất |
| `CITED` | nguồn ngoài có dẫn chứng: báo cáo, web, số liệu thị trường (kèm ref) | mạnh |
| `USER_STATED` | người dùng tự khẳng định — niềm tin/ước lượng của họ, chưa kiểm chứng | trung bình |
| `ASSUMED` | suy luận của agent, **nói rõ là giả định** | yếu |
| `UNKNOWN` | không có cơ sở nào | không được chấm điểm ngầm |

## 2. Cap điểm theo nguồn (cứng — không lách)

- Gate dựa trên `ASSUMED` ⇒ **score ≤ 0.60** và **không được PASS** (tối đa REVIEW_NEEDED).
  Không thể "đậu" một cổng bằng phỏng đoán.
- Gate dựa trên `UNKNOWN` ⇒ score để `null`, status `REVIEW_NEEDED`, ghi rõ "thiếu đầu vào: <cái gì>".
- `MEASURED`/`CITED`/`USER_STATED` mới được chấm tự do theo độ mạnh thực tế.

Các cap này nối thẳng vào công thức confidence sẵn có (REVIEW_NEEDED bị haircut 15% + ngưỡng động
theo Type), nên bằng chứng yếu **tự động** kéo confidence xuống — không cần can thiệp tay.

## 3. Cấm bịa số (no-fabrication)

Khi cần một con số (CAC, LTV, TAM, %, giá…) mà KHÔNG có sẵn, agent có đúng ba lựa chọn — không bao
giờ điền một con số "nghe hợp lý":
1. **Tra cứu** bằng công cụ thật (công cụ tìm kiếm web của agent đang chạy / dữ liệu nội bộ) → đánh dấu `CITED`/`MEASURED`.
2. **Hỏi người dùng** → đánh dấu `USER_STATED`.
3. **Đánh dấu `UNKNOWN`** và để confidence phản ánh sự thiếu hụt.

Khi buộc phải ước lượng để tiến hành, đánh dấu `ASSUMED`, nêu *cơ sở* của ước lượng, và đặt nó dưới
cap mục 2. Không bao giờ trình bày một ước lượng như một sự thật.

## 4. Verdict cap khi bằng chứng mỏng

Nếu phần lớn các tầng hậu thuẫn cho `GO` dựa trên `ASSUMED`/`UNKNOWN` (nhiều hơn số tầng `MEASURED`/
`CITED`), thì **verdict bị chặn ở `PARK`** bất kể confidence tính ra bao nhiêu — kèm câu rõ ràng:
"chưa đủ bằng chứng thật để cam kết; cần thu thập <X> trước". Đây là chốt chặn mạnh nhất chống một
"GO" trông đẹp nhưng rỗng ruột.

## 5. Self-check trước khi chấm điểm

Trước mỗi điểm số, agent tự hỏi: *"Điểm này đến từ dữ liệu tôi THỰC SỰ có, hay từ một câu chuyện tôi
đang dựng?"* Nếu là vế sau → `ASSUMED`/`UNKNOWN`, không phải một con số tự tin. Khi mô tả tình huống
của người dùng, không suy diễn vượt quá điều họ nói; không gán động cơ/trạng thái cho ai.

## 6. Hiển thị minh bạch (cho cả người dùng không chuyên sau này)

Lớp render PHẢI cho thấy mỗi gate dựa trên loại bằng chứng nào (badge màu) và một tóm tắt "chất lượng
bằng chứng" của cả Dossier (bao nhiêu MEASURED/CITED so với ASSUMED/UNKNOWN). Người đọc — nhất là
người không chuyên trên app — phải phân biệt được "điều ta biết" với "điều ta đoán", không bị con số
đánh lừa.

## 7. Tách bạch dữ kiện và suy luận trong văn bản

Trong mọi `notes`/`evidence`, viết riêng phần dữ kiện và phần diễn giải. Tránh ngôn ngữ chắc nịch
("chắc chắn", "rõ ràng là") cho những điều thực ra là suy đoán. Một báo cáo trung thực nói "chưa biết"
ở chỗ chưa biết.

## 8. Quy tắc tam giác hóa 2 nguồn (triangulation)

Một tuyên bố quan trọng — **nhất là quy mô thị trường (TAM/SAM/SOM) và tình trạng đối thủ** — chỉ
được chấm điểm cao khi có **≥2 nguồn độc lập** xác nhận. Một nguồn duy nhất ⇒ cap như `ASSUMED`
(score ≤ 0.60) cho tới khi có nguồn thứ hai. Đây chính là quy tắc kiểm chứng chéo 2 nguồn độc lập
— áp dụng cho thẩm định.

"Độc lập" nghĩa là không cùng gốc: hai bài báo cùng trích một thông cáo = MỘT nguồn. Ghi cả hai vào
`evidence_refs`. Khi hai nguồn mâu thuẫn, ghi rõ mâu thuẫn và hạ confidence — đừng chọn bên hợp ý.

## 9. Ngôn ngữ phổ thông cho nội dung hướng-người-đọc (anti-jargon)

Báo cáo phục vụ cả người KHÔNG chuyên. Mọi trường sẽ hiển thị cho người dùng — `rationale`,
`coaching.*` (stance/next_moves/watch_risk/advisor_note), `gate.question`, `gate.evidence`,
`problem_statement`, `premortem`, `synthesis` — phải viết **tiếng Việt đời thường**:

- Diễn đạt bằng lời thường trước; khi buộc dùng một thuật ngữ (CAC, LTV, WTP, beachhead, payback,
  ROAS, MVP, Van Westendorp...), **mở ngoặc giải thích ngắn ngay lần đầu** ("WTP — mức khách sẵn lòng trả").
- Không dồn nhiều thuật ngữ trong một câu; ưu tiên "kết quả + việc cần làm" hơn nhãn/điểm số.
- KHÔNG nhét mã nội bộ (`TYPE_1`, `REVIEW_NEEDED`, `§4`, tên gate trần) vào câu văn hướng-người-đọc —
  để renderer dịch nhãn sang tiếng Việt; văn bản chỉ nói ý.
- "Dễ hiểu" không đánh đổi "trung thực/chính xác" (các mục 1–8 vẫn nguyên). Đây là cách trình bày,
  không phải nói cho qua.
- Lớp render gắn chú giải (tooltip) cho thuật ngữ còn lại từ `glossary.md` — nhưng tooltip là phần bù,
  không thay cho việc viết rõ ngay từ đầu.
