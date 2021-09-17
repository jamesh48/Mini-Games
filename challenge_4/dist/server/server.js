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
          console.log('Connection has been established successfully.');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Unable to connect to the database:', _context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 6]]);
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

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
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
/* harmony import */ var Components_Board_Board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Board/Board.js */ "./src/components/Board/Board.js");
/* harmony import */ var Components_MillisecondTimer_MillisecondTimer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/MillisecondTimer/MillisecondTimer.js */ "./src/components/MillisecondTimer/MillisecondTimer.js");
/* harmony import */ var Components_SkillLevelSelector_SkillLevelSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/SkillLevelSelector/SkillLevelSelector.js */ "./src/components/SkillLevelSelector/SkillLevelSelector.js");
/* harmony import */ var Components_Leaderboard_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/Leaderboard/LeaderBoard.js */ "./src/components/Leaderboard/LeaderBoard.js");
/* harmony import */ var Components_SmileyBar_SmileyBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/SmileyBar/SmileyBar.js */ "./src/components/SmileyBar/SmileyBar.js");
/* harmony import */ var Components_LoginForm_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/LoginForm/UserNameEntry.js */ "./src/components/LoginForm/UserNameEntry.js");
/* harmony import */ var Components_useInterval_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/useInterval.js */ "./src/components/useInterval.js");
/* harmony import */ var _minesweeper_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./minesweeper.scss */ "./src/components/App/minesweeper.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('beginner'),
      _useState2 = _slicedToArray(_useState, 2),
      skillLevel = _useState2[0],
      setSkillLevel = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      timerOn = _useState4[0],
      setTimerOn = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      timerTime = _useState6[0],
      setTimerTime = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
      _useState8 = _slicedToArray(_useState7, 2),
      flagsRemaining = _useState8[0],
      setFlagsRemaining = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      surprised = _useState10[0],
      setSurprised = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      userName = _useState12[0],
      setUserName = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      userPass = _useState14[0],
      setUserPass = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      delay = _useState16[0],
      setDelay = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      definedUserName = _useState18[0],
      setSolidUserName = _useState18[1]; // If Delay is null, clear the timer


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (delay === null) setTimerTime(0);
  }, [delay]); // If Timer is changed to true, start the timer.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var result;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(timerOn)) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return postResult(timerOn[0]);

          case 3:
            result = _context.sent;
            return _context.abrupt("return", setDelay(-1));

          case 5:
            setDelay(function () {
              return timerOn && timerOn !== 'bombed' ? 10 : null;
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [timerOn]);
  (0,Components_useInterval_js__WEBPACK_IMPORTED_MODULE_9__.default)(function () {
    setTimerTime(function (prevTimerTime) {
      return prevTimerTime += 10;
    });
  }, delay); // This resets the flags whenever the skillLevel is changed or game is reset

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      setFlagsRemaining(function () {
        return skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99;
      });
    }

    ;
  }, [skillLevel, timerOn]);

  var postResult = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(resultTime) {
      var _yield$axios$post, results;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/minesweeper-topTimes', null, {
                params: {
                  skillLevel: skillLevel,
                  definedUserName: definedUserName,
                  resultTime: resultTime
                }
              });

            case 2:
              _yield$axios$post = _context2.sent;
              results = _yield$axios$post.data;
              return _context2.abrupt("return", results);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function postResult(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var timerOnCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (indicator) {
    if (Array.isArray(indicator)) {
      setTimerOn(indicator);
    } else if (indicator === 'bomb') {
      setTimerOn('bombed');
    } else if (!Array.isArray(indicator)) {
      setTimerOn(true);
    }

    ;
  }, []);
  var skillCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref3) {
    var id = _ref3.target.id;
    return setSkillLevel(id);
  }, []);
  var flagsRemainingCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (indicator) {
    if (indicator === true) {
      setFlagsRemaining(function (prevFlagsRemaining) {
        return prevFlagsRemaining - 1;
      });
    }

    if (indicator === false) {
      setFlagsRemaining(function (prevFlagsRemaining) {
        return prevFlagsRemaining + 1;
      });
    }
  }, []);
  var resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setSurprised(false);
    setTimerOn(false);
  }, []);
  var surprisedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (indicator) {
    if (indicator === 'victory') {
      setSurprised('victory');
    } else if (indicator === 'dead') {
      setSurprised('dead');
    } else if (indicator === 'reset') {
      setSurprised(false);
    } else {
      setSurprised(true);
    }
  }, []);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _yield$axios, result, prompt, _yield$axios$post2, posted;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()('/minesweeper-validateUser', {
                params: {
                  userName: userName,
                  userPass: userPass
                }
              });

            case 3:
              _yield$axios = _context3.sent;
              result = _yield$axios.data;

              if (!(result === 'does not exist')) {
                _context3.next = 16;
                break;
              }

              prompt = window.confirm('User does not exist, Create new user?');

              if (!prompt) {
                _context3.next = 13;
                break;
              }

              _context3.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/minesweeper-createUser', null, {
                params: {
                  userName: userName,
                  userPass: userPass
                }
              });

            case 10:
              _yield$axios$post2 = _context3.sent;
              posted = _yield$axios$post2.data;
              setSolidUserName(userName);

            case 13:
              ;
              _context3.next = 17;
              break;

            case 16:
              if (result === 'wrong password') {
                alert('Wrong Password, try again...');
              } else {
                setSolidUserName(userName);
              }

            case 17:
              ;

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  var userPassCallback = function userPassCallback(_ref5) {
    var value = _ref5.target.value;
    return setUserPass(value);
  };

  var userNameCallback = function userNameCallback(_ref6) {
    var value = _ref6.target.value;
    return setUserName(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_LoginForm_UserNameEntry_js__WEBPACK_IMPORTED_MODULE_8__.default, {
    userName: userName,
    userPassCallback: userPassCallback,
    userPass: userPass,
    handleSubmit: handleSubmit,
    userNameCallback: userNameCallback,
    definedUserName: definedUserName,
    skillLevel: skillLevel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "total-board",
    className: skillLevel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SmileyBar_SmileyBar_js__WEBPACK_IMPORTED_MODULE_7__.default, {
    surprised: surprised,
    skillLevel: skillLevel,
    flagsRemaining: flagsRemaining,
    resetCallback: resetCallback
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Board_Board_js__WEBPACK_IMPORTED_MODULE_3__.default, {
    timerTime: timerTime,
    definedUserName: definedUserName,
    surprised: surprised,
    surprisedCallback: surprisedCallback,
    timerOnCallback: timerOnCallback,
    timerOn: timerOn,
    skillLevel: skillLevel,
    resetCallback: resetCallback,
    flagsRemainingCallback: flagsRemainingCallback,
    flagsRemaining: flagsRemaining
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_Leaderboard_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_6__.default, {
    ssrTopTimes: props.ssrTopTimes,
    definedUserName: definedUserName,
    skillLevel: skillLevel,
    surprised: surprised
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-containers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_MillisecondTimer_MillisecondTimer_js__WEBPACK_IMPORTED_MODULE_4__.default, {
    skillLevel: skillLevel,
    timerTime: timerTime
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_SkillLevelSelector_SkillLevelSelector_js__WEBPACK_IMPORTED_MODULE_5__.default, {
    skillLevel: skillLevel,
    skillCallback: skillCallback
  })));
});

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
/* harmony import */ var Components_useInterval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/useInterval.js */ "./src/components/useInterval.js");
/* harmony import */ var _boardstyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardstyles.scss */ "./src/components/Board/boardstyles.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var generateMines = function generateMines(numberOfMines, verticalDimension, horizontalDimension) {
  var mineArr = [];

  while (mineArr.length < numberOfMines) {
    var mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));

    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  }

  return mineArr;
};

