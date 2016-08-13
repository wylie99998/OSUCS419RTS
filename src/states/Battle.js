import PlayerUnit from 'prefabs/PlayerUnit';

export default class Battle extends Phaser.State {
    init(party) {
        this.game.party = party;
    }
    preload() {
        this.game.load.audio('gran_batalla', 'assets/audio/Gran_Batalla.mp3');
        var assets = this.game.party;
        var assets_data = JSON.parse(this.cache.getText('characters'));

        // load characters in party
        for (var character in assets) {
            this.load.spritesheet (
                assets[character].name,
                assets_data.assets[assets[character].name].source,
                assets_data.assets[assets[character].name].width,
                assets_data.assets[assets[character].name].height, 12
            );
        }
        this.load.spritesheet (
            'orc_spear',
            assets_data.assets['orc_spear'].source,
            assets_data.assets['orc_spear'].width,
            assets_data.assets['orc_spear'].height, 12

        );
    }
    create() {
        // create the map
        this.map = this.add.tilemap('battle');
        this.map.addTilesetImage('Tiny16', 'tiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.borderLayer = this.map.createLayer('borderLayer');
        this.backgroundLayer.scale.setTo(3.5, 3.5);
        this.borderLayer.scale.setTo(3.5, 3.5);
        this.backgroundLayer.resizeWorld();
        this.borderLayer.resizeWorld();
		this.backgroundLayer.smoothed = false;
        this.borderLayer.smoothed = false;

        this.game.music = this.game.add.audio('gran_batalla');
        this.game.music.play();

        // create characters in party
        var assets = this.game.party;
        var assets_data = JSON.parse(this.cache.getText('characters'));
        var prefabs = [];
        for (var character in assets) {
            this.character = new PlayerUnit (
                this.game,
                assets_data.prefabs[assets[character].name].position.x,
                assets_data.prefabs[assets[character].name].position.y+=100,
                assets[character].name,
                assets_data.prefabs[assets[character].name].properties.stats,
                assets_data.prefabs[assets[character].name].type
            );
            prefabs.push(this.character);
            this.add.existing(this.character);
        }
        delete(this.character);

        // create opponent's party
        for (var character in assets) {
            this.character = new PlayerUnit (
                this.game,
                assets_data.prefabs['orc_spear'].position.x,
                assets_data.prefabs['orc_spear'].position.y+=100,
                'orc_spear',
                assets_data.prefabs['orc_spear'].properties.stats,
                //assets_data.prefabs[assets[character].name].type
                assets_data.prefabs['orc_spear'].type
            );
            prefabs.push(this.character);
            this.add.existing(this.character);
        }

        delete(this.character);
        this.whoseTurn(prefabs);
    }
    whoseTurn(prefabs) {
        this.current_unit = prefabs.shift();
        //this.attack(this.current_unit);
        if (this.current_unit.alive) {
            prefabs.push(this.current_unit);
            this.act(this.current_unit, prefabs);
        } else {
            this.whoseTurn(prefabs);
        }
    }
    act(current_unit, prefabs) {
        //console.log(prefabs)
        var target_index, target, damage;
        var party_size = this.game.party.length;

        if (current_unit.type == "enemy_unit") {
            // randomly choose target
            target_index = this.rnd.between(0, party_size - 1);
            target = prefabs[target_index];
            this.attack(current_unit, target);
        } else {
            target_index = this.rnd.between(party_size, prefabs.length - 1);
            target = prefabs[target_index];
            this.attack(current_unit, target, prefabs);
        }
    }
    attack(current_unit, target, prefabs) {
        var damage, attack_multiplier, defense_multiplier, posX, posY;
        attack_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        defense_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        damage = Math.round((attack_multiplier * current_unit.attack) - (defense_multiplier * target.defense));
        posX = current_unit.position.x;
        posY = current_unit.position.y;

        setTimeout(function() {
            current_unit.position.x = posX;
            current_unit.position.y = posY;
        }, 2000);

        target.health -= damage;

        if (target.health <= 0) {
            target.health = 0;
            this.kill(target)
        }
        this.whoseTurn(prefabs)
    }

    kill(target) {
        prefabs.pop(target);
    }
}
