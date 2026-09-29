---
name: validate-hardgate
description: Stage 1 of the validation pipeline — the hard gate. A cheap, binary, no-LLM-judgment screen that kills most ideas early before any expensive analysis. Use right after framing. Triggers when the orchestrator routes to HARD_GATE. Always run for new ideas/features; any single FAIL stops the pipeline.
---

# Hard Gate (Stage 1)

The cheapest filter, run before any costly analysis — like a cheap pre-screen. Every gate is a
**binary yes/no** answerable without LLM reasoning or new research. One FAIL stops the pipeline.
Write only into the Dossier. Do not render.

## Gates (all must PASS)
Score each 1.0 (PASS) or 0.0 (FAIL), `threshold: 1.0`. Record the evidence clause for each.

1. **G1.1 · THẬT** — is the problem real (does the situation actually occur for real people)?
2. **G1.2 · ĐAU** — is it painful enough that someone would pay / change behavior to solve it?
3. **G1.3 · VỚI-TỚI-ĐƯỢC** — is there a realistic channel to reach these people?
4. **G1.4 · HỢP PORTFOLIO** — does it fit the company's focus/strategy? (Flag, don't auto-fail, if it's a
   defensible departure — note it for the decision gate's Six Hats.)
5. **G1.5 · KHẢ THI** — is it buildable with available resources/skills in a sane timeframe?
6. **G1.6 · HỢP PHÁP** — no legal/compliance blocker (data, payments, sector rules)?

## Verdict
All gates PASS → stage `status: PASSED`, score 1.0. Any FAIL → `status: FAILED`, score 0.0, and the
orchestrator stops the pipeline (verdict forced toward NO_GO). Do not soften a FAIL into a maybe —
the value of this gate is that it is strict and cheap.

## Writes
`stages[]` record (`stage_id: 1`, gates array, status, score).

## Console
`[Tầng 1 · Cổng cứng] ✓Thật ✓Đau ✗Với-tới-được → FAIL. Dừng. Lý do: <…>`
