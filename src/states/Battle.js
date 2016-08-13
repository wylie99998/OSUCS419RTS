import PlayerUnit from 'prefabs/PlayerUnit';

export default class Battle extends Phaser.State {
    init(party) {
        this.game.party = party;
    }
    preload() {
        //this.game.load.audio('gran_batalla', 'assets/audio/Gran_Batalla.mp3');
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
        this.load.spritesheet (
            'skeleton_bow',
            assets_data.assets['skeleton_bow'].source,
            assets_data.assets['skeleton_bow'].width,
            assets_data.assets['skeleton_bow'].height, 12
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
        this.party = [];
        for (var character in assets) {
            this.character = new PlayerUnit (
                this.game,
                assets_data.prefabs[assets[character].name].position.x,
                assets_data.prefabs[assets[character].name].position.y+=100,
                assets[character].name,
                assets_data.prefabs[assets[character].name].properties.stats,
                assets_data.prefabs[assets[character].name].type
            );
            this.party.push(this.character);
            this.add.existing(this.character);
        }
        delete(this.character);

        this.enemy = [];
        // create opponent's party
        /*for (var character in assets) {
            this.character = new PlayerUnit (
                this.game,
                assets_data.prefabs['orc_spear'].position.x,
                assets_data.prefabs['orc_spear'].position.y+=100,
                'orc_spear',
                assets_data.prefabs['orc_spear'].properties.stats,
                assets_data.prefabs['orc_spear'].type
            );
            this.enemy.push(this.character);
            this.add.existing(this.character);
        }*/
        this.character = new PlayerUnit (
            this.game,
            assets_data.prefabs['orc_spear'].position.x,
            assets_data.prefabs['orc_spear'].position.y+=100,
            'orc_spear',
            assets_data.prefabs['orc_spear'].properties.stats,
            assets_data.prefabs['orc_spear'].type
        );
        this.enemy.push(this.character);
        this.add.existing(this.character);
        delete(this.character);

        this.character = new PlayerUnit (
            this.game,
            assets_data.prefabs['skeleton_bow'].position.x,
            assets_data.prefabs['skeleton_bow'].position.y+=100,
            'skeleton_bow',
            assets_data.prefabs['skeleton_bow'].properties.stats,
            assets_data.prefabs['skeleton_bow'].type
        );
        this.enemy.push(this.character);
        this.add.existing(this.character);
        delete(this.character);

        this.whoseTurn();
    }
    whoseTurn() {
        if (this.isPartysTurn) {
            this.isPartysTurn = false;
            this.current_unit = this.party.shift();
        } else {
            this.isPartysTurn = true;
            this.current_unit = this.enemy.shift();
        }

        if (this.enemy.length == 0) {
            this.game.state.start("ReachKingdom");
        }
        if (this.current_unit.alive) {
            if (this.isPartysTurn){
                this.enemy.push(this.current_unit);
                console.log(this.enemy.length)
                this.act();
            } else {
                this.party.push(this.current_unit);
                this.act(this.current_unit);
            }
        } else {
            this.whoseTurn();
        }
    }
    act() {
        var target_index;
        var party_size = this.game.party.length;
        if (this.current_unit.type == "enemy_unit") {
            // randomly choose target
            target_index = this.rnd.between(0, this.party.length - 1);
            this.target = this.party[target_index];
            this.attack();
        } else {
            target_index = this.rnd.between(0, this.enemy.length - 1);
            this.target = this.enemy[target_index];
            this.attack();
        }
    }
    attack() {
        var damage, attack_multiplier, defense_multiplier;
        this.distanceMovedX = Math.abs(this.current_unit.position.x - this.target.position.x);
        this.distanceMovedY = Math.abs(this.current_unit.position.y - this.target.position.y);
        this.origY = this.current_unit.position.y;
        attack_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        defense_multiplier = this.game.rnd.realInRange(0.8, 1.2);
        damage = Math.round((attack_multiplier * this.current_unit.attack) - (defense_multiplier * this.target.defense));

        if (this.current_unit.type == "enemy_unit"){
            this.current_unit.position.x = this.target.position.x - 50;
            this.current_unit.position.y = this.target.position.y;
        } else {
            this.current_unit.position.x = this.target.position.x + 50;
            this.current_unit.position.y = this.target.position.y;
        }
        this.current_unit.animations.play('attack');

        this.target.health -= damage;

        if (this.target.health <= 0) {
            this.current_unit.alive = false;
            this.target.health = 0;
            this.kill()
        }
        this.current_unit.animations.currentAnim.onComplete.add(this.move, this);
    }

    move() {
        if (this.current_unit.type == "enemy_unit") {
            this.current_unit.position.x = this.current_unit.position.x - this.distanceMovedX + 50;
            this.current_unit.position.y = this.origY;
        } else {
            this.current_unit.position.x = this.current_unit.position.x + this.distanceMovedX - 50;
            this.current_unit.position.y = this.origY;
        }
        this.whoseTurn();
    }
    kill() {
        if (this.target.type == "enemy_unit") {
            this.enemy.pop(this.target);
            this.game.add.tween(this.target).to({ alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
            //console.log(this.enemy)
        } else {
            this.party.pop(this.target);
            this.game.add.tween(this.target).to({ alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
            //console.log(this.party)
        }
    }
}
