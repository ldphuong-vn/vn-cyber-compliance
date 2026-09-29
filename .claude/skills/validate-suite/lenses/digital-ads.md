# Lens · Chiến lược digital ads (paid acquisition)
<!-- applies_when: paid_acquisition -->

Mở rộng `marketing-strategy.md` cho phần paid. Gọi ở stage 4/5/7 — **CHỈ khi** quyết định chạm tới
quảng cáo trả tiền (Meta/Zalo/TikTok/Google Ads...).

## KHI NÀO gọi / KHI NÀO BỎ QUA (đọc trước)
- **Gọi** khi: validate một chiến lược ads, một kế hoạch GTM dựa nhiều vào paid, hay khi CAC chủ yếu
  đến từ quảng cáo trả tiền.
- **BỎ QUA** khi: ý tưởng/quyết định không dùng paid ads (sản phẩm bán qua sales, word-of-mouth, kênh
  hữu cơ, quyết định nội bộ, pricing thuần...). Đừng ép lens này vào — không liên quan thì SKIP, không
  tạo gate ads, không để nó kéo confidence.

## Bốn thứ paid cần mà marketing chung chưa đủ

### 1. Phép tính phễu — biến "CAC mỗi kênh" thành KIỂM ĐƯỢC
CAC ads không phải một số nguyên tử. Phân rã:
```
CPM → (impressions) → CTR → (clicks) → CVR_lead → CVR_sale → CPA → CAC
ROAS = doanh thu / chi phí ads
```
Mục đích: biết kênh GÃY ở đâu (impression rẻ nhưng CTR thấp? click nhiều mà CVR tệ?), thay vì chỉ một
con số CAC đoán. Một CAC mục tiêu chỉ khả thi nếu từng mắt xích phễu hợp lý.

### 2. CAC biên & bão hòa
Đổ thêm tiền → CAC tăng (đường cong hiệu suất giảm dần). Chiến lược ads sống ở ĐƯỜNG CONG, không phải
một điểm CAC. Hỏi: ở mức ngân sách mục tiêu, CAC biên còn dưới ngưỡng payback không? Kênh có "trần" quy
mô không?

### 3. Phương pháp test paid
Ads là lặp creative + đo **incrementality** (geo holdout, ghost ads, conversion lift), KHÔNG tin
last-click. Cần một kế hoạch test: creative nào, ngân sách học, tín hiệu dừng/scale.

### 4. Đặc thù nền tảng & VN
Learning phase, ngân sách tối thiểu mỗi kênh, động lực auction; Zalo Ads / Meta / TikTok ở VN khác nhau
về cost & audience. Một chiến lược bỏ qua learning phase / min budget thường vỡ kế hoạch.

## Gate gợi ý (cắm vào stage 5)
`G5.4` — Paid economics: LTV:CAC lành mạnh + payback chấp nhận được Ở MỨC NGÂN SÁCH thực, có tính CAC
biên/bão hòa? Score 0..1. `threshold: 0.6`.

## Cho điểm & trung thực (guardrails)
- Chưa có campaign nào → mọi CPM/CTR/CVR/CAC/ROAS là `ASSUMED` → bị cap điểm → confidence thấp. ĐÚNG:
  bộ phải nói thẳng "anh đang đoán kinh tế ads".
- Campaign cũ = `MEASURED` (mạnh nhất). Benchmark ngành = `CITED` (cần tam giác hóa ≥2 nguồn).
- Lens này validate CÁC CƯỢC trong chiến lược ads; nó KHÔNG phải media-planning tool (không quản bid,
  không phân bổ ngân sách theo giờ). Giữ ranh giới đó.
