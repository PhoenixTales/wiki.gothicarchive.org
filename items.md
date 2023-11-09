---
title: Items
---

## Alchemical supplies
- Lab Flask
- Sulfur
- Quicksilver
- Salt
- Syrian Oil
- Molerat Fat
- Pure Alcohol

## Almost Priceless Amulet
- only mentioned in _Sleeper's Ban_
- stored at treasury of the _Peace Council_ of _Stomp's Hometown_
- `magically enchanted` (German: `magisch belegtes`)
- _Stomp_ was falsely accused of stealing it, and sentenced to lifetime in _Khorinis Prison Colony_

## Ancient Shaman Swords
- _Clefter of Worlds_ (`Welten Spalter`)
- _Blade of Light_ (`Licht Bringer`) (German name literally means _Light Bringer_)
- _Blade of Time_ (`Zeiten Klinge`)
- _Demon Strike_ (`Daemonen Streich`)
- _Blade of Banishment_ (`Bann Klinge`)

## Anti-barrier amulet
- `Magical Amulet against WS in order to get closer than 10m to the Barrier, without becoming insanse`
  - from early design docs

## Artefact Of Insanity
- German: `ein magische Artefakt`
- owned and used by _The Lobotomizer_, guru of _The Sect_
- `his spells "Confusion" and "Chaos" are so strong thanks to a Magical Artifact that he can permanently drive people insane` (design doc `NPCs per guild`)

## Extra Large Organiser Armor
- item with ID `ORG_ARMOR_XL` in 1.01d alpha

## Fiery Bow
- bow of Hawkeye
- without fire damage

## Fire Stone / Potion Of Inferno
- in different alpha versions called either `Fire Stone` (probably runestone) or `Potion Of Inferno` (a red drink)
  - both variants have exactly the same function: allow the one using them to cast fireballs (`Drink it and you can breathe fire`)
  - both variants appear in exactly the same context: as property of _Apprentice Of Hellfire_ which after his death is somehow acquired by _Nimblefinger_ who tries to offer it to the player as a reward for the mission `Steal The Old Sword Of Fire Mages`
- _Nimblefinger_ calls it a `powerful magical artifact of fire magic`
- _Hellfire_ is able to recognize the particular _Fire Stone_ that belonged to his apprentice
  - alternatively he guesses it based on how few of them are under the barrier
  - `So that wretched imp tried to sell you the Fire Stone, tststs. This Fire Stone belongs to my apprentice, whom I haven't seen for two days.`
  - German: `Dieser elende Wicht hat also versucht, dir den Feuerstein anzudrehen, tststs. Der Feuerstein gehört meinem Lehrling, den ich schon seit zwei Tagen nicht mehr gesehen habe.`

## Focus Stone
- crystal-based energy storage device
- much easier to release than charge
- can be used to cast "high magic" spells, like giant force-fields or explosions able to destroy such force-fields
- casting a spell with focus stone uses magic power from the stone, not (only) from the mage

## Gold
- major unit of currency is _Unit Of Gold_ (e.g. 400 for a mountain fort)
- middle unit of currency is _Piece Of Gold_ (e.g. 50 for rare magic scroll)

## Hood of the High Priest
- `Hood of the High Priest, which protects the wearer from the wrath of the Sleeper`
  - from early design docs

## Holy Water
- +10 to hp, mana, madness
- looks like a mana potion
- mission titled _The Holy Water_ is actually about `PSI Potion` (corresponding to _Sruup_) and doesn't actually involve the _Holy Water_ item

## Kodang Wood
- boomerang-like throwable weapon
- used by _Rogues_ (`ORG`)
- only appears in _Sleeper's Ban_

## Leather Armor
- the only armor separate from body mesh (rendered on top of it) in the entire game
- only present in alpha 0.56

## Light sources
- in alpha 0.64b there are multiple portable light sources:
  - torch
  - small oil lamp (`IT_I_OILLAMP_SMALL`)
  - oil lamp (`IT_I_OILLAMP2`)
- they last for configurable amount of time, during which the intensity of light gradually decreases
- all 3 of them have it copy-pasted to be 20 in-game minutes (`brightness = 20 * 60; // 20 Minuten Brenndauer`)

## Magic Ore
- see _Magic_

## Magic Ore Armor
- `ore armor (...) belonged to the general who wielded URIZIEL in the battle against the Orcs.`
- `This ancient armor was made of magic ore`
- according to the final game, _Ore Armor_ once belonged to _Ancient General_
  - _House of Innos_ or _Arch Mage of Fire_ own it in contemporary times
- in alpha, it is made inside of barrier by prisoner-smith _Stone_ and was never owned by _Ancient General_ nor _Arch Mage of Fire_

