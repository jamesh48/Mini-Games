/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./globalUtils.js":
/*!************************!*\
  !*** ./globalUtils.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEffectOnlyOnUpdate": () => (/* binding */ useEffectOnlyOnUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // https://www.robinwieruch.de/react-useeffect-only-on-update

var useEffectOnlyOnUpdate = function useEffectOnlyOnUpdate(callback, dependencies, args) {
  var didMount = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (didMount.current) {
      callback(args);
    } else {
      didMount.current = true;
    }
  }, _toConsumableArray(dependencies));
};



/***/ }),

/***/ "./src/public/components/BoardComponents/Board.js":
/*!********************************************************!*\
  !*** ./src/public/components/BoardComponents/Board.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! BoardStore */ "./src/public/components/BoardComponents/BoardStore/boardStore.js");
/* harmony import */ var MainStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MainStore */ "./src/public/components/MainComponents/MainStore/mainStore.js");
/* harmony import */ var GlobalUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalUtils */ "./globalUtils.js");
/* harmony import */ var _winDetectionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winDetectionUtils.js */ "./src/public/components/BoardComponents/winDetectionUtils.js");
/* harmony import */ var _board_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board.scss */ "./src/public/components/BoardComponents/board.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useBoardContext = (0,BoardStore__WEBPACK_IMPORTED_MODULE_1__.useBoardContext)(),
      _useBoardContext2 = _slicedToArray(_useBoardContext, 2),
      _useBoardContext2$ = _useBoardContext2[0],
      currentPlayerMove = _useBoardContext2$.currentPlayerMove,
      confirmedBoxes = _useBoardContext2$.confirmedBoxes,
      boardDispatch = _useBoardContext2[1];

  var _useMainContext = (0,MainStore__WEBPACK_IMPORTED_MODULE_2__.useMainContext)(),
      _useMainContext2 = _slicedToArray(_useMainContext, 2),
      _useMainContext2$ = _useMainContext2[0],
      xPlayerName = _useMainContext2$.xPlayerName,
      oPlayerName = _useMainContext2$.oPlayerName,
      hasAlreadyWon = _useMainContext2$.hasAlreadyWon,
      mainDispatch = _useMainContext2[1];

  (0,GlobalUtils__WEBPACK_IMPORTED_MODULE_3__.useEffectOnlyOnUpdate)(function () {
    boardDispatch({
      type: 'TOGGLE CURRENT PLAYER MOVE'
    });
  }, [confirmedBoxes]);
  (0,GlobalUtils__WEBPACK_IMPORTED_MODULE_3__.useEffectOnlyOnUpdate)(function () {
    // currentPlayerMove === 'X' ? alert(`${(nameEntry?.xPlayer || 'X')} wins the Game!`) : alert(`${(nameEntry?.oPlayer || 'O')} wins the Game!`);
    // gamePlayMethods.updateScoreBoard(player);
    alert(hasAlreadyWon + ' wins the game!');
  }, [hasAlreadyWon]);

  detect_win: (0,GlobalUtils__WEBPACK_IMPORTED_MODULE_3__.useEffectOnlyOnUpdate)(function () {
    confirmedBoxes.forEach(function (box, boxIndex) {
      if (box.mark === currentPlayerMove) {
        var horizontalWin,
            verticalWin,
            rightDiagonalWin,
            leftDiagonalWin = false;

        if (boxIndex === 0 || boxIndex === 3 || boxIndex === 6) {
          horizontalWin = (0,_winDetectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.checkHorizontal)(boxIndex, confirmedBoxes, currentPlayerMove);
        }

        if (boxIndex === 0 || boxIndex === 1 || boxIndex === 2) {
          verticalWin = (0,_winDetectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.checkVertical)(boxIndex, confirmedBoxes, currentPlayerMove);
        }

        ;

        if (boxIndex === 0) {
          rightDiagonalWin = (0,_winDetectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.checkRightDiagonal)(boxIndex, confirmedBoxes, currentPlayerMove);
        }

        ;

        if (boxIndex === 2) {
          leftDiagonalWin = (0,_winDetectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.checkLeftDiagonal)(boxIndex, confirmedBoxes, currentPlayerMove);
        }

        ;

        if (horizontalWin || verticalWin || rightDiagonalWin || leftDiagonalWin) {
          mainDispatch({
            type: 'TOGGLE HAS ALREADY WON TRUE',
            payload: currentPlayerMove === 'X' ? xPlayerName || 'X' : oPlayerName || 'O'
          }); // gamePlayMethods.annouceWinner(player);
        }
      }
    });
  }, [confirmedBoxes]);

  var handleClick = function handleClick() {
    event.preventDefault();
    var _event = event,
        id = _event.target.id;
    var testId = id.split('-')[1];
    if (hasAlreadyWon || confirmedBoxes[testId].confirmed) return;
    boardDispatch({
      type: 'CONFIRM NEW BOX',
      payload: {
        id: testId,
        mark: currentPlayerMove
      }
    }); // var player = gamePlayMethods.countMoves(e);
    // setTimeout(() => { gamePlayMethods.detectWin(player) }, 1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "board"
  }, ['a', 'b', 'c'].map(function (row, rowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: rowIndex,
      className: "board-row"
    }, ['d', 'e', 'f'].map(function (column, columnIndex) {
      var currBox = rowIndex * 2 + (columnIndex + rowIndex);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        onClick: handleClick,
        key: columnIndex,
        className: "boxes",
        id: "box-".concat(currBox)
      }, confirmedBoxes[currBox].confirmed ? confirmedBoxes[currBox].mark : null);
    }));
  }));
});

