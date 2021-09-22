/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./db/config/config.js":
/*!*****************************!*\
  !*** ./db/config/config.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! dotenv */ "dotenv").config({
  path: __webpack_require__(/*! path */ "path").resolve('.env')
});

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

var sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false
});

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sequelize.authenticate();

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error('Unable to connect to the database:', _context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 5]]);
}))();

var model = function model(name) {
  return database.models[name];
};

var beginnerScores = __webpack_require__(/*! ../models/beginner_scores_model.js */ "./db/models/beginner_scores_model.js")(sequelize, Sequelize.DataTypes);

var intermediateScores = __webpack_require__(/*! ../models/intermediate_scores_model.js */ "./db/models/intermediate_scores_model.js")(sequelize, Sequelize.DataTypes);

var advancedScores = __webpack_require__(/*! ../models/advanced_scores_model.js */ "./db/models/advanced_scores_model.js")(sequelize, Sequelize.DataTypes);

var userLogins = __webpack_require__(/*! ../models/user_login_model.js */ "./db/models/user_login_model.js")(sequelize, Sequelize.DataTypes);

module.exports = database = {
  sequelize: sequelize,
  models: {
    beginnerScores: beginnerScores,
    intermediateScores: intermediateScores,
    advancedScores: advancedScores,
    userLogins: userLogins
  },
  // connect,
  model: model
};

/***/ }),

/***/ "./db/controllers/controllers.js":
/*!***************************************!*\
  !*** ./db/controllers/controllers.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sequelize = __webpack_require__(/*! Database/config/config.js */ "./db/config/config.js");

module.exports = {
  postNewUser: function () {
    var _postNewUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userName, userPass) {
      var userLogins;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              userLogins = sequelize.models.userLogins;
              _context.next = 4;
              return userLogins.create({
                username: userName,
                userPass: userPass
              });

            case 4:
              return _context.abrupt("return", 'New User Posted!');

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.send(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function postNewUser(_x, _x2) {
      return _postNewUser.apply(this, arguments);
    }

    return postNewUser;
  }(),
  validateUser: function () {
    var _validateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userName, userPass) {
      var userLogins, loginTest, loginPasswordTest;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              userLogins = sequelize.models.userLogins;
              _context2.next = 4;
              return userLogins.findAll({
                limit: 1,
                where: {
                  username: userName
                }
              });

            case 4:
              loginTest = _context2.sent;
              _context2.next = 7;
              return userLogins.findAll({
                limit: 1,
                where: {
                  username: userName,
                  userPass: userPass
                }
              });

            case 7:
              loginPasswordTest = _context2.sent;

              if (!(loginTest.length !== 0 && !loginPasswordTest.length)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", 'wrong password');

            case 10:
              if (!(loginTest.length !== 0)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", false);

            case 12:
              return _context2.abrupt("return", true);

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    function validateUser(_x3, _x4) {
      return _validateUser.apply(this, arguments);
    }

    return validateUser;
  }(),
  getResults: function () {
    var _getResults = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(skillLevel, username) {
      var _sequelize$models, beginnerScores, intermediateScores, advancedScores, whereStatement, determinedSkillLevel, scoreResults;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _sequelize$models = sequelize.models, beginnerScores = _sequelize$models.beginnerScores, intermediateScores = _sequelize$models.intermediateScores, advancedScores = _sequelize$models.advancedScores;
              whereStatement = {};
              if (username) whereStatement.username = username;
              determinedSkillLevel = skillLevel === 'beginner' || !skillLevel ? beginnerScores : skillLevel === 'intermediate' ? intermediateScores : advancedScores;
              _context3.next = 7;
              return determinedSkillLevel.findAll({
                where: whereStatement,
                limit: 10,
                order: [['time', 'ASC']]
              });

            case 7:
              scoreResults = _context3.sent;
              return _context3.abrupt("return", scoreResults);

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    function getResults(_x5, _x6) {
      return _getResults.apply(this, arguments);
    }

    return getResults;
  }(),
  postResult: function () {
    var _postResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(skillLevel, time, definedUserName) {
      var _sequelize$models2, beginnerScores, intermediateScores, advancedScores, determinedSkillLevel, newTopTimes;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _sequelize$models2 = sequelize.models, beginnerScores = _sequelize$models2.beginnerScores, intermediateScores = _sequelize$models2.intermediateScores, advancedScores = _sequelize$models2.advancedScores;
              determinedSkillLevel = skillLevel === 'beginner' ? beginnerScores : skillLevel === 'intermediate' ? intermediateScores : advancedScores;
              _context4.prev = 2;
              _context4.next = 5;
              return determinedSkillLevel.create({
                username: definedUserName,
                time: time
              });

            case 5:
              _context4.next = 7;
              return determinedSkillLevel.findAll({
                limit: 10,
                order: [['time', 'ASC']]
              });

            case 7:
              newTopTimes = _context4.sent;
              return _context4.abrupt("return", newTopTimes);

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);
              throw _context4.t0;

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 11]]);
    }));

    function postResult(_x7, _x8, _x9) {
      return _postResult.apply(this, arguments);
    }

    return postResult;
  }()
};

/***/ }),

/***/ "./db/models/advanced_scores_model.js":
/*!********************************************!*\
  !*** ./db/models/advanced_scores_model.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function (sequelize, DataTypes) {
  var AdvancedScores = sequelize.define("advanced_scores", {
    username: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  return AdvancedScores;
};

/***/ }),

/***/ "./db/models/beginner_scores_model.js":
/*!********************************************!*\
  !*** ./db/models/beginner_scores_model.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function (sequelize, DataTypes) {
  var BeginnerScores = sequelize.define("beginner_scores", {
    username: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  return BeginnerScores;
};

/***/ }),

/***/ "./db/models/intermediate_scores_model.js":
/*!************************************************!*\
  !*** ./db/models/intermediate_scores_model.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (sequelize, DataTypes) {
  var IntermediateScores = sequelize.define("intermediate_scores", {
    username: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  return IntermediateScores;
};

/***/ }),

/***/ "./db/models/user_login_model.js":
/*!***************************************!*\
  !*** ./db/models/user_login_model.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = function (sequelize, DataTypes) {
  var UserLogin = sequelize.define("user_logins", {
    username: {
      type: DataTypes.STRING
    },
    userPass: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return UserLogin;
};

/***/ }),

/***/ "./src/components/Board/Board.js":
/*!***************************************!*\
  !*** ./src/components/Board/Board.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Squares_BoardSquare_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Squares/BoardSquare.js */ "./src/components/Board/Squares/BoardSquare.js");
/* harmony import */ var Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/customHooks.js */ "./src/components/customHooks.js");
/* harmony import */ var _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEffectBoardHooks.js */ "./src/components/Board/useEffectBoardHooks.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! BoardStore */ "./src/components/Board/BoardStore/boardStore.js");
/* harmony import */ var _boardstyles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boardstyles.scss */ "./src/components/Board/boardstyles.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      globalState = _useGlobalContext2[0],
      globalDispatch = _useGlobalContext2[1];

  var _useBoardContext = (0,BoardStore__WEBPACK_IMPORTED_MODULE_5__.useBoardContext)(),
      _useBoardContext2 = _slicedToArray(_useBoardContext, 2),
      _useBoardContext2$ = _useBoardContext2[0],
      flippers = _useBoardContext2$.flippers,
      mines = _useBoardContext2$.mines,
      numbers = _useBoardContext2$.numbers,
      scrollBoard = _useBoardContext2$.scrollBoard,
      colorDelay = _useBoardContext2$.colorDelay,
      boardDispatch = _useBoardContext2[1];

  var dimensions = globalState.dimensions,
      skillLevel = globalState.dimensions.skillLevel,
      timerOn = globalState.timerOn,
      definedUserName = globalState.definedUserName; // Board Specific useEffects && actions.

  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.freezeColorDelayEffect(definedUserName, boardDispatch);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.stopColorIterationEffect(colorDelay, boardDispatch);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.freezeScrollBoardEffect(scrollBoard);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.generateMinesEffect(dimensions, boardDispatch);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.generateNumberEffect(mines, dimensions, boardDispatch);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.resetGameEffectOnSmileyOrSkill(timerOn, skillLevel, dimensions, boardDispatch);
  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);
  var setScrollBoardCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return boardDispatch({
      type: 'TOGGLE SCROLLBOARD'
    });
  }, []); // Mixed!

  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.revealFlipperEffect({
    mines: mines,
    flippers: flippers,
    numbers: numbers,
    globalDispatch: globalDispatch,
    boardDispatch: boardDispatch
  }); // Global Board useEffects

  _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.default.resetOnSkillLevelChangeEffect(skillLevel, globalDispatch);

  var handleScroll = function handleScroll(_) {
    return boardDispatch({
      type: 'MODULATE COLOR DELAY',
      payload: {
        newColorDelay: event.deltaY
      }
    });
  };

  (0,Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__.useInterval)(function () {
    return boardDispatch({
      type: 'ITERATE COLORS'
    });
  }, colorDelay);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onWheel: colorDelay ? handleScroll : null,
    onMouseEnter: colorDelay ? setScrollBoardCallback : null,
    onMouseLeave: colorDelay ? setScrollBoardCallback : null
  }, _toConsumableArray(new Array(dimensions.verticalDimension)).map(function (row, rowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: rowIndex,
      className: "sweep-row"
    }, _toConsumableArray(new Array(dimensions.horizontalDimension)).map(function (sqr, sqrIndex) {
      var currTile = rowIndex * dimensions.horizontalDimension + sqrIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Squares_BoardSquare_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        key: sqrIndex,
        currTile: currTile
      });
    }));
  }));
});

