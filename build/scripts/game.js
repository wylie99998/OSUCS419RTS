(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preload = require('states/Preload');

var _Preload2 = _interopRequireDefault(_Preload);

var _Battle = require('states/Battle');

var _Battle2 = _interopRequireDefault(_Battle);

var _NorthKingdom = require('levels/NorthKingdom');

var _NorthKingdom2 = _interopRequireDefault(_NorthKingdom);

var _StormlandsKingdom = require('levels/StormlandsKingdom');

var _StormlandsKingdom2 = _interopRequireDefault(_StormlandsKingdom);

var _PrincipalityOfDorne = require('levels/PrincipalityOfDorne');

var _PrincipalityOfDorne2 = _interopRequireDefault(_PrincipalityOfDorne);

var _ReachKingdom = require('levels/ReachKingdom');

var _ReachKingdom2 = _interopRequireDefault(_ReachKingdom);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 960, 640, Phaser.AUTO, 'content', null));

		_this.state.add('Boot', _Boot2.default, false);
		_this.state.add('Preload', _Preload2.default, false);
		_this.state.add('Battle', _Battle2.default, false);
		_this.state.add('NorthKingdom', _NorthKingdom2.default, false);
		_this.state.add('StormlandsKingdom', _StormlandsKingdom2.default, false);
		_this.state.add('PrincipalityOfDorne', _PrincipalityOfDorne2.default, false);
		_this.state.add('ReachKingdom', _ReachKingdom2.default, false);
		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"levels/NorthKingdom":2,"levels/PrincipalityOfDorne":3,"levels/ReachKingdom":4,"levels/StormlandsKingdom":5,"states/Battle":12,"states/Boot":13,"states/Preload":14}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
						value: true
});

var _createClass = function () {
						function defineProperties(target, props) {
												for (var i = 0; i < props.length; i++) {
																		var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
												}
						}return function (Constructor, protoProps, staticProps) {
												if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
						};
}();

var _Player = require('prefabs/Player');

var _Player2 = _interopRequireDefault(_Player);

var _NPC = require('prefabs/NPC01');

var _NPC2 = _interopRequireDefault(_NPC);

function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
												throw new TypeError("Cannot call a class as a function");
						}
}

function _possibleConstructorReturn(self, call) {
						if (!self) {
												throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
												throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NorthKingdom = function (_Phaser$State) {
						_inherits(NorthKingdom, _Phaser$State);

						function NorthKingdom() {
												_classCallCheck(this, NorthKingdom);

												return _possibleConstructorReturn(this, Object.getPrototypeOf(NorthKingdom).apply(this, arguments));
						}

						_createClass(NorthKingdom, [{
												key: 'preload',
												value: function preload() {
																		this.load.spritesheet('npc01', "assets/spritesheets/npc01.png", 64, 64, 1);
																		this.load.text('dialogue', 'assets/dialogue/NPC01.json');
																		this.load.text('characters', 'assets/characters.json');
																		this.game.load.audio('the_kings_crowning', 'assets/audio/the_kings_crowning_v1.mp3');
												}
						}, {
												key: 'create',
												value: function create() {
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

																		this.game.music = this.game.add.audio('the_kings_crowning');
																		this.game.music.play();

																		// add player
																		this.player = new _Player2.default(this.game);
																		this.add.existing(this.player);
																		this.player.position.x = 1400;
																		this.player.position.y = 1400;

																		// add npc
																		this.npc01 = new _NPC2.default(this.game);
																		this.add.existing(this.npc01);
												}
						}, {
												key: 'update',
												value: function update() {
																		this.game.physics.arcade.collide(this.player, this.blockedLayer);
												}
						}]);

						return NorthKingdom;
}(Phaser.State);

exports.default = NorthKingdom;

},{"prefabs/NPC01":6,"prefabs/Player":10}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
						value: true
});

