class Village extends Phaser.State {

	preload() {
		this.load.spritesheet('hero', 'assets/hero.png');
		this.load.image('tiles', 'assets/Tiny16-Complete-Spritesheet-Repack3.png');
		this.load.tilemap('village', 'assets/village.json', null, Phaser.Tilemap.TILED_JSON);
	}
	create() {
		var map = this.add.tilemap('village');
		map.addTilesetImage('Tiny16-Complete-Spritesheet-Repack3', 'tiles');
		var layer0 = map.createLayer(0);
		var layer1 = map.createLayer(1);
		var layer2 = map.createLayer(2);
		var layer3 = map.createLayer(3);
		var layer4 = map.createLayer(4);
		var layer5 = map.createLayer(5);
		var layer6 = map.createLayer(6);
		var layer7 = map.createLayer(7);
	}
	update() {

	}
}

export default Village;
