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
      var _sequelize$models2, beginnerScores, intermediateScores, advancedScores, determinedSkillLevel;

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
              return _context4.abrupt("return", 'ok');

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);
              throw _context4.t0;

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8]]);
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
/* harmony import */ var _Squares_GlobalSquare_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Squares/GlobalSquare.js */ "./src/components/Board/Squares/GlobalSquare.js");
/* harmony import */ var Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/customHooks.js */ "./src/components/customHooks.js");
/* harmony import */ var _useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEffectBoardHooks.js */ "./src/components/Board/useEffectBoardHooks.js");
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _boardHandlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boardHandlers.js */ "./src/components/Board/boardHandlers.js");
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
  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_4__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      globalState = _useStoreContext2[0],
      dispatch = _useStoreContext2[1];

  var surprised = globalState.surprised,
      colorDelay = globalState.colorDelay,
      colors = globalState.colors,
      dimensions = globalState.dimensions,
      mines = globalState.mines,
      numbers = globalState.numbers,
      flippers = globalState.flippers,
      scrollBoard = globalState.scrollBoard,
      timerOn = globalState.timerOn,
      definedUserName = globalState.definedUserName,
      timerTime = globalState.timerTime; // useEffects

  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.generateMinesEffect)(dimensions, dispatch); // changeSkillLevelEffect(dimensions.skillLevel, dispatch);

  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.freezeColorDelayEffect)(definedUserName, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.stopColorIterationEffect)(colorDelay, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.freezeScrollBoardEffect)(scrollBoard);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.resetOnSkillLevelChangeEffect)(dimensions.skillLevel, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.resetGameEffectOnSmileyOrSkill)(timerOn, dimensions.skillLevel, dimensions, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.generateNumberEffect)(mines, dimensions, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.resetFlagsRemainingOnSkillChangeOrTimerOn)(timerOn, dimensions.skillLevel, dispatch);
  (0,_useEffectBoardHooks_js__WEBPACK_IMPORTED_MODULE_3__.revealFlipperEffect)(mines, flippers, numbers, timerTime, dimensions.skillLevel, definedUserName, dispatch); // Callbacks and Utils

  var onHandleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _boardHandlers_js__WEBPACK_IMPORTED_MODULE_5__.default.call.apply(_boardHandlers_js__WEBPACK_IMPORTED_MODULE_5__.default, [[globalState, dispatch]].concat(args));
  }, [surprised]);
  var setScrollBoardCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return dispatch({
      type: 'TOGGLE SCROLLBOARD'
    });
  }, []);

  var handleScroll = function handleScroll(_) {
    return dispatch({
      type: 'MODULATE COLOR DELAY',
      payload: {
        newColorDelay: event.deltaY
      }
    });
  };

  (0,Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__.useInterval)(function () {
    return dispatch({
      type: 'ITERATE'
    });
  }, colorDelay);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onWheel: colorDelay ? handleScroll : null,
    onMouseEnter: colorDelay ? setScrollBoardCallback : null,
    onMouseLeave: colorDelay ? setScrollBoardCallback : null
  }, _toConsumableArray(new Array(dimensions.verticalDimension)).map(function (row, rowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: rowIndex,
      className: 'sweep-row'
    }, _toConsumableArray(new Array(dimensions.horizontalDimension)).map(function (sqr, sqrIndex) {
      var currCanidate = rowIndex * dimensions.horizontalDimension + sqrIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Squares_GlobalSquare_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        key: sqrIndex,
        currCanidate: currCanidate
      });
    }));
  }));
});

/***/ }),