/***/ }),

/***/ "./src/public/components/BoardComponents/BoardStore/boardReducers.js":
/*!***************************************************************************!*\
  !*** ./src/public/components/BoardComponents/BoardStore/boardReducers.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var currentPlayerMove = function currentPlayerMove() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'X';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE CURRENT PLAYER MOVE':
      return state === 'X' ? 'O' : 'X';

    default:
      return state;
  }
};

var confirmedBoxes = function confirmedBoxes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CONFIRM NEW BOX':
      var existing = state.slice();
      existing[action.payload.id] = {
        confirmed: true,
        mark: action.payload.mark
      };
      return existing;

    default:
      return state;
  }
};

var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  currentPlayerMove: currentPlayerMove,
  confirmedBoxes: confirmedBoxes
}));

/***/ }),

/***/ "./src/public/components/BoardComponents/BoardStore/boardStore.js":
/*!************************************************************************!*\
  !*** ./src/public/components/BoardComponents/BoardStore/boardStore.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBoardContext": () => (/* binding */ useBoardContext),
/* harmony export */   "BoardStoreProvider": () => (/* binding */ BoardStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boardReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardReducers.js */ "./src/public/components/BoardComponents/BoardStore/boardReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var BoardStoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  currentPlayerMove: 'X',
  confirmedBoxes: [{
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }, {
    confirmed: false,
    mark: null
  }]
};

var BoardStoreProvider = function BoardStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_boardReducers_js__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoardStoreContext.Provider, {
    value: store
  }, children);
};

var useBoardContext = function useBoardContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(BoardStoreContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/public/components/BoardComponents/winDetectionUtils.js":
/*!********************************************************************!*\
  !*** ./src/public/components/BoardComponents/winDetectionUtils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkHorizontal": () => (/* binding */ checkHorizontal),
/* harmony export */   "checkVertical": () => (/* binding */ checkVertical),
/* harmony export */   "checkLeftDiagonal": () => (/* binding */ checkLeftDiagonal),
/* harmony export */   "checkRightDiagonal": () => (/* binding */ checkRightDiagonal)
/* harmony export */ });
var checkHorizontal = function checkHorizontal(id, confirmedBoxes, player) {
  var secondBox = confirmedBoxes[id + 1].mark;
  var thirdBox = confirmedBoxes[id + 2].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  }
};

var checkVertical = function checkVertical(id, confirmedBoxes, player) {
  var secondBox = confirmedBoxes[id + 3].mark;
  var thirdBox = confirmedBoxes[id + 6].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  }
};

