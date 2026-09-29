---
name: validate-problem-val
description: Stage 2 of the validation pipeline — problem validation. Use to verify the problem is real with evidence rather than opinion, using The Mom Test discipline. Triggers when the orchestrator routes to PROBLEM_VAL (MUST_RUN for greenfield/pivot; ASSERT when a live product already proves demand). Always run before validating any solution.
---

# Problem Validation (Stage 2)

Evidence over opinion. Read `dossier-schema.md` if needed. Write only into the Dossier. Do not render.

## Procedure (The Mom Test)
Validate the problem the way The Mom Test prescribes — talk about the customer's life and past
behavior, never pitch the idea:
- Ask about **specifics in the past**, not hypotheticals about the future ("when did this last happen"
  not "would you use this").
- Seek **evidence of cost**: money, time, or workarounds already spent on the problem. That is the
  real signal of pain.
- Discount compliments and "yes I'd buy that" — they are not evidence.

For each line of evidence, record it in the stage `gates`/`notes` with a source reference. The gate:

## Gate
`G2.1` — Is there real evidence of the pain AND of willingness to pay/change? Score 0..1 by strength
of evidence (paying/working-around now = high; only stated interest = low). `threshold: 0.65`.
≥0.65 → PASSED; <0.5 → FAILED; between → REVIEW_NEEDED.

## Writes
`stages[]` record (`stage_id: 2`, gate G2.1, status, score, evidence refs).

## Console
`[Tầng 2 · Xác thực vấn đề] (status) (score) — <bằng chứng chính>`