/***/ "./src/components/Board/Squares/GlobalSquare.js":
/*!******************************************************!*\
  !*** ./src/components/Board/Squares/GlobalSquare.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _squareUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squareUtils.js */ "./src/components/Board/Squares/squareUtils.js");
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _sweepsquarestyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sweepsquarestyles.scss */ "./src/components/Board/Squares/sweepsquarestyles.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var currCanidate = _ref.currCanidate;

  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_2__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      globalState = _useStoreContext2[0],
      dispatch = _useStoreContext2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-testid": "test-".concat(currCanidate),
    onClick: function onClick() {
      // If tile is a bomb...
      if (globalState.mines.includes(currCanidate)) {
        dispatch({
          type: 'SWITCH TIMER BOMBED'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)(_objectSpread(_objectSpread({}, globalState), {}, {
          currCanidate: currCanidate,
          indicator: 'dead',
          dispatch: dispatch
        }));
      }

      ; // Is a Number or a Empty Square
      // If an empty space is revealed under a flag, increment remaining flags

      if (globalState.flippers[currCanidate] === 'flag') dispatch({
        type: 'INCREMENT FLAGS REMAINING'
      }); // Start the timer and reveal the tile

      if (globalState.timerOn === false) {
        dispatch({
          type: 'SWITCH TIMER ON'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)(_objectSpread(_objectSpread({}, globalState), {}, {
          currCanidate: currCanidate,
          indicator: null,
          dispatch: dispatch
        }));
      }

      ; // Normal Play

      return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)(_objectSpread(_objectSpread({}, globalState), {}, {
        currCanidate: currCanidate,
        indicator: null,
        dispatch: dispatch
      }));
    },
    onMouseDown: function onMouseDown() {
      if (!globalState.flippers[currCanidate]) dispatch({
        type: 'SURPRISED SMILES'
      });
    },
    onMouseUp: function onMouseUp() {
      // Mine- Death Sequence XD
      if (globalState.mines.includes(currCanidate) && event.button === 0 && !event.ctrlKey) {
        return dispatch({
          type: 'DEAD SMILES'
        });
      }

      ;
      return dispatch({
        type: 'RESET SMILES'
      });
    },
    onContextMenu: function onContextMenu() {
      //If number is already revealed- prevent user from putting a flag on it
      if (globalState.flippers[currCanidate] !== true) {
        dispatch({
          type: globalState.flippers[currCanidate] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING'
        });
        return (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleClick)(_objectSpread(_objectSpread({}, globalState), {}, {
          currCanidate: currCanidate,
          indicator: null,
          dispatch: dispatch
        }));
      }

      ; // Prevent context menu if user accidentally presses context menu

      event.preventDefault();
    },
    className: globalState.mines.includes(currCanidate) ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genMineClassNames)(_objectSpread(_objectSpread({}, globalState), {}, {
      currCanidate: currCanidate
    })) : globalState.numbers[currCanidate] ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genNumberClassNames)(_objectSpread(_objectSpread({}, globalState), {}, {
      currCanidate: currCanidate
    })) : (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.genEmptyClassNames)(_objectSpread(_objectSpread({}, globalState), {}, {
      currCanidate: currCanidate
    }))
  }, !globalState.definedUserName ? (0,_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__.generateLoginMessage)({
    currCanidate: currCanidate,
    skillLevel: globalState.dimensions.skillLevel
  }) : globalState.flippers[currCanidate] && globalState.flippers[currCanidate] !== 'flag' && globalState.numbers[currCanidate] ? globalState.numbers[currCanidate] : globalState.mines.includes(currCanidate) && globalState.flippers[currCanidate] && globalState.flippers[currCanidate] !== 'flag' ? '*' : null);
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
  var t = _ref.currCanidate,
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
  var t = _ref2.currCanidate,
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
  var currCanidate = _ref3.currCanidate,
      numbers = _ref3.numbers,
      flippers = _ref3.flippers,
      colors = _ref3.colors,
      surprised = _ref3.surprised,
      definedUserName = _ref3.definedUserName,
      skillLevel = _ref3.dimensions.skillLevel;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currCanidate: currCanidate,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  classNameArr.push(surprised === 'victory' || surprised === 'dead' || !definedUserName ? 'disabled' : flippers[currCanidate] === 'flag' ? 'flag' : 'number'); // Color Determination

  var currNum = numbers[currCanidate];
  classNameArr.push(currNum === 1 ? 'blue-num' : currNum === 2 ? 'green-num' : currNum === 3 ? 'red-num' : currNum === 4 ? 'purple-num' : currNum === 5 ? 'maroon-num' : currNum === 6 ? 'turquoise-num' : currNum === 7 ? 'black-num' : currNum === 8 ? 'grey-num' : null);
  return classNameArr.join(' ');
};

