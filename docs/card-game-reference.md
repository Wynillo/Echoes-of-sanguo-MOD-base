# Card Game Reference

Comprehensive reference for AI agents to understand the card game system.

---

## Races

| ID | Key | Name | Color |
|----|-----|------|-------|
| 1 | Water | Water 水 | #1a6aaa |
| 2 | Wood | Wood 木 | #40a050 |
| 3 | Earth | Earth 土 | #807040 |
| 4 | Metal | Metal 金 | #909090 |
| 5 | Fire | Fire 火 | #c03010 |
| 6 | Dragon | Dragon | #8040c0 |
| 7 | Phoenix | Phoenix | #e06020 |
| 8 | Warrior | Warrior | #c09030 |
| 9 | Thunder | Thunder | #d4a000 |

### Race Archetypes

- **Water (1)** - Bounce control, returns opponent monsters to hand
- **Wood (2)** - LP gain, field debuffs, defensive walls
- **Earth (3)** - Guardian/Wall, damage reflection, untargetable
- **Metal (4)** - Warrior, permanent stat boosts, piercing
- **Fire (5)** - Berserker, direct damage, destruction
- **Dragon (6)** - Piercing, direct attack, effect immunity
- **Phoenix (7)** - Revival from grave, recursion, phoenix revival
- **Warrior (8)** - Beast, field buffs, special summon from hand
- **Thunder (9)** - Quick burn, hand disruption, anti-draw

---

## Attributes

| ID | Key | Name | Color |
|----|-----|------|-------|
| 1 | Light | Light | #c09000 |
| 2 | Dark | Dark | #7020a0 |
| 3 | Neutral | Neutral | #607060 |

---

## Rarities

| ID | Key | Name | Color |
|----|-----|------|-------|
| 1 | Normal | Normal | #aaaaaa |
| 2 | Uncommon | Uncommon | #7ec8e3 |
| 4 | Rare | Rare | #f5c518 |
| 6 | SuperRare | Super Rare | #c084fc |
| 8 | HyperRare | Hyper Rare | #f97316 |
| 10 | UltraRare | Ultra Rare | #ff6600 |
| 12 | Ultra | Ultra | #000000 |

### Rarity Distribution in Packs

| Pack Tier | N | U | R | SR | HR | UR |
|-----------|---|---|-- |----|----|----|
| Bronze | 70% | 25% | 5% | 0% | 0% | 0% |
| Silver | 40% | 40% | 15% | 5% | 0% | 0% |
| Gold | 20% | 35% | 30% | 12% | 3% | 0% |
| Purple | 10% | 25% | 35% | 20% | 8% | 2% |

---

## Card Types

| ID | Key | Name | Color |
|----|-----|------|-------|
| 1 | Monster | Monster | #c8a850 |
| 2 | Fusion | Fusion Monster | #a050c0 |
| 3 | Spell | Spell | #1dc0a0 |
| 4 | Trap | Trap | #bc2060 |
| 5 | Equipment | Equipment | #e08030 |

### Spell Types

| ID | Effect |
|----|--------|
| 1 | Normal Spell |

---

## Effect Triggers

### Trigger Types

| Trigger | Description |
|---------|-------------|
| `onSummon` | Activates when card is summoned |
| `onFlipSummon` | Activates when flipped face-up |
| `onAttack` | Activates when attacking |
| `onDealBattleDamage` | Activates when dealing battle damage |
| `onOwnMonsterAttacked` | When an owned monster is attacked |
| `onDestroyByBattle` | When destroyed by battle |
| `onDestroyByEffect` | When destroyed by card effect |
| `onSentToGrave` | When sent to grave |
| `onOpponentSummon` | When opponent summons |
| `onOpponentDraw` | When opponent draws |
| `onOppAttackDeclaration` | When opponent declares attack |
| `onOppCardEffect` | When opponent activates effect |
| `passive` | Always active |
| `onAttackDeclaration` | When declaring attack |

---

## Effect Actions

### Monster Manipulation

| Action | Description |
|--------|-------------|
| `bounceStrongestOpp()` | Return opponent's strongest monster to hand |
| `bounceAllOppMonsters()` | Return all opponent monsters to hand |
| `destroyStrongestOpp()` | Destroy opponent's strongest monster |
| `destroyAllOpp()` | Destroy all opponent monsters |
| `destroyAll()` | Destroy all monsters |
| `destroyWeakestOpp()` | Destroy opponent's weakest monster |
| `destroyAttacker()` | Destroy attacking monster |
| `destroyOppSpellTrap(1)` | Destroy 1 opponent spell/trap |
| `destroyAllOppSpellTraps()` | Destroy all opponent spells/traps |
| `setFaceDown()` | Set monster face-down |
| `flipAllOppFaceDown()` | Flip all opponent monsters face-down |
| `stealMonster()` | Take control of opponent monster permanently |
| `stealMonsterTemp()` | Take control of opponent monster temporarily |
| `stealRandomOppMonster()` | Take random opponent monster |
| `stealMonsterFromGrave()` | Special summon opponent's monster from grave |
| `sendTopCardsToGraveOpp(3)` | Mill 3 cards from opponent's deck |

