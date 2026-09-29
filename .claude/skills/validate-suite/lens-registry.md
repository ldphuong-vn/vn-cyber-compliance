# Lens Registry — lớp intent (tag → lens)

> "Lớp intent" để khỏi gọi lens không liên quan. Đây là **bảng tra cứu tĩnh, no-LLM** — không phải
> một bước LLM phân loại. Intake sinh ra `intake.tags[]`; orchestrator lấy GIAO của tags với bảng này
> → ra đúng tập lens cần gọi. Thêm lens = thêm một dòng, không đụng logic. Mini-app/hệ thống nạp y hệt.
>
> Phạm vi: **quyết định kinh doanh** (ý tưởng/sản phẩm/giá/GTM/marketing/ads). KHÔNG mở sang "validate
> everything". Muốn thêm loại quyết định kinh doanh mới (hiring, M&A...) → thêm lens + tag trong miền này.

## Vốn tag (Intake gắn cho mỗi quyết định)
```
decision_gate        : luôn TRUE khi stage 6 chạy (bộ critique lõi)
has_business_model   : quyết định chạm tới mô hình kinh tế (gần như mọi ý tưởng/sản phẩm)
touches_pricing      : chạm tới giá / repricing / packaging
touches_marketing    : chạm tới chiến lược marketing / kênh / messaging
paid_acquisition     : dùng quảng cáo trả tiền (Meta/Zalo/TikTok/Google Ads)
downstream_effects   : có hệ quả dây chuyền đáng truy (đặc biệt quyết định Type-1)
competitive_landscape: quyết định phụ thuộc cấu trúc cạnh tranh (vào thị trường mới, beachhead, định vị chạm đối thủ)
```
Các tag này là near-binary, suy ra rẻ từ `objective`/case — không cần LLM nặng. Khi mơ hồ, Intake hỏi
đúng một câu rồi nhớ cho phiên.

## Bảng ánh xạ tag → lens
```
TAG                  LENSES ĐƯỢC GỌI
─────────────────    ─────────────────────────────────────────────────────────────
decision_gate        six-hats, party-mode, premortem, inversion, red-team, decision-matrix, swot
has_business_model   profit-first
touches_pricing      pricing
touches_marketing    marketing-strategy
paid_acquisition     digital-ads          (mở rộng của marketing-strategy cho phần paid)
downstream_effects   second-order
competitive_landscape porter              (cấu trúc ngành — Five Forces, chạy ở stage 4)
```

Dạng máy đọc (mini-app/backend nạp trực tiếp):
```json
{
  "decision_gate":      ["six-hats","party-mode","premortem","inversion","red-team","decision-matrix","swot"],
  "has_business_model": ["profit-first"],
  "touches_pricing":    ["pricing"],
  "touches_marketing":  ["marketing-strategy"],
  "paid_acquisition":   ["digital-ads"],
  "downstream_effects": ["second-order"],
  "competitive_landscape": ["porter"]
}
```

## Quy tắc
- `decision_gate` là bộ critique lõi — luôn chạy ở stage 6 (không cần Intake bật).
- Lens điều kiện CHỈ chạy khi tag tương ứng bật. Tag tắt → lens không được gọi, không tạo gate, KHÔNG
  kéo confidence.
- `paid_acquisition` ngụ ý `touches_marketing` (paid là tập con của marketing). Bật cái trước thì kéo
  theo marketing-strategy.
- Nguồn sự thật của điều kiện mỗi lens là dòng `applies_when:` ở đầu file lens; registry này chỉ TỔNG HỢP lại.