var genEmptyClassNames = function genEmptyClassNames(_ref4) {
  var currCanidate = _ref4.currCanidate,
      colors = _ref4.colors,
      surprised = _ref4.surprised,
      flippers = _ref4.flippers,
      definedUserName = _ref4.definedUserName,
      skillLevel = _ref4.dimensions.skillLevel;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currCanidate: currCanidate,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  classNameArr.push(surprised === 'victory' || surprised === 'dead' ? 'disabled dark-square' : !definedUserName ? 'disabled' : flippers[currCanidate] === 'flag' ? 'flag' : flippers[currCanidate] === true ? 'dark-square' : null);
  return classNameArr.join(' ');
};

var genMineClassNames = function genMineClassNames(_ref5) {
  var currCanidate = _ref5.currCanidate,
      colors = _ref5.colors,
      surprised = _ref5.surprised,
      flippers = _ref5.flippers,
      definedUserName = _ref5.definedUserName,
      skillLevel = _ref5.skillLevel;
  var classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({
      currCanidate: currCanidate,
      colors: colors,
      skillLevel: skillLevel
    }), 'disabled');
    return classNameArr.join(' ');
  }

  ;
  classNameArr.push(surprised === 'victory' && flippers[currCanidate] === 'flag' ? 'flag disabled' : surprised === 'victory' && !definedUserName ? 'disabled' : surprised === 'dead' ? 'disabled mine' : flippers[currCanidate] === 'flag' ? 'flag' : flippers[currCanidate] === true ? 'mine' : null);
  return classNameArr.join(' ');
};

var tileRecurse = function tileRecurse(_ref6) {
  var tile = _ref6.currCanidate,
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
      currCanidate: evalU(tile),
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
      currCanidate: evalR(tile),
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
      currCanidate: evalD(tile),
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
      currCanidate: evalL(tile),
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
  var tile = _ref7.currCanidate,
      indicator = _ref7.indicator,
      dimensions = _ref7.dimensions,
      mines = _ref7.mines,
      numbers = _ref7.numbers,
      surprised = _ref7.surprised,
      dispatch = _ref7.dispatch;
  event.preventDefault();
  return indicator === 'dead' ? dispatch({
    type: 'REVEAL DEAD FLIPPERS'
  }) : event.type === 'contextmenu' ? dispatch({
    type: 'SET FLAG FLIPPED',
    payload: {
      flagFlipped: tile
    }
  }) : event.type === 'click' && indicator !== 'dead' && !numbers[tile] && !mines.includes(tile) ? dispatch({
    type: 'FLIP RECURSED TILES',
    payload: tileRecurse({
      currCanidate: tile,
      dimensions: dimensions,
      numbers: numbers,
      mines: mines,
      resultArr: []
    })
  }) : event.type === 'click' && indicator !== 'dead' ? dispatch({
    type: 'FLIP NORMAL TILE',
    payload: {
      flippedTile: tile
    }
  }) : null;
};



/***/ }),

