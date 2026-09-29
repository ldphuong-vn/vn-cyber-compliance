---
name: validate-solution-val
description: Stage 3 of the validation pipeline — solution validation. Use to test whether the proposed solution actually moves the needle, via the Riskiest Assumption Test, Value Proposition Canvas, and an MVP/MLP plan. Triggers when the orchestrator routes to SOLUTION_VAL. Always run before market sizing — a great market for a solution nobody adopts is worthless.
---

# Solution Validation (Stage 3)

Does THIS solution solve the validated problem? Read `dossier-schema.md` if needed. Write only into
the Dossier. Apply the pre-mortem lens here (`../../lenses/premortem.md`). Do not render.

## Procedure
1. **RAT** — pull the highest `risk × uncertainty` assumption from `framing.assumptions`. Define the
   cheapest test that could falsify it. The solution's fate rides on this, not on building everything.
2. **Value Proposition Canvas** — check fit: do the solution's pain-relievers/gain-creators map to the
   customer's actual pains/gains from stage 2? Mismatches are the failure seed.
3. **MVP/MLP** — define the smallest build that produces a real adoption signal (a metric that moves),
   not a feature list.
4. Run a quick **pre-mortem** and record failure modes into `lenses.premortem` (carried to stage 6).

## Validation ladder — recommend the cheapest next rung
Don't just score; tell the user the next cheapest experiment to *climb* the evidence ladder. Each rung
produces stronger evidence than the last (and a higher `evidence_type` — see `../../guardrails.md`):

```
1. Phỏng vấn The Mom Test   → USER_STATED   (rẻ nhất, yếu nhất)
2. Smoke test / landing page → CITED/MEASURED (đo conversion từ traffic lạnh)
3. Concierge / Wizard-of-Oz  → MEASURED      (làm tay dịch vụ trước khi tự động hoá)
4. Paid pilot                → MEASURED       (khách trả tiền — bằng chứng mạnh nhất)
```

Identify which rung the current evidence sits on, and name the next rung as the recommended action
(record it in the stage `notes`). A signal from a *paid pilot* outranks any amount of stated interest.

## Gate
`G3.1` — Does the MVP/test give a signal that the solution shifts the target metric? Score 0..1.
`threshold: 0.65`. No real test yet → cap the score and mark REVIEW_NEEDED rather than PASSED.

## Writes
`stages[]` record (`stage_id: 3`, gate G3.1, status, score), and appends to `lenses.premortem`.

## Console
`[Tầng 3 · Xác thực giải pháp] (status) (score) — RAT: <giả định rủi ro nhất>`
