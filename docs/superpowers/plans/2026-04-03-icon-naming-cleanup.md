# Icon Naming Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize icon fields across all three metadata JSON files and update README.md to reflect actual repo state.

**Architecture:** Pure JSON data edits — no code changes. All three metadata files receive the same shape `{ ..., "icon": "GiName" }`. README package structure is rewritten to match the current `tcg-src/` directory.

**Tech Stack:** JSON, react-icons/gi (naming convention only — no runtime dependency added here)

**Spec:** `docs/superpowers/specs/2026-04-03-icon-naming-cleanup-design.md`

---

### Task 1: Fix `attributes.json` — rename `symbol` → `icon`, use GiNames

**Files:**
- Modify: `tcg-src/attributes.json`

- [ ] **Step 1: Overwrite `attributes.json` with corrected content**

Replace the entire file with:

```json
[
  { "id": 1, "key": "Light", "value": "Light", "color": "#c09000", "icon": "GiSun" },
  { "id": 2, "key": "Dark",  "value": "Dark",  "color": "#7020a0", "icon": "GiMoon" },
  { "id": 3, "key": "Fire",  "value": "Fire",  "color": "#c0300a", "icon": "GiFire" },
  { "id": 4, "key": "Water", "value": "Water", "color": "#1a6aaa", "icon": "GiWaterDrop" },
  { "id": 5, "key": "Earth", "value": "Earth", "color": "#6a7030", "icon": "GiMountains" },
  { "id": 6, "key": "Wind",  "value": "Wind",  "color": "#4a6080", "icon": "GiTornado" }
]
```

- [ ] **Step 2: Validate the build**

```bash
npm run validate
```

Expected output: no errors, exits 0.

- [ ] **Step 3: Commit**

```bash
git add tcg-src/attributes.json
git commit -m "refactor: standardize attributes.json — symbol → icon with GiNames"
```

---

### Task 2: Fix `races.json` — remove `emoji`, correct Beast icon

**Files:**
- Modify: `tcg-src/races.json`

- [ ] **Step 1: Overwrite `races.json` with corrected content**

Remove the `emoji` field from all 12 entries. Change Beast from `GiMechanicHead` to `GiTigerHead`:

```json
[
  { "id": 1,  "key": "Dragon",      "value": "Dragon",      "color": "#8040c0", "icon": "GiDragonHead" },
  { "id": 2,  "key": "Spellcaster", "value": "Spellcaster", "color": "#6060c0", "icon": "GiWizardStaff" },
  { "id": 3,  "key": "Warrior",     "value": "Warrior",     "color": "#c09030", "icon": "GiSwordman" },
  { "id": 4,  "key": "Beast",       "value": "Beast",       "color": "#e07030", "icon": "GiTigerHead" },
  { "id": 5,  "key": "Plant",       "value": "Plant",       "color": "#40a050", "icon": "GiTreeface" },
  { "id": 6,  "key": "Rock",        "value": "Rock",        "color": "#808060", "icon": "GiRock" },
  { "id": 7,  "key": "Phoenix",     "value": "Phoenix",     "color": "#e06020", "icon": "GiFlame" },
  { "id": 8,  "key": "Undead",      "value": "Undead",      "color": "#804090", "icon": "GiSkull" },
  { "id": 9,  "key": "Aqua",        "value": "Aqua",        "color": "#3080b0", "icon": "GiWater" },
  { "id": 10, "key": "Insect",      "value": "Insect",      "color": "#90a040", "icon": "GiButterfly" },
  { "id": 11, "key": "Machine",     "value": "Machine",     "color": "#708090", "icon": "GiMechanicalArm" },
  { "id": 12, "key": "Pyro",        "value": "Pyro",        "color": "#c03010", "icon": "GiFire" }
]
```

- [ ] **Step 2: Validate**

```bash
npm run validate
```

Expected: exits 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add tcg-src/races.json
git commit -m "refactor: races.json — remove emoji field, fix Beast icon (GiMechanicHead → GiTigerHead)"
```

---

### Task 3: Fix `card_types.json` — add `icon` field

**Files:**
- Modify: `tcg-src/card_types.json`

- [ ] **Step 1: Overwrite `card_types.json` with corrected content**

```json
[
  { "id": 1, "key": "Monster",   "value": "Monster",        "color": "#c8a850", "icon": "GiMonsterGrasp" },
  { "id": 2, "key": "Fusion",    "value": "Fusion Monster", "color": "#a050c0", "icon": "GiMagicSwirl" },
  { "id": 3, "key": "Spell",     "value": "Spell",          "color": "#1dc0a0", "icon": "GiSpellBook" },
  { "id": 4, "key": "Trap",      "value": "Trap",            "color": "#bc2060", "icon": "GiBearTrap" },
  { "id": 5, "key": "Equipment", "value": "Equipment",       "color": "#e08030", "icon": "GiCrossedSwords" }
]
```

- [ ] **Step 2: Validate**

```bash
npm run validate
```

Expected: exits 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add tcg-src/card_types.json
git commit -m "refactor: card_types.json — add icon field (GiNames)"
```

---

### Task 4: Update `README.md`

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update description line (card count)**

Change line 5:

```
# Before
Contains the complete base card set (312 cards), 39 opponents, a 7-chapter campaign, fusion recipes, shop configuration, and all core game data.

# After
Contains the complete base card set (355 cards, 312 with translations), 39 opponents, a 7-chapter campaign, fusion recipes, shop configuration, and all core game data.
```

- [ ] **Step 2: Replace the Package Structure block**

Replace the entire `## Package Structure` section (lines 57–77) with:

```markdown
## Package Structure

\`\`\`
tcg-src/
├── mod.json                  ← mod loader descriptor
├── manifest.json             ← TCG format metadata
├── cards.json                ← 355 card stats (312 translated, 43 in progress)
├── starterDecks.json         ← pre-built starter decks per faction
├── races.json                ← race display metadata (12 races)
├── attributes.json           ← attribute display metadata (6 attributes)
├── card_types.json           ← card type display metadata (5 types)
├── rarities.json             ← rarity display metadata
├── fusion_formulas.json      ← race/attribute fusion formulas
├── shop.json                 ← booster pack definitions
├── campaign.json             ← 7-chapter campaign graph
├── opponents.json            ← 39 opponent decks
├── locales/                  ← translations (de, en)
├── img/placeholders/         ← placeholder card artwork (per race)
└── ui/                       ← UI assets
\`\`\`
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: update README — fix card count (312→355) and package structure"
```

---

### Task 5: Final verification

- [ ] **Step 1: Build the full TCG archive**

```bash
npm run build:tcg
```

Expected: `dist/base.tcg` created, no errors.

- [ ] **Step 2: Spot-check each changed file**

Confirm manually:
- `tcg-src/attributes.json` — no `symbol` field anywhere, all entries have `icon`
- `tcg-src/races.json` — no `emoji` field anywhere, Beast shows `GiTigerHead`
- `tcg-src/card_types.json` — all 5 entries have `icon`
- `README.md` — "355 cards", no `cards_description.json`, no `opponents/` directory, `opponents.json` present
