class NorthKingdom extends Phaser.State {

	preload() {
        this.load.image('tiles', 'assets/Tiny16-Complete-Spritesheet-Repack3.png');
        this.load.tilemap('north_kingdom', 'assets/north_kingdom.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.spritesheet('hero', "assets/hero.png", 64, 64, 178);
	}
	create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        // load map
        this.north_kingdom = this.add.tilemap('north_kingdom');
		this.north_kingdom.addTilesetImage('Tiny16-Complete-Spritesheet-Repack3', 'tiles');
		this.layer = this.north_kingdom.createLayer(0);
        this.layer.scale.setTo(1.5, 1.5);

        // load hero
        this.hero = this.add.sprite(250, 150, 'hero');
        this.hero.animations.add("walk-left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 8, true);
        this.hero.animations.add("walk-right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 8, true);
        this.hero.animations.add("walk-up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 8, true);
        this.hero.animations.add("walk-down", [130, 131, 132, 133, 134, 135, 136, 137, 138,], 8, true);
        this.hero.anchor.set(0.5, 0.5);

        this.idle = [117, 143];
        this.camera.follow(this.hero);
        this.cursors = this.input.keyboard.createCursorKeys();
	}
    update() {
        this.physics.arcade.enable(this.hero, this.layer);
        this.hero.body.velocity.x = 0;
        this.hero.body.velocity.y = 0;

        if (this.cursors.left.isDown) {
            this.hero.animations.play("walk-left");
            this.hero.body.velocity.x =- 80;
        } else if (this.cursors.right.isDown) {
            this.hero.animations.play("walk-right");
            this.hero.body.velocity.x =+ 80;
        } else {
            this.hero.body.velocity.x = 0;
        }
        if (this.cursors.up.isDown) {
            this.hero.animations.play("walk-up");
            this.hero.body.velocity.y =- 80;
        } else if (this.cursors.down.isDown) {
            this.hero.animations.play("walk-down");
            this.hero.body.velocity.y =+ 80;
        } else {
            this.hero.body.velocity.y = 0;
        }
        if (this.hero.body.velocity.x === 0 && this.hero.body.velocity.y === 0) {
            this.hero.animations.stop();
        }
    }
}

export default NorthKingdom;
