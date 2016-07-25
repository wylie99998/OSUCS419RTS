export default class PlayerUnit extends Phaser.Sprite {
    constructor(game, x, y, asset) {
        super(game, x, y, asset, 0);
        this.scale.setTo(1.2);
        this.smoothed = false;
        this.inputEnabled = true;

        this.animations.add("attack", [0, 1, 2, 3, 4, 5, 0], 8, false);
        this.animations.play("attack");

        this.hitpoints = 400;
        this.defense = 50;
        this.attack = 10;
    }
}
