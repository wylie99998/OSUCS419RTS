import Player from 'prefabs/Player';
import NPC01 from 'prefabs/NPC01';

export default class GameState extends Phaser.State {
	preload() {
		this.load.spritesheet('npc01', "assets/spritesheets/npc01.png", 64, 64, 178);
	}
	create() {
        // add map
		this.map = this.add.tilemap('north_kingdom');
		this.map.addTilesetImage('Tiny16', 'tiles');

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

        this.borderLayer = this.map.createLayer('borderLayer');
        this.borderLayer.scale.setTo(3.5, 3.5);
        this.borderLayer.resizeWorld();
        this.borderLayer.smoothed = false;

        // add player
		this.player = new Player(this.game);
		this.add.existing(this.player);
		this.player.position.x = 1400;
		this.player.position.y = 1400;

		// add npc
		this.npc01 = new NPC01(this.game);
		this.add.existing(this.npc01);
	}
    update() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
    }
}

export default GameState;

/*var dialog;
function create(){
	// Beginning dialog for the cutscene
	var diaText = "Hello!";	var subtext = "press \'a\'";
	var style = {font: "22px Arial", fill:"white", align: "center"};
	var style2 = {font: "10px Arial", fill:"white", align: "center"};
	dialog = game.add.text(game.world.centerX-300, 400, diaText, style);
	var tSub = game.add.text(game.world.centerX-300, 425, subtext, style2);}function update(){
	// Cycle through the next line of dialog
	if(this.game.input.keyboard.justPressed(Phaser.Keyboard.A)){
		dialog.setText('It\'s nice to meet you!');
	}
}*/
