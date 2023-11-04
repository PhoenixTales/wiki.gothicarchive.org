---
title: Curiosities
---

## Alpha placeholders (or an unknown language;)
- `SLD_20_VlkSpeech`: `Bla Bla Bla. Rarlala. Ble Bli Blub`
- `KDF_40_NSCASmalltalk`: `Don't make blabla.`
- `UUUAARRRGGGHHHH!!!!!  - auf English!`
- `Blabla - auf English!`

## Armor stealing
- `Hey, you're wearing MY armor. Give it back immediately!!!`
- German: `Hey, du trgst MEINE Rstung. Gib sie sofort zurck!!!'`

## Disguise mechanic
- `KDF_40_RecognizeDisguise`: `What is this masquerade for?`
- `KDF_40_RemoveDisguise`: `WHO is this HERE!?!`

## Drunkenness
- `KDF_40_DrunkenBastard`: `You drunk pig! Fuck off.`
- `NOV_130_DrunkenBastard`: `You don't know what you're doing. Go and have a break.`
- in alpha 0.64b, drinking even single unit of an alcohol drink was causing brief drunkenness:
  - `FUNC VOID UseBeer() { Npc_SetToDrunk (self,20); // 20 Sekunden betrunken`
  - `func void UseWine() { Npc_SetToDrunk(self, 30);`

## "I thought you were dead..."
- player in some situations hears from various NPC's lines along:
  - `You're alive? I thought you were dead!`
- it may be a reference to _Snake Plissken_ from _Escape From New York_ who keeps hearing it from others too
  - `CABBIE: I thought you were dead.`
  - `GIRL: I know who you are. Yeah! But I heard you were dead. SNAKE: I am.`
  - `BRAIN: I swear to God, Snake, I thought you were dead.`
  - _Escape From New York_ is confirmed as major inspiration for _Gothic I_

## Poisons
- in 0.56 alpha, there was NPC protection attribute against poisons (`ATR_RESIST_POISON`)
- some monsters and weapons were supposed to deal poison damage (`dam_poison`)
- it would probably work the same way as fire damage, distributed over time (just without flame effect)

## Respawn
- probabaly multiplayer-only mechanic
- dead players return at _Stone Circle Of The Damend_
- `KDF_40_GladYouWereDead`: `Risen from the dead, eh?  Watch out the next time!`
- `<...> was brought back to the Kingdom Of The Living by a powerful alchemist.`
  - German: `... wurde von einem mächtigen Alchemisten wieder in das Reich der Lebenden zurückgeholt.`
- `Once you are dead, get to the Stone Circle of the Damned as quickly as possible. When you touch the altar, new life will flow into you.`
  - German: `Bist Du erst tot, rette Dich so schnell wie nur möglich zum Steinkreis der Verdammten. Wenn Du den Altar berührst, wird neues Leben in Dich fließen.`
  - `Inf_Kdw_SKV` from 0.56c alpha
  - this suggests that afer dying, multiplayer participant can still move as a sort of a "ghost"

## Fall Gitter Secret
- only found in one of zens in 0.64b (unclear in which one)
- trigger with identifier `TRIGGER_FALLGITTER_SECRET`
- likely coordinates `-2416.28882 57.2834854 -2650.854`
- triggers vob `FALLGITTER` with visual `FALLGITTER.3DS`
- there is also another vob, `TRIGGER_FALLGITTER` targetting `FALGITTER`
- there is also trigger vob `WAND` with visual `WAND.3DS` targetting `FALGITTER`

## Interactive Objects
These objects can stand in the world and be interacted with, but are too big to be taken into inventory.

### Furniture
- chest
- bed
- lovebed
- throne
- crate (huge chest)
- barrel (can be used for hiding, as seen in _The Comic_)
- bench
- book stand

### Smithing
- anvil
- bucket
- forge
- grindstone

### Mining
- ore deposit
- stomper / ore crusher
- bellows (air pump)
- stone mill

### Architecture
- door
- repair spot (for placing on "broken" walls)
- secret door (invisible) (a fake moving wall?) (`LEAN_WALL`)

### Orcish
- orc mummy
- orc drum

### Outdoor
- campfire
- torch holder

### Control mechanisms
- vertical wheel / turnstile
- touchplate
- target stone (button that can be shot with a projectile)
- switch

### Cooking
- scavenger barbecue
- cauldron
- pan

### Sect
- waterpipe
- herb masher
- idol statuette (for praying)
- alchemy lab

### Special
- ropeway ("Exchange Place mechanism")
- pillar (can be knocked down)
- backpack (free standing container that can also be moved on the back)
- rice basket (can be worn like a huge backpack)
- `GROUND_SLOT` (?)
- drum