/***/ }),

/***/ "./src/components/Board/BoardStore/boardActions.js":
/*!*********************************************************!*\
  !*** ./src/components/Board/BoardStore/boardActions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iterateColors": () => (/* binding */ iterateColors),
/* harmony export */   "modulateColorDelay": () => (/* binding */ modulateColorDelay),
/* harmony export */   "revealFlippers": () => (/* binding */ revealFlippers),
/* harmony export */   "flipNormalTile": () => (/* binding */ flipNormalTile),
/* harmony export */   "flipRecursedTiles": () => (/* binding */ flipRecursedTiles),
/* harmony export */   "revealDeadFlippers": () => (/* binding */ revealDeadFlippers),
/* harmony export */   "setFlagFlipped": () => (/* binding */ setFlagFlipped),
/* harmony export */   "generateMines": () => (/* binding */ generateMines),
/* harmony export */   "generateNumbers": () => (/* binding */ generateNumbers)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var iterateColors = function iterateColors(existingColors) {
  var lastColor = existingColors.pop();
  existingColors.unshift(lastColor);
  return _toConsumableArray(existingColors);
};

var modulateColorDelay = function modulateColorDelay(existing, newColorDelay) {
  if (existing + newColorDelay > 25) {
    // If Increasing the Color Delay- do so at a rate of 1, otherwise when decreasing do so at 2.5 rate- full rate is less enjoyable
    newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5 : newColorDelay < 0 ? newColorDelay / 2.5 : 1;
    return existing + newColorDelay;
  }

  return existing;
};

var revealFlippers = function revealFlippers(existingFlippers, mines) {
  existingFlippers = existingFlippers.map(function (flipper, index) {
    if (flipper === 'flag' || mines.includes(index)) {
      return 'flag';
    } else {
      return true;
    }
  });
  return _toConsumableArray(existingFlippers);
};

var flipNormalTile = function flipNormalTile(existingFlippers, flippedTile) {
  existingFlippers.splice(flippedTile, 1, true);
  return _toConsumableArray(existingFlippers);
};

var flipRecursedTiles = function flipRecursedTiles(existingFlippers, recursedTiles) {
  for (var i = 0; i < recursedTiles.length; i++) {
    existingFlippers.splice(recursedTiles[i], 1, true);
  }

  return _toConsumableArray(existingFlippers);
};

var revealDeadFlippers = function revealDeadFlippers(existingFlippers) {
  existingFlippers = existingFlippers.map(function (flipper, index) {
    if (index === 0) {
      return 'dead';
    } else {
      return true;
    }
  });
  return _toConsumableArray(existingFlippers);
};

var setFlagFlipped = function setFlagFlipped(existingFlippers, flagFlipped) {
  if (existingFlippers[flagFlipped] === 'flag') {
    existingFlippers.splice(flagFlipped, 1, false);
  } else {
    existingFlippers.splice(flagFlipped, 1, 'flag');
  }

  return _toConsumableArray(existingFlippers);
};

var generateMines = function generateMines(_ref) {
  var numberOfMines = _ref.numberOfMines,
      verticalDimension = _ref.verticalDimension,
      horizontalDimension = _ref.horizontalDimension;
  var mineArr = [];

  while (mineArr.length < numberOfMines) {
    var mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));

    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  }

  ;
  return mineArr;
};

var generateNumbers = function generateNumbers(_ref2) {
  var mines = _ref2.mines,
      verticalDimension = _ref2.verticalDimension,
      horizontalDimension = _ref2.horizontalDimension;

  var board = _toConsumableArray(Array(verticalDimension * horizontalDimension).keys());

  var numBoard = {};
  mines.forEach(function (mine, index, mineArr) {
    // Number is Top Left Diagonal
    var tLD = horizontalDimension + 1;

    if (board.includes(mine - tLD) && (mine - tLD + 1) % horizontalDimension !== 0 && !mineArr.includes(mine - tLD)) {
      if (numBoard[mine - tLD]) {
        numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
      } else {
        numBoard[mine - tLD] = 1;
      }
    } // Number is Above


    var tD = horizontalDimension;

    if (board.includes(mine - tD) && !mineArr.includes(mine - tD)) {
      if (numBoard[mine - tD]) {
        numBoard[mine - tD] = numBoard[mine - tD] + 1;
      } else {
        numBoard[mine - tD] = 1;
      }
    } //Number is Top Right Diagonal


    var tRD = horizontalDimension - 1;

    if (board.includes(mine - tRD) && (mine - tRD) % horizontalDimension !== 0 && !mineArr.includes(mine - tRD)) {
      if (numBoard[mine - tRD]) {
        numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
      } else {
        numBoard[mine - tRD] = 1;
      }
    } // Number to the right


    if (board.includes(mine + 1) && (mine + 1) % horizontalDimension !== 0 && !mineArr.includes(mine + 1)) {
      if (numBoard[mine + 1]) {
        numBoard[mine + 1] = numBoard[mine + 1] + 1;
      } else {
        numBoard[mine + 1] = 1;
      }
    } // Number is Bottom Right Diagonal


    var bRD = horizontalDimension + 1;

    if (board.includes(mine + bRD) && (mine + bRD) % horizontalDimension !== 0 && !mineArr.includes(mine + bRD)) {
      if (numBoard[mine + bRD]) {
        numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
      } else {
        numBoard[mine + bRD] = 1;
      }
    } // Number is Below


    var bD = horizontalDimension;

    if (board.includes(mine + bD) && !mineArr.includes(mine + bD)) {
      if (numBoard[mine + bD]) {
        numBoard[mine + bD] = numBoard[mine + bD] + 1;
      } else {
        numBoard[mine + bD] = 1;
      }
    } //Number is Bottom Left Diagonal


    var bLD = horizontalDimension - 1;

    if (board.includes(mine + bLD) && (mine + bLD + 1) % horizontalDimension !== 0 && !mineArr.includes(mine + bLD)) {
      if (numBoard[mine + bLD]) {
        numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
      } else {
        numBoard[mine + bLD] = 1;
      }
    } // Number to the left


    if (board.includes(mine - 1) && mine % horizontalDimension !== 0 && !mineArr.includes(mine - 1)) {
      if (numBoard[mine - 1]) {
        numBoard[mine - 1] = numBoard[mine - 1] + 1;
      } else {
        numBoard[mine - 1] = 1;
      }
    }
  });
  return numBoard;
};



/***/ }),

/***/ "./src/components/Board/BoardStore/boardReducers.js":
/*!**********************************************************!*\
  !*** ./src/components/Board/BoardStore/boardReducers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boardActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardActions.js */ "./src/components/Board/BoardStore/boardActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

var scrollBoard = function scrollBoard() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE SCROLLBOARD':
      return !state;

    default:
      return state;
  }
};

var colorDelay = function colorDelay() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      _ref$payload = _ref.payload;

  _ref$payload = _ref$payload === void 0 ? {} : _ref$payload;
  var newColorDelay = _ref$payload.newColorDelay;

  switch (type) {
    case "UNSET COLOR DELAY":
      return null;

    case "MODULATE COLOR DELAY":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.modulateColorDelay)(state, newColorDelay);

    default:
      return state;
  }

  ;
};