/***/ "./src/components/Board/boardHandlers.js":
/*!***********************************************!*\
  !*** ./src/components/Board/boardHandlers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tile, indicator) {
  event.preventDefault();

  var _this = _slicedToArray(this, 2),
      _this$ = _this[0],
      dimensions = _this$.dimensions,
      numbers = _this$.numbers,
      mines = _this$.mines,
      surprised = _this$.surprised,
      dispatch = _this[1];

  if (indicator === 'dead') {
    // Reveal all Flippers
    dispatch({
      type: 'REVEAL DEAD FLIPPERS'
    });
  } else if (event.type === 'contextmenu') {
    dispatch({
      type: 'SET FLAG FLIPPED',
      payload: {
        flagFlipped: tile
      }
    });
  }

  if (event.type === 'click' && indicator !== 'dead') {
    // Dark Tiles
    if (!numbers[tile] && !mines.includes(tile)) {
      var tileRecurse = function tileRecurse(tile, resultArr) {
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
          tileRecurse(evalU(tile), resultArr);
        } // ***********
        //  Going Right
        // ***********


        if (testTile(tile, evalR) && (evalR(tile) % dimensions.horizontalDimension !== 0 || evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0)) {
          tileRecurse(evalR(tile), resultArr);
        } // ***********
        //  Going Down
        // ***********


        if (testTile(tile, evalD)) {
          tileRecurse(evalD(tile), resultArr);
        } // ***********
        //  Going Left
        // ***********


        if (testTile(tile, evalL) && (evalL(tile + 1) % dimensions.horizontalDimension !== 0 || evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0)) {
          tileRecurse(evalL(tile), resultArr);
        }

        ;
        return resultArr;
      };

      var recursedTiles = tileRecurse(tile, []);
      dispatch({
        type: 'FLIP RECURSED TILES',
        payload: {
          recursedTiles: recursedTiles
        }
      });
    } else {
      dispatch({
        type: 'FLIP NORMAL TILE',
        payload: {
          flippedTile: tile
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/components/Board/useEffectBoardHooks.js":
/*!*****************************************************!*\
  !*** ./src/components/Board/useEffectBoardHooks.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMinesEffect": () => (/* binding */ generateMinesEffect),
/* harmony export */   "stopColorIterationEffect": () => (/* binding */ stopColorIterationEffect),
/* harmony export */   "freezeColorDelayEffect": () => (/* binding */ freezeColorDelayEffect),
/* harmony export */   "resetGameEffectOnSmileyOrSkill": () => (/* binding */ resetGameEffectOnSmileyOrSkill),
/* harmony export */   "freezeScrollBoardEffect": () => (/* binding */ freezeScrollBoardEffect),
/* harmony export */   "revealFlipperEffect": () => (/* binding */ revealFlipperEffect),
/* harmony export */   "generateNumberEffect": () => (/* binding */ generateNumberEffect),
/* harmony export */   "resetOnSkillLevelChangeEffect": () => (/* binding */ resetOnSkillLevelChangeEffect),
/* harmony export */   "resetFlagsRemainingOnSkillChangeOrTimerOn": () => (/* binding */ resetFlagsRemainingOnSkillChangeOrTimerOn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var generateMinesEffect = function generateMinesEffect(dimensions, dispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: 'GENERATE MINES',
      payload: dimensions
    });
  }, []);
}; // const changeSkillLevelEffect = (skillLevel, dispatch) => {
//   useEffect(() => {
//     if (skillLevel === 'beginner') {
//       return dispatch({ type: 'SET BEGINNER DIMENSIONS' })
//     };
//     if (skillLevel === 'intermediate') {
//       return dispatch({ type: 'SET INTERMEDIATE DIMENSIONS' });
//     };
//     if (skillLevel === 'advanced') {
//       return dispatch({ type: 'SET ADVANCED DIMENSIONS' });
//     };
//   }, [skillLevel]);
// };


var stopColorIterationEffect = function stopColorIterationEffect(colorDelay, dispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (colorDelay === null) {
      dispatch({
        type: 'STOP ITERATION'
      });
    }
  }, [colorDelay]);
};

var freezeColorDelayEffect = function freezeColorDelayEffect(definedUserName, dispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (definedUserName) {
      dispatch({
        type: 'UNSET COLOR DELAY'
      });
    }
  }, [definedUserName]);
}; // This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.


