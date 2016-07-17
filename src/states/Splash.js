import NorthKingdom from 'states/NorthKingdom';

class Splash extends Phaser.State {

	preload() {
		//this.load.atlas('button', '/assets/button_texture_atlas.png', 'assets/button_texture_atlas.json')
		this.load.image('splash', 'assets/splash.jpg');
	}
	create() {
		var image = this.add.sprite(0, 0, 'splash');
		image.scale.setTo(0.75, 0.6);
		image.inputEnabled = true;
		image.events.onInputDown.add(this.listener, this);
		//this.startButton = this.add.button(this.world.centerX + 150, 730, 'splash', this.actionOnClick, this);
	}
	listener() {
		this.state.start('NorthKingdom');
	}
	/*actionOnClick() {
		console.log("Clicked!");
		this.state.start('NorthKingdom');
	}*/
}

export default Splash;