var _createClass = function () {
						function defineProperties(target, props) {
												for (var i = 0; i < props.length; i++) {
																		var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
												}
						}return function (Constructor, protoProps, staticProps) {
												if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
						};
}();

var _Player = require('prefabs/Player');

var _Player2 = _interopRequireDefault(_Player);

var _NPC = require('prefabs/NPC03');

var _NPC2 = _interopRequireDefault(_NPC);

function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
												throw new TypeError("Cannot call a class as a function");
						}
}

function _possibleConstructorReturn(self, call) {
						if (!self) {
												throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
												throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PrincipalityOfDorne = function (_Phaser$State) {
						_inherits(PrincipalityOfDorne, _Phaser$State);

						function PrincipalityOfDorne() {
												_classCallCheck(this, PrincipalityOfDorne);

												return _possibleConstructorReturn(this, Object.getPrototypeOf(PrincipalityOfDorne).apply(this, arguments));
						}

						_createClass(PrincipalityOfDorne, [{
												key: 'preload',
												value: function preload() {
																		this.load.spritesheet('npc03', "assets/spritesheets/npc03.png", 64, 64, 1);
																		this.load.text('dialogue', 'assets/dialogue/NPC03.json');
																		this.load.text('characters', 'assets/characters.json');
																		this.game.load.audio('no_more_magic', 'assets/audio/No_More_Magic_5.mp3');
												}
						}, {
												key: 'create',
												value: function create() {
																		// add map
																		this.map = this.add.tilemap('principality_of_dorne');
																		this.map.addTilesetImage('sheet', 'sheet');

																		// add layers from map
																		this.backgroundLayer = this.map.createLayer('backgroundLayer');
																		this.backgroundLayer.scale.setTo(3.5, 3.5);
																		this.backgroundLayer.resizeWorld();
																		this.backgroundLayer.smoothed = false;

																		this.blockedLayer = this.map.createLayer('borderLayer');
																		this.blockedLayer.setScale(3.5, 3.5);
																		this.blockedLayer.resizeWorld();
																		this.blockedLayer.smoothed = false;

																		this.blockedLayer = this.map.createLayer('blockedLayer');
																		this.map.setCollisionBetween(1, 256, true, 'blockedLayer');
																		this.blockedLayer.setScale(3.5, 3.5);
																		this.blockedLayer.resizeWorld();
																		this.blockedLayer.smoothed = false;

																		this.game.music = this.game.add.audio('no_more_magic');
																		this.game.music.play();

																		// add player
																		this.player = new _Player2.default(this.game);
																		this.add.existing(this.player);
																		this.player.position.x = 1230;
																		this.player.position.y = 1400;

																		// add npc
																		this.npc03 = new _NPC2.default(this.game);
																		this.add.existing(this.npc03);
												}
						}, {
												key: 'update',
												value: function update() {
																		this.game.physics.arcade.collide(this.player, this.blockedLayer);
												}
						}]);

						return PrincipalityOfDorne;
}(Phaser.State);

exports.default = PrincipalityOfDorne;

},{"prefabs/NPC03":8,"prefabs/Player":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
						value: true
});

var _createClass = function () {
						function defineProperties(target, props) {
												for (var i = 0; i < props.length; i++) {
																		var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
												}
						}return function (Constructor, protoProps, staticProps) {
												if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
						};
}();

var _Player = require('prefabs/Player');

var _Player2 = _interopRequireDefault(_Player);

var _NPC = require('prefabs/NPC04');

var _NPC2 = _interopRequireDefault(_NPC);

function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
												throw new TypeError("Cannot call a class as a function");
						}
}

