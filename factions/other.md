---
title: Other
---

## Crusaders
- mentioned in _Phoenix_ Konzept from 11/1997
- possibly some subset of Sect Templars (?)
- there's mention of _Crusade_ (`Kreuzzug`)

## Removed Pre-Alpha Guards
- German: `Der Waechter` / `WCH`
- it is almost removed already in 0.56 alpha (`GIL_WCH = 18; // (gibt es nicht mehr)` - `no longer used`)
- in very early alpha builds was guild separate from both _Mercenaries Of Old Camp_ and _Guards Of New Camp_
- on the guild list, they are between _The Orcs_ and _The Sleeper_, and word `Waechter` is only mentioned elsewhere in context of orcs:
  - `B_OrcGuard_ObserveIntruder: Waechter sieht Player`
  - `B_OrcGuard_ObserveIntruder: Waechter tutet ins Horn -> TOR`
  - `ZS_OrcGUARD_ObserveIntruder_Loop: Waechter!`
  - `ZS_OrcGuard_ObserveIntruder_Loop: Ork-Waechter zieht Waffe`
- but there's also a file `INF_WCH.BAK` which inside contains code for `Inf_Sld` and `GIL_SLD`, suggesting it could be a renamed version of _Mercenaries Of Old Camp_
- set as owner of moveable world objects of type `TableHeavy` (maybe to attack you if you chop up the table in front of _Big Boss_)
- in 0.56 alpha there are two NPCs with this guild set, who wear clothing of other guilds:
  - _Mastermind_, wears _Guru_ robes
  - _Hawkeye_, wears _Thiefs_ clothes (`thief.asc`)

## Masters
- German: `Die Meister` (`MST`)
- secret secondary guild accepting members of all the camps
- it's much harder to discover and join than the three camps
- known members: Diego, Milten, Lester, Gorn, Lares
- player was supposed to have a chance of discovering and joining it
- `SLD_21_NSCASpeech`: `Just listen people. This is the masters message.` (unclear if he actually means this guild)

## Peasants
- German: `Die Bauern` (`BAU`) (can be also translated as `farmers`)
- live around the _Old Citadel_ (German: `Altes Kastell`)
  - originally, the New Camp was more in the south and the _Old Citadel_ was on a mountain just west from it, with all the fields in front of it and the river from the New Camp running through the fields
  - `Just to the south of our fields lies the ruins of a former fort` (alpha 0.56c)
- peaceful, grow their own food and trade it with camps
- some of them lived around the valley already before it became prison colony
- `know how to grow grain and a few of them can even brew really good beer` (_Sleeper's Ban_)
- `We feed the new camp and in return we are protected from the archbarons` (alpha 0.56)
- in the final release they are farming rice just in front of the _New Camp_
- their leader is _The Landlord_ (design doc `NPCs per Guild`) who is forms council with 3 `Bakers`, but `they have no power`
  - German: `Brotmacher bilden zusammen  mit dem Gutsherrn den "Zunftrat", der jedoch _keinerlei_ Macht hat` (design doc `NPCs per Guild`)
  - the _Bakers_ are privilleged and don't have to do hard work in the fields
- 5 of them are `field masters` who oversee others working in the fields, and compete to join the _Bakers_
- 15 of them are common _Farm Workers_, `the work animals in the fields; some are dissatisfied and can be persuaded to change sides` (design doc `NPCs per Guild`)

## Quentin's Gang
- also known as the _Rogues_
- according to early version of the story, they used be part of _The Organisation of Free Camp_, but were expelled or left
- subgroups:
  - _Robbers_ (German: `Raeuber`)
  - _Blackmailers_ (German: `Erpresser`)
  - _Stooges_ ("illegally" prepare _Sect's Drugs_ in a cave, threatened retreat to _Quentin's Camp_)

## Stomp's Family
- only mentioned in _Sleeper's Ban_
- `respected merchant family`
- `one of the largest trading houses in his hometown, used to living in a large mansion, looked after by servants`
- wife of the family's head died, and he married again
  - he has two sons, one from the first marriage who is his heir, and one from second marriage who is jealous of being the heir
  - `his stepbrother, the man who came into the family through his father's second marriage and envied him from the start the position of heir.`
