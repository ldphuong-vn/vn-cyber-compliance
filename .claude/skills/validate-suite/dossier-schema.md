# Validation Dossier — Schema (v1.0.0)

> **Vai trò:** Đây là *single source of truth* của toàn bộ pipeline thẩm định.
> Mọi stage chỉ **đọc và ghi** vào cấu trúc này — không stage nào tự in HTML hay
> nói chuyện trực tiếp với người dùng. Lớp `render/` đọc Dossier (chỉ đọc) để sinh HTML.
> Đây cũng là hợp đồng chung cho 3 hình thái: **skill** (file `.dossier.json`),
> **mini app** và **backend** (bảng PostgreSQL). Giữ schema này ổn định = tái dùng không phải viết lại lõi.

## Mục lục
1. [Nguyên tắc thiết kế](#1-nguyên-tắc-thiết-kế)
2. [Bộ enum (từ vựng kiểm soát)](#2-bộ-enum-từ-vựng-kiểm-soát)
3. [Cấu trúc tổng thể](#3-cấu-trúc-tổng-thể)
4. [Định nghĩa từng khối](#4-định-nghĩa-từng-khối)
5. [Ví dụ Dossier điền đầy đủ](#5-ví-dụ-dossier-điền-đầy-đủ)
6. [Ánh xạ sang PostgreSQL](#6-ánh-xạ-sang-postgresql)
7. [Quy ước đọc/ghi cho từng layer](#7-quy-ước-đọcghi-cho-từng-layer)

---

## 1. Nguyên tắc thiết kế

- **Versioned bắt buộc.** `meta.schema_version` theo SemVer. Mini app và backend đọc trường này
  để biết có hiểu được Dossier không. Đổi cấu trúc → tăng version, không sửa ngầm.
- **Ngưỡng và trọng số là *dữ liệu*, không phải văn xuôi.** `gate.threshold`, `decision_matrix.criteria[].weight`
  là số đọc được, để code mini app dùng lại đúng con số mà không phải diễn giải lại từ markdown.
- **Append-only theo tầng.** Mỗi stage ghi vào `stages[]` của nó; không sửa stage khác.
  Re-validation tạo bản ghi mới (xem `meta.revision`), không ghi đè lịch sử.
- **Tách state khỏi view.** Dossier không chứa HTML, màu sắc, layout. Đó là việc của `render/`.
- **Lenses là khối đính kèm tái dùng.** Một lens (vd Sáu mũ) có thể gắn vào bất kỳ stage nào qua
  `attached_to_stage`, nhưng lưu tập trung ở `lenses` để render gom lại dễ.

---

## 2. Bộ enum (từ vựng kiểm soát)

```
case_type        : A_IDEA | B_PRODUCT | C_FEATURE | D_PIVOT | E_DECISION
stage_mode       : MUST_RUN | ASSERT | SKIP
stage_status     : PENDING | RUNNING | PASSED | FAILED | REVIEW_NEEDED | ASSERTED | SKIPPED
gate_verdict     : PASS | FAIL | REVIEW
rapid_role       : RECOMMEND | AGREE | PERFORM | INPUT | DECIDE      # mô hình RAPID
verdict          : GO | NO_GO | PIVOT | PARK
decision_type    : TYPE_1 | TYPE_2                                  # Bezos: 1 = khó đảo, 2 = đảo được
risk_level       : H | M | L
assumption_status: UNTESTED | VALIDATED | INVALIDATED | PARTIAL
lens_type        : SIX_HATS | PREMORTEM | INVERSION | RED_TEAM | SECOND_ORDER | DECISION_MATRIX | PARTY_MODE | PROFIT_FIRST | PRICING | MARKETING_STRATEGY | DIGITAL_ADS
evidence_type    : MEASURED | CITED | USER_STATED | ASSUMED | UNKNOWN   # xem guardrails.md
persona_lean     : GO | NO_GO | PIVOT | PARK   # thiên hướng của mỗi persona trong Party Mode
mode             : STATEFUL | STATELESS        # xem modes.md — STATEFUL bật lớp mentor
lens_tag         : decision_gate | has_business_model | touches_pricing | touches_marketing | paid_acquisition | downstream_effects   # xem lens-registry.md
outcome_status   : TOO_EARLY | SUCCEEDED | FAILED | PIVOTED | KILLED   # chỉ STATEFUL
tripwire_status  : ARMED | TRIPPED | RESOLVED                          # chỉ STATEFUL
```

**Quy ước stage_id (cố định 0–8):**
```
0  FRAMING        đóng khung + 5W1H + giả định
1  HARD_GATE      cổng cứng nhị phân, no-LLM (Thật/Đau/Với-tới-được + portfolio/khả thi/pháp lý)
2  PROBLEM_VAL    xác thực vấn đề (The Mom Test)
3  SOLUTION_VAL   xác thực giải pháp (RAT, VPC, MVP)
4  MARKET_GTM     thị trường & định vị (TAM/SAM/SOM, beachhead, positioning)
5  BIZ_MODEL      mô hình kinh doanh (CAC/LTV, pricing, margin, payback)
6  DECISION_GATE  cổng quyết định (Sáu mũ + decision matrix + RAPID) → verdict + confidence
7  GTM_PLAN       kế hoạch GTM (chỉ khi GO)
8  LIFECYCLE      vận hành vòng đời + re-validation loop
```

---

## 3. Cấu trúc tổng thể

```jsonc
{
  "meta":      { /* định danh, version, tiêu đề */ },
  "intake":    { /* phân loại case, mục tiêu, decision makers, bản đồ đường đi */ },
  "framing":   { /* 5W1H + problem statement + assumptions */ },
  "stages":    [ /* 0..8: bản ghi từng tầng, gồm gates + score */ ],
  "lenses":    { /* khối phân tích/phản biện tái dùng */ },
  "decision":  { /* output của stage 6: verdict + confidence + journal */ },
  "coaching":  { /* lời cố vấn cho người dùng: bước đi tiếp, rủi ro cần canh, khoảng trống năng lực */ },
  "gtm_plan":  { /* sau GO, hoặc plan-mode cho sản phẩm đang sống */ },
  "lifecycle": { /* metrics, cohort, tiêu chí expand/sunset, re-validation */ },
  "render":    { /* metadata lần render, không phải nội dung HTML */ }
}
```

---

## 4. Định nghĩa từng khối

### 4.1 `meta`
| field | kiểu | mô tả |
|---|---|---|
| `schema_version` | string | SemVer, vd `"1.0.0"`. **Bắt buộc.** |
| `dossier_id` | string (uuid) | định danh duy nhất |
| `revision` | int | lần re-validation thứ mấy (0 = lần đầu) |
| `title` | string | tên ý tưởng/sản phẩm/quyết định |
| `one_liner` | string | mô tả một câu |
| `mode` | string | `STATEFUL` \| `STATELESS` (xem `modes.md`, `store.md`). Optional — thiếu thì report không hiện dòng chế độ |
| `created_at` / `updated_at` | ISO 8601 | dấu thời gian |

### 4.2 `intake`  — *nơi route đường đi và khai báo decision makers*
| field | kiểu | mô tả |
|---|---|---|
| `case_type` | enum `case_type` | agent suy luận từ mô tả, người dùng xác nhận ở bước 3 |
| `objective` | string | mục tiêu của *lần validate này* (vd "quyết định có nên build feature ZNS Designer") |
| `decision_makers` | array | `[{ "name": str, "role": rapid_role }]` → đổ vào ô **Who** của 5W1H |
| `routing` | object | `{ "<stage_id>": stage_mode }` — bản đồ MUST_RUN/ASSERT/SKIP, in ra console sau Intake |
| `tags` | array | cờ intent (`lens_tag`) → chọn lens qua `lens-registry.md`; tránh gọi lens không liên quan |

### 4.3 `framing` — *5W1H + giả định*
```jsonc
{
  "five_w_one_h": {
    "what":  "Cái gì đang được làm/đề xuất",
    "why":   "Vì sao — nỗi đau/cơ hội nền tảng",
    "who":   "Ai dùng + ai quyết (đồng bộ với intake.decision_makers)",
    "when":  "Thời điểm/tính cấp thiết",
    "where": "Bối cảnh/thị trường/kênh",
    "how":   "Cách thực hiện ở mức nguyên lý"
  },
  "problem_statement": "Phát biểu vấn đề test được, một câu",
  "assumptions": [
    { "id": "A1", "text": "...", "risk": "H", "uncertainty": "H", "status": "UNTESTED" }
  ]
}
```
> Giả định xếp ưu tiên theo `risk × uncertainty`; cái H×H chính là *riskiest assumption* cho stage 3.

### 4.4 `stages[]` — *bản ghi mỗi tầng*
```jsonc
{
  "stage_id": 1,
  "name": "HARD_GATE",
  "mode": "MUST_RUN",
  "status": "FAILED",
  "score": 0.0,                       // 0..1, để tính confidence tổng
  "gates": [
    {
      "id": "G1.1",
      "question": "Vấn đề có THẬT không?",
      "verdict": "PASS",
      "score": 1.0,
      "threshold": 1.0,               // cổng cứng = nhị phân, ngưỡng 1.0
      "evidence": "Dẫn chứng/số liệu hậu thuẫn verdict",
      "evidence_type": "MEASURED",    // MEASURED|CITED|USER_STATED|ASSUMED|UNKNOWN — xem guardrails.md
      "evidence_refs": ["url", "doc#section"]
    }
  ],
  "lenses_applied": ["PREMORTEM"],    // lens nào đã chạy ở tầng này
  "notes": "ghi chú tự do của stage",
  "ran_at": "ISO8601"
}
```
**Quy ước score → status:**
- cổng cứng (stage 1): mọi gate PASS → `PASSED`; bất kỳ FAIL → `FAILED` (dừng pipeline).
- tầng phân tích: `score ≥ threshold` → `PASSED`; `< 0.5` → `FAILED`; ở giữa → `REVIEW_NEEDED`.
- `mode=ASSERT` → status `ASSERTED` (ghi bằng chứng có sẵn, không chạy gate mới).
- `mode=SKIP` → status `SKIPPED`, gates rỗng.
- **Cap bằng chứng (guardrails.md §2):** gate `evidence_type=ASSUMED` ⇒ score ≤ 0.60, không PASS;
  `evidence_type=UNKNOWN` ⇒ score `null` + REVIEW_NEEDED. Đây là lớp chống ảo giác — bằng chứng yếu
  không thể "đậu" cổng.

### 4.5 `lenses` — *khối phân tích/phản biện tái dùng*
```jsonc
{
  "six_hats": {
    "attached_to_stage": 6,
    "white":  "Dữ liệu/facts thuần",
    "red":    "Trực giác/cảm xúc",
    "black":  "Rủi ro, điểm yếu (khối phản biện chính)",
    "yellow": "Lợi ích, lạc quan có cơ sở",
    "green":  "Phương án thay thế, sáng tạo",
    "blue":   "Điều phối: kết luận quy trình"
  },
  "swot": {                                // stage 6 — tổng hợp nội lực/bên ngoài (luôn chạy cùng bộ critique)
    "attached_to_stage": 6,
    "strengths":    [ "Nội lực đang mạnh — rút từ stages 0–5" ],
    "weaknesses":   [ "Nội lực yếu" ],
    "opportunities":[ "Cơ hội bên ngoài: thị trường, kênh, xu hướng" ],
    "threats":      [ "Đe dọa bên ngoài: đối thủ, thay thế, quy định" ]
  },
  "premortem": [
    { "failure_mode": "Cách dự án này chết", "cause": "Nguyên nhân gốc", "mitigation": "Cách giảm thiểu" }
  ],
  "inversion":   [ "Điều chắc chắn làm hỏng → cần tránh" ],
  "red_team":    [ "Lập luận phản bác mạnh nhất từ phe đối lập" ],
  "second_order":[ { "action": "...", "then": "rồi sao nữa", "and_then": "rồi sao nữa nữa" } ],
  "porter": {                              // chỉ điền khi tag competitive_landscape bật (cấu trúc ngành — Five Forces)
    "attached_to_stage": 4,
    "rivalry": "Đối thủ hiện tại: ai, mạnh/yếu gì",
    "new_entrants": "Cửa ngõ gia nhập + rào cản",
    "substitutes": "Sản phẩm/cách làm thay thế",
    "supplier_power": "Nhà cung cấp nắm gì (API nền tảng, data, hạ tầng)",
    "buyer_power": "Khách nắm thế nào (chi phí chuyển đổi, mặc cả)",
    "verdict": "Một câu: ngành thuận gió không + lực đáng sợ nhất"
  },
  "decision_matrix": {
    "attached_to_stage": 6,
    "criteria": [ { "name": "Pain fit", "weight": 0.4 } ],   // trọng số là SỐ, tổng = 1.0
    "options":  [ "Build now", "Defer", "Kill" ],
    "scores":   { "Build now": { "Pain fit": 0.8 } },        // option → criterion → 0..1
    "weighted_totals": { "Build now": 0.0 }                  // tính sẵn để render khỏi tính lại
  },
  "party_mode": {                          // tranh luận đa-persona (BMAD-style) ở cổng quyết định
    "attached_to_stage": 6,
    "panel": [
      { "persona": "Người hoài nghi", "role": "Devil's advocate", "lean": "NO_GO",
        "argument": "Lập luận của persona này", "biggest_concern": "Lo ngại lớn nhất" }
    ],
    "clashes": [                           // NƠI CÁC PERSONA XUNG ĐỘT — tín hiệu rủi ro/bất định thật
      { "between": ["Nhà kinh tế", "Người lạc quan"], "tension": "Bản chất bất đồng" }
    ],
    "synthesis": "Người điều phối tổng hợp panel nghiêng về đâu và vì sao"
  },
  "profit_first": {                        // chỉ điền khi tag has_business_model bật (mô hình có thu tiền)
    "attached_to_stage": 5,
    "unit_margin": "Lời thực mỗi khách/đơn vị sau chi phí trực tiếp (gồm AI/hạ tầng/hỗ trợ)",
    "payback_period": "Bao lâu thu hồi vốn bỏ ra để có 1 khách",
    "profitable_at_small_scale": "Có lời khi còn nhỏ không? (có/không + vì sao) — KHÔNG dựa 'một ngày nào đó scale mới có lãi'",
    "watch": "Cờ đỏ dòng tiền nếu có (biên mỏng, payback dài, chi phí A/biến đổi cao)",
    "verdict": "Một câu: lợi nhuận có được THIẾT KẾ vào từ đầu không"
  }
}
```

### 4.6 `decision` — *output của stage 6 (DECISION_GATE)*
```jsonc
{
  "verdict": "GO",                    // GO | NO_GO | PIVOT | PARK
  "confidence": 0.72,                 // 0..1, theo CÔNG THỨC CONFIDENCE bên dưới
  "confidence_threshold": 0.65,       // NGƯỠNG ĐỘNG theo decision_type (xem dưới); < ngưỡng → REVIEW_NEEDED → cổng phê duyệt con người
  "rationale": [ "Lý do 1", "Lý do 2", "Lý do 3" ],   // top 3
  "decision_type": "TYPE_1",          // Type-1 khó đảo → chạy chậm & kỹ
  "journal": {
    "decided_by": "tên (khớp decision_makers role=DECIDE)",
    "decided_at": "ISO8601",
    "key_assumptions": [ "Giả định nền của quyết định" ],
    "reversal_conditions": [ "Điều kiện sẽ khiến đảo ngược quyết định" ]  // dùng cho re-validation
  }
}
```

**CÔNG THỨC CONFIDENCE (cố định — mọi layer phải tái tạo y hệt):**
```
effective_score(stage) = score × factor
  factor = 0.85  nếu status == REVIEW_NEEDED   (chiết khấu bất định 15%)
  factor = 1.00  nếu status ∈ {PASSED, ASSERTED}
confidence = mean( effective_score ) trên các stage 0–5 có status ∈ {PASSED, ASSERTED, REVIEW_NEEDED}
             (loại SKIPPED; FAILED ở MUST_RUN nghĩa là không tới được stage 6)
làm tròn 3 chữ số, kẹp 0..1.
```
> Lý do haircut chứ không giảm trọng số: REVIEW = "bằng chứng chưa ngã ngũ". Giảm trọng số một
> tầng điểm thấp sẽ *kéo trung bình lên* (sai hướng); haircut điểm thì *kéo xuống*, đúng tinh thần
> "chưa chắc thì bớt tự tin".

**NGƯỠNG ĐỘNG theo `decision_type`:**
```
confidence_threshold = 0.75  nếu decision_type == TYPE_1   (khó đảo → đòi cơ sở cao hơn)
confidence_threshold = 0.65  nếu decision_type == TYPE_2   (đảo được → chấp nhận thấp hơn)
```
> Đây là quy tắc thứ hai cạnh confidence: một quyết định khó đảo không được "GO" chỉ vì vượt 0.65.
> Khi `confidence < confidence_threshold` ⇒ verdict không thể là `GO` sạch (→ PARK/PIVOT + REVIEW_NEEDED).

### 4.6b `coaching` — *lời cố vấn cho người dùng (không chỉ chấm điểm, mà huấn luyện)*
```jsonc
{
  "stance": "Một câu đọc thẳng: anh đang đứng ở đâu, trung thực (không nịnh, không doạ)",
  "next_moves": [
    { "action": "Việc cần làm tiếp, cụ thể", "why": "Vì sao", "tied_to": "A6" }  // neo vào assumption/gate
  ],
  "watch_risk": "MỘT rủi ro chi phối cần canh chừng nhất",
  "capability_gaps": [ "Kỹ năng/nguồn lực đội còn thiếu (neo vào founder-market fit)" ],
  "advisor_note": "Đoạn cố vấn calibrated: mang tính xây dựng, neo vào bằng chứng, không tâng bốc"
}
```
> Coaching tuân `guardrails.md`: trung thực, neo vào bằng chứng, KHÔNG trấn an giả tạo hay tâng bốc.
> Đọc verdict thành hành động: GO → cách không vấp khi launch; PARK → kế hoạch gỡ chặn; NO_GO → cứu
> được gì + học được gì + khi nào quay lại; PIVOT → xoay mà không mất đà.

### 4.7 `gtm_plan` (sau GO, hoặc plan-mode cho sản phẩm đang sống) & 4.8 `lifecycle`
```jsonc
"gtm_plan": {
  "positioning": "...", "messaging": ["..."], "beachhead": "...",
  "channels": ["..."], "launch_steps": ["..."],
  "north_star_metric": "...", "aarrr": { "acquisition": "...", "activation": "...", "retention": "...", "referral": "...", "revenue": "..." },
  "okrs": [ { "objective": "...", "key_results": ["..."] } ]
},
"lifecycle": {
  "funnel_metrics": ["..."], "cohort_retention": "...",
  "expand_criteria": ["..."], "sunset_criteria": ["..."],
  "revalidation": { "trigger": "khi nào chạy lại", "stages_to_recheck": [4,5,8] }
}
```

### 4.9 `render`
```jsonc
{ "rendered_at": "ISO8601", "output_path": "validation-report.html", "template_version": "1.0.0",
  "glossary": { "CAC": "một câu định nghĩa đời thường" } }
```
> `glossary` (optional): orchestrator đọc từ `glossary.md` và đổ vào đây trước khi render —
> **nguồn duy nhất** của bộ chú giải tooltip trong báo cáo. Template chỉ giữ bộ fallback cho
> trường hợp mở file trực tiếp không có dữ liệu này; thuật ngữ nào có trong `glossary` thì
> ghi đè fallback tương ứng.

---

## 5. Ví dụ Dossier điền đầy đủ

Ví dụ rút gọn cho **Case C — feature ZNS Designer** (lấy bối cảnh thật để dễ hình dung):

```jsonc
{
  "meta": {
    "schema_version": "1.0.0", "dossier_id": "d-9f2a", "revision": 0,
    "title": "Template Designer cho Product X",
    "one_liner": "Trình thiết kế template ZNS + gọi API gửi, tận dụng ~80% hạ tầng Product X hiện có",
    "created_at": "2026-06-13T09:00:00Z", "updated_at": "2026-06-13T09:40:00Z"
  },
  "intake": {
    "case_type": "C_FEATURE",
    "objective": "Quyết định có ưu tiên build ZNS Designer ngay trong sprint tới không",
    "decision_makers": [
      { "name": "Founder", "role": "DECIDE" },
      { "name": "Team sản phẩm", "role": "PERFORM" }
    ],
    "routing": { "0":"MUST_RUN","1":"MUST_RUN","2":"ASSERT","3":"MUST_RUN","4":"SKIP","5":"ASSERT","6":"MUST_RUN","7":"SKIP","8":"ASSERT" }
  },
  "framing": {
    "five_w_one_h": {
      "what": "UI thiết kế template ZNS + tích hợp API gửi qua Zalo OA",
      "why": "Khách hiện tại cần gửi ZNS có thương hiệu; hiện chưa tự làm được",
      "who": "SMB đang dùng Product X; người quyết: Founder",
      "when": "Sprint tới; ~2–3 tuần do hạ tầng đã sẵn",
      "where": "Thị trường VN, kênh Zalo OA",
      "how": "Tái dùng OAuth token + job queue + PostgreSQL + web framework; thêm UI designer + API calls"
    },
    "problem_statement": "Khách hiện tại không thể tự tạo và gửi template ZNS có thương hiệu trong sản phẩm.",
    "assumptions": [
      { "id": "A1", "text": "Khách hiện tại thực sự cần gửi ZNS, không chỉ chat", "risk": "H", "uncertainty": "M", "status": "PARTIAL" },
      { "id": "A2", "text": "Hạ tầng tái dùng được ~80% như ước tính", "risk": "H", "uncertainty": "L", "status": "VALIDATED" }
    ]
  },
  "stages": [
    { "stage_id": 1, "name": "HARD_GATE", "mode": "MUST_RUN", "status": "PASSED", "score": 1.0,
      "gates": [
        { "id":"G1.1","question":"Hợp portfolio Product X?","verdict":"PASS","score":1.0,"threshold":1.0,"evidence":"Là fast-follow đã nêu trong roadmap sản phẩm" },
        { "id":"G1.2","question":"Khả thi kỹ thuật <1 tháng?","verdict":"PASS","score":1.0,"threshold":1.0,"evidence":"~80% hạ tầng sẵn, ước tính 2–3 tuần" }
      ], "lenses_applied": [], "ran_at": "2026-06-13T09:10:00Z" },
    { "stage_id": 3, "name": "SOLUTION_VAL", "mode": "MUST_RUN", "status": "PASSED", "score": 0.78,
      "gates": [
        { "id":"G3.1","question":"RAT: khách sẽ dùng designer thay vì nhờ support?","verdict":"REVIEW","score":0.6,"threshold":0.65,"evidence":"Chưa có test thực, cần phỏng vấn 5 khách" }
      ], "lenses_applied": ["PREMORTEM"], "ran_at": "2026-06-13T09:25:00Z" }
  ],
  "lenses": {
    "six_hats": { "attached_to_stage": 6,
      "white": "80% hạ tầng sẵn; 2–3 tuần; chưa có số cầu thực tế",
      "red": "Cảm giác đây là quick win đáng làm",
      "black": "Rủi ro: build xong nhưng cầu ZNS thấp hơn kỳ vọng",
      "yellow": "Chi phí thấp, mở đường cho ZNS Trigger + Mini App sau",
      "green": "Phương án: thử bán trước (pre-sell) ZNS như add-on trước khi build full UI",
      "blue": "Kết luận: GO có điều kiện — kèm phỏng vấn cầu song song" },
    "premortem": [
      { "failure_mode": "Ship xong ít người dùng", "cause": "Giả định A1 chưa được xác thực", "mitigation": "Phỏng vấn 5 khách hiện tại trước khi build UI đầy đủ" }
    ],
    "decision_matrix": {
      "attached_to_stage": 6,
      "criteria": [ {"name":"Cầu thực","weight":0.4}, {"name":"Chi phí build","weight":0.3}, {"name":"Mở đường chiến lược","weight":0.3} ],
      "options": [ "Build now", "Pre-sell rồi build", "Defer" ],
      "scores": { "Build now": {"Cầu thực":0.6,"Chi phí build":0.9,"Mở đường chiến lược":0.9},
                  "Pre-sell rồi build": {"Cầu thực":0.85,"Chi phí build":0.8,"Mở đường chiến lược":0.9},
                  "Defer": {"Cầu thực":0.5,"Chi phí build":1.0,"Mở đường chiến lược":0.3} },
      "weighted_totals": { "Build now": 0.78, "Pre-sell rồi build": 0.85, "Defer": 0.59 }
    }
  },
  "decision": {
    "verdict": "GO", "confidence": 0.72, "confidence_threshold": 0.65,
    "rationale": [ "Chi phí thấp do tái dùng hạ tầng", "Mở đường cho ZNS Trigger + Mini App", "Rủi ro cầu được kiểm soát bằng pre-sell" ],
    "decision_type": "TYPE_2",
    "journal": {
      "decided_by": "Founder", "decided_at": "2026-06-13T09:40:00Z",
      "key_assumptions": [ "Cầu ZNS đủ lớn trong tập khách hiện tại" ],
      "reversal_conditions": [ "Phỏng vấn 5 khách cho thấy <2 quan tâm trả tiền cho ZNS" ]
    }
  },
  "render": { "rendered_at": "2026-06-13T09:41:00Z", "output_path": "zns-designer-validation.html", "template_version": "1.0.0" }
}
```

---

## 6. Ánh xạ sang PostgreSQL

Khi lên mini app/backend, Dossier normalize thành các bảng sau. Trường nào đa dạng/ít query
(`five_w_one_h`, lenses, gtm_plan, lifecycle) để **JSONB** cho linh hoạt; trường nào cần query/lọc
(stages, gates, decision verdict) tách bảng riêng.

```sql
-- bảng gốc: 1 dòng / 1 lần thẩm định
CREATE TABLE dossiers (
  dossier_id      UUID PRIMARY KEY,
  schema_version  TEXT NOT NULL,
  revision        INT  NOT NULL DEFAULT 0,
  title           TEXT NOT NULL,
  one_liner       TEXT,
  case_type       TEXT NOT NULL,          -- enum case_type
  objective       TEXT,
  routing         JSONB NOT NULL,         -- { "0":"MUST_RUN", ... }
  framing         JSONB,                  -- five_w_one_h + problem_statement
  lenses          JSONB,                  -- toàn bộ khối lenses
  gtm_plan        JSONB,
  lifecycle       JSONB,
  -- summary của decision (denormalize để query nhanh):
  verdict         TEXT,                   -- enum verdict
  confidence      NUMERIC(4,3),
  decision_type   TEXT,
  decision_journal JSONB,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE decision_makers (
  id          BIGSERIAL PRIMARY KEY,
  dossier_id  UUID REFERENCES dossiers(dossier_id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  rapid_role  TEXT NOT NULL              -- enum rapid_role
);

CREATE TABLE assumptions (
  id          TEXT,                       -- "A1"
  dossier_id  UUID REFERENCES dossiers(dossier_id) ON DELETE CASCADE,
  text        TEXT NOT NULL,
  risk        CHAR(1),                    -- H/M/L
  uncertainty CHAR(1),
  status      TEXT,                       -- enum assumption_status
  PRIMARY KEY (dossier_id, id)
);

CREATE TABLE stages (
  id          BIGSERIAL PRIMARY KEY,
  dossier_id  UUID REFERENCES dossiers(dossier_id) ON DELETE CASCADE,
  stage_id    INT  NOT NULL,             -- 0..8
  name        TEXT NOT NULL,
  mode        TEXT NOT NULL,             -- enum stage_mode
  status      TEXT NOT NULL,             -- enum stage_status
  score       NUMERIC(4,3),
  notes       TEXT,
  lenses_applied JSONB,
  ran_at      TIMESTAMPTZ,
  UNIQUE (dossier_id, stage_id)
);

CREATE TABLE gates (
  id            BIGSERIAL PRIMARY KEY,
  stage_row_id  BIGINT REFERENCES stages(id) ON DELETE CASCADE,
  gate_id       TEXT NOT NULL,           -- "G1.1"
  question      TEXT NOT NULL,
  verdict       TEXT NOT NULL,           -- enum gate_verdict
  score         NUMERIC(4,3),
  threshold     NUMERIC(4,3),
  evidence      TEXT,
  evidence_refs JSONB
);
```

### Bảng bổ sung cho STATEFUL (lớp mentor — xem `mentor-layer.md`)
Chỉ tồn tại ở mode STATEFUL (bản có backend / private). STATELESS không tạo các bảng này.

```sql
CREATE TABLE outcomes (
  dossier_id  UUID PRIMARY KEY REFERENCES dossiers(dossier_id) ON DELETE CASCADE,
  status      TEXT NOT NULL,          -- enum outcome_status
  notes       TEXT,
  predicted_confidence NUMERIC(4,3),  -- copy lúc quyết, để calibrate
  predicted_verdict    TEXT,
  recorded_at TIMESTAMPTZ
);

CREATE TABLE tripwires (              -- reversal_conditions được theo dõi
  id          BIGSERIAL PRIMARY KEY,
  dossier_id  UUID REFERENCES dossiers(dossier_id) ON DELETE CASCADE,
  condition   TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'ARMED',  -- enum tripwire_status
  tripped_at  TIMESTAMPTZ
);

CREATE TABLE founder_profile (        -- semantic: 1 dòng / người dùng
  user_id     TEXT PRIMARY KEY,
  profile     JSONB NOT NULL,         -- recurring_blind_spots, calibration_tendency, discipline_score...
  updated_at  TIMESTAMPTZ
);

CREATE TABLE calibration_report (     -- semantic: lịch sử hiệu chỉnh
  user_id     TEXT,
  report      JSONB NOT NULL,         -- bins, brier_score, recommended_threshold_shift
  computed_at TIMESTAMPTZ
);
```

> **Ghi chú backend:** vì backend có thể chạy trên agent framework + job queue + cổng phê duyệt con người, không nhất thiết phải
> dùng schema SQL ngay — crew có thể giữ Dossier dạng JSONB trong một bảng `crew_artifacts`
> và chỉ trích `verdict`/`confidence` ra cột để dashboard query. `confidence < threshold`
> chính là điều kiện kích hoạt cổng phê duyệt con người.

---

## 7. Quy ước đọc/ghi cho từng layer

| Layer | Lưu Dossier ở đâu | Ai điều phối | Ai render |
|---|---|---|---|
| **Skill** (hiện tại) | file `*.dossier.json` trong workspace | orchestrator `validate` (SKILL.md) | skill `render/` → HTML |
| **Mini app** | bảng PostgreSQL (mục 6) | state machine (TypeScript) | cùng `render/template.html` |
| **Backend** | JSONB trong một bảng artifacts | agent framework (mỗi stage = 1 task) | render task cuối, hoặc service riêng |

**Bất biến cho cả 3 layer (giữ đúng thì không phải viết lại lõi):**
1. Stage chỉ đọc/ghi Dossier — **không** in HTML, **không** nói trực tiếp với người dùng.
2. `schema_version` luôn được ghi và được kiểm khi đọc.
3. Ngưỡng/trọng số luôn là số trong Dossier, không hardcode rải rác trong logic trình bày.
4. `confidence < confidence_threshold` ⇒ trạng thái cần-người-duyệt (chat review / cổng phê duyệt con người).
