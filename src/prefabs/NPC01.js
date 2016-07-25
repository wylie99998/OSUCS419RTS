export default class NPC01 extends Phaser.Sprite {
    constructor(game) {
        super(game, 1400, 500, 'npc01', 26);

        // enable interaction with player
        this.scale.setTo(1.1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.startDialogue, this);
        //this.events.onInputDown.add(this.assignParty, this);
    }
    /*assignParty() {
        this.party = [
            { name: 'sara' },
            { name: 'ultimate_defender'}
        ]
        this.startBattle(this.party)
    }
    startBattle(party) {
        this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
        this.game.state.start('Battle', true, false, party)
    }*/
    startDialogue() {
        this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
        this.id = this.game.dialogue.start;
        this.question = this.game.dialogue['elements'][this.id];
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        this.game.add.text(this.game.world.centerX+20, 350, this.question.npc, this.style);
        this.showDialogue(this.game.dialogue, this.question)
    }
    showDialogue(dialogue, message) {
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        // use a for loop to iterate through all answers.
        for (var i in dialogue['elements'][this.game.dialogue.start].character) {
            console.log(dialogue['elements'][this.game.dialogue.start].character[i]);
        }
        /*this.answer1 = this.game.add.text(this.game.world.centerX+20, 420, this.message.character.a, this.style);
        this.answer1.inputEnabled = true;
        this.answer1.events.onInputDown.add(this.actionOnClick, this);

        this.answer2 = this.game.add.text(this.game.world.centerX+20, 480, this.message.character.b, this.style);
        this.answer2.inputEnabled = true;

        this.answer3 = this.game.add.text(this.game.world.centerX+20, 540, this.message.character.c, this.style);
        this.answer3.inputEnabled = true;

        this.answer4 = this.game.add.text(this.game.world.centerX+20, 600, this.message.character.d, this.style);
        this.answer4.inputEnabled = true;*/

        this.updateDialogue(dialogue);
    }
    updateDialogue(dialogue) {

    }

    actionOnClick() {
        console.log('clicked')
    }

    /*startConversation() {
        this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
        this.id = this.game.dialogue.start;
        this.convo = this.game.dialogue['elements'][this.id];
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        this.game.add.text(this.game.world.centerX+350, 500, this.convo.npc, this.style);
        this.character = "";
        this.updateConversation(this.convo.player, this.character);
    }
    updateConversation(convo, character) {
        if (character == "NPC01") {
            character = "";
            this.message = convo.npc;
            this.showConversation(convo.player["1424791491948"], this.message, character);
        } else {
            character = this.game.dialogue.name;
            convo = this.game.dialogue['elements']['convo'];
            this.showConversation(convo, this.message, character);
        }
    }
    showConversation(convo, message, character) {
        this.game.add.text(this.game.world.centerX+350, 500, message, this.style);
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        if (character == "NPC01") {
            this.updateConversation(convo, character)
        } else {
            this.updateConversation(convo['followup'], character);
        }
    }*/
}
