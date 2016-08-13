import Player from 'prefabs/Player';
import NPC01 from 'prefabs/NPC01';

export default class NorthKingdom extends Phaser.State {
	preload() {
		this.load.spritesheet('npc01', "assets/spritesheets/npc01.png", 64, 64, 1);
		this.load.text('dialogue', 'assets/dialogue/NPC01.json');
		this.load.text('characters', 'assets/characters.json');
		this.game.load.audio('the_kings_crowning', 'assets/audio/the_kings_crowning_v1.mp3');

	}
	create() {
        // add map
		this.map = this.add.tilemap('north_kingdom');
		this.map.addTilesetImage('Tiny16', 'tiles');

		// add layers from map
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

		this.game.music = this.game.add.audio('the_kings_crowning');
		this.game.music.play();

        // add player
		this.player = new Player(this.game);
		this.add.existing(this.player);
		this.player.position.x = 1400;
		this.player.position.y = 1400;

		// add npc
		this.npc01 = new NPC01(this.game);
		this.add.existing(this.npc01);
	}
    update() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
    }
}
