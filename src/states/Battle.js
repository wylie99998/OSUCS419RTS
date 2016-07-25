import PlayerUnit from 'prefabs/PlayerUnit';

export default class Battle extends Phaser.State {
    init(party) {
        this.game.party = party;
    }
    preload() {
        var assets = this.game.party;
        var assets_data = JSON.parse(this.cache.getText('characters'));
        // load characters in party
        for (var character in assets) {
            //console.log(assets_data.assets[assets[character].name]);
            this.load.spritesheet(
                assets[character].name,
                assets_data.assets[assets[character].name].source,
                assets_data.assets[assets[character].name].width,
                assets_data.assets[assets[character].name].height, 12
            );
        }
    }
    create() {
        // create the map
        this.map = this.add.tilemap('battle');
        this.map.addTilesetImage('Tiny16', 'tiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');

        // create characters in party
        var assets = this.game.party
        var assets_data = JSON.parse(this.cache.getText('characters'));
        var prefabs = [];
        for (var character in assets) {
            this.character = new PlayerUnit(
                this.game,
                assets_data.prefabs[assets[character].name].position.x,
                assets_data.prefabs[assets[character].name].position.y,
                assets[character].name);
            prefabs.push(this.character)
            this.add.existing(this.character);
        }
        delete(this.character);
        //this.whoseTurn = this.sara.name;

        //this.ultimate_defender.events.onInputDown.add(this.effect, this);
    }
    update() {

    }
    effect() {
        console.log('hit')
    }
}
