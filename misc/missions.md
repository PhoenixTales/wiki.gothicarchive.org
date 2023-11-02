---
title: Missions
---

## Arena Betting
- first appears in 0.56c alpha as `Mis_ArenaBetting`
- `You just need to buy a bet slip for the next day. How about it?`
- `Here's your betting slip for 'Blade Fodder'. He's a great fighter. Come back here after the fight.`
- `Bad luck, 'Blade Fodder' unfortunately lost`
- internal comment: `The player buys a betting slip from the arena master, which he has to bring back the next day. Since the Arena Master is a sneaky cheater, the player automatically loses.`
- offered by  _Scatty The Arena Master_
- it is hinted that player can earn by participating himself
  - `I've heard that you've won the fight in the arena. You might as well challenge the champ- if you survive it you'll be stinking rich.`

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

## Bring Minecrawler Queen Eggs
- first appears in 1.01d alpha as `Mis_2_PSI_Kalom_BringMCQEggs`
- basically identical as in the final game
- offered by _Cor Kalom_

## Find Herb
- first appears in 1.01d alpha as `Mis_3_NC_CorAngar_FindHerb`
  - unclear why faction identifier is `NC` (_New Camp_) rather than `PSI` (_Sect Camp_)
- `Get me the medicinal herbs from the swamp. Five of the strongest variety should be enough! Hurry up!`
- offered by _Cor Angar_

## Drug Monopoly
- first appears in 1.01d alpha as `Mis_1_Psi_DrugMonopol`
- `Salm, one of our brothers got together with some poor souls from the New Camp and started making drugs. He gets the swamp weed and everything else they need and the others make the drugs. We cannot tolerate others making drugs - only we make drugs! You should meet these guys, pretend to be a new courier and find out where the laboratory is hidden. Brother Salm has decided to leave us, and he won't bother you. Simply tell his buddies that you got Salm out of the way so that you can take over his business; that will seem more credible to them than anything else. Before Salm left, he confided in us that he always met with them at night at the wooden tower not far from the New Camp to exchange the things stolen from the temple. Go there and find out where the lab is.`
- `I found the laboratory. It is near the New Camp by the Lake with the hut. There is a cave behind some bushes, that's where it is.`
- offered by _Baal Namib_

## Help Brothers
- first appears in 1.01d alpha as `Mis_1_Psi_HelpBrothers`
- `Some brothers need help in the swampweed fields. Go to them and simply ask them how you can help them.`
- `Ah, you have the swamp herb with you, good. You were definitely a great help to your future brothers.`
- offered by _Baal Namib_

## Bring Focus Stones
- first appears in 1.01d alpha as `Mis_3_NC_Saturas_BringFoki`
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

## Steal Old Sword From The Chapel
- only partially implemented in early alpha builds and impossible to finish
- `Would you like to have my powerful magical artifact of fire magic? Bring me that old sword from the chapel.`
- the reward is a _Fire Stone_ of the dead _Apprentice of Hellfire_
- offered by _Nimblefinger_, trader of stolen goods

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
  

