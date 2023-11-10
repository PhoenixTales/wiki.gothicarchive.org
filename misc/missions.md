---
title: Missions
---

## Arena Betting
- first appears in 0.56c alpha as `Mis_ArenaBetting`, mentioned in 1.01d alpha as `Scatty_WannaBet`
- `You just need to buy a bet slip for the next day. How about it?`
- `Here's your betting slip for 'Blade Fodder'. He's a great fighter. Come back here after the fight.`
- `Bad luck, 'Blade Fodder' unfortunately lost`
- internal comment: `The player buys a betting slip from the arena master, which he has to bring back the next day. Since the Arena Master is a sneaky cheater, the player automatically loses.`
- offered by _Scatty The Arena Master_
- there's also a later version of related dialogue (`SIT_1_OC_SCATTY_EXPLAINARENA` in 0.94 alpha)
  - `PLAYER: You're the one who arranges the fights?`
  - `SCATTY: A newcomer! Interested in betting?`
  - `PLAYER: What can I win?`
  - `SCATTY: Depends who you put your money on. Kharim is the champion. Odds are 2 to 1. He has a different challenger each evening.`
 
## Arena Championship
- mentioned in 1.01d alpha as `Scatty_WannaFight`
- `I've heard that you've won the fight in the arena. You might as well challenge the champ- if you survive it you'll be stinking rich.`
- `The last fight was bad luck for me. Next time I'll put a bet on you.`
- `You have really won!!! Who would have thought that you'd be worth betting!`
- `Man, you really got beaten up in the arena, didn't you?`
- offered by _Scatty The Arena Master_

## Bring Psi Potion
- first appears in 0.56c alpha as `Mis_HolyWater`
- `Hey, I have a mission for you! I urgently need a PSI vial.`
- player needs to bring him item `PSI_POTION`, corresponding to _Sruup_
- internal comment: `The player must obtain a vial of Holy Water and bring it back to the client.`
  - this comment is incorrect/obsolete, as the quest actually only involves `PSI_POTION` and not `HOLYWATER` (both items exist in game)
- offered by _Hawkeye_
- reward is a _Rune Sword_

## Devil Mushroom
- first appears in 0.56c alpha as `Mis_DevilMushroom`
- `Listen, you're going to do me a favor! I sent my apprentice to Troll Canyon. It's beyond the bridge by the crippled tree. Look for him there and if he's dead, at least bring me the Devil Mushroom. Once you've done that, report to me at the chapel.` 
- internal comment: `The player must bring a devil mushroom to a fire mage. This is among the belongings of the dead apprentice who died in a ravine in front of the old camp.`
- offerred by _Hellfire_
- when this mission is in progress, guards allow player to enter the Old Camp Castle
  - in progress: `Guard: 'Hellfire told me you can pass!'`
  - after: `Guard: 'So, from now on the following applies again: You have no business here. Is that clear!?!'`
- reward is a _Potion Of Inferno_

## Bring Minecrawler Queen Eggs
- first appears in 1.01d alpha as `Mis_2_PSI_Kalom_BringMCQEggs` and is mentioned in another place as  `CorKalom_BringMcqBalls`
- basically identical as in the final game
- offered by _Cor Kalom_

## Find Herb
- first appears in 1.01d alpha as `Mis_3_NC_CorAngar_FindHerb`
  - unclear why faction identifier is `NC` (_New Camp_) rather than `PSI` (_Sect Camp_)
- `Get me the medicinal herbs from the swamp. Five of the strongest variety should be enough! Hurry up!`
- offered by _Cor Angar_
- according to _Mike Hoge_, both _Cor Kalom_ and _Cor Angar_ actuallt wanted _Y'Berion_ to die so that one of them can take over the leadership
  - _Cor Angar_ did not send the _Nameless One_ for herbs in hope of saving _Y'Berion_, he just wanted to keep _Nameless One_ busy somewhere away so he doesn't interfere with making sure that _Y'Berion_ dies