function _possibleConstructorReturn(self, call) {
						if (!self) {
												throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
												throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReachKingdom = function (_Phaser$State) {
						_inherits(ReachKingdom, _Phaser$State);

						function ReachKingdom() {
												_classCallCheck(this, ReachKingdom);

												return _possibleConstructorReturn(this, Object.getPrototypeOf(ReachKingdom).apply(this, arguments));
						}

						_createClass(ReachKingdom, [{
												key: 'preload',
												value: function preload() {
																		this.load.spritesheet('npc04', "assets/spritesheets/npc04.png", 64, 64, 1);
																		this.load.text('dialogue', 'assets/dialogue/NPC04.json');
																		this.load.text('characters', 'assets/characters.json');
																		this.game.load.audio('arabesque', 'assets/audio/Arabesque.mp3');
												}
						}, {
												key: 'create',
												value: function create() {
																		// add map
																		this.map = this.add.tilemap('reach_kingdom');
																		this.map.addTilesetImage('town_tiles', 'town_tiles');

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

																		this.game.music = this.game.add.audio('arabesque');
																		this.game.music.play();

																		// add player
																		this.player = new _Player2.default(this.game);
																		this.add.existing(this.player);
																		this.player.position.x = 1230;
																		this.player.position.y = 1400;

																		// add npc
																		this.npc04 = new _NPC2.default(this.game);
																		this.add.existing(this.npc04);
												}
						}, {
												key: 'update',
												value: function update() {
																		this.game.physics.arcade.collide(this.player, this.blockedLayer);
												}
						}]);

						return ReachKingdom;
}(Phaser.State);

exports.default = ReachKingdom;

},{"prefabs/NPC04":9,"prefabs/Player":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
						value: true
});

var _createClass = function () {
						function defineProperties(target, props) {
												for (var i = 0; i < props.length; i++) {
																		var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
												}
						}return function (Constructor, protoProps, staticProps) {
												if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
						};
}();

var _Player = require('prefabs/Player');

var _Player2 = _interopRequireDefault(_Player);

var _NPC = require('prefabs/NPC02');

var _NPC2 = _interopRequireDefault(_NPC);

function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
												throw new TypeError("Cannot call a class as a function");
						}
}

