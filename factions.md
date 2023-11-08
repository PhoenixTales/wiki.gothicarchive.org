---
title: Factions
---

## Alchemists Of Fire
- in the final game release known as `Fire Mages`
  - also mentioned as `Circle Of Fire`, already in alpha
  - `KDF_40_FoeStoleFromMyGuild`: `You've stolen from the circle of fire`
- 6 of them accidentally imprisoned in Khorinis Mine Valley
  - `perform some services to the ore barons, in return for which they're allowed to play their own games.` (_Sleeper's Ban_)
  - _Master Of Fire_, _Guardian Of The Circle_, _Ore Supplier_, _The Apprentice_, _Advanced Apprentice_, _The Wanderer_ 

## Alchemists Of Water
- in the final game release known as `Water Mages`
  - also mentioned as `Circle Of Water`, already in alpha
- in some design docs referred to as `Healing Mages` (German: `Heilmagier`)
- in poor relationship with _Alchemists Of Fire_ under the barrier
  - `KDF_40_FriendKilledMage`: `we don't like the circle of water`
  - "we don't like" doesn't imply hostility; the guild attitudes between them are still friendly (`guilds.d`/`GIL_ATTITUDES`)
- 6 of them accidentally imprisoned in Khorinis Mine Valley
  - `have been rambling for years that they want to carry out an escape plan` (_Sleeper's Ban_)
  - `they brew their potions with the ore and spoil it so that it can no longer be used; and this brew has so far not harmed the barrier`  (_Sleeper's Ban_)
- dominate the _New Camp_, _Lee_ is jealous about that (design doc `NPCs per Guild`)

## Army
- army is led by generals that are also king's trusted advisors
  - `King (...) left his generals to deal with the few remaining enemy troops`
- special assignments like escorting _Royal Judges_ are done by _Royal Guard_ in gold-themed armors
- there's a fleet of _Royal Warships_
  - `I was involved in a mutiny as mate of a royal warship.`
  - `The King's Armada sank ship after ship`
- army service is mandatory 
 - `all the others that were forced by the king to fight in the war against the orcs` (_Milten_ in Gothic I comic)
- _Myrtana_ wins battles thanks to `the interplay of army and magic`

## City Watch
- guard city of _Khorinis_
- distinct from _Royal Guard_
- `The city watch has its eyes on everyone who's suspicious` (_Gorn_ in Gothic I comic)

## Crusaders
- mentioned in _Phoenix_ Konzept from 11/1997
- probably some subset of Sect Templars
- there's mention of _Crusade_ (`Kreuzzug`)

## The People Of Old Camp
- German: `Das Volk` (`VLK`)
- `Not an actual guild, rather a collection of all NPCs in the Old Camp that don't belong to any "proper" guild` (design doc `NPCs per Guild`)
- around 50 people: includes _Beggars_, _Dayworkers_, _Crooks_, _Traders_, _Thugs_, _Burnouts_, _Tinkerers_
- in original English translation of the early alpha translated in one place as `normal people`
  - `NOV_130_FriendDefeatedByVlk`: `You lost a fight with the normal people.`
- early in the development they were merged with _Slave Diggers_ (`GIL_VLK = 5; // Volk/Buddler`)
- named alpha members: `Crumb`, `Dumb`, `Numb`, `Sira`, `Nimblefinger`
  - `Nimblefinger` is officially a _Slave Digger_, but actually earns by trading stolen goods
  - `Crumb`, `Dumb` and `Numb` spend their time listening to preaching of `Quicktongue`

### Beggards
- German: `Bettler`
- `sometimes good informants` (design doc `NPCs per Guild`)
- `pitiful & powerless` (design doc `NPCs per Guild`)
- `sometimes insane, lunatic; sleepwalking` (design doc `NPCs per Guild`)
- 7 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Workers
- German: `Tagelöhner`
- `do heavy work such as building, carrying & digging; otherwise just hang around` (design doc `NPCs per Guild`)
- they are strong / muscular (design doc `NPCs per Guild`)
- 12 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Crooks
- German: `Ganoven`
- `when even the Shadows refuse to do something, these get involved; they really do everything for money` (design doc `NPCs per Guild`)
- `like to accept newcomers` (design doc `NPCs per Guild`)
- 8 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Traders
- German: `Krämer/Hehler`
- shopkeepers and `fences` (dealers of stolen goods)
- `know how to protect themselves (and their goods), hire Crooks and Thugs` (design doc `NPCs per Guild`)
- 8 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Thugs
- German: `Schläger`
- `when there are not enough of Mercenaries available, Ore Barons resort to them` (design doc `NPCs per Guild`)
  - `Mercenaries` refers to _Mercenaries Of Old Camp_ (`SLD`)
- `shopkeepers need thugs as well` (for protection) (design doc `NPCs per Guild`)
- `often drunk` (design doc `NPCs per Guild`)
- 8 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Burnouts
- German: `Ausgebrannte`
- `completely insane or permanently on the edge of insanity` (design doc `NPCs per Guild`)
- `rejects of The Sect who were "disposed" in the Old Camp` (design doc `NPCs per Guild`)
- 3 of them live in _Old Camp_ (design doc `NPCs per Guild`)

### Tinkerers
- German: `Kesselflicker`
- `advanced Workers, capable of manual labor` (design doc `NPCs per Guild`)
- 4 of them live in _Old Camp_ (design doc `NPCs per Guild`)

## Guardians of New Camp
- in the final game release known as `Mercenaries of New Camp`
- known as `die Recken` in German version of _Sleeper's Ban_, and as `Die Garde` (`GRD`) in alpha builds
- protect _Alchemists of Water_, farmers living in _New Camp_ and _Miner's Association_ of _Free Camp_
  - `The miners from the Free Camp need our protection and we need their ore.` (`Inf_Grd_FL`)
- 4 of them are bodyguards of _Lee_, `with healing ability; absolutely loyal` (design doc `NPCs per Guild`)

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

## Guild of Mages
- only mentioned in _Sleeper's Ban_, as `der Magiergilde`
- ruled by 12 _Principals_ (`Prinzipalen`)
  - originally they were all _Alchemists Of Fire_, later 6 of them were replaced with _Alchemists Of Water_

## Masters
- German: `Die Meister` (`MST`)
- secret secondary guild accepting members of all the camps
- it's much harder to discover and join than the three camps
- known members: Diego, Milten, Lester, Gorn, Lares
- player was supposed to have a chance of discovering and joining it
- `SLD_21_NSCASpeech`: `Just listen people. This is the masters message.` (unclear if he actually means this guild)

## Mercenaries Of Old Camp
- in final released version of Gothic I known as `The Guards Of Old Camp`
- in German version of `Sleeper's Ban` known as `Söldnergilde` and in alpha builds as `Die Söldner` (`SLD`)
- in original English translation of the alpha builds called `soldiers`
  - `Nobody'll ever get away with killing a soldier of the ore-barons`
- `the group that puts the Barons' ideas into practice.`
- supposed to protect the _Diggers_
  - `You've knocked down a Digger. That wasn't clever. The Ore-Barons pay us for protecting them, so don't do that shit again`
- they don't trust people who can speak with Orcs, this is the reason why they did not hire _Sira_ as one of them
  - source: comment in 0.56 alpha script `_Autoren/Vahdat/Npc_Sira.BAK`
- 32 people: _The Captain_, _Arena Master_, _The One-Eyed_, _The Lieutenant_, _Gladiators_, _Gate Guards_, _Castle Guards_, _The Grinder_
- 3 of the _Mercenaries_ specialize in arena fighters and use title `Gladiators` (German: `Gladiatoren`) (design doc `NPCs per Guild`)
- `Hierarchy has a strict military feel, discipline is enforced through brute force` (design doc `NPCs per Guild`)
- `Despite strong denials, the Mercenaries differ little in their structure from the Orcs!` (design doc `NPCs per Guild`)

## Miner's Association
- German: `Der Schürferbund` (`SFB`)
- they are working in their mine voluntarily and keep most of what they dig, as opposed to _Slave Diggers_ of _Old Camp_
- in the final game release, translated as `scrapers` (`NAME_Schuerfer = "Scraper"`)
- work at _Free Mine_ and live at _Free Camp_
- `A whole pack of unruly miners has settled in the Free Camp.`
- allied with the _New Camp_
- pay _Guards Of New Camp_ for protection from _Mercenaries Of Old Camp_
  - `The miners from the Free Camp need our protection and we need their ore.` (`Inf_Grd_FL`)
- they conduct their own trade with the outside world separately from _Old Camp_
  - they use the same _Exchange Place_ as _Old Camp Mercenaries_, who are aggressive about this
  - `Escorting the hunters' association to the trading center is usually associated with trouble. Those damned mercenaries` (`Inf_Tpl_HP`)

## Morlocks
- removed pre-alpha guild, already in 0.56 alpha mentioned as `GIL_MRL = 17; // (gibt es nicht mehr)` (`no longer used`)
- was on the list of human guilds, separate from `GIL_ORC = 21` which is on the list of monster guilds
  - later numbers were rearranged, so that we got `GIL_ORC = 17` on that position
- they were probably either allies of _Orcs_, or _Half-Orcs_
- name `morlock` comes from fictional underground orc-like species in public domain 1895 novel `The Time Machine`

## Nobility
- _The Nobles_ have "dirty business" and are jelaous of generals' influence
  - design docs imply that general(s) are also "Lords" (nobles)
- known ranks of nobility: `king`, `lord`, `burgrave`, possibly `baron`
  - `ore barons` likely based their title on a title used outside of the barrier rather than inventing it from scratch

## Rogues
- German: `Organisator` (`ORG`)
- free criminals living in _New Camp_, mostly robbing _Old Camp_ and it's members
- subgroups:
  - _Thugs_ (German: `Schlaeger`)
  - _Robbers_ (German: `Raeuber`)
  - _Bouncers_ (German: `Tuersteher`)
  - _Blackmailers_ (German: `Erpresser`)
  - _Vagabonds_ (German: `Die Herumtreiber`) (`are assigned to simple tasks; still in training`) (design doc `NPCs per Guild`)
- 10 people: _The Head_, _The Specialist_, _The Uncaught_, _Rogues_, _Vagabonds_, _The Prophet_

## Orc-hunters
- mentioned as `Ork-Jäger` by _Milten_ in 1.01d alpha dialogue `Info_Milten_SHTESTSEAL_02_06`
- members of _Old Camp_ who were hunting orcs, until they became victims of a curse that turned them into undead and imprisoned under _Stone Circle Of The Damned_
- `A few years ago, an orc hunter from the Old Camp and a few companions were careless enough to enter the tomb`
  - German: `Vor einigen Jahren war ein Ork-Jäger aus dem Alten Lager zusammen mit ein paar Kumpanen unvorsichtig, genug die Gruft zu betreten.`
- the final english translation changed it to `Ore Baron out pleasure hunting for Orcs`

## Ore Barons
- rule the _Old Camp_ since the rebellion of the prisoners, their leader is the _Big Boss_
- pose as noblemen and in 0.56 alpha call themselves `The Honorable Society Of Ore Barons`
  - German: `Die ehrenwerte Gesellschaft der Erzbarone`
- one of them always joins the _Convoy To Exchange Place_
  - `The convoys that come from the Exchange Place are swarming with mercenaries. Even an Ore Baron is always there` (`Inf_Grd_HP`)
- there are three _Mercenaries Of Old Camp_ (`SLD`) bodyguarding them (`SLD_BARONSGUARDN1-3`)
- alpha versions contain 5 of them:
  - _Big Boss_ (`EBR_100`)
  - _Right Hand_ (`EBR_101`/`Rechte Hand`)
  - _Left Hand_ (`EBR_102`/`Linke Hand`)
  - _Grey Baron_ (`EBR_103`/`Grauer Baron`)
  - _Foreign Minister_ (`EBR_104`/`Aussenminister`)
- design doc `NPCs per Guild` lists 6 more and omits the _Gray Baron_
  - _Treasurer_
  - _Teacher_
  - _Baron Of Mercenaries_
  - _Young Baron_
  - _Caravan Leader_
  - _Shadow Baron_

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
- their leader is _The Landlord_ (design doc `NPCs per Guild`) who is forms council with 3 `bakers`, but `they have no power`
  - German: `Brotmacher bilden zusammen  mit dem Gutsherrn den "Zunftrat", der jedoch _keinerlei_ Macht hat` (design doc `NPCs per Guild`)

## Psionics
- `orange-clad` (_Sleeper's Ban_)
  - this is clear reference to Buddhist Monks, who wear orange robes and are famous for meditating (some Tantric Buddhists even smoke flowers of certain psychoactive plant)
- `spend their whole day singing songs, stuffing themselves with all sorts of drugs as if it was a cotton candy` (_Sleeper's Ban_)
- `those 'I see the light' guys who believe that the visions and nightmares have something to do with someone deep down, an uncanny power that saves us all` (_Sleeper's Ban_)
- `bang like rabbits` according to an _Old Camp_ member, and according to _Quicktongue_ they are the only faction where normal members can have fun with `babes` 
- their gurus are told to be able to `float in the air`
- `They report some power that resides deep beneath us. And they try to awaken this power and call for help with some dark ceremonies.` (_Sleeper's Ban_)
- `hold black masses every now and then in order to get through to this being with magical rituals` (_Sleeper's Ban_)
- some blame them for demonic visions and earthquakes troubling the prisoners
- script programmers refer to them as `sect suckers` even when it's about one psionic talking about another
  - `NOV_130_FriendKilledSectSucker`: `Hey you killed a friend of all of us. Go away and beg the sleeper for pardon.`
- in original English alpha translation they call each other rather cute names (?!)
 - `NOV_130_FriendStoleFromEBr`: `Stupid pumpkin, you stole from the baron`
- `Join our sect. You won't have to work as hard as you do here.` (`Quicktongue_ProcessNpc` / 0.56c alpha)
- `When was the last time you got PSI? Join us. We have PSI.` (`Quicktongue_ProcessNpc` / 0.56c alpha)
- `When was the last time you got a woman? If you join us, you'll get women as well.` (`Quicktongue_ProcessNpc` / 0.56c alpha)
- `Have you had a decent meal recently? See, nobody is hungry in our sect.` (`Quicktongue_ProcessNpc` / 0.56c alpha)
- `We take good care of our people, in the Old Camp there is only oppression` (`Quicktongue_ProcessNpc` / 0.56c alpha)
- when _Gurus_ want to get rid of someone, _The Lobotomist_ drives them permanently insane with his psionic spells, and they end up as _The Burnouts_ in the _Old Camp_

## Royal Guard
- escort the main character during his sentencing
- appear in game scripts as `CS_ESKORTE1-6`
- wear gold-themed armors using the same 3d model as prison guard armors (which became armors of _Old Camp Mercenaries_)
- in commented-out scripts use two-handed swords and crossbows

## Shadows Of The Old Camp
- secretive spies and assassins working for _Ore Barons_
- their headquarters are in the dungeons of _Old Camp Castle_
- for obvious reasons they are unlikely to wear easily recognizable uniforms and may even pretend to be members of other factions
- in the final release of the game they are no longer spies, assassins nor secretive, and instead are more like simply a lower rank of the _Old Camp Guard_ and consistently wear red armors
- _The Invisible Man_ is their leader (design doc `NPCs per Guild`)
- 15 people: the leader, 4 Assassins, 8 Spies, messenger and recruiter

### Assassins
- German: `Meuchler`
- `capable Shadows for routine work` (design doc `NPCs per Guild`)
- 4 of them live in _Old Camp_

### The Spies
- German: `Spione` and `Spitzel`
- they work undercover and pretend to be normal members of all the camps, including _Old Camp_
- 4 of them live in _Old Camp_, 1 in _New Camp_, 1 in _Free Camp_ and 1 in _Sect Camp_ (design doc `NPCs per Guild`)

## Slave Diggers
- miners of the _Old Camp_
- they are forced to work in their mine and can only keep a fraction of what they dig, as opposed to members of _Miner's Association_ of _Free Camp_
- disdainfully called `work horses` or `working animals` by other _Old Camp_ members
  - `KDF_40_FoeKilledDigger`: `Hey, nobody gets away with killing our working animals`
  - `OU_NPCS_DEMO3_SLD_GRIMFACE_225`: `Trying to outright talk us into giving up our workhorses` (German: `Versucht doch glatt uns unsere Arbeitstiere abzuschwatzen`)

## Stomp's Family
- only mentioned in _Sleeper's Ban_
- `respected merchant family`
- `one of the largest trading houses in his hometown, used to living in a large mansion, looked after by servants`
- wife of the family's head died, and he married again
  - he has two sons, one from the first marriage who is his heir, and one from second marriage who is jealous of being the heir
  - `his stepbrother, the man who came into the family through his father's second marriage and envied him from the start the position of heir.`

## Trappers
- belong to the _Free Camp_ and are involved in defending the _Free Mine_ from the underground monsters
- hunt in forests and caves by bow and setting up traps
  - `nutzt die Fallenstellerei um Nahrung zu beschaffen` (design doc `NPCs per Guild`)
- some of them are `constantly in action to protect the miners from orcs and monsters using traps` (design doc `NPCs per Guild`)
- have the `best archer in the whole prison` and many with `with modest bow/trap skills` (design doc `NPCs per Guild`)
- known in alpha builds as `Die Fallensteller` (`FLL`)
- there are around 20 of them: _The Chief_, _Hawkeye_, _Cave Horror_, _The Trapper_, _Hunters_, _Miners_, _Runners_  (design doc `NPCs per Guild`)
- their _Hunters_ losely correspond to _Hunters Of New Camp_ from the release version (_Aidan_, _Ratford_ and _Drax_)
  - that's because the _Free Camp_ was merged with the _New Camp_, which also became the new owner of the _Free Mine_

