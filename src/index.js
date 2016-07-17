import Splash from 'states/Splash';
import Village from 'states/Village';
import NorthKingdom from 'states/NorthKingdom';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('Splash', Splash, false);
		this.state.add('Village', Village, false);
		this.state.add('NorthKingdom', NorthKingdom, false);
		this.state.start('Splash');
	}
}

new Game();
