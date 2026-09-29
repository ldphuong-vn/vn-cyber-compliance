# validate-suite

> **A decision library for your AI agents.** Point it at any idea, feature, pricing, or GTM decision and it
> runs the case through a **9-stage, evidence-gated pipeline** — SWOT, Five Forces, premortem, red-team and
> nine other critique lenses — then hands you a plain-language HTML dossier ending in
> **Go / No-go / Pivot / Park**, with an honest confidence score and concrete coaching.

**🌐 Language:** [English](#english) · [Tiếng Việt](#tiếng-việt)

---

## English

### Who it's for

- **Solo founders** with no board to bounce ideas off — get a second opinion that always asks *"where's the evidence?"*
- **Product managers** defending a roadmap — replace "I think we should build X" with a defensible, scored case
- **Anyone pre-GTM** — stress-test pricing, a new channel, or a beachhead before spending money on it
- **Small-business owners & consultants** — one repeatable process instead of ad-hoc analysis for every big call

### Why not just ask your AI "should we do this?"

Because you'll get a fluent, confident essay — and AI models are known to invent plausible numbers (TAM, CAC,
conversion) when none exist. `validate-suite` exists to prevent exactly that:

- **Evidence discipline** — every score is tagged with where it came from, and weak evidence *automatically*
  caps scores and drags confidence down. A confident "GO" can never rest on guesses.
- **Gates, not vibes** — cheap binary gates kill bad ideas in minutes, before any expensive analysis.
- **Structured critique instead of one voice** — Six Thinking Hats, a multi-persona debate, premortem,
  inversion, red-team, weighted matrix, SWOT, Porter's Five Forces.
- **Self-verifying report** — the HTML recalculates every score and confidence *in your browser* and flags any
  mismatch, so the numbers you read are numbers that add up.

### How a run works

1. **Say it naturally:** *"should we build feature X this sprint?"* · *"validate ý tưởng X"* ·
   *"stress-test this pricing change"* · *"should we kill feature Y"*
2. The skill classifies your case (new idea / live product / feature / pivot / point decision) and prints the
   stages it will run — you confirm before anything starts.
3. It walks the applicable stages, one console line each, always citing evidence type.

| Stage | Question it answers |
|---|---|
| 0 · Framing | What exactly are we deciding? (5W1H + riskiest assumptions) |
| 1 · Hard gate | Real? Painful? Reachable? Legal? (binary — one FAIL stops the run) |
| 2 · Problem | Is the pain verified (Mom Test), is there willingness to pay? |
| 3 · Solution | Is the riskiest assumption tested at the cheapest rung? |
| 4 · Market & GTM | Beachhead, positioning, channels (+ Five Forces when competition matters) |
| 5 · Business model | Unit economics close? Profit designed in from small scale? |
| 6 · Decision gate | All lenses → verdict + confidence + coaching |
| 7 · GTM plan | (on GO) messaging, launch steps, AARRR, OKRs |
| 8 · Lifecycle | Funnel metrics, expand/sunset criteria, re-validation loop |

4. You get a **verdict + confidence + coaching** and an **HTML dossier** (plus a `*.dossier.json` data file).

### The evidence rules (the anti-hallucination core)

| Evidence type | Meaning | Effect |
|---|---|---|
| `MEASURED` | First-party data: analytics, sales, done interviews | Free to score |
| `CITED` | External sources with references (2 independent sources for market claims) | Free to score |
| `USER_STATED` | The founder's own estimate | Free to score |
| `ASSUMED` | The agent's inference, labeled as such | Score capped ≤ 0.60, can never PASS a gate |
| `UNKNOWN` | No basis at all | No score, marked "missing input" |

A verdict whose support leans on assumptions is **hard-capped at PARK** — the report says plainly what
evidence to collect next. The report's evidence legend teaches non-expert readers these colors in one line.

### Inside the report

Written for people who don't read dashboards for a living, in 4 chapters that mirror how you'd actually decide:

