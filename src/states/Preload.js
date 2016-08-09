export default class Preload extends Phaser.State {
    preload() {
        this.load.tilemap('north_kingdom', 'assets/tilemaps/north_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('stormlands_kingdom', 'assets/tilemaps/stormlands_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('battle', 'assets/tilemaps/battle.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/spritesheets/Tiny16.png');
        this.load.image('snowytiles', 'assets/spritesheets/snowtiles.png');
        this.load.spritesheet('hero', "assets/spritesheets/hero.png", 64, 64, 178);
    }
    create() {
        this.image = this.add.sprite(0, 0, 'splash');
        this.image.scale.setTo(0.9, 0.63);
        this.image.inputEnabled = true;
        this.image.events.onInputDown.add(this.startGame, this);
    }
    startGame() {
        this.state.start('StormlandsKingdom');
    }
}