function _possibleConstructorReturn(self, call) {
						if (!self) {
												throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
												throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var StormlandsKingdom = function (_Phaser$State) {
						_inherits(StormlandsKingdom, _Phaser$State);

						function StormlandsKingdom() {
												_classCallCheck(this, StormlandsKingdom);

												return _possibleConstructorReturn(this, Object.getPrototypeOf(StormlandsKingdom).apply(this, arguments));
						}

						_createClass(StormlandsKingdom, [{
												key: 'preload',
												value: function preload() {
																		this.load.spritesheet('npc02', "assets/spritesheets/npc02.png", 64, 64, 1);
																		this.load.text('dialogue', 'assets/dialogue/NPC02.json');
																		this.load.text('characters', 'assets/characters.json');
																		this.game.load.audio('magical_theme', 'assets/audio/magical_theme.mp3');
												}
						}, {
												key: 'create',
												value: function create() {
																		// add map
																		this.map = this.add.tilemap('stormlands_kingdom');
																		this.map.addTilesetImage('snowtiles', 'snowytiles');

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

																		this.game.music = this.game.add.audio('magical_theme');
																		this.game.music.play();

																		// add player
																		this.player = new _Player2.default(this.game);
																		this.add.existing(this.player);
																		this.player.position.x = 1230;
																		this.player.position.y = 1400;

																		// add npc
																		this.npc02 = new _NPC2.default(this.game);
																		this.add.existing(this.npc02);
												}
						}, {
												key: 'update',
												value: function update() {
																		this.game.physics.arcade.collide(this.player, this.blockedLayer);
												}
						}]);

						return StormlandsKingdom;
}(Phaser.State);

exports.default = StormlandsKingdom;

},{"prefabs/NPC02":7,"prefabs/Player":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NPC01 = function (_Phaser$Sprite) {
    _inherits(NPC01, _Phaser$Sprite);

    function NPC01(game) {
        _classCallCheck(this, NPC01);

        // enable interaction with player

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC01).call(this, game, 1400, 500, 'npc01', 0));

        _this.scale.setTo(1.1);
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.startDialogue, _this);
        return _this;
    }

    _createClass(NPC01, [{
        key: 'startDialogue',
        value: function startDialogue() {
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.totalCorrect = 0;
            this.party = [];
            this.id = this.game.dialogue.start;
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'showDialogue',
        value: function showDialogue(dialogue, id) {
            var x = 20,
                y = 350;

            // show question
            var question = dialogue['elements'][id].npc;
            this.style = {
                font: "22px Arial",
                fill: "white",
                align: "center",
                backgroundColor: "000"
            };
            this.question = this.game.add.text(this.game.world.centerX + x, y, question, this.style);

            // show answers and add input to click
            var answers = dialogue['elements'][id].character;
            this.answers_set = [];
            for (var i in answers) {
                this.answers_set[i] = this.game.add.text(this.game.world.centerX + x, y += 60, answers[i][i], this.style);
                this.answers_set[i].inputEnabled = true;
                this.answers_set[i].events.onInputDown.add(this.checkAnswer, this);
            }
        }
    }, {
        key: 'checkAnswer',
        value: function checkAnswer(selected) {
            var selectedAnswer = selected.text;
            var correctAnswer = this.game.dialogue['elements'][this.id].correct;
            if (Cookies.get('NPC01') === undefined) {
                Cookies.set('NPC01', '0', { expires: 7 });
            }
            if (selectedAnswer == correctAnswer) {
                var counterCookie = parseInt(Cookies.get('NPC01')) + 1;
                Cookies.set('NPC01', counterCookie.toString(), { expires: 7 });
                this.totalCorrect++;
                this.assignParty();
            } else {
                console.log("You got it wrong...");
            }
            this.updateDialogue();
        }
    }, {
        key: 'updateDialogue',
        value: function updateDialogue() {
            // update id to point to next question
            this.id = this.game.dialogue['elements'][this.id].followup;
            if (this.id == "") {
                this.startBattle(this.party);
            }

            // remove question and answers from game
            this.question.destroy();
            this.answers_set.forEach(function (answer) {
                answer.destroy();
            });
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'assignParty',
        value: function assignParty() {
            this.party.push({ name: 'thief' });
        }
    }, {
        key: 'startBattle',
        value: function startBattle(party) {
            if (this.totalCorrect === 0) {
                this.game.state.start('Preload', true, false);
            } else {
                this.game.music.pause();
                this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
                this.game.state.start('Battle', true, false, party, 'StormlandsKingdom');
            }
        }
    }]);

    return NPC01;
}(Phaser.Sprite);

exports.default = NPC01;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NPC02 = function (_Phaser$Sprite) {
    _inherits(NPC02, _Phaser$Sprite);

    function NPC02(game) {
        _classCallCheck(this, NPC02);

        // enable interaction with player

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC02).call(this, game, 1450, 850, 'npc02', 0));

        _this.scale.setTo(1.1);
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.startDialogue, _this);
        return _this;
    }

    _createClass(NPC02, [{
        key: 'startDialogue',
        value: function startDialogue() {
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.totalCorrect = 0;
            this.party = [];
            this.id = this.game.dialogue.start;
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'showDialogue',
        value: function showDialogue(dialogue, id) {
            var x = 50,
                y = 700;

            // show question
            var question = dialogue['elements'][id].npc;
            this.style = {
                font: "22px Arial",
                fill: "white",
                align: "center",
                backgroundColor: "000"
            };
            this.question = this.game.add.text(this.game.world.centerX + x, y, question, this.style);

            // show answers and add input to click
            var answers = dialogue['elements'][id].character;
            this.answers_set = [];
            for (var i in answers) {
                this.answers_set[i] = this.game.add.text(this.game.world.centerX + x, y += 60, answers[i][i], this.style);
                this.answers_set[i].inputEnabled = true;
                this.answers_set[i].events.onInputDown.add(this.checkAnswer, this);
            }
        }
    }, {
        key: 'checkAnswer',
        value: function checkAnswer(selected) {
            var selectedAnswer = selected.text;
            var correctAnswer = this.game.dialogue['elements'][this.id].correct;
            if (Cookies.get('NPC02') === undefined) {
                Cookies.set('NPC02', '0', { expires: 7 });
            }
            if (selectedAnswer == correctAnswer) {
                var counterCookie = parseInt(Cookies.get('NPC02')) + 1;
                Cookies.set('NPC02', counterCookie.toString(), { expires: 7 });
                this.totalCorrect++;
                this.assignParty();
            } else {
                console.log("You got it wrong...");
            }
            this.updateDialogue();
        }
    }, {
        key: 'updateDialogue',
        value: function updateDialogue() {
            // update id to point to next question
            this.id = this.game.dialogue['elements'][this.id].followup;
            if (this.id == "") {
                this.startBattle(this.party);
            }

            // remove question and answers from game
            this.question.destroy();
            this.answers_set.forEach(function (answer) {
                answer.destroy();
            });
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'assignParty',
        value: function assignParty() {
            this.party.push({ name: 'thief' });
        }
    }, {
        key: 'startBattle',
        value: function startBattle(party) {
            if (this.totalCorrect === 0) {
                this.game.state.start('Preload', true, false);
            } else {
                this.game.music.pause();
                this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
                this.game.state.start('Battle', true, false, party, 'PrincipalityOfDorne');
            }
        }
    }]);

    return NPC02;
}(Phaser.Sprite);

exports.default = NPC02;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NPC02 = function (_Phaser$Sprite) {
    _inherits(NPC02, _Phaser$Sprite);

    function NPC02(game) {
        _classCallCheck(this, NPC02);

        // enable interaction with player

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC02).call(this, game, 1950, 850, 'npc03', 0));

        _this.scale.setTo(1.1);
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.startDialogue, _this);
        return _this;
    }

    _createClass(NPC02, [{
        key: 'startDialogue',
        value: function startDialogue() {
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.totalCorrect = 0;
            this.party = [];
            this.id = this.game.dialogue.start;
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'showDialogue',
        value: function showDialogue(dialogue, id) {
            var x = 400,
                y = 700;

            // show question
            var question = dialogue['elements'][id].npc;
            this.style = {
                font: "22px Arial",
                fill: "white",
                align: "center",
                backgroundColor: "000"
            };
            this.question = this.game.add.text(this.game.world.centerX + x, y, question, this.style);

            // show answers and add input to click
            var answers = dialogue['elements'][id].character;
            this.answers_set = [];
            for (var i in answers) {
                this.answers_set[i] = this.game.add.text(this.game.world.centerX + x, y += 60, answers[i][i], this.style);
                this.answers_set[i].inputEnabled = true;
                this.answers_set[i].events.onInputDown.add(this.checkAnswer, this);
            }
        }
    }, {
        key: 'checkAnswer',
        value: function checkAnswer(selected) {
            var selectedAnswer = selected.text;
            var correctAnswer = this.game.dialogue['elements'][this.id].correct;
            if (selectedAnswer == correctAnswer) {
                this.totalCorrect++;
                this.assignParty();
            } else {
                console.log("You got it wrong...");
            }
            this.updateDialogue();
        }
    }, {
        key: 'updateDialogue',
        value: function updateDialogue() {
            // update id to point to next question
            this.id = this.game.dialogue['elements'][this.id].followup;
            if (this.id == "") {
                this.startBattle(this.party);
            }

            // remove question and answers from game
            this.question.destroy();
            this.answers_set.forEach(function (answer) {
                answer.destroy();
            });
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'assignParty',
        value: function assignParty() {
            this.party.push({ name: 'thief' });
        }
    }, {
        key: 'startBattle',
        value: function startBattle(party) {
            if (this.totalCorrect === 0) {
                this.game.state.start('Preload', true, false);
            } else {
                this.game.music.pause();
                this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
                this.game.state.start('Battle', true, false, party, 'ReachKingdom');
            }
        }
    }]);

    return NPC02;
}(Phaser.Sprite);

exports.default = NPC02;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NPC04 = function (_Phaser$Sprite) {
    _inherits(NPC04, _Phaser$Sprite);

    function NPC04(game) {
        _classCallCheck(this, NPC04);

        // enable interaction with player

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC04).call(this, game, 750, 1000, 'npc04', 0));

        _this.scale.setTo(1.1);
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.startDialogue, _this);
        return _this;
    }

    _createClass(NPC04, [{
        key: 'startDialogue',
        value: function startDialogue() {
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.totalCorrect = 0;
            this.party = [];
            this.id = this.game.dialogue.start;
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'showDialogue',
        value: function showDialogue(dialogue, id) {
            var x = -400,
                y = 950;

            // show question
            var question = dialogue['elements'][id].npc;
            this.style = {
                font: "22px Arial",
                fill: "white",
                align: "center",
                backgroundColor: "000"
            };
            this.question = this.game.add.text(this.game.world.centerX + x, y, question, this.style);

            // show answers and add input to click
            var answers = dialogue['elements'][id].character;
            this.answers_set = [];
            for (var i in answers) {
                this.answers_set[i] = this.game.add.text(this.game.world.centerX + x, y += 60, answers[i][i], this.style);
                this.answers_set[i].inputEnabled = true;
                this.answers_set[i].events.onInputDown.add(this.checkAnswer, this);
            }
        }
    }, {
        key: 'checkAnswer',
        value: function checkAnswer(selected) {
            var selectedAnswer = selected.text;
            var correctAnswer = this.game.dialogue['elements'][this.id].correct;
            if (selectedAnswer == correctAnswer) {
                this.totalCorrect++;
                this.assignParty();
            } else {
                console.log("You got it wrong...");
            }
            this.updateDialogue();
        }
    }, {
        key: 'updateDialogue',
        value: function updateDialogue() {
            // update id to point to next question
            this.id = this.game.dialogue['elements'][this.id].followup;
            if (this.id == "") {
                this.startBattle(this.party);
            }

            // remove question and answers from game
            this.question.destroy();
            this.answers_set.forEach(function (answer) {
                answer.destroy();
            });
            this.showDialogue(this.game.dialogue, this.id);
        }
    }, {
        key: 'assignParty',
        value: function assignParty() {
            this.party.push({ name: 'thief' });
        }
    }, {
        key: 'startBattle',
        value: function startBattle(party) {
            if (this.totalCorrect === 0) {
                this.game.state.start('Preload', true, false);
            } else {
                this.game.music.pause();
                this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
                this.game.state.start('Battle', true, false, party, 'NorthKingdom');
            }
        }
    }]);

    return NPC04;
}(Phaser.Sprite);

