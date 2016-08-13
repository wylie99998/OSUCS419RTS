import Player from 'prefabs/Player';
import NPC03 from 'prefabs/NPC03';

export default class PrincipalityOfDorne extends Phaser.State {
	preload() {
		this.load.spritesheet('npc03', "assets/spritesheets/npc03.png", 64, 64, 1);
		this.load.text('dialogue', 'assets/dialogue/NPC03.json');
		this.load.text('characters', 'assets/characters.json');
	}
	create() {
        // add map
		this.map = this.add.tilemap('principality_of_dorne');
		this.map.addTilesetImage('sheet', 'sheet');

		// add layers from map
		this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.backgroundLayer.scale.setTo(3.5, 3.5);
        this.backgroundLayer.resizeWorld();
		this.backgroundLayer.smoothed = false;

		this.blockedLayer = this.map.createLayer('borderLayer');
		this.blockedLayer.setScale(3.5, 3.5);
		this.blockedLayer.resizeWorld();
		this.blockedLayer.smoothed = false;

        this.blockedLayer = this.map.createLayer('blockedLayer');
		this.map.setCollisionBetween(1, 256, true, 'blockedLayer');
		this.blockedLayer.setScale(3.5, 3.5);
        this.blockedLayer.resizeWorld();
        this.blockedLayer.smoothed = false;

        // add player
		this.player = new Player(this.game);
		this.add.existing(this.player);
		this.player.position.x = 1230;
		this.player.position.y = 1400;

		// add npc
		this.npc03 = new NPC03(this.game);
		this.add.existing(this.npc03);
	}
    update() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
    }
}
