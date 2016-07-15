/*
Use these questions if the user starts at:
	Kingdom of the North
	Kingdom of the Stormlands
	Kingdom of the Mountain and the Vale
	Principality of Dorne
	Kingdom of the Isles and Rivers

if user picks kingdom of the north
	if user answers >=3 questions correctly
		While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 
		wildlings that escaped over the wall. Although your forces are stronger than the wildlings, 
		they are tired and you lost 1,000 men. The 500 wildlings that survived are now your 
		prisoners and will fight for you on the front in order to have a chance of surviving 
		the winter. 

	if user answers 3 > questions correctly
		While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 wildlings
		 that escaped over the wall. Although your forces are stronger than the wildlings, your 
		 soliders are tired and were defeated by the wildlings, costing you to lose 1,500 men. 

	then the user needs to pick one of the following kingdoms to go to next
		Kindom of the Rock
		Kingdom of the Isles and the Rivers
		Kingdom of the Mountain and Vale


if user picks kingdom of the mountain and vale
	if user answers >= 3 questions correctly
		While speaking with Lady Arryn, she was very cautious about signing her troops up for battle 
		since her kingdom is well protected. Your words enticed her and she agreed to add an additional 
		2,000 troops to your efforts. 

	if user answers 3 > questions correctly
		While speaking with Lady Arryn, she was very cautious about signing her troops up for battle 
		since her kingdom is well protected. Unfortunately, she was not to pleased with your offer to 
		defend her family name and recinded 2,000 troops from her original agreement. 

then the user needs to pick one of the following kingdoms to go to next 
	if kingdom of rock hasn't been picked 
		(1) Kingdom of the Rock
	if kingdom of rock hasn't been picked
		(2) Kingdom of the Isles and the Rivers
	if kingdom of rock hasn't been picked
		(3) Kingdom of the Reach


if user picks kingdom of the rock
	if user answers >= 3 questions correctly and user troops > AI
		Daring move entering the land of your enemy. You know the land well and The Lannister army is 
		strong, but apparently not as strong as yours. Both sides fought valiently but in the end, you 
		defeated them in battle. Once the battle was over, you lost 3,000 troops but the Lannisters 
		lost 4,000. 

	if user answers >= 3 questions correctly and user troops  < AI
		Daring move entering the land of your enemy. You know the land well and your army is strong, but 
		your troops are not as strong as the Lannisters. Both sides fought valiently but in the end, 
		they defeated you in battle. Once the battle was over, you lost 3,000 troops but the Lannisters 
		lost 2,000. 

	if user answers 3 > questions correctly
		Daring move entering the land of your enemy. Your army is strong, but your troops are not as 
		strong as the Lannisters. Both sides fought valiently but in the end, they defeated you in battle. 
		Once the battle was over, you lost 4,000 troops but the Lannisters lost 2,000. 

then the user needs to pick one of the following kingdoms to go to next 
	if kingdom of rock hasn't been picked
		(1) Kingdom of the Isles and the Rivers
	if kingdom of rock hasn't been picked
		(2) Kingdom of the Reach
	if kingdom of the storm lands
		(3) Kingdom of the Stormlands
	if kingdom of the mountain and vale hasn't been picked
		(4) Kingdom of the Mountain and the Vale


if user picks kingdom of the stormlands
	if user answers <= 3 questions correctly
		Your allies in the Stormlands are there to fight alongside you. Unfortunately on your way to Storm's 
		End, your troops are exhausted and many have wounds that have become infected. As a result of illness, 
		2,000 of your troops perish. Because of this loss, you are given an additional 1,000 in attempts to 
		replace those who perished for the cause.

	if user answers 3 > questions correctly
		Your allies in the Stormlands were displeased by your expectation for them to fight for you without 
		any return on their investment. They will support you, but will keep 2,000 of the troops to defend 
		their homeland instead of fighting for you. 

then the user needs to pick one of the following kingdoms to go to next
	if kingdom of rock hasn't been picked
		(1) Kingdom of the Isles and the Rivers
	if kingdom of rock hasn't been picked
		(2) Kingdom of the Reach
	if kingdom of the mountain and vale hasn't been picked
		(4) Kingdom of the Mountain and the Vale
	if dorne hasn't been played yet
		(4) Principality of Dorne


if user picks kingdom of isles and rivers
	if user answers 3 <= questions correctly
		The Iron Islands have very mixed feelings about fighting for the North after what happend to 
		their heir, Theon. Although their hatred for the Lannisters is great, they wish to be free of 
		the seven kingdoms and be their own entity. Therefore, they agree to send you 100 ships 
		(=4,000 troops) if they can gain their independence once the war is over.

	if user answers 3 > questions correctly
		The Iron Born are a proud people and do not repsect those who insult them. Due to your lack of 
		knowledge about the Iron Born, they recind all of the troops promised. 

then the user needs to pick one of the following kingdoms to go to next
	if kingdom of rock hasn't been picked
		(1) Kingdom of the Isles and the Rivers
	if kingdom of rock hasn't been picked
		(2) Kingdom of the Reach
	if kingdom of the mountain and vale hasn't been picked
		(4) Kingdom of the Mountain and the Vale
	if dorne hasn't been played yet
		(4) Principality of Dorne


if user picks kingdom of the reach
	if user answers 3 <= questions correctly
		On your way to the Reach, you encountered some Lannister forces who were protecting the land of 
		the future queen. The battle between your troops and the Lannisters caused you to lose 1,000 troops 
		and the Lannisters to lose 2,000. 

	if user answers 3 > questions correctly
		Due to your lack of knowledge about the Reach, the troops protecting it were able to attack and 
		kill off 2,000 of your men due to their surprise and lack of preparation. They will still support
		your fight, but want to ensure you understand their strength.

then the user needs to pick whatever city is left (Dorne)
	if user answers 3 <= questions correctly
		The Dornish are a fiesty and passionate people who are trained to be fighters since youth. Due to 
		Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to 
		seek their revenge. Since you are currently in their good graces, they have decided to give you 
		an additional 1,000 troops. Be warned, their allegance is easily tested. 

	if user answers 3 > questions correctly
		The Dornish are a feisty and passionate people. Unfortunately, you have made a terrible impression 
		and regardless of their allegance with anyone fighting against the Lannisters, you have displeased 
		them and they have poisoned 2,000 of your men. Best to leave quickly without causing any more harm. 
		
*/
