---
name: validate-decision-gate
description: Stage 6 of the validation pipeline — the decision gate. Use this whenever an idea/product/feature/decision has cleared the upstream stages and needs a Go/No-go/Pivot/Park verdict with a confidence score. Triggers when the user asks to "make the call", "should we build/ship/kill this", run a decision review, or when the orchestrator routes to DECISION_GATE. This is the stage that applies Six Thinking Hats, a weighted decision matrix, pre-mortem/inversion/red-team critique, and RAPID roles, then writes verdict + confidence + decision journal into the Dossier. Always use this rather than improvising a verdict, so the decision is evidence-based, reversible-aware, and recorded.
---

# Decision Gate (Stage 6)

This is the heaviest stage. Its job: take everything the upstream stages put into the
**Validation Dossier**, run it through structured decision lenses, and emit a defensible
**verdict + confidence + journal**. It does NOT gather new market/problem evidence — it
*synthesizes* what stages 0–5 already recorded.

Read `dossier-schema.md` first if the Dossier structure isn't already in context. This stage
only reads/writes the Dossier — it never prints HTML or designs output. Rendering is a
separate step.

## When this stage runs

The orchestrator routes here after upstream stages are `PASSED`, `ASSERTED`, or `REVIEW_NEEDED`.
If any MUST_RUN hard gate (stage 1) is `FAILED`, do not run this stage — the verdict is already
forced to `NO_GO` and the pipeline stopped earlier.

## Procedure

