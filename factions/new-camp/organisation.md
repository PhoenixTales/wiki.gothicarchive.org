---
title: The Organisation Of New Camp
---

- German: `Organisatoren` / `ORG`
- also called the _Rogues_ or _Bandits_
- criminals sharing the _New Camp_ with _Guardians Of New Camp_ and _Alchemists Of Water_
- mostly rob _Old Camp_ members and convoys
- 10 people: _The Head_, _The Specialist_, _The Uncaught_, _Organisers_, _Vagabonds_, _The Prophet_
- _Quentin's Gang_ used to be part of them, but were expelled or left

## Sub-groups

### Organisers
- called _Rogues_ in the final English release
- `"Workhorses"; do the routine errands` (design doc `NPCs per Guild`)

### Vagabonds
- German: `Die Herumtreiber`
- `are assigned to simple tasks; still in training` (design doc `NPCs per Guild`)

### Bouncers
- German: `Tuersteher`
- decide who enters the lake tavern

### Thugs Of New Camp
- German: `Schlaeger`
- in the final release work for the _Rice Lord_
- there's a sub-group of the same name in the _Old Camp_, and it's sometimes used as name for the members of _Quentin's Band_ (who are also known as _Robbers_)

## Fox
- `ORG_827_FOX` in alpha 1.01d
- can be found talking with _Ryan_, who was a _Digger_ living in _Old Camp Ring_
- according to a leftover script comment in the final release, is talking with a _Shadow_ in the _Old Camp Ring_
  - `STT_330_Schatten.d`: `TA_Smalltalk (08,00,20,00,"OCR_OUTSIDE_HUT_44"); //mit Org_827_Fox`
- finally replaced by `GRD_265_GARDIST`
  - `Wld_InsertNpc (Grd_265_Gardist, "OC1"); // OC Südtor (Ex-Fox)`

## The Head
- later known as _Lares_
- German: `das Oberhaupt der Organisatoren`
- `master rogue, surpasses all others, very respected by his customers` (design doc `NPCs per Guild`)
- `member of The Masters` (design doc `NPCs per Guild`)

## Marvin
- appears in 1.01d alpha as `ORG_856_MARVIN`
- according to 0.94 alpha, the only healer in _New Camp_
  - this was written after _Water Mages_ were no longer designated as healers
- the script internally calls him `drunken healer`
- `You speak to Marvin The Healer. THE healer. The only one here. So if you get me some schnapps, I'll help you if you ever get hurt. Otherwise you can of course also get healing potions from me. For only ...hmmm... 10 ore.`

## The Prophet
- German: `Der Prophet`
- `crazy street yeller, who tirelessly preaches nonsensical teachings` (design doc `NPCs per Guild`)
- `in reality spy for the Rogues` (design doc `NPCs per Guild`)
- lives in the _Old Camp_, without proper guild, counted as one of _The People Of Old Camp_ (`VLK`)

## The Specialist
- German: `der Spezialist der Organisatoren`
- `organizes the really tricky things` (design doc `NPCs per Guild`)
- `Master thief, very cunning and clever` (design doc `NPCs per Guild`)
- `dishonest & deceitful; regularly betrays his guild, but is never caught` (design doc `NPCs per Guild`)

## The Uncaught
- German: `der Unerwischte`
- `Guild teacher & mission giver; often requires students to bring him things to pay for his teaching` (design doc `NPCs per Guild`)
