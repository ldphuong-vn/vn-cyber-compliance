# Lens · Pre-mortem
<!-- applies_when: decision_gate -->

Dùng ở stage 3 và stage 6. Ghi vào `lenses.premortem` dạng `{failure_mode, cause, mitigation}`.

Kỹ thuật (Gary Klein): tưởng tượng đã ở 12 tháng sau và dự án ĐÃ THẤT BẠI hoàn toàn. Viết ngược lại
vì sao. Bắt đầu từ các giả định `risk × uncertainty` cao nhất trong `framing.assumptions` — failure
mode thường mọc ra từ chính những giả định chưa kiểm chứng đó.

Với mỗi failure mode:
- `failure_mode` — chuyện gì đã hỏng (cụ thể, không chung chung).
- `cause` — nguyên nhân gốc, neo vào một giả định.
- `mitigation` — hành động rẻ nhất làm giảm xác suất/tác động NGAY BÂY GIỜ.

Một pre-mortem tốt sinh ra mitigation hành động được, không chỉ là lo lắng.
