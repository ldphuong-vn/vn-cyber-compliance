# Lens · Porter's Five Forces (cấu trúc ngành)
<!-- applies_when: competitive_landscape -->

Dùng khi quyết định phụ thuộc cấu trúc cạnh tranh: vào thị trường mới, chọn beachhead, định vị,
định giá chạm trực tiếp đối thủ. Ghi vào `lenses.porter` với `attached_to_stage: 4`.

## Năm lực — mỗi lực một đoạn ngắn, neo bằng chứng
1. `rivalry` — đối thủ hiện tại: ai, mạnh/yếu gì, độ tập trung của thị phần.
2. `new_entrants` — cửa ngõ gia nhập: rào cản vốn/kênh/dữ liệu; ai có thể nhảy vào khi mình thắng.
3. `substitutes` — thay thế: khách "không dùng mình" thì dùng gì (kể cả cách làm thủ công hiện tại).
4. `supplier_power` — nhà cung cấp nắm gì trong tay (API nền tảng, data, hạ tầng AI, kênh phân phối).
5. `buyer_power` — khách nắm thế nào: chi phí chuyển đổi, khả năng mặc cả, đầu mối tập trung.

Cộng `verdict` — một câu: ngành này thuận gió hay ngược gió, lực nào đáng sợ nhất, và quyết định
này có né được lực đó không.

## Quy tắc
- Tuyên bố về đối thủ/thị phần phải CITED ≥2 nguồn độc lập (guardrails §8); một nguồn → cap như
  `ASSUMED` cho tới khi có nguồn thứ hai.
- Đặc biệt quan trọng với quyết định Type-1 (vào ngành là khó đảo — đánh giá lực phải trụ được).
- Đừng điền "vừa phải" cho đủ — thiếu dữ liệu thì `UNKNOWN`, để confidence phản ánh sự thiếu hụt.