var colors = function colors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ITERATE COLORS":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.iterateColors)(state.slice());

    case "STOP COLOR ITERATION":
      return null;

    default:
      return state;
  }
};

var flippers = function flippers(state, _ref2) {
  var type = _ref2.type,
      payload = _ref2.payload,
      _ref2$payload = _ref2.payload;
  _ref2$payload = _ref2$payload === void 0 ? {} : _ref2$payload;
  var flagFlipped = _ref2$payload.flagFlipped,
      flippedTile = _ref2$payload.flippedTile,
      mines = _ref2$payload.mines;

  switch (type) {
    case "RESET FLIPPERS":
      return payload;

    case "SET FLAG FLIPPED":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.setFlagFlipped)(state.slice(), flagFlipped);

    case "FLIP NORMAL TILE":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.flipNormalTile)(state.slice(), flippedTile);

    case "FLIP RECURSED TILES":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.flipRecursedTiles)(state.slice(), payload);

    case "REVEAL DEAD FLIPPERS":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.revealDeadFlippers)(state.slice());

    case "REVEAL FLIPPERS":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.revealFlippers)(state.slice(), mines);

    default:
      return state;
  }

  ;
}; // preloaded default state prevents an automatic win by default


var mines = function mines() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 2, 3];

  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case "GENERATE MINES":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.generateMines)(payload);

    default:
      return state;
  }
};

var numbers = function numbers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [4, 5, 6];

  var _ref4 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref4.type,
      payload = _ref4.payload;

  switch (type) {
    case "GENERATE NUMBERS":
      return (0,_boardActions_js__WEBPACK_IMPORTED_MODULE_0__.generateNumbers)(payload);

    default:
      return state;
  }

  ;
};

var surprised = function surprised(state, action) {
  switch (action.type) {
    case 'SURPRISED SMILES':
      return true;

    case 'RESET SMILES':
      return false;

    case 'DEAD SMILES':
      return 'dead';

    case 'VICTORY SMILES':
      return 'victory';

    default:
      return state;
  }

  ;
};

var flagsRemaining = function flagsRemaining() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _ref5 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref5.type,
      payload = _ref5.payload;

  switch (type) {
    case "DECREMENT FLAGS REMAINING":
      return state - 1;

    case "INCREMENT FLAGS REMAINING":
      return state + 1;

    case "SET FLAGS REMAINING":
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  flippers: flippers,
  mines: mines,
  numbers: numbers,
  scrollBoard: scrollBoard,
  colors: colors,
  colorDelay: colorDelay,
  surprised: surprised,
  flagsRemaining: flagsRemaining
}));

/***/ }),

/***/ "./src/components/Board/BoardStore/boardStore.js":
/*!*******************************************************!*\
  !*** ./src/components/Board/BoardStore/boardStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBoardContext": () => (/* binding */ useBoardContext),
/* harmony export */   "BoardStoreProvider": () => (/* binding */ BoardStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boardReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardReducers.js */ "./src/components/Board/BoardStore/boardReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var BoardContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  scrollBoard: false,
  colorDelay: 1000,
  flippers: [],
  mines: [1, 2, 3],
  numbers: [4, 5, 6],
  surprised: false,
  flagsRemaining: 10,
  colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num']
};

var BoardStoreProvider = function BoardStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_boardReducers_js__WEBPACK_IMPORTED_MODULE_1__.default, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoardContext.Provider, {
    value: store
  }, children);
};

function useBoardContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(BoardContext);

  if (context === undefined) {
    throw new Error('useBoardContext must be used within a CountProvider');
  }

  ;
  return context;
}



/***/ }),

/***/ "./src/components/Board/Squares/BoardSquare.js":
/*!*****************************************************!*\
  !*** ./src/components/Board/Squares/BoardSquare.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _squareUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squareUtils.js */ "./src/components/Board/Squares/squareUtils.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! BoardStore */ "./src/components/Board/BoardStore/boardStore.js");
/* harmony import */ var _sweepsquarestyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sweepsquarestyles.scss */ "./src/components/Board/Squares/sweepsquarestyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var currTile = _ref.currTile;

  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      _useGlobalContext2$ = _useGlobalContext2[0],
      skillLevel = _useGlobalContext2$.dimensions.skillLevel,
      definedUserName = _useGlobalContext2$.definedUserName,
      dimensions = _useGlobalContext2$.dimensions,
      timerOn = _useGlobalContext2$.timerOn,
      globalDispatch = _useGlobalContext2[1];

  var _useBoardContext = (0,BoardStore__WEBPACK_IMPORTED_MODULE_3__.useBoardContext)(),
      _useBoardContext2 = _slicedToArray(_useBoardContext, 2),
      _useBoardContext2$ = _useBoardContext2[0],
      surprised = _useBoardContext2$.surprised,
      flagsRemaining = _useBoardContext2$.flagsRemaining,
      colors = _useBoardContext2$.colors,
      mines = _useBoardContext2$.mines,
      flippers = _useBoardContext2$.flippers,
      numbers = _useBoardContext2$.numbers,
      boardDispatch = _useBoardContext2[1];

  var tileIsAMine = mines.includes(currTile) && flippers[currTile] && flippers[currTile] !== 'flag';
  var tileIsANumber = flippers[currTile] && flippers[currTile] !== 'flag' && numbers[currTile];
  var userNotLoggedIn = !definedUserName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-testid": "test-".concat(currTile),
    onClick: function onClick() {
      // If tile is a bomb...
      if (mines.includes(currTile)) {
        globalDispatch({
          type: 'FREEZE TIMER STATE'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)({
          skillLevel: skillLevel,
          dimensions: dimensions,
          mines: mines,
          numbers: numbers,
          currTile: currTile,
          indicator: 'dead',
          boardDispatch: boardDispatch
        });
      }

      ; // Is a Number or a Empty Square
      // If an empty space is revealed under a flag, increment remaining flags

      if (flippers[currTile] === 'flag') boardDispatch({
        type: 'INCREMENT FLAGS REMAINING'
      }); // Start the timer and reveal the tile

      if (!timerOn) {
        globalDispatch({
          type: 'SWITCH TIMER ON'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)({
          skillLevel: skillLevel,
          dimensions: dimensions,
          mines: mines,
          numbers: numbers,
          currTile: currTile,
          boardDispatch: boardDispatch
        });
      }

      ; // Normal Play

      return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)({
        skillLevel: skillLevel,
        dimensions: dimensions,
        numbers: numbers,
        mines: mines,
        currTile: currTile,
        indicator: null,
        boardDispatch: boardDispatch
      });
    },
    onMouseDown: function onMouseDown() {
      if (!flippers[currTile]) boardDispatch({
        type: 'SURPRISED SMILES'
      });
    },
    onMouseUp: function onMouseUp() {
      // Mine- Death Sequence XD
      if (mines.includes(currTile) && event.button === 0 && !event.ctrlKey) {
        return boardDispatch({
          type: 'DEAD SMILES'
        });
      }

      ;
      return boardDispatch({
        type: 'RESET SMILES'
      });
    },
    onContextMenu: function onContextMenu() {
      //If number is already revealed- prevent user from putting a flag on it
      if (flippers[currTile] !== true) {
        boardDispatch({
          type: flippers[currTile] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)({
          skillLevel: skillLevel,
          dimensions: dimensions,
          mines: mines,
          numbers: numbers,
          currTile: currTile,
          boardDispatch: boardDispatch
        });
      }

      ; // Prevent context menu if user accidentally presses context menu

      event.preventDefault();
    },
    className: mines.includes(currTile) ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genMineClassNames)({
      timerOn: timerOn,
      skillLevel: skillLevel,
      definedUserName: definedUserName,
      flippers: flippers,
      colors: colors,
      currTile: currTile
    }) : numbers[currTile] ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genNumberClassNames)({
      skillLevel: skillLevel,
      definedUserName: definedUserName,
      timerOn: timerOn,
      flippers: flippers,
      numbers: numbers,
      colors: colors,
      currTile: currTile
    }) : (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genEmptyClassNames)({
      // Global
      skillLevel: skillLevel,
      definedUserName: definedUserName,
      timerOn: timerOn,
      // Board & passed in
      flippers: flippers,
      colors: colors,
      currTile: currTile
    })
  }, userNotLoggedIn ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.generateLoginMessage)({
    currTile: currTile,
    skillLevel: skillLevel,
    flippers: flippers
  }) : tileIsANumber ? numbers[currTile] : tileIsAMine ? '*' : null);
}));

/***/ }),

