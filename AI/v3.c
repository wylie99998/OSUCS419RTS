#include <stdio.h>
#include <string.h>

int kingdomsVisited[7] = {0,0,0,0,0,0,0};
int userTroops = 0;
int aiTroops = 0;
// stark side = 0, lannister side = 1
int side;
void visitNext(int d);
void northQE(int d);
void islesQE(int d);
void valeQE(int d);
void rockQE(int d);
void reachQE(int d);
void stormlandsQE(int d);
void dorneQE(int d);
void northQH(int d);
void islesQH(int d);
void valeQH(int d);
void rockQH(int d);
void reachQH(int d);
void stormlandsQH(int d);
void dorneQH(int d);

char * kingdomsVisitedNames[7] = {"Kingdom of the North",
    "Kingdom of the Isles and Rivers",
    "Kingdom of Mountains and Vale",
    "Kingdom of the Rock",
    "Kingdom of the Reach",
    "Kingdom of the Stormlands",
    "Principality of Dorne" };

/******************************************
 ** This function will print out all of the
 ** kingdoms that haven't been visited
 ******************************************/
void startGame (int k, int d) {
    switch(k){
        case 1:
            // kingdom of the north
            // the starks
            // mark that the north was visited
            kingdomsVisited[0] = 1;
            visitNext(d);
            break;
        case 2:
            // kingdom of the isles and rivers
            // allies with the starks
            // mark that it was visited
            kingdomsVisited[1] = 1;
            visitNext(d);
            break;
        case 3:
            // kingdom of mountains and vale
            // allies with the starks
            // mark that it was visited
            kingdomsVisited[2] = 1;
            visitNext(d);
            break;
        case 4:
            // kingdom of the rock
            // allies with lannsiters
            // mark that it was visited
            kingdomsVisited[3] = 1;
            visitNext(d);
            break;
        case 5:
            // kingdom of the reach
            // allies with the lannisters
            // mark that it was visited
            kingdomsVisited[4] = 1;
            visitNext(d);
            break;
        case 6:
            // kingdom of the stormlands
            // allies with the starks
            // mark that it was visited
            kingdomsVisited[5] = 1;
            visitNext(d);
            break;
        case 7:
            // dorne
            // allies with the starks
            // mark that it was visited
            kingdomsVisited[6] = 1;
            visitNext(d);
            break;
    }
}

/******************************************
 ** This function will print out all of the
 ** kingdoms that haven't been visited
 ******************************************/
void markCity (int k, int d) {
    if (d == 1) {
        switch(k){
            case 1:
                // kingdom of the north
                kingdomsVisited[0] = 1;
                northQE(d);
                break;
            case 2:
                // kingdom of the isles and rivers
                kingdomsVisited[1] = 1;
                islesQE(d);
                break;
            case 3:
                // kingdom of mountains and vale
                kingdomsVisited[2] = 1;
                valeQE(d);
                break;
            case 4:
                // kingdom of the rock
                kingdomsVisited[3] = 1;
                rockQE(d);
                break;
            case 5:
                // kingdom of the reach
                kingdomsVisited[4] = 1;
                reachQE(d);
                break;
            case 6:
                // kingdom of the stormlands
                kingdomsVisited[5] = 1;
                stormlandsQE(d);
                break;
            case 7:
                // dorne
                kingdomsVisited[6] = 1;
                dorneQE(d);
                break;
        }
    }
    else {
        switch(k){
            case 1:
                // kingdom of the north
                kingdomsVisited[0] = 1;
                northQH(d);
                break;
            case 2:
                // kingdom of the isles and rivers
                kingdomsVisited[1] = 1;
                islesQH(d);
                break;
            case 3:
                // kingdom of mountains and vale
                kingdomsVisited[2] = 1;
                valeQH(d);
                break;
            case 4:
                // kingdom of the rock
                kingdomsVisited[3] = 1;
                rockQH(d);
                break;
            case 5:
                // kingdom of the reach
                kingdomsVisited[4] = 1;
                reachQH(d);
                break;
            case 6:
                // kingdom of the stormlands
                kingdomsVisited[5] = 1;
                stormlandsQH(d);
                break;
            case 7:
                // dorne
                kingdomsVisited[6] = 1;
                dorneQH(d);
                break;
        }
    }
}

/******************************************
 ** This function will print out all of the
 ** kingdoms that haven't been visited
 ******************************************/
void visitNext(int d) {
    int nextCity;
    printf("Please select the next kingdom to visit: \n");
    for (int i = 0; i < 7; i++) {
        if (kingdomsVisited[i] == 0)
            printf("%d %s\n", i+1, kingdomsVisitedNames[i]);
    }
    scanf("%d", &nextCity);
    if (kingdomsVisited[nextCity-1] == 1 || nextCity > 8 || nextCity < 1) {
        printf("Please select a valid Kingdom\n");
        scanf("%d", &nextCity);
    }
    markCity(nextCity, d);
}

/******************************************
 ** Ask the hard version of North questions
 ******************************************/
