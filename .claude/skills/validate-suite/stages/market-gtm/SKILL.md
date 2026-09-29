---
name: validate-market-gtm
description: Stage 4 of the validation pipeline — market and go-to-market viability. Use to size the market (TAM/SAM/SOM), pick a beachhead, and pressure-test positioning against incumbents. Triggers when the orchestrator routes to MARKET_GTM. Apply the red-team lens here. Always run before committing to a business model.
---

# Market & GTM (Stage 4)

Is there a winnable market and a credible way in? Read `dossier-schema.md` if needed. Write only into
the Dossier. Apply the red-team lens (`../../lenses/red-team.md`). Do not render.

## Procedure
1. **TAM / SAM / SOM** — total, serviceable, and realistically obtainable. SOM honesty matters more
   than a big TAM.
2. **Beachhead** — name one narrow, reachable segment to win first (Crossing the Chasm). A diffuse
   "everyone" is a red flag.
3. **Positioning** — state what it is, who it's for, and why it beats the obvious alternative
   (April Dunford style). Must be defensible against incumbents, not just different.
4. **Channel-fit** (see `../../lenses/marketing-strategy.md`): match channels to ICP behavior, and
   estimate expected CAC per channel — some channels structurally can't hit payback; flag those.
5. **Red-team** the GTM: where does the channel break, where do incumbents crush on price/scale?
   Record into `lenses.red_team`.
6. **Five Forces** (chỉ khi tag `competitive_landscape` bật — xem `../../lens-registry.md`; tag tắt
   → không gọi, không ghi gì): assess cấu trúc ngành theo `../../lenses/porter.md`, ghi
   `lenses.porter` (`attached_to_stage: 4`). Hợp với quyết định vào thị trường mới / chọn beachhead /
   định vị chạm trực tiếp đối thủ.

## Gate
`G4.1` — Reachable beachhead + viable GTM motion + defensible positioning? Score 0..1.
`threshold: 0.65`. Unproven channel against strong incumbents → REVIEW_NEEDED.

`G4.2` — **Moat / defensibility:** is there a durable advantage a better-resourced competitor can't
easily copy once this works (data, network effects, switching cost, regulatory/local edge, distribution)?
Score 0..1. `threshold: 0.6`. "We'll move faster" is not a moat — flag low if no structural defensibility.

## Writes
`stages[]` record (`stage_id: 4`, gates G4.1 + G4.2, status, score), appends to `lenses.red_team` (+ `lenses.porter` nếu tag `competitive_landscape`).

## Console
`[Tầng 4 · Thị trường & GTM] (status) (score) — beachhead: <…>`
