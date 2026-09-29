# Lens · Profit First (Mike Michalowicz)
<!-- applies_when: has_business_model -->

Gọi ở stage 5 (biz-model) và stage 6 (decision-gate). Dùng cả cho audit sản phẩm đang chạy (case B).
Áp dụng mặc định cho doanh nghiệp chủ-vận-hành, tự bỏ vốn, eo hẹp tiền mặt — đúng ngữ cảnh SMB Việt.

## Lật công thức
Kế toán truyền thống: **Doanh thu − Chi phí = Lợi nhuận** → lợi nhuận là phần thừa, thường biến mất.
Profit First: **Doanh thu − Lợi nhuận = Chi phí** → lấy lợi nhuận ra TRƯỚC, vận hành bằng phần còn lại.
Định luật Parkinson: có bao nhiêu tiêu bấy nhiêu, nên phải "giấu" lợi nhuận đi (tài khoản riêng).

## Bốn câu hỏi cho thẩm định
1. **Công thức đảo** — model được thiết kế "lợi nhuận trước", hay coi lợi nhuận là phần thừa "tính sau"?
2. **Lãi ở quy mô nhỏ** — có lãi (hoặc thiết kế để lãi) ở quy mô NHỎ NHẤT khả thi, không phải "khi scale"?
   Một ý tưởng chỉ lãi "khi đủ lớn" là một cú đặt cược, không phải một mô hình lành mạnh.
3. **Owner's pay** — trả tiền mặt THẬT cho người làm, hay sweat-equity vô hạn? Doanh nghiệp phải nuôi
   được chủ, không nô dịch chủ.
4. **Phân bổ thực tế** — các % mục tiêu (Profit / Owner's Pay / Tax / OpEx) có chạy được với dải
   doanh thu này không? Nếu OpEx phải nuốt gần hết mới sống, model mong manh.

## Cho điểm
Score 0..1 theo mức "lợi nhuận được thiết kế vào", không phải "có thể có lãi về lý thuyết".
Cao = lãi ở quy mô nhỏ + trả chủ + biên đủ để trích profit ngay. Thấp = lệ thuộc scale tương lai.

## Lưu ý trung thực (guardrails)
Profit First hợp doanh nghiệp chủ-vận-hành/bootstrapped. Nó CĂNG THẲNG với mô hình VC blitzscale
("grow now, profit later") — đôi khi đốt tiền để chiếm thị trường là lựa chọn hợp lý có chủ đích.
Khi gặp ngoại lệ scale-first, KHÔNG phạt mù quáng — gắn cờ "đây là đặt cược scale-first có chủ đích,
chấp nhận rủi ro dòng tiền" và để người quyết thấy rõ đánh đổi, thay vì giả vờ Profit First là luật.