/***/ "./src/components/Board/Squares/squareUtils.js":
/*!*****************************************************!*\
  !*** ./src/components/Board/Squares/squareUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genEmptyClassNames": () => (/* binding */ genEmptyClassNames),
/* harmony export */   "genNumberClassNames": () => (/* binding */ genNumberClassNames),
/* harmony export */   "genMineClassNames": () => (/* binding */ genMineClassNames),
/* harmony export */   "generateLoginMessage": () => (/* binding */ generateLoginMessage),
/* harmony export */   "handleClick": () => (/* binding */ handleClick)
/* harmony export */ });
var generateLoginMessage = function generateLoginMessage(_ref) {
  var t = _ref.currTile,
      skillLevel = _ref.skillLevel;
  var beginnerMessages = {
    '1': 'Please',
    '2': 'Login',
    '3': 'First'
  };
  var intermediateMessages = {
    '2': 'Please',
    '4': 'Login',
    '6': 'First'
  };
  var advancedMessages = {
    '2': 'Please',
    '3': 'Login',
    '4': 'First'
  };

  if (skillLevel === 'beginner' && t < 81) {
    var _beginnerMessages$Str;

    return ((_beginnerMessages$Str = beginnerMessages[String(Math.floor(t / 10))]) === null || _beginnerMessages$Str === void 0 ? void 0 : _beginnerMessages$Str.substring(t % 10, t % 10 + 1)) || '*';
  }

  ;

  if (skillLevel === 'intermediate' && t < 144) {
    var _intermediateMessages;

    return ((_intermediateMessages = intermediateMessages[String(Math.floor(t / 17))]) === null || _intermediateMessages === void 0 ? void 0 : _intermediateMessages.substring(t % 17, t % 17 + 1)) || '*';
  }

  ;

  if (skillLevel === 'advanced' && t < 240) {
    var _advancedMessages$Str;

    return ((_advancedMessages$Str = advancedMessages[String(Math.floor(t / 31))]) === null || _advancedMessages$Str === void 0 ? void 0 : _advancedMessages$Str.substring(t % 33.15, t % 33.15 + 1)) || '*';
  }

  ;
};

var generateColors = function generateColors(_ref2) {
  var t = _ref2.currTile,
      colors = _ref2.colors,
      skillLevel = _ref2.skillLevel;

  if (skillLevel === 'beginner') {
    if (t <= 9 || t >= 16 && t <= 19 || t >= 25 && t <= 29 || t >= 35) {
      return colors[(t + Math.floor(t / 8)) % 9];
    }
  }

  if (skillLevel === 'intermediate') {
    if (t <= 33 || t >= 40 && t <= 66 || t >= 73 && t <= 99 || t >= 107 && t <= 144) {
      return colors[(t + Math.floor(t / 16)) % 8];
    }
  }

  if (skillLevel === 'advanced') {
    if (t <= 66 || t >= 73 && t <= 99 || t >= 105 && t <= 132 || t >= 138 && t <= 241) {
      return colors[(t + Math.floor(t / 30)) % 8];
    }
  }
};

var genNumberClassNames = function genNumberClassNames(_ref3) {
  var timerOn = _ref3.timerOn,
      definedUserName = _ref3.definedUserName,
      skillLevel = _ref3.skillLevel,
      currTile = _ref3.currTile,
      numbers = _ref3.numbers,
      flippers = _ref3.flippers,
      colors = _ref3.colors;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currTile: currTile,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  var numberTileOnVictoryDeadOrNotLoggedIn = timerOn === 'VICTORY' || timerOn === 'FREEZE' || !definedUserName;
  var flagOnNumberTileGamePlay = flippers[currTile] === 'flag';
  classNameArr.push(numberTileOnVictoryDeadOrNotLoggedIn ? 'disabled' : flagOnNumberTileGamePlay ? 'flag' : 'number'); // Color Determination

  var currNum = numbers[currTile];
  classNameArr.push(currNum === 1 ? 'blue-num' : currNum === 2 ? 'green-num' : currNum === 3 ? 'red-num' : currNum === 4 ? 'purple-num' : currNum === 5 ? 'maroon-num' : currNum === 6 ? 'turquoise-num' : currNum === 7 ? 'black-num' : currNum === 8 ? 'grey-num' : null);
  return classNameArr.join(' ');
};

var genEmptyClassNames = function genEmptyClassNames(_ref4) {
  var skillLevel = _ref4.skillLevel,
      definedUserName = _ref4.definedUserName,
      timerOn = _ref4.timerOn,
      currTile = _ref4.currTile,
      colors = _ref4.colors,
      flippers = _ref4.flippers;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currTile: currTile,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  var emptyTileOnVictoryOrDead = timerOn === 'VICTORY' || timerOn === 'FREEZE';
  var emptyTileOnNotLoggedIn = !definedUserName;
  var flagOnEmptyTileGameplay = flippers[currTile] === 'flag';
  var emptyTileRevealedGameplay = flippers[currTile] === true;
  classNameArr.push(emptyTileOnVictoryOrDead ? 'disabled dark-square' : emptyTileOnNotLoggedIn ? 'disabled' : flagOnEmptyTileGameplay ? 'flag' : emptyTileRevealedGameplay ? 'dark-square' : null);
  return classNameArr.join(' ');
};

var genMineClassNames = function genMineClassNames(_ref5) {
  var timerOn = _ref5.timerOn,
      definedUserName = _ref5.definedUserName,
      skillLevel = _ref5.skillLevel,
      currTile = _ref5.currTile,
      colors = _ref5.colors,
      flippers = _ref5.flippers;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currTile: currTile,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  var flagOnMineTileAfterVictory = timerOn === 'VICTORY' && flippers[currTile] === 'flag';
  var mineTileAfterDead = timerOn === 'FREEZE';
  var tileIsFlaggedGamePlay = flippers[currTile] === 'flag';
  var mineTileOnDead = flippers[currTile] === true;
  classNameArr.push(flagOnMineTileAfterVictory ? 'flag disabled' // : (surprised === 'victory' && !definedUserName) ? 'disabled'
  : mineTileAfterDead ? 'disabled mine' : tileIsFlaggedGamePlay ? 'flag' : mineTileOnDead ? 'mine' : null);
  return classNameArr.join(' ');
};

var tileRecurse = function tileRecurse(_ref6) {
  var tile = _ref6.currTile,
      dimensions = _ref6.dimensions,
      numbers = _ref6.numbers,
      mines = _ref6.mines,
      resultArr = _ref6.resultArr;
  resultArr.push(tile);

  var evalU = function evalU(tile) {
    return tile - dimensions.horizontalDimension;
  };

  var evalR = function evalR(tile) {
    return tile + 1;
  };

  var evalD = function evalD(tile) {
    return tile + dimensions.horizontalDimension;
  };

  var evalL = function evalL(tile) {
    return tile - 1;
  };

  var testTile = function testTile(tile, testFunc) {
    return !numbers[testFunc(tile)] && !mines.includes(testFunc(tile)) // && prevFlippers[testFunc(tile)] === false
    && !resultArr.includes(testFunc(tile)) && testFunc(tile) >= 0 && testFunc(tile) <= dimensions.verticalDimension * dimensions.horizontalDimension;
  }; // ***********
  //  Going Up
  // ***********


  if (testTile(tile, evalU)) {
    tileRecurse({
      currTile: evalU(tile),
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: resultArr
    });
  } // ***********
  //  Going Right
  // ***********


  if (testTile(tile, evalR) && (evalR(tile) % dimensions.horizontalDimension !== 0 || evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0)) {
    tileRecurse({
      currTile: evalR(tile),
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: resultArr
    });
  } // ***********
  //  Going Down
  // ***********


  if (testTile(tile, evalD)) {
    tileRecurse({
      currTile: evalD(tile),
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: resultArr
    });
  } // ***********
  //  Going Left
  // ***********


  if (testTile(tile, evalL) && (evalL(tile + 1) % dimensions.horizontalDimension !== 0 || evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0)) {
    tileRecurse({
      currTile: evalL(tile),
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: resultArr
    });
  }

  ;
  return resultArr;
};