Work through these steps in order. After each major step, print one console line (see
[Console output](#console-output)). Write results into the Dossier as you go.

### Step 1 — Gather the evidence ledger
Pull every non-skipped stage from `stages[]`. For each, note its `score`, `status`, and the
gates that drove it. Hold this in mind as the factual basis — you will not invent evidence
beyond it. If a critical stage is missing evidence, flag it; weak evidence must lower
confidence, not be papered over.

### Step 2 — Six Thinking Hats (parallel structured review)
Fill `lenses.six_hats` with `attached_to_stage: 6`. Each hat is one disciplined pass over the
same evidence — do not mix them. See `../../lenses/six-hats.md` for depth; the essentials:

- **white** — facts and numbers only, including what data is *missing*. No interpretation.
- **red** — gut/emotional read, stated as such ("this feels like a quick win"). No justification.
- **black** — risks, weaknesses, failure modes. This is the spine of the critique block; be rigorous.
- **yellow** — benefits and upside, but grounded (not wishful).
- **green** — alternative options and creative reframes (e.g. pre-sell before building).
- **blue** — process conclusion: what the hats collectively point to.

### Step 2b — Party Mode (multi-persona debate)
Default ON (cost is cheap vs a failed idea). Convene a panel of 5–6 personas with distinct stakes and
biases, let them DISAGREE, and capture where they clash. Fill `lenses.party_mode` — see
`../../lenses/party-mode.md`. Unlike Six Hats (modes of one mind), these are roles that can conflict;
the clashes are the most valuable output — they mark where real risk/uncertainty lives.

Each persona gives a `lean` (GO/NO_GO/PARK/PIVOT), an `argument`, and a `biggest_concern`. Keep the
voices genuinely different — don't let them all agree. Record `clashes` (which personas conflict and
why) and a chair's `synthesis`. A sharply divided panel is itself a signal that confidence should be
lower / more evidence is needed. Party Mode does not set the verdict — it feeds Step 7.

### Step 2c — SWOT (bản đồ nội lực vs bên ngoài)
Fill `lenses.swot` (`attached_to_stage: 6`) — see `../../lenses/swot.md`. Two to four short bullets
per quadrant. S/W synthesize what stages 0–5 already recorded (internal — what we control); O/T scan
outside (market, competitors, substitutes, regulation) with evidence discipline — external claims
follow the two-source rule (`guardrails.md` §8) or carry weak-evidence tags. The O quadrant is the
new ground here: yellow hat covers benefits of proceeding, not market opportunities. SWOT feeds
Step 4's matrix and Step 7's rationale — it does not set the verdict itself.

### Step 3 — Critique lenses (how this dies)
This block must be substantive — the report surfaces it prominently. Fill:

- `lenses.premortem` — assume it has already failed; list each failure_mode → cause → mitigation.
  Anchor causes to the highest `risk × uncertainty` assumptions from `framing.assumptions`.
- `lenses.inversion` — what would *guarantee* failure, stated so it can be avoided.
- `lenses.red_team` — the strongest argument the opposition would make against proceeding.
- `lenses.second_order` — **chỉ khi tag `downstream_effects` bật** (`../../lens-registry.md`;
  tag tắt → không gọi, không ghi gì): với mỗi hành động chính của quyết định, truy "rồi sao nữa?"
  hai bậc (`action → then → and_then`) — phản ứng đối thủ, thay đổi hành vi khách, hệ quả lên các
  sản phẩm khác trong portfolio. Đặc biệt soi kỹ với quyết định Type-1. Xem `../../lenses/second-order.md`.

See `../../lenses/premortem.md`, `inversion.md`, `red-team.md` for technique. A decision gate that
produces no real critique has not done its job.

### Step 4 — Weighted decision matrix
Fill `lenses.decision_matrix` (`attached_to_stage: 6`):

1. Define `criteria` with **numeric weights summing to 1.0**. Reuse domain weights where they
   exist (e.g. for buyability-style calls: pain fit 0.4, health/spend 0.3, channel 0.2, intent 0.1).
2. List `options` — always include a "do nothing / defer" option and a "kill" option, not just
   variants of "yes".
3. Score each option against each criterion on 0..1 in `scores`.
4. **Compute `weighted_totals` yourself**: for each option, Σ(score × weight). Write the numbers in.
   The renderer will independently recompute and flag any mismatch, so the math must be correct.

The highest weighted total is a strong signal but not a binding rule — the hats and critique can
override it (and if they do, say why in `decision.rationale`).

### Step 4b — Coherence check (giá ↔ GTM ↔ marketing)
When the decision touches pricing, GTM, or marketing, check the three are consistent — they couple:
changing price changes the CAC you can afford, which changes which channels are viable. Flag any
contradiction (e.g. a low price that no channel's CAC can sustain) rather than validating each in isolation.

### Step 5 — Compute confidence
`decision.confidence` = mean of **effective_score** across all stages 0–5 whose status is in
{`PASSED`, `ASSERTED`, `REVIEW_NEEDED`} (exclude `SKIPPED`; a `FAILED` MUST_RUN stage means you
shouldn't be here), where:

```
effective_score = score × 0.85   if status == REVIEW_NEEDED   (15% uncertainty haircut)
effective_score = score × 1.00   if status in {PASSED, ASSERTED}
```

Haircut, not down-weight: a REVIEW stage means "evidence not yet settled", so discount its score
(pulls confidence *down*); merely reducing its weight would pull the mean *up* — the wrong way.
Clamp to 0..1, round to 3 decimals. Keep this formula identical everywhere so the mini app and any backend
reproduce the same number.

### Step 6 — Set threshold (dynamic) and classify reversibility
Set `decision.decision_type` first, then derive the threshold from it:

```
TYPE_2 — cheaply reversible ("two-way door"): confidence_threshold = 0.65. Bias toward deciding fast.
TYPE_1 — hard to reverse ("one-way door": pivots, public commitments, irreversible spend):
         confidence_threshold = 0.75. Demand a higher bar and a fuller critique before GO.
```

If `confidence < confidence_threshold`, the verdict cannot be a clean `GO` — fall to `PARK` or
`PIVOT` and mark the stage `REVIEW_NEEDED` (route to a human approval gate). Do not round up to
clear the bar. State the reversibility reasoning in the rationale when it drives the call.

### Step 7 — Emit the verdict
Write `decision`:
- `verdict` — `GO` | `NO_GO` | `PIVOT` | `PARK`.
  - `GO` — evidence + confidence clear the bar; proceed (continue to stages 7–8).
  - `NO_GO` — kill. Record why in rationale so it isn't re-litigated.
  - `PIVOT` — the problem is real but this solution/segment is wrong; route back to stage 0 with
    prior evidence carried in.
  - `PARK` — promising but blocked on a missing input; record the unblock condition.
- `rationale` — the **top 3** reasons, plain language. If the verdict contradicts the matrix
  winner, the first reason must explain that.
- `journal` — `decided_by` (the person whose `intake.decision_makers` role is `DECIDE`),
  `decided_at`, `key_assumptions` (what the verdict rests on), and `reversal_conditions`
  (the tripwires that should trigger re-validation — these feed `lifecycle.revalidation`).

### Step 8 — Coaching (turn the verdict into guidance)
Don't stop at a verdict — coach the founder. Fill the top-level `coaching` block. Follow
`guardrails.md`: honest and evidence-anchored, never flattery or false reassurance. Read the verdict
into action:
- `stance` — one honest line on where they stand. Calibrate to verdict (GO → don't fumble the launch;
  PARK → here's the unblock; NO_GO → what to salvage + what was learned + when to revisit;
  PIVOT → pivot without losing momentum).
- `next_moves` — the 2–3 highest-leverage actions, ordered, each `tied_to` a specific assumption/gate
  (e.g. climb the validation ladder's next rung from `solution-val`).
- `watch_risk` — the single dominant risk from the analysis (often the Party Mode clash or the top
  pre-mortem failure mode).
- `capability_gaps` — skills/resources the team lacks, anchored to founder-market-fit findings.
- For models with real economics (tag `has_business_model` on), **write the structured `lenses.profit_first` block** (`attached_to_stage: 5`, fields per `dossier-schema.md`: `unit_margin`, `payback_period`, `profitable_at_small_scale`, `watch`, `verdict`) so the report shows a dedicated "có lời" section — don't only bury it in coaching. Then also fold a one-line **Profit First** angle into coaching (`../../lenses/profit-first.md`): design profit in (profitable at small scale, owner paid) rather than chasing scale to someday-profit — especially apt for owner-operated / VN SMB contexts. If margin/payback inputs are unknown, fill the fields with what's missing and mark it (don't fabricate numbers — `guardrails.md`).
- `advisor_note` — a short, constructive paragraph in an advisor's voice: where they stand, what would
  change the call, and honest encouragement that doesn't inflate the evidence. If the low-n confidence
  flag is on (only 1–2 scored stages, e.g. repricing), say so here — frame the recommendation as
  provisional, not a confident verdict.

When the decision touches **pricing, GTM, or marketing**, coaching also:
- surfaces any **coherence contradiction** (Step 4b) as a watch_risk or next_move — don't let a
  price↔channel mismatch stay buried in the analysis;
- recognizes **data/process gaps** in `capability_gaps`, not just team-skill gaps — e.g. "pricing on gut,
  WTP never measured", "no per-channel CAC tracking";
- points `next_moves` at the cheapest next experiment for the domain (the validation ladder applied to
  price/marketing) — e.g. run a Van Westendorp survey, test one channel's CAC before scaling spend.

## Console output

Stream one line per step; no long prose. Keep it scannable:

```
[Tầng 6 · Decision Gate] tổng hợp 5 tầng có bằng chứng
  · Sáu mũ ✓  · Party Mode: panel 6 vai, 2 điểm xung đột  · Pre-mortem 2 failure modes
  · Matrix: "Pre-sell rồi build" dẫn (0.85)  · Confidence 0.72 ≥ 0.65 · Type-2
  → VERDICT: GO (0.72)  · Coaching: 3 bước đi tiếp, rủi ro canh: <…>
```

If confidence falls below threshold:
```
  · Confidence 0.58 < 0.65 → REVIEW_NEEDED, chuyển người duyệt
  → VERDICT tạm: PARK. Coaching: gỡ chặn bằng <…>
```

## What this stage writes (summary)
- `lenses.six_hats`, `lenses.party_mode`, `lenses.premortem`, `lenses.inversion`, `lenses.red_team`, `lenses.second_order` (chỉ khi tag `downstream_effects`), `lenses.swot`, `lenses.decision_matrix`
- `decision.*` (verdict, confidence, confidence_threshold, rationale, decision_type, journal)
- `coaching.*` (stance, next_moves, watch_risk, capability_gaps, advisor_note)
- the stage's own entry in `stages[]` (`stage_id: 6`, status, score, `lenses_applied`)

Do not touch other stages' records. Do not render. Hand control back to the orchestrator, which
decides whether to proceed to stage 7 (only on `GO`) or stop and trigger rendering.
