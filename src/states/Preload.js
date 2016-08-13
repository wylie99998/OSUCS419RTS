export default class Preload extends Phaser.State {
    preload() {
        this.load.tilemap('north_kingdom', 'assets/tilemaps/north_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('stormlands_kingdom', 'assets/tilemaps/stormlands_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('principality_of_dorne', 'assets/tilemaps/principality_of_dorne.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('reach_kingdom', 'assets/tilemaps/reach_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('battle', 'assets/tilemaps/battle.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/spritesheets/Tiny16.png');
        this.load.image('snowytiles', 'assets/spritesheets/snowtiles.png');
        this.load.image('sheet', 'assets/spritesheets/sheet.png')
        this.load.image('town_tiles', 'assets/spritesheets/town_tiles.png');
        this.load.spritesheet('hero', 'assets/spritesheets/hero.png', 64, 64, 178);
        //this.game.load.audio('soliloquy', 'assets/audio/Soliloquy_1.mp3');
    }
    create() {
        this.image = this.add.sprite(0, 0, 'splash');
        this.image.scale.setTo(0.9, 0.63);
        this.image.inputEnabled = true;
        this.image.events.onInputDown.add(this.startGame, this);

        this.game.music = this.game.add.audio('soliloquy');
        this.game.music.play();

        this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        this.key1.onDown.add(this.startGame, this);

        this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        this.key2.onDown.add(this.startGame, this);

        this.key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        this.key3.onDown.add(this.startGame, this);

        this.key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        this.key4.onDown.add(this.startGame, this);

    }
    startGame() {
        this.game.music.pause();
        if (this.key1._justDown) {
            this.state.start('NorthKingdom');
        } else if (this.key2._justDown) {
            this.state.start('StormlandsKingdom');
        } else if (this.key3._justDown) {
            this.state.start('PrincipalityOfDorne');
        } else if (this.key4._justDown) {
            this.state.start('ReachKingdom');
        }
    }
}