var checkRightDiagonal = function checkRightDiagonal(id, confirmedBoxes, player) {
  var secondBox = confirmedBoxes[id + 4].mark;
  var thirdBox = confirmedBoxes[id + 8].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  }

  ;
};

var checkLeftDiagonal = function checkLeftDiagonal(id, confirmedBoxes, player) {
  var secondBox = confirmedBoxes[id + 2].mark;
  var thirdBox = confirmedBoxes[id + 4].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  }

  ;
};



/***/ }),

/***/ "./src/public/components/MainComponents/MainComponent.js":
/*!***************************************************************!*\
  !*** ./src/public/components/MainComponents/MainComponent.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerHeaderComponents_PlayerHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PlayerHeaderComponents/PlayerHeaders.js */ "./src/public/components/PlayerHeaderComponents/PlayerHeaders.js");
/* harmony import */ var _PlayerHeaderComponents_PlayerHeaderStore_playerHeaderStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js */ "./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js");
/* harmony import */ var _BoardComponents_BoardStore_boardStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BoardComponents/BoardStore/boardStore.js */ "./src/public/components/BoardComponents/BoardStore/boardStore.js");
/* harmony import */ var _BoardComponents_Board_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardComponents/Board.js */ "./src/public/components/BoardComponents/Board.js");
/* harmony import */ var Components_PlayerNameEntryComponents_PlayerNameEntry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/PlayerNameEntryComponents/PlayerNameEntry.js */ "./src/public/components/PlayerNameEntryComponents/PlayerNameEntry.js");
/* harmony import */ var _main_styles_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-styles/reset.scss */ "./src/public/components/MainComponents/main-styles/reset.scss");
/* harmony import */ var _main_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-styles/main.scss */ "./src/public/components/MainComponents/main-styles/main.scss");
/* harmony import */ var _main_styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-styles/global.scss */ "./src/public/components/MainComponents/main-styles/global.scss");
 // Player Header


 // Board







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlayerHeaderComponents_PlayerHeaderStore_playerHeaderStore_js__WEBPACK_IMPORTED_MODULE_2__.PlayerHeaderStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlayerHeaderComponents_PlayerHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BoardComponents_BoardStore_boardStore_js__WEBPACK_IMPORTED_MODULE_3__.BoardStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BoardComponents_Board_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_PlayerNameEntryComponents_PlayerNameEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});

/***/ }),

/***/ "./src/public/components/MainComponents/MainStore/mainReducers.js":
/*!************************************************************************!*\
  !*** ./src/public/components/MainComponents/MainStore/mainReducers.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var hasAlreadyWon = function hasAlreadyWon() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE HAS ALREADY WON TRUE':
      return action.payload;

    default:
      return state;
  }

  ;
};

var xPlayerName = function xPlayerName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SUBMIT X PLAYER NAME':
      return action.payload;

    default:
      return state;
  }

  ;
};

var oPlayerName = function oPlayerName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SUBMIT O PLAYER NAME':
      return action.payload;

    default:
      return state;
  }
};

var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  hasAlreadyWon: hasAlreadyWon,
  xPlayerName: xPlayerName,
  oPlayerName: oPlayerName
}));

/***/ }),

/***/ "./src/public/components/MainComponents/MainStore/mainStore.js":
/*!*********************************************************************!*\
  !*** ./src/public/components/MainComponents/MainStore/mainStore.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMainContext": () => (/* binding */ useMainContext),
/* harmony export */   "MainStoreProvider": () => (/* binding */ MainStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mainReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainReducers.js */ "./src/public/components/MainComponents/MainStore/mainReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var MainStoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  hasAlreadyWon: null,
  xPlayerName: null,
  oPlayerName: null
};

var MainStoreProvider = function MainStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_mainReducers_js__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainStoreContext.Provider, {
    value: store
  }, children);
};