var handleClick = function handleClick(_ref7) {
  var tile = _ref7.currTile,
      indicator = _ref7.indicator,
      dimensions = _ref7.dimensions,
      mines = _ref7.mines,
      numbers = _ref7.numbers,
      surprised = _ref7.surprised,
      boardDispatch = _ref7.boardDispatch;
  event.preventDefault();
  return indicator === 'dead' ? boardDispatch({
    type: 'REVEAL DEAD FLIPPERS'
  }) : event.type === 'contextmenu' ? boardDispatch({
    type: 'SET FLAG FLIPPED',
    payload: {
      flagFlipped: tile
    }
  }) : event.type === 'click' && indicator !== 'dead' && !numbers[tile] && !mines.includes(tile) ? boardDispatch({
    type: 'FLIP RECURSED TILES',
    payload: tileRecurse({
      currTile: tile,
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: []
    })
  }) : event.type === 'click' && indicator !== 'dead' ? boardDispatch({
    type: 'FLIP NORMAL TILE',
    payload: {
      flippedTile: tile
    }
  }) : null;
};



/***/ }),

/***/ "./src/components/Board/useEffectBoardHooks.js":
/*!*****************************************************!*\
  !*** ./src/components/Board/useEffectBoardHooks.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var generateMinesEffect = function generateMinesEffect(dimensions, boardDispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    boardDispatch({
      type: 'GENERATE MINES',
      payload: dimensions
    });
  }, []);
};

var stopColorIterationEffect = function stopColorIterationEffect(colorDelay, boardDispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (colorDelay === null) {
      boardDispatch({
        type: 'STOP COLOR ITERATION'
      });
    }

    ;
  }, [colorDelay]);
};

var freezeColorDelayEffect = function freezeColorDelayEffect(definedUserName, boardDispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (definedUserName) boardDispatch({
      type: 'UNSET COLOR DELAY'
    });
  }, [definedUserName]);
}; // This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.


var resetGameEffectOnSmileyOrSkill = function resetGameEffectOnSmileyOrSkill(timerOn, skillLevel, dimensions, boardDispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      boardDispatch({
        type: 'RESET FLIPPERS',
        payload: Array.from({
          length: dimensions.horizontalDimension * dimensions.verticalDimension
        }, function () {
          return false;
        })
      }); // Generate Mines

      boardDispatch({
        type: 'GENERATE MINES',
        payload: dimensions
      });
    }

    ;
  }, [timerOn, dimensions]);
};

var freezeScrollBoardEffect = function freezeScrollBoardEffect(scrollBoard) {
  var preventDefault = function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function (_) {
    if (scrollBoard) document.addEventListener('wheel', preventDefault, {
      passive: false
    });
    return function () {
      return document.removeEventListener('wheel', preventDefault, false);
    };
  }, [scrollBoard]);
};

var revealFlipperEffect = function revealFlipperEffect(_ref) {
  var mines = _ref.mines,
      flippers = _ref.flippers,
      numbers = _ref.numbers,
      globalDispatch = _ref.globalDispatch,
      boardDispatch = _ref.boardDispatch;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mines.length && flippers.length && flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every(function (flipper) {
        return flipper === true || flipper === 'flag' || mines[flipper];
      })) {
        // Stop the clock and indicate a win
        globalDispatch({
          type: 'FREEZE TIMER STATE VICTORY'
        }); // If a victory is detected by all numbers being revealed, flip all the empty squares
      } else if (Object.keys(numbers).every(function (num) {
        return flippers[num] === true;
      })) {
        boardDispatch({
          type: 'REVEAL FLIPPERS',
          payload: {
            mines: mines
          }
        });
      }
    }
  }, [flippers]);
};

var generateNumberEffect = function generateNumberEffect(mines, _ref2, boardDispatch) {
  var verticalDimension = _ref2.verticalDimension,
      horizontalDimension = _ref2.horizontalDimension;
  //When Mines are reset, generate numbers around those mines
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    boardDispatch({
      type: 'GENERATE NUMBERS',
      payload: {
        mines: mines,
        verticalDimension: verticalDimension,
        horizontalDimension: horizontalDimension
      }
    });
  }, [mines]);
};

var resetOnSkillLevelChangeEffect = function resetOnSkillLevelChangeEffect(skillLevel, globalDispatch) {
  // If Skill Level is changed, reset the board.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    globalDispatch({
      type: 'SWITCH TIMER OFF'
    });
  }, [skillLevel]);
};

var resetFlagsRemainingOnSkillChangeOrTimerOn = function resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch) {
  // This resets the flags whenever the skillLevel is changed or game is reset
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      boardDispatch({
        type: 'SET FLAGS REMAINING',
        payload: skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99
      });
    }

    ;
  }, [skillLevel, timerOn]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  generateMinesEffect: generateMinesEffect,
  stopColorIterationEffect: stopColorIterationEffect,
  freezeColorDelayEffect: freezeColorDelayEffect,
  resetGameEffectOnSmileyOrSkill: resetGameEffectOnSmileyOrSkill,
  freezeScrollBoardEffect: freezeScrollBoardEffect,
  revealFlipperEffect: revealFlipperEffect,
  generateNumberEffect: generateNumberEffect,
  resetOnSkillLevelChangeEffect: resetOnSkillLevelChangeEffect,
  resetFlagsRemainingOnSkillChangeOrTimerOn: resetFlagsRemainingOnSkillChangeOrTimerOn
});

/***/ }),

/***/ "./src/components/Leaderboard/LeaderBoard.js":
/*!***************************************************!*\
  !*** ./src/components/Leaderboard/LeaderBoard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LeaderBoardEntry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderBoardEntry.js */ "./src/components/Leaderboard/LeaderBoardEntry.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var _leaderboard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard.scss */ "./src/components/Leaderboard/leaderboard.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var ssrTopTimes = _ref.ssrTopTimes;

  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      _useGlobalContext2$ = _useGlobalContext2[0],
      skillLevel = _useGlobalContext2$.dimensions.skillLevel,
      topTimes = _useGlobalContext2$.topTimes,
      globalDispatch = _useGlobalContext2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      personalized = _useState2[0],
      setPersonalized = _useState2[1]; // Axios Utils--------------------------------


  var getAllResults = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$axios, initTopScores;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()('/minesweeper-topTimes', {
                params: {
                  skillLevel: skillLevel
                }
              });

            case 3:
              _yield$axios = _context.sent;
              initTopScores = _yield$axios.data;
              globalDispatch({
                type: 'SET TOP TIMES',
                payload: {
                  topTimes: initTopScores
                }
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
              ;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getAllResults() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getPersonalizedResults = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _yield$axios2, personalizedResults;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()('/minesweeper-topTimes', {
                params: {
                  skillLevel: skillLevel,
                  username: personalized
                }
              });

            case 3:
              _yield$axios2 = _context2.sent;
              personalizedResults = _yield$axios2.data;
              globalDispatch({
                type: 'SET TOP TIMES',
                payload: {
                  topTimes: personalizedResults
                }
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 11:
              ;

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function getPersonalizedResults() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (personalized) {
      getPersonalizedResults();
    } else {
      getAllResults();
    }
  }, [personalized, skillLevel]);

  var formatTime = function formatTime(resultTime) {
    var centiseconds = ("0" + Math.floor(resultTime / 10) % 100).slice(-2);
    var seconds = ("0" + Math.floor(resultTime / 1000) % 60).slice(-2);
    var minutes = ("0" + Math.floor(resultTime / 60000) % 60).slice(-2);
    var hours = ("0" + Math.floor(resultTime / 3600000)).slice(-2);
    return minutes !== '00' ? "".concat(minutes, " : ").concat(seconds, " . ").concat(centiseconds) : hours !== '00' ? "".concat(hours, " : ").concat(minutes, ": ").concat(seconds, " . ").concat(centiseconds) : "".concat(seconds, " . ").concat(centiseconds, " secs");
  };

  var handleClick = function handleClick(_ref4) {
    var username = _ref4.target.innerHTML;
    return username ? setPersonalized(username) : setPersonalized(false);
  };

  var makeTitle = function makeTitle(personalized, skillLevel) {
    return personalized ? "".concat(personalized, "s ").concat(skillLevel, " Leaderboard:") : "".concat(skillLevel, " Leaderboard");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "leaderboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "scores-list",
    id: "leaderboard-header"
  }, makeTitle(personalized, skillLevel)), (topTimes || ssrTopTimes).map(function (entry, index) {
    return entry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LeaderBoardEntry_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: index,
      personalized: personalized,
      index: index,
      entry: entry,
      handleClick: handleClick,
      formatTime: formatTime
    }) : null;
  }), personalized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "button",
    onClick: handleClick,
    id: "return-to-leaderboard",
    value: "return to ".concat(skillLevel, " LeaderBoard")
  }) : null);
}));