var resetGameEffectOnSmileyOrSkill = function resetGameEffectOnSmileyOrSkill(timerOn, skillLevel, dimensions, dispatch) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      dispatch({
        type: 'RESET FLIPPERS',
        payload: Array.from({
          length: dimensions.horizontalDimension * dimensions.verticalDimension
        }, function () {
          return false;
        })
      }); // Generate Mines

      dispatch({
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

var revealFlipperEffect = function revealFlipperEffect(mines, flippers, numbers, timerTime, skillLevel, definedUserName, dispatch) {
  var postResult = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios$post, results;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/minesweeper-topTimes', null, {
                params: {
                  skillLevel: skillLevel,
                  definedUserName: definedUserName,
                  timerTime: timerTime
                }
              });

            case 2:
              _yield$axios$post = _context.sent;
              results = _yield$axios$post.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function postResult() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(mines.length && flippers.length && flippers[0] !== 'dead')) {
              _context2.next = 9;
              break;
            }

            if (!flippers.every(function (flipper) {
              return flipper === true || flipper === 'flag' || mines[flipper];
            })) {
              _context2.next = 8;
              break;
            }

            // Stop The Timer Immediately
            dispatch({
              type: 'FREEZE TIMER DELAY'
            }); // Post Result

            _context2.next = 5;
            return postResult();

          case 5:
            // This Gets the posted result
            dispatch({
              type: 'VICTORY SMILES'
            }); // If a victory is detected by all numbers being revealed, flip all the empty squares

            _context2.next = 9;
            break;

          case 8:
            if (Object.keys(numbers).every(function (num) {
              return flippers[num] === true;
            })) {
              dispatch({
                type: 'REVEAL FLIPPERS',
                payload: {
                  mines: mines
                }
              });
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [flippers]);
};

var generateNumberEffect = function generateNumberEffect(mines, _ref3, dispatch) {
  var verticalDimension = _ref3.verticalDimension,
      horizontalDimension = _ref3.horizontalDimension;
  //When Mines are reset, generate numbers around those mines
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: 'GENERATE NUMBERS',
      payload: {
        mines: mines,
        verticalDimension: verticalDimension,
        horizontalDimension: horizontalDimension
      }
    });
  }, [mines]);
};

var resetOnSkillLevelChangeEffect = function resetOnSkillLevelChangeEffect(skillLevel, dispatch) {
  // If Skill Level is changed, reset the board.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: 'SWITCH TIMER OFF'
    });
  }, [skillLevel]);
};

