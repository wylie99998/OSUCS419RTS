class Splash extends Phaser.State {

	preload() {
		this.load.atlas('button', '/assets/button_texture_atlas.png', 'assets/button_texture_atlas.json')
		this.load.image('splash', '/assets/splash.jpg');
	}
	create() {
		this.add.sprite(0, 0, 'splash');
		this.startButton = this.add.button(this.world.centerX + 150, 730, 'button', this.actionOnClick, this);
	}
	actionOnClick() {
		console.log("Clicked!");
	}
}

export default Splash;
