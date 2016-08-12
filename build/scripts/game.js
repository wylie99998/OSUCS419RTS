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
		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"levels/NorthKingdom":2,"levels/StormlandsKingdom":3,"states/Battle":8,"states/Boot":9,"states/Preload":10}],2:[function(require,module,exports){
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

},{"prefabs/NPC01":4,"prefabs/Player":6}],3:[function(require,module,exports){
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
																		this.load.text('dialogue', 'assets/dialogue/NPC01.json');
																		this.load.text('characters', 'assets/characters.json');
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

},{"prefabs/NPC02":5,"prefabs/Player":6}],4:[function(require,module,exports){
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
            if (selectedAnswer == correctAnswer) {
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
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.game.state.start('Battle', true, false, party);
        }
    }]);

    return NPC01;
}(Phaser.Sprite);

exports.default = NPC01;

},{}],5:[function(require,module,exports){
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
            if(Cookies.get('NPC02') === undefined){
            Cookies.set('NPC02', '0', { expires: 7 });
        }
        if (selectedAnswer == correctAnswer) {
            var counterCookie = parseInt(Cookies.get('NPC02')) + 1;
            Cookies.set('NPC02', counterCookie.toString(), { expires: 7 });
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
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.game.state.start('Battle', true, false, party);
        }
    }]);

    return NPC02;
}(Phaser.Sprite);

exports.default = NPC02;

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

    function PlayerUnit(game, x, y, asset, stats) {
        _classCallCheck(this, PlayerUnit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerUnit).call(this, game, x, y, asset, stats, 0));

        _this.scale.setTo(1.2);
        _this.smoothed = false;
        _this.inputEnabled = true;

        _this.animations.add("attack", [0, 1, 2, 3, 4, 5, 0], 8, false);
        _this.animations.play("attack");
        _this.attack = stats.attack;
        _this.defense = stats.defense;
        _this.health = stats.health;
        return _this;
    }

    return PlayerUnit;
}(Phaser.Sprite);

exports.default = PlayerUnit;

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
        value: function init(party) {
            this.game.party = party;
        }
    }, {
        key: 'preload',
        value: function preload() {
            var assets = this.game.party;
            var assets_data = JSON.parse(this.cache.getText('characters'));

            // load characters in party
            for (var character in assets) {
                this.load.spritesheet(assets[character].name, assets_data.assets[assets[character].name].source, assets_data.assets[assets[character].name].width, assets_data.assets[assets[character].name].height, 12);
            }
            this.load.spritesheet('ultimate_defender', assets_data.assets['ultimate_defender'].source, assets_data.assets['ultimate_defender'].width, assets_data.assets['ultimate_defender'].height, 12);
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

            // create characters in party
            var assets = this.game.party;
            var assets_data = JSON.parse(this.cache.getText('characters'));
            var prefabs = [];
            for (var character in assets) {
                this.character = new _PlayerUnit2.default(this.game, assets_data.prefabs[assets[character].name].position.x, assets_data.prefabs[assets[character].name].position.y += 100, assets[character].name, assets_data.prefabs[assets[character].name].properties.stats);
                prefabs.push(this.character);
                this.add.existing(this.character);
            }
            delete this.character;

            // create opponent's party
            for (var character in assets) {
                this.character = new _PlayerUnit2.default(this.game, assets_data.prefabs['ultimate_defender'].position.x, assets_data.prefabs['ultimate_defender'].position.y += 100, 'ultimate_defender', assets_data.prefabs['ultimate_defender'].properties.stats);
                prefabs.push(this.character);
                this.add.existing(this.character);
            }
            delete this.character;

            this.whoseTurn(prefabs);
            //this.whoseTurn = this.sara.name;

            //this.ultimate_defender.events.onInputDown.add(this.effect, this);
        }
    }, {
        key: 'whoseTurn',
        value: function whoseTurn(prefabs) {
            this.current_unit = prefabs.shift();
            //this.attack(this.current_unit);
            console.log(prefabs);
            //prefabs.events.onInputDown.add(this.attack, this)
        }
    }, {
        key: 'attack',
        value: function attack() {
            console.log(this);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'effect',
        value: function effect() {
            console.log('hit');
        }
    }]);

    return Battle;
}(Phaser.State);

exports.default = Battle;

},{"prefabs/PlayerUnit":7}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
            this.load.tilemap('battle', 'assets/tilemaps/battle.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'assets/spritesheets/Tiny16.png');
            this.load.image('snowytiles', 'assets/spritesheets/snowtiles.png');
            this.load.spritesheet('hero', "assets/spritesheets/hero.png", 64, 64, 178);
        }
    }, {
        key: 'create',
        value: function create() {
            this.image = this.add.sprite(0, 0, 'splash');
            this.image.scale.setTo(0.9, 0.63);
            this.image.inputEnabled = true;
            this.image.events.onInputDown.add(this.startGame, this);
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.state.start('StormlandsKingdom');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
