import Player from 'prefabs/Player';
import NPC04 from 'prefabs/NPC04';

export default class ReachKingdom extends Phaser.State {
	preload() {
		this.load.spritesheet('npc04', "assets/spritesheets/npc04.png", 64, 64, 1);
		this.load.text('dialogue', 'assets/dialogue/NPC04.json');
		this.load.text('characters', 'assets/characters.json');
	}
	create() {
        // add map
		this.map = this.add.tilemap('reach_kingdom');
		this.map.addTilesetImage('town_tiles', 'town_tiles');

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

        // add player
		this.player = new Player(this.game);
		this.add.existing(this.player);
		this.player.position.x = 1230;
		this.player.position.y = 1400;

		// add npc
		this.npc04 = new NPC04(this.game);
		this.add.existing(this.npc04);
	}
    update() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
    }
}
