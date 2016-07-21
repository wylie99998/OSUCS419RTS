export default class Boot extends Phaser.State {
	preload() {
		this.load.image('splash', 'assets/images/splash.jpg');
	}
	create() {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start('Preload');
	}
}