var generateNumbers = function generateNumbers(mines, verticalDimension, horizontalDimension) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var surprised = _ref.surprised,
      surprisedCallback = _ref.surprisedCallback,
      skillLevel = _ref.skillLevel,
      timerOn = _ref.timerOn,
      timerTime = _ref.timerTime,
      timerOnCallback = _ref.timerOnCallback,
      resetCallback = _ref.resetCallback,
      flagsRemainingCallback = _ref.flagsRemainingCallback,
      definedUserName = _ref.definedUserName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    verticalDimension: 9,
    horizontalDimension: 9,
    numberOfMines: 10
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['blue-num', 'green-num', 'red-num', 'black-num', 'purple-num', 'maroon-num', 'turquoise-num', 'golden', 'grey-num']),
      _useState4 = _slicedToArray(_useState3, 2),
      colors = _useState4[0],
      setColors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(50),
      _useState6 = _slicedToArray(_useState5, 2),
      colorDelay = _useState6[0],
      setColorDelay = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array.from({
    length: dimensions.horizontalDimension * dimensions.verticalDimension
  }, function () {
    return false;
  })),
      _useState8 = _slicedToArray(_useState7, 2),
      flippers = _useState8[0],
      setFlippers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateMines(dimensions.numberOfMines, dimensions.verticalDimension, dimensions.horizontalDimension)),
      _useState10 = _slicedToArray(_useState9, 2),
      mines = _useState10[0],
      setMines = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateNumbers(mines, dimensions.verticalDimension, dimensions.horizontalDimension)),
      _useState12 = _slicedToArray(_useState11, 2),
      numbers = _useState12[0],
      setNumbers = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDimensions(skillLevel === 'beginner' ? {
      verticalDimension: 4,
      horizontalDimension: 4,
      numberOfMines: 1
    } : skillLevel === 'intermediate' ? {
      verticalDimension: 16,
      horizontalDimension: 16,
      numberOfMines: 40
    } // Advanced
    : {
      verticalDimension: 16,
      horizontalDimension: 30,
      numberOfMines: 99
    });
  }, [skillLevel]);
  (0,Components_useInterval_js__WEBPACK_IMPORTED_MODULE_2__.default)(function () {
    setColors(function (existingColors) {
      var lastColor = existingColors.pop();
      existingColors.unshift(lastColor);
      return _toConsumableArray(existingColors);
    });
  }, colorDelay);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (colorDelay === null) {
      setColors(null);
    }
  }, [colorDelay]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (definedUserName) {
      setColorDelay(null);
    }
  }, [definedUserName]);
  var generateColors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (t) {
    // Stars only *
    if (t >= 6 && t <= 9 || t >= 15 && t <= 19 || t > 25) {
      var _colors = _slicedToArray(colors, 9),
          blu = _colors[0],
          grn = _colors[1],
          red = _colors[2],
          blk = _colors[3],
          prpl = _colors[4],
          mrn = _colors[5],
          turq = _colors[6],
          gldn = _colors[7],
          gry = _colors[8];

      return !(t % 10) ? blu : !((t - 1) % 10) ? grn : !((t - 2) % 10) ? red : !((t - 3) % 10) ? blk : !((t - 4) % 10) ? prpl : !((t - 5) % 10) ? mrn : !((t - 6) % 10) || t === 27 ? turq : !((t - 7) % 10) || t === 18 || t === 28 ? gldn : !((t - 9) % 10) || t === 8 ? gry : null;
    }

    ;
  }, [colors]);
  var genLoginMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (t) {
    if (skillLevel === 'beginner') {
      return t === 0 ? 'P' : t === 1 ? 'l' : t === 2 ? 'e' : t === 3 ? 'a' : t === 4 ? 's' : t === 5 ? 'e' : t === 10 ? 'L' : t === 11 ? 'o' : t === 12 ? 'g' : t === 13 ? 'i' : t === 14 ? 'n' : t === 20 ? 'F' : t === 21 ? 'i' : t === 22 ? 'r' : t === 23 ? 's' : t === 24 ? 't' : t === 25 ? '!' : t < 36 ? '*' : null;
    }
  }, []); //
  //
  //
  // This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      setFlippers(Array.from({
        length: dimensions.horizontalDimension * dimensions.verticalDimension
      }, function () {
        return false;
      })); // Generate Mines

      setMines(generateMines(dimensions.numberOfMines, dimensions.verticalDimension, dimensions.horizontalDimension));
    }

    ;
  }, [timerOn, skillLevel]); // If Skill Level is changed, reset the board.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    resetCallback();
  }, [skillLevel]); //When Mines are reset, generate numbers around those mines

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setNumbers(generateNumbers(mines, dimensions.verticalDimension, dimensions.horizontalDimension));
  }, [mines]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every(function (flipper) {
        return flipper === true || flipper === 'flag' || mines[flipper];
      })) {
        // Post Result
        timerOnCallback([timerTime]);
        setTimeout(function () {
          // This Gets the posted result
          surprisedCallback('victory');
        }, 500); // If a victory is detected, flip all the empty squares
      } else if (Object.keys(numbers).every(function (num) {
        return flippers[num] === true;
      })) {
        setFlippers(function (prevFlippers) {
          prevFlippers = prevFlippers.map(function (flipper, index) {
            if (flipper === 'flag' || mines.includes(index)) {
              return 'flag';
            } else {
              return true;
            }
          });
          return _toConsumableArray(prevFlippers);
        });
      }
    }
  }, [flippers]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (tile, indicator) {
    event.preventDefault();

    if (indicator === 'dead') {
      // Reveal all Flippers
      setFlippers(function (prevFlippers) {
        prevFlippers = prevFlippers.map(function (flipper, index) {
          if (index === 0) {
            return 'dead';
          } else {
            return true;
          }
        });
        return _toConsumableArray(prevFlippers);
      });
    } else if (event.type === 'contextmenu') {
      setFlippers(function (prevFlippers) {
        if (prevFlippers[tile] === 'flag') {
          prevFlippers.splice(tile, 1, false);
        } else {
          prevFlippers.splice(tile, 1, 'flag');
        }

        return _toConsumableArray(prevFlippers);
      });
    }

    if (event.type === 'click' && indicator !== 'dead') {
      // Dark Tiles
      if (!numbers[tile] && !mines.includes(tile)) {
        var tileRecurse = function tileRecurse(tile) {
          setFlippers(function (prevFlippers) {
            prevFlippers.splice(tile, 1, true);

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

            var testTile = function testTile(tile, test) {
              return !numbers[test(tile)] && !mines.includes(test(tile)) && prevFlippers[test(tile)] === false && test(tile) >= 0 && test(tile) <= dimensions.verticalDimension * dimensions.horizontalDimension;
            }; // ***********
            //  Going Up
            // ***********


            if (testTile(tile, evalU)) {
              tileRecurse(evalU(tile));
            } // ***********
            //  Going Right
            // ***********


            if (testTile(tile, evalR) && (evalR(tile) % dimensions.horizontalDimension !== 0 || evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0)) {
              tileRecurse(evalR(tile));
            } // ***********
            //  Going Down
            // ***********


            if (testTile(tile, evalD)) {
              tileRecurse(evalD(tile));
            } // ***********
            //  Going Left
            // ***********


            if (testTile(tile, evalL) && (evalL(tile + 1) % dimensions.horizontalDimension !== 0 || evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0)) {
              tileRecurse(evalL(tile));
            }

            ;
            return _toConsumableArray(prevFlippers);
          });
        };

        tileRecurse(tile);
      } else {
        setFlippers(function (prevFlippers) {
          prevFlippers.splice(tile, 1, true);
          return _toConsumableArray(prevFlippers);
        });
      }
    }
  }, [surprised]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _toConsumableArray(new Array(dimensions.verticalDimension)).map(function (row, rowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: rowIndex,
      className: 'sweep-row'
    }, _toConsumableArray(new Array(dimensions.horizontalDimension)).map(function (sqr, sqrIndex) {
      var currCanidate = rowIndex * dimensions.horizontalDimension + sqrIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Squares_GlobalSquare_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        key: sqrIndex,
        sqrIndex: sqrIndex,
        flippers: flippers,
        currCanidate: currCanidate,
        definedUserName: definedUserName,
        mines: mines,
        numbers: numbers,
        colors: colors,
        surprised: surprised,
        timerOn: timerOn,
        flagsRemainingCallback: flagsRemainingCallback,
        surprisedCallback: surprisedCallback,
        timerOnCallback: timerOnCallback,
        generateColors: generateColors,
        genLoginMessage: genLoginMessage,
        handleClick: handleClick
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
/* harmony import */ var _squareUtils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_squareUtils_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sweepsquarestyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweepsquarestyles.scss */ "./src/components/Board/Squares/sweepsquarestyles.scss");



var genNumberClassNames = (_squareUtils_js__WEBPACK_IMPORTED_MODULE_1___default().genNumberClassNames),
    genEmptyClassNames = (_squareUtils_js__WEBPACK_IMPORTED_MODULE_1___default().genEmptyClassNames),
    genMineClassNames = (_squareUtils_js__WEBPACK_IMPORTED_MODULE_1___default().genMineClassNames);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var sqrIndex = _ref.sqrIndex,
      colors = _ref.colors,
      surprised = _ref.surprised,
      currCanidate = _ref.currCanidate,
      definedUserName = _ref.definedUserName,
      flippers = _ref.flippers,
      mines = _ref.mines,
      numbers = _ref.numbers,
      generateColors = _ref.generateColors,
      genLoginMessage = _ref.genLoginMessage,
      handleClick = _ref.handleClick,
      surprisedCallback = _ref.surprisedCallback,
      flagsRemainingCallback = _ref.flagsRemainingCallback,
      timerOnCallback = _ref.timerOnCallback,
      timerOn = _ref.timerOn;
  // useEffect(() => {
  //   console.log('updated!');
  // })
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: sqrIndex,
    "data-testid": "test-".concat(currCanidate),
    onClick: function onClick() {
      // If tile is a bomb...
      if (mines.includes(currCanidate)) {
        timerOnCallback('bomb');
        return handleClick(currCanidate, 'dead');
      }

      ; // Is a Number or a Empty Square
      // If an empty space is revealed under a flag, increment remaining flags

      if (flippers[currCanidate] === 'flag') flagsRemainingCallback(false); // Start the timer and reveal the tile

      if (timerOn === false) {
        timerOnCallback();
        handleClick(currCanidate);
      }

      ; // Normal Play

      return handleClick(currCanidate);
    },
    onMouseDown: function onMouseDown() {
      if (!flippers[currCanidate]) surprisedCallback();
    },
    onMouseUp: function onMouseUp() {
      // Mine- Death Sequence XD
      if (mines.includes(currCanidate) && event.button === 0 && !event.ctrlKey) {
        return surprisedCallback('dead');
      }

      ;
      surprisedCallback('reset');
    },
    onContextMenu: function onContextMenu() {
      //If number is already revealed- prevent user from putting a flag on it
      if (flippers[currCanidate] !== true) {
        // if the flag is false (-1), pass true, otherwise pass false(+1)
        flagsRemainingCallback(flippers[currCanidate] === false || false);
        return handleClick(currCanidate);
      }

      ; // Prevent context menu if user accidentally presses context menu

      event.preventDefault();
    },
    className: mines.includes(currCanidate) ? genMineClassNames(currCanidate, colors, generateColors, surprised, flippers, definedUserName) : numbers[currCanidate] ? genNumberClassNames(currCanidate, numbers, flippers, colors, generateColors, surprised, definedUserName) : genEmptyClassNames(currCanidate, colors, generateColors, surprised, flippers, definedUserName)
  }, !definedUserName ? genLoginMessage(currCanidate) : flippers[currCanidate] && flippers[currCanidate] !== 'flag' && numbers[currCanidate] ? numbers[currCanidate] : mines.includes(currCanidate) && flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? '*' : null);
}));

