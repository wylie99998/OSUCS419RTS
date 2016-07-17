(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Splash = require('states/Splash');

var _Splash2 = _interopRequireDefault(_Splash);

var _Village = require('states/Village');

var _Village2 = _interopRequireDefault(_Village);

var _NorthKingdom = require('states/NorthKingdom');

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

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 800, 600, Phaser.AUTO, 'content', null));

		_this.state.add('Splash', _Splash2.default, false);
		_this.state.add('Village', _Village2.default, false);
		_this.state.add('NorthKingdom', _NorthKingdom2.default, false);
		_this.state.start('Splash');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"states/NorthKingdom":2,"states/Splash":3,"states/Village":4}],2:[function(require,module,exports){
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

var NorthKingdom = function (_Phaser$State) {
    _inherits(NorthKingdom, _Phaser$State);

    function NorthKingdom() {
        _classCallCheck(this, NorthKingdom);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NorthKingdom).apply(this, arguments));
    }

    _createClass(NorthKingdom, [{
        key: 'preload',
        value: function preload() {
            this.load.image('tiles', 'assets/Tiny16-Complete-Spritesheet-Repack3.png');
            this.load.tilemap('north_kingdom', 'assets/north_kingdom.json', null, Phaser.Tilemap.TILED_JSON);

            this.load.spritesheet('hero', "assets/hero.png", 64, 64, 178);
        }
    }, {
        key: 'create',
        value: function create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            // load map
            this.north_kingdom = this.add.tilemap('north_kingdom');
            this.north_kingdom.addTilesetImage('Tiny16-Complete-Spritesheet-Repack3', 'tiles');
            this.layer = this.north_kingdom.createLayer(0);
            this.layer.scale.setTo(1.5, 1.5);

            // load hero
            this.hero = this.add.sprite(250, 150, 'hero');
            this.hero.animations.add("walk-left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 8, true);
            this.hero.animations.add("walk-right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 8, true);
            this.hero.animations.add("walk-up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 8, true);
            this.hero.animations.add("walk-down", [130, 131, 132, 133, 134, 135, 136, 137, 138], 8, true);
            this.hero.anchor.set(0.5, 0.5);

            this.idle = [117, 143];
            this.camera.follow(this.hero);
            this.cursors = this.input.keyboard.createCursorKeys();
        }
    }, {
        key: 'update',
        value: function update() {
            this.physics.arcade.enable(this.hero, this.layer);
            this.hero.body.velocity.x = 0;
            this.hero.body.velocity.y = 0;

            if (this.cursors.left.isDown) {
                this.hero.animations.play("walk-left");
                this.hero.body.velocity.x = -80;
            } else if (this.cursors.right.isDown) {
                this.hero.animations.play("walk-right");
                this.hero.body.velocity.x = +80;
            } else {
                this.hero.body.velocity.x = 0;
            }
            if (this.cursors.up.isDown) {
                this.hero.animations.play("walk-up");
                this.hero.body.velocity.y = -80;
            } else if (this.cursors.down.isDown) {
                this.hero.animations.play("walk-down");
                this.hero.body.velocity.y = +80;
            } else {
                this.hero.body.velocity.y = 0;
            }
            if (this.hero.body.velocity.x === 0 && this.hero.body.velocity.y === 0) {
                this.hero.animations.stop();
            }
        }
    }]);

    return NorthKingdom;
}(Phaser.State);

exports.default = NorthKingdom;

},{}],3:[function(require,module,exports){
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

var _NorthKingdom = require('states/NorthKingdom');

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

var Splash = function (_Phaser$State) {
	_inherits(Splash, _Phaser$State);

	function Splash() {
		_classCallCheck(this, Splash);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Splash).apply(this, arguments));
	}

	_createClass(Splash, [{
		key: 'preload',
		value: function preload() {
			//this.load.atlas('button', '/assets/button_texture_atlas.png', 'assets/button_texture_atlas.json')
			this.load.image('splash', 'assets/splash.jpg');
		}
	}, {
		key: 'create',
		value: function create() {
			var image = this.add.sprite(0, 0, 'splash');
			image.scale.setTo(0.75, 0.6);
			image.inputEnabled = true;
			image.events.onInputDown.add(this.listener, this);
			//this.startButton = this.add.button(this.world.centerX + 150, 730, 'splash', this.actionOnClick, this);
		}
	}, {
		key: 'listener',
		value: function listener() {
			this.state.start('NorthKingdom');
		}
		/*actionOnClick() {
  	console.log("Clicked!");
  	this.state.start('NorthKingdom');
  }*/

	}]);

	return Splash;
}(Phaser.State);

exports.default = Splash;

},{"states/NorthKingdom":2}],4:[function(require,module,exports){
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

var Village = function (_Phaser$State) {
	_inherits(Village, _Phaser$State);

	function Village() {
		_classCallCheck(this, Village);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Village).apply(this, arguments));
	}

	_createClass(Village, [{
		key: 'preload',
		value: function preload() {
			this.load.spritesheet('hero', 'assets/hero.png');
			this.load.image('tiles', 'assets/Tiny16-Complete-Spritesheet-Repack3.png');
			this.load.tilemap('village', 'assets/village.json', null, Phaser.Tilemap.TILED_JSON);
		}
	}, {
		key: 'create',
		value: function create() {
			var map = this.add.tilemap('village');
			map.addTilesetImage('Tiny16-Complete-Spritesheet-Repack3', 'tiles');
			var layer0 = map.createLayer(0);
			var layer1 = map.createLayer(1);
			var layer2 = map.createLayer(2);
			var layer3 = map.createLayer(3);
			var layer4 = map.createLayer(4);
			var layer5 = map.createLayer(5);
			var layer6 = map.createLayer(6);
			var layer7 = map.createLayer(7);
		}
	}, {
		key: 'update',
		value: function update() {}
	}]);

	return Village;
}(Phaser.State);

exports.default = Village;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
