# Echoes of Sanguo — MOD Base

Base TCG package for the [Echoes of Sanguo](https://github.com/Wynillo/Echoes-of-Sanguo) game engine.

Contains the complete base card set (312 cards), 39 opponents, a 7-chapter campaign, fusion recipes, shop configuration, and all core game data.

## Building

```bash
npm install
npm run build:tcg     # → dist/base.tcg
npm run validate      # validate without building
```

## Importing the Package

The built `base.tcg` file can be loaded into the game engine in three ways:

### 1. Link Import (URL)

Download `base.tcg` from [Releases](https://github.com/Wynillo/Echoes-of-sanguo-MOD-base/releases) or use the latest release URL directly:

```js
await loadAndApplyTcg(
  'https://github.com/Wynillo/Echoes-of-sanguo-MOD-base/releases/latest/download/base.tcg'
);
```

### 2. CodeImport (Mod Loader)

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

The `mod.json` descriptor provides all metadata a mod loader needs to discover, display, and activate this package. A mod manager can persist the active mod list in `localStorage` and load selected `.tcg` files on startup.

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
├── mod.json                  ← mod loader descriptor
├── manifest.json             ← TCG format metadata
├── cards.json                ← 312 card stats
├── cards_description.json    ← card names + descriptions
├── starterDecks.json         ← pre-built starter decks per faction
├── id_migration.json         ← numeric → string ID mapping
├── races.json                ← race display metadata
├── attributes.json           ← attribute display metadata
├── card_types.json           ← card type display metadata
├── rarities.json             ← rarity display metadata
├── fusion_formulas.json      ← race/attribute fusion formulas
├── shop.json                 ← booster pack definitions
├── campaign.json             ← 7-chapter campaign graph
├── opponents/                ← 39 opponent decks
├── locales/                  ← translations (de, en)
├── img/placeholders/         ← placeholder card artwork
└── ui/                       ← UI assets
```

## Format

This package uses the `.tcg` archive format (ZIP-based) defined by [`@wynillo/tcg-format`](https://github.com/Wynillo/Echoes-of-Sanguo-TCG). See the [TCG Format Specification](https://github.com/Wynillo/Echoes-of-Sanguo/blob/main/docs/tcg-format.md) for details.

## CI/CD

On push to `main`, the GitHub Actions workflow builds `base.tcg` and uploads it as an artifact. On tagged releases (`v*`), the built file is published as a GitHub Release asset.