var resetFlagsRemainingOnSkillChangeOrTimerOn = function resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, dispatch) {
  // This resets the flags whenever the skillLevel is changed or game is reset
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      dispatch({
        type: 'SET FLAGS REMAINING',
        payload: skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99
      });
    }

    ;
  }, [skillLevel, timerOn]);
};



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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
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

  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_3__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      _useStoreContext2$ = _useStoreContext2[0],
      skillLevel = _useStoreContext2$.dimensions.skillLevel,
      definedUserName = _useStoreContext2$.definedUserName,
      surprised = _useStoreContext2$.surprised,
      dispatch = _useStoreContext2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      topScores = _useState2[0],
      setTopScores = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      personalized = _useState4[0],
      setPersonalized = _useState4[1]; // Axios Utils--------------------------------


  var getAllResults = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$axios, _topScores;

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
              _topScores = _yield$axios.data;
              setTopScores(_topScores);
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
              setTopScores(personalizedResults);
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
  }(); //  Use Effect Section-------------------------


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ( //Get all results on a win.
    surprised === 'victory') {
      return personalized ? getPersonalizedResults() : getAllResults();
    }
  }, [surprised, definedUserName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return personalized ? getPersonalizedResults() : getAllResults();
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
  }, makeTitle(personalized, skillLevel)), (topScores || ssrTopTimes).map(function (entry, index) {
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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
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

  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 1),
      definedUserName = _useStoreContext2[0].definedUserName;

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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/customHooks.js */ "./src/components/customHooks.js");
/* harmony import */ var _millisecondstyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./millisecondstyles.scss */ "./src/components/MillisecondTimer/millisecondstyles.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      _useStoreContext2$ = _useStoreContext2[0],
      skillLevel = _useStoreContext2$.dimensions.skillLevel,
      timerOn = _useStoreContext2$.timerOn,
      timerTime = _useStoreContext2$.timerTime,
      timerDelay = _useStoreContext2$.timerDelay,
      dispatch = _useStoreContext2[1]; // If Delay is null, clear the timer


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerDelay === null) dispatch({
      type: 'CLEAR TIMER TIME'
    });
  }, [timerDelay]);
  (0,Components_customHooks_js__WEBPACK_IMPORTED_MODULE_2__.useInterval)(function () {
    dispatch({
      type: 'ITERATE TIMER TIME',
      payload: timerDelay
    });
  }, timerDelay); // If Timer is changed to true, start the timer.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (timerOn && timerOn !== 'bombed') {
              dispatch({
                type: 'INIT TIMER DELAY'
              });
            } else {
              dispatch({
                type: 'UNSET TIMER DELAY'
              });
            }

            ;

          case 2:
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
/* harmony import */ var Components_UserNameEntry_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/UserNameEntry/UserNameEntry.js */ "./src/components/UserNameEntry/UserNameEntry.js");
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _minesweeper_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minesweeper.scss */ "./src/components/Minesweeper/minesweeper.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Minesweeper Main Components









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var ssrTopTimes = _ref.ssrTopTimes;

  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_7__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 1),
      skillLevel = _useStoreContext2[0].dimensions.skillLevel;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_UserNameEntry_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers",
    id: "main-space-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "total-board",
    className: skillLevel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SmileyBar_SmileyBar_js__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Board_Board_js__WEBPACK_IMPORTED_MODULE_1__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Leaderboard_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_4__.default, {
    ssrTopTimes: ssrTopTimes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_MillisecondTimer_MillisecondTimer_js__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SkillLevelSelector_SkillLevelSelector_js__WEBPACK_IMPORTED_MODULE_3__.default, null)));
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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _skillstyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillstyles.scss */ "./src/components/SkillLevelSelector/skillstyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function () {
  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      skillLevel = _useStoreContext2[0].dimensions.skillLevel,
      dispatch = _useStoreContext2[1];

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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _smileystyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smileystyles.scss */ "./src/components/SmileyBar/smileystyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function () {
  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_1__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      _useStoreContext2$ = _useStoreContext2[0],
      surprised = _useStoreContext2$.surprised,
      flagsRemaining = _useStoreContext2$.flagsRemaining,
      dispatch = _useStoreContext2[1];

  var resetCallback = function resetCallback() {
    dispatch({
      type: 'RESET SMILES'
    });
    dispatch({
      type: 'SWITCH TIMER OFF'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "smiley-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "smiley-guy",
    id: surprised === 'dead' ? 'dead-guy' : surprised === 'victory' ? 'victory-guy' : surprised === true ? 'surprised-guy' : 'smiley-guy',
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
/* harmony import */ var Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Store/useStoreContext.js */ "./src/store/useStoreContext.js");
/* harmony import */ var _loginstyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginstyles.scss */ "./src/components/UserNameEntry/loginstyles.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useStoreContext = (0,Store_useStoreContext_js__WEBPACK_IMPORTED_MODULE_3__.default)(),
      _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
      _useStoreContext2$ = _useStoreContext2[0],
      skillLevel = _useStoreContext2$.dimensions.skillLevel,
      definedUserName = _useStoreContext2$.definedUserName,
      userName = _useStoreContext2$.userName,
      userPass = _useStoreContext2$.userPass,
      dispatch = _useStoreContext2[1];

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
              dispatch({
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
                dispatch({
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
        dispatch({
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
        return dispatch({
          type: 'UPDATE USERPASS',
          payload: event.target.value
        });
      }
    })));
  };

  return generateForm();
});

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
    } // If victory is declared stop the timer...


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
    var _ref7$query, skillLevel, timerTime, definedUserName;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref7$query = _ref7.query, skillLevel = _ref7$query.skillLevel, timerTime = _ref7$query.timerTime, definedUserName = _ref7$query.definedUserName;
            _context4.prev = 1;
            _context4.next = 4;
            return (0,Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_2__.postResult)(skillLevel, timerTime, definedUserName);

          case 4:
            res.send('ok');
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            res.send(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
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

/***/ "./src/store/actions/colorActions.js":
/*!*******************************************!*\
  !*** ./src/store/actions/colorActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (existingColors) {
  var lastColor = existingColors.pop();
  existingColors.unshift(lastColor);
  return _toConsumableArray(existingColors);
});

/***/ }),

/***/ "./src/store/actions/colorDelayActions.js":
/*!************************************************!*\
  !*** ./src/store/actions/colorDelayActions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (existing, newColorDelay) {
  if (existing + newColorDelay > 25) {
    // If Increasing the Color Delay- do so at a rate of 1, otherwise when decreasing do so at 2.5 rate- full rate is less enjoyable
    newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5 : newColorDelay < 0 ? newColorDelay / 2.5 : 1;
    return existing + newColorDelay;
  }

  return existing;
});

/***/ }),

