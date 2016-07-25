import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Battle from 'states/Battle';
import NorthKingdom from 'levels/NorthKingdom';

class Game extends Phaser.Game {

	constructor() {
		super(960, 640, Phaser.AUTO, 'content', null);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Battle', Battle, false);
		this.state.add('NorthKingdom', NorthKingdom, false);
		this.state.start('Boot');
	}
}

new Game();