/***/ }),

/***/ "./src/components/Board/Squares/squareUtils.js":
/*!*****************************************************!*\
  !*** ./src/components/Board/Squares/squareUtils.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {
  genNumberClassNames: function genNumberClassNames(num, numbers, flippers, colors, generateColors, surprised, definedUserName) {
    var classNameArr = ['sweep-square']; // if (timerTime === 0) {

    if (colors !== null) {
      classNameArr.push(generateColors(num), 'disabled');
      return classNameArr.join(' ');
    }

    ;
    classNameArr.push(surprised === 'victory' || surprised === 'dead' || !definedUserName ? 'disabled' : flippers[num] === 'flag' ? 'flag' : 'number'); // Color Determination

    var currNum = numbers[num];
    classNameArr.push(currNum === 1 ? 'blue-num' : currNum === 2 ? 'green-num' : currNum === 3 ? 'red-num' : currNum === 4 ? 'purple-num' : currNum === 5 ? 'maroon-num' : currNum === 6 ? 'turquoise-num' : currNum === 7 ? 'black-num' : currNum === 8 ? 'grey-num' : null);

    if (!definedUserName) {
      classNameArr.pop();
    }

    ;
    return classNameArr.join(' ');
  },
  genEmptyClassNames: function genEmptyClassNames(tile, colors, generateColors, surprised, flippers, definedUserName) {
    var classNameArr = ['sweep-square']; // if (timerTime === 0) {

    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    }

    ;
    classNameArr.push(surprised === 'victory' || surprised === 'dead' ? 'disabled dark-square' : !definedUserName ? 'disabled' : flippers[tile] === 'flag' ? 'flag' : flippers[tile] === true ? 'dark-square' : null);
    return classNameArr.join(' ');
  },
  genMineClassNames: function genMineClassNames(tile, colors, generateColors, surprised, flippers, definedUserName) {
    var classNameArr = ['sweep-square']; // if (timerTime === 0) {

    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    }

    ;
    classNameArr.push(surprised === 'victory' && flippers[tile] === 'flag' ? 'flag disabled' : surprised === 'victory' && !definedUserName ? 'disabled' : surprised === 'dead' ? 'disabled mine' : flippers[tile] === 'flag' ? 'flag' : flippers[tile] === true ? 'mine' : null);
    return classNameArr.join(' ');
  }
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
/* harmony import */ var _leaderboard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaderboard.scss */ "./src/components/Leaderboard/leaderboard.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var ssrTopTimes = _ref.ssrTopTimes,
      skillLevel = _ref.skillLevel,
      surprised = _ref.surprised,
      definedUserName = _ref.definedUserName;

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
      definedUserName: definedUserName,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var definedUserName = _ref.definedUserName,
      personalized = _ref.personalized,
      handleClick = _ref.handleClick,
      _ref$entry = _ref.entry,
      username = _ref$entry.username,
      time = _ref$entry.time,
      index = _ref.index,
      formatTime = _ref.formatTime;
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

