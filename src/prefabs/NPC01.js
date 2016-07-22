export default class NPC01 extends Phaser.Sprite {
    constructor(game) {
        super(game, 1400, 500, 'npc01', 26);

        // enable interaction with player
        this.scale.setTo(1.1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.startConversation, this);
    }
    startConversation() {
        this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
        this.id = this.game.dialogue.start;
        this.start = this.game.dialogue['elements'][this.id];
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        //this.game.add.text(this.game.world.centerX+350, 500, this.start.npc, this.style);
        this.character = this.game.dialogue.name;
        this.updateConversation(this.start, this.character);
    }
    updateConversation(id, character) {
        if (character == "NPC01") {
            character = "";
            this.message = id.npc;
            this.showConversation(id.player["1424791491948"], this.message);
        } else {
            character = this.game.dialogue.name;
            this.message = id.text;
            id = this.game.dialogue['elements']['1424791562420'];
            this.showConversation(id, this.message);
        }
    }
    showConversation(id, message) {
        this.game.add.text(this.game.world.centerX+350, 500, message, this.style);
        this.style = {font: "22px Arial", fill: "white", align: "center", backgroundColor: "000"};
        this.updateConversation(id)
    }
}