### Hand/Deck Manipulation

| Action | Description |
|--------|-------------|
| `draw(self, N)` | Draw N cards |
| `discardOppHand(N)` | Force opponent to discard N cards |
| `discard(N)` | Discard N cards from own hand |
| `searchDeckToHand({ct:N})` | Add N cards from deck to hand |
| `searchDeckToHand({maxAtk:N,ct:M})` | Search up to M cards with max ATK |
| `millOpp(N)` | Mill N cards from opponent's deck |
| `shuffleGraveIntoDeck()` | Shuffle grave into deck |
| `skipOppDraw()` | Skip opponent's draw phase |

### Graveyard Manipulation

| Action | Description |
|--------|-------------|
| `reviveFromGrave()` | Special summon from own grave |
| `reviveFromEitherGrave()` | Special summon from either grave |
| `salvageFromGrave()` | Add monster from grave to hand |
| `banishOppGy()` | Banish all from opponent's grave |
| `banishGy(N)` | Banish N cards from grave |

### Stat Modifiers

| Action | Description |
|--------|-------------|
| `permAtkBonus(ownMonster, N)` | Permanently increase own ATK by N |
| `permDefBonus(ownMonster, N)` | Permanently increase own DEF by N |
| `tempAtkBonus(ownMonster, N)` | Temporarily increase own ATK by N |
| `buffField(N, {r:X})` | Buff all monsters of race X by N |
| `debuffField(N, N)` | Debuff all monsters by N ATK/DEF |
| `gainLP(self, N)` | Gain N life points |
| `dealDamage(opponent, N)` | Deal N damage to opponent |

### Battle Control

| Action | Description |
|--------|-------------|
| `cancelAttack()` | Cancel the attack |
| `preventBattleDamage()` | Prevent battle damage |
| `reflectBattleDamage()` | Reflect battle damage to opponent |
| `reflectDamage(Nx)` | Reflect N times damage |
| `negateAttack()` | Negate the attack |

### Special Summon

| Action | Description |
|--------|-------------|
| `specialSummonFromHand({ct:N})` | Special summon N monsters from hand |
| `specialSummonFromHand({maxAtk:N})` | Special summon monsters with max ATK |
| `specialSummonFromHand({ct:N})` | Special summon N monsters |

### Passive Effects

| Effect | Description |
|--------|-------------|
| `passive_untargetable()` | Cannot be targeted by card effects |
| `passive_cantBeAttacked()` | Cannot be attacked |
| `passive_piercing()` | Damage calculation uses difference as direct damage |
| `passive_directAttack()` | Can attack directly |
| `passive_effectImmune()` | Immune to card effects |
| `passive_indestructible()` | Cannot be destroyed |
| `passive_phoenixRevival()` | Revives when destroyed (once per duel) |
| `passive_immuneToHandDisruption()` | Unaffected by hand disruption |
| `doubleDraw()` | Draw 2 cards each turn |
| `damageReduction(N)` | Reduce incoming damage by N |

### Costs (brackets)

| Cost | Description |
|------|-------------|
| `[cost:lp=N]` | Pay N life points |
| `[cost:tributeSelf]` | Tribute itself |
| `[cost:tributeSelf]` | Tribute self |
| `[cost:discard=N]` | Discard N cards |
| `[cost:banishGy=N]` | Banish N from grave |

---

## Fusion Formulas

| ID | Combo | Materials | Result Pool |
|----|-------|-----------|-------------|
| metal_dragon | 4+6 | Metal + Dragon | 163-180 |
| dragon_warrior | 6+8 | Dragon + Warrior | 165-180 |
| metal_warrior | 4+8 | Metal + Warrior | 167-180 |
| phoenix_fire | 7+5 | Phoenix + Fire | 169-180 |
| thunder_water | 9+1 | Thunder + Water | 171-180 |
| water_wood | 1+2 | Water + Wood | 173-180 |
| earth_metal | 3+4 | Earth + Metal | 175-180 |
| fire_dragon | 5+6 | Fire + Dragon | 177-180 |
| phoenix_dragon | 7+6 | Phoenix + Dragon | 179-180 |

Fusion combo type: `race+race` - combines two monster races

---

## Pack Tiers