## Mana Potion
- made of powdered _Magic Ore_
  - `I don't care WHERE the ore powder for the mana potions comes from. The old mine is just as good as any other`
  - German: `Mir ist egal WO das Erzpulver für die Manatranke herkommt. Die Alte Mine ist da genauso gut wie jede andere`
  - said by a fire mage in alpha 0.56c (`Inf_Kdf_AM`)
  - _Sleeper's Ban_ mentions that _Sruup_ (_PSI Potion_) has the same main ingredient, making these two potions at least related
  - `You can get anything for ore, and the Sruup is also made with the help of this material`

## Milking Vessel
- _Templars_ use it to collect _Minecrawler Secretion_
- briefly mentioned in design doc `Story 3.3 draft`

## Mushrooms
- `Honey Mushroom`
- `Stinking Mushroom`
  - slightly poisonous (`nutrition = -5`)
- `Devil Mushroom`
  - poisonous (`nutrition = -15`)
  - subject of a quest from _Hellfire_
- `Hell Mushroom`
  - slightly nutritious (`+6`), but less than apple
  - in alpha was known as `Cave Mushroom`
  - German: `Höllenpilz`
- `Slave's Bread`
  - nutritious (`+15`), as much as a piece of cheese
  - German: `Sklavenbrot`
- `Cave Mushroom`
  - slightly nutritious (`+6`), but less than apple
  - only supposed to grow in caves
  - in the final release renamed to `Hell Mushroom`, after it was commonly misplaced out of caves
  - German: `Höhlenpilz`
- there is a _talent_ called `mushrooms`
  - possibly allowed the player to tell kinds of mushrooms apart
- it's well known that some mushrooms are deadly poisonous
  - `He knows about mushrooms, he says. I say thank you and fuck off. And what happened? He's lying there for four days, more dead than alive.` (`ZS_SmallTalk_Text19` / 1.01d alpha)

## Potion "Mad Bull"
- causes temporary madness (`Npc_SetToMad (self,30)`)
- looks like a vial of yellow liquid

## Potion "Sprinting Horse"
- sprint potion
- in alpha 0.64b the effect appears to be permanent, but it's probably unintentional
- drinking it triggers `SpellFX_Sprint` (also in the final release), which may suggest that originally it was going to be a magic spell

## PSI Potion
- appears in alpha builds, is almost for sure the same as _Sruup_
- vial with yellow liquid, uses mesh `drug.3ds` and material `IT_DRUG_YELLOW`
- _Quicktongue_ and others call it simply `PSI` or `drug` without explicitly mentioning `vial` or `potion`
- increases attributte `madness` by 5 (counter-intuitively, this probably means getting _less_ close to becoming insane)
  - the only other item affecting this attribute is `Holy Water`, increasing it by 10
- there is a related mission, _Bring Psi Potion_ (`I urgently need a PSI vial`)
- `There isn't much to pick up in the cult camp other than mountains of drug vials` (`Inf_Org_SL`)

## Rune Stones
- see _Magic_

## Rune Sword
- appears in alpha builds
- has owner set to _Mastermind_, but there are multiple NPCs with "copies" of it: _Earon_, _Hellfire_ and _Hawkeye_
- has extra magic damage and unique visual `special_sword.3ds`
- offered as reward by _Hawkeye_ for delivering him _Sruup_
- it can be deduced from early alphas that one was stored in the _Chapel Of Old Camp Castle_
  - quest `Steal The Old Sword Of Fire Mages` was originally about stealing "old sword" from that chapel
  - later version of that quest was changed to be about stealing that sword from directly from _Hellfire_, and in this version of the scripts we can see that the sword in his inventory is indeed the _Rune Sword_ 
  - worth to _Nimblefinger_ more than a _Fire Stone_

## Sacrificial Dagger
- appears in alpha 0.64, was dealing magic damage
- damage: `1weapon + 3magic` (found in `scripts.vdf`)

## Scale Armor
- armor mentioned in 0.56
- possibly an early prototype of `Minecrawler Plate Armor`

## Silver Amulet
- unused "conversation topic" in 0.56 alpha, probably involved in an uknown quest

