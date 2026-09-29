---
name: validate-lifecycle-ops
description: Stage 8 of the validation pipeline — lifecycle operations and the re-validation loop. Use to define funnel metrics, cohort retention, expand/sunset criteria, and the tripwires that trigger re-running earlier gates. Triggers when the orchestrator routes to LIFECYCLE. Use for live-product audits (case B) and after any GO to close the loop from launch to ongoing operation.
---

# Lifecycle Ops (Stage 8)

Closes the loop from one-off validation to ongoing operation. Read `dossier-schema.md` if needed.
Write into `lifecycle`. Do not render.

## Procedure
1. **Funnel metrics** — the operating metrics to watch (from the AARRR funnel if stage 7 ran).
2. **Cohort retention** — how retention is tracked; retention is the truth serum for product-market fit.
3. **Expand / sunset criteria** — explicit numeric thresholds for scaling up vs winding down. Decide
   these *now*, while unattached, so the later call isn't driven by sunk cost.
4. **Re-validation loop** — set `lifecycle.revalidation`: the `trigger` (time- or event-based) and
   `stages_to_recheck`. Seed it from `decision.journal.reversal_conditions` — those tripwires are
   exactly what should re-open earlier gates.

## Writes
`lifecycle.*` and a `stages[]` record (`stage_id: 8`).

## Console
`[Tầng 8 · Vòng đời] re-validate khi <trigger> → tầng <…>`
