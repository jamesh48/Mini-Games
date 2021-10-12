/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts-src/public/components/Board/Squares/sweepsquarestyles.scss":
/*!***********************************************************************!*\
  !*** ./ts-src/public/components/Board/Squares/sweepsquarestyles.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/Board/boardstyles.scss":
/*!*********************************************************!*\
  !*** ./ts-src/public/components/Board/boardstyles.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/Home/header.scss":
/*!***************************************************!*\
  !*** ./ts-src/public/components/Home/header.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/Home/home.scss":
/*!*************************************************!*\
  !*** ./ts-src/public/components/Home/home.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/Leaderboard/leaderboard.scss":
/*!***************************************************************!*\
  !*** ./ts-src/public/components/Leaderboard/leaderboard.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/MillisecondTimer/millisecondstyles.scss":
/*!**************************************************************************!*\
  !*** ./ts-src/public/components/MillisecondTimer/millisecondstyles.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/Minesweeper/minesweeper.scss":
/*!***************************************************************!*\
  !*** ./ts-src/public/components/Minesweeper/minesweeper.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/SkillLevelSelector/skillstyles.scss":
/*!**********************************************************************!*\
  !*** ./ts-src/public/components/SkillLevelSelector/skillstyles.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/SmileyBar/smileystyles.scss":
/*!**************************************************************!*\
  !*** ./ts-src/public/components/SmileyBar/smileystyles.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/public/components/UserForms/userForms.scss":
/*!***********************************************************!*\
  !*** ./ts-src/public/components/UserForms/userForms.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ts-src/constants.ts":
/*!*****************************!*\
  !*** ./ts-src/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__prod__": () => (/* binding */ __prod__),
/* harmony export */   "COOKIE_NAME": () => (/* binding */ COOKIE_NAME)
/* harmony export */ });
const __prod__ = "development" === 'production';
const COOKIE_NAME = 'qid';


/***/ }),

/***/ "./ts-src/database/entities/Advanced_Scores.ts":
/*!*****************************************************!*\
  !*** ./ts-src/database/entities/Advanced_Scores.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedScore": () => (/* binding */ AdvancedScore)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AdvancedScore = class AdvancedScore {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey)({ type: 'number' })
], AdvancedScore.prototype, "id", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date' })
], AdvancedScore.prototype, "createdAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date', onUpdate: () => new Date() })
], AdvancedScore.prototype, "updatedAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'text' })
], AdvancedScore.prototype, "username", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'number' })
], AdvancedScore.prototype, "time", void 0);
AdvancedScore = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)()
], AdvancedScore);



/***/ }),

/***/ "./ts-src/database/entities/Beginner_Scores.ts":
/*!*****************************************************!*\
  !*** ./ts-src/database/entities/Beginner_Scores.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeginnerScore": () => (/* binding */ BeginnerScore)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BeginnerScore = class BeginnerScore {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey)({ type: 'number' })
], BeginnerScore.prototype, "id", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date' })
], BeginnerScore.prototype, "createdAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date', onUpdate: () => new Date() })
], BeginnerScore.prototype, "updatedAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'text' })
], BeginnerScore.prototype, "username", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'number' })
], BeginnerScore.prototype, "time", void 0);
BeginnerScore = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)()
], BeginnerScore);



/***/ }),

/***/ "./ts-src/database/entities/Intermediate_Scores.ts":
/*!*********************************************************!*\
  !*** ./ts-src/database/entities/Intermediate_Scores.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntermediateScore": () => (/* binding */ IntermediateScore)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let IntermediateScore = class IntermediateScore {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey)({ type: 'number' })
], IntermediateScore.prototype, "id", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date' })
], IntermediateScore.prototype, "createdAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date', onUpdate: () => new Date() })
], IntermediateScore.prototype, "updatedAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'text' })
], IntermediateScore.prototype, "username", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'number' })
], IntermediateScore.prototype, "time", void 0);
IntermediateScore = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)()
], IntermediateScore);



/***/ }),

/***/ "./ts-src/database/entities/User.ts":
/*!******************************************!*\
  !*** ./ts-src/database/entities/User.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let User = class User {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__.Int),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey)({ type: 'number' })
], User.prototype, "id", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date' })
], User.prototype, "createdAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'date', onUpdate: () => new Date() })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => String),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'text', unique: true })
], User.prototype, "username", void 0);
__decorate([
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({ type: 'text' })
], User.prototype, "password", void 0);
User = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(),
    (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)()
], User);



/***/ }),

/***/ "./ts-src/database/mikro-orm.config.ts":
/*!*********************************************!*\
  !*** ./ts-src/database/mikro-orm.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TSDatabase/entities/Beginner_Scores */ "./ts-src/database/entities/Beginner_Scores.ts");
/* harmony import */ var TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSDatabase/entities/Intermediate_Scores */ "./ts-src/database/entities/Intermediate_Scores.ts");
/* harmony import */ var TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! TSDatabase/entities/Advanced_Scores */ "./ts-src/database/entities/Advanced_Scores.ts");
/* harmony import */ var TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TSDatabase/entities/User */ "./ts-src/database/entities/User.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./ts-src/constants.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    migrations: {
        path: "./ts-src/database/migrations",
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_0__.BeginnerScore, TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__.IntermediateScore, TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_2__.AdvancedScore, TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_3__.User],
    dbName: "Minesweeper",
    type: "postgresql",
    debug: !_constants__WEBPACK_IMPORTED_MODULE_4__.__prod__,
    port: 5432,
    user: _constants__WEBPACK_IMPORTED_MODULE_4__.__prod__ ? "ubuntu" : "jameshrivnak",
    password: undefined
});


/***/ }),

/***/ "./ts-src/generated/graphql.tsx":
/*!**************************************!*\
  !*** ./ts-src/generated/graphql.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegularUserFragmentDoc": () => (/* binding */ RegularUserFragmentDoc),
/* harmony export */   "LoginDocument": () => (/* binding */ LoginDocument),
/* harmony export */   "useLoginMutation": () => (/* binding */ useLoginMutation),
/* harmony export */   "LogoutDocument": () => (/* binding */ LogoutDocument),
/* harmony export */   "useLogoutMutation": () => (/* binding */ useLogoutMutation),
/* harmony export */   "AdvancedScoreDocument": () => (/* binding */ AdvancedScoreDocument),
/* harmony export */   "useAdvancedScoreMutation": () => (/* binding */ useAdvancedScoreMutation),
/* harmony export */   "BeginnerScoreDocument": () => (/* binding */ BeginnerScoreDocument),
/* harmony export */   "useBeginnerScoreMutation": () => (/* binding */ useBeginnerScoreMutation),
/* harmony export */   "IntermediateScoreDocument": () => (/* binding */ IntermediateScoreDocument),
/* harmony export */   "useIntermediateScoreMutation": () => (/* binding */ useIntermediateScoreMutation),
/* harmony export */   "RegisterDocument": () => (/* binding */ RegisterDocument),
/* harmony export */   "useRegisterMutation": () => (/* binding */ useRegisterMutation),
/* harmony export */   "GetAdvancedScoresDocument": () => (/* binding */ GetAdvancedScoresDocument),
/* harmony export */   "useGetAdvancedScoresQuery": () => (/* binding */ useGetAdvancedScoresQuery),
/* harmony export */   "useGetAdvancedScoresLazyQuery": () => (/* binding */ useGetAdvancedScoresLazyQuery),
/* harmony export */   "GetBeginnerScoresDocument": () => (/* binding */ GetBeginnerScoresDocument),
/* harmony export */   "useGetBeginnerScoresQuery": () => (/* binding */ useGetBeginnerScoresQuery),
/* harmony export */   "useGetBeginnerScoresLazyQuery": () => (/* binding */ useGetBeginnerScoresLazyQuery),
/* harmony export */   "GetIntermediateScoresDocument": () => (/* binding */ GetIntermediateScoresDocument),
/* harmony export */   "useGetIntermediateScoresQuery": () => (/* binding */ useGetIntermediateScoresQuery),
/* harmony export */   "useGetIntermediateScoresLazyQuery": () => (/* binding */ useGetIntermediateScoresLazyQuery),
/* harmony export */   "MeDocument": () => (/* binding */ MeDocument),
/* harmony export */   "useMeQuery": () => (/* binding */ useMeQuery),
/* harmony export */   "useMeLazyQuery": () => (/* binding */ useMeLazyQuery)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const RegularUserFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment RegularUser on User {
  id
  username
}
    `;
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useLoginMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LoginDocument, options);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation Logout {
  logout
}
    `;
function useLogoutMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LogoutDocument, options);
}
const AdvancedScoreDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation AdvancedScore($username: String!, $time: Float!) {
  newAdvancedScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
function useAdvancedScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdvancedScoreDocument, options);
}
const BeginnerScoreDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation BeginnerScore($username: String!, $time: Float!) {
  newBeginnerScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
function useBeginnerScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(BeginnerScoreDocument, options);
}
const IntermediateScoreDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation IntermediateScore($username: String!, $time: Float!) {
  newIntermediateScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
function useIntermediateScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(IntermediateScoreDocument, options);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useRegisterMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(RegisterDocument, options);
}
const GetAdvancedScoresDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    query GetAdvancedScores {
  allAdvancedScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;
function useGetAdvancedScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetAdvancedScoresDocument, options);
}
function useGetAdvancedScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetAdvancedScoresDocument, options);
}
const GetBeginnerScoresDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    query GetBeginnerScores {
  allBeginnerScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;
function useGetBeginnerScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetBeginnerScoresDocument, options);
}
function useGetBeginnerScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetBeginnerScoresDocument, options);
}
const GetIntermediateScoresDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    query GetIntermediateScores {
  allIntermediateScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;
function useGetIntermediateScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetIntermediateScoresDocument, options);
}
function useGetIntermediateScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetIntermediateScoresDocument, options);
}
const MeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
function useMeQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(MeDocument, options);
}
function useMeLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(MeDocument, options);
}


/***/ }),

/***/ "./ts-src/public/GlobalStore/GlobalStore.tsx":
/*!***************************************************!*\
  !*** ./ts-src/public/GlobalStore/GlobalStore.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGlobalContext": () => (/* binding */ useGlobalContext),
/* harmony export */   "GlobalStoreProvider": () => (/* binding */ GlobalStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalReducers */ "./ts-src/public/GlobalStore/globalReducers.ts");


;
const initialState = {
    dimensions: { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 },
    topTimes: [],
    definedUserName: null,
    timerOn: false
};
const GlobalStoreContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext([initialState, () => { }]);
const GlobalStoreProvider = ({ children }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_globalReducers__WEBPACK_IMPORTED_MODULE_1__.default, initialState);
    const store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [state, dispatch], [state]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStoreContext.Provider, { value: store }, children));
};
const useGlobalContext = () => {
    const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
};



/***/ }),

/***/ "./ts-src/public/GlobalStore/globalReducers.ts":
/*!*****************************************************!*\
  !*** ./ts-src/public/GlobalStore/globalReducers.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timerOn = (state = false, action) => {
    switch (action.type) {
        case "SWITCH TIMER ON":
            return true;
        case "SWITCH TIMER OFF":
            return false;
        case "FREEZE TIMER STATE WIN":
            return "FREEZE WIN";
        case "FREEZE TIMER STATE DEAD":
            return 'FREEZE DEAD';
        case "FREEZE TIMER STATE VICTORY":
            return 'VICTORY';
        default:
            return state;
    }
};
const dimensions = (state = { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 }, action) => {
    switch (action.type) {
        case "SET BEGINNER DIMENSIONS":
            return { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 };
        case "SET INTERMEDIATE DIMENSIONS":
            return { skillLevel: 'intermediate', verticalDimension: 16, horizontalDimension: 16, numberOfMines: 40 };
        case 'SET ADVANCED DIMENSIONS':
            return { skillLevel: 'advanced', verticalDimension: 16, horizontalDimension: 30, numberOfMines: 99 };
        default:
            return state;
    }
    ;
};
const topTimes = (state = [], action) => {
    switch (action.type) {
        case "SET TOP TIMES":
            return action.payload.topTimes;
        default:
            return state;
    }
};
const definedUserName = (state = null, action) => {
    switch (action.type) {
        case "SET DEFINED USERNAME":
            return action.payload.userName;
        case "UNSET DEFINED USERNAME":
            return null;
        default:
            return state;
    }
};
const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: slices[prop](acc[prop], action) })), state);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
    dimensions,
    definedUserName,
    topTimes,
    timerOn
}));


/***/ }),

/***/ "./ts-src/public/components/Board/Board.tsx":
/*!**************************************************!*\
  !*** ./ts-src/public/components/Board/Board.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! BoardStore */ "./ts-src/public/components/Board/BoardStore/BoardStore.tsx");
/* harmony import */ var _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEffectBoardHooks */ "./ts-src/public/components/Board/useEffectBoardHooks.tsx");
/* harmony import */ var CustomHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! CustomHooks */ "./ts-src/public/components/customHooks.tsx");
/* harmony import */ var TSComponents_Board_Squares_Square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSComponents/Board/Squares/Square */ "./ts-src/public/components/Board/Squares/Square.tsx");
/* harmony import */ var _boardstyles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boardstyles.scss */ "./ts-src/public/components/Board/boardstyles.scss");







const Board = () => {
    const [{ dimensions, definedUserName, timerOn, dimensions: { skillLevel } }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const [{ flippers, mineArr, numbers, scrollBoard, colorDelay }, boardDispatch] = (0,BoardStore__WEBPACK_IMPORTED_MODULE_2__.useBoardContext)();
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.freezeColorDelayEffect(definedUserName, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.stopColorIterationEffect(colorDelay, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.freezeScrollBoardEffect(scrollBoard);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.generateMinesEffect(dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.generateNumberEffect(mineArr, dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.resetGameEffectOnSmileyOrSkill(timerOn, dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);
    (0,CustomHooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(() => boardDispatch({ type: 'ITERATE COLORS' }), colorDelay);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.revealFlipperEffect({ mineArr, flippers, numbers, globalDispatch, boardDispatch });
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.resetOnSkillLevelChangeEffect(skillLevel, globalDispatch);
    const setScrollBoardCallback = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => boardDispatch({ type: "TOGGLE SCROLLBOARD" }), []);
    const handleScroll = (e) => boardDispatch({
        type: "MODULATE COLOR DELAY",
        payload: { newColorDelay: e.deltaY },
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "play-board", onWheel: (e) => colorDelay ? handleScroll(e) : null, onMouseEnter: () => colorDelay ? setScrollBoardCallback() : null, onMouseLeave: () => colorDelay ? setScrollBoardCallback() : null }, [...new Array(dimensions.verticalDimension)].map((_, rowIndex) => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: rowIndex, className: 'sweep-row' }, [...new Array(dimensions.horizontalDimension)].map((_, sqrIndex) => {
            const currTile = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Board_Squares_Square__WEBPACK_IMPORTED_MODULE_5__.default, { key: sqrIndex, currTile: currTile }));
        })));
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./ts-src/public/components/Board/BoardStore/BoardStore.tsx":
/*!******************************************************************!*\
  !*** ./ts-src/public/components/Board/BoardStore/BoardStore.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBoardContext": () => (/* binding */ useBoardContext),
/* harmony export */   "BoardStoreProvider": () => (/* binding */ BoardStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boardReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardReducers */ "./ts-src/public/components/Board/BoardStore/boardReducers.ts");


const initialState = {
    scrollBoard: false,
    colorDelay: 1000,
    flippers: [],
    mineArr: [],
    numbers: {},
    surprised: false,
    flagsRemaining: 10,
    colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num']
};
const BoardContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext([initialState, () => { }]);
const BoardStoreProvider = ({ children }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_boardReducers__WEBPACK_IMPORTED_MODULE_1__.default, initialState);
    const store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [state, dispatch], [state]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoardContext.Provider, { value: store }, children));
};
function useBoardContext() {
    const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(BoardContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    ;
    return context;
}



/***/ }),

/***/ "./ts-src/public/components/Board/BoardStore/boardActions.ts":
/*!*******************************************************************!*\
  !*** ./ts-src/public/components/Board/BoardStore/boardActions.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
const iterateColors = (existingColors) => {
    const lastColor = existingColors.pop();
    existingColors.unshift(lastColor);
    return [...existingColors];
};
const modulateColorDelay = (existing, newColorDelay) => {
    if ((existing + newColorDelay) > 25) {
        newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5
            : newColorDelay < 0 ? newColorDelay / 2.5
                : 1;
        return existing + newColorDelay;
    }
    return existing;
};
const revealFlippers = (existingFlippers, mines) => {
    existingFlippers = existingFlippers.map((flipper, index) => {
        if (flipper === 'flag' || (mines === null || mines === void 0 ? void 0 : mines.includes(index))) {
            return 'flag';
        }
        else {
            return true;
        }
    });
    return [...existingFlippers];
};
const flipNormalTile = (existingFlippers, flippedTile) => {
    existingFlippers.splice(flippedTile, 1, true);
    return [...existingFlippers];
};
const flipRecursedTiles = (existingFlippers, recursedTiles) => {
    for (let i = 0; i < recursedTiles.length; i++) {
        existingFlippers.splice(recursedTiles[i], 1, true);
    }
    return [...existingFlippers];
};
const revealDeadFlippers = (existingFlippers) => {
    existingFlippers = existingFlippers.map((_, index) => {
        if (index === 0) {
            return 'dead';
        }
        else {
            return true;
        }
    });
    return [...existingFlippers];
};
const setFlagFlipped = (existingFlippers, flagFlipped) => {
    if (existingFlippers[flagFlipped] === 'flag') {
        existingFlippers.splice(flagFlipped, 1, false);
    }
    else {
        existingFlippers.splice(flagFlipped, 1, 'flag');
    }
    return [...existingFlippers];
};
const generateMines = ({ numberOfMines, verticalDimension, horizontalDimension }) => {
    let generatedMines = [];
    while (generatedMines.length < numberOfMines) {
        const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
        if (!generatedMines.includes(mineCanidate)) {
            generatedMines.push(mineCanidate);
        }
    }
    ;
    return generatedMines;
};
const generateNumbers = ({ mineArr, verticalDimension, horizontalDimension }) => {
    let board = [...Array(verticalDimension * horizontalDimension).keys()];
    let numBoard = {};
    mineArr === null || mineArr === void 0 ? void 0 : mineArr.forEach((mine, _, mines) => {
        let tLD = horizontalDimension + 1;
        if (board.includes(mine - tLD) && (((mine - tLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine - tLD)) {
            if (numBoard[mine - tLD]) {
                numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
            }
            else {
                numBoard[mine - tLD] = 1;
            }
        }
        const tD = horizontalDimension;
        if (board.includes(mine - tD) && !mines.includes(mine - tD)) {
            if (numBoard[mine - tD]) {
                numBoard[mine - tD] = numBoard[mine - tD] + 1;
            }
            else {
                numBoard[mine - tD] = 1;
            }
        }
        const tRD = horizontalDimension - 1;
        if (board.includes(mine - tRD) && ((mine - tRD) % horizontalDimension !== 0) && !mines.includes(mine - tRD)) {
            if (numBoard[mine - tRD]) {
                numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
            }
            else {
                numBoard[mine - tRD] = 1;
            }
        }
        if (board.includes(mine + 1) && ((mine + 1) % horizontalDimension !== 0) && !mines.includes(mine + 1)) {
            if (numBoard[mine + 1]) {
                numBoard[mine + 1] = numBoard[mine + 1] + 1;
            }
            else {
                numBoard[mine + 1] = 1;
            }
        }
        const bRD = horizontalDimension + 1;
        if (board.includes(mine + bRD) && ((mine + bRD) % horizontalDimension !== 0) && !mines.includes(mine + bRD)) {
            if (numBoard[mine + bRD]) {
                numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
            }
            else {
                numBoard[mine + bRD] = 1;
            }
        }
        const bD = horizontalDimension;
        if (board.includes(mine + bD) && !mines.includes(mine + bD)) {
            if (numBoard[mine + bD]) {
                numBoard[mine + bD] = numBoard[mine + bD] + 1;
            }
            else {
                numBoard[mine + bD] = 1;
            }
        }
        const bLD = horizontalDimension - 1;
        if (board.includes(mine + bLD) && (((mine + bLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine + bLD)) {
            if (numBoard[mine + bLD]) {
                numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
            }
            else {
                numBoard[mine + bLD] = 1;
            }
        }
        if (board.includes(mine - 1) && (mine % horizontalDimension !== 0) && !mines.includes(mine - 1)) {
            if (numBoard[mine - 1]) {
                numBoard[mine - 1] = numBoard[mine - 1] + 1;
            }
            else {
                numBoard[mine - 1] = 1;
            }
        }
    });
    return numBoard;
};



/***/ }),

/***/ "./ts-src/public/components/Board/BoardStore/boardReducers.ts":
/*!********************************************************************!*\
  !*** ./ts-src/public/components/Board/BoardStore/boardReducers.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boardActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardActions */ "./ts-src/public/components/Board/BoardStore/boardActions.ts");

const scrollBoard = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE SCROLLBOARD':
            return !state;
        default:
            return state;
    }
};
const colorDelay = (state = 1000, action) => {
    switch (action.type) {
        case "UNSET COLOR DELAY":
            return null;
        case "SET COLOR DELAY":
            return 1000;
        case "MODULATE COLOR DELAY":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.modulateColorDelay)(state, action.payload.newColorDelay);
        default:
            return state;
    }
    ;
};
const colors = (state = ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'], action) => {
    switch (action.type) {
        case "ITERATE COLORS":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.iterateColors)(state.slice());
        case "START COLOR ITERATION":
            return ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'];
        case "STOP COLOR ITERATION":
            return null;
        default:
            return state;
    }
};
const flippers = (state, action) => {
    switch (action.type) {
        case "RESET FLIPPERS":
            return action.payload;
        case "SET FLAG FLIPPED":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.setFlagFlipped)(state.slice(), action.payload.flagFlipped);
        case "FLIP NORMAL TILE":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.flipNormalTile)(state.slice(), action.payload.flippedTile);
        case "FLIP RECURSED TILES":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.flipRecursedTiles)(state.slice(), action.payload);
        case "REVEAL DEAD FLIPPERS":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.revealDeadFlippers)(state.slice());
        case "REVEAL FLIPPERS":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.revealFlippers)(state.slice(), action.payload.mineArr);
        default:
            return state;
    }
    ;
};
const mineArr = (state = [], action) => {
    switch (action.type) {
        case "GENERATE MINES":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.generateMines)(action.payload);
        default:
            return state;
    }
};
const numbers = (state = {}, action) => {
    switch (action.type) {
        case "GENERATE NUMBERS":
            return (0,_boardActions__WEBPACK_IMPORTED_MODULE_0__.generateNumbers)(action.payload);
        default:
            return state;
    }
    ;
};
const surprised = (state, action) => {
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
const flagsRemaining = (state = 10, action) => {
    switch (action.type) {
        case "DECREMENT FLAGS REMAINING":
            return state - 1;
        case "INCREMENT FLAGS REMAINING":
            return state + 1;
        case "SET FLAGS REMAINING":
            return action.payload;
        default:
            return state;
    }
};
const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: slices[prop](acc[prop], action) })), state);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({
    flippers,
    mineArr,
    numbers,
    scrollBoard,
    colors,
    colorDelay,
    surprised,
    flagsRemaining
}));


/***/ }),

/***/ "./ts-src/public/components/Board/Squares/Square.tsx":
/*!***********************************************************!*\
  !*** ./ts-src/public/components/Board/Squares/Square.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _squareUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squareUtils */ "./ts-src/public/components/Board/Squares/squareUtils.ts");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! BoardStore */ "./ts-src/public/components/Board/BoardStore/BoardStore.tsx");
/* harmony import */ var _sweepsquarestyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sweepsquarestyles.scss */ "./ts-src/public/components/Board/Squares/sweepsquarestyles.scss");





const Square = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const { currTile } = props;
    const [{ dimensions: { skillLevel }, definedUserName, dimensions, timerOn }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();
    const [{ colors, mineArr, flippers, numbers }, boardDispatch] = (0,BoardStore__WEBPACK_IMPORTED_MODULE_3__.useBoardContext)();
    const tileIsAMine = mineArr.includes(currTile) && flippers[currTile] && flippers[currTile] !== 'flag';
    const tileIsANumber = flippers[currTile] && flippers[currTile] !== 'flag' && numbers[currTile];
    const userNotLoggedIn = !definedUserName;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": `test-${currTile}`, onClick: (e) => {
            if (mineArr.includes(currTile)) {
                globalDispatch({ type: 'FREEZE TIMER STATE DEAD' });
                return (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.handleClick)(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    indicator: 'dead',
                    boardDispatch
                });
            }
            ;
            if (flippers[currTile] === 'flag')
                boardDispatch({ type: 'INCREMENT FLAGS REMAINING' });
            if (!timerOn) {
                globalDispatch({ type: 'SWITCH TIMER ON' });
                return (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.handleClick)(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    boardDispatch
                });
            }
            ;
            return (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.handleClick)(e, {
                dimensions,
                mineArr,
                numbers,
                currTile,
                indicator: null,
                boardDispatch
            });
        }, onMouseDown: () => {
            if (!flippers[currTile])
                boardDispatch({ type: 'SURPRISED SMILES' });
        }, onMouseUp: (e) => {
            if (mineArr.includes(currTile) && e.button === 0 && !e.ctrlKey) {
                return boardDispatch({ type: 'DEAD SMILES' });
            }
            ;
            return boardDispatch({ type: 'RESET SMILES' });
        }, onContextMenu: (e) => {
            if (flippers[currTile] !== true) {
                boardDispatch({ type: flippers[currTile] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING' });
                return (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.handleClick)(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    boardDispatch
                });
            }
            ;
            e.preventDefault();
        }, className: mineArr.includes(currTile) ? (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.genMineClassNames)({
            timerOn,
            skillLevel,
            flippers,
            colors,
            currTile
        })
            : numbers[currTile] ? (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.genNumberClassNames)({
                skillLevel,
                definedUserName,
                timerOn,
                flippers,
                numbers,
                colors,
                currTile
            })
                : (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.genEmptyClassNames)({
                    skillLevel,
                    definedUserName,
                    timerOn,
                    flippers,
                    colors,
                    currTile
                }) }, userNotLoggedIn ?
        (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.generateLoginMessage)({
            currTile,
            skillLevel
        })
        : tileIsANumber ? numbers[currTile]
            : tileIsAMine ? '*'
                : null));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);