/***/ "./src/store/actions/flipperActions.js":
/*!*********************************************!*\
  !*** ./src/store/actions/flipperActions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "revealFlippers": () => (/* binding */ revealFlippers),
/* harmony export */   "flipNormalTile": () => (/* binding */ flipNormalTile),
/* harmony export */   "flipRecursedTiles": () => (/* binding */ flipRecursedTiles),
/* harmony export */   "revealDeadFlippers": () => (/* binding */ revealDeadFlippers),
/* harmony export */   "setFlagFlipped": () => (/* binding */ setFlagFlipped)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



/***/ }),

/***/ "./src/store/actions/mineActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/mineActions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generate Mines
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
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

  return mineArr;
});

/***/ }),

/***/ "./src/store/actions/numberActions.js":
/*!********************************************!*\
  !*** ./src/store/actions/numberActions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Generate Numbers
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var mines = _ref.mines,
      verticalDimension = _ref.verticalDimension,
      horizontalDimension = _ref.horizontalDimension;

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
});

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_mineActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/mineActions.js */ "./src/store/actions/mineActions.js");
/* harmony import */ var _actions_numberActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/numberActions.js */ "./src/store/actions/numberActions.js");
/* harmony import */ var _actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/flipperActions.js */ "./src/store/actions/flipperActions.js");
/* harmony import */ var _actions_colorDelayActions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/colorDelayActions */ "./src/store/actions/colorDelayActions.js");
/* harmony import */ var _actions_colorActions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/colorActions.js */ "./src/store/actions/colorActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var numbers = function numbers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [4, 5, 6];

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "GENERATE NUMBERS":
      return (0,_actions_numberActions_js__WEBPACK_IMPORTED_MODULE_1__.default)(payload);

    default:
      return state;
  }
};

var timerOn = function timerOn() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case "SWITCH TIMER ON":
      return true;

    case "SWITCH TIMER BOMBED":
      return 'bombed';

    case "SWITCH TIMER OFF":
      return false;

    case "SAVE TIMER VICTORY":
      return payload;

    default:
      return state;
  }
};

var definedUserName = function definedUserName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref3.type,
      _ref3$payload = _ref3.payload;

  _ref3$payload = _ref3$payload === void 0 ? {} : _ref3$payload;
  var userName = _ref3$payload.userName;

  switch (type) {
    case "SET DEFINED USERNAME":
      return userName;

    default:
      return state;
  }
}; // preloaded default state prevents an automatic win by default


var mines = function mines(state, _ref4) {
  var type = _ref4.type,
      payload = _ref4.payload;

  switch (type) {
    case "GENERATE MINES":
      return (0,_actions_mineActions_js__WEBPACK_IMPORTED_MODULE_0__.default)(payload);

    default:
      return state;
  }
};

var flippers = function flippers(state, _ref5) {
  var type = _ref5.type,
      payload = _ref5.payload,
      _ref5$payload = _ref5.payload;
  _ref5$payload = _ref5$payload === void 0 ? {} : _ref5$payload;
  var flagFlipped = _ref5$payload.flagFlipped,
      flippedTile = _ref5$payload.flippedTile,
      mines = _ref5$payload.mines;

  switch (type) {
    case "RESET FLIPPERS":
      return payload;

    case "SET FLAG FLIPPED":
      return (0,_actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__.setFlagFlipped)(state.slice(), flagFlipped);

    case "FLIP NORMAL TILE":
      return (0,_actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__.flipNormalTile)(state.slice(), flippedTile);

    case "FLIP RECURSED TILES":
      return (0,_actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__.flipRecursedTiles)(state.slice(), payload);

    case "REVEAL DEAD FLIPPERS":
      return (0,_actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__.revealDeadFlippers)(state.slice());

    case "REVEAL FLIPPERS":
      return (0,_actions_flipperActions_js__WEBPACK_IMPORTED_MODULE_2__.revealFlippers)(state.slice(), mines);

    default:
      return state;
  }
};