/***/ }),

/***/ "./src/components/Leaderboard/LeaderBoardEntry.js":
/*!********************************************************!*\
  !*** ./src/components/Leaderboard/LeaderBoardEntry.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var personalized = _ref.personalized,
      handleClick = _ref.handleClick,
      _ref$entry = _ref.entry,
      username = _ref$entry.username,
      time = _ref$entry.time,
      index = _ref.index,
      formatTime = _ref.formatTime;

  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 1),
      definedUserName = _useGlobalContext2[0].definedUserName;

  var golden = definedUserName === username;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: personalized ? 'personalized scores-list' : 'scores-list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: golden ? 'golden scores-user' : 'scores-user',
    style: {
      paddingRight: '5px'
    }
  }, index + 1, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    onClick: handleClick,
    className: golden ? 'golden scores-user' : 'scores-user'
  }, username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: golden ? 'golden scores-user' : 'black-num scores-user'
  }, " | "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: golden ? 'golden scores-time' : 'scores-time'
  }, formatTime(time)));
});

/***/ }),

/***/ "./src/components/MillisecondTimer/MillisecondTimer.js":
/*!*************************************************************!*\
  !*** ./src/components/MillisecondTimer/MillisecondTimer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postResult.js */ "./src/components/MillisecondTimer/postResult.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var Components_customHooks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/customHooks.js */ "./src/components/customHooks.js");
/* harmony import */ var _TimerStore_timerStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimerStore/timerStore.js */ "./src/components/MillisecondTimer/TimerStore/timerStore.js");
/* harmony import */ var _millisecondstyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./millisecondstyles.scss */ "./src/components/MillisecondTimer/millisecondstyles.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      _useGlobalContext2$ = _useGlobalContext2[0],
      skillLevel = _useGlobalContext2$.dimensions.skillLevel,
      definedUserName = _useGlobalContext2$.definedUserName,
      timerOn = _useGlobalContext2$.timerOn,
      globalDispatch = _useGlobalContext2[1];

  var _useTimerContext = (0,_TimerStore_timerStore_js__WEBPACK_IMPORTED_MODULE_4__.useTimerContext)(),
      _useTimerContext2 = _slicedToArray(_useTimerContext, 2),
      timerTime = _useTimerContext2[0].timerTime,
      timerDispatch = _useTimerContext2[1];

  (0,Components_customHooks_js__WEBPACK_IMPORTED_MODULE_3__.useInterval)(function () {
    timerDispatch({
      type: 'ITERATE TIMER TIME',
      payload: 10
    });
  }, timerOn === true ? 10 : timerOn === 'FREEZE' || timerOn === 'VICTORY' ? -1 : null); // If Timer is changed to true, start the timer.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var newTopTimes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (timerOn === false) {
              timerDispatch({
                type: 'CLEAR TIMER TIME'
              });
            }

            ;

            if (!(timerOn === 'VICTORY')) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return (0,_postResult_js__WEBPACK_IMPORTED_MODULE_1__.default)(skillLevel, definedUserName, timerTime);

          case 5:
            newTopTimes = _context.sent;
            globalDispatch({
              type: 'SET TOP TIMES',
              payload: {
                topTimes: newTopTimes
              }
            });

          case 7:
            ;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [timerOn]);
  var centiseconds = ("0" + Math.floor(timerTime / 10) % 100).slice(-2);
  var seconds = ("0" + Math.floor(timerTime / 1000) % 60).slice(-2);
  var minutes = ("0" + Math.floor(timerTime / 60000) % 60).slice(-2);
  var hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    id: "milli-second-timer",
    className: skillLevel
  }, hours !== '00' ? "".concat(hours, " : ").concat(minutes, " : ").concat(seconds, " : ").concat(centiseconds) : minutes !== '00' ? "".concat(minutes, " : ").concat(seconds, " : ").concat(centiseconds) : "".concat(seconds, " : ").concat(centiseconds)));
});

/***/ }),

/***/ "./src/components/MillisecondTimer/TimerStore/timerReducers.js":
/*!*********************************************************************!*\
  !*** ./src/components/MillisecondTimer/TimerStore/timerReducers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { } from './timerActions.js';
var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

var timerTime = function timerTime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "ITERATE TIMER TIME":
      return state += payload;

    case "CLEAR TIMER TIME":
      return 0;

    default:
      return state;
  }

  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  timerTime: timerTime
}));

/***/ }),

/***/ "./src/components/MillisecondTimer/TimerStore/timerStore.js":
/*!******************************************************************!*\
  !*** ./src/components/MillisecondTimer/TimerStore/timerStore.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTimerContext": () => (/* binding */ useTimerContext),
/* harmony export */   "TimerStoreProvider": () => (/* binding */ TimerStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timerReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timerReducers.js */ "./src/components/MillisecondTimer/TimerStore/timerReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var TimerStoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  timerTime: 0
};

var TimerStoreProvider = function TimerStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_timerReducers_js__WEBPACK_IMPORTED_MODULE_1__.default, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimerStoreContext.Provider, {
    value: store
  }, children);
};

var useTimerContext = function useTimerContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(TimerStoreContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/components/MillisecondTimer/postResult.js":
/*!*******************************************************!*\
  !*** ./src/components/MillisecondTimer/postResult.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(skillLevel, definedUserName, timerTime) {
    var _yield$axios$post, newTopTimes;

    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/minesweeper-topTimes', null, {
              params: {
                skillLevel: skillLevel,
                definedUserName: definedUserName,
                timerTime: timerTime
              }
            });

          case 2:
            _yield$axios$post = _context.sent;
            newTopTimes = _yield$axios$post.data;
            return _context.abrupt("return", newTopTimes);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/components/Minesweeper/Minesweeper.js":
/*!***************************************************!*\
  !*** ./src/components/Minesweeper/Minesweeper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Board_Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Board/Board.js */ "./src/components/Board/Board.js");
/* harmony import */ var Components_MillisecondTimer_MillisecondTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/MillisecondTimer/MillisecondTimer.js */ "./src/components/MillisecondTimer/MillisecondTimer.js");
/* harmony import */ var Components_SkillLevelSelector_SkillLevelSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/SkillLevelSelector/SkillLevelSelector.js */ "./src/components/SkillLevelSelector/SkillLevelSelector.js");
/* harmony import */ var Components_Leaderboard_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/Leaderboard/LeaderBoard.js */ "./src/components/Leaderboard/LeaderBoard.js");
/* harmony import */ var Components_SmileyBar_SmileyBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/SmileyBar/SmileyBar.js */ "./src/components/SmileyBar/SmileyBar.js");
/* harmony import */ var UserNameStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! UserNameStore */ "./src/components/UserNameEntry/UserNameStore/userNameStore.js");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! BoardStore */ "./src/components/Board/BoardStore/boardStore.js");
/* harmony import */ var TimerStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! TimerStore */ "./src/components/MillisecondTimer/TimerStore/timerStore.js");
/* harmony import */ var Components_UserNameEntry_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/UserNameEntry/UserNameEntry.js */ "./src/components/UserNameEntry/UserNameEntry.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var _minesweeper_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./minesweeper.scss */ "./src/components/Minesweeper/minesweeper.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Minesweeper Main Components












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var ssrTopTimes = _ref.ssrTopTimes;

  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_10__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 1),
      skillLevel = _useGlobalContext2[0].dimensions.skillLevel;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserNameStore__WEBPACK_IMPORTED_MODULE_6__.UserNameStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_UserNameEntry_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_9__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers",
    id: "main-space-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "total-board",
    className: skillLevel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoardStore__WEBPACK_IMPORTED_MODULE_7__.BoardStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SmileyBar_SmileyBar_js__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Board_Board_js__WEBPACK_IMPORTED_MODULE_1__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Leaderboard_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_4__.default, {
    ssrTopTimes: ssrTopTimes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimerStore__WEBPACK_IMPORTED_MODULE_8__.TimerStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_MillisecondTimer_MillisecondTimer_js__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SkillLevelSelector_SkillLevelSelector_js__WEBPACK_IMPORTED_MODULE_3__.default, null)));
});

/***/ }),