/***/ "./src/components/LoginForm/UserNameEntry.js":
/*!***************************************************!*\
  !*** ./src/components/LoginForm/UserNameEntry.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loginstyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginstyles.scss */ "./src/components/LoginForm/loginstyles.scss");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var areEqual = function areEqual(prevProps, nextProps) {
  // If the user is already logged in, don't render this component again.
  return prevProps.definedUserName && (JSON.stringify(prevProps.userNameCallback === nextProps.userNameCallback) || JSON.stringify(prevProps.handleSubmit) === JSON.stringify(nextProps.handleSubmit) || JSON.stringify(prevProps.userPassCallback) === JSON.stringify(nextProps.userPassCallback));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var userPass = _ref.userPass,
      userPassCallback = _ref.userPassCallback,
      userName = _ref.userName,
      userNameCallback = _ref.userNameCallback,
      handleSubmit = _ref.handleSubmit,
      definedUserName = _ref.definedUserName,
      skillLevel = _ref.skillLevel;

  var generateForm = function generateForm() {
    return definedUserName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "login-header"
    }, 'Logged in as... '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "login-header"
    }, definedUserName)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "login-header",
      value: "Login ->",
      type: "submit"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _defineProperty({
      type: "text",
      disabled: definedUserName ? true : false,
      onChange: userNameCallback,
      value: definedUserName || userName,
      placeholder: "enter username"
    }, "value", userName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: "password",
      value: userPass,
      onChange: userPassCallback
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    id: "login-form",
    className: skillLevel,
    onSubmit: handleSubmit
  }, generateForm());
}, areEqual));

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
/* harmony import */ var _millisecondstyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecondstyles.scss */ "./src/components/MillisecondTimer/millisecondstyles.scss");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var timerTime = _ref.timerTime,
      timerOnCallback = _ref.timerOnCallback,
      skillLevel = _ref.skillLevel;
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
/* harmony import */ var _skillstyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skillstyles.scss */ "./src/components/SkillLevelSelector/skillstyles.scss");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var skillCallback = _ref.skillCallback,
      skillLevel = _ref.skillLevel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: skillLevel,
    id: "skill-level-selector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "beginner",
    onClick: skillCallback
  }, "Beginner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "intermediate",
    onClick: skillCallback
  }, "Intermediate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "advanced",
    onClick: skillCallback
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
/* harmony import */ var _smileystyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smileystyles.scss */ "./src/components/SmileyBar/smileystyles.scss");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var surprised = _ref.surprised,
      flagsRemaining = _ref.flagsRemaining,
      resetCallback = _ref.resetCallback;
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

