import Splash from 'states/Splash';

class Game extends Phaser.Game {

	constructor() {
		super(1117, 900, Phaser.AUTO, 'content', null);
		this.state.add('Splash', Splash, false);
		this.state.start('Splash');
	}
}

new Game();