1. **Conclusion** — the question being validated, the verdict in plain words ("Cứ tiến hành — canh chừng
   rủi ro ở chương 3"), and an advisor's coaching block.
2. **Why** — stage-by-stage evidence with a color legend (measured / cited / user-stated / assumed / unknown)
   and the assumption table with the riskiest row highlighted.
3. **Risks & critique** — how this dies (premortem), strongest opposition, persona debate, SWOT, Five Forces,
   the weighted option matrix.
4. **What next** — launch stepper, North Star + AARRR funnel, expand/sunset branches, decision journal.

The report also **verifies itself**: weighted totals and the confidence formula are recomputed in-browser —
any mismatch shows a red warning instead of a green check. Every technical term gets a plain-language tooltip.

### Two modes

| Mode | For | Memory |
|---|---|---|
| `STATELESS` | one-off, incognito, or public deployments | none — a clean snapshot, thresholds stay population defaults |
| `STATEFUL` | your private use | file store at `~/.validate-suite/`: decision ledger, outcome tracking, tripwires, founder profile, calibration |

STATEFUL needs **no database**: a file store is the default backend (see `store.md`). It turns the validator
into a mentor — each run is journaled, reversal conditions become tripwires, and at the start of your next
session it nudges you for outcomes ("that pilot you said would show traction 60 days ago — how did it go?").
A PostgreSQL backend remains the path for future multi-user mini-apps (same interface).

### Install (works with many AI agents)

The skill follows the open **Agent Skills** standard (`SKILL.md` + folder), supported by Claude Code,
Codex CLI, Gemini CLI, Cursor, Copilot, Windsurf and others. Drop the `validate-suite/` folder into
your agent's skills directory:

| Agent | Skills directory |
|---|---|
| Claude Code | `~/.claude/skills/validate-suite/` (project: `.claude/skills/`) |
| Gemini CLI | `~/.gemini/skills/validate-suite/` |
| Codex CLI | `~/.codex/skills/validate-suite/` |
| Cursor | `~/.cursor/skills/validate-suite/` — or read directly from `~/.claude/skills/` / `.codex/skills/` |

> **One copy, many agents:** keep a single master copy and symlink/junction it into each agent's
> skills directory instead of duplicating.

> Cloning this repo? The repo root *is* the skill (entry: `SKILL.md`).

Open your agent — the skill is auto-detected. No database, no service, nothing else to install.

### Honesty limits (stated up front)

- The verdict is only as good as the evidence you feed it; the pipeline's job is to make that visible, not to
  conjure certainty.
- Calibration ("it knows your blind spots") needs ~15–20 decided-and-resolved decisions before it reports
  numbers — until then the mentor plants seeds, it doesn't read minds.
- This is decision support, not legal or financial advice.

### Structure

```
SKILL.md             # orchestrator: classify + route the stages (+ STATEFUL heartbeat)
modes.md             # STATELESS vs STATEFUL contract
store.md             # the backend-agnostic store (file backend default, PostgreSQL later)
guardrails.md        # evidence discipline & no-fabrication rules
lens-registry.md     # intent layer: tag → lens (only relevant lenses run)
dossier-schema.md    # the Dossier data structure (single source of truth)
glossary.md          # plain-language glossary of every term
mentor-layer.md      # memory / calibration layer (STATEFUL only)
stages/<0..8>/       # 9 stages: framing → hardgate → … → decision → gtm → lifecycle
lenses/              # 13 critique lenses (six-hats, party-mode, premortem, swot, porter, pricing…)
render/template.html # the self-verifying HTML report (4 chapters, plain-language)
```

### License

MIT — see [LICENSE](LICENSE).

---

## Tiếng Việt

### Dành cho ai

- **Solo founder** không có hội đồng phản biện — có một "ý kiến thứ hai" luôn hỏi *"bằng chứng đâu?"*
- **Product manager** bảo vệ roadmap — thay "anh nghĩ nên build X" bằng một luận điểm có điểm số, bảo vệ
  được trước leadership
- **Ai sắp làm GTM** — stress-test định giá, kênh mới, beachhead trước khi chi tiền
- **Chủ doanh nghiệp nhỏ & tư vấn** — một quy trình lặp lại được cho mọi quyết định lớn

### Vì sao không hỏi thẳng AI "có nên làm không?"

Vì bạn sẽ nhận được một bài văn trôi chảy, tự tin — và AI nổi tiếng là **bịa số nghe hợp lý** (TAM, CAC,
tỉ lệ chuyển đổi) khi không có số thật. `validate-suite` sinh ra để chặn đúng chuyện đó:

- **Kỷ luật bằng chứng** — mỗi điểm số gắn nguồn gốc; bằng chứng yếu *tự động* bị cap điểm và kéo độ tin cậy
  xuống. Một "Tiến hành" tự tin không bao giờ dựa trên phỏng đoán.
- **Cổng, không cảm tính** — cổng cứng nhị phân giết ý tưởng dở trong vài phút, trước mọi phân tích đắt đỏ.
- **Phản biện cấu trúc, không một giọng nói** — Sáu mũ, hội đồng đa-persona, mổ xẻ trước, nghĩ ngược,
  phản biện gắt, ma trận phương án, SWOT, Five Forces.
- **Báo cáo tự kiểm chứng** — file HTML tự tính lại mọi tổng điểm và confidence ngay trong trình duyệt; lệch
  là hiện cảnh báo đỏ, không phải dấu tick xanh.

### Một lượt chạy diễn ra thế nào

1. **Nói tự nhiên:** *"validate ý tưởng X"* · *"có nên build tính năng X trong sprint này?"* ·
   *"thẩm định phương án định giá mới"* · *"có nên kill tính năng Y?"*
2. Skill phân loại tình huống (ý tưởng mới / sản phẩm đang chạy / tính năng / pivot / quyết định điểm) và in
   ra các tầng sẽ chạy — anh xác nhận rồi mới bắt đầu.
3. Chạy từng tầng, mỗi tầng một dòng console, luôn kèm loại bằng chứng.

| Tầng | Trả lời câu hỏi |
|---|---|
| 0 · Đóng khung | Mình đang quyết cái gì? (5W1H + giả định rủi ro nhất) |
| 1 · Cổng cứng | Thật? Đau? Với tới được? Hợp pháp? (nhị phân — FAIL một cổng là dừng) |
| 2 · Vấn đề | Nỗi đau được kiểm chứng chưa (Mom Test), khách có sẵn sàng trả tiền? |
| 3 · Giải pháp | Giả định rủi ro nhất đã được test ở bậc rẻ nhất chưa? |
| 4 · Thị trường & GTM | Beachhead, định vị, kênh (+ Five Forces khi cạnh tranh là then chốt) |
| 5 · Mô hình KD | Kinh tế đơn vị đóng được? Lời được thiết kế từ quy mô nhỏ? |
| 6 · Cổng quyết định | Toàn bộ lens → verdict + confidence + coaching |
| 7 · Kế hoạch GTM | (khi GO) thông điệp, bước launch, AARRR, OKR |
| 8 · Vòng đời | Chỉ số phễu, tiêu chí mở rộng/thu hẹp, vòng tái thẩm định |

4. Nhận về **verdict + độ tin cậy + lời cố vấn** và một **báo cáo HTML** (kèm file dữ liệu `*.dossier.json`).

### Quy tắc bằng chứng (lõi chống ảo giác)

| Loại bằng chứng | Nghĩa | Hệ quả |
|---|---|---|
| `MEASURED` | Số liệu first-party: analytics, doanh số, phỏng vấn đã làm | Chấm tự do |
| `CITED` | Nguồn ngoài có dẫn chứng (quy mô thị trường cần ≥2 nguồn độc lập) | Chấm tự do |
| `USER_STATED` | ước lượng của chính anh | Chấm tự do |
| `ASSUMED` | suy luận của agent, nói rõ là giả định | Cap ≤ 0.60, không bao giờ PASS cổng |
| `UNKNOWN` | không có cơ sở | Không chấm, ghi "thiếu đầu vào" |

Verdict mà chống lưng chủ yếu bằng giả định sẽ **bị chặn cứng ở Tạm gác (PARK)** — báo cáo nói thẳng cần
thu thập thêm bằng chứng gì. Legend màu ngay đầu chương 2 dạy người không chuyên đọc được 5 màu này trong
một dòng.

### Trong báo cáo có gì

Viết cho người không đọc dashboard hàng ngày, chia 4 chương đúng cách một người ra quyết định:

1. **Kết luận** — câu hỏi đang được thẩm định, verdict bằng lời đời thường ("Cứ tiến hành — canh chừng rủi ro
   ở chương 3"), và khối lời cố vấn.
2. **Vì sao** — bằng chứng từng tầng kèm legend màu + bảng giả định, dòng rủi ro nhất tô đỏ.
3. **Rủi ro & phản biện** — cách dự án này chết (premortem), phe phản đối mạnh nhất, hội đồng persona, SWOT,
   Five Forces, ma trận phương án.
4. **Làm gì tiếp** — stepper bước launch, North Star + phễu AARRR, hai nhánh mở rộng/thu hẹp, nhật ký quyết định.

Báo cáo còn **tự verify chính nó**: tổng điểm và công thức confidence được tính lại trong trình duyệt — lệch
thì hiện cảnh báo, không phải tick xanh. Mọi thuật ngữ đều có tooltip giải thích đời thường.

### Hai chế độ

| Chế độ | Dùng cho | Trí nhớ |
|---|---|---|
| `STATELESS` | dùng một lần, incognito, bản public | không — một ảnh chụp sạch, ngưỡng mặc định quần thể |
| `STATEFUL` | bản private của anh | file store tại `~/.validate-suite/`: sổ quyết định, outcome, tripwire, hồ sơ người dùng, calibration |

STATEFUL **không cần database**: backend mặc định là file store (xem `store.md`). Nó biến validator thành
mentor — mỗi lần chạy được ghi sổ, điều kiện đảo ngược thành tripwire, và đầu phiên sau nó chủ động hỏi kết
quả ("pilot anh hẹn ra traction 60 ngày trước — giờ ra sao rồi?"). PostgreSQL vẫn là đích cho mini-app đa
người dùng sau này (cùng interface).

### Cài đặt (chạy được trên nhiều agent AI)

Bộ tuân theo chuẩn mở **Agent Skills** (thư mục + `SKILL.md`) mà Claude Code, Codex CLI, Gemini CLI,
Cursor, Copilot, Windsurf... đều hỗ trợ. Thả thư mục `validate-suite/` vào thư mục skills của agent đang dùng:

| Agent | Thư mục skills |
|---|---|
| Claude Code | `~/.claude/skills/validate-suite/` (trong dự án: `.claude/skills/`) |
| Gemini CLI | `~/.gemini/skills/validate-suite/` |
| Codex CLI | `~/.codex/skills/validate-suite/` |
| Cursor | `~/.cursor/skills/validate-suite/` — hoặc đọc thẳng từ `~/.claude/skills/` / `.codex/skills/` |

> **Một bản, nhiều agent:** giữ đúng MỘT bản gốc rồi symlink/junction vào thư mục skills của từng
> agent, thay vì copy nhiều bản.

> Clone repo này? Gốc repo *chính là* skill (entry: `SKILL.md`).

Mở agent của anh — skill tự được nhận diện. Không cần database, không service, không cài thêm gì.

### Nói thẳng về giới hạn

- Verdict chỉ tốt bằng bằng chứng anh đưa vào — việc của pipeline là làm điều đó nhìn thấy được, không phải
  tạo ra sự chắc chắn ảo.
- Calibration ("biết điểm mù của anh") cần ~15–20 quyết định đã có kết quả mới ra số — trước đó mentor gieo
  hạt, chưa "đọc vị" được anh.
- Đây là công cụ hỗ trợ quyết định, không phải tư vấn pháp lý hay tài chính.

### Cấu trúc

```
SKILL.md             # orchestrator: phân loại + điều phối tầng (+ heartbeat của STATEFUL)
modes.md             # hợp đồng STATELESS vs STATEFUL
store.md             # hợp đồng store (backend file mặc định, PostgreSQL sau này)
guardrails.md        # kỷ luật bằng chứng & chống bịa số
lens-registry.md     # lớp intent: tag → lens (chỉ gọi lens liên quan)
dossier-schema.md    # cấu trúc dữ liệu Dossier (single source of truth)
glossary.md          # từ điển thuật ngữ đời thường
mentor-layer.md      # lớp trí nhớ/hiệu chỉnh (chỉ STATEFUL)
stages/<0..8>/       # 9 tầng: framing → hardgate → … → decision → gtm → lifecycle
lenses/              # 13 lens phản biện (six-hats, party-mode, premortem, swot, porter, pricing…)
render/template.html # báo cáo HTML tự verify (4 chương, ngữ cảnh đời thường)
```

### Giấy phép

MIT — xem [LICENSE](LICENSE).