/***/ }),

/***/ "./ts-src/public/components/Board/Squares/squareUtils.ts":
/*!***************************************************************!*\
  !*** ./ts-src/public/components/Board/Squares/squareUtils.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genEmptyClassNames": () => (/* binding */ genEmptyClassNames),
/* harmony export */   "genNumberClassNames": () => (/* binding */ genNumberClassNames),
/* harmony export */   "genMineClassNames": () => (/* binding */ genMineClassNames),
/* harmony export */   "generateLoginMessage": () => (/* binding */ generateLoginMessage),
/* harmony export */   "handleClick": () => (/* binding */ handleClick)
/* harmony export */ });
const generateLoginMessage = (args) => {
    var _a, _b, _c;
    const { currTile, skillLevel } = args;
    const t = currTile;
    const beginnerMessages = { '1': 'Please', '2': 'Login', '3': 'First' };
    const intermediateMessages = { '2': 'Please', '4': 'Login', '6': 'First' };
    const advancedMessages = { '2': 'Please', '3': 'Login', '4': 'First' };
    if (skillLevel === 'beginner' && t < 81) {
        return ((_a = beginnerMessages[String(Math.floor(t / 10))]) === null || _a === void 0 ? void 0 : _a.substring(t % 10, (t % 10) + 1)) || '*';
    }
    ;
    if (skillLevel === 'intermediate' && t < 144) {
        return ((_b = intermediateMessages[String(Math.floor(t / 17))]) === null || _b === void 0 ? void 0 : _b.substring(t % 17, (t % 17) + 1)) || '*';
    }
    ;
    if (skillLevel === 'advanced' && t < 240) {
        return ((_c = advancedMessages[String(Math.floor(t / 31))]) === null || _c === void 0 ? void 0 : _c.substring(t % 33.15, (t % 33.15) + 1)) || '*';
    }
    ;
    return null;
};
const generateColors = (args) => {
    const { currTile, colors, skillLevel } = args;
    const t = currTile;
    if (skillLevel === 'beginner') {
        if ((t <= 9) || (t >= 16 && t <= 19) || (t >= 25 && t <= 29) || (t >= 35)) {
            return colors[(t + (Math.floor(t / 8))) % 9];
        }
    }
    if (skillLevel === 'intermediate') {
        if ((t <= 33) || (t >= 40 && t <= 66) || (t >= 73 && t <= 99) || (t >= 107 && t <= 144)) {
            return colors[(t + (Math.floor(t / 16))) % 8];
        }
    }
    if (skillLevel === 'advanced') {
        if ((t <= 66) || (t >= 73 && t <= 99) || (t >= 105 && t <= 132) || (t >= 138 && t <= 241)) {
            return colors[(t + (Math.floor(t / 30))) % 8];
        }
    }
    return null;
};
const genNumberClassNames = (args) => {
    const { timerOn, definedUserName, skillLevel, currTile, numbers, flippers, colors } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null) {
        classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
        return classNameArr.join(' ');
    }
    ;
    const numberTileOnVictoryDeadOrNotLoggedIn = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD' || !definedUserName);
    const flagOnNumberTileGamePlay = flippers[currTile] === 'flag';
    classNameArr.push(numberTileOnVictoryDeadOrNotLoggedIn ? 'disabled'
        : flagOnNumberTileGamePlay ? 'flag'
            : 'number');
    const currNum = numbers[currTile];
    classNameArr.push(currNum === 1 ? 'blue-num'
        : currNum === 2 ? 'green-num'
            : currNum === 3 ? 'red-num'
                : currNum === 4 ? 'purple-num'
                    : currNum === 5 ? 'maroon-num'
                        : currNum === 6 ? 'turquoise-num'
                            : currNum === 7 ? 'black-num'
                                : currNum === 8 ? 'grey-num'
                                    : null);
    return classNameArr.join(' ');
};
const genEmptyClassNames = (args) => {
    const { skillLevel, definedUserName, timerOn, currTile, colors, flippers } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null) {
        classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
        return classNameArr.join(' ');
    }
    ;
    const emptyTileOnVictoryOrDead = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD');
    const emptyTileOnNotLoggedIn = !definedUserName;
    const flagOnEmptyTileGameplay = flippers[currTile] === 'flag';
    const emptyTileRevealedGameplay = flippers[currTile] === true;
    classNameArr.push(emptyTileOnVictoryOrDead ? 'disabled dark-square'
        : emptyTileOnNotLoggedIn ? 'disabled'
            : flagOnEmptyTileGameplay ? 'flag'
                : emptyTileRevealedGameplay ? 'dark-square'
                    : null);
    return classNameArr.join(' ');
};
const genMineClassNames = (args) => {
    const { timerOn, skillLevel, currTile, colors, flippers } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null) {
        classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
        return classNameArr.join(' ');
    }
    ;
    const flagOnMineTileAfterVictory = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN') && flippers[currTile] === 'flag';
    const mineTileAfterDead = timerOn === 'FREEZE DEAD';
    const tileIsFlaggedGamePlay = flippers[currTile] === 'flag';
    const mineTileOnDead = flippers[currTile] === true;
    classNameArr.push(flagOnMineTileAfterVictory ? 'flag disabled'
        : mineTileAfterDead ? 'disabled mine'
            : tileIsFlaggedGamePlay ? 'flag'
                : mineTileOnDead ? 'mine'
                    : null);
    return classNameArr.join(' ');
};
const tileRecurse = (args) => {
    const { currTile, dimensions, numbers, mineArr, resultArr } = args;
    resultArr.push(currTile);
    const evalU = currTile => (currTile - dimensions.horizontalDimension);
    const evalR = currTile => (currTile + 1);
    const evalD = currTile => (currTile + dimensions.horizontalDimension);
    const evalL = currTile => (currTile - 1);
    const testCurrTile = (currTile, testFunc) => {
        return (!numbers[testFunc(currTile)]
            && !mineArr.includes(testFunc(currTile))
            && !resultArr.includes(testFunc(currTile))
            && testFunc(currTile) >= 0
            && testFunc(currTile) <= (dimensions.verticalDimension * dimensions.horizontalDimension));
    };
    if (testCurrTile(currTile, evalU)) {
        tileRecurse({ currTile: evalU(currTile), dimensions, numbers, mineArr, resultArr });
    }
    if (testCurrTile(currTile, evalR)
        && (evalR(currTile) % dimensions.horizontalDimension !== 0
            || (evalR(currTile) % dimensions.horizontalDimension === 0 && currTile % dimensions.horizontalDimension === 0))) {
        tileRecurse({ currTile: evalR(currTile), dimensions, numbers, mineArr, resultArr });
    }
    if (testCurrTile(currTile, evalD)) {
        tileRecurse({ currTile: evalD(currTile), dimensions, numbers, mineArr, resultArr });
    }
    if (testCurrTile(currTile, evalL)
        && ((evalL(currTile + 1)) % dimensions.horizontalDimension !== 0
            || (evalL(currTile + 1) % dimensions.horizontalDimension === 0 && evalL(currTile) % dimensions.horizontalDimension === 0))) {
        tileRecurse({ currTile: evalL(currTile), dimensions, numbers, mineArr, resultArr });
    }
    ;
    return resultArr;
};
const handleClick = (event, args) => {
    const { currTile, indicator, dimensions, mineArr, numbers, boardDispatch } = args;
    event.preventDefault();
    return (indicator === 'dead') ? boardDispatch({ type: 'REVEAL DEAD FLIPPERS' })
        : (event.type === 'contextmenu') ? boardDispatch({ type: 'SET FLAG FLIPPED', payload: { flagFlipped: currTile } })
            : (event.type === 'click' && indicator !== 'dead') && (!numbers[currTile] && !mineArr.includes(currTile)) ?
                boardDispatch({
                    type: 'FLIP RECURSED TILES',
                    payload: tileRecurse({ currTile: currTile, dimensions, numbers, mineArr, resultArr: [] })
                })
                : (event.type === 'click' && indicator !== 'dead') ?
                    boardDispatch({ type: 'FLIP NORMAL TILE', payload: { flippedTile: currTile } })
                    : null;
};



/***/ }),

/***/ "./ts-src/public/components/Board/useEffectBoardHooks.tsx":
/*!****************************************************************!*\
  !*** ./ts-src/public/components/Board/useEffectBoardHooks.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const generateMinesEffect = (dimensions, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        boardDispatch({ type: "GENERATE MINES", payload: dimensions });
    }, []);
};
const stopColorIterationEffect = (colorDelay, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (colorDelay === null) {
            boardDispatch({ type: "STOP COLOR ITERATION" });
        }
        else {
            boardDispatch({ type: "START COLOR ITERATION" });
        }
    }, [colorDelay]);
};
const freezeColorDelayEffect = (definedUserName, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (definedUserName) {
            boardDispatch({ type: "UNSET COLOR DELAY" });
        }
        else {
            boardDispatch({ type: "SET COLOR DELAY" });
        }
    }, [definedUserName]);
};
const resetGameEffectOnSmileyOrSkill = (timerOn, dimensions, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (timerOn === false) {
            boardDispatch({
                type: "RESET FLIPPERS",
                payload: Array.from({
                    length: dimensions.horizontalDimension * dimensions.verticalDimension,
                }, () => false),
            });
            boardDispatch({ type: "GENERATE MINES", payload: dimensions });
        }
    }, [timerOn, dimensions]);
};
const freezeScrollBoardEffect = (scrollBoard) => {
    const preventDefault = (ev) => {
        ev = ev || window.event;
        if (ev.preventDefault)
            ev.preventDefault();
        return false;
    };
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (scrollBoard)
            document.addEventListener("wheel", preventDefault, { passive: false });
        return () => document.removeEventListener("wheel", preventDefault, false);
    }, [scrollBoard]);
};
const revealFlipperEffect = (args) => {
    const { mineArr, flippers, numbers, globalDispatch, boardDispatch } = args;
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (mineArr.length && flippers.length && flippers[0] !== "dead") {
            if (flippers.every((flipper) => {
                if (typeof flipper === "number") {
                    return mineArr[flipper];
                }
                else {
                    return flipper === true || flipper === "flag";
                }
            })) {
                globalDispatch({ type: "FREEZE TIMER STATE VICTORY" });
            }
            else if (Object.keys(numbers).length &&
                Object.keys(numbers).every((num) => flippers[num] === true)) {
                boardDispatch({ type: "REVEAL FLIPPERS", payload: { mineArr } });
            }
        }
    }, [flippers]);
};
const generateNumberEffect = (mineArr, { verticalDimension, horizontalDimension }, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        boardDispatch({
            type: "GENERATE NUMBERS",
            payload: { mineArr, verticalDimension, horizontalDimension },
        });
    }, [mineArr]);
};
const resetOnSkillLevelChangeEffect = (skillLevel, globalDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        globalDispatch({ type: "SWITCH TIMER OFF" });
    }, [skillLevel]);
};
const resetFlagsRemainingOnSkillChangeOrTimerOn = (timerOn, skillLevel, boardDispatch) => {
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (timerOn === false) {
            boardDispatch({
                type: "SET FLAGS REMAINING",
                payload: skillLevel === "beginner"
                    ? 10
                    : skillLevel === "intermediate"
                        ? 40
                        : 99,
            });
        }
    }, [skillLevel, timerOn]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    generateMinesEffect,
    stopColorIterationEffect,
    freezeColorDelayEffect,
    resetGameEffectOnSmileyOrSkill,
    freezeScrollBoardEffect,
    revealFlipperEffect,
    generateNumberEffect,
    resetOnSkillLevelChangeEffect,
    resetFlagsRemainingOnSkillChangeOrTimerOn,
});


/***/ }),

/***/ "./ts-src/public/components/Home/HeaderInterfaces/LoggedInView.tsx":
/*!*************************************************************************!*\
  !*** ./ts-src/public/components/Home/HeaderInterfaces/LoggedInView.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");



const LoggedInView = (props) => {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    const homeSelected = location.pathname === "/" || location.pathname === '/fullstack/minesweeper';
    const scoreboardSelected = location.pathname === "/scoreboard";
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (homeSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` }, (homeSelected && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `logged-in-user-title` },
            " ",
            "Logged in as: ",
            props.username,
            " "))) || react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: props.isProxied ? '/fullstack/minesweeper' : '/' }, "Minesweeper")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                "header-nav-ul-li" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: props.isProxied ? '/fullstack/minesweeper/scoreboard' : '/scoreboard' }, "High Scores")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "header-nav-ul-li" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "logout-button", onClick: () => {
                    props.logout({
                        refetchQueries: [TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.MeDocument],
                    });
                    if (window.location.href.indexOf('fullstack') > -1) {
                        history.push('/fullstack/minesweeper');
                    }
                    else {
                        history.push('/');
                    }
                } }, "Logout"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggedInView);


/***/ }),

/***/ "./ts-src/public/components/Home/HeaderInterfaces/LoggedOutView.tsx":
/*!**************************************************************************!*\
  !*** ./ts-src/public/components/Home/HeaderInterfaces/LoggedOutView.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


;
const LoggedOutView = (props) => {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    const loginSelected = location.pathname === '/login' || location.pathname === '/fullstack/minesweeper/login';
    const registerSelected = location.pathname === '/register';
    const scoreboardSelected = location.pathname === '/scoreboard';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (loginSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: props.isProxied ? '/fullstack/minesweeper/login' : '/login' }, "Login")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (registerSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: props.isProxied ? '/fullstack/minesweeper/register' : '/register' }, "Register")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: props.isProxied ? '/fullstack/minesweeper/scoreboard' : '/scoreboard' }, "High Scores"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggedOutView);


/***/ }),

/***/ "./ts-src/public/components/Home/Home.tsx":
/*!************************************************!*\
  !*** ./ts-src/public/components/Home/Home.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! TSComponents/Minesweeper/Minesweeper */ "./ts-src/public/components/Minesweeper/Minesweeper.tsx");
/* harmony import */ var TSComponents_Leaderboard_Leaderboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TSComponents/Leaderboard/Leaderboard */ "./ts-src/public/components/Leaderboard/Leaderboard.tsx");
/* harmony import */ var TSComponents_UserForms_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TSComponents/UserForms/Login */ "./ts-src/public/components/UserForms/Login.tsx");
/* harmony import */ var TSComponents_UserForms_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSComponents/UserForms/Register */ "./ts-src/public/components/UserForms/Register.tsx");
/* harmony import */ var TSComponents_Home_HeaderInterfaces_LoggedInView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! TSComponents/Home/HeaderInterfaces/LoggedInView */ "./ts-src/public/components/Home/HeaderInterfaces/LoggedInView.tsx");
/* harmony import */ var TSComponents_Home_HeaderInterfaces_LoggedOutView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! TSComponents/Home/HeaderInterfaces/LoggedOutView */ "./ts-src/public/components/Home/HeaderInterfaces/LoggedOutView.tsx");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.scss */ "./ts-src/public/components/Home/home.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.scss */ "./ts-src/public/components/Home/header.scss");
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");
/* harmony import */ var TSSrc_public_GlobalStore_GlobalStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! TSSrc/public/GlobalStore/GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");












const Home = (props) => {
    var _a;
    const { data, loading } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_10__.useMeQuery)();
    const [, globalDispatch] = (0,TSSrc_public_GlobalStore_GlobalStore__WEBPACK_IMPORTED_MODULE_11__.useGlobalContext)();
    const [logout] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_10__.useLogoutMutation)();
    const [isProxied, setIsProxied] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    let headerBody = null;
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (window.location.href.indexOf('fullstack') > -1) {
            setIsProxied(true);
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) {
            globalDispatch({ type: 'SET DEFINED USERNAME', payload: { userName: data.me.username } });
        }
        else {
            globalDispatch({ type: 'UNSET DEFINED USERNAME' });
        }
    }, [data]);
    headerBody = loading ? null : !(data === null || data === void 0 ? void 0 : data.me) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedOutView__WEBPACK_IMPORTED_MODULE_7__.default, { isProxied: isProxied })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedInView__WEBPACK_IMPORTED_MODULE_6__.default, { isProxied: isProxied, username: data.me.username, logout: logout }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "header-nav" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) ? `header-nav-ul header-is-concealed` : `header-nav-ul` }, headerBody)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: isProxied ? '/fullstack/minesweeper/login' : '/login' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_UserForms_Login__WEBPACK_IMPORTED_MODULE_4__.default, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: isProxied ? '/fullstack/minesweeper/register' : '/register' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_UserForms_Register__WEBPACK_IMPORTED_MODULE_5__.default, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: isProxied ? '/fullstack/minesweeper/scoreboard' : '/scoreboard' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Leaderboard_Leaderboard__WEBPACK_IMPORTED_MODULE_3__.default, { ssrTopTimes: props.ssrTopTimes })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: isProxied ? '/fullstack/minesweeper' : '/' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null)))));
};


/***/ }),

/***/ "./ts-src/public/components/Leaderboard/Leaderboard.tsx":
/*!**************************************************************!*\
  !*** ./ts-src/public/components/Leaderboard/Leaderboard.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TSComponents_Leaderboard_LeaderboardEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSComponents/Leaderboard/LeaderboardEntry */ "./ts-src/public/components/Leaderboard/LeaderboardEntry.tsx");
/* harmony import */ var _Pagination_pageNoUl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination/pageNoUl */ "./ts-src/public/components/Leaderboard/Pagination/pageNoUl.tsx");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var _leaderboard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard.scss */ "./ts-src/public/components/Leaderboard/leaderboard.scss");
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");






const Leaderboard = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const [{ dimensions: { skillLevel }, }, globalDispatch,] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const [currentPage, setCurrentPage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const [pageOffset] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(10);
    const handleScoreLength = () => {
        if (skillLevel === "beginner") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetBeginnerScoresQuery)();
            if (data === null || data === void 0 ? void 0 : data.allBeginnerScores.length) {
                return data.allBeginnerScores.length;
            }
        }
        if (skillLevel === "intermediate") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetIntermediateScoresQuery)();
            if (data === null || data === void 0 ? void 0 : data.allIntermediateScores.length) {
                return data.allIntermediateScores.length;
            }
        }
        if (skillLevel === "advanced") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetAdvancedScoresQuery)();
            if (data === null || data === void 0 ? void 0 : data.allAdvancedScores.length) {
                return data.allAdvancedScores.length;
            }
        }
        return 10;
    };
    const handleScoreViewHelper = (array, currentPage, pageOffset) => {
        console.log(currentPage * pageOffset, currentPage * pageOffset + pageOffset);
        return array
            .slice(0)
            .sort((a, b) => a.time - b.time)
            .slice(currentPage * pageOffset, currentPage * pageOffset + pageOffset);
    };
    const handleScoreView = (ssrTopTimes) => {
        if (typeof window === "undefined" && ssrTopTimes) {
            return ssrTopTimes.slice(0, pageOffset);
        }
        if (skillLevel === "beginner") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetBeginnerScoresQuery)();
            const topScores = data === null || data === void 0 ? void 0 : data.allBeginnerScores;
            if (topScores) {
                let test = handleScoreViewHelper(topScores, currentPage, pageOffset);
                return test;
            }
        }
        if (skillLevel === "intermediate") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetIntermediateScoresQuery)();
            const topScores = data === null || data === void 0 ? void 0 : data.allIntermediateScores;
            if (topScores) {
                let test = handleScoreViewHelper(topScores, currentPage, pageOffset);
                return test;
            }
        }
        if (skillLevel === "advanced") {
            const { data } = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useGetAdvancedScoresQuery)();
            const topScores = data === null || data === void 0 ? void 0 : data.allAdvancedScores;
            if (topScores) {
                return handleScoreViewHelper(topScores, currentPage, pageOffset);
            }
        }
        return [
            {
                username: "loading",
                time: 0,
                updatedAt: "",
                createdAt: "",
                id: 1,
            },
        ];
    };
    const [personalized, setPersonalized] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const formatTime = (time) => {
        const centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
        const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
        return minutes !== "00"
            ? `${minutes} : ${seconds} . ${centiseconds}`
            : hours !== "00"
                ? `${hours} : ${minutes}: ${seconds} . ${centiseconds}`
                : `${seconds} . ${centiseconds} secs`;
    };
    const handleClickPersonalized = (e) => {
        const userName = e.currentTarget.innerHTML;
        return userName ? setPersonalized(userName) : setPersonalized(false);
    };
    const handleClickPage = (e) => {
        const selected = Number(e.currentTarget.children[0].innerHTML) - 1;
        setCurrentPage(selected);
    };
    const makeTitle = (personalized, skillLevel) => personalized
        ? `${personalized}s ${skillLevel} Leaderboard:`
        : `${skillLevel} Leaderboard`;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "leaderboard" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { id: "leaderboard-header" }, makeTitle(personalized, skillLevel)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "winners-circle" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "scores-list-container" }, (handleScoreView(props === null || props === void 0 ? void 0 : props.ssrTopTimes) || []).map((entry, index) => {
                return entry ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Leaderboard_LeaderboardEntry__WEBPACK_IMPORTED_MODULE_1__.default, { key: index, currentPage: currentPage, personalized: personalized, index: index, entry: entry, handleClick: handleClickPersonalized, formatTime: formatTime })) : null;
            })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pagination_pageNoUl__WEBPACK_IMPORTED_MODULE_2__.default, { pageOffset: pageOffset, handleClick: handleClickPage, currentPage: currentPage, topTimesPerPage: pageOffset, noOfTopTimes: handleScoreLength() })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "leaderboard-buttons-container" },
            personalized ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "button", onClick: (e) => handleClickPersonalized(e), className: "return-to-leaderboard-button", value: `return to ${skillLevel} LeaderBoard` })) : null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "leaderboard-skill-level-selector-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "leaderboard-skill-level-selector-button", type: "button", value: "beginner", onClick: () => globalDispatch({ type: "SET BEGINNER DIMENSIONS" }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "leaderboard-skill-level-selector-button", type: "button", value: "intermediate", onClick: () => globalDispatch({ type: "SET INTERMEDIATE DIMENSIONS" }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "leaderboard-skill-level-selector-button", type: "button", value: "advanced", onClick: () => {
                        globalDispatch({ type: "SET ADVANCED DIMENSIONS" });
                    } })))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leaderboard);


/***/ }),

/***/ "./ts-src/public/components/Leaderboard/LeaderboardEntry.tsx":
/*!*******************************************************************!*\
  !*** ./ts-src/public/components/Leaderboard/LeaderboardEntry.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");


const SingleLeaderboardEntry = ({ currentPage, personalized, handleClick, entry: { username, time }, index, formatTime, }) => {
    const [{ definedUserName }] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const golden = definedUserName === username;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: personalized ? "personalized scores-list-item" : "scores-list-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: golden ? "golden scores-user" : "scores-user", style: { paddingRight: "5px" } },
            ((currentPage * 10) + index) + 1,
            "."),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { onClick: handleClick, className: golden ? "golden scores-user" : "scores-user" }, username),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: golden ? "golden scores-user" : "black-num scores-user" },
            " ",
            "|",
            " "),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: golden ? "golden scores-time" : "scores-time" }, formatTime(time))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleLeaderboardEntry);


/***/ }),

/***/ "./ts-src/public/components/Leaderboard/Pagination/PageNoLi.tsx":
/*!**********************************************************************!*\
  !*** ./ts-src/public/components/Leaderboard/Pagination/PageNoLi.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageNoLi = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: props.pageIndex, className: props.currentPage + 1 === props.pageIndex
            ? `pageNoLi selected-page-li`
            : "pageNoLi", onClick: props.handleClick },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, props.pageIndex)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNoLi);


/***/ }),

/***/ "./ts-src/public/components/Leaderboard/Pagination/pageNoUl.tsx":
/*!**********************************************************************!*\
  !*** ./ts-src/public/components/Leaderboard/Pagination/pageNoUl.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageNoLi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNoLi */ "./ts-src/public/components/Leaderboard/Pagination/PageNoLi.tsx");


const PageNoUl = (props) => {
    const renderPageNumbers = () => {
        if (props.noOfTopTimes) {
            return [...new Array(Math.ceil(props.noOfTopTimes / props.topTimesPerPage))]
                .map((_, index) => {
                return index + 1;
            })
                .map((pageIndex) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageNoLi__WEBPACK_IMPORTED_MODULE_1__.default, { key: pageIndex, pageIndex: pageIndex, currentPage: props.currentPage, handleClick: props.handleClick }));
            });
        }
        else {
            return [];
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { id: "page-numbers" }, renderPageNumbers()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNoUl);


/***/ }),

/***/ "./ts-src/public/components/MillisecondTimer/MillisecondTimer.tsx":
/*!************************************************************************!*\
  !*** ./ts-src/public/components/MillisecondTimer/MillisecondTimer.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! CustomHooks */ "./ts-src/public/components/customHooks.tsx");
