export default class NPC01 extends Phaser.Sprite {
    constructor(game) {
        super(game, 1400, 500, 'npc01', 26);

        // enable interaction with player
        this.scale.setTo(1.1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.dialogue, this.game);
    }
    update() {
        // add idle animation
    }
    dialogue() {
        this.greeting = "Hello!";
        this.style = {font: "22px Arial", fill:"white", align: "center", backgroundColor: "000"};
        this.dialog = this.add.text(this.world.centerX+350, 500, this.greeting, this.style);
    }
}