var colorDelay = function colorDelay() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _ref6 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref6.type,
      _ref6$payload = _ref6.payload;

  _ref6$payload = _ref6$payload === void 0 ? {} : _ref6$payload;
  var newColorDelay = _ref6$payload.newColorDelay;

  switch (type) {
    case "UNSET COLOR DELAY":
      return null;

    case "MODULATE COLOR DELAY":
      return (0,_actions_colorDelayActions_js__WEBPACK_IMPORTED_MODULE_3__.default)(state, newColorDelay);

    default:
      return state;
  }
};

var colors = function colors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ITERATE":
      return (0,_actions_colorActions_js__WEBPACK_IMPORTED_MODULE_4__.default)(state.slice());

    case "STOP ITERATION":
      return null;

    default:
      return state;
  }
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
}; // const x = (state, action) => {
//   console.log(state)
//   return state;
// };


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
};

var dimensions = function dimensions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    skillLevel: 'beginner',
    verticalDimension: 9,
    horizontalDimension: 9,
    numberOfMines: 10
  };

  var _ref7 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref7.type;

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

var userName = function userName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref8 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref8.type,
      payload = _ref8.payload;

  switch (type) {
    case "UPDATE USERNAME":
      return payload;

    default:
      return state;
  }
};

var userPass = function userPass() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref9 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref9.type,
      payload = _ref9.payload;

  switch (type) {
    case "UPDATE USERPASS":
      return payload;

    default:
      return state;
  }
};

var flagsRemaining = function flagsRemaining() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _ref10 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref10.type,
      payload = _ref10.payload;

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

var timerDelay = function timerDelay() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _ref11 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref11.type,
      payload = _ref11.payload;

  switch (type) {
    case "FREEZE TIMER DELAY":
      return -1;

    case "INIT TIMER DELAY":
      return 10;

    case "UNSET TIMER DELAY":
      return null;

    default:
      return state;
  }
};

var timerTime = function timerTime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _ref12 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref12.type,
      payload = _ref12.payload;

  switch (type) {
    case "ITERATE TIMER TIME":
      return state += payload;

    case "CLEAR TIMER TIME":
      return 0;

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
  timerDelay: timerDelay,
  timerTime: timerTime,
  colors: colors,
  dimensions: dimensions,
  colorDelay: colorDelay,
  surprised: surprised,
  scrollBoard: scrollBoard,
  numbers: numbers,
  mines: mines,
  flippers: flippers,
  definedUserName: definedUserName,
  timerOn: timerOn,
  flagsRemaining: flagsRemaining,
  userName: userName,
  userPass: userPass
}));

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreContext": () => (/* binding */ StoreContext),
/* harmony export */   "StoreProvider": () => (/* binding */ StoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers.js */ "./src/store/reducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var StoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  colorDelay: 1000,
  colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'],
  dimensions: {
    skillLevel: 'beginner',
    verticalDimension: 9,
    horizontalDimension: 9,
    numberOfMines: 10
  },
  scrollBoard: false,
  mines: [1, 2, 3],
  numbers: [1, 2, 3],
  flippers: [],
  surprised: false,
  definedUserName: null,
  timerOn: false,
  flagsRemaining: 10,
  userName: '',
  userPass: '',
  timerDelay: null,
  timerTime: 0
};

var StoreProvider = function StoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_reducers_js__WEBPACK_IMPORTED_MODULE_1__.default, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StoreContext.Provider, {
    value: store
  }, children);
};



/***/ }),

/***/ "./src/store/useStoreContext.js":
/*!**************************************!*\
  !*** ./src/store/useStoreContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/store/store.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_store_js__WEBPACK_IMPORTED_MODULE_1__.StoreContext);
});

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
/* harmony import */ var Store_store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Store/store.js */ "./src/store/store.js");
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
            minesweeperStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Store_store_js__WEBPACK_IMPORTED_MODULE_10__.StoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Components_Minesweeper_Minesweeper_js__WEBPACK_IMPORTED_MODULE_6__.default, null)));
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