/* harmony import */ var TimerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TimerStore */ "./ts-src/public/components/MillisecondTimer/TimerStore/TimerStore.tsx");
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");
/* harmony import */ var _millisecondstyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./millisecondstyles.scss */ "./ts-src/public/components/MillisecondTimer/millisecondstyles.scss");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const [postBeginnerScore] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useBeginnerScoreMutation)();
    const [postIntermediateScore] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useIntermediateScoreMutation)();
    const [postAdvancedScore] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useAdvancedScoreMutation)();
    const [{ dimensions: { skillLevel }, definedUserName, timerOn, }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const [{ timerTime }, timerDispatch] = (0,TimerStore__WEBPACK_IMPORTED_MODULE_3__.useTimerContext)();
    (0,CustomHooks__WEBPACK_IMPORTED_MODULE_2__.useInterval)(() => {
        timerDispatch({ type: "ITERATE TIMER TIME", payload: 10 });
    }, timerOn === true
        ? 10
        : timerOn === "FREEZE WIN" || timerOn === "FREEZE DEAD" || timerOn === "VICTORY"
            ? -1
            : null);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (timerOn === false) {
            timerDispatch({ type: "CLEAR TIMER TIME" });
        }
        if (timerOn === "VICTORY" && typeof definedUserName === "string") {
            if (skillLevel === 'beginner') {
                postBeginnerScore({
                    variables: { username: definedUserName, time: timerTime },
                }).then(() => {
                    globalDispatch({ type: 'FREEZE TIMER STATE WIN' });
                });
                return;
            }
            ;
            if (skillLevel === 'intermediate') {
                postIntermediateScore({
                    variables: { username: definedUserName, time: timerTime }
                }).then(() => {
                    globalDispatch({ type: 'FREEZE TIMER STATE WIN' });
                });
                return;
            }
            if (skillLevel === 'advanced') {
                postAdvancedScore({
                    variables: { username: definedUserName, time: timerTime }
                }).then(() => {
                    globalDispatch({ type: 'FREEZE TIMER STATE WIN' });
                });
                return;
            }
        }
    }, [timerOn]);
    const centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'milli-second-timer-container' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { id: "milli-second-timer", className: skillLevel }, hours !== "00"
            ? `${hours} : ${minutes} : ${seconds} : ${centiseconds}`
            : minutes !== "00"
                ? `${minutes} : ${seconds} : ${centiseconds}`
                : `${seconds} : ${centiseconds}`)));
});


/***/ }),

/***/ "./ts-src/public/components/MillisecondTimer/TimerStore/TimerStore.tsx":
/*!*****************************************************************************!*\
  !*** ./ts-src/public/components/MillisecondTimer/TimerStore/TimerStore.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTimerContext": () => (/* binding */ useTimerContext),
/* harmony export */   "TimerStoreProvider": () => (/* binding */ TimerStoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timerReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timerReducers */ "./ts-src/public/components/MillisecondTimer/TimerStore/timerReducers.ts");


const initialState = {
    timerTime: 0,
};
const TimerContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext([initialState, () => { }]);
const TimerStoreProvider = ({ children }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_timerReducers__WEBPACK_IMPORTED_MODULE_1__.default, initialState);
    const store = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [state, dispatch], [state]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimerContext.Provider, { value: store }, children));
};
function useTimerContext() {
    const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(TimerContext);
    if (context === undefined) {
        throw new Error("useTimerContext must be used within a TimerStoreProvider");
    }
    return context;
}



/***/ }),

/***/ "./ts-src/public/components/MillisecondTimer/TimerStore/timerReducers.ts":
/*!*******************************************************************************!*\
  !*** ./ts-src/public/components/MillisecondTimer/TimerStore/timerReducers.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timerTime = (state = 0, action) => {
    switch (action.type) {
        case "ITERATE TIMER TIME":
            return (state += action.payload);
        case "CLEAR TIMER TIME":
            return 0;
        default:
            return state;
    }
};
const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: slices[prop](acc[prop], action) })), state);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers({ timerTime }));


/***/ }),

/***/ "./ts-src/public/components/Minesweeper/Minesweeper.tsx":
/*!**************************************************************!*\
  !*** ./ts-src/public/components/Minesweeper/Minesweeper.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var TimerStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! TimerStore */ "./ts-src/public/components/MillisecondTimer/TimerStore/TimerStore.tsx");
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! BoardStore */ "./ts-src/public/components/Board/BoardStore/BoardStore.tsx");
/* harmony import */ var TSComponents_Board_Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TSComponents/Board/Board */ "./ts-src/public/components/Board/Board.tsx");
/* harmony import */ var TSComponents_MillisecondTimer_MillisecondTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSComponents/MillisecondTimer/MillisecondTimer */ "./ts-src/public/components/MillisecondTimer/MillisecondTimer.tsx");
/* harmony import */ var TSComponents_SkillLevelSelector_SkillLevelSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! TSComponents/SkillLevelSelector/SkillLevelSelector */ "./ts-src/public/components/SkillLevelSelector/SkillLevelSelector.tsx");
/* harmony import */ var TSComponents_SmileyBar_SmileyBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! TSComponents/SmileyBar/SmileyBar */ "./ts-src/public/components/SmileyBar/SmileyBar.tsx");
/* harmony import */ var _minesweeper_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minesweeper.scss */ "./ts-src/public/components/Minesweeper/minesweeper.scss");









const Minesweeper = () => {
    const [{ dimensions: { skillLevel }, },] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-containers", id: "main-space-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "total-board", className: skillLevel },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoardStore__WEBPACK_IMPORTED_MODULE_3__.BoardStoreProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_SmileyBar_SmileyBar__WEBPACK_IMPORTED_MODULE_7__.default, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Board_Board__WEBPACK_IMPORTED_MODULE_4__.default, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimerStore__WEBPACK_IMPORTED_MODULE_2__.TimerStoreProvider, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_MillisecondTimer_MillisecondTimer__WEBPACK_IMPORTED_MODULE_5__.default, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_SkillLevelSelector_SkillLevelSelector__WEBPACK_IMPORTED_MODULE_6__.default, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Minesweeper);


/***/ }),

/***/ "./ts-src/public/components/SkillLevelSelector/SkillLevelSelector.tsx":
/*!****************************************************************************!*\
  !*** ./ts-src/public/components/SkillLevelSelector/SkillLevelSelector.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var _skillstyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillstyles.scss */ "./ts-src/public/components/SkillLevelSelector/skillstyles.scss");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(() => {
    const [{ dimensions: { skillLevel } }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: skillLevel, id: 'skill-level-selector' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: _ => globalDispatch({ type: 'SET BEGINNER DIMENSIONS' }) }, "Beginner"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: _ => globalDispatch({ type: 'SET INTERMEDIATE DIMENSIONS' }) }, "Intermediate"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: _ => globalDispatch({ type: 'SET ADVANCED DIMENSIONS' }) }, "Expert")));
}));


/***/ }),

/***/ "./ts-src/public/components/SmileyBar/SmileyBar.tsx":
/*!**********************************************************!*\
  !*** ./ts-src/public/components/SmileyBar/SmileyBar.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var BoardStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! BoardStore */ "./ts-src/public/components/Board/BoardStore/BoardStore.tsx");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var _smileystyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smileystyles.scss */ "./ts-src/public/components/SmileyBar/smileystyles.scss");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(() => {
    const [{ dimensions: { numberOfMines }, timerOn }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();
    const [{ surprised, flagsRemaining }, boardDispatch] = (0,BoardStore__WEBPACK_IMPORTED_MODULE_1__.useBoardContext)();
    const resetCallback = () => {
        boardDispatch({ type: 'RESET SMILES' });
        boardDispatch({ type: 'SET FLAGS REMAINING', payload: numberOfMines });
        globalDispatch({ type: 'SWITCH TIMER OFF' });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'smiley-bar' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'smiley-guy', id: surprised === 'dead' ? 'dead-guy'
                : timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' ? 'victory-guy'
                    : surprised === true ? 'surprised-guy'
                        : 'smiley-guy', onClick: resetCallback }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'flags-remaining' }, flagsRemaining)));
}));


/***/ }),

/***/ "./ts-src/public/components/UserForms/InputField.tsx":
/*!***********************************************************!*\
  !*** ./ts-src/public/components/UserForms/InputField.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const InputField = (_a) => {
    var { label, size: _ } = _a, props = __rest(_a, ["label", "size"]);
    const [field, { error }] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", Object.assign({}, field, props, { autoComplete: 'off', type: "text", id: field.name, placeholder: props.placeholder })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "error-message-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: "form-error-message" }, error ? error : null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);


/***/ }),

/***/ "./ts-src/public/components/UserForms/Login.tsx":
/*!******************************************************!*\
  !*** ./ts-src/public/components/UserForms/Login.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TSSrc/public/components/UserForms/InputField */ "./ts-src/public/components/UserForms/InputField.tsx");
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");
/* harmony import */ var TSSrc_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! TSSrc/utils/toErrorMap */ "./ts-src/utils/toErrorMap.ts");
/* harmony import */ var _userForms_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userForms.scss */ "./ts-src/public/components/UserForms/userForms.scss");








const UserLoginForm = () => {
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    const [_, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const [login] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useLoginMutation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, { initialValues: { username: "", password: "" }, onSubmit: async (values, { setSubmitting, setErrors }) => {
            var _a, _b;
            setSubmitting(true);
            const loginData = await login({
                variables: { options: values },
                refetchQueries: [TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.MeDocument],
            });
            const loginErrors = (_a = loginData === null || loginData === void 0 ? void 0 : loginData.data) === null || _a === void 0 ? void 0 : _a.login.errors;
            const loginSuccess = (_b = loginData === null || loginData === void 0 ? void 0 : loginData.data) === null || _b === void 0 ? void 0 : _b.login.user;
            if (loginErrors) {
                setErrors((0,TSSrc_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__.toErrorMap)(loginErrors));
            }
            if (loginSuccess) {
                globalDispatch({
                    type: "SET DEFINED USERNAME",
                    payload: { userName: loginSuccess.username },
                });
                if (window.location.href.indexOf('fullstack') > -1) {
                    history.push('/fullstack/minesweeper');
                }
                else {
                    history.push('/');
                }
            }
            setSubmitting(false);
        } }, ({}) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Form, { className: "login-register-form" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "user-inputs" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__.default, { name: "username", placeholder: "username", label: "Username" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__.default, { name: "password", placeholder: "password", label: "Password", type: "password" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "submit", value: "login" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLoginForm);


/***/ }),

/***/ "./ts-src/public/components/UserForms/Register.tsx":
/*!*********************************************************!*\
  !*** ./ts-src/public/components/UserForms/Register.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TSSrc/public/components/UserForms/InputField */ "./ts-src/public/components/UserForms/InputField.tsx");
/* harmony import */ var TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TSSrc/generated/graphql */ "./ts-src/generated/graphql.tsx");
/* harmony import */ var TSSrc_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! TSSrc/utils/toErrorMap */ "./ts-src/utils/toErrorMap.ts");
/* harmony import */ var _userForms_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userForms.scss */ "./ts-src/public/components/UserForms/userForms.scss");








const UserLoginForm = () => {
    let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    const [, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const [register] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRegisterMutation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, { initialValues: { username: "", password: "" }, onSubmit: async (values, { setSubmitting, setErrors }) => {
            var _a, _b;
            setSubmitting(true);
            const registerData = await register({
                variables: { options: values },
                refetchQueries: [TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.MeDocument],
            });
            const registerErrors = (_a = registerData === null || registerData === void 0 ? void 0 : registerData.data) === null || _a === void 0 ? void 0 : _a.register.errors;
            const registerSuccess = (_b = registerData === null || registerData === void 0 ? void 0 : registerData.data) === null || _b === void 0 ? void 0 : _b.register.user;
            if (registerErrors) {
                setErrors((0,TSSrc_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__.toErrorMap)(registerErrors));
            }
            if (registerSuccess) {
                globalDispatch({
                    type: "SET DEFINED USERNAME",
                    payload: { userName: registerSuccess.username },
                });
                if (window.location.href.indexOf('fullstack') > -1) {
                    history.push('/fullstack/minesweeper');
                }
                else {
                    history.push('/');
                }
            }
            setSubmitting(false);
        } }, ({}) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Form, { className: "login-register-form" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "user-inputs" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__.default, { name: "username", placeholder: "username", label: "Username" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSSrc_public_components_UserForms_InputField__WEBPACK_IMPORTED_MODULE_4__.default, { name: "password", placeholder: "password", label: "Password", type: "password" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "submit", value: "Register" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLoginForm);


/***/ }),

/***/ "./ts-src/public/components/customHooks.tsx":
/*!**************************************************!*\
  !*** ./ts-src/public/components/customHooks.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInterval": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInterval = (callback, delay) => {
    const savedCallback = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay === -1) {
            return;
        }
        ;
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return;
    }, [delay]);
};



/***/ }),

/***/ "./ts-src/server/Resolvers/advancedScores.ts":
/*!***************************************************!*\
  !*** ./ts-src/server/Resolvers/advancedScores.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedScoreResolver": () => (/* binding */ AdvancedScoreResolver)
/* harmony export */ });
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSDatabase/entities/Advanced_Scores */ "./ts-src/database/entities/Advanced_Scores.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let AdvancedScoreResolver = class AdvancedScoreResolver {
    async allAdvancedScores({ em }) {
        return em.find(TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_1__.AdvancedScore, {});
    }
    async newAdvancedScore(username, time, { em }) {
        const newAdvancedScore = em.create(TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_1__.AdvancedScore, { username, time });
        await em.persistAndFlush(newAdvancedScore);
        return newAdvancedScore;
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => [TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_1__.AdvancedScore]),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], AdvancedScoreResolver.prototype, "allAdvancedScores", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => TSDatabase_entities_Advanced_Scores__WEBPACK_IMPORTED_MODULE_1__.AdvancedScore, { nullable: true }),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('username', () => String)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('time', () => Number)),
    __param(2, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], AdvancedScoreResolver.prototype, "newAdvancedScore", null);
AdvancedScoreResolver = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)()
], AdvancedScoreResolver);



/***/ }),

/***/ "./ts-src/server/Resolvers/beginnerScores.ts":
/*!***************************************************!*\
  !*** ./ts-src/server/Resolvers/beginnerScores.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeginnerScoreResolver": () => (/* binding */ BeginnerScoreResolver)
/* harmony export */ });
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSDatabase/entities/Beginner_Scores */ "./ts-src/database/entities/Beginner_Scores.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let BeginnerScoreResolver = class BeginnerScoreResolver {
    async allBeginnerScores({ em }) {
        return em.find(TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_1__.BeginnerScore, {});
    }
    async newBeginnerScore(username, time, { em }) {
        const newBeginnerScore = em.create(TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_1__.BeginnerScore, { username, time });
        await em.persistAndFlush(newBeginnerScore);
        return newBeginnerScore;
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => [TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_1__.BeginnerScore]),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], BeginnerScoreResolver.prototype, "allBeginnerScores", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => TSDatabase_entities_Beginner_Scores__WEBPACK_IMPORTED_MODULE_1__.BeginnerScore, { nullable: true }),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('username', () => String)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('time', () => Number)),
    __param(2, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], BeginnerScoreResolver.prototype, "newBeginnerScore", null);
BeginnerScoreResolver = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)()
], BeginnerScoreResolver);



/***/ }),

/***/ "./ts-src/server/Resolvers/intermediateScores.ts":
/*!*******************************************************!*\
  !*** ./ts-src/server/Resolvers/intermediateScores.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntermediateScoreResolver": () => (/* binding */ IntermediateScoreResolver)
/* harmony export */ });
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSDatabase/entities/Intermediate_Scores */ "./ts-src/database/entities/Intermediate_Scores.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let IntermediateScoreResolver = class IntermediateScoreResolver {
    async allIntermediateScores({ em }) {
        return em.find(TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__.IntermediateScore, {});
    }
    async newIntermediateScore(username, time, { em }) {
        const newIntermediateScore = em.create(TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__.IntermediateScore, { username, time });
        await em.persistAndFlush(newIntermediateScore);
        return newIntermediateScore;
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => [TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__.IntermediateScore]),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], IntermediateScoreResolver.prototype, "allIntermediateScores", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => TSDatabase_entities_Intermediate_Scores__WEBPACK_IMPORTED_MODULE_1__.IntermediateScore, { nullable: true }),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('username', () => String)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)('time', () => Number)),
    __param(2, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], IntermediateScoreResolver.prototype, "newIntermediateScore", null);
IntermediateScoreResolver = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)()
], IntermediateScoreResolver);



/***/ }),

/***/ "./ts-src/server/Resolvers/users.ts":
/*!******************************************!*\
  !*** ./ts-src/server/Resolvers/users.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserResolver": () => (/* binding */ UserResolver)
/* harmony export */ });
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TSDatabase/entities/User */ "./ts-src/database/entities/User.ts");
/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! argon2 */ "argon2");
/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var TSSrc_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TSSrc/constants */ "./ts-src/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let UsernamePasswordInput = class UsernamePasswordInput {
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => String)
], UsernamePasswordInput.prototype, "username", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => String)
], UsernamePasswordInput.prototype, "password", void 0);
UsernamePasswordInput = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.InputType)()
], UsernamePasswordInput);
let FieldError = class FieldError {
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.ObjectType)()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => [FieldError], { nullable: true })
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(() => TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { nullable: true })
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    async me({ req, em }) {
        if (!req.session.userId) {
            return null;
        }
        const user = await em.findOne(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { id: req.session.userId });
        return user;
    }
    getAllUsers({ em }) {
        return em.find(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, {});
    }
    async getSingleUser(id, { em }) {
        const user = await em.findOne(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { id });
        if (!user) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "user does not exist",
                    },
                ],
            };
        }
        return { user };
    }
    async register(options, { em, req }) {
        if (options.username.length <= 2) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }
        if (options.password.length <= 2) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }
        const hashedPassword = await argon2__WEBPACK_IMPORTED_MODULE_2___default().hash(options.password);
        let user;
        try {
            const result = await em
                .createQueryBuilder(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User)
                .getKnexQuery()
                .insert({
                username: options.username,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date(),
            })
                .returning("*");
            user = result[0];
        }
        catch (err) {
            console.log(err);
            if (err.detail.includes("already exists")) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "username is already taken",
                        },
                    ],
                };
            }
            return err.message;
        }
        req.session.userId = user.id;
        return { user };
    }
    logout({ req, res }) {
        return new Promise((resolve) => req.session.destroy((err) => {
            res.clearCookie(TSSrc_constants__WEBPACK_IMPORTED_MODULE_3__.COOKIE_NAME);
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            console.log('destroyed!!!');
            resolve(true);
        }));
        return { ok: true };
    }
    async login(options, { em, req }) {
        try {
            const user = await em.findOne(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { username: options.username });
            if (!user) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "that username does not exist",
                        },
                    ],
                };
            }
            const valid = await argon2__WEBPACK_IMPORTED_MODULE_2___default().verify(user.password, options.password);
            if (!valid) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "incorrect password",
                        },
                    ],
                };
            }
            req.session.userId = user.id;
            return { user };
        }
        catch (err) {
            console.log(err);
            return err.message;
        }
    }
    async deleteUser(id, { em }) {
        try {
            await em.nativeDelete(TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { id });
            return true;
        }
        catch (err) {
            return false;
        }
    }
};
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User, { nullable: true }),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "me", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => [TSDatabase_entities_User__WEBPACK_IMPORTED_MODULE_1__.User]),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => UserResponse),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)("id", () => Number)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "getSingleUser", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => UserResponse),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)("options", () => UsernamePasswordInput)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "register", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => Boolean),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "logout", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => UserResponse),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)("options", () => UsernamePasswordInput)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "login", null);
__decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => Boolean),
    __param(0, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Arg)("id", () => Number)),
    __param(1, (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Ctx)())
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    (0,type_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)()
], UserResolver);



/***/ }),

/***/ "./ts-src/server/ssr-client/index.tsx":
/*!********************************************!*\
  !*** ./ts-src/server/ssr-client/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./ts-src/server/ssr-client/template.ts");
/* harmony import */ var GlobalStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! GlobalStore */ "./ts-src/public/GlobalStore/GlobalStore.tsx");
/* harmony import */ var TSComponents_Home_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! TSComponents/Home/Home */ "./ts-src/public/components/Home/Home.tsx");










const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache(),
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.HttpLink({
        uri: "/graphql",
        fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_4___default()),
        fetchOptions: {
            credentials: "include",
        },
    }),
});
const minesweeperRouter = express__WEBPACK_IMPORTED_MODULE_2___default().Router();
minesweeperRouter.use("*", (req, _, next) => {
    console.log(req.originalUrl, req.method);
    next();
});
minesweeperRouter.get('/minesweeper-topTimes', (req, res) => {
    console.log(req.query);
    res.send('ok');
});
minesweeperRouter.get("*", async (req, res) => {
    var _a;
    const context = {};
    let resultScores;
    try {
        const link = 'https://beatminesweeper.app/graphql';
        const results = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(link, {
            headers: {
                "Content-Type": "application/json",
            },
            query: `query GetBeginnerScores {
                allBeginnerScores {
                  id
                  username
                  time
                  createdAt
                  updatedAt
                }
              }`,
        });
        resultScores = ((_a = results.data) === null || _a === void 0 ? void 0 : _a.data.allBeginnerScores) || [];
    }
    catch (err) {
        console.log(err.message);
    }
    const minesweeperStream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_6__.renderToNodeStream)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, { client: client },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStore__WEBPACK_IMPORTED_MODULE_8__.GlobalStoreProvider, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, { location: req.url, context: context },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_Home__WEBPACK_IMPORTED_MODULE_9__.Home, null)))));
    res.write((0,_template__WEBPACK_IMPORTED_MODULE_7__.htmlStart)(!!"development", "https://static.fullstackhrivnak.com/mines", resultScores));
    minesweeperStream.pipe(res, { end: false });
    minesweeperStream.on("end", () => {
        res.write((0,_template__WEBPACK_IMPORTED_MODULE_7__.htmlEnd)(!!"development", "https://static.fullstackhrivnak.com/mines"));
        res.end();
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minesweeperRouter);


/***/ }),

/***/ "./ts-src/server/ssr-client/template.ts":
/*!**********************************************!*\
  !*** ./ts-src/server/ssr-client/template.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlStart": () => (/* binding */ htmlStart),
/* harmony export */   "htmlEnd": () => (/* binding */ htmlEnd)
/* harmony export */ });
const htmlStart = (DEV_ENV, Cloudfront, resultScores) => {
    return (`<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Minesweeper</title>
        <link rel="icon" type="image/png" href='${Cloudfront}/mine-images/minecon.png'/>
        <link rel='stylesheet' href='/static/index.css'/>
      </head>

      <script>
        const devStyleSheetHref = '/static/index.css';
        const prodStyleSheetHref = '${Cloudfront}/build/public/index.css';
        const [head] = document.getElementsByTagName('HEAD');
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = (${DEV_ENV} === true ? devStyleSheetHref : prodStyleSheetHref)
        head.appendChild(link);
      </script>



      <!-- Server Side Rendering of Page Data -->
      <script>window.__INITIAL__DATA__=${JSON.stringify({ ssrTopTimes: resultScores })}</script>

    <body>
    <div id="minesweeper-root">`);
};
const htmlEnd = (DEV_ENV, Cloudfront) => (`</div>
      <script>
      const devScriptLink = '/static/index.js';
      const prodScriptLink = '${Cloudfront}/build/public/index.js';

      const [body] = document.getElementsByTagName('BODY');
      let script = document.createElement('script');
      script.src = (${DEV_ENV} === true ? devScriptLink : prodScriptLink)
      body.appendChild(script);
      </script>
    </body>
</html>`);



/***/ }),

/***/ "./ts-src/utils/toErrorMap.ts":
/*!************************************!*\
  !*** ./ts-src/utils/toErrorMap.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toErrorMap": () => (/* binding */ toErrorMap)
/* harmony export */ });
const toErrorMap = (errors) => {
    const errorMap = {};
    errors.forEach(({ field, message }) => {
        errorMap[field] = message;
    });
    return errorMap;
};


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@mikro-orm/core":
/*!**********************************!*\
  !*** external "@mikro-orm/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@mikro-orm/core");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-redis");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "type-graphql":
/*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("type-graphql");

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
/*!********************************!*\
  !*** ./ts-src/server/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ssr_client_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssr-client/index */ "./ts-src/server/ssr-client/index.tsx");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _database_mikro_orm_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../database/mikro-orm.config */ "./ts-src/database/mikro-orm.config.ts");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connect-redis */ "connect-redis");
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./ts-src/constants.ts");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Resolvers_beginnerScores__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Resolvers/beginnerScores */ "./ts-src/server/Resolvers/beginnerScores.ts");
/* harmony import */ var _Resolvers_intermediateScores__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Resolvers/intermediateScores */ "./ts-src/server/Resolvers/intermediateScores.ts");
/* harmony import */ var _Resolvers_advancedScores__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Resolvers/advancedScores */ "./ts-src/server/Resolvers/advancedScores.ts");
/* harmony import */ var _Resolvers_users__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Resolvers/users */ "./ts-src/server/Resolvers/users.ts");


