exports.default = NPC04;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game) {
        _classCallCheck(this, Player);

        // enable physics for the player

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, 0, 0, 'hero'));

        _this.game.physics.arcade.enableBody(_this);
        _this.scale.setTo(1.1);
        _this.body.collideWorldBounds = true;
        _this.game.physics.arcade.enable(_this);

        // camera follows player
        _this.game.camera.follow(_this);

        // walking animations for the player
        _this.animations.add("walk-left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 8, true);
        _this.animations.add("walk-right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 8, true);
        _this.animations.add("walk-up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 8, true);
        _this.animations.add("walk-down", [130, 131, 132, 133, 134, 135, 136, 137, 138], 8, true);

        // create control inputs for player
        _this.cursors = _this.game.input.keyboard.createCursorKeys();
        return _this;
    }

    _createClass(Player, [{
        key: "update",
        value: function update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            // player moves in specified direction or stands still
            if (this.cursors.left.isDown) {
                this.animations.play("walk-left");
                this.body.velocity.x = -180;
            } else if (this.cursors.right.isDown) {
                this.animations.play("walk-right");
                this.body.velocity.x = +180;
            } else {
                this.body.velocity.x = 0;
            }
            if (this.cursors.up.isDown) {
                this.animations.play("walk-up");
                this.body.velocity.y = -180;
            } else if (this.cursors.down.isDown) {
                this.animations.play("walk-down");
                this.body.velocity.y = +180;
            } else {
                this.body.velocity.y = 0;
            }
            if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
                this.animations.stop();
            }
        }
    }]);

    return Player;
}(Phaser.Sprite);