| ID | Name | Price | Unlock Condition |
|----|------|-------|------------------|
| tier_1_recruit | Recruit | 250 | Start |
| tier_2_soldier | Soldier | 350 | Complete duel_3 |
| tier_3_officer | Officer | 450 | Complete duel_8 |
| tier_4_commander | Commander | 550 | Complete gauntlet_qualifiers |
| tier_5_temple | Temple | 650 | Complete duel_21 |
| tier_6_warlord | Warlord | 800 | Complete duel_31 |

---

## Card Acquisition

### Pack Opening
- Standard cards obtainable through all pack tiers
- Higher tiers have better rarity distribution
- Fusion monsters available from tier_3_officer onwards

### Campaign Drops
- Regular duels: Coins only
- Boss duels: Coins + card rewards
- Campaign-exclusive cards (rarity 10+)

### S-Rank Rewards
- Guaranteed coin reward (+150% bonus)
- 10% chance for Ultra (rarity 12) drop
- Drop pool = Opponent's deck (cards they used in the duel)

### Exclusive Cards
- **Campaign-exclusive**: Ultra Rare (10) - campaign boss drops only
- **Ultra (12)**: S-rank drops from opponent's deck only
- **Fusion-exclusive**: High-tier fusions - available from Purple packs, campaign, S-rank
- **Pack-locked**: Some cards only in specific pack tiers

---

## Opponent Behaviors

| Behavior | Description |
|----------|-------------|
| default | Standard playstyle |
| smart | Tactical, prioritizes advantage |
| aggressive | Focuses on quick kills |
| defensive | Prioritizes survival |
| cheating | Has unfair advantages |

---

## Campaign Structure

### Node Types
- `duel` - Regular duel
- `duel_elite` - Elite duel
- `boss` - Boss fight
- `shop` - Card shop
- `rest` - Rest/heal
- `treasure` - Treasure chest
- `gauntlet` - Tournament

### Reward Scaling (+150% for S-rank)
- First duel: 100 coins (250 with S-rank bonus)
- Each subsequent: +50 coins (+125 with S-rank bonus)
- Example: duel_1=100→250, duel_2=150→375, duel_7=400→1000

---

## Deck Building Rules

### Basic
- No explicit deck size limits detected
- Cards organized by race for synergy
- Fusion monsters require specific race combinations

### Recommended Archetypes

| Archetype | Key Cards | Strategy |
|-----------|-----------|----------|
| Bounce Control | Race 1 (Water) | Return opponent monsters, control board |
| LP Gain | Race 2 (Wood) | Gain life, outlast opponent |
| Wall/Reflect | Race 3 (Earth) | High DEF, damage reflection |
| Stat Boost | Race 4 (Metal) | Permanent ATK/DEF increases |
| Burn/Destroy | Race 5 (Fire) | Direct damage, destruction |
| Aggro Dragon | Race 6 (Dragon) | High ATK, piercing, direct attack |
| Recursion | Race 7 (Phoenix) | Revive from grave, persistence |
| Token/Buff | Race 8 (Warrior) | Field buffs, special summon |
| Burn/Hand | Race 9 (Thunder) | Hand disruption, burn damage |

---

## New Card ID Ranges

| Type | IDs | Count |
|------|-----|-------|
| High-tier Monsters | 241-375 | 135 |
| New Fusions | 376-394 | 19 |
| Spells | 395-434 | 40 |
| Traps | 435-456 | 22 |

---

## Card Stats Scaling

| Level | ATK Range | DEF Range | Typical Rarity |
|-------|-----------|-----------|----------------|
| 1 | 100-500 | 100-500 | 1 |
| 2 | 300-700 | 300-700 | 1-2 |
| 3 | 500-1000 | 500-1000 | 1-2 |
| 4 | 700-1300 | 700-1300 | 2-4 |
| 5 | 1000-1700 | 800-1400 | 4-6 |
| 6 | 1200-3600 | 1000-3200 | 6-8 |
| 7 | 1500-4700 | 1200-4400 | 8-10 |
| Boss/Ultra | 4200-5000 | 3600-4800 | 10-12 |

---

## Quick Reference

### Common Card Patterns
- High ATK/Low DEF = Aggressive
- Low ATK/High DEF = Defensive  
- Effects on summon = Setup
- Passive effects = Consistency
- Multiple effects = Power cards

### Effect Priority for AI
1. **Board impact** - Destroy, bounce, banish
2. **Card advantage** - Draw, search, salvage
3. **Life points** - Gain LP, damage opponent
4. **Battle control** - Prevent damage, reflect
5. **Recursion** - Revive, shuffle grave

### Counter Strategies
- Against recursion (Phoenix): Banish, destroy without battle
- Against burn (Thunder/Fire): High LP, healing
- Against aggo (Dragon): High DEF walls, reflect
- Against control (Water): Multiple threats, resilience