var useMainContext = function useMainContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(MainStoreContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderReducers.js":
/*!************************************************************************************************!*\
  !*** ./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderReducers.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var xPlayerWinCount = function xPlayerWinCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT X PLAYER WIN COUNT':
      return state + 1;

    default:
      return state;
  }

  ;
};

var oPlayerWinCount = function oPlayerWinCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT O PLAYER WIN COUNT':
      return state + 1;

    default:
      return state;
  }

  ;
};

var combineReducers = function combineReducers(slices) {
  return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, slices[prop](acc[prop], action)));
    }, state);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
  xPlayerWinCount: xPlayerWinCount,
  oPlayerWinCount: oPlayerWinCount
}));

/***/ }),

/***/ "./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js":
/*!*********************************************************************************************!*\
  !*** ./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlayerHeaderContext": () => (/* binding */ usePlayerHeaderContext),
/* harmony export */   "PlayerHeaderStoreProvider": () => (/* binding */ PlayerHeaderStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playerHeaderReducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerHeaderReducers.js */ "./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderReducers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers


var PlayerHeaderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var initialState = {
  oPlayerWinCount: 0,
  xPlayerWinCount: 0
};

var PlayerHeaderStoreProvider = function PlayerHeaderStoreProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_playerHeaderReducers_js__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PlayerHeaderContext.Provider, {
    value: store
  }, children);
};

var usePlayerHeaderContext = function usePlayerHeaderContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(PlayerHeaderContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/public/components/PlayerHeaderComponents/PlayerHeaders.js":
/*!***********************************************************************!*\
  !*** ./src/public/components/PlayerHeaderComponents/PlayerHeaders.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerHeaderStore_playerHeaderStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerHeaderStore/playerHeaderStore.js */ "./src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js");
/* harmony import */ var MainStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MainStore */ "./src/public/components/MainComponents/MainStore/mainStore.js");
/* harmony import */ var _playerHeaders_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerHeaders.scss */ "./src/public/components/PlayerHeaderComponents/playerHeaders.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useMainContext = (0,MainStore__WEBPACK_IMPORTED_MODULE_2__.useMainContext)(),
      _useMainContext2 = _slicedToArray(_useMainContext, 1),
      _useMainContext2$ = _useMainContext2[0],
      xPlayerName = _useMainContext2$.xPlayerName,
      oPlayerName = _useMainContext2$.oPlayerName;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "player-headers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "player-name-headers",
    id: "p1-name-header"
  }, xPlayerName || 'X Player-> ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "player-name-tally",
    id: "p-x-tally"
  }, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "player-name-headers",
    id: "p2-name-header"
  }, oPlayerName || 'O Player-> ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "player-name-tally",
    id: "p-o-tally"
  }, "0")));
});

/***/ }),

/***/ "./src/public/components/PlayerNameEntryComponents/PlayerNameEntry.js":
/*!****************************************************************************!*\
  !*** ./src/public/components/PlayerNameEntryComponents/PlayerNameEntry.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var MainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! MainStore */ "./src/public/components/MainComponents/MainStore/mainStore.js");
/* harmony import */ var _playerNameEntry_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerNameEntry.scss */ "./src/public/components/PlayerNameEntryComponents/playerNameEntry.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useMainContext = (0,MainStore__WEBPACK_IMPORTED_MODULE_1__.useMainContext)(),
      _useMainContext2 = _slicedToArray(_useMainContext, 2),
      _useMainContext2$ = _useMainContext2[0],
      xPlayerName = _useMainContext2$.xPlayerName,
      oPlayerName = _useMainContext2$.oPlayerName,
      mainDispatch = _useMainContext2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      localXPlayerName = _useState2[0],
      setLocalXPlayerName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      localOPlayerName = _useState4[0],
      setLocalOPlayerName = _useState4[1];

  var handleSubmit = function handleSubmit() {
    event.preventDefault();

    if (localXPlayerName && localOPlayerName) {
      mainDispatch({
        type: 'SUBMIT X PLAYER NAME',
        payload: localXPlayerName
      });
      mainDispatch({
        type: 'SUBMIT O PLAYER NAME',
        payload: localOPlayerName
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "player-name-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", {
    id: "enter-your-players"
  }, "Enter Your Players!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "enter-players",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "player-name-input",
    autoComplete: "off",
    id: "p1",
    type: "text",
    placeholder: "X Player",
    value: localXPlayerName,
    onChange: function onChange() {
      return xPlayerName ? null : setLocalXPlayerName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "player-name-input",
    autoComplete: "off",
    id: "p2",
    type: "text",
    placeholder: "O Player",
    value: localOPlayerName,
    onChange: function onChange() {
      return oPlayerName ? null : setLocalOPlayerName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "player-name-input",
    autoComplete: "off",
    id: "board-size",
    type: "text",
    placeholder: "Board Width"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    value: "Submit",
    hidden: true
  }, "Submit Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "new-game-button",
    type: "button",
    value: "New Game!"
  })));
});