exports.default = Player;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PlayerUnit = function (_Phaser$Sprite) {
    _inherits(PlayerUnit, _Phaser$Sprite);

    function PlayerUnit(game, x, y, asset, stats, type) {
        _classCallCheck(this, PlayerUnit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerUnit).call(this, game, x, y, asset, stats, type, 0));

        _this.scale.setTo(1.2);
        _this.smoothed = false;
        _this.inputEnabled = true;

        _this.animations.add("attack", [0, 1, 2, 3, 4, 5, 0], 8, false);
        _this.animations.play("attack");
        _this.attack = stats.attack;
        _this.defense = stats.defense;
        _this.health = stats.health;
        _this.type = type;
        return _this;
    }

    return PlayerUnit;
}(Phaser.Sprite);

exports.default = PlayerUnit;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _PlayerUnit = require('prefabs/PlayerUnit');

var _PlayerUnit2 = _interopRequireDefault(_PlayerUnit);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Battle = function (_Phaser$State) {
    _inherits(Battle, _Phaser$State);

    function Battle() {
        _classCallCheck(this, Battle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Battle).apply(this, arguments));
    }

    _createClass(Battle, [{
        key: 'init',
        value: function init(party, state) {
            this.town = state;
            this.game.party = party;
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.audio('gran_batalla', 'assets/audio/Gran_Batalla.mp3');
            var assets = this.game.party;
            var assets_data = JSON.parse(this.cache.getText('characters'));

            // load characters in party
            for (var character in assets) {
                this.load.spritesheet(assets[character].name, assets_data.assets[assets[character].name].source, assets_data.assets[assets[character].name].width, assets_data.assets[assets[character].name].height, 12);
            }
            this.load.spritesheet('orc_spear', assets_data.assets['orc_spear'].source, assets_data.assets['orc_spear'].width, assets_data.assets['orc_spear'].height, 12);
            this.load.spritesheet('skeleton_bow', assets_data.assets['skeleton_bow'].source, assets_data.assets['skeleton_bow'].width, assets_data.assets['skeleton_bow'].height, 12);
        }
    }, {
        key: 'create',
        value: function create() {
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
                this.character = new _PlayerUnit2.default(this.game, assets_data.prefabs[assets[character].name].position.x, assets_data.prefabs[assets[character].name].position.y += 100, assets[character].name, assets_data.prefabs[assets[character].name].properties.stats, assets_data.prefabs[assets[character].name].type);
                this.party.push(this.character);
                this.add.existing(this.character);
            }
            delete this.character;

            this.enemy = [];
            // create opponent's party
            for (var character in assets) {
                this.character = new _PlayerUnit2.default(this.game, assets_data.prefabs['orc_spear'].position.x, assets_data.prefabs['orc_spear'].position.y += 100, 'orc_spear', assets_data.prefabs['orc_spear'].properties.stats, assets_data.prefabs['orc_spear'].type);
                this.enemy.push(this.character);
                this.add.existing(this.character);
            }

            this.whoseTurn();
        }
    }, {
        key: 'whoseTurn',
        value: function whoseTurn() {
            console.log(this.town);
            if (this.isPartysTurn) {
                this.isPartysTurn = false;
                if (this.party.length == 0) {
                    this.game.music.pause();
                    this.state.start('Preload');
                } else {
                    this.current_unit = this.party.shift();
                }
            } else {
                this.isPartysTurn = true;
                if (this.enemy.length == 0) {
                    this.game.music.pause();
                    this.state.start(this.town);
                } else {
                    this.current_unit = this.enemy.shift();
                }
            }
            if (this.current_unit.alive != false) {
                this.current_unit.alive = true;
                if (this.isPartysTurn) {
                    this.enemy.push(this.current_unit);
                    this.act();
                } else {
                    this.party.push(this.current_unit);
                    this.act(this.current_unit);
                }
            } else {
                this.whoseTurn();
            }
        }
    }, {
        key: 'act',
        value: function act() {
            var target_index;
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
    }, {
        key: 'attack',
        value: function attack() {
            var damage, attack_multiplier, defense_multiplier;
            this.distanceMovedX = Math.abs(this.current_unit.position.x - this.target.position.x);
            this.distanceMovedY = Math.abs(this.current_unit.position.y - this.target.position.y);
            this.origY = this.current_unit.position.y;
            attack_multiplier = this.game.rnd.realInRange(0.8, 1.2);
            defense_multiplier = this.game.rnd.realInRange(0.8, 1.2);
            damage = Math.round(attack_multiplier * this.current_unit.attack - defense_multiplier * this.target.defense);

            if (this.current_unit.type == "enemy_unit") {
                this.current_unit.position.x = this.target.position.x - 50;
                this.current_unit.position.y = this.target.position.y;
            } else {
                this.current_unit.position.x = this.target.position.x + 50;
                this.current_unit.position.y = this.target.position.y;
            }
            this.current_unit.animations.play('attack');

            this.target.health -= damage;

            if (this.target.health <= 0) {
                this.target.health = 0;
                this.kill();
            }
            this.current_unit.animations.currentAnim.onComplete.add(this.move, this);
        }
    }, {
        key: 'move',
        value: function move() {
            if (this.current_unit.type == "enemy_unit") {
                this.current_unit.position.x = this.current_unit.position.x - this.distanceMovedX + 50;
                this.current_unit.position.y = this.origY;
            } else {
                this.current_unit.position.x = this.current_unit.position.x + this.distanceMovedX - 50;
                this.current_unit.position.y = this.origY;
            }
            this.whoseTurn();
        }
    }, {
        key: 'kill',
        value: function kill() {
            if (this.target.type == "enemy_unit") {
                var curr = this.enemy.indexOf(this.target);
                this.enemy.splice(curr, 1);
                this.target.alive = false;
                this.game.add.tween(this.target).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            } else {
                var curr = this.party.indexOf(this.target);
                this.party.splice(curr, 1);
                this.target.alive = false;
                this.game.add.tween(this.target).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            }
        }
    }]);

    return Battle;
}(Phaser.State);

