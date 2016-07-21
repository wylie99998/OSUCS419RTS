import Player from 'prefabs/Player';

export default class GameState extends Phaser.State {
	create() {
        // add map
		this.map = this.add.tilemap('north_kingdom');
		this.map.addTilesetImage('Tiny16', 'tiles');

		this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.backgroundLayer.scale.setTo(3.5, 3.5);
        this.backgroundLayer.resizeWorld();
		this.backgroundLayer.smoothed = false;


        this.blockedLayer = this.map.createLayer('blockedLayer');
		this.map.setCollisionBetween(1, 256, true, 'blockedLayer');
		this.blockedLayer.setScale(3.5, 3.5);
        this.blockedLayer.resizeWorld();
        this.blockedLayer.smoothed = false;

        this.borderLayer = this.map.createLayer('borderLayer');
        this.borderLayer.scale.setTo(3.5, 3.5);
        this.borderLayer.resizeWorld();
        this.borderLayer.smoothed = false;

        // add player
		this.player = new Player(this.game);
		this.add.existing(this.player);
		this.player.position.x = 1400;
		this.player.position.y = 1400;
	}
    update() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
    }
}

export default GameState;
