---
name: validate-gtm-plan
description: Stage 7 of the validation pipeline — the GTM plan, produced only after a GO verdict. Use to turn a validated idea into an executable launch plan: positioning, messaging, channels, launch steps, North Star + AARRR metrics, and OKRs. Triggers when the orchestrator routes to GTM_PLAN after stage 6 returns GO. Do not run on No-go/Park/Pivot.
---

# GTM Plan (Stage 7)

Runs in two situations (PLAN MODE): (a) after `decision.verdict == GO` for a new idea, OR (b) when the
subject is an **already-decided / live product** (case B_PRODUCT, or a GTM/marketing-prep request) —
there the product's existence IS the prior GO, so do not gate this stage on a fresh verdict. Turns the
case into an executable plan. Read `dossier-schema.md` if needed. Write into `gtm_plan`. Do not render.

## Procedure
1. **Positioning → messaging** — carry the stage-4 positioning into 2–3 concrete message lines aimed
   at the beachhead.
2. **Channels & marketing** — name specific channels matched to the ICP, with expected CAC per channel
   (see `../../lenses/marketing-strategy.md`); split brand vs performance; one campaign hypothesis at a time. If paid ads are central, apply
   `../../lenses/digital-ads.md` (funnel math, marginal CAC, incrementality test) — skip it otherwise.
3. **Launch steps** — an ordered, minimal launch sequence.
4. **Metrics** — one **North Star**, then the AARRR funnel (acquisition / activation / retention /
   referral / revenue).
5. **OKRs** — 1–2 objectives with measurable key results for the first cycle.

## Writes
`gtm_plan.*` (positioning, messaging, beachhead, channels, launch_steps, north_star_metric, aarrr,
okrs) and a `stages[]` record (`stage_id: 7`).

## Console
`[Tầng 7 · Kế hoạch GTM] North Star: <…> · kênh: <…>`