const main = async () => {
    const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
    const redisStore = connect_redis__WEBPACK_IMPORTED_MODULE_10___default()((express_session__WEBPACK_IMPORTED_MODULE_9___default()));
    const redisClient = redis__WEBPACK_IMPORTED_MODULE_8___default().createClient();
    app.use('*', (req, _, next) => {
        console.log(req.originalUrl);
        console.log("jambobjones");
        next();
    });
    app.use(cors__WEBPACK_IMPORTED_MODULE_11___default()({
        origin: ['https://fullstackhrivnak.com', 'https://beatminesweeper.app'],
        credentials: true
    }));
    app.use(express_session__WEBPACK_IMPORTED_MODULE_9___default()({
        name: _constants__WEBPACK_IMPORTED_MODULE_12__.COOKIE_NAME,
        store: new redisStore({
            client: redisClient,
            disableTouch: true
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: 'lax',
            secure: _constants__WEBPACK_IMPORTED_MODULE_12__.__prod__
        },
        saveUninitialized: false,
        secret: "jambobjones" || 0,
        resave: false
    }));
    const orm = await _mikro_orm_core__WEBPACK_IMPORTED_MODULE_13__.MikroORM.init(_database_mikro_orm_config__WEBPACK_IMPORTED_MODULE_7__.default);
    await orm.getMigrator().up();
    const apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__.ApolloServer({
        schema: await (0,type_graphql__WEBPACK_IMPORTED_MODULE_6__.buildSchema)({
            resolvers: [_Resolvers_beginnerScores__WEBPACK_IMPORTED_MODULE_14__.BeginnerScoreResolver, _Resolvers_intermediateScores__WEBPACK_IMPORTED_MODULE_15__.IntermediateScoreResolver, _Resolvers_advancedScores__WEBPACK_IMPORTED_MODULE_16__.AdvancedScoreResolver, _Resolvers_users__WEBPACK_IMPORTED_MODULE_17__.UserResolver],
            validate: false
        }),
        plugins: [
            (0,apollo_server_core__WEBPACK_IMPORTED_MODULE_1__.ApolloServerPluginLandingPageGraphQLPlayground)(),
        ],
        context: ({ req, res }) => ({ em: orm.em, req, res })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    app.use('/static', express__WEBPACK_IMPORTED_MODULE_3___default().static(path__WEBPACK_IMPORTED_MODULE_5___default().resolve(__dirname, '../../ts-dist/public')));
    app.get('*', _ssr_client_index__WEBPACK_IMPORTED_MODULE_4__.default);
    app.listen(4000, () => console.log('beat minesweeper app is listening on port 4000'));
};
main().catch((err) => console.log(err.message));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzRSxNQUFNLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV2RSxJQUFJLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN2QyxPQUFPLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUM3RjtJQUFBLENBQUM7SUFFRixJQUFJLFVBQVUsS0FBSyxjQUFjLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUM1QyxPQUFPLDJCQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUNqRztJQUFBLENBQUM7SUFFRixJQUFJLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUN4QyxPQUFPLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUNuRztJQUFBLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMs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QUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL3N3ZWVwc3F1YXJlc3R5bGVzLnNjc3M/OTRmYiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL2JvYXJkc3R5bGVzLnNjc3M/YjVlMSIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvaGVhZGVyLnNjc3M/YTcxMCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvaG9tZS5zY3NzP2JmZWQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9sZWFkZXJib2FyZC5zY3NzPzkzMzUiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL21pbGxpc2Vjb25kc3R5bGVzLnNjc3M/MDM3MiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbmVzd2VlcGVyL21pbmVzd2VlcGVyLnNjc3M/ZDIzMyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9za2lsbHN0eWxlcy5zY3NzPzVjZmIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9TbWlsZXlCYXIvc21pbGV5c3R5bGVzLnNjc3M/MjY0NCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy91c2VyRm9ybXMuc2Nzcz9mMTU0Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvQWR2YW5jZWRfU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvSW50ZXJtZWRpYXRlX1Njb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL2VudGl0aWVzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9taWtyby1vcm0uY29uZmlnLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL0dsb2JhbFN0b3JlL0dsb2JhbFN0b3JlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9HbG9iYWxTdG9yZS9nbG9iYWxSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkU3RvcmUvQm9hcmRTdG9yZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9Cb2FyZFN0b3JlL2JvYXJkQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkU3RvcmUvYm9hcmRSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL1NxdWFyZXMvU3F1YXJlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL1NxdWFyZXMvc3F1YXJlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC91c2VFZmZlY3RCb2FyZEhvb2tzLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRJblZpZXcudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9IZWFkZXJJbnRlcmZhY2VzL0xvZ2dlZE91dFZpZXcudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkRW50cnkudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvUGFnaW5hdGlvbi9QYWdlTm9MaS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9QYWdpbmF0aW9uL3BhZ2VOb1VsLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvTWlsbGlzZWNvbmRUaW1lci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL1RpbWVyU3RvcmUvVGltZXJTdG9yZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL1RpbWVyU3RvcmUvdGltZXJSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbmVzd2VlcGVyL01pbmVzd2VlcGVyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9Ta2lsbExldmVsU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvU21pbGV5QmFyL1NtaWxleUJhci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvTG9naW4udHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvVXNlckZvcm1zL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL2N1c3RvbUhvb2tzLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9SZXNvbHZlcnMvYWR2YW5jZWRTY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL2JlZ2lubmVyU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL1Jlc29sdmVycy9pbnRlcm1lZGlhdGVTY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL3VzZXJzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL3Nzci1jbGllbnQvaW5kZXgudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL3Nzci1jbGllbnQvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy91dGlscy90b0Vycm9yTWFwLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJAbWlrcm8tb3JtL2NvcmVcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1jb3JlXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJhcmdvbjJcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiY29ubmVjdC1yZWRpc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImNyb3NzLWZldGNoXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJ0eXBlLWdyYXBocWxcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgX19wcm9kX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IGNvbnN0IENPT0tJRV9OQU1FPSdxaWQnO1xuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRTY29yZSB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJvcGVydHkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICB0aW1lITogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgQmVnaW5uZXJTY29yZSB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJvcGVydHkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICB0aW1lITogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgSW50ZXJtZWRpYXRlU2NvcmUge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByb3BlcnR5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgdGltZSE6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQsIEludCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcsIHVuaXF1ZTogdHJ1ZSB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgQmVnaW5uZXJTY29yZSB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL0JlZ2lubmVyX1Njb3Jlc1wiO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmUgfSBmcm9tIFwiVFNEYXRhYmFzZS9lbnRpdGllcy9JbnRlcm1lZGlhdGVfU2NvcmVzXCI7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvQWR2YW5jZWRfU2NvcmVzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvVXNlclwiO1xuaW1wb3J0IHsgX19wcm9kX18gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gXCJAbWlrcm8tb3JtL2NvcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBwYXRoOiBcIi4vdHMtc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnNcIixcbiAgICBwYXR0ZXJuOiAvXltcXHctXStcXGQrXFwuW3RqXXMkLyxcbiAgfSxcbiAgZW50aXRpZXM6IFtCZWdpbm5lclNjb3JlLCBJbnRlcm1lZGlhdGVTY29yZSwgQWR2YW5jZWRTY29yZSwgVXNlcl0sXG4gIGRiTmFtZTogXCJNaW5lc3dlZXBlclwiLFxuICB0eXBlOiBcInBvc3RncmVzcWxcIixcbiAgZGVidWc6ICFfX3Byb2RfXyxcbiAgcG9ydDogNTQzMixcbiAgdXNlcjogX19wcm9kX18gPyBcInVidW50dVwiIDogXCJqYW1lc2hyaXZuYWtcIixcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBHUGFzc3dvcmRcbn0gYXMgUGFyYW1ldGVyczx0eXBlb2YgTWlrcm9PUk0uaW5pdD5bMF07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0JlZ2lubmVyU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGRlbGV0ZVVzZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIG5ld0FkdmFuY2VkU2NvcmU/OiBNYXliZTxBZHZhbmNlZFNjb3JlPjtcbiAgbmV3QmVnaW5uZXJTY29yZT86IE1heWJlPEJlZ2lubmVyU2NvcmU+O1xuICBuZXdJbnRlcm1lZGlhdGVTY29yZT86IE1heWJlPEludGVybWVkaWF0ZVNjb3JlPjtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVVc2VyQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTmV3QWR2YW5jZWRTY29yZUFyZ3MgPSB7XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25OZXdCZWdpbm5lclNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbk5ld0ludGVybWVkaWF0ZVNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8QWR2YW5jZWRTY29yZT47XG4gIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTxCZWdpbm5lclNjb3JlPjtcbiAgYWxsSW50ZXJtZWRpYXRlU2NvcmVzOiBBcnJheTxJbnRlcm1lZGlhdGVTY29yZT47XG4gIGdldEFsbFVzZXJzOiBBcnJheTxVc2VyPjtcbiAgZ2V0U2luZ2xlVXNlcjogVXNlclJlc3BvbnNlO1xuICBtZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFNpbmdsZVVzZXJBcmdzID0ge1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyRnJhZ21lbnQgPSB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ2luOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ291dDogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0FkdmFuY2VkU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQWR2YW5jZWRTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0JlZ2lubmVyU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uID0geyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJywgbmV3SW50ZXJtZWRpYXRlU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIHJlZ2lzdGVyOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNyZWF0ZWRBdDogc3RyaW5nLCB1cGRhdGVkQXQ6IHN0cmluZyB9PiB9O1xuXG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeSA9IHsgX190eXBlbmFtZT86ICdRdWVyeScsIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTx7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxJbnRlcm1lZGlhdGVTY29yZXM6IEFycmF5PHsgX190eXBlbmFtZT86ICdJbnRlcm1lZGlhdGVTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgbWU/OiB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXIgb24gVXNlciB7XG4gIGlkXG4gIHVzZXJuYW1lXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIGxvZ2luKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dvdXRNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dvdXRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dvdXRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ291dE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBBZHZhbmNlZFNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWR2YW5jZWRTY29yZSgkdXNlcm5hbWU6IFN0cmluZyEsICR0aW1lOiBGbG9hdCEpIHtcbiAgbmV3QWR2YW5jZWRTY29yZSh1c2VybmFtZTogJHVzZXJuYW1lLCB0aW1lOiAkdGltZSkge1xuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFthZHZhbmNlZFNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdXNlcm5hbWU6IC8vIHZhbHVlIGZvciAndXNlcm5hbWUnXG4gKiAgICAgIHRpbWU6IC8vIHZhbHVlIGZvciAndGltZSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPEFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzPihBZHZhbmNlZFNjb3JlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8QWR2YW5jZWRTY29yZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxBZHZhbmNlZFNjb3JlTXV0YXRpb24sIEFkdmFuY2VkU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQmVnaW5uZXJTY29yZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEJlZ2lubmVyU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0JlZ2lubmVyU2NvcmUodXNlcm5hbWU6ICR1c2VybmFtZSwgdGltZTogJHRpbWUpIHtcbiAgICB1c2VybmFtZVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbYmVnaW5uZXJTY29yZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxCZWdpbm5lclNjb3JlTXV0YXRpb24sIEJlZ2lubmVyU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4oQmVnaW5uZXJTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEJlZ2lubmVyU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8QmVnaW5uZXJTY29yZU11dGF0aW9uLCBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEludGVybWVkaWF0ZVNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gSW50ZXJtZWRpYXRlU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0ludGVybWVkaWF0ZVNjb3JlKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHRpbWU6ICR0aW1lKSB7XG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2ludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPihJbnRlcm1lZGlhdGVTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVnaXN0ZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlZ2lzdGVyTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVnaXN0ZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUmVnaXN0ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEFkdmFuY2VkU2NvcmVzIHtcbiAgYWxsQWR2YW5jZWRTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBZHZhbmNlZFNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEFkdmFuY2VkU2NvcmVzUXVlcnksIEdldEFkdmFuY2VkU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEFkdmFuY2VkU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEJlZ2lubmVyU2NvcmVzIHtcbiAgYWxsQmVnaW5uZXJTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRCZWdpbm5lclNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEJlZ2lubmVyU2NvcmVzUXVlcnksIEdldEJlZ2lubmVyU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEJlZ2lubmVyU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRJbnRlcm1lZGlhdGVTY29yZXMge1xuICBhbGxJbnRlcm1lZGlhdGVTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8R2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEludGVybWVkaWF0ZVNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNZVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lUXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWVMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSAnLi9nbG9iYWxSZWR1Y2Vycyc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBEZWZpbmVkVXNlck5hbWUsIFRpbWVyT24gfSBmcm9tICdNaW5lc3dlZXBlclR5cGVzJztcblxuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZXMge1xuICBkaW1lbnNpb25zOiBEaW1lbnNpb25zXG4gIHRvcFRpbWVzOiBbXTtcbiAgZGVmaW5lZFVzZXJOYW1lOiBEZWZpbmVkVXNlck5hbWU7XG4gIHRpbWVyT246IFRpbWVyT25cbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlVHlwZXMgPSB7XG4gIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbDogJ2JlZ2lubmVyJywgdmVydGljYWxEaW1lbnNpb246IDksIGhvcml6b250YWxEaW1lbnNpb246IDksIG51bWJlck9mTWluZXM6IDEwIH0sXG4gIHRvcFRpbWVzOiBbXSxcbiAgZGVmaW5lZFVzZXJOYW1lOiBudWxsLFxuICB0aW1lck9uOiBmYWxzZVxufTtcblxuXG5jb25zdCBHbG9iYWxTdG9yZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFtJU3RhdGVUeXBlcywgUmVhY3QuRGlzcGF0Y2g8YW55Pl0+KFtpbml0aWFsU3RhdGUsICgpID0+IHsgfV0pO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRcbn1cblxuY29uc3QgR2xvYmFsU3RvcmVQcm92aWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoQ29tYmluZWRSZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuICByZXR1cm4gKFxuICAgIC8vIHZhbHVlIHdhcyBwcmV2aW91c2x5IHN0b3JlXG4gICAgPEdsb2JhbFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0dsb2JhbFN0b3JlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU3RvcmVDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50UHJvdmlkZXInKVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuXG5leHBvcnQgeyB1c2VHbG9iYWxDb250ZXh0LCBHbG9iYWxTdG9yZVByb3ZpZGVyIH07IiwidHlwZSBUaW1lck9uVHlwZSA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG59O1xuXG5jb25zdCB0aW1lck9uID0gKHN0YXRlID0gZmFsc2UsIGFjdGlvbjogVGltZXJPblR5cGUpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTV0lUQ0ggVElNRVIgT05cIjpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgXCJTV0lUQ0ggVElNRVIgT0ZGXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSBcIkZSRUVaRSBUSU1FUiBTVEFURSBXSU5cIjpcbiAgICAgIHJldHVybiBcIkZSRUVaRSBXSU5cIjtcbiAgICBjYXNlIFwiRlJFRVpFIFRJTUVSIFNUQVRFIERFQURcIjpcbiAgICAgIHJldHVybiAnRlJFRVpFIERFQUQnO1xuICAgIGNhc2UgXCJGUkVFWkUgVElNRVIgU1RBVEUgVklDVE9SWVwiOlxuICAgICAgcmV0dXJuICdWSUNUT1JZJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIERpbWVuc2lvbkFjdGlvbiA9IHtcbiAgdHlwZTogc3RyaW5nO1xufTtcblxuY29uc3QgZGltZW5zaW9ucyA9IChzdGF0ZSA9IHsgc2tpbGxMZXZlbDogJ2JlZ2lubmVyJywgdmVydGljYWxEaW1lbnNpb246IDksIGhvcml6b250YWxEaW1lbnNpb246IDksIG51bWJlck9mTWluZXM6IDEwIH0sIGFjdGlvbjogRGltZW5zaW9uQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIEJFR0lOTkVSIERJTUVOU0lPTlNcIjpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9O1xuICAgIGNhc2UgXCJTRVQgSU5URVJNRURJQVRFIERJTUVOU0lPTlNcIjpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdpbnRlcm1lZGlhdGUnLCB2ZXJ0aWNhbERpbWVuc2lvbjogMTYsIGhvcml6b250YWxEaW1lbnNpb246IDE2LCBudW1iZXJPZk1pbmVzOiA0MCB9O1xuICAgIGNhc2UgJ1NFVCBBRFZBTkNFRCBESU1FTlNJT05TJzpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdhZHZhbmNlZCcsIHZlcnRpY2FsRGltZW5zaW9uOiAxNiwgaG9yaXpvbnRhbERpbWVuc2lvbjogMzAsIG51bWJlck9mTWluZXM6IDk5IH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvcFRpbWVzID0gKHN0YXRlID0gW10sIGFjdGlvbjpcbiAgeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgdG9wVGltZXM6IHN0cmluZ1tdfSB9XG4gICkgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIFRPUCBUSU1FU1wiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnRvcFRpbWVzO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGNvbnN0IHJlZHVjZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiB7XG4vLyAgIHJldHVybiAoc3RhdGUsIGFjdGlvbikgPT4gcmVkdWNlcnMucmVkdWNlKChhY2MsIG5leHRSZWR1Y2VyKSA9PiBuZXh0UmVkdWNlcihhY2MsIGFjdGlvbiksIHN0YXRlKVxuLy8gfTtcblxuXG5jb25zdCBkZWZpbmVkVXNlck5hbWUgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb246XG4gIHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IHVzZXJOYW1lOiBzdHJpbmcgfSB9XG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnVzZXJOYW1lO1xuICAgIGNhc2UgXCJVTlNFVCBERUZJTkVEIFVTRVJOQU1FXCI6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuLy8gICBhOiByZWR1Y2VSZWR1Y2VycyhwbHVzT25lUmVkdWNlciwgcGx1c09uZVJlZHVjZXIpLCAvLyBhTmV3ID0gYU9sZCArIDEgKyAxXG4vLyAgIGI6IHJlZHVjZVJlZHVjZXJzKHRpbWVzVHdvUmVkdWNlciwgcGx1c09uZVJlZHVjZXIpIC8vIGJOZXcgPSBiT2xkICogMiArIDFcbi8vIH0pO1xuXG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChzbGljZXM6IGFueSkgPT4gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiAoe1xuICAuLi5hY2MsXG4gIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbn0pLFxuICBzdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZGltZW5zaW9ucyxcbiAgZGVmaW5lZFVzZXJOYW1lLFxuICB0b3BUaW1lcyxcbiAgdGltZXJPblxufSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgQm9hcmRIb29rcyBmcm9tICcuL3VzZUVmZmVjdEJvYXJkSG9va3MnO1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tICdDdXN0b21Ib29rcyc7XG5pbXBvcnQgU3F1YXJlIGZyb20gJ1RTQ29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL1NxdWFyZSc7XG5cbmltcG9ydCAnLi9ib2FyZHN0eWxlcy5zY3NzJztcblxuXG5jb25zdCBCb2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRpbWVuc2lvbnMsIGRlZmluZWRVc2VyTmFtZSwgdGltZXJPbiwgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpXG4gIGNvbnN0IFt7IGZsaXBwZXJzLCBtaW5lQXJyLCBudW1iZXJzLCBzY3JvbGxCb2FyZCwgY29sb3JEZWxheSB9LCBib2FyZERpc3BhdGNoXSA9IHVzZUJvYXJkQ29udGV4dCgpO1xuXG4gIC8vIEJvYXJkIFNwZWNpZmljIHVzZUVmZmVjdHMgJiYgYWN0aW9ucy5cbiAgQm9hcmRIb29rcy5mcmVlemVDb2xvckRlbGF5RWZmZWN0KGRlZmluZWRVc2VyTmFtZSwgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3Muc3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0KGNvbG9yRGVsYXksIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLmZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0KHNjcm9sbEJvYXJkKTtcbiAgQm9hcmRIb29rcy5nZW5lcmF0ZU1pbmVzRWZmZWN0KGRpbWVuc2lvbnMsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLmdlbmVyYXRlTnVtYmVyRWZmZWN0KG1pbmVBcnIsIGRpbWVuc2lvbnMsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLnJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbCh0aW1lck9uLCBkaW1lbnNpb25zLCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5yZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbih0aW1lck9uLCBza2lsbExldmVsLCBib2FyZERpc3BhdGNoKTtcblxuICAvLyBjb25zdCBzZXRTY3JvbGxCb2FyZENhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEUgU0NST0xMQk9BUkQnIH0pLCBbXSk7XG5cbiAgdXNlSW50ZXJ2YWwoKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdJVEVSQVRFIENPTE9SUycgfSksIGNvbG9yRGVsYXkpO1xuXG4gIC8vIE1peGVkIVxuICBCb2FyZEhvb2tzLnJldmVhbEZsaXBwZXJFZmZlY3QoeyBtaW5lQXJyLCBmbGlwcGVycywgbnVtYmVycywgZ2xvYmFsRGlzcGF0Y2gsIGJvYXJkRGlzcGF0Y2ggfSk7XG5cbiAgLy8gR2xvYmFsIEJvYXJkIHVzZUVmZmVjdHNcbiAgQm9hcmRIb29rcy5yZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdChza2lsbExldmVsLCBnbG9iYWxEaXNwYXRjaCk7XG5cblxuICBjb25zdCBzZXRTY3JvbGxCb2FyZENhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFIFNDUk9MTEJPQVJEXCIgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZTogUmVhY3QuV2hlZWxFdmVudCkgPT5cbiAgYm9hcmREaXNwYXRjaCh7XG4gICAgdHlwZTogXCJNT0RVTEFURSBDT0xPUiBERUxBWVwiLFxuICAgIHBheWxvYWQ6IHsgbmV3Q29sb3JEZWxheTogZS5kZWx0YVkgfSxcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIGlkPVwicGxheS1ib2FyZFwiXG4gICAgb25XaGVlbD17KGUpID0+IGNvbG9yRGVsYXkgPyBoYW5kbGVTY3JvbGwoZSkgOiBudWxsfVxuICAgIG9uTW91c2VFbnRlcj17KCkgPT4gY29sb3JEZWxheSA/IHNldFNjcm9sbEJvYXJkQ2FsbGJhY2soKSA6IG51bGx9XG4gICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBjb2xvckRlbGF5ID8gc2V0U2Nyb2xsQm9hcmRDYWxsYmFjaygpIDogbnVsbH1cbiAgICA+XG4gICAgICB7Wy4uLm5ldyBBcnJheShkaW1lbnNpb25zLnZlcnRpY2FsRGltZW5zaW9uKV0ubWFwKChfLCByb3dJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPSdzd2VlcC1yb3cnPlxuICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKV0ubWFwKChfLCBzcXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyVGlsZTogbnVtYmVyID0gKChyb3dJbmRleCAqIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbikgKyBzcXJJbmRleCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNxdWFyZSBrZXk9e3NxckluZGV4fSBjdXJyVGlsZT17Y3VyclRpbGV9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXYgPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vYm9hcmRSZWR1Y2Vycyc7XG5pbXBvcnQgeyBDb2xvcnMsIEZsYWdzUmVtYWluaW5nLCBTdXJwcmlzZWQsIE51bWJlcnMsIE1pbmVBcnIsIEZsaXBwZXJzLCBDb2xvckRlbGF5LCBTY3JvbGxCb2FyZCB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZXMge1xuICBzY3JvbGxCb2FyZDogU2Nyb2xsQm9hcmQ7XG4gIGNvbG9yRGVsYXk6IENvbG9yRGVsYXk7XG4gIGZsaXBwZXJzOiBGbGlwcGVycztcbiAgbWluZUFycjogTWluZUFycjtcbiAgbnVtYmVyczogTnVtYmVycztcbiAgc3VycHJpc2VkOiBTdXJwcmlzZWQ7XG4gIGZsYWdzUmVtYWluaW5nOiBGbGFnc1JlbWFpbmluZztcbiAgY29sb3JzOiBDb2xvcnM7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlVHlwZXMgPSB7XG4gIHNjcm9sbEJvYXJkOiBmYWxzZSxcbiAgY29sb3JEZWxheTogMTAwMCxcbiAgZmxpcHBlcnM6IFtdLFxuICBtaW5lQXJyOiBbXSxcbiAgbnVtYmVyczoge30sXG4gIHN1cnByaXNlZDogZmFsc2UsXG4gIGZsYWdzUmVtYWluaW5nOiAxMCxcbiAgY29sb3JzOiBbJ2JsdWUtbnVtJywgJ2dyZWVuLW51bScsICdyZWQtbnVtJywgJ2dvbGQtbnVtJywgJ3B1cnBsZS1udW0nLCAnbWFyb29uLW51bScsICd0dXJxdW9pc2UtbnVtJywgJ2dyZXktbnVtJ11cbn07XG5cbmNvbnN0IEJvYXJkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8W0lTdGF0ZVR5cGVzLCBSZWFjdC5EaXNwYXRjaDxhbnk+XT4oW2luaXRpYWxTdGF0ZSwgKCkgPT4geyB9XSk7XG5cblxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXVxufVxuXG5jb25zdCBCb2FyZFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvYXJkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0JvYXJkQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUJvYXJkQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQm9hcmRDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50UHJvdmlkZXInKTtcbiAgfTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cblxuXG5cbmV4cG9ydCB7IHVzZUJvYXJkQ29udGV4dCwgQm9hcmRTdG9yZVByb3ZpZGVyIH07IiwiaW1wb3J0IHtHZW5lcmF0ZU51bWJlcnNGdW5jLCBJdGVyYXRlQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuXG5jb25zdCBpdGVyYXRlQ29sb3JzOiBJdGVyYXRlQ29sb3JzRnVuYyA9IChleGlzdGluZ0NvbG9ycykgPT4ge1xuICBjb25zdCBsYXN0Q29sb3IgPSBleGlzdGluZ0NvbG9ycy5wb3AoKTtcbiAgZXhpc3RpbmdDb2xvcnMudW5zaGlmdChsYXN0Q29sb3IpO1xuICByZXR1cm4gWy4uLmV4aXN0aW5nQ29sb3JzXTtcbn07XG5cblxudHlwZSBNb2R1bGF0ZUNvbG9yRGVsYXlGdW5jID0gKGV4aXN0aW5nOiBudW1iZXIsIG5ld0NvbG9yRGVsYXk6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5jb25zdCBtb2R1bGF0ZUNvbG9yRGVsYXk6IE1vZHVsYXRlQ29sb3JEZWxheUZ1bmMgPSAoZXhpc3RpbmcsIG5ld0NvbG9yRGVsYXkpID0+IHtcbiAgaWYgKChleGlzdGluZyArIG5ld0NvbG9yRGVsYXkpID4gMjUpIHtcbiAgICAvLyBJZiBJbmNyZWFzaW5nIHRoZSBDb2xvciBEZWxheS0gZG8gc28gYXQgYSByYXRlIG9mIDEsIG90aGVyd2lzZSB3aGVuIGRlY3JlYXNpbmcgZG8gc28gYXQgMi41IHJhdGUtIGZ1bGwgcmF0ZSBpcyBsZXNzIGVuam95YWJsZVxuICAgIG5ld0NvbG9yRGVsYXkgPSBuZXdDb2xvckRlbGF5IDwgMCAmJiBleGlzdGluZyA8IDIwMCA/IG5ld0NvbG9yRGVsYXkgLyA1XG4gICAgICA6IG5ld0NvbG9yRGVsYXkgPCAwID8gbmV3Q29sb3JEZWxheSAvIDIuNVxuICAgICAgICA6IDFcbiAgICByZXR1cm4gZXhpc3RpbmcgKyBuZXdDb2xvckRlbGF5O1xuICB9XG4gIHJldHVybiBleGlzdGluZztcbn07XG5cblxudHlwZSBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIG1pbmVzOiBudW1iZXJbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbEZsaXBwZXJzOiBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgbWluZXMpID0+IHtcbiAgZXhpc3RpbmdGbGlwcGVycyA9IGV4aXN0aW5nRmxpcHBlcnMubWFwKChmbGlwcGVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChmbGlwcGVyID09PSAnZmxhZycgfHwgbWluZXM/LmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgcmV0dXJuICdmbGFnJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxpcHBlZFRpbGU6IG51bWJlcikgPT4gKHN0cmluZyB8Ym9vbGVhbilbXTtcblxuY29uc3QgZmxpcE5vcm1hbFRpbGU6IEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzLCBmbGlwcGVkVGlsZSkgPT4ge1xuICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGlwcGVkVGlsZSwgMSwgdHJ1ZSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBSZWN1cnNlZFRpbGVzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgcmVjdXJzZWRUaWxlczogbnVtYmVyW10pID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCBmbGlwUmVjdXJzZWRUaWxlczogRmxpcFJlY3Vyc2VkVGlsZXNGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnMsIHJlY3Vyc2VkVGlsZXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWN1cnNlZFRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZXhpc3RpbmdGbGlwcGVycy5zcGxpY2UocmVjdXJzZWRUaWxlc1tpXSwgMSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5leGlzdGluZ0ZsaXBwZXJzXTtcbn07XG5cbnR5cGUgUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbERlYWRGbGlwcGVyczogUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzKSA9PiB7XG4gIGV4aXN0aW5nRmxpcHBlcnMgPSBleGlzdGluZ0ZsaXBwZXJzLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiAnZGVhZCdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KVxuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdXG59O1xuXG50eXBlIFNldEZsYWdGbGlwcGVkRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxhZ0ZsaXBwZWQ6IG51bWJlcikgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHNldEZsYWdGbGlwcGVkOiBTZXRGbGFnRmxpcHBlZEZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgZmxhZ0ZsaXBwZWQpID0+IHtcbiAgaWYgKGV4aXN0aW5nRmxpcHBlcnNbZmxhZ0ZsaXBwZWRdID09PSAnZmxhZycpIHtcbiAgICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGFnRmxpcHBlZCwgMSwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGV4aXN0aW5nRmxpcHBlcnMuc3BsaWNlKGZsYWdGbGlwcGVkLCAxLCAnZmxhZycpO1xuICB9XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEdlbmVyYXRlTWluZXNGdW5jID0gKGRpbWVuc2lvbnM6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyLCBob3Jpem9udGFsRGltZW5zaW9uOiBudW1iZXIgfSkgPT4gbnVtYmVyW107XG5cbmNvbnN0IGdlbmVyYXRlTWluZXM6IEdlbmVyYXRlTWluZXNGdW5jID0gKHsgbnVtYmVyT2ZNaW5lcywgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSkgPT4ge1xuICBsZXQgZ2VuZXJhdGVkTWluZXM6IG51bWJlcltdID0gW107XG4gIHdoaWxlIChnZW5lcmF0ZWRNaW5lcy5sZW5ndGggPCBudW1iZXJPZk1pbmVzKSB7XG4gICAgY29uc3QgbWluZUNhbmlkYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikpO1xuICAgIGlmICghZ2VuZXJhdGVkTWluZXMuaW5jbHVkZXMobWluZUNhbmlkYXRlKSkge1xuICAgICAgZ2VuZXJhdGVkTWluZXMucHVzaChtaW5lQ2FuaWRhdGUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGdlbmVyYXRlZE1pbmVzO1xufTtcblxuXG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyczogR2VuZXJhdGVOdW1iZXJzRnVuYyA9ICh7IG1pbmVBcnIsIHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0pID0+IHtcbiAgbGV0IGJvYXJkID0gWy4uLkFycmF5KHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikua2V5cygpXTtcbiAgbGV0IG51bUJvYXJkID0ge307XG5cbiAgbWluZUFycj8uZm9yRWFjaCgobWluZSwgXywgbWluZXMpID0+IHtcbiAgICAvLyBOdW1iZXIgaXMgVG9wIExlZnQgRGlhZ29uYWxcbiAgICBsZXQgdExEID0gaG9yaXpvbnRhbERpbWVuc2lvbiArIDE7XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0TEQpICYmICgoKG1pbmUgLSB0TEQpICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIHRMRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdExEXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdExEXSA9IG51bUJvYXJkW21pbmUgLSB0TERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0TERdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgaXMgQWJvdmVcbiAgICBjb25zdCB0RCA9IGhvcml6b250YWxEaW1lbnNpb247XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0RCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0RCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSBudW1Cb2FyZFttaW5lIC0gdERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vTnVtYmVyIGlzIFRvcCBSaWdodCBEaWFnb25hbFxuICAgIGNvbnN0IHRSRCA9IGhvcml6b250YWxEaW1lbnNpb24gLSAxO1xuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gdFJEKSAmJiAoKG1pbmUgLSB0UkQpICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0UkQpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIHRSRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIHRSRF0gPSBudW1Cb2FyZFttaW5lIC0gdFJEXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdFJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTnVtYmVyIHRvIHRoZSByaWdodFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lICsgMSkgJiYgKChtaW5lICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSArIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyAxXSA9IG51bUJvYXJkW21pbmUgKyAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCb3R0b20gUmlnaHQgRGlhZ29uYWxcbiAgICBjb25zdCBiUkQgPSBob3Jpem9udGFsRGltZW5zaW9uICsgMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJSRCkgJiYgKChtaW5lICsgYlJEKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYlJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiUkRdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiUkRdID0gbnVtQm9hcmRbbWluZSArIGJSRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJSRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCZWxvd1xuICAgIGNvbnN0IGJEID0gaG9yaXpvbnRhbERpbWVuc2lvbjtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJEKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIGJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IG51bUJvYXJkW21pbmUgKyBiRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9OdW1iZXIgaXMgQm90dG9tIExlZnQgRGlhZ29uYWxcbiAgICBjb25zdCBiTEQgPSBob3Jpem9udGFsRGltZW5zaW9uIC0gMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJMRCkgJiYgKCgobWluZSArIGJMRCkgKyAxKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYkxEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiTERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiTERdID0gbnVtQm9hcmRbbWluZSArIGJMRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJMRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciB0byB0aGUgbGVmdFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gMSkgJiYgKG1pbmUgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSAxXSA9IG51bUJvYXJkW21pbmUgLSAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICB9KVxuICByZXR1cm4gbnVtQm9hcmQ7XG59O1xuXG5cbmV4cG9ydCB7XG4gIC8vIENvbG9yc1xuICBpdGVyYXRlQ29sb3JzLFxuICBtb2R1bGF0ZUNvbG9yRGVsYXksXG4gIC8vIEZsaXBwZXJzXG4gIHJldmVhbEZsaXBwZXJzLFxuICBmbGlwTm9ybWFsVGlsZSxcbiAgZmxpcFJlY3Vyc2VkVGlsZXMsXG4gIHJldmVhbERlYWRGbGlwcGVycyxcbiAgc2V0RmxhZ0ZsaXBwZWQsXG4gIC8vIE1pbmVzXG4gIGdlbmVyYXRlTWluZXMsXG4gIC8vIE51bWJlcnNcbiAgZ2VuZXJhdGVOdW1iZXJzLFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgaXRlcmF0ZUNvbG9ycyxcbiAgbW9kdWxhdGVDb2xvckRlbGF5LFxuICByZXZlYWxGbGlwcGVycyxcbiAgZmxpcE5vcm1hbFRpbGUsXG4gIGZsaXBSZWN1cnNlZFRpbGVzLFxuICByZXZlYWxEZWFkRmxpcHBlcnMsXG4gIHNldEZsYWdGbGlwcGVkLFxuICBnZW5lcmF0ZU1pbmVzLFxuICBnZW5lcmF0ZU51bWJlcnNcbn0gZnJvbSAnLi9ib2FyZEFjdGlvbnMnO1xuaW1wb3J0IHtGbGlwcGVyc0Z1bmMsIFNjcm9sbEJvYXJkRnVuYywgQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sb3JEZWxheUZ1bmNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3Qgc2Nyb2xsQm9hcmQ6IFNjcm9sbEJvYXJkRnVuYyA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPR0dMRSBTQ1JPTExCT0FSRCc6XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuY29uc3QgY29sb3JEZWxheTogQ29sb3JEZWxheUZ1bmMgPSAoc3RhdGUgPSAxMDAwLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJVTlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSBcIlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIDEwMDA7XG4gICAgY2FzZSBcIk1PRFVMQVRFIENPTE9SIERFTEFZXCI6XG4gICAgICByZXR1cm4gbW9kdWxhdGVDb2xvckRlbGF5KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5uZXdDb2xvckRlbGF5KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IGNvbG9yczogQ29sb3JzRnVuYyA9IChzdGF0ZSA9IFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiSVRFUkFURSBDT0xPUlNcIjpcbiAgICAgIHJldHVybiBpdGVyYXRlQ29sb3JzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgICAgcmV0dXJuIFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXTtcbiAgICBjYXNlIFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGZsaXBwZXJzOiBGbGlwcGVyc0Z1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlJFU0VUIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBcIlNFVCBGTEFHIEZMSVBQRURcIjpcbiAgICAgIHJldHVybiBzZXRGbGFnRmxpcHBlZChzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGFnRmxpcHBlZCk7XG4gICAgY2FzZSBcIkZMSVAgTk9STUFMIFRJTEVcIjpcbiAgICAgIHJldHVybiBmbGlwTm9ybWFsVGlsZShzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGlwcGVkVGlsZSk7XG4gICAgY2FzZSBcIkZMSVAgUkVDVVJTRUQgVElMRVNcIjpcbiAgICAgIHJldHVybiBmbGlwUmVjdXJzZWRUaWxlcyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBcIlJFVkVBTCBERUFEIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gcmV2ZWFsRGVhZEZsaXBwZXJzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJSRVZFQUwgRkxJUFBFUlNcIjpcbiAgICAgIHJldHVybiByZXZlYWxGbGlwcGVycyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5taW5lQXJyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxudHlwZSBNaW5lc0Z1bmMgPSAoc3RhdGU6IFtdIHwgbnVtYmVyW10sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCBtaW5lczogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IG51bWJlcltdO1xuXG4vLyBwcmVsb2FkZWQgZGVmYXVsdCBzdGF0ZSBwcmV2ZW50cyBhbiBhdXRvbWF0aWMgd2luIGJ5IGRlZmF1bHRcbmNvbnN0IG1pbmVBcnI6IE1pbmVzRnVuYyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJHRU5FUkFURSBNSU5FU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTWluZXMoYWN0aW9uLnBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxudHlwZSBOdW1iZXJzRnVuYyA9IChzdGF0ZToge30sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbWluZUFycjogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IHt9O1xuY29uc3QgbnVtYmVyczogTnVtYmVyc0Z1bmMgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiR0VORVJBVEUgTlVNQkVSU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTnVtYmVycyhhY3Rpb24ucGF5bG9hZClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG5cbnR5cGUgU3VycHJpc2VkRnVuYyA9IChzdGF0ZTogYm9vbGVhbiB8IHN0cmluZywgYWN0aW9uOiB7IHR5cGU6IHN0cmluZyB9KSA9PiBib29sZWFuIHwgc3RyaW5nO1xuXG5jb25zdCBzdXJwcmlzZWQ6IFN1cnByaXNlZEZ1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU1VSUFJJU0VEIFNNSUxFUyc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdSRVNFVCBTTUlMRVMnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgJ0RFQUQgU01JTEVTJzpcbiAgICAgIHJldHVybiAnZGVhZCc7XG4gICAgY2FzZSAnVklDVE9SWSBTTUlMRVMnOlxuICAgICAgcmV0dXJuICd2aWN0b3J5JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG50eXBlIEZsYWdzUmVtYWluaW5nRnVuYyA9IChzdGF0ZTogbnVtYmVyLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiBudW1iZXIgfSkgPT4gbnVtYmVyO1xuXG5jb25zdCBmbGFnc1JlbWFpbmluZzogRmxhZ3NSZW1haW5pbmdGdW5jID0gKHN0YXRlID0gMTAsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkRFQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgY2FzZSBcIklOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBcIlNFVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIENvbWJpbmVSZWR1Y2Vyc0Z1bmMgPSAoc2xpY2VzOiBhbnkpID0+IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4gUmVhY3QuUmVkdWNlclN0YXRlV2l0aG91dEFjdGlvbjxhbnk+XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyczogQ29tYmluZVJlZHVjZXJzRnVuYyA9IChzbGljZXMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PiBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiAoe1xuICAuLi5hY2MsXG4gIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbn0pLFxuICBzdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmxpcHBlcnMsXG4gIG1pbmVBcnIsXG4gIG51bWJlcnMsXG4gIHNjcm9sbEJvYXJkLFxuICBjb2xvcnMsXG4gIGNvbG9yRGVsYXksXG4gIHN1cnByaXNlZCxcbiAgZmxhZ3NSZW1haW5pbmdcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q3VyclRpbGV9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuaW1wb3J0IHsgZ2VuTnVtYmVyQ2xhc3NOYW1lcywgZ2VuRW1wdHlDbGFzc05hbWVzLCBnZW5NaW5lQ2xhc3NOYW1lcywgaGFuZGxlQ2xpY2ssIGdlbmVyYXRlTG9naW5NZXNzYWdlIH0gZnJvbSAnLi9zcXVhcmVVdGlscyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgJy4vc3dlZXBzcXVhcmVzdHlsZXMuc2Nzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGN1cnJUaWxlOiBDdXJyVGlsZVxufTtcblxuY29uc3QgU3F1YXJlOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlIH0gPSBwcm9wcztcbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sIGRlZmluZWRVc2VyTmFtZSwgZGltZW5zaW9ucywgdGltZXJPbiB9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgW3sgY29sb3JzLCBtaW5lQXJyLCBmbGlwcGVycywgbnVtYmVycyB9LCBib2FyZERpc3BhdGNoXSA9IHVzZUJvYXJkQ29udGV4dCgpO1xuXG5cbiAgY29uc3QgdGlsZUlzQU1pbmUgPSBtaW5lQXJyLmluY2x1ZGVzKGN1cnJUaWxlKSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gJiYgZmxpcHBlcnNbY3VyclRpbGVdICE9PSAnZmxhZyc7XG5cbiAgY29uc3QgdGlsZUlzQU51bWJlciA9IGZsaXBwZXJzW2N1cnJUaWxlXSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gIT09ICdmbGFnJyAmJiBudW1iZXJzW2N1cnJUaWxlXTtcblxuICBjb25zdCB1c2VyTm90TG9nZ2VkSW4gPSAhZGVmaW5lZFVzZXJOYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS10ZXN0aWQ9e2B0ZXN0LSR7Y3VyclRpbGV9YH1cblxuICAgICAgb25DbGljaz17XG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgLy8gSWYgdGlsZSBpcyBhIGJvbWIuLi5cbiAgICAgICAgICBpZiAobWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkpIHtcbiAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ0ZSRUVaRSBUSU1FUiBTVEFURSBERUFEJyB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICAgIGluZGljYXRvcjogJ2RlYWQnLFxuICAgICAgICAgICAgICBib2FyZERpc3BhdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIElzIGEgTnVtYmVyIG9yIGEgRW1wdHkgU3F1YXJlXG4gICAgICAgICAgLy8gSWYgYW4gZW1wdHkgc3BhY2UgaXMgcmV2ZWFsZWQgdW5kZXIgYSBmbGFnLCBpbmNyZW1lbnQgcmVtYWluaW5nIGZsYWdzXG4gICAgICAgICAgaWYgKGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnKSBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0lOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIH0pO1xuICAgICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBhbmQgcmV2ZWFsIHRoZSB0aWxlXG4gICAgICAgICAgaWYgKCF0aW1lck9uKSB7XG4gICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTV0lUQ0ggVElNRVIgT04nIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwge1xuICAgICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgICBtaW5lQXJyLFxuICAgICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgICAgYm9hcmREaXNwYXRjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBOb3JtYWwgUGxheVxuICAgICAgICAgIHJldHVybiBoYW5kbGVDbGljayhlLCB7XG4gICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgIG51bWJlcnMsXG4gICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgIGluZGljYXRvcjogbnVsbCxcbiAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdXNlRG93bj17XG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoIWZsaXBwZXJzW2N1cnJUaWxlXSkgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTVVJQUklTRUQgU01JTEVTJyB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91c2VVcD17XG4gICAgICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgLy8gTWluZS0gRGVhdGggU2VxdWVuY2UgWERcbiAgICAgICAgICBpZiAobWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkgJiYgZS5idXR0b24gPT09IDAgJiYgIWUuY3RybEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnREVBRCBTTUlMRVMnIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQgU01JTEVTJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkNvbnRleHRNZW51PXtcbiAgICAgICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAvL0lmIG51bWJlciBpcyBhbHJlYWR5IHJldmVhbGVkLSBwcmV2ZW50IHVzZXIgZnJvbSBwdXR0aW5nIGEgZmxhZyBvbiBpdFxuICAgICAgICAgIGlmIChmbGlwcGVyc1tjdXJyVGlsZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBmbGlwcGVyc1tjdXJyVGlsZV0gPT09IGZhbHNlID8gJ0RFQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIDogJ0lOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gUHJldmVudCBjb250ZXh0IG1lbnUgaWYgdXNlciBhY2NpZGVudGFsbHkgcHJlc3NlcyBjb250ZXh0IG1lbnVcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkgPyBnZW5NaW5lQ2xhc3NOYW1lcyh7XG4gICAgICAgICAgdGltZXJPbixcbiAgICAgICAgICBza2lsbExldmVsLFxuICAgICAgICAgIGZsaXBwZXJzLFxuICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICBjdXJyVGlsZVxuICAgICAgICB9KVxuICAgICAgICAgIDogbnVtYmVyc1tjdXJyVGlsZV0gPyBnZW5OdW1iZXJDbGFzc05hbWVzKHtcbiAgICAgICAgICAgIHNraWxsTGV2ZWwsXG4gICAgICAgICAgICBkZWZpbmVkVXNlck5hbWUsXG4gICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgZmxpcHBlcnMsXG4gICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgY3VyclRpbGVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBnZW5FbXB0eUNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAvLyBHbG9iYWxcbiAgICAgICAgICAgICAgc2tpbGxMZXZlbCxcbiAgICAgICAgICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgICAvLyBCb2FyZCAmIHBhc3NlZCBpblxuICAgICAgICAgICAgICBmbGlwcGVycyxcbiAgICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgICBjdXJyVGlsZVxuICAgICAgICAgICAgfSlcbiAgICAgIH1cbiAgICA+XG4gICAgICB7XG4gICAgICAgIHVzZXJOb3RMb2dnZWRJbiA/XG4gICAgICAgICAgZ2VuZXJhdGVMb2dpbk1lc3NhZ2Uoe1xuICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICBza2lsbExldmVsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHRpbGVJc0FOdW1iZXIgPyBudW1iZXJzW2N1cnJUaWxlXVxuICAgICAgICAgICAgOiB0aWxlSXNBTWluZSA/ICcqJ1xuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICA8L2RpdiA+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiaW1wb3J0IHsgR2VuTnVtYmVyQ2xhc3NOYW1lc0Z1bmMsIEdlbmVyYXRlQ29sb3JzRnVuYywgR2VuRW1wdHlDbGFzc05hbWVzRnVuYywgR2VuTWluZUNsYXNzTmFtZXNGdW5jLCBHZW5lcmF0ZUxvZ2luTWVzc2FnZUZ1bmMsIENsYXNzTmFtZUFyciwgSGFuZGxlQ2xpY2tGdW5jIH0gZnJvbSAnTWluZXN3ZWVwZXJUeXBlcyc7XG5cblxuY29uc3QgZ2VuZXJhdGVMb2dpbk1lc3NhZ2U6IEdlbmVyYXRlTG9naW5NZXNzYWdlRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIHNraWxsTGV2ZWwgfSA9IGFyZ3M7XG5cbiAgY29uc3QgdCA9IGN1cnJUaWxlO1xuICBjb25zdCBiZWdpbm5lck1lc3NhZ2VzID0geyAnMSc6ICdQbGVhc2UnLCAnMic6ICdMb2dpbicsICczJzogJ0ZpcnN0JyB9O1xuICBjb25zdCBpbnRlcm1lZGlhdGVNZXNzYWdlcyA9IHsgJzInOiAnUGxlYXNlJywgJzQnOiAnTG9naW4nLCAnNic6ICdGaXJzdCcgfTtcbiAgY29uc3QgYWR2YW5jZWRNZXNzYWdlcyA9IHsgJzInOiAnUGxlYXNlJywgJzMnOiAnTG9naW4nLCAnNCc6ICdGaXJzdCcgfTtcblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2JlZ2lubmVyJyAmJiB0IDwgODEpIHtcbiAgICByZXR1cm4gYmVnaW5uZXJNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMTApKV0/LnN1YnN0cmluZyh0ICUgMTAsICh0ICUgMTApICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIGlmIChza2lsbExldmVsID09PSAnaW50ZXJtZWRpYXRlJyAmJiB0IDwgMTQ0KSB7XG4gICAgcmV0dXJuIGludGVybWVkaWF0ZU1lc3NhZ2VzW1N0cmluZyhNYXRoLmZsb29yKHQgLyAxNykpXT8uc3Vic3RyaW5nKHQgJSAxNywgKHQgJSAxNykgKyAxKSB8fCAnKic7XG4gIH07XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdhZHZhbmNlZCcgJiYgdCA8IDI0MCkge1xuICAgIHJldHVybiBhZHZhbmNlZE1lc3NhZ2VzW1N0cmluZyhNYXRoLmZsb29yKHQgLyAzMSkpXT8uc3Vic3RyaW5nKHQgJSAzMy4xNSwgKHQgJSAzMy4xNSkgKyAxKSB8fCAnKic7XG4gIH07XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cblxuY29uc3QgZ2VuZXJhdGVDb2xvcnM6IEdlbmVyYXRlQ29sb3JzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIGNvbG9ycywgc2tpbGxMZXZlbCB9ID0gYXJncztcbiAgY29uc3QgdCA9IGN1cnJUaWxlO1xuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2JlZ2lubmVyJykge1xuICAgIGlmICgodCA8PSA5KSB8fCAodCA+PSAxNiAmJiB0IDw9IDE5KSB8fCAodCA+PSAyNSAmJiB0IDw9IDI5KSB8fCAodCA+PSAzNSkpIHtcbiAgICAgIHJldHVybiBjb2xvcnNbKHQgKyAoTWF0aC5mbG9vcih0IC8gOCkpKSAlIDldXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdpbnRlcm1lZGlhdGUnKSB7XG4gICAgaWYgKCh0IDw9IDMzKSB8fCAodCA+PSA0MCAmJiB0IDw9IDY2KSB8fCAodCA+PSA3MyAmJiB0IDw9IDk5KSB8fCAodCA+PSAxMDcgJiYgdCA8PSAxNDQpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDE2KSkpICUgOF1cbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2FkdmFuY2VkJykge1xuICAgIGlmICgodCA8PSA2NikgfHwgKHQgPj0gNzMgJiYgdCA8PSA5OSkgfHwgKHQgPj0gMTA1ICYmIHQgPD0gMTMyKSB8fCAodCA+PSAxMzggJiYgdCA8PSAyNDEpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDMwKSkpICUgOF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZW5OdW1iZXJDbGFzc05hbWVzOiBHZW5OdW1iZXJDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgdGltZXJPbiwgZGVmaW5lZFVzZXJOYW1lLCBza2lsbExldmVsLCBjdXJyVGlsZSwgbnVtYmVycywgZmxpcHBlcnMsIGNvbG9ycyB9ID0gYXJncztcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXTtcblxuICBpZiAoY29sb3JzICE9PSBudWxsKSB7XG4gICAgY2xhc3NOYW1lQXJyLnB1c2goZ2VuZXJhdGVDb2xvcnMoeyBjdXJyVGlsZSwgY29sb3JzLCBza2lsbExldmVsIH0pLCAnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbiAgfTtcblxuICBjb25zdCBudW1iZXJUaWxlT25WaWN0b3J5RGVhZE9yTm90TG9nZ2VkSW4gPSAodGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIERFQUQnIHx8ICFkZWZpbmVkVXNlck5hbWUpO1xuXG4gIGNvbnN0IGZsYWdPbk51bWJlclRpbGVHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIG51bWJlclRpbGVPblZpY3RvcnlEZWFkT3JOb3RMb2dnZWRJbiA/ICdkaXNhYmxlZCdcbiAgICAgIDogZmxhZ09uTnVtYmVyVGlsZUdhbWVQbGF5ID8gJ2ZsYWcnXG4gICAgICAgIDogJ251bWJlcidcbiAgKTtcblxuICAvLyBDb2xvciBEZXRlcm1pbmF0aW9uXG4gIGNvbnN0IGN1cnJOdW06IG51bWJlciA9IG51bWJlcnNbY3VyclRpbGVdO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIGN1cnJOdW0gPT09IDEgPyAnYmx1ZS1udW0nXG4gICAgICA6IGN1cnJOdW0gPT09IDIgPyAnZ3JlZW4tbnVtJ1xuICAgICAgICA6IGN1cnJOdW0gPT09IDMgPyAncmVkLW51bSdcbiAgICAgICAgICA6IGN1cnJOdW0gPT09IDQgPyAncHVycGxlLW51bSdcbiAgICAgICAgICAgIDogY3Vyck51bSA9PT0gNSA/ICdtYXJvb24tbnVtJ1xuICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDYgPyAndHVycXVvaXNlLW51bSdcbiAgICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDcgPyAnYmxhY2stbnVtJ1xuICAgICAgICAgICAgICAgICAgOiBjdXJyTnVtID09PSA4ID8gJ2dyZXktbnVtJ1xuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IGdlbkVtcHR5Q2xhc3NOYW1lczogR2VuRW1wdHlDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgc2tpbGxMZXZlbCwgZGVmaW5lZFVzZXJOYW1lLCB0aW1lck9uLCBjdXJyVGlsZSwgY29sb3JzLCBmbGlwcGVycyB9ID0gYXJnc1xuICBsZXQgY2xhc3NOYW1lQXJyOiBDbGFzc05hbWVBcnIgPSBbJ3N3ZWVwLXNxdWFyZSddO1xuXG4gIGlmIChjb2xvcnMgIT09IG51bGwpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IGVtcHR5VGlsZU9uVmljdG9yeU9yRGVhZCA9ICh0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCcpO1xuICBjb25zdCBlbXB0eVRpbGVPbk5vdExvZ2dlZEluID0gIWRlZmluZWRVc2VyTmFtZTtcbiAgY29uc3QgZmxhZ09uRW1wdHlUaWxlR2FtZXBsYXkgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJztcbiAgY29uc3QgZW1wdHlUaWxlUmV2ZWFsZWRHYW1lcGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gdHJ1ZTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBlbXB0eVRpbGVPblZpY3RvcnlPckRlYWQgPyAnZGlzYWJsZWQgZGFyay1zcXVhcmUnXG4gICAgICA6IGVtcHR5VGlsZU9uTm90TG9nZ2VkSW4gPyAnZGlzYWJsZWQnXG4gICAgICAgIDogZmxhZ09uRW1wdHlUaWxlR2FtZXBsYXkgPyAnZmxhZydcbiAgICAgICAgICA6IGVtcHR5VGlsZVJldmVhbGVkR2FtZXBsYXkgPyAnZGFyay1zcXVhcmUnXG4gICAgICAgICAgICA6IG51bGxcbiAgKTtcbiAgcmV0dXJuIGNsYXNzTmFtZUFyci5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBnZW5NaW5lQ2xhc3NOYW1lczogR2VuTWluZUNsYXNzTmFtZXNGdW5jID0gKGFyZ3MpID0+IHtcbiAgY29uc3QgeyB0aW1lck9uLCBza2lsbExldmVsLCBjdXJyVGlsZSwgY29sb3JzLCBmbGlwcGVycyB9ID0gYXJncztcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXVxuXG4gIGlmIChjb2xvcnMgIT09IG51bGwpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IGZsYWdPbk1pbmVUaWxlQWZ0ZXJWaWN0b3J5ID0gKHRpbWVyT24gPT09ICdWSUNUT1JZJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIFdJTicpICYmIGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZUFmdGVyRGVhZCA9IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCc7XG4gIGNvbnN0IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZU9uRGVhZCA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gdHJ1ZTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBmbGFnT25NaW5lVGlsZUFmdGVyVmljdG9yeSA/ICdmbGFnIGRpc2FibGVkJ1xuICAgICAgOiBtaW5lVGlsZUFmdGVyRGVhZCA/ICdkaXNhYmxlZCBtaW5lJ1xuICAgICAgICA6IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA/ICdmbGFnJ1xuICAgICAgICAgIDogbWluZVRpbGVPbkRlYWQgPyAnbWluZSdcbiAgICAgICAgICAgIDogbnVsbFxuICApO1xuXG4gIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xufTtcblxuXG50eXBlIFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzOiB7IGN1cnJUaWxlOiBudW1iZXIsIGRpbWVuc2lvbnM6IHsgaG9yaXpvbnRhbERpbWVuc2lvbjogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyIH0sIG51bWJlcnM6IHt9LCBtaW5lQXJyOiBudW1iZXJbXSwgcmVzdWx0QXJyOiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXSB9KSA9PiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXTtcblxuY29uc3QgdGlsZVJlY3Vyc2U6IFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9ID0gYXJnc1xuICByZXN1bHRBcnIucHVzaChjdXJyVGlsZSlcbiAgdHlwZSBFdmFsVGVzdEZ1bmMgPSAoY3VyclRpbGU6IG51bWJlcikgPT4gbnVtYmVyO1xuXG4gIGNvbnN0IGV2YWxVOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgLSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsUjogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlICsgMSk7XG4gIGNvbnN0IGV2YWxEOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgKyBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsTDogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlIC0gMSk7XG5cbiAgdHlwZSBUZXN0Q3VyclRpbGVGdW5jID0gKGN1cnJUaWxlOiBudW1iZXIsIHRlc3RGdW5jOiBGdW5jdGlvbikgPT4gYm9vbGVhbjtcblxuICBjb25zdCB0ZXN0Q3VyclRpbGU6IFRlc3RDdXJyVGlsZUZ1bmMgPSAoY3VyclRpbGUsIHRlc3RGdW5jKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFudW1iZXJzW3Rlc3RGdW5jKGN1cnJUaWxlKV1cbiAgICAgICYmICFtaW5lQXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgIC8vICYmIHByZXZGbGlwcGVyc1t0ZXN0RnVuYyh0aWxlKV0gPT09IGZhbHNlXG4gICAgICAmJiAhcmVzdWx0QXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgICYmIHRlc3RGdW5jKGN1cnJUaWxlKSA+PSAwXG4gICAgICAmJiB0ZXN0RnVuYyhjdXJyVGlsZSkgPD0gKGRpbWVuc2lvbnMudmVydGljYWxEaW1lbnNpb24gKiBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pXG4gICAgKVxuICB9XG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBVcFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxVKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsVShjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBSaWdodFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxSKVxuICAgICYmIChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDAgJiYgY3VyclRpbGUgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDApKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsUihjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBEb3duXG4gIC8vICoqKioqKioqKioqXG5cbiAgaWYgKFxuICAgIHRlc3RDdXJyVGlsZShjdXJyVGlsZSwgZXZhbEQpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxEKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pXG4gIH1cblxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgTGVmdFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxMKVxuICAgICYmICgoZXZhbEwoY3VyclRpbGUgKyAxKSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsTChjdXJyVGlsZSArIDEpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uID09PSAwICYmIGV2YWxMKGN1cnJUaWxlKSAlIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbiA9PT0gMCkpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxMKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pO1xuICB9O1xuXG4gIHJldHVybiByZXN1bHRBcnI7XG59O1xuXG5cblxuXG5cbmNvbnN0IGhhbmRsZUNsaWNrOiBIYW5kbGVDbGlja0Z1bmMgPSAoZXZlbnQsIGFyZ3MpID0+IHtcblxuICBjb25zdCB7IGN1cnJUaWxlLCBpbmRpY2F0b3IsIGRpbWVuc2lvbnMsIG1pbmVBcnIsIG51bWJlcnMsIGJvYXJkRGlzcGF0Y2ggfSA9IGFyZ3M7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIChpbmRpY2F0b3IgPT09ICdkZWFkJykgPyBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFVkVBTCBERUFEIEZMSVBQRVJTJyB9KVxuICAgIDogKGV2ZW50LnR5cGUgPT09ICdjb250ZXh0bWVudScpID8gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTRVQgRkxBRyBGTElQUEVEJywgcGF5bG9hZDogeyBmbGFnRmxpcHBlZDogY3VyclRpbGUgfSB9KVxuICAgICAgOiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBpbmRpY2F0b3IgIT09ICdkZWFkJykgJiYgKCFudW1iZXJzW2N1cnJUaWxlXSAmJiAhbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkpID9cbiAgICAgICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ0ZMSVAgUkVDVVJTRUQgVElMRVMnLFxuICAgICAgICAgIHBheWxvYWQ6IHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGN1cnJUaWxlLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnI6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgICAgIDogKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgaW5kaWNhdG9yICE9PSAnZGVhZCcpID9cbiAgICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0ZMSVAgTk9STUFMIFRJTEUnLCBwYXlsb2FkOiB7IGZsaXBwZWRUaWxlOiBjdXJyVGlsZSB9IH0pXG4gICAgICAgICAgOiBudWxsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2VuRW1wdHlDbGFzc05hbWVzLFxuICBnZW5OdW1iZXJDbGFzc05hbWVzLFxuICBnZW5NaW5lQ2xhc3NOYW1lcyxcbiAgZ2VuZXJhdGVMb2dpbk1lc3NhZ2UsXG4gIGhhbmRsZUNsaWNrXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBSZXNldEdhbWVFZmZlY3RPblNtaWxleU9yU2tpbGxGdW5jLFxuICBGcmVlemVDb2xvckRlbGF5RWZmZWN0RnVuYyxcbiAgU3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0RnVuYyxcbiAgR2VuZXJhdGVNaW5lc0VmZmVjdEZ1bmMsXG4gIEZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0RnVuYyxcbiAgUmV2ZWFsRmxpcHBlckVmZmVjdEZ1bmMsXG4gIEdlbmVyYXRlTnVtYmVyRWZmZWN0RnVuYyxcbiAgUmVzZXRPblNraWxsTGV2ZWxDaGFuZ2VFZmZlY3RGdW5jLFxuICBSZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbkZ1bmMsXG59IGZyb20gXCIuLi8uLi8uLi9taW5lc3dlZXBlci10eXBlc1wiO1xuXG5jb25zdCBnZW5lcmF0ZU1pbmVzRWZmZWN0OiBHZW5lcmF0ZU1pbmVzRWZmZWN0RnVuYyA9IChcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiR0VORVJBVEUgTUlORVNcIiwgcGF5bG9hZDogZGltZW5zaW9ucyB9KTtcbiAgfSwgW10pO1xufTtcblxuY29uc3Qgc3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0OiBTdG9wQ29sb3JJdGVyYXRpb25FZmZlY3RGdW5jID0gKFxuICBjb2xvckRlbGF5LFxuICBib2FyZERpc3BhdGNoXG4pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29sb3JEZWxheSA9PT0gbnVsbCkge1xuICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmREaXNwYXRjaCh7dHlwZTogXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIn0pO1xuICAgIH1cbiAgfSwgW2NvbG9yRGVsYXldKTtcbn07XG5cbmNvbnN0IGZyZWV6ZUNvbG9yRGVsYXlFZmZlY3Q6IEZyZWV6ZUNvbG9yRGVsYXlFZmZlY3RGdW5jID0gKFxuICBkZWZpbmVkVXNlck5hbWUsXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZpbmVkVXNlck5hbWUpIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUIENPTE9SIERFTEFZXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goe3R5cGU6IFwiU0VUIENPTE9SIERFTEFZXCJ9KTtcbiAgICB9XG4gIH0sIFtkZWZpbmVkVXNlck5hbWVdKTtcbn07XG5cbi8vIFRoaXMgY29uZGl0aW9uIHJlc2V0cyB0aGUgYm9hcmQgd2hlbiB0aGUgc21pbGV5IGZhY2UgaXMgcHVuY2hlZCBvciB0aGUgc2tpbGxMZXZlbCBpcyBjaGFuZ2VkIGJlY2F1c2UgdGltZXJPbiBpcyBzZXQgdG8gZmFsc2UuIEl0IGFsc28gcmVzZXRzIHRoZSBib2FyZCBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBza2lsbExldmVsIGJlZm9yZSBwbGF5aW5nLCB3aGljaCBpcyBtb3N0IGxpa2VseS5cbmNvbnN0IHJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbDogUmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsRnVuYyA9IChcbiAgdGltZXJPbixcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAvLyBTZXQgYWxsIFRpbGVzIHRvIEZhbHNlIChoaWRkZW4pXG4gICAgICBib2FyZERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJSRVNFVCBGTElQUEVSU1wiLFxuICAgICAgICBwYXlsb2FkOiBBcnJheS5mcm9tKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxlbmd0aDpcbiAgICAgICAgICAgICAgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uICogZGltZW5zaW9ucy52ZXJ0aWNhbERpbWVuc2lvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IGZhbHNlXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIC8vIEdlbmVyYXRlIE1pbmVzXG4gICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJHRU5FUkFURSBNSU5FU1wiLCBwYXlsb2FkOiBkaW1lbnNpb25zIH0pO1xuICAgIH1cbiAgfSwgW3RpbWVyT24sIGRpbWVuc2lvbnNdKTtcbn07XG5cbmNvbnN0IGZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0OiBGcmVlemVTY3JvbGxCb2FyZEVmZmVjdEZ1bmMgPSAoc2Nyb2xsQm9hcmQpID0+IHtcbiAgdHlwZSBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAodGhpczogRG9jdW1lbnQsIGV2OiBXaGVlbEV2ZW50KSA9PiBib29sZWFuO1xuXG4gIGNvbnN0IHByZXZlbnREZWZhdWx0OiBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAoZXYpID0+IHtcbiAgICBldiA9IGV2IHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZXYucHJldmVudERlZmF1bHQpIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbEJvYXJkKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgfSwgW3Njcm9sbEJvYXJkXSk7XG59O1xuXG5jb25zdCByZXZlYWxGbGlwcGVyRWZmZWN0OiBSZXZlYWxGbGlwcGVyRWZmZWN0RnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgbWluZUFyciwgZmxpcHBlcnMsIG51bWJlcnMsIGdsb2JhbERpc3BhdGNoLCBib2FyZERpc3BhdGNoIH0gPSBhcmdzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1pbmVBcnIubGVuZ3RoICYmIGZsaXBwZXJzLmxlbmd0aCAmJiBmbGlwcGVyc1swXSAhPT0gXCJkZWFkXCIpIHtcbiAgICAgIC8vIE9ubHkgc3RvcmUgc2NvcmUgd2hlbiBhbGwgZmxpcHBlcnMgaGF2ZSBiZWVuIGZsaXBwZWQgKGVuZHMgcmVjdXJzaXZlIGxvb3ApXG4gICAgICBpZiAoXG4gICAgICAgIGZsaXBwZXJzLmV2ZXJ5KChmbGlwcGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmbGlwcGVyID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluZUFycltmbGlwcGVyXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZsaXBwZXIgPT09IHRydWUgfHwgZmxpcHBlciA9PT0gXCJmbGFnXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGNsb2NrIGFuZCBpbmRpY2F0ZSBhIHdpblxuICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiRlJFRVpFIFRJTUVSIFNUQVRFIFZJQ1RPUllcIiB9KTtcblxuICAgICAgICAvLyBJZiBhIHZpY3RvcnkgaXMgZGV0ZWN0ZWQgYnkgYWxsIG51bWJlcnMgYmVpbmcgcmV2ZWFsZWQsIGZsaXAgYWxsIHRoZSBlbXB0eSBzcXVhcmVzXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5sZW5ndGggJiZcbiAgICAgICAgT2JqZWN0LmtleXMobnVtYmVycykuZXZlcnkoKG51bSkgPT4gZmxpcHBlcnNbbnVtXSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJSRVZFQUwgRkxJUFBFUlNcIiwgcGF5bG9hZDogeyBtaW5lQXJyIH0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZmxpcHBlcnNdKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyRWZmZWN0OiBHZW5lcmF0ZU51bWJlckVmZmVjdEZ1bmMgPSAoXG4gIG1pbmVBcnIsXG4gIHsgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIC8vV2hlbiBNaW5lcyBhcmUgcmVzZXQsIGdlbmVyYXRlIG51bWJlcnMgYXJvdW5kIHRob3NlIG1pbmVzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkdFTkVSQVRFIE5VTUJFUlNcIixcbiAgICAgIHBheWxvYWQ6IHsgbWluZUFyciwgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgICB9KTtcbiAgfSwgW21pbmVBcnJdKTtcbn07XG5cbmNvbnN0IHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0OiBSZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdEZ1bmMgPSAoXG4gIHNraWxsTGV2ZWwsXG4gIGdsb2JhbERpc3BhdGNoXG4pID0+IHtcbiAgLy8gSWYgU2tpbGwgTGV2ZWwgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIGJvYXJkLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTV0lUQ0ggVElNRVIgT0ZGXCIgfSk7XG4gIH0sIFtza2lsbExldmVsXSk7XG59O1xuXG5jb25zdCByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbjogUmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT25GdW5jID1cbiAgKHRpbWVyT24sIHNraWxsTGV2ZWwsIGJvYXJkRGlzcGF0Y2gpID0+IHtcbiAgICAvLyBUaGlzIHJlc2V0cyB0aGUgZmxhZ3Mgd2hlbmV2ZXIgdGhlIHNraWxsTGV2ZWwgaXMgY2hhbmdlZCBvciBnYW1lIGlzIHJlc2V0XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAgIGJvYXJkRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUIEZMQUdTIFJFTUFJTklOR1wiLFxuICAgICAgICAgIHBheWxvYWQ6XG4gICAgICAgICAgICBza2lsbExldmVsID09PSBcImJlZ2lubmVyXCJcbiAgICAgICAgICAgICAgPyAxMFxuICAgICAgICAgICAgICA6IHNraWxsTGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgPyA0MFxuICAgICAgICAgICAgICA6IDk5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbc2tpbGxMZXZlbCwgdGltZXJPbl0pO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdlbmVyYXRlTWluZXNFZmZlY3QsXG4gIHN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdCxcbiAgZnJlZXplQ29sb3JEZWxheUVmZmVjdCxcbiAgcmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsLFxuICBmcmVlemVTY3JvbGxCb2FyZEVmZmVjdCxcbiAgcmV2ZWFsRmxpcHBlckVmZmVjdCxcbiAgZ2VuZXJhdGVOdW1iZXJFZmZlY3QsXG4gIHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0LFxuICByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbixcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dvdXRNdXRhdGlvbkZuLCBNZURvY3VtZW50IH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmludGVyZmFjZSBMb2dnZWRJblZpZXdQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGxvZ291dDogTG9nb3V0TXV0YXRpb25GbjtcbiAgaXNQcm94aWVkOiBib29sZWFuO1xufVxuXG5jb25zdCBMb2dnZWRJblZpZXc6IFJlYWN0LkZDPExvZ2dlZEluVmlld1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IGhvbWVTZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9mdWxsc3RhY2svbWluZXN3ZWVwZXInO1xuICBjb25zdCBzY29yZWJvYXJkU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvc2NvcmVib2FyZFwiO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChob21lU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBgaGVhZGVyLW5hdi11bC1saWBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7KGhvbWVTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbG9nZ2VkLWluLXVzZXItdGl0bGVgfT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIExvZ2dlZCBpbiBhczoge3Byb3BzLnVzZXJuYW1lfXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkpIHx8IDxMaW5rIHRvPXtwcm9wcy5pc1Byb3hpZWQgPyAnL2Z1bGxzdGFjay9taW5lc3dlZXBlcicgOiAnLyd9Pk1pbmVzd2VlcGVyPC9MaW5rPn1cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAoc2NvcmVib2FyZFNlbGVjdGVkICYmIGBzZWxlY3RlZC1oZWFkZXIgaGVhZGVyLW5hdi11bC1saWApIHx8XG4gICAgICAgICAgXCJoZWFkZXItbmF2LXVsLWxpXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8TGluayB0bz17cHJvcHMuaXNQcm94aWVkID8gJy9mdWxsc3RhY2svbWluZXN3ZWVwZXIvc2NvcmVib2FyZCcgOiAnL3Njb3JlYm9hcmQnfT5IaWdoIFNjb3JlczwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdi11bC1saVwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ291dC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmxvZ291dCh7XG4gICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbTWVEb2N1bWVudF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdmdWxsc3RhY2snKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnL2Z1bGxzdGFjay9taW5lc3dlZXBlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ291dFxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VkSW5WaWV3O1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmssIHVzZUxvY2F0aW9ufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW50ZXJmYWNlIExvZ2dlZE91dFZpZXdQcm9wcyB7XG4gIGlzUHJveGllZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IExvZ2dlZE91dFZpZXc6IFJlYWN0LkZDPExvZ2dlZE91dFZpZXdQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgbG9naW5TZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2xvZ2luJyB8fCBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9mdWxsc3RhY2svbWluZXN3ZWVwZXIvbG9naW4nO1xuICBjb25zdCByZWdpc3RlclNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvcmVnaXN0ZXInO1xuICBjb25zdCBzY29yZWJvYXJkU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zY29yZWJvYXJkJ1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChsb2dpblNlbGVjdGVkICYmIGBzZWxlY3RlZC1oZWFkZXIgaGVhZGVyLW5hdi11bC1saWApIHx8XG4gICAgICAgICAgYGhlYWRlci1uYXYtdWwtbGlgXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPExpbmsgdG89e3Byb3BzLmlzUHJveGllZCA/ICcvZnVsbHN0YWNrL21pbmVzd2VlcGVyL2xvZ2luJyA6ICcvbG9naW4nfT5Mb2dpbjwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAocmVnaXN0ZXJTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPXtwcm9wcy5pc1Byb3hpZWQgPyAnL2Z1bGxzdGFjay9taW5lc3dlZXBlci9yZWdpc3RlcicgOiAnL3JlZ2lzdGVyJ30+UmVnaXN0ZXI8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHNjb3JlYm9hcmRTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPXtwcm9wcy5pc1Byb3hpZWQgPyAnL2Z1bGxzdGFjay9taW5lc3dlZXBlci9zY29yZWJvYXJkJyA6ICcvc2NvcmVib2FyZCd9PkhpZ2ggU2NvcmVzPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlZE91dFZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IE1pbmVzd2VlcGVyIGZyb20gXCJUU0NvbXBvbmVudHMvTWluZXN3ZWVwZXIvTWluZXN3ZWVwZXJcIjtcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tIFwiVFNDb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkXCI7XG5cbmltcG9ydCBVc2VyTG9naW5Gb3JtIGZyb20gXCJUU0NvbXBvbmVudHMvVXNlckZvcm1zL0xvZ2luXCI7XG5pbXBvcnQgVXNlclJlZ2lzdGVyRm9ybSBmcm9tIFwiVFNDb21wb25lbnRzL1VzZXJGb3Jtcy9SZWdpc3RlclwiO1xuaW1wb3J0IExvZ2dlZEluVmlldyBmcm9tIFwiVFNDb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRJblZpZXdcIjtcbmltcG9ydCBMb2dnZWRPdXRWaWV3IGZyb20gXCJUU0NvbXBvbmVudHMvSG9tZS9IZWFkZXJJbnRlcmZhY2VzL0xvZ2dlZE91dFZpZXdcIjtcblxuaW1wb3J0IFwiLi9ob21lLnNjc3NcIjtcbmltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcbmltcG9ydCB7IHVzZU1lUXVlcnksIHVzZUxvZ291dE11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBHZW5lcmljU2NvcmUgfSBmcm9tIFwiLi4vTGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQtdHlwZXNcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiVFNTcmMvcHVibGljL0dsb2JhbFN0b3JlL0dsb2JhbFN0b3JlXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBzc3JUb3BUaW1lcz86IEdlbmVyaWNTY29yZVtdXG59XG5cbmV4cG9ydCBjb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VNZVF1ZXJ5KCk7XG4gIGNvbnN0IFssZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbbG9nb3V0XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XG4gIGNvbnN0IFtpc1Byb3hpZWQsIHNldElzUHJveGllZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblxuICBsZXQgaGVhZGVyQm9keSA9IG51bGw7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZnVsbHN0YWNrJykgPiAtMSkge1xuICAgICAgc2V0SXNQcm94aWVkKHRydWUpXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YT8ubWU/LnVzZXJuYW1lKSB7XG4gICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ1NFVCBERUZJTkVEIFVTRVJOQU1FJywgcGF5bG9hZDoge3VzZXJOYW1lOiBkYXRhLm1lLnVzZXJuYW1lfX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ1VOU0VUIERFRklORUQgVVNFUk5BTUUnfSk7XG4gICAgfVxuICB9LCBbZGF0YV0pXG5cbiAgaGVhZGVyQm9keSA9IGxvYWRpbmcgPyBudWxsIDogIWRhdGE/Lm1lID8gKFxuICAgIDxMb2dnZWRPdXRWaWV3IGlzUHJveGllZD17aXNQcm94aWVkfSAgLz5cbiAgKSA6IChcbiAgICA8TG9nZ2VkSW5WaWV3XG4gICAgaXNQcm94aWVkPXtpc1Byb3hpZWR9XG4gICAgdXNlcm5hbWU9e2RhdGEubWUudXNlcm5hbWV9XG4gICAgbG9nb3V0PXtsb2dvdXR9XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17ZGF0YT8ubWU/LnVzZXJuYW1lID8gYGhlYWRlci1uYXYtdWwgaGVhZGVyLWlzLWNvbmNlYWxlZGAgOiBgaGVhZGVyLW5hdi11bGAgfSA+e2hlYWRlckJvZHl9PC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD17aXNQcm94aWVkID8gJy9mdWxsc3RhY2svbWluZXN3ZWVwZXIvbG9naW4nIDogJy9sb2dpbid9PlxuICAgICAgICAgIDxVc2VyTG9naW5Gb3JtIC8+XG4gICAgICAgICAgPE1pbmVzd2VlcGVyIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPXtpc1Byb3hpZWQgPyAnL2Z1bGxzdGFjay9taW5lc3dlZXBlci9yZWdpc3RlcicgOiAnL3JlZ2lzdGVyJ30+XG4gICAgICAgICAgPFVzZXJSZWdpc3RlckZvcm0gLz5cbiAgICAgICAgICA8TWluZXN3ZWVwZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9e2lzUHJveGllZCA/ICcvZnVsbHN0YWNrL21pbmVzd2VlcGVyL3Njb3JlYm9hcmQnIDogJy9zY29yZWJvYXJkJ30+XG4gICAgICAgICAgPExlYWRlcmJvYXJkIHNzclRvcFRpbWVzPXtwcm9wcy5zc3JUb3BUaW1lc30vPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD17aXNQcm94aWVkID8gJy9mdWxsc3RhY2svbWluZXN3ZWVwZXInIDogJy8nfT5cbiAgICAgICAgICA8TWluZXN3ZWVwZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvPlxuICApO1xufTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExlYWRlckJvYXJkRW50cnkgZnJvbSBcIlRTQ29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZEVudHJ5XCI7XG5pbXBvcnQgUGFnZU5vVWwgZnJvbSBcIi4vUGFnaW5hdGlvbi9wYWdlTm9VbFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IFwiLi9sZWFkZXJib2FyZC5zY3NzXCI7XG5pbXBvcnQge1xuICBGb3JtYXRUaW1lRnVuYyxcbiAgR2VuZXJpY1Njb3JlLFxuICBIYW5kbGVDbGlja1BhZ2VGdW5jLFxuICBIYW5kbGVTY29yZVZpZXdGdW5jLFxuICBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyxcbiAgTGVhZGVyYm9hcmRQcm9wcyxcbiAgTWFrZVRpdGxlRnVuYyxcbiAgUGVyc29uYWxpemVkLFxufSBmcm9tIFwiLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSxcbiAgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeSxcbiAgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksXG59IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5jb25zdCBMZWFkZXJib2FyZDogUmVhY3QuRkM8TGVhZGVyYm9hcmRQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCBbXG4gICAge1xuICAgICAgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sXG4gICAgfSxcbiAgICBnbG9iYWxEaXNwYXRjaCxcbiAgXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcGFnZU9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVMZW5ndGggPSAoKSA9PiB7XG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYmVnaW5uZXJcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBpZiAoZGF0YT8uYWxsQmVnaW5uZXJTY29yZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmFsbEJlZ2lubmVyU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJpbnRlcm1lZGlhdGVcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSgpO1xuICAgICAgaWYgKGRhdGE/LmFsbEludGVybWVkaWF0ZVNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsSW50ZXJtZWRpYXRlU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJhZHZhbmNlZFwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoKTtcbiAgICAgIGlmIChkYXRhPy5hbGxBZHZhbmNlZFNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsQWR2YW5jZWRTY29yZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAxMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY29yZVZpZXdIZWxwZXIgPSAoXG4gICAgYXJyYXk6IEdlbmVyaWNTY29yZVtdLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgcGFnZU9mZnNldDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlICogcGFnZU9mZnNldCwgY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0ICsgcGFnZU9mZnNldCk7XG4gICAgLy8gY29uc29sZS5sb2coYXJyYXkuc2xpY2UoMCkuc29ydCgoYSwgYikgPT4gYS50aW1lIC0gYi50aW1lKSk7XG4gICAgcmV0dXJuIGFycmF5XG4gICAgICAuc2xpY2UoMClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpXG4gICAgICAuc2xpY2UoY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0LCBjdXJyZW50UGFnZSAqIHBhZ2VPZmZzZXQgKyBwYWdlT2Zmc2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY29yZVZpZXc6IEhhbmRsZVNjb3JlVmlld0Z1bmMgPSAoc3NyVG9wVGltZXMpID0+IHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmIHNzclRvcFRpbWVzKSB7XG4gICAgICByZXR1cm4gc3NyVG9wVGltZXMuc2xpY2UoMCwgcGFnZU9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYmVnaW5uZXJcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBjb25zdCB0b3BTY29yZXMgPSBkYXRhPy5hbGxCZWdpbm5lclNjb3JlcztcbiAgICAgIGlmICh0b3BTY29yZXMpIHtcbiAgICAgICAgbGV0IHRlc3QgPSBoYW5kbGVTY29yZVZpZXdIZWxwZXIodG9wU2NvcmVzLCBjdXJyZW50UGFnZSwgcGFnZU9mZnNldCk7XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImludGVybWVkaWF0ZVwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBjb25zdCB0b3BTY29yZXMgPSBkYXRhPy5hbGxJbnRlcm1lZGlhdGVTY29yZXM7XG4gICAgICBpZiAodG9wU2NvcmVzKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gaGFuZGxlU2NvcmVWaWV3SGVscGVyKHRvcFNjb3JlcywgY3VycmVudFBhZ2UsIHBhZ2VPZmZzZXQpO1xuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJhZHZhbmNlZFwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoKTtcbiAgICAgIGNvbnN0IHRvcFNjb3JlcyA9IGRhdGE/LmFsbEFkdmFuY2VkU2NvcmVzO1xuXG4gICAgICBpZiAodG9wU2NvcmVzKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTY29yZVZpZXdIZWxwZXIodG9wU2NvcmVzLCBjdXJyZW50UGFnZSwgcGFnZU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFwibG9hZGluZ1wiLFxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICB1cGRhdGVkQXQ6IFwiXCIsXG4gICAgICAgIGNyZWF0ZWRBdDogXCJcIixcbiAgICAgICAgaWQ6IDEsXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgW3BlcnNvbmFsaXplZCwgc2V0UGVyc29uYWxpemVkXSA9IFJlYWN0LnVzZVN0YXRlPFBlcnNvbmFsaXplZD4oZmFsc2UpO1xuXG4gIGNvbnN0IGZvcm1hdFRpbWU6IEZvcm1hdFRpbWVGdW5jID0gKHRpbWUpID0+IHtcbiAgICBjb25zdCBjZW50aXNlY29uZHMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHNlY29uZHMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBtaW51dGVzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGhvdXJzID0gKFwiMFwiICsgTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkpLnNsaWNlKC0yKTtcblxuICAgIHJldHVybiBtaW51dGVzICE9PSBcIjAwXCJcbiAgICAgID8gYCR7bWludXRlc30gOiAke3NlY29uZHN9IC4gJHtjZW50aXNlY29uZHN9YFxuICAgICAgOiBob3VycyAhPT0gXCIwMFwiXG4gICAgICA/IGAke2hvdXJzfSA6ICR7bWludXRlc306ICR7c2Vjb25kc30gLiAke2NlbnRpc2Vjb25kc31gXG4gICAgICA6IGAke3NlY29uZHN9IC4gJHtjZW50aXNlY29uZHN9IHNlY3NgO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrUGVyc29uYWxpemVkOiBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyA9IChlKSA9PiB7XG4gICAgY29uc3QgdXNlck5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MO1xuICAgIHJldHVybiB1c2VyTmFtZSA/IHNldFBlcnNvbmFsaXplZCh1c2VyTmFtZSkgOiBzZXRQZXJzb25hbGl6ZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrUGFnZTogSGFuZGxlQ2xpY2tQYWdlRnVuYyA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdLmlubmVySFRNTCkgLSAxO1xuICAgIHNldEN1cnJlbnRQYWdlKHNlbGVjdGVkKTtcbiAgfTtcblxuICBjb25zdCBtYWtlVGl0bGU6IE1ha2VUaXRsZUZ1bmMgPSAocGVyc29uYWxpemVkLCBza2lsbExldmVsKSA9PlxuICAgIHBlcnNvbmFsaXplZFxuICAgICAgPyBgJHtwZXJzb25hbGl6ZWR9cyAke3NraWxsTGV2ZWx9IExlYWRlcmJvYXJkOmBcbiAgICAgIDogYCR7c2tpbGxMZXZlbH0gTGVhZGVyYm9hcmRgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxlYWRlcmJvYXJkXCI+XG4gICAgICA8aDMgaWQ9XCJsZWFkZXJib2FyZC1oZWFkZXJcIj57bWFrZVRpdGxlKHBlcnNvbmFsaXplZCwgc2tpbGxMZXZlbCl9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lubmVycy1jaXJjbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZXMtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7KGhhbmRsZVNjb3JlVmlldyhwcm9wcz8uc3NyVG9wVGltZXMpIHx8IFtdKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ID8gKFxuICAgICAgICAgICAgICA8TGVhZGVyQm9hcmRFbnRyeVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgIHBlcnNvbmFsaXplZD17cGVyc29uYWxpemVkfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBlbnRyeT17ZW50cnl9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrUGVyc29uYWxpemVkfVxuICAgICAgICAgICAgICAgIGZvcm1hdFRpbWU9e2Zvcm1hdFRpbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQYWdlTm9VbFxuICAgICAgICAgIHBhZ2VPZmZzZXQ9e3BhZ2VPZmZzZXR9XG4gICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrUGFnZX1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgdG9wVGltZXNQZXJQYWdlPXtwYWdlT2Zmc2V0fVxuICAgICAgICAgIG5vT2ZUb3BUaW1lcz17aGFuZGxlU2NvcmVMZW5ndGgoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtwZXJzb25hbGl6ZWQgPyAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGlja1BlcnNvbmFsaXplZChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldHVybi10by1sZWFkZXJib2FyZC1idXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9e2ByZXR1cm4gdG8gJHtza2lsbExldmVsfSBMZWFkZXJCb2FyZGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cImJlZ2lubmVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTRVQgQkVHSU5ORVIgRElNRU5TSU9OU1wiIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cImludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiU0VUIElOVEVSTUVESUFURSBESU1FTlNJT05TXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItYnV0dG9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJhZHZhbmNlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTRVQgQURWQU5DRUQgRElNRU5TSU9OU1wiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgUGVyc29uYWxpemVkLCBGb3JtYXRUaW1lRnVuYywgTGVhZGVyYm9hcmRFbnRyeSwgTGVhZGVyYm9hcmRIYW5kbGVDbGlja0Z1bmMgfSBmcm9tIFwiLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5cbmludGVyZmFjZSBMZWFkZXJib2FyZEVudHJ5UHJvcHMge1xuICBwZXJzb25hbGl6ZWQ6IFBlcnNvbmFsaXplZDtcbiAgaGFuZGxlQ2xpY2s6IExlYWRlcmJvYXJkSGFuZGxlQ2xpY2tGdW5jO1xuICBlbnRyeTogTGVhZGVyYm9hcmRFbnRyeTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgZm9ybWF0VGltZTpGb3JtYXRUaW1lRnVuYztcbn1cbmNvbnN0IFNpbmdsZUxlYWRlcmJvYXJkRW50cnk6IFJlYWN0LkZDPExlYWRlcmJvYXJkRW50cnlQcm9wcz4gPSAoe1xuICBjdXJyZW50UGFnZSxcbiAgcGVyc29uYWxpemVkLFxuICBoYW5kbGVDbGljayxcbiAgZW50cnk6IHsgdXNlcm5hbWUsIHRpbWUgfSxcbiAgaW5kZXgsXG4gIGZvcm1hdFRpbWUsXG59KSA9PiB7XG4gIGNvbnN0IFt7IGRlZmluZWRVc2VyTmFtZSB9XSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBnb2xkZW4gPSBkZWZpbmVkVXNlck5hbWUgPT09IHVzZXJuYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGNsYXNzTmFtZT17cGVyc29uYWxpemVkID8gXCJwZXJzb25hbGl6ZWQgc2NvcmVzLWxpc3QtaXRlbVwiIDogXCJzY29yZXMtbGlzdC1pdGVtXCJ9XG4gICAgPlxuICAgICAgey8qIE51bWJlciAqL31cbiAgICAgIDxoNVxuICAgICAgICBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy11c2VyXCIgOiBcInNjb3Jlcy11c2VyXCJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI1cHhcIiB9fVxuICAgICAgPlxuICAgICAgICB7KChjdXJyZW50UGFnZSAqIDEwKSArIGluZGV4ICkgKyAxfS5cbiAgICAgIDwvaDU+XG4gICAgICB7LyogTmFtZSAqL31cbiAgICAgIDxoNVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdXNlclwiIDogXCJzY29yZXMtdXNlclwifVxuICAgICAgPlxuICAgICAgICB7dXNlcm5hbWV9XG4gICAgICA8L2g1PlxuICAgICAgey8qIFZlcnRpY2FsIGxpbmUgKi99XG4gICAgICA8aDUgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdXNlclwiIDogXCJibGFjay1udW0gc2NvcmVzLXVzZXJcIn0+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgfHtcIiBcIn1cbiAgICAgIDwvaDU+XG4gICAgICB7LyogVGltZSAqL31cbiAgICAgIDxoNSBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy10aW1lXCIgOiBcInNjb3Jlcy10aW1lXCJ9PlxuICAgICAgICB7Zm9ybWF0VGltZSh0aW1lKX1cbiAgICAgIDwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVMZWFkZXJib2FyZEVudHJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGFuZGxlQ2xpY2tQYWdlRnVuYyB9IGZyb20gXCIuLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5pbnRlcmZhY2UgUGFnZU5vTGlQcm9wcyB7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBoYW5kbGVDbGljazogSGFuZGxlQ2xpY2tQYWdlRnVuYztcbn1cbmNvbnN0IFBhZ2VOb0xpOiBSZWFjdC5GQzxQYWdlTm9MaVByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaVxuICAgICAga2V5PXtwcm9wcy5wYWdlSW5kZXh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBwcm9wcy5jdXJyZW50UGFnZSArIDEgPT09IHByb3BzLnBhZ2VJbmRleFxuICAgICAgICAgID8gYHBhZ2VOb0xpIHNlbGVjdGVkLXBhZ2UtbGlgXG4gICAgICAgICAgOiBcInBhZ2VOb0xpXCJcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfVxuICAgID5cbiAgICAgIDxhPntwcm9wcy5wYWdlSW5kZXh9PC9hPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm9MaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhhbmRsZUNsaWNrUGFnZUZ1bmMgfSBmcm9tIFwiLi4vbGVhZGVyYm9hcmQtdHlwZXNcIjtcbmltcG9ydCBQYWdlTm8gZnJvbSBcIi4vUGFnZU5vTGlcIjtcblxuaW50ZXJmYWNlIFBhZ2VOb1VsUHJvcHMge1xuICBwYWdlT2Zmc2V0OiBudW1iZXI7XG4gIG5vT2ZUb3BUaW1lczogbnVtYmVyO1xuICB0b3BUaW1lc1BlclBhZ2U6IG51bWJlcjtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgaGFuZGxlQ2xpY2s6IEhhbmRsZUNsaWNrUGFnZUZ1bmNcbn1cblxuY29uc3QgUGFnZU5vVWw6IFJlYWN0LkZDPFBhZ2VOb1VsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cblxuICBjb25zdCByZW5kZXJQYWdlTnVtYmVycyA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMubm9PZlRvcFRpbWVzKSB7XG4gICAgcmV0dXJuIFsuLi5uZXcgQXJyYXkoTWF0aC5jZWlsKHByb3BzLm5vT2ZUb3BUaW1lcyAvIHByb3BzLnRvcFRpbWVzUGVyUGFnZSkpXVxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICAgIH0pXG4gICAgICAubWFwKChwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZU5vXG4gICAgICAgICAgICBrZXk9e3BhZ2VJbmRleH1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17cGFnZUluZGV4fVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3Byb3BzLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGlkPVwicGFnZS1udW1iZXJzXCI+XG4gICAgICB7cmVuZGVyUGFnZU51bWJlcnMoKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vVWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkdsb2JhbFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCJDdXN0b21Ib29rc1wiO1xuaW1wb3J0IHsgdXNlVGltZXJDb250ZXh0IH0gZnJvbSBcIlRpbWVyU3RvcmVcIjtcbmltcG9ydCB7IHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uLCB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgXCIuL21pbGxpc2Vjb25kc3R5bGVzLnNjc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0QmVnaW5uZXJTY29yZV0gPSB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24oKTtcbiAgY29uc3QgW3Bvc3RJbnRlcm1lZGlhdGVTY29yZV0gPSB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKCk7XG4gIGNvbnN0IFtwb3N0QWR2YW5jZWRTY29yZV0gPSB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24oKTtcbiAgY29uc3QgW1xuICAgIHtcbiAgICAgIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbCB9LFxuICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgdGltZXJPbixcbiAgICB9LCBnbG9iYWxEaXNwYXRjaFxuICBdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFt7IHRpbWVyVGltZSB9LCB0aW1lckRpc3BhdGNoXSA9IHVzZVRpbWVyQ29udGV4dCgpO1xuXG4gIHVzZUludGVydmFsKFxuICAgICgpID0+IHtcbiAgICAgIHRpbWVyRGlzcGF0Y2goeyB0eXBlOiBcIklURVJBVEUgVElNRVIgVElNRVwiLCBwYXlsb2FkOiAxMCB9KTtcbiAgICB9LFxuICAgIHRpbWVyT24gPT09IHRydWVcbiAgICAgID8gMTBcbiAgICAgIDogdGltZXJPbiA9PT0gXCJGUkVFWkUgV0lOXCIgfHwgdGltZXJPbiA9PT0gXCJGUkVFWkUgREVBRFwiIHx8IHRpbWVyT24gPT09IFwiVklDVE9SWVwiXG4gICAgICA/IC0xXG4gICAgICA6IG51bGxcbiAgKTtcblxuICAvLyBJZiBUaW1lciBpcyBjaGFuZ2VkIHRvIHRydWUsIHN0YXJ0IHRoZSB0aW1lci5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGltZXJPbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRpbWVyRGlzcGF0Y2goeyB0eXBlOiBcIkNMRUFSIFRJTUVSIFRJTUVcIiB9KTtcbiAgICB9XG5cbiAgICBpZiAodGltZXJPbiA9PT0gXCJWSUNUT1JZXCIgJiYgdHlwZW9mIGRlZmluZWRVc2VyTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicpIHtcbiAgICAgICAgcG9zdEJlZ2lubmVyU2NvcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczogeyB1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWUgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe3R5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgV0lOJ30pXG4gICAgICAgICAgLy8gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU0VUIFRPUCBUSU1FUycsIHBheWxvYWQ6IHsgdG9wVGltZXM6IG5ld1RvcFRpbWVzIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2ludGVybWVkaWF0ZScpIHtcbiAgICAgICAgcG9zdEludGVybWVkaWF0ZVNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChza2lsbExldmVsID09PSAnYWR2YW5jZWQnKSB7XG4gICAgICAgIHBvc3RBZHZhbmNlZFNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9LCBbdGltZXJPbl0pO1xuXG4gIGNvbnN0IGNlbnRpc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwKSAlIDEwMCkpLnNsaWNlKC0yKTtcbiAgY29uc3Qgc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lclRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgY29uc3QgaG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKHRpbWVyVGltZSAvIDM2MDAwMDApKS5zbGljZSgtMik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWlsbGktc2Vjb25kLXRpbWVyLWNvbnRhaW5lcic+XG4gICAgICA8aDQgaWQ9XCJtaWxsaS1zZWNvbmQtdGltZXJcIiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9PlxuICAgICAgICB7aG91cnMgIT09IFwiMDBcIlxuICAgICAgICAgID8gYCR7aG91cnN9IDogJHttaW51dGVzfSA6ICR7c2Vjb25kc30gOiAke2NlbnRpc2Vjb25kc31gXG4gICAgICAgICAgOiBtaW51dGVzICE9PSBcIjAwXCJcbiAgICAgICAgICA/IGAke21pbnV0ZXN9IDogJHtzZWNvbmRzfSA6ICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgICAgICA6IGAke3NlY29uZHN9IDogJHtjZW50aXNlY29uZHN9YH1cbiAgICAgIDwvaDQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSBcIi4vdGltZXJSZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgVGltZXJJU3RhdGVUeXBlcywgVGltZXJTdG9yZUludGVyZmFjZSB9IGZyb20gXCIuLi9UaW1lclR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGltZXJJU3RhdGVUeXBlcyA9IHtcbiAgdGltZXJUaW1lOiAwLFxufTtcblxuY29uc3QgVGltZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcbiAgW1RpbWVySVN0YXRlVHlwZXMsIFJlYWN0LkRpc3BhdGNoPGFueT5dXG4+KFtpbml0aWFsU3RhdGUsICgpID0+IHt9XSk7XG5cblxuY29uc3QgVGltZXJTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQzxUaW1lclN0b3JlSW50ZXJmYWNlPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRpbWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L1RpbWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVRpbWVyQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVGltZXJDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVRpbWVyQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGltZXJTdG9yZVByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyB1c2VUaW1lckNvbnRleHQsIFRpbWVyU3RvcmVQcm92aWRlciB9O1xuIiwiLy8gaW1wb3J0IHsgfSBmcm9tICcuL3RpbWVyQWN0aW9ucy5qcyc7XG5cbmltcG9ydCB7IENvbWJpbmVSZWR1Y2Vyc0Z1bmMgfSBmcm9tIFwiTWluZXN3ZWVwZXJUeXBlc1wiO1xuaW1wb3J0IHsgVGltZXJUaW1lRnVuYyB9IGZyb20gXCIuLi9UaW1lclR5cGVzXCI7XG5cbmNvbnN0IHRpbWVyVGltZTogVGltZXJUaW1lRnVuYyA9IChzdGF0ZSA9IDAsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIklURVJBVEUgVElNRVIgVElNRVwiOlxuICAgICAgcmV0dXJuIChzdGF0ZSArPSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBcIkNMRUFSIFRJTUVSIFRJTUVcIjpcbiAgICAgIHJldHVybiAwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyczogQ29tYmluZVJlZHVjZXJzRnVuYyA9IChzbGljZXMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZShcbiAgICAoYWNjLCBwcm9wKSA9PiAoe1xuICAgICAgLi4uYWNjLFxuICAgICAgW3Byb3BdOiBzbGljZXNbcHJvcF0oYWNjW3Byb3BdLCBhY3Rpb24pLFxuICAgIH0pLFxuICAgIHN0YXRlXG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7IHRpbWVyVGltZSB9KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgVGltZXJTdG9yZVByb3ZpZGVyIH0gZnJvbSBcIlRpbWVyU3RvcmVcIjtcbmltcG9ydCB7IEJvYXJkU3RvcmVQcm92aWRlciB9IGZyb20gXCJCb2FyZFN0b3JlXCI7XG5cbmltcG9ydCBCb2FyZCBmcm9tIFwiVFNDb21wb25lbnRzL0JvYXJkL0JvYXJkXCI7XG5pbXBvcnQgTWlsbGlzZWNvbmRUaW1lciBmcm9tIFwiVFNDb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvTWlsbGlzZWNvbmRUaW1lclwiO1xuaW1wb3J0IFNraWxsTGV2ZWxTZWxlY3RvciBmcm9tIFwiVFNDb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9Ta2lsbExldmVsU2VsZWN0b3JcIjtcblxuaW1wb3J0IFNtaWxleUJhciBmcm9tIFwiVFNDb21wb25lbnRzL1NtaWxleUJhci9TbWlsZXlCYXJcIjtcblxuaW1wb3J0IFwiLi9taW5lc3dlZXBlci5zY3NzXCI7XG5cbmNvbnN0IE1pbmVzd2VlcGVyOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSxcbiAgICB9LFxuICBdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtY29udGFpbmVyc1wiIGlkPVwibWFpbi1zcGFjZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJ0b3RhbC1ib2FyZFwiIGNsYXNzTmFtZT17c2tpbGxMZXZlbH0+XG4gICAgICAgIDxCb2FyZFN0b3JlUHJvdmlkZXI+XG4gICAgICAgICAgPFNtaWxleUJhciAvPlxuICAgICAgICAgIDxCb2FyZCAvPlxuICAgICAgICA8L0JvYXJkU3RvcmVQcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxUaW1lclN0b3JlUHJvdmlkZXI+XG4gICAgICAgICAgPE1pbGxpc2Vjb25kVGltZXIgLz5cbiAgICAgICAgPC9UaW1lclN0b3JlUHJvdmlkZXI+XG5cbiAgICAgIDxTa2lsbExldmVsU2VsZWN0b3IgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmVzd2VlcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdHbG9iYWxTdG9yZSc7XG5pbXBvcnQgJy4vc2tpbGxzdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICBjb25zdCBbeyBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSB9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9IGlkPSdza2lsbC1sZXZlbC1zZWxlY3Rvcic+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e18gPT4gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU0VUIEJFR0lOTkVSIERJTUVOU0lPTlMnIH0pfT5CZWdpbm5lcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBJTlRFUk1FRElBVEUgRElNRU5TSU9OUycgfSl9PkludGVybWVkaWF0ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBBRFZBTkNFRCBESU1FTlNJT05TJyB9KX0+RXhwZXJ0PC9idXR0b24+XG4gICAgPC9kaXYgPlxuICApXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb2FyZENvbnRleHQgfSBmcm9tICdCb2FyZFN0b3JlJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdHbG9iYWxTdG9yZSdcbmltcG9ydCAnLi9zbWlsZXlzdHlsZXMuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbygoKSA9PiB7XG5cbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBudW1iZXJPZk1pbmVzIH0sIHRpbWVyT24gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFt7IHN1cnByaXNlZCwgZmxhZ3NSZW1haW5pbmcgfSwgYm9hcmREaXNwYXRjaF0gPSB1c2VCb2FyZENvbnRleHQoKTtcblxuICBjb25zdCByZXNldENhbGxiYWNrID0gKCkgPT4ge1xuICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQgU01JTEVTJyB9KTtcbiAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1NFVCBGTEFHUyBSRU1BSU5JTkcnLCBwYXlsb2FkOiBudW1iZXJPZk1pbmVzIH0pO1xuICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NXSVRDSCBUSU1FUiBPRkYnIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nc21pbGV5LWJhcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc21pbGV5LWd1eSdcbiAgICAgICAgaWQ9e1xuICAgICAgICAgIHN1cnByaXNlZCA9PT0gJ2RlYWQnID8gJ2RlYWQtZ3V5J1xuICAgICAgICAgICAgOiB0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nID8gJ3ZpY3RvcnktZ3V5J1xuICAgICAgICAgICAgICA6IHN1cnByaXNlZCA9PT0gdHJ1ZSA/ICdzdXJwcmlzZWQtZ3V5J1xuICAgICAgICAgICAgICAgIDogJ3NtaWxleS1ndXknXG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17cmVzZXRDYWxsYmFja30+PC9kaXY+XG4gICAgICA8ZGl2IGlkPSdmbGFncy1yZW1haW5pbmcnPntmbGFnc1JlbWFpbmluZ308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuXG50eXBlIElucHV0RmllbGRQcm9wcyA9IFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4gJiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbmNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgc2l6ZTogXyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICB7LyogPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9PntsYWJlbH08L2xhYmVsPiAqL31cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvcm0tZXJyb3ItbWVzc2FnZVwiPntlcnJvciA/IGVycm9yIDogbnVsbH08L2g1PlxuICAgICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIlRTU3JjL3V0aWxzL3RvRXJyb3JNYXBcIjtcbmltcG9ydCBcIi4vdXNlckZvcm1zLnNjc3NcIjtcblxuY29uc3QgVXNlckxvZ2luRm9ybTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBbXywgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbbG9naW5dID0gdXNlTG9naW5NdXRhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW4oe1xuICAgICAgICAgIHZhcmlhYmxlczogeyBvcHRpb25zOiB2YWx1ZXMgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW01lRG9jdW1lbnRdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsb2dpbkVycm9ycyA9IGxvZ2luRGF0YT8uZGF0YT8ubG9naW4uZXJyb3JzO1xuICAgICAgICBjb25zdCBsb2dpblN1Y2Nlc3MgPSBsb2dpbkRhdGE/LmRhdGE/LmxvZ2luLnVzZXI7XG5cbiAgICAgICAgaWYgKGxvZ2luRXJyb3JzKSB7XG4gICAgICAgICAgc2V0RXJyb3JzKHRvRXJyb3JNYXAobG9naW5FcnJvcnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2dpblN1Y2Nlc3MpIHtcbiAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIlNFVCBERUZJTkVEIFVTRVJOQU1FXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXJOYW1lOiBsb2dpblN1Y2Nlc3MudXNlcm5hbWUgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBBZnRlciBsb2dnaW5nIGluIHJldHVybiB0byBob21lIHNjcmVlblxuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdmdWxsc3RhY2snKSA+IC0xKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9mdWxsc3RhY2svbWluZXN3ZWVwZXInKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIlRTU3JjL3V0aWxzL3RvRXJyb3JNYXBcIjtcbmltcG9ydCBcIi4vdXNlckZvcm1zLnNjc3NcIjtcblxuY29uc3QgVXNlckxvZ2luRm9ybTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgWywgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IHJlZ2lzdGVyKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgb3B0aW9uczogdmFsdWVzIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtNZURvY3VtZW50XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFcnJvcnMgPSByZWdpc3RlckRhdGE/LmRhdGE/LnJlZ2lzdGVyLmVycm9ycztcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gcmVnaXN0ZXJEYXRhPy5kYXRhPy5yZWdpc3Rlci51c2VyO1xuXG4gICAgICAgIGlmIChyZWdpc3RlckVycm9ycykge1xuICAgICAgICAgIHNldEVycm9ycyh0b0Vycm9yTWFwKHJlZ2lzdGVyRXJyb3JzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJTdWNjZXNzKSB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VyTmFtZTogcmVnaXN0ZXJTdWNjZXNzLnVzZXJuYW1lIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZnVsbHN0YWNrJykgPiAtMSkge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvZnVsbHN0YWNrL21pbmVzd2VlcGVyJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsIi8vIGh0dHBzOi8vb3ZlcnJlYWN0ZWQuaW8vbWFraW5nLXNldGludGVydmFsLWRlY2xhcmF0aXZlLXdpdGgtcmVhY3QtaG9va3MvXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlSW50ZXJ2YWxGdW5jIH0gZnJvbSAnVFNTcmMvbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3QgdXNlSW50ZXJ2YWw6IFVzZUludGVydmFsRnVuYyA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgY29uc3Qgc2F2ZWRDYWxsYmFjazogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gUmVhY3QudXNlUmVmKCk7XG4gIC8vIFJlbWVtYmVyIHRoZSBsYXRlc3QgY2FsbGJhY2suXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIH0sIFtjYWxsYmFja10pO1xuXG4gIC8vIFNldCB1cCB0aGUgaW50ZXJ2YWwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpO1xuICAgIH1cblxuICAgIC8vIElmIHZpY3RvcnkgaXMgZGVjbGFyZWQgb3IgYm9tYiBzdG9wIHRoZSB0aW1lci4uLlxuICAgIGlmIChkZWxheSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgLy8gT3RoZXJ3aXNlLi4uXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbCh0aWNrLCBkZWxheSk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSwgW2RlbGF5XSlcbn1cblxuXG5leHBvcnQgeyB1c2VJbnRlcnZhbCB9OyIsIlxuaW1wb3J0IHsgQXJnLCBRdWVyeSwgTXV0YXRpb24sIFJlc29sdmVyLCBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlIH0gZnJvbSAnVFNEYXRhYmFzZS9lbnRpdGllcy9BZHZhbmNlZF9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtBZHZhbmNlZFNjb3JlXSlcbiAgYXN5bmMgYWxsQWR2YW5jZWRTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxBZHZhbmNlZFNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChBZHZhbmNlZFNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQWR2YW5jZWRTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdBZHZhbmNlZFNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEFkdmFuY2VkU2NvcmU+IHtcbiAgICBjb25zdCBuZXdBZHZhbmNlZFNjb3JlID0gZW0uY3JlYXRlKEFkdmFuY2VkU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QWR2YW5jZWRTY29yZSk7XG4gICAgcmV0dXJuIG5ld0FkdmFuY2VkU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQmVnaW5uZXJTY29yZSB9IGZyb20gJ1RTRGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzJztcblxuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEJlZ2lubmVyU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtCZWdpbm5lclNjb3JlXSlcbiAgYXN5bmMgYWxsQmVnaW5uZXJTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxCZWdpbm5lclNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChCZWdpbm5lclNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQmVnaW5uZXJTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdCZWdpbm5lclNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEJlZ2lubmVyU2NvcmU+IHtcbiAgICBjb25zdCBuZXdCZWdpbm5lclNjb3JlID0gZW0uY3JlYXRlKEJlZ2lubmVyU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QmVnaW5uZXJTY29yZSk7XG4gICAgcmV0dXJuIG5ld0JlZ2lubmVyU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmUgfSBmcm9tICdUU0RhdGFiYXNlL2VudGl0aWVzL0ludGVybWVkaWF0ZV9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIge1xuXG4gIEBRdWVyeSgoKSA9PiBbSW50ZXJtZWRpYXRlU2NvcmVdKVxuICBhc3luYyBhbGxJbnRlcm1lZGlhdGVTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZVtdPiB7XG4gICAgcmV0dXJuIGVtLmZpbmQoSW50ZXJtZWRpYXRlU2NvcmUsIHt9KTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBJbnRlcm1lZGlhdGVTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdJbnRlcm1lZGlhdGVTY29yZShcbiAgICBAQXJnKCd1c2VybmFtZScsICgpID0+IFN0cmluZykgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBAQXJnKCd0aW1lJywgKCkgPT4gTnVtYmVyKSB0aW1lOiBudW1iZXIsXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZT4ge1xuICAgIGNvbnN0IG5ld0ludGVybWVkaWF0ZVNjb3JlID0gZW0uY3JlYXRlKEludGVybWVkaWF0ZVNjb3JlLCB7IHVzZXJuYW1lLCB0aW1lIH0pXG4gICAgYXdhaXQgZW0ucGVyc2lzdEFuZEZsdXNoKG5ld0ludGVybWVkaWF0ZVNjb3JlKTtcbiAgICByZXR1cm4gbmV3SW50ZXJtZWRpYXRlU2NvcmU7XG4gIH1cbn0iLCJpbXBvcnQge1xuICBDdHgsXG4gIFF1ZXJ5LFxuICBNdXRhdGlvbixcbiAgUmVzb2x2ZXIsXG4gIEFyZyxcbiAgSW5wdXRUeXBlLFxuICBGaWVsZCxcbiAgT2JqZWN0VHlwZSxcbn0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL1VzZXJcIjtcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIkBtaWtyby1vcm0vcG9zdGdyZXNxbFwiO1xuaW1wb3J0IGFyZ29uMiBmcm9tIFwiYXJnb24yXCI7XG5pbXBvcnQge0NPT0tJRV9OQU1FfSBmcm9tIFwiVFNTcmMvY29uc3RhbnRzXCI7XG5cbkBJbnB1dFR5cGUoKVxuY2xhc3MgVXNlcm5hbWVQYXNzd29yZElucHV0IHtcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgRmllbGRFcnJvciB7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIGZpZWxkOiBzdHJpbmc7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgVXNlclJlc3BvbnNlIHtcbiAgQEZpZWxkKCgpID0+IFtGaWVsZEVycm9yXSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBlcnJvcnM/OiBGaWVsZEVycm9yW107XG5cbiAgQEZpZWxkKCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcj86IFVzZXI7XG59XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgQFF1ZXJ5KCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgYXN5bmMgbWUoQEN0eCgpIHsgcmVxLCBlbSB9OiBNaW5lQ29udGV4dCkge1xuICAgIC8vIHlvdSBhcmUgbm90IGxvZ2dlZCBpblxuICAgIGlmICghcmVxLnNlc3Npb24udXNlcklkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGVtLmZpbmRPbmUoVXNlciwgeyBpZDogcmVxLnNlc3Npb24udXNlcklkIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgQFF1ZXJ5KCgpID0+IFtVc2VyXSlcbiAgZ2V0QWxsVXNlcnMoQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHQpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIHJldHVybiBlbS5maW5kKFVzZXIsIHt9KTtcbiAgfVxuXG4gIEBRdWVyeSgoKSA9PiBVc2VyUmVzcG9uc2UpXG4gIGFzeW5jIGdldFNpbmdsZVVzZXIoXG4gICAgQEFyZyhcImlkXCIsICgpID0+IE51bWJlcikgaWQ6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbS5maW5kT25lKFVzZXIsIHsgaWQgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgcmVnaXN0ZXIoXG4gICAgQEFyZyhcIm9wdGlvbnNcIiwgKCkgPT4gVXNlcm5hbWVQYXNzd29yZElucHV0KSBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQsXG4gICAgQEN0eCgpIHsgZW0sIHJlcSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGlmIChvcHRpb25zLnVzZXJuYW1lLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhc3N3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYXJnb24yLmhhc2gob3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICBsZXQgdXNlcjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGVtIGFzIEVudGl0eU1hbmFnZXIpXG4gICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoVXNlcilcbiAgICAgICAgLmdldEtuZXhRdWVyeSgpXG4gICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgIHVzZXJuYW1lOiBvcHRpb25zLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pXG4gICAgICAgIC5yZXR1cm5pbmcoXCIqXCIpO1xuICAgICAgdXNlciA9IHJlc3VsdFswXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyBEdXBsaWNhdGUgdXNlcm5hbWUgZXJyb3JcbiAgICAgIGlmIChlcnIuZGV0YWlsLmluY2x1ZGVzKFwiYWxyZWFkeSBleGlzdHNcIikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICAgIC8vIFN0b3JlIHVzZXIgaWQgc2Vzc2lvbiwgdGhpcyB3aWxsIHNldCBhIGNvb2tpZSBvbiB0aGUgdXNlciBhbmQga2VlcCB0aGVtIGxvZ2dlZCBpbi5cbiAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBCb29sZWFuKVxuICBsb2dvdXQoQEN0eCgpIHsgcmVxLCByZXMgfTogTWluZUNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICByZXEuc2Vzc2lvbi5kZXN0cm95KChlcnIpID0+IHtcbiAgICAgICAgcmVzLmNsZWFyQ29va2llKENPT0tJRV9OQU1FKTtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95ZWQhISEnKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4geyBvazogdHJ1ZSB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgbG9naW4oXG4gICAgQEFyZyhcIm9wdGlvbnNcIiwgKCkgPT4gVXNlcm5hbWVQYXNzd29yZElucHV0KSBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQsXG4gICAgQEN0eCgpIHsgZW0sIHJlcSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW0uZmluZE9uZShVc2VyLCB7IHVzZXJuYW1lOiBvcHRpb25zLnVzZXJuYW1lIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJ0aGF0IHVzZXJuYW1lIGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgYXJnb24yLnZlcmlmeSh1c2VyLnBhc3N3b3JkLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbmNvcnJlY3QgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmVxLnNlc3Npb24udXNlcklkID0gdXNlci5pZDtcblxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQm9vbGVhbilcbiAgYXN5bmMgZGVsZXRlVXNlcihcbiAgICBAQXJnKFwiaWRcIiwgKCkgPT4gTnVtYmVyKSBpZDogbnVtYmVyLFxuICAgIEBDdHgoKSB7IGVtIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBlbS5uYXRpdmVEZWxldGUoVXNlciwgeyBpZCB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9Qcm92aWRlcixcbiAgSHR0cExpbmssXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyByZW5kZXJUb05vZGVTdHJlYW0gfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaHRtbFN0YXJ0LCBodG1sRW5kIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCB7IEdsb2JhbFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiVFNDb21wb25lbnRzL0hvbWUvSG9tZVwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBcIi9ncmFwaHFsXCIsXG4gICAgZmV0Y2gsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgbWluZXN3ZWVwZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5taW5lc3dlZXBlclJvdXRlci51c2UoXCIqXCIsIChyZXEsIF8sIG5leHQpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcbiAgbmV4dCgpO1xufSk7XG5cbm1pbmVzd2VlcGVyUm91dGVyLmdldCgnL21pbmVzd2VlcGVyLXRvcFRpbWVzJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5xdWVyeSlcbiAgcmVzLnNlbmQoJ29rJyk7XG59KVxuXG5taW5lc3dlZXBlclJvdXRlci5nZXQoXCIqXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBjb250ZXh0ID0ge307XG4gIGxldCByZXN1bHRTY29yZXM7XG4gIHRyeSB7XG4gICAgLy8gY29uc3QgbGluayA9XG4gICAgLy8gICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgLy8gICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiXG4gICAgLy8gICAgIDogXCJodHRwczovL2JlYXRtaW5lc3dlZXBlci5hcHAvZ3JhcGhxbFwiO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSAnaHR0cHM6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2dyYXBocWwnXG5cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MucG9zdChsaW5rLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIHF1ZXJ5OiBgcXVlcnkgR2V0QmVnaW5uZXJTY29yZXMge1xuICAgICAgICAgICAgICAgIGFsbEJlZ2lubmVyU2NvcmVzIHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgdGltZVxuICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1gLFxuICAgIH0pO1xuXG4gICAgcmVzdWx0U2NvcmVzID0gcmVzdWx0cy5kYXRhPy5kYXRhLmFsbEJlZ2lubmVyU2NvcmVzIHx8IFtdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCBtaW5lc3dlZXBlclN0cmVhbSA9IHJlbmRlclRvTm9kZVN0cmVhbShcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPEdsb2JhbFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgPC9HbG9iYWxTdG9yZVByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVzLndyaXRlKFxuICAgIGh0bWxTdGFydCghIXByb2Nlc3MuZW52Lk5PREVfRU5WLCBwcm9jZXNzLmVudi5DbG91ZGZyb250LCByZXN1bHRTY29yZXMpXG4gICk7XG4gIG1pbmVzd2VlcGVyU3RyZWFtLnBpcGUocmVzLCB7IGVuZDogZmFsc2UgfSk7XG4gIG1pbmVzd2VlcGVyU3RyZWFtLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICByZXMud3JpdGUoaHRtbEVuZCghIXByb2Nlc3MuZW52Lk5PREVfRU5WLCBwcm9jZXNzLmVudi5DbG91ZGZyb250KSk7XG4gICAgcmVzLmVuZCgpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtaW5lc3dlZXBlclJvdXRlcjtcbiIsImltcG9ydCB7IEdlbmVyaWNTY29yZSB9IGZyb20gXCJUU1NyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5jb25zdCBodG1sU3RhcnQgPSAoREVWX0VOVjogYm9vbGVhbiwgQ2xvdWRmcm9udDogc3RyaW5nIHwgdW5kZWZpbmVkLCByZXN1bHRTY29yZXM6IEdlbmVyaWNTY29yZVtdKSA9PiB7XG4gIHJldHVybiAoYDwhRE9DVFlQRSBIVE1MPlxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgICA8dGl0bGU+TWluZXN3ZWVwZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JyR7Q2xvdWRmcm9udH0vbWluZS1pbWFnZXMvbWluZWNvbi5wbmcnLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvc3RhdGljL2luZGV4LmNzcycvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8c2NyaXB0PlxuICAgICAgICBjb25zdCBkZXZTdHlsZVNoZWV0SHJlZiA9ICcvc3RhdGljL2luZGV4LmNzcyc7XG4gICAgICAgIGNvbnN0IHByb2RTdHlsZVNoZWV0SHJlZiA9ICcke0Nsb3VkZnJvbnR9L2J1aWxkL3B1YmxpYy9pbmRleC5jc3MnO1xuICAgICAgICBjb25zdCBbaGVhZF0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVBRCcpO1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsuaHJlZiA9ICgke0RFVl9FTlZ9ID09PSB0cnVlID8gZGV2U3R5bGVTaGVldEhyZWYgOiBwcm9kU3R5bGVTaGVldEhyZWYpXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICA8L3NjcmlwdD5cblxuXG5cbiAgICAgIDwhLS0gU2VydmVyIFNpZGUgUmVuZGVyaW5nIG9mIFBhZ2UgRGF0YSAtLT5cbiAgICAgIDxzY3JpcHQ+d2luZG93Ll9fSU5JVElBTF9fREFUQV9fPSR7SlNPTi5zdHJpbmdpZnkoe3NzclRvcFRpbWVzOiByZXN1bHRTY29yZXN9KX08L3NjcmlwdD5cblxuICAgIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJtaW5lc3dlZXBlci1yb290XCI+YClcbn07XG5cblxuY29uc3QgaHRtbEVuZCA9IChERVZfRU5WOiBib29sZWFuLCBDbG91ZGZyb250OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IChgPC9kaXY+XG4gICAgICA8c2NyaXB0PlxuICAgICAgY29uc3QgZGV2U2NyaXB0TGluayA9ICcvc3RhdGljL2luZGV4LmpzJztcbiAgICAgIGNvbnN0IHByb2RTY3JpcHRMaW5rID0gJyR7Q2xvdWRmcm9udH0vYnVpbGQvcHVibGljL2luZGV4LmpzJztcblxuICAgICAgY29uc3QgW2JvZHldID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JPRFknKTtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSAoJHtERVZfRU5WfSA9PT0gdHJ1ZSA/IGRldlNjcmlwdExpbmsgOiBwcm9kU2NyaXB0TGluaylcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIDwvc2NyaXB0PlxuICAgIDwvYm9keT5cbjwvaHRtbD5gKTtcblxuZXhwb3J0IHtcbiAgaHRtbFN0YXJ0LFxuICBodG1sRW5kXG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcInRzLXNyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5leHBvcnQgY29uc3QgdG9FcnJvck1hcCA9IChlcnJvcnM6IEZpZWxkRXJyb3JbXSkgPT4ge1xuICBjb25zdCBlcnJvck1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBlcnJvcnMuZm9yRWFjaCgoeyBmaWVsZCwgbWVzc2FnZSB9KSA9PiB7XG4gICAgZXJyb3JNYXBbZmllbGRdID0gbWVzc2FnZTtcbiAgfSk7XG4gIHJldHVybiBlcnJvck1hcDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWlrcm8tb3JtL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcmdvbjJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1yZWRpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG4vLyBBcG9sbG9cbmltcG9ydCB7XG4gIEFwb2xsb1NlcnZlclBsdWdpbkxhbmRpbmdQYWdlR3JhcGhRTFBsYXlncm91bmRcbn0gZnJvbSBcImFwb2xsby1zZXJ2ZXItY29yZVwiO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbi8vIEV4cHJlc3NcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1pbmVzd2VlcGVyUm91dGVyIGZyb20gJy4vc3NyLWNsaWVudC9pbmRleCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8vIEdyYXBoUWxcbmltcG9ydCB7IGJ1aWxkU2NoZW1hIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbi8vIE1pa3JvLU9ybVxuaW1wb3J0IG1pY3JvQ29uZmlnIGZyb20gJy4uL2RhdGFiYXNlL21pa3JvLW9ybS5jb25maWcnO1xuLy8gUmVkaXNcbmltcG9ydCByZWRpcyBmcm9tICdyZWRpcyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IGNvbm5lY3RSZWRpcyBmcm9tICdjb25uZWN0LXJlZGlzJztcblxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmltcG9ydCB7IENPT0tJRV9OQU1FLCBfX3Byb2RfXyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBCZWdpbm5lclNjb3JlUmVzb2x2ZXIgfSBmcm9tICcuL1Jlc29sdmVycy9iZWdpbm5lclNjb3Jlcyc7XG5pbXBvcnQgeyBJbnRlcm1lZGlhdGVTY29yZVJlc29sdmVyIH0gZnJvbSAnLi9SZXNvbHZlcnMvaW50ZXJtZWRpYXRlU2NvcmVzJztcbmltcG9ydCB7IEFkdmFuY2VkU2NvcmVSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL2FkdmFuY2VkU2NvcmVzJztcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL3VzZXJzJztcblxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IHJlZGlzU3RvcmUgPSBjb25uZWN0UmVkaXMoc2Vzc2lvbik7XG4gIGNvbnN0IHJlZGlzQ2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KCk7XG5cbiAgYXBwLnVzZSgnKicsIChyZXEsXyxuZXh0KT0+e1xuICAgIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCk7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYucmVkaXNfc2VjcmV0KTtcbiAgICBuZXh0KCk7XG4gIH0pO1xuXG4gIGFwcC51c2UoY29ycyhcbiAgICB7XG4gICAgICBvcmlnaW46IFsnaHR0cHM6Ly9mdWxsc3RhY2tocml2bmFrLmNvbScsICdodHRwczovL2JlYXRtaW5lc3dlZXBlci5hcHAnXSxcbiAgICAgIGNyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSlcbiAgKVxuXG4gIGFwcC51c2UoXG4gICAgc2Vzc2lvbih7XG4gICAgICBuYW1lOiBDT09LSUVfTkFNRSxcbiAgICAgIHN0b3JlOiBuZXcgcmVkaXNTdG9yZSh7XG4gICAgICAgIGNsaWVudDogcmVkaXNDbGllbnQsXG4gICAgICAgIGRpc2FibGVUb3VjaDogdHJ1ZVxuICAgICAgfSksXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1ICogMTAsIC8vMTAgeWVhcnNcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiAnbGF4JywgLy9jc3JmXG4gICAgICAgIHNlY3VyZTogX19wcm9kX18gLy8gY29va2llIG9ubHkgd29ya3MgaW4gaHR0cHNcbiAgICAgIH0sXG4gICAgICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LnJlZGlzX3NlY3JldCB8fCAnJyxcbiAgICAgIHJlc2F2ZTogZmFsc2VcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IG9ybSA9IGF3YWl0IE1pa3JvT1JNLmluaXQobWljcm9Db25maWcpO1xuICBhd2FpdCBvcm0uZ2V0TWlncmF0b3IoKS51cCgpO1xuXG4gIGNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHNjaGVtYTogYXdhaXQgYnVpbGRTY2hlbWEoe1xuICAgICAgcmVzb2x2ZXJzOiBbQmVnaW5uZXJTY29yZVJlc29sdmVyLCBJbnRlcm1lZGlhdGVTY29yZVJlc29sdmVyLCBBZHZhbmNlZFNjb3JlUmVzb2x2ZXIsIFVzZXJSZXNvbHZlcl0sXG4gICAgICB2YWxpZGF0ZTogZmFsc2VcbiAgICB9KSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUdyYXBoUUxQbGF5Z3JvdW5kKCksXG4gICAgXSxcbiAgICBjb250ZXh0OiAoeyByZXEsIHJlcyB9KSA9PiAoeyBlbTogb3JtLmVtLCByZXEsIHJlcyB9KVxuICB9KTtcblxuICBhd2FpdCBhcG9sbG9TZXJ2ZXIuc3RhcnQoKTtcbiAgYXBvbGxvU2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCwgY29yczogZmFsc2UgfSk7XG5cbiAgYXBwLnVzZSgnL3N0YXRpYycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi90cy1kaXN0L3B1YmxpYycpKSk7XG5cbiAgYXBwLmdldCgnKicsIG1pbmVzd2VlcGVyUm91dGVyKTtcblxuICBhcHAubGlzdGVuKDQwMDAsICgpID0+IGNvbnNvbGUubG9nKCdiZWF0IG1pbmVzd2VlcGVyIGFwcCBpcyBsaXN0ZW5pbmcgb24gcG9ydCA0MDAwJykpO1xufVxuXG5tYWluKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==