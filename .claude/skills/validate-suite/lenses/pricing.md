# Lens · Chiến lược giá (pricing)
<!-- applies_when: touches_pricing -->

Gọi ở stage 5 (biz-model). Dùng cho cả định giá mới lẫn repricing sản phẩm đang chạy (ASSERT mode).
Bộ vốn coi giá là "một con số"; lens này coi giá là một QUYẾT ĐỊNH có cấu trúc.

## 1. Logic định giá — chọn đúng gốc
- **Cost-plus** (chi phí + biên): dễ nhưng bỏ qua giá trị → thường để tiền trên bàn.
- **Competitor-based**: an toàn nhưng biến mình thành hàng hóa.
- **Value-based**: neo vào giá trị khách nhận được — thường thắng cho SaaS. Hỏi: giá đang phản ánh
  giá trị giao hay chỉ phản ánh chi phí của mình?

## 2. Price metric & packaging — quyết định giá THẬT
Đơn vị tính tiền (theo seat / theo usage / theo kết quả / theo tier) quan trọng hơn con số. Hỏi:
metric có **scale theo thành công của khách** không? (khách lớn lên thì trả nhiều hơn một cách tự nhiên).
Đây là chỗ phần lớn "chiến lược giá" thật sự sống — không phải ở việc chọn 1.499K hay 1.599K.

## 3. Willingness-to-pay — đo, đừng đoán
WTP phải đo: phỏng vấn, **Van Westendorp** (4 câu: quá đắt / đắt / rẻ / quá rẻ để nghi ngờ chất lượng),
A/B giá trên landing. Mọi tuyên bố WTP chưa đo = `USER_STATED`/`ASSUMED` theo guardrails, bị cap điểm.

## 4. Tiering — good-better-best
3 tier dùng hiệu ứng mỏ neo + tier giữa "decoy" để đẩy về gói mong muốn. Kiểm: mỗi tier có khớp một
phân khúc giá trị rõ ràng không, hay chỉ là chia nhỏ tính năng tùy tiện? Tier có hàng rào (fence) hợp lý không?

## 5. Co giãn & phân khúc
Giá nhạy tới đâu? Có thể phân khúc giá theo nhóm (SMB vs enterprise) với fence rõ không?

## Cho điểm & trung thực
Score 0..1 theo mức "giá neo vào giá trị + metric scale theo khách + WTP có bằng chứng". Với sản phẩm
đang chạy (Product X 3 tier), phần lớn là audit: cấu trúc tier có khớp giá trị giao và scale theo thành công
khách không. Đừng để một con số giá "nghe hợp lý" thành MEASURED khi chưa test WTP thật.
