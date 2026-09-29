---
name: validate-biz-model
description: Stage 5 of the validation pipeline — business model viability. Use to check unit economics: CAC/LTV, pricing, margin, and payback period. Triggers when the orchestrator routes to BIZ_MODEL. Always run before a Go decision on anything with real spend — a validated problem with broken economics is still a No-go.
---

# Business Model (Stage 5)

Do the economics work? Read `dossier-schema.md` if needed. Write only into the Dossier. Do not render.
This is not a legal/financial recommendation — it surfaces the numbers for the decider.

## Procedure
1. **Pricing** — what will the beachhead actually pay, anchored to the value/pain from stages 2–3.
2. **CAC / LTV** — cost to acquire vs lifetime value; LTV:CAC and the direction of the ratio matter
   more than precise figures early on.
3. **Margin** — gross margin per unit/seat, including hidden costs (support, infra, hardware).
4. **Payback** — months to recover CAC. Long payback + long sales cycle = cash risk; flag it loudly.

State every number as an estimate with its assumption; thin/unknown economics must lower the score,
not be optimistically filled.

## Profit First check (Mike Michalowicz)
Beyond *measuring* economics, check whether profit is *designed in*. See `../../lenses/profit-first.md`.
Apply by default for owner-operated / bootstrapped / cash-tight businesses (the VN SMB context);
flag — don't blindly penalize — when a scale-first ("grow now, profit later") path is a deliberate bet.
Ask: reverse formula (profit-first vs profit-as-leftover?), profitable at the *smallest* viable scale
(not only "at scale"?), does it pay the owner real cash, and do the target allocation percentages
(Profit / Owner's Pay / Tax / OpEx) actually work for this revenue band?

## Gate
`G5.1` — Do the unit economics close (or have a credible path to closing)? Score 0..1.
`threshold: 0.6`. Thin margin / unproven CAC → REVIEW_NEEDED or low score.

`G5.2` — **Profit First:** is profit designed in (profitable at small scale, owner paid, allocations
realistic) rather than deferred to future scale? Score 0..1. `threshold: 0.6`. "Profitable once we're
big" → low score, unless a scale-first bet is explicitly chosen (then flag the cash-flow tradeoff).

`G5.3` — **Pricing strategy** (run when the decision touches price; see `../../lenses/pricing.md`):
is price anchored to value (not just cost/competitor), is the price *metric/packaging* right (does it
scale with the customer's success?), and is willingness-to-pay evidenced rather than guessed? Score
0..1. `threshold: 0.6`. For an existing product (e.g. repricing), this is mostly an audit of whether
the tier structure maps to value delivered. Untested WTP → `ASSUMED`, capped.

`G5.4` — **Paid economics** (run ONLY when paid digital ads are a real part of acquisition; see
`../../lenses/digital-ads.md`; otherwise SKIP — do not create this gate for non-ads cases): is LTV:CAC
healthy and payback acceptable *at the real budget level*, accounting for funnel math (CPM/CTR/CVR→CPA)
and marginal-CAC saturation? Score 0..1. `threshold: 0.6`. No campaign data yet → `ASSUMED`, capped.

## Writes
`stages[]` record (`stage_id: 5`, gates G5.1 + G5.2 (+ G5.3 nếu chạm giá, + G5.4 nếu chạy quảng cáo trả tiền), status, score, assumptions in notes).

## Console
`[Tầng 5 · Mô hình KD] (status) (score) — <điểm yếu/mạnh kinh tế chính>`