/***/ "./src/components/useInterval.js":
/*!***************************************!*\
  !*** ./src/components/useInterval.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/


function useInterval(callback, delay) {
  var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Remember the latest callback.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function tick() {
      savedCallback.current();
    } // If victory is declared stop the timer...


    if (delay === -1) {
      return;
    }

    ;

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);

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
            _ref7$query = _ref7.query, skillLevel = _ref7$query.skillLevel, timerTime = _ref7$query.resultTime, definedUserName = _ref7$query.definedUserName;
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cloudfront = process.env.Cloudfront;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  htmlStart: function htmlStart(data) {
    return "<!DOCTYPE HTML>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Minesweeper</title>\n        <link rel=\"icon\" type=\"image/png\" href='".concat(Cloudfront, "/mine-images/minecon.png'/>\n        <link rel='stylesheet' href='").concat(Cloudfront, "/build/public/index.min.css'/>\n        <!-- Server Side Rendering of Page Data -->\n        <script>window.__INITIAL__DATA__=").concat(JSON.stringify(data), "</script>\n      </head>\n    <body>\n    <div id=\"minesweeper-root\">\n    ");
  },
  htmlEnd: "\n      </div>\n      <!-- <script src='".concat(Cloudfront, "/build/public/public-bundle.js'></script> -->\n      <script src='/static/index.js'></script>\n    </body>\n</html>\n")
});

/***/ }),

