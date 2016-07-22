(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preload = require('states/Preload');

var _Preload2 = _interopRequireDefault(_Preload);

var _NorthKingdom = require('levels/NorthKingdom');

var _NorthKingdom2 = _interopRequireDefault(_NorthKingdom);

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
		_this.state.add('NorthKingdom', _NorthKingdom2.default, false);
		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"levels/NorthKingdom":2,"states/Boot":5,"states/Preload":6}],2:[function(require,module,exports){
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

var GameState = function (_Phaser$State) {
						_inherits(GameState, _Phaser$State);

						function GameState() {
												_classCallCheck(this, GameState);

												return _possibleConstructorReturn(this, Object.getPrototypeOf(GameState).apply(this, arguments));
						}

						_createClass(GameState, [{
												key: 'preload',
												value: function preload() {
																		this.load.spritesheet('npc01', "assets/spritesheets/npc01.png", 64, 64, 178);
																		this.load.text('dialogue', 'assets/dialogue/NPC01.json');
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

						return GameState;
}(Phaser.State);

exports.default = GameState;
exports.default = GameState;

},{"prefabs/NPC01":3,"prefabs/Player":4}],3:[function(require,module,exports){
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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC01).call(this, game, 1400, 500, 'npc01', 26));

        _this.scale.setTo(1.1);
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.startConversation, _this);
        return _this;
    }

    _createClass(NPC01, [{
        key: 'startConversation',
        value: function startConversation() {
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.id = this.game.dialogue.start;
            this.start = this.game.dialogue['elements'][this.id];
            this.style = { font: "22px Arial", fill: "white", align: "center", backgroundColor: "000" };
            //this.game.add.text(this.game.world.centerX+350, 500, this.start.npc, this.style);
            this.character = this.game.dialogue.name;
            this.updateConversation(this.start, this.character);
        }
    }, {
        key: 'updateConversation',
        value: function updateConversation(id, character) {
            if (character == "NPC01") {
                character = "";
                this.message = id.npc;
                this.showConversation(id.player["1424791491948"], this.message);
            } else {
                character = this.game.dialogue.name;
                this.message = id.text;
                id = this.game.dialogue['elements']['1424791562420'];
                this.showConversation(id, this.message);
            }
        }
    }, {
        key: 'showConversation',
        value: function showConversation(id, message) {
            this.game.add.text(this.game.world.centerX + 350, 500, message, this.style);
            this.style = { font: "22px Arial", fill: "white", align: "center", backgroundColor: "000" };
            this.updateConversation(id);
        }
    }]);

    return NPC01;
}(Phaser.Sprite);

exports.default = NPC01;

},{}],4:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
            this.load.image('tiles', 'assets/spritesheets/Tiny16.png');
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
            this.state.start('NorthKingdom');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
