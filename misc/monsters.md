---
title: Monsters
---

## Black Wolf
- variant of _Wolf_ present in alpha 1.01d
- later changed into _Orcdog_, which in final release still uses `ID_BLACKWOLF`

## Blood Hound
- huge dog-like monster
- clearly separate from _Orcdog_ (there's both `MST_DEFAULT_BLOODHOUND` and `MST_DEFAULT_ORCDOG`)

## Goblin
- if player tries to talk to one, it shouts `Bonami! Schagaluga! Aitascha! Wazsashi! Kawwasakki!`
- some of them try to `lure the player into a cave and with other CaveGobbos`
- some of them are thrown over a chasm by troll
- there are `KamikazeGobbo` who fall down on the player from above
- when picks up an item, they make `happy` shout `Bonami!`
- when starts attacking, they make `alarm` shout `Aitascha!`

## Iguana
- mentioned in 1.01d alpha
- in the final game translated as `Waran`
  - compare lists `GIL_WARAN GIL_SLF GIL_GOBBO` and `Iguana Sleeper Gobbo`
 
## Lurker
- water monster that is hard to catch on the shore without bait
  - `You catch a lurker with bait. Take raw meat and put it on the shore near him. Wait until he grabs it, then you have a chance` (`SIT_1_NC_WOLF_TRAINSARCHERY` / 0.94 alpha)

## Mid'ssa
- underwater monster living at the `Exchange Place`
```
Then he felt a touch.
It was like something caressed his feet. 
Delicate, light, surrounding his knee like a water plant.
But too purposefully wrapping itself around his leg, gripping with ever tighter grip... 
```
```
He noticed meandering motion in the water behind him, a small wave moving in his direction.
```
```
Greenish mass, which had perversely taken shape of a meter-long female face.
It was dominated by greenish shining eyes and a wide, wide mouth with several rows of pointed teeth.
Around were dozens of arm-thick, green-scaled tentacles diving in his direction, making the water splash against the edge of the cliff.
```

## Orcbiter
- monster present in alpha 1.01d (`ID_ORCBITER`)
- clearly separate from _Orcdog_ (there's both `MST_DEFAULT_ORCBITER` and `MST_DEFAULT_ORCDOG`)

## Minecrawler
- giant insect-like creatures that eat _orcs_ and humans
- they have venomous mandibles, poisoned _orcs_ need the _Orc Medicine_ to survive

## Minesprayer
- known as `Felssprüher` in German version of `Sleeper's Ban`
- great underground monster
- usually takes multiple people to kill one
- it's venom is an acid that quickly melts rock and can be stored in glass vials

## Polar badger
- lives in the far _Polar North_
- known as "Kumatekk" in the language of `Shirtakkihn`

## Polar Bear
- lives in the far _Polar North_

### Polar Bears guarding Unknown Northern Race
- `gigantic polar bears`
- `four-meter-tall polar bear, and red runes of flames over the left side of the face and neck`
- `bright red markings that covered the left side of the face, neck and upper body of these creatures`
- `red mark covering the left side of a polar bear`
- have special connection with _Unknown Northern Race_
- `staring from a height of four meters`
- `bright white fur, a wall of fur, head-sized paws with finger-length claws, panting mouths with long fangs`

## Polar shark
- lives in the far _Polar North_
- `Sharks (...) whose skin was so brilliantly blue that it even faded the color of the sea in that bright sunshine.`
- `bright blue fins`

## Scavenger
- according to early alpha transformation spells, there could have been two types of scavengers (there was a spell to transform into `Scavenger2`)

## Shadowbeast
- mentioned as `Schattenläufer` (German for `Shadow Walker`) in 1.01d alpha
  - this is a nickname for _Shugul Sath_, a legendary monster of similar posture from _Sleeper's Ban_
  - compare these two lists from a compiled file: `SCAVENGER SCAVENGER2 SHADOWBEAST SNAPPER` and `Scavenger n/a Schattenläufer Snapper`
  - another place in compiled `gothic.dat` from the same version also maps `Schattenläufer` to `Shadow.mds`
- codename is just `shadow`

## Skeleton
- the only monster in the alpha builds using engine attribute `regrow`
  - has value of 80, all the other monsters and NPCs have 0
- types of skeletons: normal, warrior, scout, mage

## Stonestrangler
- probably later renamed `minecrawler`
- `they are five meters long and look like giant cockroaches` (_Sleeper's Ban_)
- `they dig attack tunnels through the stone and camouflage the opening to look like solid rock (...) BOOM! - a large, hooked arm rattles towards you, grabs your back and pulls you one of these tubes, faster than you can say "stonestrangler"` (_Sleeper's Ban_)
- `we thought stonestranglers had already feasted on you and laid eggs in your flesh.` (_Sleeper's Ban_)
- have poisonous venom
  - `The crawlers poisoned me. I need antidote.` (`DIA_FREEMINEORC_WASTUN_INFO_06.WAV` / 1.01d alpha)

## Troll
- `Trolls are cave dwellers` (from: `Phoenix Monsters` design doc)
- Gothic Comic shows trolls marching together with orcs as _Northern Hordes_
- early design doc mention `war trolls` accompanying orc patrols in the abandoned mine
  - German: `Orkpatroullien in VM (incl. Kriegstroll?)` (in `Phoenix Hauptmissionen`)
- trolls were supposed to have two special attacks  (described in `Phoenix Monsters`):
  - when encountered in underground tunnel `Hits the ground, rocks rain down`
    - this visual effect was actually implemented in an alpha release (camera shaking + falling decals of giant rocks)
    - German: `Schlägt auf Boden, Felsen prasseln herab`
  - `Grabs player character and bites off his head`
    - German: `Packt SC und beißt ihm den Kopf ab`
- `Trolls can move boulders/stone portals that are too heavy for the player character`
  - German: `Trolle können Felsbrocken/Steinportale verschieben, die für den SC zu schwer sind.` (from: `Phoenix Monsters` design doc)

## Undead Dragon
- `Undead Dragon in chokepoint on the way towards the Sleeper`
  - from early design docs
- it's mentioned next to a `weapon with which you can destroy undeads` 
  - from early design docs
- `Undead dragon in AT3 [Ancient Temple part 3] - PC [Player Character] finds scriptures describing how the temple servants of the Sleeper captured a dragon to protect access to the inner sanctuary, it is said to be chained there - when the PC enters the corresponding room he only finds the broken chains...`
  - `Untoter Drache in AT3 – SC findet Aufzeichnungen, in denen beschrieben ist, wie die Tempeldiener des Schläfers einen Drachen gefangengenomen haben, um durch ihn den Zugang zum inneren heiligtum zu schützen, er solle dort angekettet sein – wenn der SC den entsprechenden Raum betritt findet er nur noch die gesprengten Ketten vor...`
  - from Phoenix Level Design document
- later was replaced by the _Fifth Orc Shaman_, which similarly is an undead boss blocking the only way to _The Sleeper_, and has to be defeated with a special weapon
