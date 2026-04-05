# Campaign Rewards and Stronger Opponents Design

## Overview

Add rewards to regular duel nodes and strengthen opponent decks to create a Dark Souls-like progression feel.

---

## Regular Duel Rewards

Add coin rewards to all duel nodes that currently have `rewards: null`.

| Node Type | Reward |
|-----------|--------|
| Regular duel | Coins only |
| Boss duel | Existing coin + card rewards (unchanged) |

**Scaling formula:**
- First duel: 100 coins
- Each subsequent duel node: +50 coins

Example: `duel_1` = 100, `duel_2` = 150, `duel_3` = 200, `duel_7` = 400

---

## Stronger Opponent Decks

Keep existing opponent properties:
- `coinsWin`: 100 → 1000 (unchanged)
- `coinsLoss`: 0 (unchanged for all opponents)
- `behavior`: default, smart, aggressive, defensive, cheating (unchanged)

### Deck Improvements

Add the following to opponent decks based on their progression tier:

1. **Fusion summoning support**
   - Cards that Special Summon from GY
   - Cards that banish for fusion
   - Fusion support spells

2. **Synergy boosts**
   - +1/+1 counter cards (add more, increase power)
   - Graveyard recursion (milling + recursion synergy)
   - Banish strategies (banish cards + benefit-from-banish cards)

3. **Cross-race power cards**
   - Later opponents get higher-tier cards from future races

---

## Files to Modify

- `tcg-src/campaign.json` — Add `rewards` to all duel nodes with `rewards: null`
- `tcg-src/opponents.json` — Enhance deck compositions with fusion support, synergies, and higher-tier cards