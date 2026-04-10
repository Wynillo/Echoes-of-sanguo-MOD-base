# Echoes of Sanguo — MOD Base

Base TCG package for the [Echoes of Sanguo](https://github.com/Wynillo/Echoes-of-Sanguo) game engine.

## Quick Start

```bash
npm install
npm run build:tcg     # → dist/base.tcg
npm run validate      # validate without building
```

## What's Included

- **355 cards** (312 with translations, 43 in progress)
- **39 opponents** with unique decks and AI behaviors
- **7-chapter campaign** with story nodes, duels, and bosses
- **23 fusion formulas** for combining monster races
- **6 booster pack tiers** (Recruit through Warlord)
- **9 starter decks** (one per faction)

## Building & Validation

```bash
npm run build:tcg     # Packs tcg-src/ into dist/base.tcg
npm run validate      # Validates source data without building
npm run prepare       # Auto-runs on npm install
```

## Loading the Package

The built `base.tcg` file can be loaded into the game engine in three ways:

### 1. Link Import (URL)

Download `base.tcg` from [Releases](https://github.com/Wynillo/Echoes-of-sanguo-MOD-base/releases) or use the latest release URL directly:

```js
await loadAndApplyTcg(
  'https://github.com/Wynillo/Echoes-of-sanguo-MOD-base/releases/latest/download/base.tcg'
);
```

### 2. Code Import (Mod Loader)

Install as an npm dependency:

```bash
npm install github:Wynillo/Echoes-of-sanguo-MOD-base
```

Read the mod descriptor programmatically:

```js
import modInfo from '@wynillo/echoes-mod-base/mod.json';
// modInfo.importMethods.link → download URL
// modInfo.entrypoint → "base.tcg"
```

The `mod.json` descriptor provides all metadata a mod loader needs to discover, display, and activate this package.

### 3. File Import (*.tcg)

Let users select a `.tcg` file via file input:

```js
const file = input.files[0];
const buffer = await file.arrayBuffer();
await loadAndApplyTcg(buffer);
```

## Package Structure

```
tcg-src/
├── manifest.json             ← TCG format metadata
├── cards.json                ← 355 card definitions
├── starterDecks.json         ← 9 pre-built starter decks
├── races.json                ← 9 creature races
├── attributes.json           ← 3 attributes (Light/Dark/Neutral)
├── card_types.json           ← 5 card types
├── rarities.json             ← 7 rarity levels
├── fusion_formulas.json      ← 23 fusion recipes
├── shop.json                 ← 6 booster pack definitions
├── campaign.json             ← 7-chapter campaign graph
├── opponents.json            ← 39 opponent decks
├── locales/                  ← translations (de, en)
├── img/                      ← card artwork (webp)
└── ui/                       ← UI assets
```

## Format & CI/CD

This package uses the `.tcg` archive format (ZIP-based) defined by [`@wynillo/tcg-format`](https://github.com/Wynillo/Echoes-of-Sanguo-TCG). See the [TCG Format Specification](https://github.com/Wynillo/Echoes-of-Sanguo/blob/main/docs/tcg-format.md) for details.

On push to `main`, GitHub Actions builds `base.tcg` and uploads it as an artifact. On tagged releases (`v*`), the built file is published as a GitHub Release asset.