## Drug Monopoly
- first appears in 1.01d alpha as `Mis_1_Psi_DrugMonopol`
- `Salm, one of our brothers got together with some poor souls from the New Camp and started making drugs. He gets the swamp weed and everything else they need and the others make the drugs. We cannot tolerate others making drugs - only we make drugs! You should meet these guys, pretend to be a new courier and find out where the laboratory is hidden. Brother Salm has decided to leave us, and he won't bother you. Simply tell his buddies that you got Salm out of the way so that you can take over his business; that will seem more credible to them than anything else. Before Salm left, he confided in us that he always met with them at night at the wooden tower not far from the New Camp to exchange the things stolen from the temple. Go there and find out where the lab is.`
- `I found the laboratory. It is near the New Camp by the Lake with the hut. There is a cave behind some bushes, that's where it is.`
- offered by _Baal Namib_

## Bring Focus Stones
- first appears in 1.01d alpha as `Mis_3_NC_Saturas_BringFoki` and is also mentioned as `SaturasBringFoci`
- `You actually did it. Thank you. Now we can start the ceremony. I will gather my brothers to begin concentrating the energy on the axles. Then we will use the focused force to transfer the energy along a concentrated path...`
  - original German text: `Du hast es tatsächlich geschafft. Danke. Nun könnenwir mit der Zeremonie anfangen. Ich werde meine Brüder zusammenrufen, damit sie mit der Bündelung der Energie auf den Achsen beginnen. Dann werden wir mit der fokussierten Kraft, die Energie über eine konzentrierte Bahn...`
- offered by _Saturas_
- it seems that as opposed to the final version of the quest, initially _Fire Mages_ were not neccessary

## Demand the Ring
- first appears in 1.01d alpha as `Mis_1_NC_Ringfordern`
- `I come from Lares. He wants his ring back that you stole from him.`
- `Oh what? Didn't he tell you that he lost the ring in a bet!? You are making a big mistake. I have friends here, you don't! So go away!`
- offered by _Lares_ 

## Milten's Mission
- first appears in 1.01d alpha as `Mis_1_Milten`
- involved locations `FP_MIS_1_MILTEN` and `FP_MIS_1_MILTEN_ITEM`

## Steal The Old Sword Of Fire Mages
- only partially implemented in early alpha builds and impossible to finish
- `Would you like to have my powerful magical artifact of fire magic? Bring me that old sword from the chapel.`
  - there is an older version of this dialogue: `Would you like to have my powerful magical artifact of fire magic? In return, bring me the old sword that the magician named Hellfire carries around with him.` (`OU_NPCS_DEMO3_VLK_NIMBLEFINGER_166`-`170`)
  - _Hellfire_ indeed carries magically enhanced _Rune Sword_
- the reward is a _Fire Stone_ of the dead _Apprentice of Hellfire_
  - in older version it was _Potion Of Inferno_, `An incredibly powerful potion that spits fireballs` (`OU_NPCS_DEMO3_VLK_NIMBLEFINGER_168`)
  - _Potion Of Inferno_ later was changed to be a reward of another quest (_Devil Mushroom_), given by _Hellfire_ himself
- offered by _Nimblefinger_, trader of stolen goods
- `KDF_40_ENDGuard`: `I have to guard this cause it's important and you have to leave me alone`

## Bow Practice
- only appears as traces in 0.64b alpha build as `SLD_20_BoPr`
- offered by `SLD_20` (possibly early prototype of _Borik_)
- since player can fail both by not hitting the target at all, and by barely hitting it, it suggests that either auto-aiming was supposed to be disabled, or that result was randomized (as opposed to bow shooting in the final game, which is always perfectly auto-aimed)
- we know some of the sentences spoken and their context:
  - `WannaShoot`: `Do you want a go as well?` (offer)
  - `TooClose`: `Why don't you get even nearer?`
  - `TooClose2`: `Just put it in with your hand!`
  - `Wait`: `Wait.`
  - `Now`: `Shoot now`
  - `Yawn`: `Still today?`
  - `OutOfWay`: `Get out of the way, bugger.`
  - `HandsOffAim`: `Get away from the target.`
  - `Lose`: `That was poor.` (failure)
  - `Lose2`: `Hey! He's hit the target!` (failure)
  - `Win`: `Not bad.` (success)
  - `LetMe`: `Hey! It's my turn.`
  - `LetMeOrSuffer`: `I've told you to get out of the way.`
  - `ShotBetween`: `Wait till it's your turn.`

