import NorthKingdom from 'levels/NorthKingdom';
import Player from 'prefabs/Player';

export default class GameState extends Phaser.State {
	create() {
		this.physics.startSystem(Phaser.Physics.ARCADE);

		//this.map = this.add.tilemap('north_kingdom');
		//this.world.setBounds(0, 0, this.north_kingdom.widthInPixels, this.north_kingdom.heightInPixels);
		//this.map.addTilesetImage('Tiny16', 'tiles');
		//this.layer = this.map.createLayer(0);
        //this.layer.scale.setTo(2, 2.7);
		//this.layer.smoothed = false;

		this.map = new NorthKingdom(this.game);
		
		this.player = new Player(this.game);
		this.add.existing(this.player);
	}
}

export default GameState;
