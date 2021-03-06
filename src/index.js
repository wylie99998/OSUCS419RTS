import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Battle from 'states/Battle';
import NorthKingdom from 'levels/NorthKingdom';
import StormlandsKingdom from 'levels/StormlandsKingdom';
import PrincipalityOfDorne from 'levels/PrincipalityOfDorne';
import ReachKingdom from 'levels/ReachKingdom';

class Game extends Phaser.Game {

	constructor() {
		super(960, 640, Phaser.AUTO, 'content', null);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Battle', Battle, false);
		this.state.add('NorthKingdom', NorthKingdom, false);
		this.state.add('StormlandsKingdom', StormlandsKingdom, false);
		this.state.add('PrincipalityOfDorne', PrincipalityOfDorne, false);
		this.state.add('ReachKingdom', ReachKingdom, false);
		this.state.start('Boot');
	}
}

new Game();
