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
        var party = [];
        for (var character in assets) {
            this.character = new PlayerUnit (
                this.game,
                assets_data.prefabs[assets[character].name].position.x,
                assets_data.prefabs[assets[character].name].position.y+=100,
                assets[character].name,
                assets_data.prefabs[assets[character].name].properties.stats,
                assets_data.prefabs[assets[character].name].type
            );
            party.push(this.character);
            this.add.existing(this.character);
        }
        delete(this.character);

        var enemy = [];
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
            enemy.push(this.character);
            this.add.existing(this.character);
        }

        delete(this.character);
        this.whoseTurn(party, enemy);
        //this.whoseTurn = this.sara.name;
    }
    whoseTurn(party, enemy) {
        if (this.isPartysTurn){
            this.isPartysTurn = false;
            this.current_unit = party.shift();
        }else{
            this.isPartysTurn = true;
            this.current_unit = enemy.shift();
        }

        //this.attack(this.current_unit);
        if (this.current_unit.alive) {

            if (this.isPartysTurn){
                enemy.push(this.current_unit);
                this.act(this.current_unit, enemy, party);
            }else{
                party.push(this.current_unit);
                this.act(this.current_unit, enemy, party);
            }
        } else {
            this.whoseTurn(party, enemy);
        }
    }
    act(current_unit, enemy, party) {
        var target_index, target, damage;
        var party_size = this.game.party.length;
        if (current_unit.type == "enemy_unit") {
            // randomly choose target
            target_index = this.rnd.between(0, this.game.party.length - 1);
            target = party[target_index];
            this.attack(current_unit, target, enemy, party);
        } else {
            target_index = this.rnd.between(0, this.game.party.length - 1);
            target = enemy[target_index];
            this.attack(current_unit, target, enemy, party);
        }
    }
    attack(current_unit, target, enemy, party) {
        var damage, attack_multiplier, defense_multiplier;
        const distanceMovedX = Math.abs(current_unit.position.x - target.position.x);
        const distanceMovedY = Math.abs(current_unit.position.y - target.position.y);
        const origY = current_unit.position.y;
        attack_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        defense_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        damage = Math.round((attack_multiplier * current_unit.attack) - (defense_multiplier * target.defense));

        if (current_unit.type == "enemy_unit"){
            current_unit.position.x = target.position.x - 50;
            current_unit.position.y = target.position.y;
        } else {
            current_unit.position.x = target.position.x + 50;
            current_unit.position.y = target.position.y;
        }

        if (current_unit.type == "enemy_unit") {
            current_unit.position.x = current_unit.position.x - distanceMovedX + 50;
            current_unit.position.y = origY;
        } else {
            current_unit.position.x = current_unit.position.x + distanceMovedX - 50;
            current_unit.position.y = origY;
        }

        target.health -= damage;

        if (target.health <= 0) {
            current_unit.alive = false;
            target.health = 0;
            this.kill(target)
        }
        this.whoseTurn(enemy, party)
    }

    kill(target) {
        prefabs.pop(target);
    }
}