/***/ "./src/components/App/minesweeper.scss":
/*!*********************************************!*\
  !*** ./src/components/App/minesweeper.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/components/LoginForm/loginstyles.scss":
/*!***************************************************!*\
  !*** ./src/components/LoginForm/loginstyles.scss ***!
  \***************************************************/
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
/* harmony import */ var Components_App_App_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/App/App.js */ "./src/components/App/App.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes.js */ "./src/ssr-server/routes.js");
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Database/controllers/controllers.js */ "./db/controllers/controllers.js");
/* harmony import */ var Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Database_controllers_controllers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template.js */ "./src/ssr-server/template.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var htmlStart = _template_js__WEBPACK_IMPORTED_MODULE_9__.default.htmlStart,
    htmlEnd = _template_js__WEBPACK_IMPORTED_MODULE_9__.default.htmlEnd;
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var port = 3500;
app.use("/static", express__WEBPACK_IMPORTED_MODULE_0___default().static('dist/public'));
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
            minesweeperStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Components_App_App_js__WEBPACK_IMPORTED_MODULE_6__.default, null));
            res.write(htmlStart({
              topTimes: topTimes
            }));
            minesweeperStream.pipe(res, {
              end: false
            });
            minesweeperStream.on("end", function () {
              res.write(htmlEnd);
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
app.listen(port, function () {
  "Minesweeper App is listening on port-> ".concat(port);
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map