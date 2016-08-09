export default class Player extends Phaser.Sprite {
    constructor(game) {
        super(game, 0, 0, 'hero');

        // enable physics for the player
        this.game.physics.arcade.enableBody(this);
        this.scale.setTo(1.1);
        this.body.collideWorldBounds = true;
        this.game.physics.arcade.enable(this);

        // camera follows player
        this.game.camera.follow(this);

        // walking animations for the player
        this.animations.add("walk-left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 8, true);
        this.animations.add("walk-right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 8, true);
        this.animations.add("walk-up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 8, true);
        this.animations.add("walk-down", [130, 131, 132, 133, 134, 135, 136, 137, 138,], 8, true);

        // create control inputs for player
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        // player moves in specified direction or stands still
        if (this.cursors.left.isDown) {
            this.animations.play("walk-left");
            this.body.velocity.x =- 180;
        } else if (this.cursors.right.isDown) {
            this.animations.play("walk-right");
            this.body.velocity.x =+ 180;
        } else {
            this.body.velocity.x = 0;
        }
        if (this.cursors.up.isDown) {
            this.animations.play("walk-up");
            this.body.velocity.y =- 180;
        } else if (this.cursors.down.isDown) {
            this.animations.play("walk-down");
            this.body.velocity.y =+ 180;
        } else {
            this.body.velocity.y = 0;
        }
        if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
            this.animations.stop();
        }
    }
}
