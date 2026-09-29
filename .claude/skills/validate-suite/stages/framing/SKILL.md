---
name: validate-framing
description: Stage 0 of the validation pipeline — framing. Use to turn a vague idea/product/decision into a testable problem statement, a 5W1H frame, and a risk-ranked assumption list, before any gate runs. Triggers when the orchestrator routes to FRAMING or when a user idea is still fuzzy and needs structuring. Always run this first so downstream stages have something concrete to test.
---

# Framing (Stage 0)

Turn fuzziness into something testable. Read `dossier-schema.md` if not in context. Write only into
the Dossier (`framing` + the stage record). Do not render.

## Procedure
1. **5W1H** — fill `framing.five_w_one_h`: what / why / who / when / where / how. Write from the
   user's world and real content, not placeholders. `who` must name both the user AND the decider
   (sync with `intake.decision_makers`).
2. **Problem statement** — one testable sentence in `framing.problem_statement`. Use Jobs-To-Be-Done:
   "When <situation>, <user> wants to <motivation>, so they can <outcome>." A good statement names a
   struggling moment, not a feature.
3. **Assumptions** — list every belief the idea rests on in `framing.assumptions`, each with
   `risk` (H/M/L: damage if wrong) and `uncertainty` (H/M/L: how unsure we are). The H×H ones are the
   *riskiest assumptions* — they become the targets for stage 3.
4. **Opportunity check** — explicitly capture three dimensions as assumptions (so they get ranked and
   flow downstream), because ideas often die on these even when problem/solution are fine:
   - **Why now (timing)** — what changed that makes this viable now and not 2 years ago/from now? An
     idea with no credible "why now" is usually too early or too late.
   - **Moat (defensibility)** — what stops a better-resourced competitor from copying this once it works?
     (Tested harder at stage 4.)
   - **Founder/team-market fit** — why is *this* team unusually suited to win here? Weak FMF is a real
     risk even for a real problem.
5. Apply First Principles where the idea inherits unexamined industry assumptions: strip to what must
   be true, not what is conventionally done.

## Gate
Soft gate: is the problem stated testably and are assumptions surfaced? Set stage `score` ~0.6–0.9 by
how clear and well-evidenced the frame is; `status: PASSED` (framing rarely "fails", but a vague
frame should score low and flag it).

## Writes
`framing.*` and the `stages[]` record (`stage_id: 0`, name FRAMING, score, status).

## Console
`[Tầng 0 · Đóng khung] ✓ (score) — <problem statement, rút gọn>`
