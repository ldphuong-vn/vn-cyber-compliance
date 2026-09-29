# Lens · Ma trận quyết định có trọng số
<!-- applies_when: decision_gate -->

Dùng ở stage 6. Ghi vào `lenses.decision_matrix`.

1. **Tiêu chí + trọng số** — `criteria: [{name, weight}]`, trọng số là SỐ, tổng = 1.0. Tái dùng
   trọng số theo domain nếu có (vd buyability: pain fit 0.4, health/spend 0.3, channel 0.2, intent 0.1).
2. **Phương án** — `options`: LUÔN gồm một phương án "không làm/hoãn" và một phương án "kill", không
   chỉ các biến thể của "có".
3. **Chấm điểm** — `scores[option][criterion]` trên 0..1.
4. **Tổng có trọng số** — `weighted_totals[option] = Σ(score × weight)`. Tính sẵn và ghi vào; lớp
   render sẽ TỰ TÍNH LẠI và cờ lệch nếu sai, nên số phải đúng.

Với quyết định có cấu phần tài chính, cân nhắc thêm tiêu chí **"Profit First"** (lợi nhuận được thiết kế vào, lãi ở quy mô nhỏ) — xem `profit-first.md`.

Điểm cao nhất là tín hiệu mạnh, KHÔNG phải luật. Sáu mũ + critique có thể ghi đè — nếu ghi đè, nêu lý
do ở `decision.rationale[0]`.