/***/ "./src/components/SkillLevelSelector/SkillLevelSelector.js":
/*!*****************************************************************!*\
  !*** ./src/components/SkillLevelSelector/SkillLevelSelector.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var _skillstyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillstyles.scss */ "./src/components/SkillLevelSelector/skillstyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function () {
  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      skillLevel = _useGlobalContext2[0].dimensions.skillLevel,
      dispatch = _useGlobalContext2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: skillLevel,
    id: "skill-level-selector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(_) {
      return dispatch({
        type: 'SET BEGINNER DIMENSIONS'
      });
    }
  }, "Beginner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(_) {
      return dispatch({
        type: 'SET INTERMEDIATE DIMENSIONS'
      });
    }
  }, "Intermediate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(_) {
      return dispatch({
        type: 'SET ADVANCED DIMENSIONS'
      });
    }
  }, "Expert"));
}));

/***/ }),

/***/ "./src/components/SmileyBar/SmileyBar.js":
/*!***********************************************!*\
  !*** ./src/components/SmileyBar/SmileyBar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! BoardStore */ "./src/components/Board/BoardStore/boardStore.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var _smileystyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smileystyles.scss */ "./src/components/SmileyBar/smileystyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function () {
  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      _useGlobalContext2$ = _useGlobalContext2[0],
      numberOfMines = _useGlobalContext2$.dimensions.numberOfMines,
      timerOn = _useGlobalContext2$.timerOn,
      globalDispatch = _useGlobalContext2[1];

  var _useBoardContext = (0,BoardStore__WEBPACK_IMPORTED_MODULE_1__.useBoardContext)(),
      _useBoardContext2 = _slicedToArray(_useBoardContext, 2),
      _useBoardContext2$ = _useBoardContext2[0],
      surprised = _useBoardContext2$.surprised,
      flagsRemaining = _useBoardContext2$.flagsRemaining,
      boardDispatch = _useBoardContext2[1];

  var resetCallback = function resetCallback() {
    boardDispatch({
      type: 'RESET SMILES'
    });
    boardDispatch({
      type: 'SET FLAGS REMAINING',
      payload: numberOfMines
    });
    globalDispatch({
      type: 'SWITCH TIMER OFF'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "smiley-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "smiley-guy",
    id: surprised === 'dead' ? 'dead-guy' : timerOn === 'VICTORY' ? 'victory-guy' : surprised === true ? 'surprised-guy' : 'smiley-guy',
    onClick: resetCallback
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "flags-remaining"
  }, flagsRemaining));
}));

/***/ }),

/***/ "./src/components/UserNameEntry/UserNameEntry.js":
/*!*******************************************************!*\
  !*** ./src/components/UserNameEntry/UserNameEntry.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
/* harmony import */ var UserNameStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! UserNameStore */ "./src/components/UserNameEntry/UserNameStore/userNameStore.js");
/* harmony import */ var _loginstyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginstyles.scss */ "./src/components/UserNameEntry/loginstyles.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useGlobalContext = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)(),
      _useGlobalContext2 = _slicedToArray(_useGlobalContext, 2),
      _useGlobalContext2$ = _useGlobalContext2[0],
      skillLevel = _useGlobalContext2$.dimensions.skillLevel,
      definedUserName = _useGlobalContext2$.definedUserName,
      globalDispatch = _useGlobalContext2[1];

  var _useUserNameContext = (0,UserNameStore__WEBPACK_IMPORTED_MODULE_4__.useUserNameContext)(),
      _useUserNameContext2 = _slicedToArray(_useUserNameContext, 2),
      _useUserNameContext2$ = _useUserNameContext2[0],
      userPass = _useUserNameContext2$.userPass,
      userName = _useUserNameContext2$.userName,
      userNameDispatch = _useUserNameContext2[1]; // React.useEffect(() => {
  // }, [userPass, userName, skillLevel, definedUserName]);


  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios, result, prompt, _yield$axios$post, posted;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()('/minesweeper-validateUser', {
                params: {
                  userName: userName,
                  userPass: userPass
                }
              });

            case 3:
              _yield$axios = _context.sent;
              result = _yield$axios.data;

              if (!(result === 'does not exist')) {
                _context.next = 16;
                break;
              }

              prompt = window.confirm('User does not exist, Create new user?');

              if (!prompt) {
                _context.next = 13;
                break;
              }

              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/minesweeper-createUser', null, {
                params: {
                  userName: userName,
                  userPass: userPass
                }
              });

            case 10:
              _yield$axios$post = _context.sent;
              posted = _yield$axios$post.data;
              globalDispatch({
                type: 'SET DEFINED USERNAME',
                payload: {
                  userName: userName
                }
              });

            case 13:
              ;
              _context.next = 17;
              break;

            case 16:
              if (result === 'wrong password') {
                alert('Wrong Password, try again...');
              } else {
                globalDispatch({
                  type: 'SET DEFINED USERNAME',
                  payload: {
                    userName: userName
                  }
                });
              }

            case 17:
              ;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var generateForm = function generateForm() {
    // const [{ userName, userPass }, userNameDispatch] = useUserNameContext();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      id: "login-form",
      className: skillLevel,
      onSubmit: handleSubmit
    }, definedUserName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "login-header"
    }, 'Logged in as... '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "login-header"
    }, definedUserName)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "login-header",
      value: "Login ->",
      type: "submit"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      disabled: definedUserName ? true : false,
      onChange: function onChange(_) {
        userNameDispatch({
          type: 'UPDATE USERNAME',
          payload: event.target.value
        });
      },
      value: definedUserName || userName,
      placeholder: "enter username"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: "password",
      value: userPass,
      onChange: function onChange(_) {
        return userNameDispatch({
          type: 'UPDATE USERPASS',
          payload: event.target.value
        });
      }
    })));
  };

  return generateForm();
});

/***/ }),

/***/ "./src/components/UserNameEntry/UserNameStore/userNameReducers.js":
/*!************************************************************************!*\
  !*** ./src/components/UserNameEntry/UserNameStore/userNameReducers.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

var userName = function userName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "UPDATE USERNAME":
      return payload;

    default:
      return state;
  }

  ;
};

var userPass = function userPass() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case "UPDATE USERPASS":
      return payload;

    default:
      return state;
  }

  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  userName: userName,
  userPass: userPass
}));

/***/ }),

/***/ "./src/components/UserNameEntry/UserNameStore/userNameStore.js":
/*!*********************************************************************!*\
  !*** ./src/components/UserNameEntry/UserNameStore/userNameStore.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserNameContext": () => (/* binding */ useUserNameContext),
/* harmony export */   "UserNameStoreProvider": () => (/* binding */ UserNameStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userNameReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userNameReducers.js */ "./src/components/UserNameEntry/UserNameStore/userNameReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var UserNameContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  userName: '',
  userPass: ''
};

var UserNameStoreProvider = function UserNameStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_userNameReducers_js__WEBPACK_IMPORTED_MODULE_1__.default, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserNameContext.Provider, {
    value: store
  }, children);
};

function useUserNameContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(UserNameContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  ;
  return context;
}



/***/ }),

/***/ "./src/components/customHooks.js":
/*!***************************************!*\
  !*** ./src/components/customHooks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInterval": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/


var useInterval = function useInterval(callback, delay) {
  var savedCallback = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(); // Remember the latest callback.

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    function tick() {
      savedCallback.current();
    } // If victory is declared or bomb stop the timer...


    if (delay === -1) {
      return;
    }

    ; // Otherwise...

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
  ;
};



/***/ }),

/***/ "./src/ssr-server/routes.js":
/*!**********************************!*\
  !*** ./src/ssr-server/routes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Database/controllers/controllers.js */ "./db/controllers/controllers.js");
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var minesweeper = express__WEBPACK_IMPORTED_MODULE_0___default().Router();


minesweeper.get('/minesweeper-topTimes', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, res) {
    var _ref$query, skillLevel, username, topScores;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$query = _ref.query, skillLevel = _ref$query.skillLevel, username = _ref$query.username;
            _context.prev = 1;
            _context.next = 4;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__.getResults)(skillLevel, username);

          case 4:
            topScores = _context.sent;
            res.json(topScores);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
            res.send(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
minesweeper.get('/minesweeper-validateUser', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3, res) {
    var _ref3$query, userName, userPass, test;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref3$query = _ref3.query, userName = _ref3$query.userName, userPass = _ref3$query.userPass;
            _context2.prev = 1;
            _context2.next = 4;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__.validateUser)(userName, userPass);

          case 4:
            test = _context2.sent;

            if (!test) {
              res.send('already exists');
            } else if (test === 'wrong password') {
              res.send('wrong password');
            } else {
              res.send('does not exist');
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
            res.send(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}());
minesweeper.post('/minesweeper-createUser', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5, res) {
    var _ref5$query, userName, userPass, posted;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref5$query = _ref5.query, userName = _ref5$query.userName, userPass = _ref5$query.userPass;
            _context3.prev = 1;
            _context3.next = 4;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__.postNewUser)(userName, userPass);

          case 4:
            posted = _context3.sent;
            res.send(posted);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.send(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}());