## Ore For Mages
- deliver ore to _The Ore Supplier Of Fire Mages_
- mission briefly mentioned in design doc `NPCs per Guild`

## Escort The Wanderer
- escort _The Wanderer_ exploring some dungeons
- mission briefly mentioned in design doc `NPCs per Guild`

## Get Drugs For The Initiate
- mission briefly mentioned in design doc `NPCs per Guild`
- _The Initiate_ is a _Novice_ almost ready to become a _Guru_
- he needs `drugs and other things` for his `ascension`

## Something For The Orgy
- mission briefly mentioned in design doc `NPCs per Guild`
- _The House Steward_ organises orgies in the _Sect Camp_ and needs you to arrange something for him

## Rescue The Sniffer
- mission briefly mentioned in design doc `NPCs per Guild`
- _The Mine Inspector_ asks you to rescue and bodyguard _The Sniffer_
- _The Sniffer_ `Every now and then disappears into the mines for a few days` and `knows ALL secret passages and hiding places in the mines and orc caves` but apparently this time got into trouble

## Maps For The Explorer
- mission briefly mentioned in design doc `NPCs per Guild`
- novice _The Explorer_ needs a _Dungeon Map_, as he is exploring undergrounds to find a way to _The Ancient Temple Of The Being_ (_Sleeper's Temple_)

## Letter From A Fire Mage
- this is example quest for first level player character in design doc `Story 3.3 draft`
- given by `Zampalo, 6th level Fire Mage from Old Camp`
- `FIRE MAGE: Hey you! Deliver a message for me! The demon summoner has his tower on the large cliff in the southeast. You will bring him this letter from me.`
- the player has to accept, or otherwie this powerful Fire Mage will attack him for disobedience
- `The letter says: Great Master. I know I am unworthy, but I have reached the final circle of fire and now I want to be instructed by you. Your devoted servant Zampalo`

## Letter From The Shadows To Lee
- mission offered by _Shadows Of The Old Camp_, described in design doc `Story 3.3 draft`
- for a low level player character who did not join any faction yet
- `We need someone inconspicuous. You're still new here. Do you want to make some friends?`
- `In the new camp there is one they call the Duke. He should find this in his bed. If you do it without getting caught, I'll put in a good word for you with Grmbl, our leader.`
- the letter is sealed and says: `Duke! The one who brought this letter could have brought a knife... Maybe protecting the Free Mine with your boys isn't such a good idea after all. THE SHADOW`

## Bring Milking Vessel to Abandoned Mine
- mission described in design doc `Story 3.3 draft`
- given by _Baal-Orun_
- `BAAL-NAMIB: Baal-Kagan is now working as a milker with the hunters in the abandoned mine. He forgot his Milking Tool. Bring the Milking Tool to Baal-Kagan. You will find the hunters on the second level of the Abandoned Mine.`
- `When the player gets close to the hunters, a strange scene takes place: player turns a corner and looks down a long hallway that ends in a large round chamber. After about ten meters a corridor branches off to the left. BAAL-KAGAN suddenly flees from two Minecrawlers with his hands tied behind his back into the very hallway where the player is standing. BAAL-KAGAN rushes down the corridor in a panic, away from the player character, towards the round chamber. The Minecrawlers chase after him.`
- `BAAL-KAGAN runs for his life, all the while shouting: 'Why are you doing this to me? Why are you doing this to me? This is a SHITTY idea!'`
- `It echoes back from the chamber: 'Haha, why are you forgetting your tools again.'`
- `BAAL-KAGAN responded in a panic: 'Heeeeeelp!!!'`
- `He screamed and disappeared into the chamber, where a fierce battle then broke out, in which two Minecrawlers lost their lives and a novice almost lost his mind. If the player now enters the chamber, he will meet the hunting party he is looking for there. BAAL-KAGAN lies exhausted on the floor, panting for air the whole time.`
- `PLAYER: 'I... I... bring the tools for Baal-Kagan.'`
- `BAAL-KAGAN: 'Couldn't you (gasp) come (gasp) sooner?!'`
- `GOR-NA-BA: 'Shut up, Kagan. It was time to discipline you anyway. You’ll never forget your tools again now, will you?'`
- `BAAL-KAGAN: 'Certainly (gasp) not. Promised.'`
- `GOR-NA-BA: 'Besides, you can be proud of yourself.'`
- `BAAL-KAGAN: 'Why? Because I’m (gasp) not dead?'`
- `GOR-NA-BA: 'No, because your punishment also gave me a new hunting technique. It makes everything a lot easier when a Novice drives the Minecrawlers towards us.'`
- `BAAL-KAGAN: 'Does that mean…'`
- `GOR-NA-BA: 'Exactly.'`
- `PLAYER: 'Now what about BAAL-KAGAN’s tools?'`
- `GOR-NA-BA: 'Hand it over and get out!'`

## Minecrawler Bait
- mission briefly mentioned in design doc `Story 3.3 draft`
- let the Minecrawlers chase you in the mine (probably _Abandoned Mine_) and bait them to the _Templars_ who kill them
- second part of exam for joining _The Sect's Novices_, ordered by _Baal Namib_

## Sect's Loyalty Test
- mission briefly mentioned in design doc `Story 3.3 draft`
- the final part of exam for joining _The Sect's Novices_, ordered by _Baal Namib_
- unclear what was it supposed to be about

## Strings for Baal Moc's lute
- mission briefly mentioned in design doc `Story 3.3 draft`
- _Baal Moc_ plays lute for _Y'Berion_
- he needs new strings for it

## Message to a Sect dropout
- mission described in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- _Delon_ deserted from the _Sect Camp_ and joined _Old Camp_
- player needs to find his hut in the _Old Camp_ and deliver a letter to him
- the letter says `Delon. You betrayed us. Soon the Sleeper will judge you.`

## Stand guard during Sect dropout's murder
- mission described in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- _Gor-Hanis_ is going to murder _Delon_ in his hut
- _Ore Barons_ aren't supposed to find out who did it
- player has to distract a _Beggar_ and _Mercenary_ who are passing by

## Get a weapon from a mercenary
- mission briefly mentioned in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- `As a Templar you need a weapon. We don't have a blacksmith, so you'll have to get your own weapon. A tip: late in the evening you have a good chance of running into a drunk Mercenary in the Old Camp. Take what you need from him.`

## Taste of Psionic Magic (Forget)
- mission briefly mentioned in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- `I'll give you some magic for your next task. When you swallow this powder, you have ten minutes to make someone forget everything they have experienced in the last few hours. A shadow from the old camp crept in unnoticed among us today and learned things that he is not allowed to tell the archbarons. Look for him in the Old Camp. He disguised himself as a novice. Of ours, only Baal-Tarin is in the Old Camp. So if you see another novice, that will be the shadow. Let him forget everything he learned about us today`

## Taste of Psionic Magic (Control)
- mission briefly mentioned in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- requires using _Control_ spell to solve some practical problem that is not explained in the document

## Catch the intruder
- mission briefly mentioned in design doc `Story 3.3 draft`
- given by _Gor-Na-Tot_ to a _Templar_ candidate
- `The player is assigned to guard tower at night. As soon as he takes his post, a figure tries to enter the camp unseen, right in front of the player. The player has to catch the intruder. The problem is that he is alone. All the other guards seem to have disappeared from view. In retrospect, the whole thing turns out to be a test.`

## Mushrooms for Baal-Orun
- mission briefly mentioned in design doc `Story 3.3 draft`
- given by _Baal-Orun_
- `In the Abandoned Mine, mushrooms grow in some places that cannot be found anywhere else. Bring me at least a dozen. They will recognize you.`
- `The mushrooms begin to glow slightly as the player approaches them`