void northQH(int d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("In the first episode, Robert Baratheon says 'In my dreams, I kill him every night.' Who is the King referring to and why?\n");
    printf("1. Rhaegar Targaryen because he married Elia Martell\n");
    printf("2. Aerys Targaryen because he killed Robert's brother\n");
    printf("3. Rhaegar Targaryen because he kidnapped Lyanna Stark\n");
    printf("4. Aerys Targaryen because he got Lyanna Stark pregnant\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 3) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 2
    printf("Who kills Robb Stark?\n");
    printf("1. Edmure Tully\n");
    printf("2. Roose Bolton\n");
    printf("3. Ramsey Bolton\n");
    printf("4. Walder Frey\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("Who kills Catelyn Stark?\n");
    printf("1. Roose Bolton\n");
    printf("2. Black Walder Rivers\n");
    printf("3. Sandor Clegane\n");
    printf("4. Walder Frey\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 4
    printf("Who is not on Arya Stark's list?\n");
    printf("1. Ilyn Payne\n");
    printf("2. Varys\n");
    printf("3. Cersei Lannister\n");
    printf("4. Joffery Baratheon\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 2) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 5
    printf("Who helps Arya escape after her father is executed?\n");
    printf("1. Robb Stark\n");
    printf("2. Sir Meryn Trant\n");
    printf("3. Yoren\n");
    printf("4. Petyr Baelish\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 wildlings that escaped over the wall. Although your forces are stronger than the wildlings, they are tired and you lost 1,000 men. The 500 wildlings that survived are now your prisoners and will fight for you on the front in order to have a chance of surviving the winter.\n\n");
        userTroops -= 500;
    }
    else if (correctAns < 3 && side == 0) {
        printf("While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 wildlings that escaped over the wall. Although your forces are stronger than the wildlings, your soliders are tired and were defeated by the wildlings, costing you to lose 1,500 men\n\n");
        userTroops -= 1500;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Crossing into enemy territory can be dangerous, especially when the North is a much different climate than that in the South. Unfortunately, your soldiers could not withstand the winter and you lost 1,000 men.\n\n");
        userTroops -= 1000;
    }
    else {
        printf("Crossing into enemy territory can be dangerous, especially when the North is a much different climate than that in the South. Unfortunately, the North are very fierce and were able to coordinate a suprise attack which wiped out 3,000 of your troops.\n\n");
        userTroops -= 3000;
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of North questions
 ******************************************/
void northQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What family ruled the North while Robert Barratehon was alive?\n");
    printf("1. House Stark\n");
    printf("2. House Bolton\n");
    printf("3. House Arryn\n");
    printf("4. House Tully\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 2
    printf("What is the name of Jon Snow's Direwolf?\n");
    printf("1. Grey Wind\n");
    printf("2. Grayson\n");
    printf("3. Ghost\n");
    printf("4. Ghoul\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 3) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("Who was nicknamed the Young Wolf?\n");
    printf("1. Jon Snow\n");
    printf("2. Robb Stark\n");
    printf("3. Bran Stark\n");
    printf("4. Ramsey Bolton\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("Why was Eddard Stark executed?\n");
    printf("1. Plotting to kill Cersei\n");
    printf("2. Challenging Joffery's claim to the throne\n");
    printf("3. Killing King Robert\n");
    printf("4. Not allowing Sansa to marry Joffrey\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 2) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 5
    printf("Who was Jon Snow's mother?\n");
    printf("1. A whore\n");
    printf("2. A bar wench\n");
    printf("3. Lyanna Stark\n");
    printf("4. Catelyn Stark\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 wildlings that escaped over the wall. Although your forces are stronger than the wildlings, they are tired and you lost 1,000 men. The 500 wildlings that survived are now your prisoners and will fight for you on the front in order to have a chance of surviving the winter.\n\n");
        userTroops -= 500;
    }
    else if (correctAns < 3 && side == 0) {
        printf("While you were crossing over Moat Cailin, you encountered a suprise attack by 1,000 wildlings that escaped over the wall. Although your forces are stronger than the wildlings, your soliders are tired and were defeated by the wildlings, costing you to lose 1,500 men.\n\n");
        userTroops -= 1500;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Crossing into enemy territory can be dangerous, especially when the North is a much different climate than that in the South. Unfortunately, your soldiers could not withstand the winter and you lost 1,000 men.\n\n");
        userTroops -= 1000;
    }
    else {
        printf("Crossing into enemy territory can be dangerous, especially when the North is a much different climate than that in the South. Unfortunately, the North are very fierce and were able to coordinate a suprise attack which wiped out 3,000 of your troops.\n\n");
        userTroops -= 3000;
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Isles questions
 ******************************************/
void islesQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What are the words of house Greyjoy?\n");
    printf("1. We Do Not Sow\n");
    printf("2. What is Dead May Never Die\n");
    printf("3. Fire and Blood\n");
    printf("4. Hear Me Roar\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 2
    printf("Why ws Tehon a ward of Lord Eddard Stark?\n");
    printf("1. The Greyjoys gave him to be married to Arya Stark\n");
    printf("2. He was taken after the defeat of the Greyjoy Rebellion\n");
    printf("3. He was taken when Eddard and Robert usurped the throne\n");
    printf("4. No idea\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("Why does Yara help Daenerys?\n");
    printf("1. To claim the Iron Throne\n");
    printf("2. To wage war on her enemies\n");
    printf("3. To claim the Salt Throne and make the Iron Islands Independent\n");
    printf("4. To make alliances when Daenerys takes the Iron Throne\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 3) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 4
    printf("What is the name of Theon's sister?\n");
    printf("1. Yara\n");
    printf("2. Osha\n");
    printf("3. Asha\n");
    printf("4. Alannys\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 5
    printf("Who said it: 'Only a fool humbles himself when the world is so full of men eager to do that job for him'?\n");
    printf("1. Asha Greyjoy\n");
    printf("2. Robb Stark \n");
    printf("3. Catelyn Stark \n");
    printf("4. Theon Greyjoy\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 4) {
        userTroops += 8000;
        correctAns++;
    }
    else {
        aiTroops += 8000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("The Iron Islands have very mixed feelings about fighting for the North after what happend to their heir, Theon. Although their hatred for the Lannisters is great, they wish to be free of the seven kingdoms and be their own entity. Therefore, they agree to send you 100 ships (=4,000 troops) if they can gain their independence once the war is over.\n\n");
        userTroops += 4000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("The Iron Born are a proud people and do not repsect those who insult them. Due to your lack of knowledge about the Iron Born, they recind 2000 troops.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("The kingdom of isles and rivers have been striving for their independence and the fight against the North is meaningless to them. They will give the troops as promised but demand that you allow them to be independent after the war is won.\n\n");
    }
    else {
        printf("The Iron Born are a proud people and know that your allegance with the Lannisters (and Martells if from the Reach) will result in treachery. Their knowledge of the your devious schemes have resulted in them not only recinding their offer to suport your claim but they also destroy 50 of your ships causing you to lose 2,000 men.\n\n");
        userTroops -= 2000;
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of Isles questions
 ******************************************/
void islesQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What do the people of the Iron Islands call themselves?\n");
    printf("1. Iron born\n");
    printf("2. Rivermen\n");
    printf("3. Storm troopers\n");
    printf("4. River folk\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 2
    printf("Who do the people of the Iron Islands pray to?\n");
    printf("1. The Old Gods\n");
    printf("2. The New Gods\n");
    printf("3. The Drowned Gods\n");
    printf("4. All of the Gods\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 3) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 3
    printf("How does Theon show his loyalty to Lord Bolton?\n");
    printf("1. By killing Bran and Rickon\n");
    printf("2. By helping Ramsey\n");
    printf("3. By taking Winterfell\n");
    printf("4. By confessing what actually happened to Bran and Rickon while shaving Ramsey\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 4) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("What does Ramsey call Theon?\n");
    printf("1. Theon\n");
    printf("2. Greyjoy\n");
    printf("3. Freak\n");
    printf("4. Reek\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 4) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 5
    printf("What is on the flag of house Greyjoy?\n");
    printf("1. An octopus\n");
    printf("2. A kraken \n");
    printf("3. A squid \n");
    printf("4. A fish\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }
    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("The Iron Islands have very mixed feelings about fighting for the North after what happend to their heir, Theon. Although their hatred for the Lannisters is great, they wish to be free of the seven kingdoms and be their own entity. Therefore, they agree to send you 100 ships (=4,000 troops) if they can gain their independence once the war is over.\n\n");
        userTroops += 4000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("The Iron Born are a proud people and do not repsect those who insult them. Due to your lack of knowledge about the Iron Born, they recind 2000 troops.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("The kingdom of isles and rivers have been striving for their independence and the fight against the North is meaningless to them. They will give the troops as promised but demand that you allow them to be independent after the war is won.\n\n");
    }
    else {
        printf("The Iron Born are a proud people and know that your allegance with the Lannisters (and Martells if from the Reach) will result in treachery. Their knowledge of the your devious schemes have resulted in them not only recinding their offer to suport your claim but they also destroy 50 of your ships causing you to lose 2,000 men.\n\n ");
        userTroops -= 2000;
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Vale questions
 ******************************************/
void valeQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("Why does Sansa slap Robin when she visits the Eyrie?\n");
    printf("1. He says something rude about her family being dead\n");
    printf("2. He destroys a gift she gave him\n");
    printf("3. He ruins the snow castle of Winterfell Sansa made\n");
    printf("4. He is incredibly annoying\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 3) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 2
    printf("What is the name Sansa is called while visiting the Eyrie?\n");
    printf("1. Petyr's niece\n");
    printf("2. Alayne\n");
    printf("3. Ally\n");
    printf("4. Ariana\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 2) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 3
    printf("Were these Petyr Baelish's last words to Lysa before pushing her through the moon door? 'I will always love Catelyn, never you'?\n");
    printf("1. True\n");
    printf("2. False\n");
    scanf("%d", &ans3);
    if (ans3 > 2 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 ==3) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("Who said this 'The Fingers are a lovely place, if you happen to be a stone'?\n");
    printf("1. Cersei Lannister\n");
    printf("2. Tyrion Lannister\n");
    printf("3. Lysa Arryn\n");
    printf("4. Petyr Baelish\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 4) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 5
    printf("Who is Mya Stone?\n");
    printf("1. A bastard mentioned in the Eyrie\n");
    printf("2. A bastard daughter of Robert Baratheon \n");
    printf("3. A bastard daughter of Eddard Stark \n");
    printf("4. She doesn't exist  \n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 2) {
        userTroops += 10000;
        correctAns++;
    }
    else {
        aiTroops += 10000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("While speaking with Lady Arryn, she was very cautious about signing her troops up for battle since her kingdom is well protected. Your words enticed her and she agreed to add an additional 2,000 troops to your efforts.\n\n");
        userTroops += 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("While speaking with Lady Arryn, she was very cautious about signing her troops up for battle since her kingdom is well protected. Unfortunately, she was not to pleased with your offer to defend her family name and recinded 2,000 troops from her original agreement.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Lady Arryn is convinced that the Lannisters killed her husband and therefore has a strong hatred for anyone who supports the Lannisters. Due to your allegance, she recinds her offer of troops by 2,000 men and lets you leave without any harm.\n\n");
        userTroops -= 2000;
    }
    else {
        printf("Lady Arryn is convinced that the Lannisters killed her husband and therefore has a strong hatred for anyone who supports the Lannisters. Due to your allegance and your poor knowledge of the area, your troops get trapped in the mountains and 4,000 of your men perish. \n\n");
        userTroops -= 4000;
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of Vale questions
 ******************************************/
void valeQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What is the last name bastards are given in the Vale?\n");
    printf("1. Rock\n");
    printf("2. Sand\n");
    printf("3. Sand\n");
    printf("4. Andal\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 3) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 2
    printf("What mountains surround and protect the Eyrie?\n");
    printf("1. The Fingers\n");
    printf("2. The Pebble Mountains\n");
    printf("3. The Mountains of the Moon\n");
    printf("4. The Stone\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 3) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 3
    printf("Why is Lysa Arryn so mad at Sansa Stark before she dies?\n");
    printf("1. Because she believes Sansa is trying to take the Vale\n");
    printf("2. Because she always hated her sister, Sansa's mother\n");
    printf("3. Because she thinks Sansa is in love with Little Finger\n");
    printf("4. Because Sansa won't marry Robyn\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 ==3) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("What is the sigil of House Arryn?\n");
    printf("1. A raven\n");
    printf("2. A white falcon and a crescent moon\n");
    printf("3. A swallow next to the sun\n");
    printf("4. A T-Rex\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 2) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 5
    printf("What is the name of the contraption that criminals are pushed out of in the Eryie?\n");
    printf("1. The sky door\n");
    printf("2. The moon door \n");
    printf("3. The high door \n");
    printf("4. The door \n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 2) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("While speaking with Lady Arryn, she was very cautious about signing her troops up for battle since her kingdom is well protected. Your words enticed her and she agreed to add an additional 2,000 troops to your efforts.\n\n");
        userTroops += 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("While speaking with Lady Arryn, she was very cautious about signing her troops up for battle since her kingdom is well protected. Unfortunately, she was not to pleased with your offer to defend her family name and recinded 2,000 troops from her original agreement.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Lady Arryn is convinced that the Lannisters killed her husband and therefore has a strong hatred for anyone who supports the Lannisters. Due to your allegance, she recinds her offer of troops by 2,000 men and lets you leave without any harm.\n\n");
        userTroops -= 2000;
    }
    else {
        printf("Lady Arryn is convinced that the Lannisters killed her husband and therefore has a strong hatred for anyone who supports the Lannisters. Due to your allegance and your poor knowledge of the area, your troops get trapped in the mountains and 4,000 of your men perish. \n\n");
        userTroops -= 4000;
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Rock questions
 ******************************************/
void rockQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What are the words of house Lannister?\n");
    printf("1. Hear Me Roar\n");
    printf("2. A Lannister always pays his debts\n");
    printf("3. None So Fierce\n");
    printf("4. Ours is the Fury\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 2
    printf("How many kings did Tywin Lannister serve as the Hand?\n");
    printf("1. One\n");
    printf("2. Two \n");
    printf("3. Three\n");
    printf("4. Fear\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 3
    printf("Why was Podrick Payne Tyrion's Squire?\n");
    printf("1. Because he wanted to be a squire \n");
    printf("2. Because he was caught stealing a ham\n");
    printf("3. Because his father commanded him to be a squire\n");
    printf("4. Because the previous knight he served died\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 4
    printf("Who said this 'There are no heroes. In life, the monsters win'?\n");
    printf("1. Margery Tyrell\n");
    printf("2. Olena Tyrell\n");
    printf("3. Sansa Stark\n");
    printf("4. Arya Stark\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 5
    printf("What is the name of Robb Stark's wife?\n");
    printf("1. Talisa Maegyr\n");
    printf("2. Jeyne Westerling \n");
    printf("3. Oona Chaplin \n");
    printf("4. Sybell Spicer\n");
    scanf("%d", &ans5);
    if (ans5 > 3 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 2) {
        userTroops += 7000;
        correctAns++;
    }
    else {
        aiTroops += 7000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0 && userTroops > aiTroops) {
        printf("Daring move entering the land of your enemy. You know the land well and The Lannister army is strong, but apparently not as strong as yours. Both sides fought valiently but in the end, you defeated them in battle. Once the battle was over, you lost 3,000 troops but the Lannisters lost 4,000.\n\n");
        userTroops -= 3000;
        aiTroops -= 4000;
    }
    else if (correctAns >= 3 && side == 0 && userTroops <= aiTroops) {
        printf("Daring move entering the land of your enemy. You know the land well and your army is strong, but your troops are not as strong as the Lannisters. Both sides fought valiently but in the end, they defeated you in battle. Once the battle was over, you lost 3,000 troops but the Lannisters lost 2,000.\n\n");
        userTroops -= 3000;
        aiTroops -= 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Daring move entering the land of your enemy. Your army is strong, but your troops are not as strong as the Lannisters. Both sides fought valiently but in the end, they defeated you in battle. Once the battle was over, you lost 4,000 troops but the Lannisters lost 2,000.\n\n");
        userTroops -= 4000;
        aiTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Your allegence with the Lannisters has been well established through marraige. Although you still are cautious about the secrecy and treachery from the Lannister group, they offer you another 2,000 to support your fight against the North. \n\n");
        userTroops += 2000;
    }
    else {
        printf("Although you are allies with the Lannisters of Casterly Rock, they are unsure of your ability to defeat the North. They still support your fight but don't provide you with additional men to conquer the North.\n\n");
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of Rock questions
 ******************************************/
void rockQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What is the sigil of the Lord of the Rock's house?\n");
    printf("1. Lion\n");
    printf("2. Tiger\n");
    printf("3. Bear\n");
    printf("4. Stag\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 2
    printf("What is the name of the poison that killed Joffrey?\n");
    printf("1. Milk of the poppy\n");
    printf("2. Demon's Dance\n");
    printf("3. Nightshade\n");
    printf("4. The strangler\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 4) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 3
    printf("What song played at the red wedding while the Stark's were being slaughtered?\n");
    printf("1. I am hers, she is mine \n");
    printf("2. The Rains of Castamere\n");
    printf("3. Dark wings, dark words\n");
    printf("4. None of the above\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("What is Sandor Clegane's nickname?\n");
    printf("1. The rock\n");
    printf("2. The mountain\n");
    printf("3. The hound\n");
    printf("4. The dog\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 5
    printf("Which hand does Jamie Lannister lose?\n");
    printf("1. Right \n");
    printf("2. Left \n");
    printf("3. Not sure \n");
    scanf("%d", &ans5);
    if (ans5 > 3 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 1) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0 && userTroops > aiTroops) {
        printf("Daring move entering the land of your enemy. You know the land well and The Lannister army is strong, but apparently not as strong as yours. Both sides fought valiently but in the end, you defeated them in battle. Once the battle was over, you lost 3,000 troops but the Lannisters lost 4,000.\n\n");
        userTroops -= 3000;
        aiTroops -= 4000;
    }
    else if (correctAns >= 3 && side == 0 && userTroops <= aiTroops) {
        printf("Daring move entering the land of your enemy. You know the land well and your army is strong, but your troops are not as strong as the Lannisters. Both sides fought valiently but in the end, they defeated you in battle. Once the battle was over, you lost 3,000 troops but the Lannisters lost 2,000.\n\n");
        userTroops -= 3000;
        aiTroops -= 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Daring move entering the land of your enemy. Your army is strong, but your troops are not as strong as the Lannisters. Both sides fought valiently but in the end, they defeated you in battle. Once the battle was over, you lost 4,000 troops but the Lannisters lost 2,000.\n\n");
        userTroops -= 4000;
        aiTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Your allegence with the Lannisters has been well established through marraige. Although you still are cautious about the secrecy and treachery from the Lannister group, they offer you another 2,000 to support your fight against the North. \n\n");
        userTroops += 2000;
    }
    else {
        printf("Although you are allies with the Lannisters of Casterly Rock, they are unsure of your ability to defeat the North. They still support your fight but don't provide you with additional men to conquer the North.\n\n");
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Reach questions
 ******************************************/
void reachQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("Why is Margaery impriosioned by the Faith?\n");
    printf("1. Adultery\n");
    printf("2. Perjury\n");
    printf("3. Treason\n");
    printf("4. Adultery and Treason\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 4) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 2
    printf("Who is the heir to Highgarden?\n");
    printf("1. Loras Tyrell\n");
    printf("2. Mace Tyrell\n");
    printf("3. Willas Tyrell\n");
    printf("4. Margaery Tyrell\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 3) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 3
    printf("How did Willas Tyrell become crippled?\n");
    printf("1. He was born that way\n");
    printf("2. He was injured in battle\n");
    printf("3. He was injured in a tournament\n");
    printf("4. He was in an accident\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 3) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 4
    printf("Why is Olena Martell known as the Queen of Thornes?\n");
    printf("1. She is from Highgarden, whose sigil is a rose\n");
    printf("2. She is cunning and has a sharp tongue\n");
    printf("3. She loves roses\n");
    printf("4. It is a common knick name for queens of Highgarden\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 2) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 5
    printf("What is the name of Renly's Kingsguard?\n");
    printf("1. Kingsguard\n");
    printf("2. Rainbow Guard\n");
    printf("3. White Cloaks \n");
    printf("4. Rainbow Knights\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 2) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("On your way to the Reach, you encountered some Lannister forces who were protecting the land of the future queen. The battle between your troops and the Lannisters caused you to lose 1,000 troops and the Lannisters to lose 2,000. \n\n");
        userTroops -= 1000;
        aiTroops -= 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Due to your lack of knowledge about the Reach, the troops protecting it were able to attack and kill off 2,000 of your men due to their surprise and lack of preparation. They will still support your fight, but want to ensure you understand their strength.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Your allegance to the lannisters has proved fruitful and they have offered to give you an additional 3,000 troops.\n\n");
        userTroops += 3000;
    }
    else {
        printf("Although your alliance with the Lannisters is strong, they are uncertain of your ability to defeat the North.  They will support your war but will not offer any additional troops, in case you fail they will be able to defend themselves.\n\n");
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of Reach questions
 ******************************************/
void reachQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("Who is the Queen of Thrones?\n");
    printf("1. Cersei Lannister\n");
    printf("2. Margaery Tyrell\n");
    printf("3. Olena Tyrell\n");
    printf("4. Arya Stark\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 3) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 2
    printf("What are the words of House Tyrell?\n");
    printf("1. As High as Honor\n");
    printf("2. Fire and Blood\n");
    printf("3. The Sun of Winter\n");
    printf("4. Growing Strong\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 4) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("Who actually killed Joffery?\n");
    printf("1. Olenna Tyrell\n");
    printf("2. Little Finger\n");
    printf("3. Sansa Stark\n");
    printf("4. Tyrion Lannister\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 1) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 4
    printf("Where can you find the Moon Door?\n");
    printf("1. Castamere\n");
    printf("2. Horn Hill\n");
    printf("3. The Eyrie\n");
    printf("4. The Dreadfort\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 5
    printf("What does Margery give her grandmother to show her she's ok after being released by the High Sparrow?\n");
    printf("1. A rose\n");
    printf("2. A drawing \n");
    printf("3. A needlepointed cloth \n");
    printf("4. She whispers during a hug\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 2) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("On your way to the Reach, you encountered some Lannister forces who were protecting the land of the future queen. The battle between your troops and the Lannisters caused you to lose 1,000 troops and the Lannisters to lose 2,000. \n\n");
        userTroops -= 1000;
        aiTroops -= 2000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Due to your lack of knowledge about the Reach, the troops protecting it were able to attack and kill off 2,000 of your men due to their surprise and lack of preparation. They will still support your fight, but want to ensure you understand their strength.\n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("Your allegance to the lannisters has proved fruitful and they have offered to give you an additional 3,000 troops.\n\n");
        userTroops += 3000;
    }
    else {
        printf("Although your alliance with the Lannisters is strong, they are uncertain of your ability to defeat the North.  They will support your war but will not offer any additional troops, in case you fail they will be able to defend themselves.\n\n");
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Stormlands questions
 ******************************************/
void stormlandsQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("At Hoster Tully's funeral, who shot the burning arrow that hit the mark?\n");
    printf("1. Brynden Tully\n");
    printf("2. Robb Stark\n");
    printf("3. Edmure Tully\n");
    printf("4. Lord Karstark\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 1) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 2
    printf("Is Robert Baratheon Stannis's older brother?\n");
    printf("1. True\n");
    printf("2. False\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 1) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("When does Melisandre proclaim Stannis as a prophesied hero?\n");
    printf("1. When he converts to the faith of the Lord of Light\n");
    printf("2. When she burns the statues of the seven and he draws the flaming sword\n");
    printf("3. When she first comes to Dragonstone\n");
    printf("4. When she predicts all of his enemies will burn\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 6000;
        correctAns++;
    }
    else {
        aiTroops += 6000;
    }

    // question 4
    printf("Who doesn't try to kill Melisandre?\n");
    printf("1. Davos\n");
    printf("2. Maester Cressen\n");
    printf("3. Stannis \n");
    scanf("%d", &ans4);
    if (ans4 > 3 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 4000;
        correctAns++;
    }
    else {
        aiTroops += 4000;
    }

    // question 5
    printf("What are the words of House Baratheon?\n");
    printf("1. Hear Me Roar\n");
    printf("2. Winter is Coming\n");
    printf("3. None So Fierce\n");
    printf("4. Ours is the Fury\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 4) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("Your allies in the Stormlands are there to fight alongside you. Unfortunately on your way to Storm's End, your troops are exhausted and many have wounds that have become infected. As a result of illness, 2,000 of your troops perish. Because of this loss, you are given an additional 1,000 in attempts to replace those who perished for the cause. \n\n");
        userTroops -= 1000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Your allies in the Stormlands were displeased by your expectation for them to fight for you without any return on their investment. They will support you, but will keep 2,000 of the troops to defend their homeland instead of fighting for you. \n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("On your way to the Stormlands, your men are exhausted and several have major wounds that have become infected. Due to their weakness, many men have become unable to fight and need to be sent home or have died. As a result, 1,000 men have be lost.\n\n");
        userTroops += 1000;
    }
    else {
        printf("On your way to the Stormlands, your men are exhausted and several have major wounds that have become infected. Due to their weakness, many men have become unable to fight and need to be sent home or have died. As a result, 1,000 men have be lost. The Brotherhood without Banners that are in the Stormlands are aware of the situation and have been tracking your progression. The Brotherhood attack your men, resulting in another 2,000 to be lost.\n\n");
        userTroops -= 2000;
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Stormlands questions
 ******************************************/
void stormlandsQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What is the nickname given to Brynden Tully?\n");
    printf("1. Kingslayer\n");
    printf("2. Black snake\n");
    printf("3. Blackfish\n");
    printf("4. Strong fish\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 3) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 2
    printf("What is the name of Brienne of Tarth's sword?\n");
    printf("1. Widow's wail\n");
    printf("2. Oathkeepr\n");
    printf("3. Heartsbane\n");
    printf("4. Long claw\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 3
    printf("Who taught Brienne how to fight?\n");
    printf("1. Renly Baratheon\n");
    printf("2. Her father\n");
    printf("3. Dacey Mormont\n");
    printf("4. She taught herself\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 2) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("What was the name of the disease that Shireen has?\n");
    printf("1. Greystone\n");
    printf("2. Dragonstone\n");
    printf("3. Grey death \n");
    printf("4. Greyscale\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 4) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 5
    printf("How does Melisandre worship the Lord of Light?\n");
    printf("1. Bleeding people out\n");
    printf("2. Prayer \n");
    printf("3. By converting others \n");
    printf("4. Burning people \n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 4) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("Your allies in the Stormlands are there to fight alongside you. Unfortunately on your way to Storm's End, your troops are exhausted and many have wounds that have become infected. As a result of illness, 2,000 of your troops perish. Because of this loss, you are given an additional 1,000 in attempts to replace those who perished for the cause. \n\n");
        userTroops -= 1000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("Your allies in the Stormlands were displeased by your expectation for them to fight for you without any return on their investment. They will support you, but will keep 2,000 of the troops to defend their homeland instead of fighting for you. \n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("On your way to the Stormlands, your men are exhausted and several have major wounds that have become infected. Due to their weakness, many men have become unable to fight and need to be sent home or have died. As a result, 1,000 men have be lost.\n\n");
        userTroops += 1000;
    }
    else {
        printf("On your way to the Stormlands, your men are exhausted and several have major wounds that have become infected. Due to their weakness, many men have become unable to fight and need to be sent home or have died. As a result, 1,000 men have be lost. The Brotherhood without Banners that are in the Stormlands are aware of the situation and have been tracking your progression. The Brotherhood attack your men, resulting in another 2,000 to be lost.\n\n");
        userTroops -= 2000;
    }
    visitNext(d);
}

/******************************************
 ** Ask the easy version of Dorne questions
 ******************************************/
void dorneQH(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;
    // question 1
    printf("What are the names of the three main Sand Snakes?\n");
    printf("1. Obara, Tyene, Nymeria\n");
    printf("2. Obara, Elia, Dorea\n");
    printf("3. Obella, Sarella, Loreza\n");
    printf("4. Sarella, Obella, Tyene\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 2) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }
    // question 2
    printf("Where did the Sand Snakes get their name?\n");
    printf("1. Because their last name is sand\n");
    printf("2. From Oberyn's nickname and because they're bastards\n");
    printf("3. They came up with it\n");
    printf("4. None of the above\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 2) {
        userTroops += 5000;
        correctAns++;
    }
    else {
        aiTroops += 5000;
    }

    // question 3
    printf("What is the name of the poison Ellaria Martell uses to kill Myrcella?\n");
    printf("1. The long farewell\n");
    printf("2. The strangler\n");
    printf("3. Widow's blood\n");
    printf("4. Wolfsbane\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 1) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 4
    printf("What are the names of Elia Martell's children?\n");
    printf("1. Ellaria and Aegon\n");
    printf("2. Daenerys and Viserys\n");
    printf("3. Rhaegar and Aerys\n");
    printf("4. Raenys and Aegon\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 2) {
        userTroops += 3000;
        correctAns++;
    }
    else {
        aiTroops += 3000;
    }

    // question 5
    printf("Why is there a red sun on the sigil for house Martell?\n");
    printf("1. Represents the climate in Dorne\n");
    printf("2. Represents the hot tempers ad passion of the Dornish \n");
    printf("3. Represents the sun in Sunspear\n");
    printf("4. Represents the sigil of Nymeria\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 4) {
        userTroops += 10000;
        correctAns++;
    }
    else {
        aiTroops += 10000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("The Dornish are a fiesty and passionate people who are trained to be fighters since youth. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. Since you are currently in their good graces, they have decided to give you an additional 1,000 troops. Be warned, their allegance is easily tested.\n\n");
        userTroops += 1000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("The Dornish are a feisty and passionate people. Unfortunately, you have made a terrible impression and regardless of their allegance with anyone fighting against the Lannisters, you have displeased them and they have poisoned 2,000 of your men. Best to leave quickly without causing any more harm. \n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("The Dornish are very strongly against the Lannisters, however kind they may occasionally come across. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. With your presence, you have stirred up very strong feelings for revenge and the Dornish have acted out. As a result, 2,000 of your men have been slaughtered by the Dornish. The troops that were promised are still with you but don't mistake this act as a peace offering. Be careful what you wish for.\n\n");
        userTroops -= 2000;
    }
    else {
        printf("The Dornish are very strongly against the Lannisters, however kind they may occasionally come across. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. With your presence and poor knowledge of their people, you have stirred up very strong feelings for revenge and the Dornish have acted out. As a result, 4,000 of your men have been slaughtered by the Dornish. The troops that were promised are still with you but don't mistake this act as a peace offering. Be careful what you wish for.\n\n");
        userTroops -= 4000;
    }
    visitNext(d);
}
/******************************************
 ** Ask the easy version of Dorne questions
 ******************************************/
void dorneQE(d) {
    int ans1, ans2, ans3, ans4, ans5, correctAns = 0;

    // question 1
    printf("What is the last name of bastard children born in Dorne?\n");
    printf("1. Snow\n");
    printf("2. Sand\n");
    printf("3. Storm\n");
    printf("4. Hill\n");
    scanf("%d", &ans1);
    if (ans1 > 4 || ans1 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans1);
    }
    else if(ans1 == 2) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 2
    printf("What are the bastard daughters of Oberyn Martell called?\n");
    printf("1. Sand Snakes\n");
    printf("2. Stone Snakes\n");
    printf("3. Snow Snakes\n");
    printf("4. Silly Snakes\n");
    scanf("%d", &ans2);
    if (ans2 > 4 || ans2 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans2);
    }
    else if(ans2 == 1) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 3
    printf("What is Oberyn's nickname?\n");
    printf("1. Red Viper\n");
    printf("2. Viper\n");
    printf("3. Sand Snake\n");
    printf("4. Red Snake\n");
    scanf("%d", &ans3);
    if (ans3 > 4 || ans3 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans3);
    }
    else if(ans3 == 1) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // question 4
    printf("How did Oberyn Martell die?\n");
    printf("1. During battle\n");
    printf("2. Poison\n");
    printf("3. Trial by combat\n");
    printf("4. By the Lannisters\n");
    scanf("%d", &ans4);
    if (ans4 > 4 || ans4 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans4);
    }
    else if(ans4 == 3) {
        userTroops += 1000;
        correctAns++;
    }
    else {
        aiTroops += 1000;
    }

    // question 5
    printf("What are the Martell house words?\n");
    printf("1. Family, Duty, Honor\n");
    printf("2. Ours is the Fury \n");
    printf("3. We stand Together \n");
    printf("4. Unbowed, Unbent, Unbroken\n");
    scanf("%d", &ans5);
    if (ans5 > 4 || ans5 < 1) {
        printf("Please enter a valid answer");
        scanf("%d", &ans5);
    }
    else if(ans5 == 4) {
        userTroops += 2000;
        correctAns++;
    }
    else {
        aiTroops += 2000;
    }

    // if user is a stark ally
    if (correctAns >= 3 && side == 0) {
        printf("The Dornish are a fiesty and passionate people who are trained to be fighters since youth. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. Since you are currently in their good graces, they have decided to give you an additional 1,000 troops. Be warned, their allegance is easily tested.\n\n");
        userTroops += 1000;
    }
    else if (correctAns < 3 && side == 0) {
        printf("The Dornish are a feisty and passionate people. Unfortunately, you have made a terrible impression and regardless of their allegance with anyone fighting against the Lannisters, you have displeased them and they have poisoned 2,000 of your men. Best to leave quickly without causing any more harm. \n\n");
        userTroops -= 2000;
    }

    // if user is a lannister ally
    else if (correctAns >= 3 && side == 1) {
        printf("The Dornish are very strongly against the Lannisters, however kind they may occasionally come across. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. With your presence, you have stirred up very strong feelings for revenge and the Dornish have acted out. As a result, 2,000 of your men have been slaughtered by the Dornish. The troops that were promised are still with you but don't mistake this act as a peace offering. Be careful what you wish for.\n\n");
        userTroops -= 2000;
    }
    else {
        printf("The Dornish are very strongly against the Lannisters, however kind they may occasionally come across. Due to Tywin Lannister commanding for Elia Martell and her children's death, the Dornish are waiting to seek their revenge. With your presence and poor knowledge of their people, you have stirred up very strong feelings for revenge and the Dornish have acted out. As a result, 4,000 of your men have been slaughtered by the Dornish. The troops that were promised are still with you but don't mistake this act as a peace offering. Be careful what you wish for.\n\n");
        userTroops -= 4000;
    }
    visitNext(d);
}
int main () {
    int difficulty;
    printf("Select Easy(1) or Hard (2)");
    scanf("%d", &difficulty);
    printf("Select your Kingdom:");
    printf("1. Kingdom of the North\n");
    printf("2. Kingdom of the Isles and Rivers\n");
    printf("3. Kingdom of Mountains and Vale\n");
    printf("4. Kingdom of the Rock\n");
    printf("5. Kingdom of the Reach\n");
    printf("6. Kingdom of the Stormlands\n");
    printf("7. Principality of Dorne\n");
    int kingdomNum;
    scanf("%d", &kingdomNum);
    if (kingdomNum == 1 || kingdomNum == 2 || kingdomNum == 6 || kingdomNum == 3 || kingdomNum == 7)
        side = 0;
    if (kingdomNum == 4 || kingdomNum == 5)
        side = 1;
    startGame(kingdomNum, difficulty);
}