/***/ }),

/***/ "./src/public/components/TicTacToe.js":
/*!********************************************!*\
  !*** ./src/public/components/TicTacToe.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainComponents_MainStore_mainStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainComponents/MainStore/mainStore.js */ "./src/public/components/MainComponents/MainStore/mainStore.js");
/* harmony import */ var _MainComponents_MainComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainComponents/MainComponent.js */ "./src/public/components/MainComponents/MainComponent.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainComponents_MainStore_mainStore_js__WEBPACK_IMPORTED_MODULE_1__.MainStoreProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainComponents_MainComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./src/server/template.js":
/*!********************************!*\
  !*** ./src/server/template.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlStart": () => (/* binding */ htmlStart),
/* harmony export */   "htmlEnd": () => (/* binding */ htmlEnd)
/* harmony export */ });
// const { Cloudfront, DEV_ENV } = process.env;
var htmlStart = function htmlStart(data) {
  return "<!DOCTYPE HTML>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Tic Tac Toe</title>\n        <link rel='stylesheet' href='/static/index.css'/>\n      </head>\n    <body>\n    <div id=\"tictactoe-root\">";
};

var htmlEnd = function htmlEnd() {
  return "</div>\n    </body>\n    <script src='/static/index.js'></script>\n</html>";
};



/***/ }),

/***/ "./src/public/components/BoardComponents/board.scss":
/*!**********************************************************!*\
  !*** ./src/public/components/BoardComponents/board.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/public/components/MainComponents/main-styles/global.scss":
/*!**********************************************************************!*\
  !*** ./src/public/components/MainComponents/main-styles/global.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/public/components/MainComponents/main-styles/main.scss":
/*!********************************************************************!*\
  !*** ./src/public/components/MainComponents/main-styles/main.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/public/components/MainComponents/main-styles/reset.scss":
/*!*********************************************************************!*\
  !*** ./src/public/components/MainComponents/main-styles/reset.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/public/components/PlayerHeaderComponents/playerHeaders.scss":
/*!*************************************************************************!*\
  !*** ./src/public/components/PlayerHeaderComponents/playerHeaders.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/public/components/PlayerNameEntryComponents/playerNameEntry.scss":
/*!******************************************************************************!*\
  !*** ./src/public/components/PlayerNameEntryComponents/playerNameEntry.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Components_TicTacToe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/TicTacToe.js */ "./src/public/components/TicTacToe.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ "./src/server/template.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);






var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use('*', function (req, res, next) {
  console.log(req.method, req.originalUrl);
  next();
});
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()["static"](path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, '../../dist/public')));
app.get('/', function (req, res) {
  var ticTacToeStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Components_TicTacToe_js__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  res.write((0,_template_js__WEBPACK_IMPORTED_MODULE_4__.htmlStart)());
  ticTacToeStream.pipe(res, {
    end: false
  });
  ticTacToeStream.on('end', function () {
    res.write((0,_template_js__WEBPACK_IMPORTED_MODULE_4__.htmlEnd)());
    res.end();
  });
});
var port = 3650;
app.listen(port, function () {
  return console.log("Tic Tac Toe App is listening on port ".concat(port));
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map