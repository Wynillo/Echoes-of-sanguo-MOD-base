# Codebase Cleanup: Icon Naming Standardization + README Update

**Date:** 2026-04-03
**Status:** Approved

## Context

The repo has gone through multiple refactoring iterations. As a result, three metadata JSON files use three different naming conventions for icons/symbols, and `README.md` references files and directories that no longer exist.

**Problems identified:**
- `races.json`: `icon` (react-icons GiName) + `emoji` (Unicode) — two redundant fields
- `attributes.json`: `symbol` (Unicode char) — wrong field name, wrong value type
- `card_types.json`: no icon field at all
- `races.json` Beast entry: `GiMechanicHead` (mechanical head ≠ beast)
- `README.md`: references `cards_description.json` and `opponents/` directory — both removed in prior refactors
- `README.md`: states "312 cards" but `cards.json` has 355

**Intended outcome:** All three metadata files use the identical shape `{ ..., "icon": "GiName" }`. README reflects actual repo state.

---

## Design

### 1. `tcg-src/attributes.json`

Rename field `symbol` → `icon`. Replace Unicode characters with react-icons.gi names:

| id | key | Old `symbol` | New `icon` |
|----|-----|-------------|-----------|
| 1 | Light | `☀` | `GiSun` |
| 2 | Dark | `☽` | `GiMoon` |
| 3 | Fire | `♨` | `GiFire` |
| 4 | Water | `◎` | `GiWaterDrop` |
| 5 | Earth | `◆` | `GiMountains` |
| 6 | Wind | `∿` | `GiTornado` |

### 2. `tcg-src/races.json`

- Remove `emoji` field from all 12 entries
- Fix Beast entry: `GiMechanicHead` → `GiTigerHead`

No other race icons change.

### 3. `tcg-src/card_types.json`

Add `icon` field to all 5 entries:

| id | key | New `icon` |
|----|-----|-----------|
| 1 | Monster | `GiMonsterGrasp` |
| 2 | Fusion | `GiMagicSwirl` |
| 3 | Spell | `GiSpellBook` |
| 4 | Trap | `GiBearTrap` |
| 5 | Equipment | `GiCrossedSwords` |

### 4. `README.md`

Update the following:

- **Card count:** "312 cards" → "355 cards (312 translated, 43 in progress)"
- **Package structure:** Remove `cards_description.json` entry (replaced by `locales/`), replace `opponents/` directory entry with `opponents.json  ← 39 opponent decks`, add `locales/` directory entry. `img/placeholders/` and `ui/` remain unchanged.
- **Imports section:** Remove or update references to `cards_description.json`

No changes to CI/build information, import methods, or other sections.

---

## Files Changed

| File | Change |
|------|--------|
| `tcg-src/attributes.json` | `symbol` → `icon` with GiNames |
| `tcg-src/races.json` | Remove `emoji`, fix Beast icon |
| `tcg-src/card_types.json` | Add `icon` field |
| `README.md` | Update card count and package structure |

---

## Out of Scope

- Cards 313–355: Have game data but no translations. This is intentional in-progress content, not a cleanup item.
- Equipment cards 303–307: No `equipReqAttr`/`equipReqRace` is intentional — these are universal equipment (any monster can equip them). No change needed.

---

## Verification

1. Run `npm run validate` — should pass without errors
2. Run `npm run build:tcg` — should produce `dist/base.tcg`
3. Check that all three metadata files have only `icon` (no `emoji`, no `symbol`)
4. Verify Beast entry in `races.json` shows `GiTigerHead`
5. Verify README package structure matches `ls tcg-src/`