## Sruup
- appears in _Sleeper's Ban_, is referred in alpha game builds as `PSI` or `drug`
- addictive potion neccessary for survival under barrier (`I need a psi vial urgently`, `sruup addicts`)
- provided from outside world in trade for ore
- `You can get anything for ore, and the Sruup is also made with the help of this material`
- `Without Sruup you will go mad, there are visions, visions of some temple, of orcs, of the undead; and they drive you crazy if you don't drink that stuff`
- `Without Sruup you will go just as insane as when you approach the barrier.`
- has `pungent odor` (German: `ein stechender Geruch`) (_Sleeper's Ban_)
- almost for sure the same as `PSI Potion` in alpha game builds

## Swampweed
- `grown in the swamp (...) has to be processed before it can be smoked`
- `have a tranquilizing and relaxing effect. They help you concentrate on the essentials and increase your awareness.`
- `opens your spirit` and gives chance to experience visions (`Some people even see images`)
- there are multiple distinct blends of _Swampweed_ that differ in strength and price

### Other games
- Gothic 2:
  - described as `resinous stalk`, and package of it as `sticky` and `stinking`
  - subjectively slows down the time, `helps against all sorts of pain and clears the head`
  - can be mixed with tobacco
  - is required for creating the _Sleep_ spell rune
  - `excessive use of the swampweed` causes users to be `more confused than believable` and they are `no longer able to work, let alone wield a weapon`, `completely stoned`
  - trade in _Swampweed_ is persecuted by militia (`If the city guards catch me with that, they'll throw me into jail`)
  - _Vatras_ claims that `a lot of swampweed is required for this ritual` which is the only way to repair _Eye Of Innos_ and save the world
   - he reminds player `don't forget to bring the swampweed. I am counting on you`
   - _Vatras_ is suspiciously well informed where to get it even though trade in it is illegal and risks imprisonment by _Militia_, he advises the player that there is a witch in the woods who collects and sells _Swampweed_ among other herbs, and also hints where it can be bought in the city
   - later admits that it was not actually needed, and they conduct ritual without it just fine
   - `VATRAS: Indeed, there is nothing missing now for the performance of the ritual. HERO: What about the swampweed? VATRAS: Ah, yes. Do you have swampweed plants, then? HERO: No. Alas not. VATRAS: All right. Then we shall have to make do without.`
- Gothic 2 NotR:
  - _Fortuno_ suggests that even the _Green Novice_, weakest of the weed blends prepared by _The Sect_, is stronger than pure _Swampweed_ joint prepared in a simple way
  - `Green Novice` joint can be made by mixing `essence of two swampweed plants and a meadow knotweed`

## Teleport Stone
- single item `TeleportStone` connected with single spell `Spell_Teleportation`
- as opposed to teleportation spells in the final release, this one does not lead to any particular location
- it moves the character to a random position within certain radius, for example to quickly evade enemies in fight
- in the script has comment `magischer Teleport-Stein`, using it calls engine function `Npc_SetTeleportPos(self)` of unclear purpose
- in alpha release where it is still present in scripts, it uses placeholder model `mallet.3ds` (a hammer)
  - later builds, including final release have mesh of matching name `ItMi_Teleportstone_01.3ds`
  - it looks like a piece of natural quartz-like crystal made of 5 parts
  - in builds with the model present, the script is already removed

![https://media.gothicarchive.org/img/items/ItMi_TeleportStone_01.jpg](https://media.gothicarchive.org/img/items/ItMi_TeleportStone_01.jpg)

## Throwable weapons
- in early alpha some ranged weapons were supposed to be "amunition for themselves" and get thrown
- 0.56 alpha `constants.d`: `CONST INT MUN_THROW = 1; // Keine, die Fernkampfwaffe selbst wird geworfen`
- _Kodang Wood_ from _Sleeper's Ban_ is a weapon of this kind

## Uriziel
- `Ancient runes have been engraved into the blade`, `It says here, Uriziel the Great`
  - `Hier steht, Uriziel das Grosse.` (G1-1.01d, ou.bin)
- `This ancient blade supposedly had immense powers before, but in the course of the years it's lost its magic energy`
- can be `magically charged` using heap of _magic ore_
- it contains magic rune known as _Ring of Death_ that `has Beliar's powers`
  - it is mentioned in book _Sixth Circle of Magic_ sold by _Mages Of Fire_ and _Mages Of Water_ under Magic Barrier Of Khorinis
  - `the big blue jewel in the blade. It contains the magical powers of the blade. If I remove the jewel, I'll be able to create a magic rune which contains the attributes of URIZIEL itself.` (G1-final, DIA_KDF_404_Xardas.d)
- orcs took it from the defeated _Ancient General_ 
  - `the Orcs took it from a powerful warlord`
  - `Dead Paladin in ancient temple behind door, sieged by undeads -> has weapon against Sleeper with him` (early design docs)
- the only weapon that can hurt the final undead boss before the sleeper
  - in alpha it was the _Undead Dragon_, in final it was 5th High Orc Priest
- sword powerful enough to harm, but not kill, arch demon
- has codename `Mythrilklinge`
  - reference to supernatural metal from _Lord Of The Rings_ that could only be find in a mine that was just above imprisoned enormous primeval demon (`Balrog`) 
- `It's a weapon from the olden days, when the human race was still young.`
- can be used to make a rune that `has Beliar's powers`, called `Wave of Death`
- `the weapon was able to pierce the strongest armor and to overcome even the most powerful of protection spells.`
- `This sword is forged from a noble ore by dwarves who were master craftsmen`
  - `Dieses Schwert ist aus einem edelen Erz geschmiedet, von Zwergen, die ihr Handwerk meisterlich verstanden`
  - this sentence was later removed, and all later references to _dwarves_ are displayed as easter eggs
  - `The weapon was forged from an unknown material. And there's nothing written about who created it!`

## Winepipe
