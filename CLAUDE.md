# CLAUDE.md — Context for AI Assistants

## Project Overview

This is **MOD-BASE**, the base TCG content package for [Echoes of Sanguo](https://github.com/Wynillo/Echoes-of-Sanguo) — a Three Kingdoms-themed digital trading card game.

It contains all core game data: cards, opponents, campaign structure, fusion recipes, shop configuration, and translations. The project builds to a `.tcg` archive that the game engine loads.

## Commands

```bash
npm run build:tcg   # Pack tcg-src/ into dist/base.tcg
npm run validate    # Validate source JSON without building
npm run prepare     # Auto-runs on npm install (builds .tcg)
```

## Key Files in `tcg-src/`

| File | Contents |
|------|----------|
| `manifest.json` | Package metadata (id, version, compatibility) |
| `cards.json` | 355 card definitions (stats, effects, race, attribute) |
| `opponents.json` | 39 opponents with deck lists and AI behaviors |
| `campaign.json` | 7-chapter campaign graph (nodes, dialogue, rewards) |
| `fusion_formulas.json` | 23 fusion recipes (race combinations) |
| `shop.json` | 6 booster pack tiers with card pools |
| `starterDecks.json` | 9 pre-built faction starter decks |
| `races.json` | 9 creature races (Water, Wood, Earth, etc.) |
| `attributes.json` | 3 attributes (Light, Dark, Neutral) |
| `card_types.json` | 5 card types (Monster, Fusion, Spell, Trap, Equipment) |
| `rarities.json` | 7 rarity levels |
| `locales/*.json` | Translations (en.json, de.json) |

## Architecture

This is a **data-only package** — no runtime code. TypeScript build scripts pack JSON + images into a `.tcg` ZIP archive. The game engine consumes this archive.

## Conventions

- Cards reference `race` and `attribute` by ID (keys in `races.json`, `attributes.json`)
- Opponents reference card IDs from `cards.json`
- Campaign nodes can reference opponent IDs
- Locale files use card IDs as keys for names/descriptions
- Image files in `img/` are named by card ID (e.g., `001.webp`)

## References

For detailed game mechanics (effect triggers, AI behaviors, card stats scaling), see `docs/card-game-reference.md`.