exports.default = Battle;

},{"prefabs/PlayerUnit":11}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Boot = function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Boot).apply(this, arguments));
	}

	_createClass(Boot, [{
		key: 'preload',
		value: function preload() {
			this.load.image('splash', 'assets/images/splash.jpg');
		}
	}, {
		key: 'create',
		value: function create() {
			this.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start('Preload');
		}
	}]);

	return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {
            this.load.tilemap('north_kingdom', 'assets/tilemaps/north_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.tilemap('stormlands_kingdom', 'assets/tilemaps/stormlands_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.tilemap('principality_of_dorne', 'assets/tilemaps/principality_of_dorne.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.tilemap('reach_kingdom', 'assets/tilemaps/reach_kingdom.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.tilemap('battle', 'assets/tilemaps/battle.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'assets/spritesheets/Tiny16.png');
            this.load.image('snowytiles', 'assets/spritesheets/snowtiles.png');
            this.load.image('sheet', 'assets/spritesheets/sheet.png');
            this.load.image('town_tiles', 'assets/spritesheets/town_tiles.png');
            this.load.spritesheet('hero', 'assets/spritesheets/hero.png', 64, 64, 178);
            this.game.load.audio('soliloquy', 'assets/audio/Soliloquy_1.mp3');
        }
    }, {
        key: 'create',
        value: function create() {
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
    }, {
        key: 'startGame',
        value: function startGame() {
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
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