minesweeper.post('/minesweeper-topTimes', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7, res) {
    var _ref7$query, skillLevel, timerTime, definedUserName, newTopTimes;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref7$query = _ref7.query, skillLevel = _ref7$query.skillLevel, timerTime = _ref7$query.timerTime, definedUserName = _ref7$query.definedUserName;
            _context4.prev = 1;
            _context4.next = 4;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__.postResult)(skillLevel, timerTime, definedUserName);

          case 4:
            newTopTimes = _context4.sent;
            res.send(newTopTimes);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.send(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minesweeper);

/***/ }),

/***/ "./src/ssr-server/template.js":
/*!************************************!*\
  !*** ./src/ssr-server/template.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlStart": () => (/* binding */ htmlStart),
/* harmony export */   "htmlEnd": () => (/* binding */ htmlEnd)
/* harmony export */ });
var _process$env = process.env,
    Cloudfront = _process$env.Cloudfront,
    DEV_ENV = true;

var htmlStart = function htmlStart(data) {
  return "<!DOCTYPE HTML>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Minesweeper</title>\n        <link rel=\"icon\" type=\"image/png\" href='".concat(Cloudfront, "/mine-images/minecon.png'/>\n        <!-- Server Side Rendering of Page Data -->\n        <script>window.__INITIAL__DATA__=").concat(JSON.stringify(data), "</script>\n      </head>\n\n      <script>\n      const devStyleSheetHref = '/static/index.css';\n      const prodStyleSheetHref = '").concat(Cloudfront, "/build/public/index.min.css';\n      const [head] = document.getElementsByTagName('HEAD');\n      let link = document.createElement('link');\n      link.rel = 'stylesheet';\n      link.type = 'text/css';\n      link.href = (").concat(DEV_ENV, " ? devStyleSheetHref : prodStyleSheetHref)\n      head.appendChild(link);\n      </script>\n    <body>\n    <div id=\"minesweeper-root\">");
};

var htmlEnd = function htmlEnd() {
  return "</div>\n      <script>\n      const devScriptLink = '/static/index.js';\n      const prodScriptLink = '".concat(Cloudfront, "/build/public/public-bundle.js';\n\n      const [body] = document.getElementsByTagName('BODY');\n      let script = document.createElement('script');\n      script.src = (").concat(DEV_ENV, " ? devScriptLink : prodScriptLink)\n      body.appendChild(script);\n      </script>\n    </body>\n</html>");
};



/***/ }),

/***/ "./src/store/GlobalStore.js":
/*!**********************************!*\
  !*** ./src/store/GlobalStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGlobalContext": () => (/* binding */ useGlobalContext),
/* harmony export */   "GlobalStoreProvider": () => (/* binding */ GlobalStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalReducers.js */ "./src/store/globalReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var GlobalStoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  dimensions: {
    skillLevel: 'beginner',
    verticalDimension: 9,
    horizontalDimension: 9,
    numberOfMines: 10
  },
  topTimes: [],
  definedUserName: null,
  timerOn: false
};

var GlobalStoreProvider = function GlobalStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_globalReducers_js__WEBPACK_IMPORTED_MODULE_1__.default, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStoreContext.Provider, {
    value: store
  }, children);
};

var useGlobalContext = function useGlobalContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(GlobalStoreContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/store/globalReducers.js":
/*!*************************************!*\
  !*** ./src/store/globalReducers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var timerOn = function timerOn() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "SWITCH TIMER ON":
      return true;

    case "SWITCH TIMER OFF":
      return false;

    case "FREEZE TIMER STATE":
      return 'FREEZE';

    case "FREEZE TIMER STATE VICTORY":
      return 'VICTORY';

    default:
      return state;
  }
};

var dimensions = function dimensions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    skillLevel: 'beginner',
    verticalDimension: 9,
    horizontalDimension: 9,
    numberOfMines: 10
  };

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type;

  switch (type) {
    case "SET BEGINNER DIMENSIONS":
      return {
        skillLevel: 'beginner',
        verticalDimension: 9,
        horizontalDimension: 9,
        numberOfMines: 10
      };

    case "SET INTERMEDIATE DIMENSIONS":
      return {
        skillLevel: 'intermediate',
        verticalDimension: 16,
        horizontalDimension: 16,
        numberOfMines: 40
      };

    case 'SET ADVANCED DIMENSIONS':
      return {
        skillLevel: 'advanced',
        verticalDimension: 16,
        horizontalDimension: 30,
        numberOfMines: 99
      };

    default:
      return state;
  }

  ;
};

var topTimes = function topTimes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case "SET TOP TIMES":
      return payload.topTimes;

    default:
      return state;
  }
};

var reduceReducers = function reduceReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, action) {
    return reducers.reduce(function (acc, nextReducer) {
      return nextReducer(acc, action);
    }, state);
  };
};

var definedUserName = function definedUserName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _ref4 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref4.type,
      _ref4$payload = _ref4.payload;

  _ref4$payload = _ref4$payload === void 0 ? {} : _ref4$payload;
  var userName = _ref4$payload.userName;

  switch (type) {
    case "SET DEFINED USERNAME":
      return userName;

    default:
      return state;
  }
}; // const rootReducer = combineReducers({
//   a: reduceReducers(plusOneReducer, plusOneReducer), // aNew = aOld + 1 + 1
//   b: reduceReducers(timesTwoReducer, plusOneReducer) // bNew = bOld * 2 + 1
// });
// mines: reduceReducers(mines, dimensions)


var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  dimensions: dimensions,
  definedUserName: definedUserName,
  topTimes: topTimes,
  timerOn: timerOn
}));

/***/ }),

/***/ "./src/components/Board/Squares/sweepsquarestyles.scss":
/*!*************************************************************!*\
  !*** ./src/components/Board/Squares/sweepsquarestyles.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Board/boardstyles.scss":
/*!***********************************************!*\
  !*** ./src/components/Board/boardstyles.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Leaderboard/leaderboard.scss":
/*!*****************************************************!*\
  !*** ./src/components/Leaderboard/leaderboard.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/MillisecondTimer/millisecondstyles.scss":
/*!****************************************************************!*\
  !*** ./src/components/MillisecondTimer/millisecondstyles.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Minesweeper/minesweeper.scss":
/*!*****************************************************!*\
  !*** ./src/components/Minesweeper/minesweeper.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SkillLevelSelector/skillstyles.scss":
/*!************************************************************!*\
  !*** ./src/components/SkillLevelSelector/skillstyles.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SmileyBar/smileystyles.scss":
/*!****************************************************!*\
  !*** ./src/components/SmileyBar/smileystyles.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/UserNameEntry/loginstyles.scss":
/*!*******************************************************!*\
  !*** ./src/components/UserNameEntry/loginstyles.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/ssr-server/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Components_Minesweeper_Minesweeper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/Minesweeper/Minesweeper.js */ "./src/components/Minesweeper/Minesweeper.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes.js */ "./src/ssr-server/routes.js");
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Database/controllers/controllers.js */ "./db/controllers/controllers.js");
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template.js */ "./src/ssr-server/template.js");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! GlobalStore */ "./src/store/GlobalStore.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default().static('dist/public'));
app.use(/(minesweeper)?/, _routes_js__WEBPACK_IMPORTED_MODULE_7__.default);
app.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var topTimes, minesweeperStream;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8__.getResults)();

          case 2:
            topTimes = _context.sent;
            minesweeperStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(GlobalStore__WEBPACK_IMPORTED_MODULE_10__.GlobalStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Components_Minesweeper_Minesweeper_js__WEBPACK_IMPORTED_MODULE_6__.default, null)));
            res.write((0,_template_js__WEBPACK_IMPORTED_MODULE_9__.htmlStart)({
              topTimes: topTimes
            }));
            minesweeperStream.pipe(res, {
              end: false
            });
            minesweeperStream.on('end', function () {
              res.write((0,_template_js__WEBPACK_IMPORTED_MODULE_9__.htmlEnd)());
              res.end();
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var port = 3500;
app.listen(port, function () {
  return console.log("Minesweeper App is listening on port ".concat(port));
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map