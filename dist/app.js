/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/coin.js":
/*!************************!*\
  !*** ./src/js/coin.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Coin = function Coin() {\n  _classCallCheck(this, Coin);\n\n  this.x = Math.floor(Math.random() * 10);\n  this.y = Math.floor(Math.random() * 10);\n};\n\nexports.default = Coin;\n\n//# sourceURL=webpack:///./src/js/coin.js?");

/***/ }),

/***/ "./src/js/furry.js":
/*!*************************!*\
  !*** ./src/js/furry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Furry = function Furry() {\n  _classCallCheck(this, Furry);\n\n  this.x = 0;\n  this.y = 0;\n  this.direction = \"right\";\n};\n\nexports.default = Furry;\n\n//# sourceURL=webpack:///./src/js/furry.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\nvar _furry = __webpack_require__(/*! ./furry.js */ \"./src/js/furry.js\");\n\nvar _furry2 = _interopRequireDefault(_furry);\n\nvar _coin = __webpack_require__(/*! ./coin.js */ \"./src/js/coin.js\");\n\nvar _coin2 = _interopRequireDefault(_coin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar self = void 0;\nvar isRunning = void 0;\nvar closeInfo = document.querySelector(\".close\");\nvar info = document.querySelector(\"#info\");\n\ncloseInfo.addEventListener(\"click\", function () {\n  info.classList.add(\"invisible\");\n});\n\ndocument.addEventListener('keydown', function (event) {\n  Game.prototype.turnFurry(event);\n  if (event.which == 13 && !isRunning && info.className == \"invisible\") {\n    Game.prototype.startGame();\n    isRunning = true;\n  }\n});\n\nvar Game = function () {\n  function Game() {\n    var _this = this;\n\n    _classCallCheck(this, Game);\n\n    self = this;\n    this.board = document.querySelectorAll(\"#board div\");\n    this.scoreElement = document.querySelector(\".score span\");\n    this.levelElement = document.querySelector(\".level span\");\n    this.gameOver = document.querySelector(\"#over\");\n    this.lvl_up = document.querySelector(\"#lvlUp\");\n    this.startPosition = document.querySelector(\"#board\").firstElementChild;\n    this.furry = new _furry2.default();\n    this.coin = new _coin2.default();\n    this.stopGame = false;\n    this.furrySpeed = 300;\n    this.score = 0;\n    this.level = 1;\n    this.handler = setInterval(function () {\n      _this.furrySpeed -= 25;\n      _this.level++;\n      _this.increaseLevel();\n    }, 10000);\n  }\n\n  _createClass(Game, [{\n    key: \"mainFn\",\n    value: function mainFn() {\n      if (!self.stopGame) {\n        self.scoreElement.innerHTML = self.score;\n        self.showCoin();\n        self.moveFurry();\n\n        if (self.isGameOver()) {\n          self.stopGame = true;\n          clearInterval(self.handler);\n          isRunning = false;\n          self.hideVisibleFurry();\n          self.hideCoin();\n          self.gameOver.classList.add(\"visible\");\n          self.startPosition.classList.add(\"arrow\");\n        } else {\n          self.hideVisibleFurry();\n          self.showFurry();\n          self.checkCoinCollision();\n        }\n\n        setTimeout(self.mainFn, self.furrySpeed);\n      }\n    }\n  }, {\n    key: \"increaseLevel\",\n    value: function increaseLevel() {\n      var _this2 = this;\n\n      this.levelElement.innerHTML = this.level;\n      this.lvl_up.classList.add(\"lvlUp\");\n\n      setTimeout(function () {\n        _this2.lvl_up.classList.remove(\"lvlUp\");\n      }, 1000);\n    }\n  }, {\n    key: \"index\",\n    value: function index(x, y) {\n      return x + y * 10;\n    }\n  }, {\n    key: \"hideVisibleFurry\",\n    value: function hideVisibleFurry() {\n      var furry = document.querySelector('.furry');\n      if (furry) {\n        furry.classList.remove(\"furry\");\n      }\n    }\n  }, {\n    key: \"showFurry\",\n    value: function showFurry() {\n      this.startPosition.classList.remove(\"arrow\");\n\n      return this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    }\n  }, {\n    key: \"showCoin\",\n    value: function showCoin() {\n      return this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    }\n  }, {\n    key: \"showScore\",\n    value: function showScore() {\n      this.scoreElement.innerHTML = this.score;\n      this.levelElement.innerHTML = this.level;\n    }\n  }, {\n    key: \"hideCoin\",\n    value: function hideCoin() {\n      var coin = document.querySelector('.coin');\n      if (coin) {\n        coin.classList.remove(\"coin\");\n      }\n    }\n  }, {\n    key: \"turnFurry\",\n    value: function turnFurry(event) {\n      if (event.which == 37) {\n        self.furry.direction = \"left\";\n      } else if (event.which == 39) {\n        self.furry.direction = \"right\";\n      } else if (event.which == 38) {\n        self.furry.direction = \"up\";\n      } else if (event.which == 40) {\n        self.furry.direction = \"down\";\n      }\n    }\n  }, {\n    key: \"moveFurry\",\n    value: function moveFurry() {\n      if (this.furry.direction === \"right\") {\n        this.furry.x++;\n      } else if (this.furry.direction === \"left\") {\n        this.furry.x--;\n      } else if (this.furry.direction === \"up\") {\n        this.furry.y--;\n      } else if (this.furry.direction === \"down\") {\n        this.furry.y++;\n      };\n    }\n  }, {\n    key: \"checkCoinCollision\",\n    value: function checkCoinCollision() {\n      if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\n        this.score++;\n        this.scoreElement.innerHTML = this.score;\n        this.coin = new _coin2.default();\n        this.showCoin();\n      }\n    }\n  }, {\n    key: \"isGameOver\",\n    value: function isGameOver() {\n      if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      new Game();\n      self.gameOver.classList.remove(\"visible\");\n      self.showScore();\n      self.showFurry();\n      setTimeout(self.mainFn, self.furrySpeed);\n    }\n  }]);\n\n  return Game;\n}();\n\n;\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });