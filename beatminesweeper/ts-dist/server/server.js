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
    const homeSelected = location.pathname === "/";
    const scoreboardSelected = location.pathname === "/scoreboard";
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (homeSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` }, (homeSelected && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `logged-in-user-title` },
            " ",
            "Logged in as: ",
            props.username,
            " "))) || react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/" }, "Minesweeper")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                "header-nav-ul-li" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/scoreboard" }, "High Scores")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "header-nav-ul-li" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "logout-button", onClick: () => {
                    props.logout({
                        refetchQueries: [TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.MeDocument],
                    });
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


const LoggedOutView = () => {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    const loginSelected = location.pathname === '/login';
    const registerSelected = location.pathname === '/register';
    const scoreboardSelected = location.pathname === '/scoreboard';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (loginSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/login" }, "Login")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (registerSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/register" }, "Register")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/scoreboard" }, "High Scores"))));
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
    let headerBody = null;
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) {
            globalDispatch({ type: 'SET DEFINED USERNAME', payload: { userName: data.me.username } });
        }
        else {
            globalDispatch({ type: 'UNSET DEFINED USERNAME' });
        }
    }, [data]);
    headerBody = loading ? null : !(data === null || data === void 0 ? void 0 : data.me) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedOutView__WEBPACK_IMPORTED_MODULE_7__.default, null)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedInView__WEBPACK_IMPORTED_MODULE_6__.default, { username: data.me.username, logout: logout }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "header-nav" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) ? `header-nav-ul header-is-concealed` : `header-nav-ul` }, headerBody)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: "/login" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_UserForms_Login__WEBPACK_IMPORTED_MODULE_4__.default, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: "/register" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_UserForms_Register__WEBPACK_IMPORTED_MODULE_5__.default, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: "/scoreboard" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Leaderboard_Leaderboard__WEBPACK_IMPORTED_MODULE_3__.default, { ssrTopTimes: props.ssrTopTimes })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: "/" },
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
                history.push("/");
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
                history.push("/");
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
minesweeperRouter.get("*", async (req, res) => {
    var _a;
    const context = {};
    let resultScores;
    try {
        const link =  true ? "http://localhost:4000/graphql" : 0;
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
    const link =  true ? 'http://localhost:4000' : 0;
    app.use(cors__WEBPACK_IMPORTED_MODULE_11___default()({
        origin: link,
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
        secret: 'abcdefghijklmnop',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzRSxNQUFNLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV2RSxJQUFJLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN2QyxPQUFPLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUM3RjtJQUFBLENBQUM7SUFFRixJQUFJLFVBQVUsS0FBSyxjQUFjLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUM1QyxPQUFPLDJCQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUNqRztJQUFBLENBQUM7SUFFRixJQUFJLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUN4QyxPQUFPLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQztLQUNuRztJQUFBLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMs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LElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvU3F1YXJlcy9zd2VlcHNxdWFyZXN0eWxlcy5zY3NzPzk0ZmIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9ib2FyZHN0eWxlcy5zY3NzP2I1ZTEiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ib21lL2hlYWRlci5zY3NzP2E3MTAiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ib21lL2hvbWUuc2Nzcz9iZmVkIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuc2Nzcz85MzM1Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWlsbGlzZWNvbmRUaW1lci9taWxsaXNlY29uZHN0eWxlcy5zY3NzPzAzNzIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaW5lc3dlZXBlci9taW5lc3dlZXBlci5zY3NzP2QyMzMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ta2lsbExldmVsU2VsZWN0b3Ivc2tpbGxzdHlsZXMuc2Nzcz81Y2ZiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvU21pbGV5QmFyL3NtaWxleXN0eWxlcy5zY3NzPzI2NDQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvdXNlckZvcm1zLnNjc3M/ZjE1NCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL2VudGl0aWVzL0FkdmFuY2VkX1Njb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL2VudGl0aWVzL0JlZ2lubmVyX1Njb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL2VudGl0aWVzL0ludGVybWVkaWF0ZV9TY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9lbnRpdGllcy9Vc2VyLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvbWlrcm8tb3JtLmNvbmZpZy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9HbG9iYWxTdG9yZS9HbG9iYWxTdG9yZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvR2xvYmFsU3RvcmUvZ2xvYmFsUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9Cb2FyZC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9Cb2FyZFN0b3JlL0JvYXJkU3RvcmUudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvQm9hcmRTdG9yZS9ib2FyZEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9Cb2FyZFN0b3JlL2JvYXJkUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL1NxdWFyZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL3NxdWFyZVV0aWxzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvdXNlRWZmZWN0Qm9hcmRIb29rcy50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ib21lL0hlYWRlckludGVyZmFjZXMvTG9nZ2VkSW5WaWV3LnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRPdXRWaWV3LnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZEVudHJ5LnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL1BhZ2luYXRpb24vUGFnZU5vTGkudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvUGFnaW5hdGlvbi9wYWdlTm9VbC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL01pbGxpc2Vjb25kVGltZXIudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWlsbGlzZWNvbmRUaW1lci9UaW1lclN0b3JlL1RpbWVyU3RvcmUudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWlsbGlzZWNvbmRUaW1lci9UaW1lclN0b3JlL3RpbWVyUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaW5lc3dlZXBlci9NaW5lc3dlZXBlci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ta2lsbExldmVsU2VsZWN0b3IvU2tpbGxMZXZlbFNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NtaWxleUJhci9TbWlsZXlCYXIudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvVXNlckZvcm1zL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvVXNlckZvcm1zL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9jdXN0b21Ib29rcy50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL2FkdmFuY2VkU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL1Jlc29sdmVycy9iZWdpbm5lclNjb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9SZXNvbHZlcnMvaW50ZXJtZWRpYXRlU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL1Jlc29sdmVycy91c2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9zc3ItY2xpZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9zc3ItY2xpZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvdXRpbHMvdG9FcnJvck1hcC50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiQG1pa3JvLW9ybS9jb3JlXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItY29yZVwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXJnb24yXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImNvbm5lY3QtcmVkaXNcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJjcm9zcy1mZXRjaFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlZGlzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGNvbnN0IF9fcHJvZF9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmV4cG9ydCBjb25zdCBDT09LSUVfTkFNRT0ncWlkJztcbiIsImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQsIEludCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkU2NvcmUge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByb3BlcnR5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgdGltZSE6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQsIEludCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIEJlZ2lubmVyU2NvcmUge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByb3BlcnR5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgdGltZSE6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQsIEludCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIEludGVybWVkaWF0ZVNjb3JlIHtcbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByaW1hcnlLZXkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICBpZCE6IG51bWJlcjtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScgfSlcbiAgY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScsIG9uVXBkYXRlOiAoKSA9PiBuZXcgRGF0ZSgpIH0pXG4gIHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ3RleHQnIH0pXG4gIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIHRpbWUhOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE9iamVjdFR5cGUsIEZpZWxkLCBJbnQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5AT2JqZWN0VHlwZSgpXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByaW1hcnlLZXkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICBpZCE6IG51bWJlcjtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScgfSlcbiAgY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScsIG9uVXBkYXRlOiAoKSA9PiBuZXcgRGF0ZSgpIH0pXG4gIHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ3RleHQnLCB1bmlxdWU6IHRydWUgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQFByb3BlcnR5KHsgdHlwZTogJ3RleHQnIH0pXG4gIHBhc3N3b3JkITogc3RyaW5nO1xufSIsImltcG9ydCB7IEJlZ2lubmVyU2NvcmUgfSBmcm9tIFwiVFNEYXRhYmFzZS9lbnRpdGllcy9CZWdpbm5lcl9TY29yZXNcIjtcbmltcG9ydCB7IEludGVybWVkaWF0ZVNjb3JlIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvSW50ZXJtZWRpYXRlX1Njb3Jlc1wiO1xuaW1wb3J0IHsgQWR2YW5jZWRTY29yZSB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL0FkdmFuY2VkX1Njb3Jlc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL1VzZXJcIjtcbmltcG9ydCB7IF9fcHJvZF9fIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tIFwiQG1pa3JvLW9ybS9jb3JlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRpb25zOiB7XG4gICAgcGF0aDogXCIuL3RzLXNyYy9kYXRhYmFzZS9taWdyYXRpb25zXCIsXG4gICAgcGF0dGVybjogL15bXFx3LV0rXFxkK1xcLlt0al1zJC8sXG4gIH0sXG4gIGVudGl0aWVzOiBbQmVnaW5uZXJTY29yZSwgSW50ZXJtZWRpYXRlU2NvcmUsIEFkdmFuY2VkU2NvcmUsIFVzZXJdLFxuICBkYk5hbWU6IFwiTWluZXN3ZWVwZXJcIixcbiAgdHlwZTogXCJwb3N0Z3Jlc3FsXCIsXG4gIGRlYnVnOiAhX19wcm9kX18sXG4gIHBvcnQ6IDU0MzIsXG4gIHVzZXI6IF9fcHJvZF9fID8gXCJ1YnVudHVcIiA6IFwiamFtZXNocml2bmFrXCIsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QR1Bhc3N3b3JkXG59IGFzIFBhcmFtZXRlcnM8dHlwZW9mIE1pa3JvT1JNLmluaXQ+WzBdO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0ICogYXMgQXBvbGxvIGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSAge31cbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZSA9IHtcbiAgX190eXBlbmFtZT86ICdBZHZhbmNlZFNjb3JlJztcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0aW1lOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZSA9IHtcbiAgX190eXBlbmFtZT86ICdCZWdpbm5lclNjb3JlJztcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0aW1lOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0ludGVybWVkaWF0ZVNjb3JlJztcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0aW1lOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBkZWxldGVVc2VyOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBuZXdBZHZhbmNlZFNjb3JlPzogTWF5YmU8QWR2YW5jZWRTY29yZT47XG4gIG5ld0JlZ2lubmVyU2NvcmU/OiBNYXliZTxCZWdpbm5lclNjb3JlPjtcbiAgbmV3SW50ZXJtZWRpYXRlU2NvcmU/OiBNYXliZTxJbnRlcm1lZGlhdGVTY29yZT47XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlVXNlckFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbk5ld0FkdmFuY2VkU2NvcmVBcmdzID0ge1xuICB0aW1lOiBTY2FsYXJzWydGbG9hdCddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTmV3QmVnaW5uZXJTY29yZUFyZ3MgPSB7XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25OZXdJbnRlcm1lZGlhdGVTY29yZUFyZ3MgPSB7XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgYWxsQWR2YW5jZWRTY29yZXM6IEFycmF5PEFkdmFuY2VkU2NvcmU+O1xuICBhbGxCZWdpbm5lclNjb3JlczogQXJyYXk8QmVnaW5uZXJTY29yZT47XG4gIGFsbEludGVybWVkaWF0ZVNjb3JlczogQXJyYXk8SW50ZXJtZWRpYXRlU2NvcmU+O1xuICBnZXRBbGxVc2VyczogQXJyYXk8VXNlcj47XG4gIGdldFNpbmdsZVVzZXI6IFVzZXJSZXNwb25zZTtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlHZXRTaW5nbGVVc2VyQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJuYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlckZyYWdtZW50ID0geyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCBsb2dpbjogeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScsIGVycm9ycz86IEFycmF5PHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJywgZmllbGQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIH0+IHwgbnVsbCB8IHVuZGVmaW5lZCwgdXNlcj86IHsgX190eXBlbmFtZT86ICdVc2VyJywgaWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZyB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9IH07XG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCBsb2dvdXQ6IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCBuZXdBZHZhbmNlZFNjb3JlPzogeyBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCBuZXdCZWdpbm5lclNjb3JlPzogeyBfX3R5cGVuYW1lPzogJ0JlZ2lubmVyU2NvcmUnLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aW1lOiBTY2FsYXJzWydGbG9hdCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0ludGVybWVkaWF0ZVNjb3JlPzogeyBfX3R5cGVuYW1lPzogJ0ludGVybWVkaWF0ZVNjb3JlJywgdXNlcm5hbWU6IHN0cmluZywgdGltZTogbnVtYmVyIH0gfCBudWxsIHwgdW5kZWZpbmVkIH07XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCByZWdpc3RlcjogeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScsIGVycm9ycz86IEFycmF5PHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJywgZmllbGQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIH0+IHwgbnVsbCB8IHVuZGVmaW5lZCwgdXNlcj86IHsgX190eXBlbmFtZT86ICdVc2VyJywgaWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZyB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9IH07XG5cbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgYWxsQWR2YW5jZWRTY29yZXM6IEFycmF5PHsgX190eXBlbmFtZT86ICdBZHZhbmNlZFNjb3JlJywgaWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZywgdGltZTogbnVtYmVyLCBjcmVhdGVkQXQ6IHN0cmluZywgdXBkYXRlZEF0OiBzdHJpbmcgfT4gfTtcblxuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEJlZ2lubmVyU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxCZWdpbm5lclNjb3JlczogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0JlZ2lubmVyU2NvcmUnLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNyZWF0ZWRBdDogc3RyaW5nLCB1cGRhdGVkQXQ6IHN0cmluZyB9PiB9O1xuXG5leHBvcnQgdHlwZSBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgYWxsSW50ZXJtZWRpYXRlU2NvcmVzOiBBcnJheTx7IF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNyZWF0ZWRBdDogc3RyaW5nLCB1cGRhdGVkQXQ6IHN0cmluZyB9PiB9O1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IHsgX190eXBlbmFtZT86ICdRdWVyeScsIG1lPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyIG9uIFVzZXIge1xuICBpZFxuICB1c2VybmFtZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0ISkge1xuICBsb2dpbihvcHRpb25zOiAkb3B0aW9ucykge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIC4uLlJlZ3VsYXJVc2VyXG4gICAgfVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUxvZ2luTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlTG9naW5NdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dpbk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbbG9naW5NdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxvZ2luTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgb3B0aW9uczogLy8gdmFsdWUgZm9yICdvcHRpb25zJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUxvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxMb2dpbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTG9nb3V0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9nb3V0IHtcbiAgbG9nb3V0XG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9nb3V0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlTG9nb3V0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTG9nb3V0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dvdXRNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxvZ291dE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ291dE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUxvZ291dE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ291dE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQWR2YW5jZWRTY29yZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEFkdmFuY2VkU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0FkdmFuY2VkU2NvcmUodXNlcm5hbWU6ICR1c2VybmFtZSwgdGltZTogJHRpbWUpIHtcbiAgICB1c2VybmFtZVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPEFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbYWR2YW5jZWRTY29yZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxBZHZhbmNlZFNjb3JlTXV0YXRpb24sIEFkdmFuY2VkU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4oQWR2YW5jZWRTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEFkdmFuY2VkU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEJlZ2lubmVyU2NvcmVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBCZWdpbm5lclNjb3JlKCR1c2VybmFtZTogU3RyaW5nISwgJHRpbWU6IEZsb2F0ISkge1xuICBuZXdCZWdpbm5lclNjb3JlKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHRpbWU6ICR0aW1lKSB7XG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxCZWdpbm5lclNjb3JlTXV0YXRpb24sIEJlZ2lubmVyU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VCZWdpbm5lclNjb3JlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2JlZ2lubmVyU2NvcmVNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB1c2VybmFtZTogLy8gdmFsdWUgZm9yICd1c2VybmFtZSdcbiAqICAgICAgdGltZTogLy8gdmFsdWUgZm9yICd0aW1lJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxCZWdpbm5lclNjb3JlTXV0YXRpb24sIEJlZ2lubmVyU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248QmVnaW5uZXJTY29yZU11dGF0aW9uLCBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXM+KEJlZ2lubmVyU2NvcmVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxCZWdpbm5lclNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBJbnRlcm1lZGlhdGVTY29yZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEludGVybWVkaWF0ZVNjb3JlKCR1c2VybmFtZTogU3RyaW5nISwgJHRpbWU6IEZsb2F0ISkge1xuICBuZXdJbnRlcm1lZGlhdGVTY29yZSh1c2VybmFtZTogJHVzZXJuYW1lLCB0aW1lOiAkdGltZSkge1xuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24sIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtpbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB1c2VybmFtZTogLy8gdmFsdWUgZm9yICd1c2VybmFtZSdcbiAqICAgICAgdGltZTogLy8gdmFsdWUgZm9yICd0aW1lJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4oSW50ZXJtZWRpYXRlU2NvcmVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3Rlcigkb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0ISkge1xuICByZWdpc3RlcihvcHRpb25zOiAkb3B0aW9ucykge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIC4uLlJlZ3VsYXJVc2VyXG4gICAgfVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVJlZ2lzdGVyTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlUmVnaXN0ZXJNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgb3B0aW9uczogLy8gdmFsdWUgZm9yICdvcHRpb25zJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxSZWdpc3Rlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgR2V0QWR2YW5jZWRTY29yZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRBZHZhbmNlZFNjb3JlcyB7XG4gIGFsbEFkdmFuY2VkU2NvcmVzIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8R2V0QWR2YW5jZWRTY29yZXNRdWVyeSwgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8R2V0QWR2YW5jZWRTY29yZXNRdWVyeSwgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcz4oR2V0QWR2YW5jZWRTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8R2V0QWR2YW5jZWRTY29yZXNRdWVyeSwgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEFkdmFuY2VkU2NvcmVzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8R2V0QWR2YW5jZWRTY29yZXNRdWVyeSwgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgR2V0QmVnaW5uZXJTY29yZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRCZWdpbm5lclNjb3JlcyB7XG4gIGFsbEJlZ2lubmVyU2NvcmVzIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8R2V0QmVnaW5uZXJTY29yZXNRdWVyeSwgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8R2V0QmVnaW5uZXJTY29yZXNRdWVyeSwgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVZhcmlhYmxlcz4oR2V0QmVnaW5uZXJTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8R2V0QmVnaW5uZXJTY29yZXNRdWVyeSwgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEJlZ2lubmVyU2NvcmVzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEJlZ2lubmVyU2NvcmVzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEJlZ2lubmVyU2NvcmVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8R2V0QmVnaW5uZXJTY29yZXNRdWVyeSwgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgR2V0SW50ZXJtZWRpYXRlU2NvcmVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgR2V0SW50ZXJtZWRpYXRlU2NvcmVzIHtcbiAgYWxsSW50ZXJtZWRpYXRlU2NvcmVzIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4oR2V0SW50ZXJtZWRpYXRlU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8R2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8R2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZU1lUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWVRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZU1lUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWVRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4oTWVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWVRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vZ2xvYmFsUmVkdWNlcnMnO1xuaW1wb3J0IHsgRGltZW5zaW9ucywgRGVmaW5lZFVzZXJOYW1lLCBUaW1lck9uIH0gZnJvbSAnTWluZXN3ZWVwZXJUeXBlcyc7XG5cblxuaW50ZXJmYWNlIElTdGF0ZVR5cGVzIHtcbiAgZGltZW5zaW9uczogRGltZW5zaW9uc1xuICB0b3BUaW1lczogW107XG4gIGRlZmluZWRVc2VyTmFtZTogRGVmaW5lZFVzZXJOYW1lO1xuICB0aW1lck9uOiBUaW1lck9uXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZVR5cGVzID0ge1xuICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9LFxuICB0b3BUaW1lczogW10sXG4gIGRlZmluZWRVc2VyTmFtZTogbnVsbCxcbiAgdGltZXJPbjogZmFsc2Vcbn07XG5cblxuY29uc3QgR2xvYmFsU3RvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxbSVN0YXRlVHlwZXMsIFJlYWN0LkRpc3BhdGNoPGFueT5dPihbaW5pdGlhbFN0YXRlLCAoKSA9PiB7IH1dKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50XG59XG5cbmNvbnN0IEdsb2JhbFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbzxhbnk+KCgpID0+IFtzdGF0ZSwgZGlzcGF0Y2hdLCBbc3RhdGVdKTtcbiAgcmV0dXJuIChcbiAgICAvLyB2YWx1ZSB3YXMgcHJldmlvdXNseSBzdG9yZVxuICAgIDxHbG9iYWxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9HbG9iYWxTdG9yZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFN0b3JlQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNvdW50IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDb3VudFByb3ZpZGVyJylcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cblxuZXhwb3J0IHsgdXNlR2xvYmFsQ29udGV4dCwgR2xvYmFsU3RvcmVQcm92aWRlciB9OyIsInR5cGUgVGltZXJPblR5cGUgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xufTtcblxuY29uc3QgdGltZXJPbiA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb246IFRpbWVyT25UeXBlKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU1dJVENIIFRJTUVSIE9OXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFwiU1dJVENIIFRJTUVSIE9GRlwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgXCJGUkVFWkUgVElNRVIgU1RBVEUgV0lOXCI6XG4gICAgICByZXR1cm4gXCJGUkVFWkUgV0lOXCI7XG4gICAgY2FzZSBcIkZSRUVaRSBUSU1FUiBTVEFURSBERUFEXCI6XG4gICAgICByZXR1cm4gJ0ZSRUVaRSBERUFEJztcbiAgICBjYXNlIFwiRlJFRVpFIFRJTUVSIFNUQVRFIFZJQ1RPUllcIjpcbiAgICAgIHJldHVybiAnVklDVE9SWSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBEaW1lbnNpb25BY3Rpb24gPSB7XG4gIHR5cGU6IHN0cmluZztcbn07XG5cbmNvbnN0IGRpbWVuc2lvbnMgPSAoc3RhdGUgPSB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9LCBhY3Rpb246IERpbWVuc2lvbkFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVCBCRUdJTk5FUiBESU1FTlNJT05TXCI6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnYmVnaW5uZXInLCB2ZXJ0aWNhbERpbWVuc2lvbjogOSwgaG9yaXpvbnRhbERpbWVuc2lvbjogOSwgbnVtYmVyT2ZNaW5lczogMTAgfTtcbiAgICBjYXNlIFwiU0VUIElOVEVSTUVESUFURSBESU1FTlNJT05TXCI6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnaW50ZXJtZWRpYXRlJywgdmVydGljYWxEaW1lbnNpb246IDE2LCBob3Jpem9udGFsRGltZW5zaW9uOiAxNiwgbnVtYmVyT2ZNaW5lczogNDAgfTtcbiAgICBjYXNlICdTRVQgQURWQU5DRUQgRElNRU5TSU9OUyc6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnYWR2YW5jZWQnLCB2ZXJ0aWNhbERpbWVuc2lvbjogMTYsIGhvcml6b250YWxEaW1lbnNpb246IDMwLCBudW1iZXJPZk1pbmVzOiA5OSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCB0b3BUaW1lcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb246XG4gIHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IHRvcFRpbWVzOiBzdHJpbmdbXX0gfVxuICApID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVCBUT1AgVElNRVNcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC50b3BUaW1lcztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjb25zdCByZWR1Y2VSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4ge1xuLy8gICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pID0+IHJlZHVjZXJzLnJlZHVjZSgoYWNjLCBuZXh0UmVkdWNlcikgPT4gbmV4dFJlZHVjZXIoYWNjLCBhY3Rpb24pLCBzdGF0ZSlcbi8vIH07XG5cblxuY29uc3QgZGVmaW5lZFVzZXJOYW1lID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uOlxuICB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogeyB1c2VyTmFtZTogc3RyaW5nIH0gfVxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIERFRklORUQgVVNFUk5BTUVcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC51c2VyTmFtZTtcbiAgICBjYXNlIFwiVU5TRVQgREVGSU5FRCBVU0VSTkFNRVwiOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbi8vICAgYTogcmVkdWNlUmVkdWNlcnMocGx1c09uZVJlZHVjZXIsIHBsdXNPbmVSZWR1Y2VyKSwgLy8gYU5ldyA9IGFPbGQgKyAxICsgMVxuLy8gICBiOiByZWR1Y2VSZWR1Y2Vycyh0aW1lc1R3b1JlZHVjZXIsIHBsdXNPbmVSZWR1Y2VyKSAvLyBiTmV3ID0gYk9sZCAqIDIgKyAxXG4vLyB9KTtcblxuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAoc2xpY2VzOiBhbnkpID0+IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4gT2JqZWN0LmtleXMoc2xpY2VzKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4gKHtcbiAgLi4uYWNjLFxuICBbcHJvcF06IHNsaWNlc1twcm9wXShhY2NbcHJvcF0sIGFjdGlvbiksXG59KSxcbiAgc3RhdGVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGRpbWVuc2lvbnMsXG4gIGRlZmluZWRVc2VyTmFtZSxcbiAgdG9wVGltZXMsXG4gIHRpbWVyT25cbn0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJ0dsb2JhbFN0b3JlJztcbmltcG9ydCB7IHVzZUJvYXJkQ29udGV4dCB9IGZyb20gJ0JvYXJkU3RvcmUnO1xuaW1wb3J0IEJvYXJkSG9va3MgZnJvbSAnLi91c2VFZmZlY3RCb2FyZEhvb2tzJztcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSAnQ3VzdG9tSG9va3MnO1xuaW1wb3J0IFNxdWFyZSBmcm9tICdUU0NvbXBvbmVudHMvQm9hcmQvU3F1YXJlcy9TcXVhcmUnO1xuXG5pbXBvcnQgJy4vYm9hcmRzdHlsZXMuc2Nzcyc7XG5cblxuY29uc3QgQm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbeyBkaW1lbnNpb25zLCBkZWZpbmVkVXNlck5hbWUsIHRpbWVyT24sIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbCB9IH0sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKVxuICBjb25zdCBbeyBmbGlwcGVycywgbWluZUFyciwgbnVtYmVycywgc2Nyb2xsQm9hcmQsIGNvbG9yRGVsYXkgfSwgYm9hcmREaXNwYXRjaF0gPSB1c2VCb2FyZENvbnRleHQoKTtcblxuICAvLyBCb2FyZCBTcGVjaWZpYyB1c2VFZmZlY3RzICYmIGFjdGlvbnMuXG4gIEJvYXJkSG9va3MuZnJlZXplQ29sb3JEZWxheUVmZmVjdChkZWZpbmVkVXNlck5hbWUsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLnN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdChjb2xvckRlbGF5LCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5mcmVlemVTY3JvbGxCb2FyZEVmZmVjdChzY3JvbGxCb2FyZCk7XG4gIEJvYXJkSG9va3MuZ2VuZXJhdGVNaW5lc0VmZmVjdChkaW1lbnNpb25zLCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5nZW5lcmF0ZU51bWJlckVmZmVjdChtaW5lQXJyLCBkaW1lbnNpb25zLCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5yZXNldEdhbWVFZmZlY3RPblNtaWxleU9yU2tpbGwodGltZXJPbiwgZGltZW5zaW9ucywgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3MucmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT24odGltZXJPbiwgc2tpbGxMZXZlbCwgYm9hcmREaXNwYXRjaCk7XG5cbiAgLy8gY29uc3Qgc2V0U2Nyb2xsQm9hcmRDYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnVE9HR0xFIFNDUk9MTEJPQVJEJyB9KSwgW10pO1xuXG4gIHVzZUludGVydmFsKCgpID0+IGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnSVRFUkFURSBDT0xPUlMnIH0pLCBjb2xvckRlbGF5KTtcblxuICAvLyBNaXhlZCFcbiAgQm9hcmRIb29rcy5yZXZlYWxGbGlwcGVyRWZmZWN0KHsgbWluZUFyciwgZmxpcHBlcnMsIG51bWJlcnMsIGdsb2JhbERpc3BhdGNoLCBib2FyZERpc3BhdGNoIH0pO1xuXG4gIC8vIEdsb2JhbCBCb2FyZCB1c2VFZmZlY3RzXG4gIEJvYXJkSG9va3MucmVzZXRPblNraWxsTGV2ZWxDaGFuZ2VFZmZlY3Qoc2tpbGxMZXZlbCwgZ2xvYmFsRGlzcGF0Y2gpO1xuXG5cbiAgY29uc3Qgc2V0U2Nyb2xsQm9hcmRDYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICgpID0+IGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIlRPR0dMRSBTQ1JPTExCT0FSRFwiIH0pLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGU6IFJlYWN0LldoZWVsRXZlbnQpID0+XG4gIGJvYXJkRGlzcGF0Y2goe1xuICAgIHR5cGU6IFwiTU9EVUxBVEUgQ09MT1IgREVMQVlcIixcbiAgICBwYXlsb2FkOiB7IG5ld0NvbG9yRGVsYXk6IGUuZGVsdGFZIH0sXG4gIH0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICBpZD1cInBsYXktYm9hcmRcIlxuICAgIG9uV2hlZWw9eyhlKSA9PiBjb2xvckRlbGF5ID8gaGFuZGxlU2Nyb2xsKGUpIDogbnVsbH1cbiAgICBvbk1vdXNlRW50ZXI9eygpID0+IGNvbG9yRGVsYXkgPyBzZXRTY3JvbGxCb2FyZENhbGxiYWNrKCkgOiBudWxsfVxuICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gY29sb3JEZWxheSA/IHNldFNjcm9sbEJvYXJkQ2FsbGJhY2soKSA6IG51bGx9XG4gICAgPlxuICAgICAge1suLi5uZXcgQXJyYXkoZGltZW5zaW9ucy52ZXJ0aWNhbERpbWVuc2lvbildLm1hcCgoXywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT0nc3dlZXAtcm93Jz5cbiAgICAgICAgICAgIHtbLi4ubmV3IEFycmF5KGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbildLm1hcCgoXywgc3FySW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY3VyclRpbGU6IG51bWJlciA9ICgocm93SW5kZXggKiBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pICsgc3FySW5kZXgpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTcXVhcmUga2V5PXtzcXJJbmRleH0gY3VyclRpbGU9e2N1cnJUaWxlfSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tYmluZWRSZWR1Y2VycyBmcm9tICcuL2JvYXJkUmVkdWNlcnMnO1xuaW1wb3J0IHsgQ29sb3JzLCBGbGFnc1JlbWFpbmluZywgU3VycHJpc2VkLCBOdW1iZXJzLCBNaW5lQXJyLCBGbGlwcGVycywgQ29sb3JEZWxheSwgU2Nyb2xsQm9hcmQgfSBmcm9tICdNaW5lc3dlZXBlclR5cGVzJztcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGVzIHtcbiAgc2Nyb2xsQm9hcmQ6IFNjcm9sbEJvYXJkO1xuICBjb2xvckRlbGF5OiBDb2xvckRlbGF5O1xuICBmbGlwcGVyczogRmxpcHBlcnM7XG4gIG1pbmVBcnI6IE1pbmVBcnI7XG4gIG51bWJlcnM6IE51bWJlcnM7XG4gIHN1cnByaXNlZDogU3VycHJpc2VkO1xuICBmbGFnc1JlbWFpbmluZzogRmxhZ3NSZW1haW5pbmc7XG4gIGNvbG9yczogQ29sb3JzO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZVR5cGVzID0ge1xuICBzY3JvbGxCb2FyZDogZmFsc2UsXG4gIGNvbG9yRGVsYXk6IDEwMDAsXG4gIGZsaXBwZXJzOiBbXSxcbiAgbWluZUFycjogW10sXG4gIG51bWJlcnM6IHt9LFxuICBzdXJwcmlzZWQ6IGZhbHNlLFxuICBmbGFnc1JlbWFpbmluZzogMTAsXG4gIGNvbG9yczogWydibHVlLW51bScsICdncmVlbi1udW0nLCAncmVkLW51bScsICdnb2xkLW51bScsICdwdXJwbGUtbnVtJywgJ21hcm9vbi1udW0nLCAndHVycXVvaXNlLW51bScsICdncmV5LW51bSddXG59O1xuXG5jb25zdCBCb2FyZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFtJU3RhdGVUeXBlcywgUmVhY3QuRGlzcGF0Y2g8YW55Pl0+KFtpbml0aWFsU3RhdGUsICgpID0+IHsgfV0pO1xuXG5cblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W11cbn1cblxuY29uc3QgQm9hcmRTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihDb21iaW5lZFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbzxhbnk+KCgpID0+IFtzdGF0ZSwgZGlzcGF0Y2hdLCBbc3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb2FyZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9Cb2FyZENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VCb2FyZENvbnRleHQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEJvYXJkQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNvdW50IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDb3VudFByb3ZpZGVyJyk7XG4gIH07XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5cblxuXG5leHBvcnQgeyB1c2VCb2FyZENvbnRleHQsIEJvYXJkU3RvcmVQcm92aWRlciB9OyIsImltcG9ydCB7R2VuZXJhdGVOdW1iZXJzRnVuYywgSXRlcmF0ZUNvbG9yc0Z1bmN9IGZyb20gJy4uL2JvYXJkLXR5cGVzJztcblxuY29uc3QgaXRlcmF0ZUNvbG9yczogSXRlcmF0ZUNvbG9yc0Z1bmMgPSAoZXhpc3RpbmdDb2xvcnMpID0+IHtcbiAgY29uc3QgbGFzdENvbG9yID0gZXhpc3RpbmdDb2xvcnMucG9wKCk7XG4gIGV4aXN0aW5nQ29sb3JzLnVuc2hpZnQobGFzdENvbG9yKTtcbiAgcmV0dXJuIFsuLi5leGlzdGluZ0NvbG9yc107XG59O1xuXG5cbnR5cGUgTW9kdWxhdGVDb2xvckRlbGF5RnVuYyA9IChleGlzdGluZzogbnVtYmVyLCBuZXdDb2xvckRlbGF5OiBudW1iZXIpID0+IG51bWJlcjtcblxuY29uc3QgbW9kdWxhdGVDb2xvckRlbGF5OiBNb2R1bGF0ZUNvbG9yRGVsYXlGdW5jID0gKGV4aXN0aW5nLCBuZXdDb2xvckRlbGF5KSA9PiB7XG4gIGlmICgoZXhpc3RpbmcgKyBuZXdDb2xvckRlbGF5KSA+IDI1KSB7XG4gICAgLy8gSWYgSW5jcmVhc2luZyB0aGUgQ29sb3IgRGVsYXktIGRvIHNvIGF0IGEgcmF0ZSBvZiAxLCBvdGhlcndpc2Ugd2hlbiBkZWNyZWFzaW5nIGRvIHNvIGF0IDIuNSByYXRlLSBmdWxsIHJhdGUgaXMgbGVzcyBlbmpveWFibGVcbiAgICBuZXdDb2xvckRlbGF5ID0gbmV3Q29sb3JEZWxheSA8IDAgJiYgZXhpc3RpbmcgPCAyMDAgPyBuZXdDb2xvckRlbGF5IC8gNVxuICAgICAgOiBuZXdDb2xvckRlbGF5IDwgMCA/IG5ld0NvbG9yRGVsYXkgLyAyLjVcbiAgICAgICAgOiAxXG4gICAgcmV0dXJuIGV4aXN0aW5nICsgbmV3Q29sb3JEZWxheTtcbiAgfVxuICByZXR1cm4gZXhpc3Rpbmc7XG59O1xuXG5cbnR5cGUgUmV2ZWFsRmxpcHBlcnNGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnM6IChzdHJpbmcgfCBib29sZWFuKVtdLCBtaW5lczogbnVtYmVyW10pID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCByZXZlYWxGbGlwcGVyczogUmV2ZWFsRmxpcHBlcnNGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnMsIG1pbmVzKSA9PiB7XG4gIGV4aXN0aW5nRmxpcHBlcnMgPSBleGlzdGluZ0ZsaXBwZXJzLm1hcCgoZmxpcHBlciwgaW5kZXgpID0+IHtcbiAgICBpZiAoZmxpcHBlciA9PT0gJ2ZsYWcnIHx8IG1pbmVzPy5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgIHJldHVybiAnZmxhZydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdO1xufTtcblxudHlwZSBGbGlwTm9ybWFsVGlsZUZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIGZsaXBwZWRUaWxlOiBudW1iZXIpID0+IChzdHJpbmcgfGJvb2xlYW4pW107XG5cbmNvbnN0IGZsaXBOb3JtYWxUaWxlOiBGbGlwTm9ybWFsVGlsZUZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgZmxpcHBlZFRpbGUpID0+IHtcbiAgZXhpc3RpbmdGbGlwcGVycy5zcGxpY2UoZmxpcHBlZFRpbGUsIDEsIHRydWUpO1xuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdO1xufTtcblxudHlwZSBGbGlwUmVjdXJzZWRUaWxlc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIHJlY3Vyc2VkVGlsZXM6IG51bWJlcltdKSA9PiAoc3RyaW5nIHwgYm9vbGVhbilbXTtcblxuY29uc3QgZmxpcFJlY3Vyc2VkVGlsZXM6IEZsaXBSZWN1cnNlZFRpbGVzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzLCByZWN1cnNlZFRpbGVzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjdXJzZWRUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGV4aXN0aW5nRmxpcHBlcnMuc3BsaWNlKHJlY3Vyc2VkVGlsZXNbaV0sIDEsIHRydWUpO1xuICB9XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIFJldmVhbERlYWRGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10pID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCByZXZlYWxEZWFkRmxpcHBlcnM6IFJldmVhbERlYWRGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVycykgPT4ge1xuICBleGlzdGluZ0ZsaXBwZXJzID0gZXhpc3RpbmdGbGlwcGVycy5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ2RlYWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFsuLi5leGlzdGluZ0ZsaXBwZXJzXVxufTtcblxudHlwZSBTZXRGbGFnRmxpcHBlZEZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIGZsYWdGbGlwcGVkOiBudW1iZXIpID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCBzZXRGbGFnRmxpcHBlZDogU2V0RmxhZ0ZsaXBwZWRGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnMsIGZsYWdGbGlwcGVkKSA9PiB7XG4gIGlmIChleGlzdGluZ0ZsaXBwZXJzW2ZsYWdGbGlwcGVkXSA9PT0gJ2ZsYWcnKSB7XG4gICAgZXhpc3RpbmdGbGlwcGVycy5zcGxpY2UoZmxhZ0ZsaXBwZWQsIDEsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGFnRmxpcHBlZCwgMSwgJ2ZsYWcnKTtcbiAgfVxuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdO1xufTtcblxudHlwZSBHZW5lcmF0ZU1pbmVzRnVuYyA9IChkaW1lbnNpb25zOiB7IG51bWJlck9mTWluZXM6IG51bWJlciwgdmVydGljYWxEaW1lbnNpb246IG51bWJlciwgaG9yaXpvbnRhbERpbWVuc2lvbjogbnVtYmVyIH0pID0+IG51bWJlcltdO1xuXG5jb25zdCBnZW5lcmF0ZU1pbmVzOiBHZW5lcmF0ZU1pbmVzRnVuYyA9ICh7IG51bWJlck9mTWluZXMsIHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0pID0+IHtcbiAgbGV0IGdlbmVyYXRlZE1pbmVzOiBudW1iZXJbXSA9IFtdO1xuICB3aGlsZSAoZ2VuZXJhdGVkTWluZXMubGVuZ3RoIDwgbnVtYmVyT2ZNaW5lcykge1xuICAgIGNvbnN0IG1pbmVDYW5pZGF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh2ZXJ0aWNhbERpbWVuc2lvbiAqIGhvcml6b250YWxEaW1lbnNpb24pKTtcbiAgICBpZiAoIWdlbmVyYXRlZE1pbmVzLmluY2x1ZGVzKG1pbmVDYW5pZGF0ZSkpIHtcbiAgICAgIGdlbmVyYXRlZE1pbmVzLnB1c2gobWluZUNhbmlkYXRlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBnZW5lcmF0ZWRNaW5lcztcbn07XG5cblxuXG5jb25zdCBnZW5lcmF0ZU51bWJlcnM6IEdlbmVyYXRlTnVtYmVyc0Z1bmMgPSAoeyBtaW5lQXJyLCB2ZXJ0aWNhbERpbWVuc2lvbiwgaG9yaXpvbnRhbERpbWVuc2lvbiB9KSA9PiB7XG4gIGxldCBib2FyZCA9IFsuLi5BcnJheSh2ZXJ0aWNhbERpbWVuc2lvbiAqIGhvcml6b250YWxEaW1lbnNpb24pLmtleXMoKV07XG4gIGxldCBudW1Cb2FyZCA9IHt9O1xuXG4gIG1pbmVBcnI/LmZvckVhY2goKG1pbmUsIF8sIG1pbmVzKSA9PiB7XG4gICAgLy8gTnVtYmVyIGlzIFRvcCBMZWZ0IERpYWdvbmFsXG4gICAgbGV0IHRMRCA9IGhvcml6b250YWxEaW1lbnNpb24gKyAxO1xuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gdExEKSAmJiAoKChtaW5lIC0gdExEKSArIDEpICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0TEQpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIHRMRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIHRMRF0gPSBudW1Cb2FyZFttaW5lIC0gdExEXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdExEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTnVtYmVyIGlzIEFib3ZlXG4gICAgY29uc3QgdEQgPSBob3Jpem9udGFsRGltZW5zaW9uO1xuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gdEQpICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lIC0gdEQpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIHREXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdERdID0gbnVtQm9hcmRbbWluZSAtIHREXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdERdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL051bWJlciBpcyBUb3AgUmlnaHQgRGlhZ29uYWxcbiAgICBjb25zdCB0UkQgPSBob3Jpem9udGFsRGltZW5zaW9uIC0gMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSAtIHRSRCkgJiYgKChtaW5lIC0gdFJEKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lIC0gdFJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgLSB0UkRdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0UkRdID0gbnVtQm9hcmRbbWluZSAtIHRSRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIHRSRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciB0byB0aGUgcmlnaHRcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIDEpICYmICgobWluZSArIDEpICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgKyAxKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyAxXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgMV0gPSBudW1Cb2FyZFttaW5lICsgMV0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIDFdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgaXMgQm90dG9tIFJpZ2h0IERpYWdvbmFsXG4gICAgY29uc3QgYlJEID0gaG9yaXpvbnRhbERpbWVuc2lvbiArIDE7XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgKyBiUkQpICYmICgobWluZSArIGJSRCkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIGJSRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lICsgYlJEXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgYlJEXSA9IG51bUJvYXJkW21pbmUgKyBiUkRdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiUkRdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgaXMgQmVsb3dcbiAgICBjb25zdCBiRCA9IGhvcml6b250YWxEaW1lbnNpb247XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgKyBiRCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgKyBiRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lICsgYkRdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiRF0gPSBudW1Cb2FyZFttaW5lICsgYkRdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vTnVtYmVyIGlzIEJvdHRvbSBMZWZ0IERpYWdvbmFsXG4gICAgY29uc3QgYkxEID0gaG9yaXpvbnRhbERpbWVuc2lvbiAtIDE7XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgKyBiTEQpICYmICgoKG1pbmUgKyBiTEQpICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIGJMRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lICsgYkxEXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgYkxEXSA9IG51bUJvYXJkW21pbmUgKyBiTERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiTERdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgdG8gdGhlIGxlZnRcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSAtIDEpICYmIChtaW5lICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSAxKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgLSAxXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gMV0gPSBudW1Cb2FyZFttaW5lIC0gMV0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIDFdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSlcbiAgcmV0dXJuIG51bUJvYXJkO1xufTtcblxuXG5leHBvcnQge1xuICAvLyBDb2xvcnNcbiAgaXRlcmF0ZUNvbG9ycyxcbiAgbW9kdWxhdGVDb2xvckRlbGF5LFxuICAvLyBGbGlwcGVyc1xuICByZXZlYWxGbGlwcGVycyxcbiAgZmxpcE5vcm1hbFRpbGUsXG4gIGZsaXBSZWN1cnNlZFRpbGVzLFxuICByZXZlYWxEZWFkRmxpcHBlcnMsXG4gIHNldEZsYWdGbGlwcGVkLFxuICAvLyBNaW5lc1xuICBnZW5lcmF0ZU1pbmVzLFxuICAvLyBOdW1iZXJzXG4gIGdlbmVyYXRlTnVtYmVycyxcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGl0ZXJhdGVDb2xvcnMsXG4gIG1vZHVsYXRlQ29sb3JEZWxheSxcbiAgcmV2ZWFsRmxpcHBlcnMsXG4gIGZsaXBOb3JtYWxUaWxlLFxuICBmbGlwUmVjdXJzZWRUaWxlcyxcbiAgcmV2ZWFsRGVhZEZsaXBwZXJzLFxuICBzZXRGbGFnRmxpcHBlZCxcbiAgZ2VuZXJhdGVNaW5lcyxcbiAgZ2VuZXJhdGVOdW1iZXJzXG59IGZyb20gJy4vYm9hcmRBY3Rpb25zJztcbmltcG9ydCB7RmxpcHBlcnNGdW5jLCBTY3JvbGxCb2FyZEZ1bmMsIENvbG9yc0Z1bmN9IGZyb20gJy4uL2JvYXJkLXR5cGVzJztcbmltcG9ydCB7XG4gIENvbG9yRGVsYXlGdW5jXG59IGZyb20gJy4uLy4uLy4uLy4uL21pbmVzd2VlcGVyLXR5cGVzJztcblxuXG5cbmNvbnN0IHNjcm9sbEJvYXJkOiBTY3JvbGxCb2FyZEZ1bmMgPSAoc3RhdGUgPSBmYWxzZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUT0dHTEUgU0NST0xMQk9BUkQnOlxuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cbmNvbnN0IGNvbG9yRGVsYXk6IENvbG9yRGVsYXlGdW5jID0gKHN0YXRlID0gMTAwMCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiVU5TRVQgQ09MT1IgREVMQVlcIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgXCJTRVQgQ09MT1IgREVMQVlcIjpcbiAgICAgIHJldHVybiAxMDAwO1xuICAgIGNhc2UgXCJNT0RVTEFURSBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIG1vZHVsYXRlQ29sb3JEZWxheShzdGF0ZSwgYWN0aW9uLnBheWxvYWQubmV3Q29sb3JEZWxheSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH07XG59O1xuXG5jb25zdCBjb2xvcnM6IENvbG9yc0Z1bmMgPSAoc3RhdGUgPSBbJ2JsdWUtbnVtJywgJ2dyZWVuLW51bScsICdyZWQtbnVtJywgJ2dvbGQtbnVtJywgJ3B1cnBsZS1udW0nLCAnbWFyb29uLW51bScsICd0dXJxdW9pc2UtbnVtJywgJ2dyZXktbnVtJ10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIklURVJBVEUgQ09MT1JTXCI6XG4gICAgICByZXR1cm4gaXRlcmF0ZUNvbG9ycyhzdGF0ZS5zbGljZSgpKTtcbiAgICBjYXNlIFwiU1RBUlQgQ09MT1IgSVRFUkFUSU9OXCI6XG4gICAgICAgIHJldHVybiBbJ2JsdWUtbnVtJywgJ2dyZWVuLW51bScsICdyZWQtbnVtJywgJ2dvbGQtbnVtJywgJ3B1cnBsZS1udW0nLCAnbWFyb29uLW51bScsICd0dXJxdW9pc2UtbnVtJywgJ2dyZXktbnVtJ107XG4gICAgY2FzZSBcIlNUT1AgQ09MT1IgSVRFUkFUSU9OXCI6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBmbGlwcGVyczogRmxpcHBlcnNGdW5jID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJSRVNFVCBGTElQUEVSU1wiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIGNhc2UgXCJTRVQgRkxBRyBGTElQUEVEXCI6XG4gICAgICByZXR1cm4gc2V0RmxhZ0ZsaXBwZWQoc3RhdGUuc2xpY2UoKSwgYWN0aW9uLnBheWxvYWQuZmxhZ0ZsaXBwZWQpO1xuICAgIGNhc2UgXCJGTElQIE5PUk1BTCBUSUxFXCI6XG4gICAgICByZXR1cm4gZmxpcE5vcm1hbFRpbGUoc3RhdGUuc2xpY2UoKSwgYWN0aW9uLnBheWxvYWQuZmxpcHBlZFRpbGUpO1xuICAgIGNhc2UgXCJGTElQIFJFQ1VSU0VEIFRJTEVTXCI6XG4gICAgICByZXR1cm4gZmxpcFJlY3Vyc2VkVGlsZXMoc3RhdGUuc2xpY2UoKSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgXCJSRVZFQUwgREVBRCBGTElQUEVSU1wiOlxuICAgICAgcmV0dXJuIHJldmVhbERlYWRGbGlwcGVycyhzdGF0ZS5zbGljZSgpKTtcbiAgICBjYXNlIFwiUkVWRUFMIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gcmV2ZWFsRmxpcHBlcnMoc3RhdGUuc2xpY2UoKSwgYWN0aW9uLnBheWxvYWQubWluZUFycik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbnR5cGUgTWluZXNGdW5jID0gKHN0YXRlOiBbXSB8IG51bWJlcltdLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IG51bWJlck9mTWluZXM6IG51bWJlciwgbWluZXM6IG51bWJlcltdLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyLCBob3Jpem9udGFsRGltZW5zaW9uOiBudW1iZXIgfSB9KSA9PiBudW1iZXJbXTtcblxuLy8gcHJlbG9hZGVkIGRlZmF1bHQgc3RhdGUgcHJldmVudHMgYW4gYXV0b21hdGljIHdpbiBieSBkZWZhdWx0XG5jb25zdCBtaW5lQXJyOiBNaW5lc0Z1bmMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiR0VORVJBVEUgTUlORVNcIjpcbiAgICAgIHJldHVybiBnZW5lcmF0ZU1pbmVzKGFjdGlvbi5wYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cbnR5cGUgTnVtYmVyc0Z1bmMgPSAoc3RhdGU6IHt9LCBhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IG1pbmVBcnI6IG51bWJlcltdLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyLCBob3Jpem9udGFsRGltZW5zaW9uOiBudW1iZXIgfSB9KSA9PiB7fTtcbmNvbnN0IG51bWJlcnM6IE51bWJlcnNGdW5jID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkdFTkVSQVRFIE5VTUJFUlNcIjpcbiAgICAgIHJldHVybiBnZW5lcmF0ZU51bWJlcnMoYWN0aW9uLnBheWxvYWQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cblxuXG50eXBlIFN1cnByaXNlZEZ1bmMgPSAoc3RhdGU6IGJvb2xlYW4gfCBzdHJpbmcsIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcgfSkgPT4gYm9vbGVhbiB8IHN0cmluZztcblxuY29uc3Qgc3VycHJpc2VkOiBTdXJwcmlzZWRGdW5jID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NVUlBSSVNFRCBTTUlMRVMnOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAnUkVTRVQgU01JTEVTJzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjYXNlICdERUFEIFNNSUxFUyc6XG4gICAgICByZXR1cm4gJ2RlYWQnO1xuICAgIGNhc2UgJ1ZJQ1RPUlkgU01JTEVTJzpcbiAgICAgIHJldHVybiAndmljdG9yeSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cblxudHlwZSBGbGFnc1JlbWFpbmluZ0Z1bmMgPSAoc3RhdGU6IG51bWJlciwgYWN0aW9uOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogbnVtYmVyIH0pID0+IG51bWJlcjtcblxuY29uc3QgZmxhZ3NSZW1haW5pbmc6IEZsYWdzUmVtYWluaW5nRnVuYyA9IChzdGF0ZSA9IDEwLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJERUNSRU1FTlQgRkxBR1MgUkVNQUlOSU5HXCI6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgIGNhc2UgXCJJTkNSRU1FTlQgRkxBR1MgUkVNQUlOSU5HXCI6XG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgIGNhc2UgXCJTRVQgRkxBR1MgUkVNQUlOSU5HXCI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBDb21iaW5lUmVkdWNlcnNGdW5jID0gKHNsaWNlczogYW55KSA9PiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IFJlYWN0LlJlZHVjZXJTdGF0ZVdpdGhvdXRBY3Rpb248YW55PlxuXG5jb25zdCBjb21iaW5lUmVkdWNlcnM6IENvbWJpbmVSZWR1Y2Vyc0Z1bmMgPSAoc2xpY2VzKSA9PiAoc3RhdGUsIGFjdGlvbikgPT4gT2JqZWN0LmtleXMoc2xpY2VzKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4gKHtcbiAgLi4uYWNjLFxuICBbcHJvcF06IHNsaWNlc1twcm9wXShhY2NbcHJvcF0sIGFjdGlvbiksXG59KSxcbiAgc3RhdGVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZsaXBwZXJzLFxuICBtaW5lQXJyLFxuICBudW1iZXJzLFxuICBzY3JvbGxCb2FyZCxcbiAgY29sb3JzLFxuICBjb2xvckRlbGF5LFxuICBzdXJwcmlzZWQsXG4gIGZsYWdzUmVtYWluaW5nXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0N1cnJUaWxlfSBmcm9tICdNaW5lc3dlZXBlclR5cGVzJztcbmltcG9ydCB7IGdlbk51bWJlckNsYXNzTmFtZXMsIGdlbkVtcHR5Q2xhc3NOYW1lcywgZ2VuTWluZUNsYXNzTmFtZXMsIGhhbmRsZUNsaWNrLCBnZW5lcmF0ZUxvZ2luTWVzc2FnZSB9IGZyb20gJy4vc3F1YXJlVXRpbHMnO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJ0dsb2JhbFN0b3JlJztcbmltcG9ydCB7IHVzZUJvYXJkQ29udGV4dCB9IGZyb20gJ0JvYXJkU3RvcmUnO1xuaW1wb3J0ICcuL3N3ZWVwc3F1YXJlc3R5bGVzLnNjc3MnO1xuXG50eXBlIFByb3BzID0ge1xuICBjdXJyVGlsZTogQ3VyclRpbGVcbn07XG5cbmNvbnN0IFNxdWFyZTogUmVhY3QuRkM8UHJvcHM+ID0gUmVhY3QubWVtbygocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjdXJyVGlsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFt7IGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbCB9LCBkZWZpbmVkVXNlck5hbWUsIGRpbWVuc2lvbnMsIHRpbWVyT24gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFt7IGNvbG9ycywgbWluZUFyciwgZmxpcHBlcnMsIG51bWJlcnMgfSwgYm9hcmREaXNwYXRjaF0gPSB1c2VCb2FyZENvbnRleHQoKTtcblxuXG4gIGNvbnN0IHRpbGVJc0FNaW5lID0gbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkgJiYgZmxpcHBlcnNbY3VyclRpbGVdICYmIGZsaXBwZXJzW2N1cnJUaWxlXSAhPT0gJ2ZsYWcnO1xuXG4gIGNvbnN0IHRpbGVJc0FOdW1iZXIgPSBmbGlwcGVyc1tjdXJyVGlsZV0gJiYgZmxpcHBlcnNbY3VyclRpbGVdICE9PSAnZmxhZycgJiYgbnVtYmVyc1tjdXJyVGlsZV07XG5cbiAgY29uc3QgdXNlck5vdExvZ2dlZEluID0gIWRlZmluZWRVc2VyTmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtdGVzdGlkPXtgdGVzdC0ke2N1cnJUaWxlfWB9XG5cbiAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIC8vIElmIHRpbGUgaXMgYSBib21iLi4uXG4gICAgICAgICAgaWYgKG1pbmVBcnIuaW5jbHVkZXMoY3VyclRpbGUpKSB7XG4gICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgREVBRCcgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVDbGljayhlLCB7XG4gICAgICAgICAgICAgIGRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgIG1pbmVBcnIsXG4gICAgICAgICAgICAgIG51bWJlcnMsXG4gICAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgICBpbmRpY2F0b3I6ICdkZWFkJyxcbiAgICAgICAgICAgICAgYm9hcmREaXNwYXRjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBJcyBhIE51bWJlciBvciBhIEVtcHR5IFNxdWFyZVxuICAgICAgICAgIC8vIElmIGFuIGVtcHR5IHNwYWNlIGlzIHJldmVhbGVkIHVuZGVyIGEgZmxhZywgaW5jcmVtZW50IHJlbWFpbmluZyBmbGFnc1xuICAgICAgICAgIGlmIChmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJykgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdJTkNSRU1FTlQgRkxBR1MgUkVNQUlOSU5HJyB9KTtcbiAgICAgICAgICAvLyBTdGFydCB0aGUgdGltZXIgYW5kIHJldmVhbCB0aGUgdGlsZVxuICAgICAgICAgIGlmICghdGltZXJPbikge1xuICAgICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU1dJVENIIFRJTUVSIE9OJyB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gTm9ybWFsIFBsYXlcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwge1xuICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgIG1pbmVBcnIsXG4gICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICBpbmRpY2F0b3I6IG51bGwsXG4gICAgICAgICAgICBib2FyZERpc3BhdGNoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VzZURvd249e1xuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFmbGlwcGVyc1tjdXJyVGlsZV0pIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnU1VSUFJJU0VEIFNNSUxFUycgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdXNlVXA9e1xuICAgICAgICAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIC8vIE1pbmUtIERlYXRoIFNlcXVlbmNlIFhEXG4gICAgICAgICAgaWYgKG1pbmVBcnIuaW5jbHVkZXMoY3VyclRpbGUpICYmIGUuYnV0dG9uID09PSAwICYmICFlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0RFQUQgU01JTEVTJyB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFU0VUIFNNSUxFUycgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Db250ZXh0TWVudT17XG4gICAgICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgLy9JZiBudW1iZXIgaXMgYWxyZWFkeSByZXZlYWxlZC0gcHJldmVudCB1c2VyIGZyb20gcHV0dGluZyBhIGZsYWcgb24gaXRcbiAgICAgICAgICBpZiAoZmxpcHBlcnNbY3VyclRpbGVdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogZmxpcHBlcnNbY3VyclRpbGVdID09PSBmYWxzZSA/ICdERUNSRU1FTlQgRkxBR1MgUkVNQUlOSU5HJyA6ICdJTkNSRU1FTlQgRkxBR1MgUkVNQUlOSU5HJyB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVDbGljayhlLCB7XG4gICAgICAgICAgICAgIGRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgIG1pbmVBcnIsXG4gICAgICAgICAgICAgIG51bWJlcnMsXG4gICAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgICBib2FyZERpc3BhdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIFByZXZlbnQgY29udGV4dCBtZW51IGlmIHVzZXIgYWNjaWRlbnRhbGx5IHByZXNzZXMgY29udGV4dCBtZW51XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIG1pbmVBcnIuaW5jbHVkZXMoY3VyclRpbGUpID8gZ2VuTWluZUNsYXNzTmFtZXMoe1xuICAgICAgICAgIHRpbWVyT24sXG4gICAgICAgICAgc2tpbGxMZXZlbCxcbiAgICAgICAgICBmbGlwcGVycyxcbiAgICAgICAgICBjb2xvcnMsXG4gICAgICAgICAgY3VyclRpbGVcbiAgICAgICAgfSlcbiAgICAgICAgICA6IG51bWJlcnNbY3VyclRpbGVdID8gZ2VuTnVtYmVyQ2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBza2lsbExldmVsLFxuICAgICAgICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgICAgICAgdGltZXJPbixcbiAgICAgICAgICAgIGZsaXBwZXJzLFxuICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICAgIGN1cnJUaWxlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIDogZ2VuRW1wdHlDbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgLy8gR2xvYmFsXG4gICAgICAgICAgICAgIHNraWxsTGV2ZWwsXG4gICAgICAgICAgICAgIGRlZmluZWRVc2VyTmFtZSxcbiAgICAgICAgICAgICAgdGltZXJPbixcbiAgICAgICAgICAgICAgLy8gQm9hcmQgJiBwYXNzZWQgaW5cbiAgICAgICAgICAgICAgZmxpcHBlcnMsXG4gICAgICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICAgICAgY3VyclRpbGVcbiAgICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgPlxuICAgICAge1xuICAgICAgICB1c2VyTm90TG9nZ2VkSW4gP1xuICAgICAgICAgIGdlbmVyYXRlTG9naW5NZXNzYWdlKHtcbiAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgc2tpbGxMZXZlbFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiB0aWxlSXNBTnVtYmVyID8gbnVtYmVyc1tjdXJyVGlsZV1cbiAgICAgICAgICAgIDogdGlsZUlzQU1pbmUgPyAnKidcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9kaXYgPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTtcbiIsImltcG9ydCB7IEdlbk51bWJlckNsYXNzTmFtZXNGdW5jLCBHZW5lcmF0ZUNvbG9yc0Z1bmMsIEdlbkVtcHR5Q2xhc3NOYW1lc0Z1bmMsIEdlbk1pbmVDbGFzc05hbWVzRnVuYywgR2VuZXJhdGVMb2dpbk1lc3NhZ2VGdW5jLCBDbGFzc05hbWVBcnIsIEhhbmRsZUNsaWNrRnVuYyB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5cbmNvbnN0IGdlbmVyYXRlTG9naW5NZXNzYWdlOiBHZW5lcmF0ZUxvZ2luTWVzc2FnZUZ1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlLCBza2lsbExldmVsIH0gPSBhcmdzO1xuXG4gIGNvbnN0IHQgPSBjdXJyVGlsZTtcbiAgY29uc3QgYmVnaW5uZXJNZXNzYWdlcyA9IHsgJzEnOiAnUGxlYXNlJywgJzInOiAnTG9naW4nLCAnMyc6ICdGaXJzdCcgfTtcbiAgY29uc3QgaW50ZXJtZWRpYXRlTWVzc2FnZXMgPSB7ICcyJzogJ1BsZWFzZScsICc0JzogJ0xvZ2luJywgJzYnOiAnRmlyc3QnIH07XG4gIGNvbnN0IGFkdmFuY2VkTWVzc2FnZXMgPSB7ICcyJzogJ1BsZWFzZScsICczJzogJ0xvZ2luJywgJzQnOiAnRmlyc3QnIH07XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicgJiYgdCA8IDgxKSB7XG4gICAgcmV0dXJuIGJlZ2lubmVyTWVzc2FnZXNbU3RyaW5nKE1hdGguZmxvb3IodCAvIDEwKSldPy5zdWJzdHJpbmcodCAlIDEwLCAodCAlIDEwKSArIDEpIHx8ICcqJztcbiAgfTtcblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2ludGVybWVkaWF0ZScgJiYgdCA8IDE0NCkge1xuICAgIHJldHVybiBpbnRlcm1lZGlhdGVNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMTcpKV0/LnN1YnN0cmluZyh0ICUgMTcsICh0ICUgMTcpICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIGlmIChza2lsbExldmVsID09PSAnYWR2YW5jZWQnICYmIHQgPCAyNDApIHtcbiAgICByZXR1cm4gYWR2YW5jZWRNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMzEpKV0/LnN1YnN0cmluZyh0ICUgMzMuMTUsICh0ICUgMzMuMTUpICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuXG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JzOiBHZW5lcmF0ZUNvbG9yc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSA9IGFyZ3M7XG4gIGNvbnN0IHQgPSBjdXJyVGlsZTtcbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicpIHtcbiAgICBpZiAoKHQgPD0gOSkgfHwgKHQgPj0gMTYgJiYgdCA8PSAxOSkgfHwgKHQgPj0gMjUgJiYgdCA8PSAyOSkgfHwgKHQgPj0gMzUpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDgpKSkgJSA5XVxuICAgIH1cbiAgfVxuXG4gIGlmIChza2lsbExldmVsID09PSAnaW50ZXJtZWRpYXRlJykge1xuICAgIGlmICgodCA8PSAzMykgfHwgKHQgPj0gNDAgJiYgdCA8PSA2NikgfHwgKHQgPj0gNzMgJiYgdCA8PSA5OSkgfHwgKHQgPj0gMTA3ICYmIHQgPD0gMTQ0KSkge1xuICAgICAgcmV0dXJuIGNvbG9yc1sodCArIChNYXRoLmZsb29yKHQgLyAxNikpKSAlIDhdXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdhZHZhbmNlZCcpIHtcbiAgICBpZiAoKHQgPD0gNjYpIHx8ICh0ID49IDczICYmIHQgPD0gOTkpIHx8ICh0ID49IDEwNSAmJiB0IDw9IDEzMikgfHwgKHQgPj0gMTM4ICYmIHQgPD0gMjQxKSkge1xuICAgICAgcmV0dXJuIGNvbG9yc1sodCArIChNYXRoLmZsb29yKHQgLyAzMCkpKSAlIDhdXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2VuTnVtYmVyQ2xhc3NOYW1lczogR2VuTnVtYmVyQ2xhc3NOYW1lc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IHRpbWVyT24sIGRlZmluZWRVc2VyTmFtZSwgc2tpbGxMZXZlbCwgY3VyclRpbGUsIG51bWJlcnMsIGZsaXBwZXJzLCBjb2xvcnMgfSA9IGFyZ3M7XG4gIGxldCBjbGFzc05hbWVBcnI6IENsYXNzTmFtZUFyciA9IFsnc3dlZXAtc3F1YXJlJ107XG5cbiAgaWYgKGNvbG9ycyAhPT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZUFyci5wdXNoKGdlbmVyYXRlQ29sb3JzKHsgY3VyclRpbGUsIGNvbG9ycywgc2tpbGxMZXZlbCB9KSwgJ2Rpc2FibGVkJyk7XG4gICAgcmV0dXJuIGNsYXNzTmFtZUFyci5qb2luKCcgJyk7XG4gIH07XG5cbiAgY29uc3QgbnVtYmVyVGlsZU9uVmljdG9yeURlYWRPck5vdExvZ2dlZEluID0gKHRpbWVyT24gPT09ICdWSUNUT1JZJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIFdJTicgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBERUFEJyB8fCAhZGVmaW5lZFVzZXJOYW1lKTtcblxuICBjb25zdCBmbGFnT25OdW1iZXJUaWxlR2FtZVBsYXkgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJztcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBudW1iZXJUaWxlT25WaWN0b3J5RGVhZE9yTm90TG9nZ2VkSW4gPyAnZGlzYWJsZWQnXG4gICAgICA6IGZsYWdPbk51bWJlclRpbGVHYW1lUGxheSA/ICdmbGFnJ1xuICAgICAgICA6ICdudW1iZXInXG4gICk7XG5cbiAgLy8gQ29sb3IgRGV0ZXJtaW5hdGlvblxuICBjb25zdCBjdXJyTnVtOiBudW1iZXIgPSBudW1iZXJzW2N1cnJUaWxlXTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBjdXJyTnVtID09PSAxID8gJ2JsdWUtbnVtJ1xuICAgICAgOiBjdXJyTnVtID09PSAyID8gJ2dyZWVuLW51bSdcbiAgICAgICAgOiBjdXJyTnVtID09PSAzID8gJ3JlZC1udW0nXG4gICAgICAgICAgOiBjdXJyTnVtID09PSA0ID8gJ3B1cnBsZS1udW0nXG4gICAgICAgICAgICA6IGN1cnJOdW0gPT09IDUgPyAnbWFyb29uLW51bSdcbiAgICAgICAgICAgICAgOiBjdXJyTnVtID09PSA2ID8gJ3R1cnF1b2lzZS1udW0nXG4gICAgICAgICAgICAgICAgOiBjdXJyTnVtID09PSA3ID8gJ2JsYWNrLW51bSdcbiAgICAgICAgICAgICAgICAgIDogY3Vyck51bSA9PT0gOCA/ICdncmV5LW51bSdcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICk7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZUFyci5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBnZW5FbXB0eUNsYXNzTmFtZXM6IEdlbkVtcHR5Q2xhc3NOYW1lc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IHNraWxsTGV2ZWwsIGRlZmluZWRVc2VyTmFtZSwgdGltZXJPbiwgY3VyclRpbGUsIGNvbG9ycywgZmxpcHBlcnMgfSA9IGFyZ3NcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXTtcblxuICBpZiAoY29sb3JzICE9PSBudWxsKSB7XG4gICAgY2xhc3NOYW1lQXJyLnB1c2goZ2VuZXJhdGVDb2xvcnMoeyBjdXJyVGlsZSwgY29sb3JzLCBza2lsbExldmVsIH0pLCAnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbiAgfTtcblxuICBjb25zdCBlbXB0eVRpbGVPblZpY3RvcnlPckRlYWQgPSAodGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIERFQUQnKTtcbiAgY29uc3QgZW1wdHlUaWxlT25Ob3RMb2dnZWRJbiA9ICFkZWZpbmVkVXNlck5hbWU7XG4gIGNvbnN0IGZsYWdPbkVtcHR5VGlsZUdhbWVwbGF5ID0gZmxpcHBlcnNbY3VyclRpbGVdID09PSAnZmxhZyc7XG4gIGNvbnN0IGVtcHR5VGlsZVJldmVhbGVkR2FtZXBsYXkgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09IHRydWU7XG5cbiAgY2xhc3NOYW1lQXJyLnB1c2goXG4gICAgZW1wdHlUaWxlT25WaWN0b3J5T3JEZWFkID8gJ2Rpc2FibGVkIGRhcmstc3F1YXJlJ1xuICAgICAgOiBlbXB0eVRpbGVPbk5vdExvZ2dlZEluID8gJ2Rpc2FibGVkJ1xuICAgICAgICA6IGZsYWdPbkVtcHR5VGlsZUdhbWVwbGF5ID8gJ2ZsYWcnXG4gICAgICAgICAgOiBlbXB0eVRpbGVSZXZlYWxlZEdhbWVwbGF5ID8gJ2Rhcmstc3F1YXJlJ1xuICAgICAgICAgICAgOiBudWxsXG4gICk7XG4gIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xufTtcblxuY29uc3QgZ2VuTWluZUNsYXNzTmFtZXM6IEdlbk1pbmVDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgdGltZXJPbiwgc2tpbGxMZXZlbCwgY3VyclRpbGUsIGNvbG9ycywgZmxpcHBlcnMgfSA9IGFyZ3M7XG4gIGxldCBjbGFzc05hbWVBcnI6IENsYXNzTmFtZUFyciA9IFsnc3dlZXAtc3F1YXJlJ11cblxuICBpZiAoY29sb3JzICE9PSBudWxsKSB7XG4gICAgY2xhc3NOYW1lQXJyLnB1c2goZ2VuZXJhdGVDb2xvcnMoeyBjdXJyVGlsZSwgY29sb3JzLCBza2lsbExldmVsIH0pLCAnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbiAgfTtcblxuICBjb25zdCBmbGFnT25NaW5lVGlsZUFmdGVyVmljdG9yeSA9ICh0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nKSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJztcbiAgY29uc3QgbWluZVRpbGVBZnRlckRlYWQgPSB0aW1lck9uID09PSAnRlJFRVpFIERFQUQnO1xuICBjb25zdCB0aWxlSXNGbGFnZ2VkR2FtZVBsYXkgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJztcbiAgY29uc3QgbWluZVRpbGVPbkRlYWQgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09IHRydWU7XG5cbiAgY2xhc3NOYW1lQXJyLnB1c2goXG4gICAgZmxhZ09uTWluZVRpbGVBZnRlclZpY3RvcnkgPyAnZmxhZyBkaXNhYmxlZCdcbiAgICAgIDogbWluZVRpbGVBZnRlckRlYWQgPyAnZGlzYWJsZWQgbWluZSdcbiAgICAgICAgOiB0aWxlSXNGbGFnZ2VkR2FtZVBsYXkgPyAnZmxhZydcbiAgICAgICAgICA6IG1pbmVUaWxlT25EZWFkID8gJ21pbmUnXG4gICAgICAgICAgICA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbn07XG5cblxudHlwZSBUaWxlUmVjdXJzZUZ1bmMgPSAoYXJnczogeyBjdXJyVGlsZTogbnVtYmVyLCBkaW1lbnNpb25zOiB7IGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciwgdmVydGljYWxEaW1lbnNpb246IG51bWJlciB9LCBudW1iZXJzOiB7fSwgbWluZUFycjogbnVtYmVyW10sIHJlc3VsdEFycjogKHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpW10gfSkgPT4gKHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIpW107XG5cbmNvbnN0IHRpbGVSZWN1cnNlOiBUaWxlUmVjdXJzZUZ1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnIgfSA9IGFyZ3NcbiAgcmVzdWx0QXJyLnB1c2goY3VyclRpbGUpXG4gIHR5cGUgRXZhbFRlc3RGdW5jID0gKGN1cnJUaWxlOiBudW1iZXIpID0+IG51bWJlcjtcblxuICBjb25zdCBldmFsVTogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlIC0gZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKTtcbiAgY29uc3QgZXZhbFI6IEV2YWxUZXN0RnVuYyA9IGN1cnJUaWxlID0+IChjdXJyVGlsZSArIDEpO1xuICBjb25zdCBldmFsRDogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlICsgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKTtcbiAgY29uc3QgZXZhbEw6IEV2YWxUZXN0RnVuYyA9IGN1cnJUaWxlID0+IChjdXJyVGlsZSAtIDEpO1xuXG4gIHR5cGUgVGVzdEN1cnJUaWxlRnVuYyA9IChjdXJyVGlsZTogbnVtYmVyLCB0ZXN0RnVuYzogRnVuY3Rpb24pID0+IGJvb2xlYW47XG5cbiAgY29uc3QgdGVzdEN1cnJUaWxlOiBUZXN0Q3VyclRpbGVGdW5jID0gKGN1cnJUaWxlLCB0ZXN0RnVuYykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAhbnVtYmVyc1t0ZXN0RnVuYyhjdXJyVGlsZSldXG4gICAgICAmJiAhbWluZUFyci5pbmNsdWRlcyh0ZXN0RnVuYyhjdXJyVGlsZSkpXG4gICAgICAvLyAmJiBwcmV2RmxpcHBlcnNbdGVzdEZ1bmModGlsZSldID09PSBmYWxzZVxuICAgICAgJiYgIXJlc3VsdEFyci5pbmNsdWRlcyh0ZXN0RnVuYyhjdXJyVGlsZSkpXG4gICAgICAmJiB0ZXN0RnVuYyhjdXJyVGlsZSkgPj0gMFxuICAgICAgJiYgdGVzdEZ1bmMoY3VyclRpbGUpIDw9IChkaW1lbnNpb25zLnZlcnRpY2FsRGltZW5zaW9uICogZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKVxuICAgIClcbiAgfVxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgVXBcbiAgLy8gKioqKioqKioqKipcblxuICBpZiAoXG4gICAgdGVzdEN1cnJUaWxlKGN1cnJUaWxlLCBldmFsVSlcbiAgKSB7XG4gICAgdGlsZVJlY3Vyc2UoeyBjdXJyVGlsZTogZXZhbFUoY3VyclRpbGUpLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnIgfSk7XG4gIH1cblxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgUmlnaHRcbiAgLy8gKioqKioqKioqKipcblxuICBpZiAoXG4gICAgdGVzdEN1cnJUaWxlKGN1cnJUaWxlLCBldmFsUilcbiAgICAmJiAoZXZhbFIoY3VyclRpbGUpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uICE9PSAwXG4gICAgICB8fCAoZXZhbFIoY3VyclRpbGUpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uID09PSAwICYmIGN1cnJUaWxlICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uID09PSAwKSlcbiAgKSB7XG4gICAgdGlsZVJlY3Vyc2UoeyBjdXJyVGlsZTogZXZhbFIoY3VyclRpbGUpLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnIgfSk7XG4gIH1cblxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgRG93blxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxEKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsRChjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KVxuICB9XG5cbiAgLy8gKioqKioqKioqKipcbiAgLy8gIEdvaW5nIExlZnRcbiAgLy8gKioqKioqKioqKipcblxuICBpZiAoXG4gICAgdGVzdEN1cnJUaWxlKGN1cnJUaWxlLCBldmFsTClcbiAgICAmJiAoKGV2YWxMKGN1cnJUaWxlICsgMSkpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uICE9PSAwXG4gICAgICB8fCAoZXZhbEwoY3VyclRpbGUgKyAxKSAlIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbiA9PT0gMCAmJiBldmFsTChjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDApKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsTChjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0QXJyO1xufTtcblxuXG5cblxuXG5jb25zdCBoYW5kbGVDbGljazogSGFuZGxlQ2xpY2tGdW5jID0gKGV2ZW50LCBhcmdzKSA9PiB7XG5cbiAgY29uc3QgeyBjdXJyVGlsZSwgaW5kaWNhdG9yLCBkaW1lbnNpb25zLCBtaW5lQXJyLCBudW1iZXJzLCBib2FyZERpc3BhdGNoIH0gPSBhcmdzO1xuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHJldHVybiAoaW5kaWNhdG9yID09PSAnZGVhZCcpID8gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdSRVZFQUwgREVBRCBGTElQUEVSUycgfSlcbiAgICA6IChldmVudC50eXBlID09PSAnY29udGV4dG1lbnUnKSA/IGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnU0VUIEZMQUcgRkxJUFBFRCcsIHBheWxvYWQ6IHsgZmxhZ0ZsaXBwZWQ6IGN1cnJUaWxlIH0gfSlcbiAgICAgIDogKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgaW5kaWNhdG9yICE9PSAnZGVhZCcpICYmICghbnVtYmVyc1tjdXJyVGlsZV0gJiYgIW1pbmVBcnIuaW5jbHVkZXMoY3VyclRpbGUpKSA/XG4gICAgICAgIGJvYXJkRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdGTElQIFJFQ1VSU0VEIFRJTEVTJyxcbiAgICAgICAgICBwYXlsb2FkOiB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBjdXJyVGlsZSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyOiBbXSB9KVxuICAgICAgICB9KVxuICAgICAgICA6IChldmVudC50eXBlID09PSAnY2xpY2snICYmIGluZGljYXRvciAhPT0gJ2RlYWQnKSA/XG4gICAgICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdGTElQIE5PUk1BTCBUSUxFJywgcGF5bG9hZDogeyBmbGlwcGVkVGlsZTogY3VyclRpbGUgfSB9KVxuICAgICAgICAgIDogbnVsbDtcbn07XG5cbmV4cG9ydCB7XG4gIGdlbkVtcHR5Q2xhc3NOYW1lcyxcbiAgZ2VuTnVtYmVyQ2xhc3NOYW1lcyxcbiAgZ2VuTWluZUNsYXNzTmFtZXMsXG4gIGdlbmVyYXRlTG9naW5NZXNzYWdlLFxuICBoYW5kbGVDbGlja1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgUmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsRnVuYyxcbiAgRnJlZXplQ29sb3JEZWxheUVmZmVjdEZ1bmMsXG4gIFN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdEZ1bmMsXG4gIEdlbmVyYXRlTWluZXNFZmZlY3RGdW5jLFxuICBGcmVlemVTY3JvbGxCb2FyZEVmZmVjdEZ1bmMsXG4gIFJldmVhbEZsaXBwZXJFZmZlY3RGdW5jLFxuICBHZW5lcmF0ZU51bWJlckVmZmVjdEZ1bmMsXG4gIFJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0RnVuYyxcbiAgUmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT25GdW5jLFxufSBmcm9tIFwiLi4vLi4vLi4vbWluZXN3ZWVwZXItdHlwZXNcIjtcblxuY29uc3QgZ2VuZXJhdGVNaW5lc0VmZmVjdDogR2VuZXJhdGVNaW5lc0VmZmVjdEZ1bmMgPSAoXG4gIGRpbWVuc2lvbnMsXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIkdFTkVSQVRFIE1JTkVTXCIsIHBheWxvYWQ6IGRpbWVuc2lvbnMgfSk7XG4gIH0sIFtdKTtcbn07XG5cbmNvbnN0IHN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdDogU3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0RnVuYyA9IChcbiAgY29sb3JEZWxheSxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbG9yRGVsYXkgPT09IG51bGwpIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIlNUT1AgQ09MT1IgSVRFUkFUSU9OXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goe3R5cGU6IFwiU1RBUlQgQ09MT1IgSVRFUkFUSU9OXCJ9KTtcbiAgICB9XG4gIH0sIFtjb2xvckRlbGF5XSk7XG59O1xuXG5jb25zdCBmcmVlemVDb2xvckRlbGF5RWZmZWN0OiBGcmVlemVDb2xvckRlbGF5RWZmZWN0RnVuYyA9IChcbiAgZGVmaW5lZFVzZXJOYW1lLFxuICBib2FyZERpc3BhdGNoXG4pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVmaW5lZFVzZXJOYW1lKSB7XG4gICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJVTlNFVCBDT0xPUiBERUxBWVwiIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZERpc3BhdGNoKHt0eXBlOiBcIlNFVCBDT0xPUiBERUxBWVwifSk7XG4gICAgfVxuICB9LCBbZGVmaW5lZFVzZXJOYW1lXSk7XG59O1xuXG4vLyBUaGlzIGNvbmRpdGlvbiByZXNldHMgdGhlIGJvYXJkIHdoZW4gdGhlIHNtaWxleSBmYWNlIGlzIHB1bmNoZWQgb3IgdGhlIHNraWxsTGV2ZWwgaXMgY2hhbmdlZCBiZWNhdXNlIHRpbWVyT24gaXMgc2V0IHRvIGZhbHNlLiBJdCBhbHNvIHJlc2V0cyB0aGUgYm9hcmQgaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2tpbGxMZXZlbCBiZWZvcmUgcGxheWluZywgd2hpY2ggaXMgbW9zdCBsaWtlbHkuXG5jb25zdCByZXNldEdhbWVFZmZlY3RPblNtaWxleU9yU2tpbGw6IFJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbEZ1bmMgPSAoXG4gIHRpbWVyT24sXG4gIGRpbWVuc2lvbnMsXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0aW1lck9uID09PSBmYWxzZSkge1xuICAgICAgLy8gU2V0IGFsbCBUaWxlcyB0byBGYWxzZSAoaGlkZGVuKVxuICAgICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiUkVTRVQgRkxJUFBFUlNcIixcbiAgICAgICAgcGF5bG9hZDogQXJyYXkuZnJvbShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsZW5ndGg6XG4gICAgICAgICAgICAgIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbiAqIGRpbWVuc2lvbnMudmVydGljYWxEaW1lbnNpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiBmYWxzZVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICAvLyBHZW5lcmF0ZSBNaW5lc1xuICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiR0VORVJBVEUgTUlORVNcIiwgcGF5bG9hZDogZGltZW5zaW9ucyB9KTtcbiAgICB9XG4gIH0sIFt0aW1lck9uLCBkaW1lbnNpb25zXSk7XG59O1xuXG5jb25zdCBmcmVlemVTY3JvbGxCb2FyZEVmZmVjdDogRnJlZXplU2Nyb2xsQm9hcmRFZmZlY3RGdW5jID0gKHNjcm9sbEJvYXJkKSA9PiB7XG4gIHR5cGUgUHJldmVudERlZmF1bHRGdW5jID0gKHRoaXM6IERvY3VtZW50LCBldjogV2hlZWxFdmVudCkgPT4gYm9vbGVhbjtcblxuICBjb25zdCBwcmV2ZW50RGVmYXVsdDogUHJldmVudERlZmF1bHRGdW5jID0gKGV2KSA9PiB7XG4gICAgZXYgPSBldiB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGV2LnByZXZlbnREZWZhdWx0KSBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxCb2FyZClcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gIH0sIFtzY3JvbGxCb2FyZF0pO1xufTtcblxuY29uc3QgcmV2ZWFsRmxpcHBlckVmZmVjdDogUmV2ZWFsRmxpcHBlckVmZmVjdEZ1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IG1pbmVBcnIsIGZsaXBwZXJzLCBudW1iZXJzLCBnbG9iYWxEaXNwYXRjaCwgYm9hcmREaXNwYXRjaCB9ID0gYXJncztcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtaW5lQXJyLmxlbmd0aCAmJiBmbGlwcGVycy5sZW5ndGggJiYgZmxpcHBlcnNbMF0gIT09IFwiZGVhZFwiKSB7XG4gICAgICAvLyBPbmx5IHN0b3JlIHNjb3JlIHdoZW4gYWxsIGZsaXBwZXJzIGhhdmUgYmVlbiBmbGlwcGVkIChlbmRzIHJlY3Vyc2l2ZSBsb29wKVxuICAgICAgaWYgKFxuICAgICAgICBmbGlwcGVycy5ldmVyeSgoZmxpcHBlcikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZmxpcHBlciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIG1pbmVBcnJbZmxpcHBlcl07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmbGlwcGVyID09PSB0cnVlIHx8IGZsaXBwZXIgPT09IFwiZmxhZ1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICkge1xuICAgICAgICAvLyBTdG9wIHRoZSBjbG9jayBhbmQgaW5kaWNhdGUgYSB3aW5cbiAgICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiBcIkZSRUVaRSBUSU1FUiBTVEFURSBWSUNUT1JZXCIgfSk7XG5cbiAgICAgICAgLy8gSWYgYSB2aWN0b3J5IGlzIGRldGVjdGVkIGJ5IGFsbCBudW1iZXJzIGJlaW5nIHJldmVhbGVkLCBmbGlwIGFsbCB0aGUgZW1wdHkgc3F1YXJlc1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgT2JqZWN0LmtleXMobnVtYmVycykubGVuZ3RoICYmXG4gICAgICAgIE9iamVjdC5rZXlzKG51bWJlcnMpLmV2ZXJ5KChudW0pID0+IGZsaXBwZXJzW251bV0gPT09IHRydWUpXG4gICAgICApIHtcbiAgICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiUkVWRUFMIEZMSVBQRVJTXCIsIHBheWxvYWQ6IHsgbWluZUFyciB9IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2ZsaXBwZXJzXSk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZU51bWJlckVmZmVjdDogR2VuZXJhdGVOdW1iZXJFZmZlY3RGdW5jID0gKFxuICBtaW5lQXJyLFxuICB7IHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0sXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICAvL1doZW4gTWluZXMgYXJlIHJlc2V0LCBnZW5lcmF0ZSBudW1iZXJzIGFyb3VuZCB0aG9zZSBtaW5lc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGJvYXJkRGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJHRU5FUkFURSBOVU1CRVJTXCIsXG4gICAgICBwYXlsb2FkOiB7IG1pbmVBcnIsIHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0sXG4gICAgfSk7XG4gIH0sIFttaW5lQXJyXSk7XG59O1xuXG5jb25zdCByZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdDogUmVzZXRPblNraWxsTGV2ZWxDaGFuZ2VFZmZlY3RGdW5jID0gKFxuICBza2lsbExldmVsLFxuICBnbG9iYWxEaXNwYXRjaFxuKSA9PiB7XG4gIC8vIElmIFNraWxsIExldmVsIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBib2FyZC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiU1dJVENIIFRJTUVSIE9GRlwiIH0pO1xuICB9LCBbc2tpbGxMZXZlbF0pO1xufTtcblxuY29uc3QgcmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT246IFJlc2V0RmxhZ3NSZW1haW5pbmdPblNraWxsQ2hhbmdlT3JUaW1lck9uRnVuYyA9XG4gICh0aW1lck9uLCBza2lsbExldmVsLCBib2FyZERpc3BhdGNoKSA9PiB7XG4gICAgLy8gVGhpcyByZXNldHMgdGhlIGZsYWdzIHdoZW5ldmVyIHRoZSBza2lsbExldmVsIGlzIGNoYW5nZWQgb3IgZ2FtZSBpcyByZXNldFxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0aW1lck9uID09PSBmYWxzZSkge1xuICAgICAgICBib2FyZERpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVCBGTEFHUyBSRU1BSU5JTkdcIixcbiAgICAgICAgICBwYXlsb2FkOlxuICAgICAgICAgICAgc2tpbGxMZXZlbCA9PT0gXCJiZWdpbm5lclwiXG4gICAgICAgICAgICAgID8gMTBcbiAgICAgICAgICAgICAgOiBza2lsbExldmVsID09PSBcImludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgID8gNDBcbiAgICAgICAgICAgICAgOiA5OSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW3NraWxsTGV2ZWwsIHRpbWVyT25dKTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZW5lcmF0ZU1pbmVzRWZmZWN0LFxuICBzdG9wQ29sb3JJdGVyYXRpb25FZmZlY3QsXG4gIGZyZWV6ZUNvbG9yRGVsYXlFZmZlY3QsXG4gIHJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbCxcbiAgZnJlZXplU2Nyb2xsQm9hcmRFZmZlY3QsXG4gIHJldmVhbEZsaXBwZXJFZmZlY3QsXG4gIGdlbmVyYXRlTnVtYmVyRWZmZWN0LFxuICByZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdCxcbiAgcmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT24sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9nb3V0TXV0YXRpb25GbiwgTWVEb2N1bWVudCB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbnRlcmZhY2UgTG9nZ2VkSW5WaWV3UHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBsb2dvdXQ6IExvZ291dE11dGF0aW9uRm47XG59XG5cbmNvbnN0IExvZ2dlZEluVmlldzogUmVhY3QuRkM8TG9nZ2VkSW5WaWV3UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgaG9tZVNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiO1xuICBjb25zdCBzY29yZWJvYXJkU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvc2NvcmVib2FyZFwiO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChob21lU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBgaGVhZGVyLW5hdi11bC1saWBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7KGhvbWVTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbG9nZ2VkLWluLXVzZXItdGl0bGVgfT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIExvZ2dlZCBpbiBhczoge3Byb3BzLnVzZXJuYW1lfXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkpIHx8IDxMaW5rIHRvPVwiL1wiPk1pbmVzd2VlcGVyPC9MaW5rPn1cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAoc2NvcmVib2FyZFNlbGVjdGVkICYmIGBzZWxlY3RlZC1oZWFkZXIgaGVhZGVyLW5hdi11bC1saWApIHx8XG4gICAgICAgICAgXCJoZWFkZXItbmF2LXVsLWxpXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8TGluayB0bz1cIi9zY29yZWJvYXJkXCI+SGlnaCBTY29yZXM8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlci1uYXYtdWwtbGlcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvdXQtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5sb2dvdXQoe1xuICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW01lRG9jdW1lbnRdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ291dFxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VkSW5WaWV3O1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmssIHVzZUxvY2F0aW9ufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5cbmNvbnN0IExvZ2dlZE91dFZpZXc6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgbG9naW5TZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2xvZ2luJztcbiAgY29uc3QgcmVnaXN0ZXJTZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3JlZ2lzdGVyJztcbiAgY29uc3Qgc2NvcmVib2FyZFNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2NvcmVib2FyZCdcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAobG9naW5TZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHJlZ2lzdGVyU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBgaGVhZGVyLW5hdi11bC1saWBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChzY29yZWJvYXJkU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBgaGVhZGVyLW5hdi11bC1saWBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8TGluayB0bz1cIi9zY29yZWJvYXJkXCI+SGlnaCBTY29yZXM8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VkT3V0VmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTWluZXN3ZWVwZXIgZnJvbSBcIlRTQ29tcG9uZW50cy9NaW5lc3dlZXBlci9NaW5lc3dlZXBlclwiO1xuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gXCJUU0NvbXBvbmVudHMvTGVhZGVyYm9hcmQvTGVhZGVyYm9hcmRcIjtcblxuaW1wb3J0IFVzZXJMb2dpbkZvcm0gZnJvbSBcIlRTQ29tcG9uZW50cy9Vc2VyRm9ybXMvTG9naW5cIjtcbmltcG9ydCBVc2VyUmVnaXN0ZXJGb3JtIGZyb20gXCJUU0NvbXBvbmVudHMvVXNlckZvcm1zL1JlZ2lzdGVyXCI7XG5pbXBvcnQgTG9nZ2VkSW5WaWV3IGZyb20gXCJUU0NvbXBvbmVudHMvSG9tZS9IZWFkZXJJbnRlcmZhY2VzL0xvZ2dlZEluVmlld1wiO1xuaW1wb3J0IExvZ2dlZE91dFZpZXcgZnJvbSBcIlRTQ29tcG9uZW50cy9Ib21lL0hlYWRlckludGVyZmFjZXMvTG9nZ2VkT3V0Vmlld1wiO1xuXG5pbXBvcnQgXCIuL2hvbWUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlTWVRdWVyeSwgdXNlTG9nb3V0TXV0YXRpb24gfSBmcm9tIFwiVFNTcmMvZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IEdlbmVyaWNTY29yZSB9IGZyb20gXCIuLi9MZWFkZXJib2FyZC9sZWFkZXJib2FyZC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJUU1NyYy9wdWJsaWMvR2xvYmFsU3RvcmUvR2xvYmFsU3RvcmVcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHNzclRvcFRpbWVzPzogR2VuZXJpY1Njb3JlW11cbn1cblxuZXhwb3J0IGNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZU1lUXVlcnkoKTtcbiAgY29uc3QgWyxnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIGNvbnN0IFtsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcblxuICBsZXQgaGVhZGVyQm9keSA9IG51bGw7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YT8ubWU/LnVzZXJuYW1lKSB7XG4gICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ1NFVCBERUZJTkVEIFVTRVJOQU1FJywgcGF5bG9hZDoge3VzZXJOYW1lOiBkYXRhLm1lLnVzZXJuYW1lfX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ1VOU0VUIERFRklORUQgVVNFUk5BTUUnfSk7XG4gICAgfVxuICB9LCBbZGF0YV0pXG5cbiAgaGVhZGVyQm9keSA9IGxvYWRpbmcgPyBudWxsIDogIWRhdGE/Lm1lID8gKFxuICAgIDxMb2dnZWRPdXRWaWV3IC8+XG4gICkgOiAoXG4gICAgPExvZ2dlZEluVmlldyB1c2VybmFtZT17ZGF0YS5tZS51c2VybmFtZX0gbG9nb3V0PXtsb2dvdXR9IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2RhdGE/Lm1lPy51c2VybmFtZSA/IGBoZWFkZXItbmF2LXVsIGhlYWRlci1pcy1jb25jZWFsZWRgIDogYGhlYWRlci1uYXYtdWxgIH0gPntoZWFkZXJCb2R5fTwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPFVzZXJMb2dpbkZvcm0gLz5cbiAgICAgICAgICA8TWluZXN3ZWVwZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8VXNlclJlZ2lzdGVyRm9ybSAvPlxuICAgICAgICAgIDxNaW5lc3dlZXBlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9zY29yZWJvYXJkXCI+XG4gICAgICAgICAgPExlYWRlcmJvYXJkIHNzclRvcFRpbWVzPXtwcm9wcy5zc3JUb3BUaW1lc30vPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICAgICAgICA8TWluZXN3ZWVwZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvPlxuICApO1xufTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExlYWRlckJvYXJkRW50cnkgZnJvbSBcIlRTQ29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZEVudHJ5XCI7XG5pbXBvcnQgUGFnZU5vVWwgZnJvbSBcIi4vUGFnaW5hdGlvbi9wYWdlTm9VbFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IFwiLi9sZWFkZXJib2FyZC5zY3NzXCI7XG5pbXBvcnQge1xuICBGb3JtYXRUaW1lRnVuYyxcbiAgR2VuZXJpY1Njb3JlLFxuICBIYW5kbGVDbGlja1BhZ2VGdW5jLFxuICBIYW5kbGVTY29yZVZpZXdGdW5jLFxuICBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyxcbiAgTGVhZGVyYm9hcmRQcm9wcyxcbiAgTWFrZVRpdGxlRnVuYyxcbiAgUGVyc29uYWxpemVkLFxufSBmcm9tIFwiLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSxcbiAgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeSxcbiAgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksXG59IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5jb25zdCBMZWFkZXJib2FyZDogUmVhY3QuRkM8TGVhZGVyYm9hcmRQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCBbXG4gICAge1xuICAgICAgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sXG4gICAgfSxcbiAgICBnbG9iYWxEaXNwYXRjaCxcbiAgXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcGFnZU9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVMZW5ndGggPSAoKSA9PiB7XG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYmVnaW5uZXJcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBpZiAoZGF0YT8uYWxsQmVnaW5uZXJTY29yZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmFsbEJlZ2lubmVyU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJpbnRlcm1lZGlhdGVcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSgpO1xuICAgICAgaWYgKGRhdGE/LmFsbEludGVybWVkaWF0ZVNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsSW50ZXJtZWRpYXRlU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJhZHZhbmNlZFwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoKTtcbiAgICAgIGlmIChkYXRhPy5hbGxBZHZhbmNlZFNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsQWR2YW5jZWRTY29yZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAxMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY29yZVZpZXdIZWxwZXIgPSAoXG4gICAgYXJyYXk6IEdlbmVyaWNTY29yZVtdLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgcGFnZU9mZnNldDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlICogcGFnZU9mZnNldCwgY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0ICsgcGFnZU9mZnNldCk7XG4gICAgLy8gY29uc29sZS5sb2coYXJyYXkuc2xpY2UoMCkuc29ydCgoYSwgYikgPT4gYS50aW1lIC0gYi50aW1lKSk7XG4gICAgcmV0dXJuIGFycmF5XG4gICAgICAuc2xpY2UoMClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpXG4gICAgICAuc2xpY2UoY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0LCBjdXJyZW50UGFnZSAqIHBhZ2VPZmZzZXQgKyBwYWdlT2Zmc2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY29yZVZpZXc6IEhhbmRsZVNjb3JlVmlld0Z1bmMgPSAoc3NyVG9wVGltZXMpID0+IHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmIHNzclRvcFRpbWVzKSB7XG4gICAgICByZXR1cm4gc3NyVG9wVGltZXMuc2xpY2UoMCwgcGFnZU9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYmVnaW5uZXJcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBjb25zdCB0b3BTY29yZXMgPSBkYXRhPy5hbGxCZWdpbm5lclNjb3JlcztcbiAgICAgIGlmICh0b3BTY29yZXMpIHtcbiAgICAgICAgbGV0IHRlc3QgPSBoYW5kbGVTY29yZVZpZXdIZWxwZXIodG9wU2NvcmVzLCBjdXJyZW50UGFnZSwgcGFnZU9mZnNldCk7XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImludGVybWVkaWF0ZVwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBjb25zdCB0b3BTY29yZXMgPSBkYXRhPy5hbGxJbnRlcm1lZGlhdGVTY29yZXM7XG4gICAgICBpZiAodG9wU2NvcmVzKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gaGFuZGxlU2NvcmVWaWV3SGVscGVyKHRvcFNjb3JlcywgY3VycmVudFBhZ2UsIHBhZ2VPZmZzZXQpO1xuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJhZHZhbmNlZFwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoKTtcbiAgICAgIGNvbnN0IHRvcFNjb3JlcyA9IGRhdGE/LmFsbEFkdmFuY2VkU2NvcmVzO1xuXG4gICAgICBpZiAodG9wU2NvcmVzKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTY29yZVZpZXdIZWxwZXIodG9wU2NvcmVzLCBjdXJyZW50UGFnZSwgcGFnZU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFwibG9hZGluZ1wiLFxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICB1cGRhdGVkQXQ6IFwiXCIsXG4gICAgICAgIGNyZWF0ZWRBdDogXCJcIixcbiAgICAgICAgaWQ6IDEsXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgW3BlcnNvbmFsaXplZCwgc2V0UGVyc29uYWxpemVkXSA9IFJlYWN0LnVzZVN0YXRlPFBlcnNvbmFsaXplZD4oZmFsc2UpO1xuXG4gIGNvbnN0IGZvcm1hdFRpbWU6IEZvcm1hdFRpbWVGdW5jID0gKHRpbWUpID0+IHtcbiAgICBjb25zdCBjZW50aXNlY29uZHMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHNlY29uZHMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBtaW51dGVzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGhvdXJzID0gKFwiMFwiICsgTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkpLnNsaWNlKC0yKTtcblxuICAgIHJldHVybiBtaW51dGVzICE9PSBcIjAwXCJcbiAgICAgID8gYCR7bWludXRlc30gOiAke3NlY29uZHN9IC4gJHtjZW50aXNlY29uZHN9YFxuICAgICAgOiBob3VycyAhPT0gXCIwMFwiXG4gICAgICA/IGAke2hvdXJzfSA6ICR7bWludXRlc306ICR7c2Vjb25kc30gLiAke2NlbnRpc2Vjb25kc31gXG4gICAgICA6IGAke3NlY29uZHN9IC4gJHtjZW50aXNlY29uZHN9IHNlY3NgO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrUGVyc29uYWxpemVkOiBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyA9IChlKSA9PiB7XG4gICAgY29uc3QgdXNlck5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MO1xuICAgIHJldHVybiB1c2VyTmFtZSA/IHNldFBlcnNvbmFsaXplZCh1c2VyTmFtZSkgOiBzZXRQZXJzb25hbGl6ZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrUGFnZTogSGFuZGxlQ2xpY2tQYWdlRnVuYyA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdLmlubmVySFRNTCkgLSAxO1xuICAgIHNldEN1cnJlbnRQYWdlKHNlbGVjdGVkKTtcbiAgfTtcblxuICBjb25zdCBtYWtlVGl0bGU6IE1ha2VUaXRsZUZ1bmMgPSAocGVyc29uYWxpemVkLCBza2lsbExldmVsKSA9PlxuICAgIHBlcnNvbmFsaXplZFxuICAgICAgPyBgJHtwZXJzb25hbGl6ZWR9cyAke3NraWxsTGV2ZWx9IExlYWRlcmJvYXJkOmBcbiAgICAgIDogYCR7c2tpbGxMZXZlbH0gTGVhZGVyYm9hcmRgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxlYWRlcmJvYXJkXCI+XG4gICAgICA8aDMgaWQ9XCJsZWFkZXJib2FyZC1oZWFkZXJcIj57bWFrZVRpdGxlKHBlcnNvbmFsaXplZCwgc2tpbGxMZXZlbCl9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lubmVycy1jaXJjbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZXMtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7KGhhbmRsZVNjb3JlVmlldyhwcm9wcz8uc3NyVG9wVGltZXMpIHx8IFtdKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ID8gKFxuICAgICAgICAgICAgICA8TGVhZGVyQm9hcmRFbnRyeVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgIHBlcnNvbmFsaXplZD17cGVyc29uYWxpemVkfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBlbnRyeT17ZW50cnl9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrUGVyc29uYWxpemVkfVxuICAgICAgICAgICAgICAgIGZvcm1hdFRpbWU9e2Zvcm1hdFRpbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQYWdlTm9VbFxuICAgICAgICAgIHBhZ2VPZmZzZXQ9e3BhZ2VPZmZzZXR9XG4gICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrUGFnZX1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgdG9wVGltZXNQZXJQYWdlPXtwYWdlT2Zmc2V0fVxuICAgICAgICAgIG5vT2ZUb3BUaW1lcz17aGFuZGxlU2NvcmVMZW5ndGgoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtwZXJzb25hbGl6ZWQgPyAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGlja1BlcnNvbmFsaXplZChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldHVybi10by1sZWFkZXJib2FyZC1idXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9e2ByZXR1cm4gdG8gJHtza2lsbExldmVsfSBMZWFkZXJCb2FyZGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cImJlZ2lubmVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTRVQgQkVHSU5ORVIgRElNRU5TSU9OU1wiIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cImludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiU0VUIElOVEVSTUVESUFURSBESU1FTlNJT05TXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItYnV0dG9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJhZHZhbmNlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTRVQgQURWQU5DRUQgRElNRU5TSU9OU1wiIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgUGVyc29uYWxpemVkLCBGb3JtYXRUaW1lRnVuYywgTGVhZGVyYm9hcmRFbnRyeSwgTGVhZGVyYm9hcmRIYW5kbGVDbGlja0Z1bmMgfSBmcm9tIFwiLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5cbmludGVyZmFjZSBMZWFkZXJib2FyZEVudHJ5UHJvcHMge1xuICBwZXJzb25hbGl6ZWQ6IFBlcnNvbmFsaXplZDtcbiAgaGFuZGxlQ2xpY2s6IExlYWRlcmJvYXJkSGFuZGxlQ2xpY2tGdW5jO1xuICBlbnRyeTogTGVhZGVyYm9hcmRFbnRyeTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgZm9ybWF0VGltZTpGb3JtYXRUaW1lRnVuYztcbn1cbmNvbnN0IFNpbmdsZUxlYWRlcmJvYXJkRW50cnk6IFJlYWN0LkZDPExlYWRlcmJvYXJkRW50cnlQcm9wcz4gPSAoe1xuICBjdXJyZW50UGFnZSxcbiAgcGVyc29uYWxpemVkLFxuICBoYW5kbGVDbGljayxcbiAgZW50cnk6IHsgdXNlcm5hbWUsIHRpbWUgfSxcbiAgaW5kZXgsXG4gIGZvcm1hdFRpbWUsXG59KSA9PiB7XG4gIGNvbnN0IFt7IGRlZmluZWRVc2VyTmFtZSB9XSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBnb2xkZW4gPSBkZWZpbmVkVXNlck5hbWUgPT09IHVzZXJuYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGNsYXNzTmFtZT17cGVyc29uYWxpemVkID8gXCJwZXJzb25hbGl6ZWQgc2NvcmVzLWxpc3QtaXRlbVwiIDogXCJzY29yZXMtbGlzdC1pdGVtXCJ9XG4gICAgPlxuICAgICAgey8qIE51bWJlciAqL31cbiAgICAgIDxoNVxuICAgICAgICBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy11c2VyXCIgOiBcInNjb3Jlcy11c2VyXCJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI1cHhcIiB9fVxuICAgICAgPlxuICAgICAgICB7KChjdXJyZW50UGFnZSAqIDEwKSArIGluZGV4ICkgKyAxfS5cbiAgICAgIDwvaDU+XG4gICAgICB7LyogTmFtZSAqL31cbiAgICAgIDxoNVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdXNlclwiIDogXCJzY29yZXMtdXNlclwifVxuICAgICAgPlxuICAgICAgICB7dXNlcm5hbWV9XG4gICAgICA8L2g1PlxuICAgICAgey8qIFZlcnRpY2FsIGxpbmUgKi99XG4gICAgICA8aDUgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdXNlclwiIDogXCJibGFjay1udW0gc2NvcmVzLXVzZXJcIn0+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgfHtcIiBcIn1cbiAgICAgIDwvaDU+XG4gICAgICB7LyogVGltZSAqL31cbiAgICAgIDxoNSBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy10aW1lXCIgOiBcInNjb3Jlcy10aW1lXCJ9PlxuICAgICAgICB7Zm9ybWF0VGltZSh0aW1lKX1cbiAgICAgIDwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVMZWFkZXJib2FyZEVudHJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGFuZGxlQ2xpY2tQYWdlRnVuYyB9IGZyb20gXCIuLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5pbnRlcmZhY2UgUGFnZU5vTGlQcm9wcyB7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBoYW5kbGVDbGljazogSGFuZGxlQ2xpY2tQYWdlRnVuYztcbn1cbmNvbnN0IFBhZ2VOb0xpOiBSZWFjdC5GQzxQYWdlTm9MaVByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaVxuICAgICAga2V5PXtwcm9wcy5wYWdlSW5kZXh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBwcm9wcy5jdXJyZW50UGFnZSArIDEgPT09IHByb3BzLnBhZ2VJbmRleFxuICAgICAgICAgID8gYHBhZ2VOb0xpIHNlbGVjdGVkLXBhZ2UtbGlgXG4gICAgICAgICAgOiBcInBhZ2VOb0xpXCJcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfVxuICAgID5cbiAgICAgIDxhPntwcm9wcy5wYWdlSW5kZXh9PC9hPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm9MaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhhbmRsZUNsaWNrUGFnZUZ1bmMgfSBmcm9tIFwiLi4vbGVhZGVyYm9hcmQtdHlwZXNcIjtcbmltcG9ydCBQYWdlTm8gZnJvbSBcIi4vUGFnZU5vTGlcIjtcblxuaW50ZXJmYWNlIFBhZ2VOb1VsUHJvcHMge1xuICBwYWdlT2Zmc2V0OiBudW1iZXI7XG4gIG5vT2ZUb3BUaW1lczogbnVtYmVyO1xuICB0b3BUaW1lc1BlclBhZ2U6IG51bWJlcjtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgaGFuZGxlQ2xpY2s6IEhhbmRsZUNsaWNrUGFnZUZ1bmNcbn1cblxuY29uc3QgUGFnZU5vVWw6IFJlYWN0LkZDPFBhZ2VOb1VsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cblxuICBjb25zdCByZW5kZXJQYWdlTnVtYmVycyA9ICgpID0+IHtcbiAgICBpZiAocHJvcHMubm9PZlRvcFRpbWVzKSB7XG4gICAgcmV0dXJuIFsuLi5uZXcgQXJyYXkoTWF0aC5jZWlsKHByb3BzLm5vT2ZUb3BUaW1lcyAvIHByb3BzLnRvcFRpbWVzUGVyUGFnZSkpXVxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICAgIH0pXG4gICAgICAubWFwKChwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZU5vXG4gICAgICAgICAgICBrZXk9e3BhZ2VJbmRleH1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17cGFnZUluZGV4fVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3Byb3BzLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGlkPVwicGFnZS1udW1iZXJzXCI+XG4gICAgICB7cmVuZGVyUGFnZU51bWJlcnMoKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vVWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkdsb2JhbFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCJDdXN0b21Ib29rc1wiO1xuaW1wb3J0IHsgdXNlVGltZXJDb250ZXh0IH0gZnJvbSBcIlRpbWVyU3RvcmVcIjtcbmltcG9ydCB7IHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uLCB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgXCIuL21pbGxpc2Vjb25kc3R5bGVzLnNjc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0QmVnaW5uZXJTY29yZV0gPSB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24oKTtcbiAgY29uc3QgW3Bvc3RJbnRlcm1lZGlhdGVTY29yZV0gPSB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKCk7XG4gIGNvbnN0IFtwb3N0QWR2YW5jZWRTY29yZV0gPSB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24oKTtcbiAgY29uc3QgW1xuICAgIHtcbiAgICAgIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbCB9LFxuICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgdGltZXJPbixcbiAgICB9LCBnbG9iYWxEaXNwYXRjaFxuICBdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFt7IHRpbWVyVGltZSB9LCB0aW1lckRpc3BhdGNoXSA9IHVzZVRpbWVyQ29udGV4dCgpO1xuXG4gIHVzZUludGVydmFsKFxuICAgICgpID0+IHtcbiAgICAgIHRpbWVyRGlzcGF0Y2goeyB0eXBlOiBcIklURVJBVEUgVElNRVIgVElNRVwiLCBwYXlsb2FkOiAxMCB9KTtcbiAgICB9LFxuICAgIHRpbWVyT24gPT09IHRydWVcbiAgICAgID8gMTBcbiAgICAgIDogdGltZXJPbiA9PT0gXCJGUkVFWkUgV0lOXCIgfHwgdGltZXJPbiA9PT0gXCJGUkVFWkUgREVBRFwiIHx8IHRpbWVyT24gPT09IFwiVklDVE9SWVwiXG4gICAgICA/IC0xXG4gICAgICA6IG51bGxcbiAgKTtcblxuICAvLyBJZiBUaW1lciBpcyBjaGFuZ2VkIHRvIHRydWUsIHN0YXJ0IHRoZSB0aW1lci5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGltZXJPbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRpbWVyRGlzcGF0Y2goeyB0eXBlOiBcIkNMRUFSIFRJTUVSIFRJTUVcIiB9KTtcbiAgICB9XG5cbiAgICBpZiAodGltZXJPbiA9PT0gXCJWSUNUT1JZXCIgJiYgdHlwZW9mIGRlZmluZWRVc2VyTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicpIHtcbiAgICAgICAgcG9zdEJlZ2lubmVyU2NvcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczogeyB1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWUgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe3R5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgV0lOJ30pXG4gICAgICAgICAgLy8gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU0VUIFRPUCBUSU1FUycsIHBheWxvYWQ6IHsgdG9wVGltZXM6IG5ld1RvcFRpbWVzIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2ludGVybWVkaWF0ZScpIHtcbiAgICAgICAgcG9zdEludGVybWVkaWF0ZVNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChza2lsbExldmVsID09PSAnYWR2YW5jZWQnKSB7XG4gICAgICAgIHBvc3RBZHZhbmNlZFNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9LCBbdGltZXJPbl0pO1xuXG4gIGNvbnN0IGNlbnRpc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwKSAlIDEwMCkpLnNsaWNlKC0yKTtcbiAgY29uc3Qgc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lclRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgY29uc3QgaG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKHRpbWVyVGltZSAvIDM2MDAwMDApKS5zbGljZSgtMik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWlsbGktc2Vjb25kLXRpbWVyLWNvbnRhaW5lcic+XG4gICAgICA8aDQgaWQ9XCJtaWxsaS1zZWNvbmQtdGltZXJcIiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9PlxuICAgICAgICB7aG91cnMgIT09IFwiMDBcIlxuICAgICAgICAgID8gYCR7aG91cnN9IDogJHttaW51dGVzfSA6ICR7c2Vjb25kc30gOiAke2NlbnRpc2Vjb25kc31gXG4gICAgICAgICAgOiBtaW51dGVzICE9PSBcIjAwXCJcbiAgICAgICAgICA/IGAke21pbnV0ZXN9IDogJHtzZWNvbmRzfSA6ICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgICAgICA6IGAke3NlY29uZHN9IDogJHtjZW50aXNlY29uZHN9YH1cbiAgICAgIDwvaDQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSBcIi4vdGltZXJSZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgVGltZXJJU3RhdGVUeXBlcyB9IGZyb20gXCIuLi9UaW1lclR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGltZXJJU3RhdGVUeXBlcyA9IHtcbiAgdGltZXJUaW1lOiAwLFxufTtcblxuY29uc3QgVGltZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcbiAgW1RpbWVySVN0YXRlVHlwZXMsIFJlYWN0LkRpc3BhdGNoPGFueT5dXG4+KFtpbml0aWFsU3RhdGUsICgpID0+IHt9XSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn07XG5cbmNvbnN0IFRpbWVyU3RvcmVQcm92aWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoQ29tYmluZWRSZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZU1lbW88YW55PigoKSA9PiBbc3RhdGUsIGRpc3BhdGNoXSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGltZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+e2NoaWxkcmVufTwvVGltZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlVGltZXJDb250ZXh0KCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUaW1lckNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlVGltZXJDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaW1lclN0b3JlUHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCB7IHVzZVRpbWVyQ29udGV4dCwgVGltZXJTdG9yZVByb3ZpZGVyIH07XG4iLCIvLyBpbXBvcnQgeyB9IGZyb20gJy4vdGltZXJBY3Rpb25zLmpzJztcblxuaW1wb3J0IHsgQ29tYmluZVJlZHVjZXJzRnVuYyB9IGZyb20gXCJNaW5lc3dlZXBlclR5cGVzXCI7XG5pbXBvcnQgeyBUaW1lclRpbWVGdW5jIH0gZnJvbSBcIi4uL1RpbWVyVHlwZXNcIjtcblxuY29uc3QgdGltZXJUaW1lOiBUaW1lclRpbWVGdW5jID0gKHN0YXRlID0gMCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiSVRFUkFURSBUSU1FUiBUSU1FXCI6XG4gICAgICByZXR1cm4gKHN0YXRlICs9IGFjdGlvbi5wYXlsb2FkKTtcbiAgICBjYXNlIFwiQ0xFQVIgVElNRVIgVElNRVwiOlxuICAgICAgcmV0dXJuIDA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzOiBDb21iaW5lUmVkdWNlcnNGdW5jID0gKHNsaWNlcykgPT4gKHN0YXRlLCBhY3Rpb24pID0+XG4gIE9iamVjdC5rZXlzKHNsaWNlcykucmVkdWNlKFxuICAgIChhY2MsIHByb3ApID0+ICh7XG4gICAgICAuLi5hY2MsXG4gICAgICBbcHJvcF06IHNsaWNlc1twcm9wXShhY2NbcHJvcF0sIGFjdGlvbiksXG4gICAgfSksXG4gICAgc3RhdGVcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHsgdGltZXJUaW1lIH0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkdsb2JhbFN0b3JlXCI7XG5pbXBvcnQgeyBUaW1lclN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiVGltZXJTdG9yZVwiO1xuaW1wb3J0IHsgQm9hcmRTdG9yZVByb3ZpZGVyIH0gZnJvbSBcIkJvYXJkU3RvcmVcIjtcblxuaW1wb3J0IEJvYXJkIGZyb20gXCJUU0NvbXBvbmVudHMvQm9hcmQvQm9hcmRcIjtcbmltcG9ydCBNaWxsaXNlY29uZFRpbWVyIGZyb20gXCJUU0NvbXBvbmVudHMvTWlsbGlzZWNvbmRUaW1lci9NaWxsaXNlY29uZFRpbWVyXCI7XG5pbXBvcnQgU2tpbGxMZXZlbFNlbGVjdG9yIGZyb20gXCJUU0NvbXBvbmVudHMvU2tpbGxMZXZlbFNlbGVjdG9yL1NraWxsTGV2ZWxTZWxlY3RvclwiO1xuXG5pbXBvcnQgU21pbGV5QmFyIGZyb20gXCJUU0NvbXBvbmVudHMvU21pbGV5QmFyL1NtaWxleUJhclwiO1xuXG5pbXBvcnQgXCIuL21pbmVzd2VlcGVyLnNjc3NcIjtcblxuXG5jb25zdCBNaW5lc3dlZXBlcjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbXG4gICAge1xuICAgICAgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sXG4gICAgfSxcbiAgXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtY29udGFpbmVyc1wiIGlkPVwibWFpbi1zcGFjZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInRvdGFsLWJvYXJkXCIgY2xhc3NOYW1lPXtza2lsbExldmVsfT5cbiAgICAgICAgICA8Qm9hcmRTdG9yZVByb3ZpZGVyPlxuICAgICAgICAgICAgPFNtaWxleUJhciAvPlxuICAgICAgICAgICAgPEJvYXJkIC8+XG4gICAgICAgICAgPC9Cb2FyZFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxUaW1lclN0b3JlUHJvdmlkZXI+XG4gICAgICAgICAgPE1pbGxpc2Vjb25kVGltZXIgLz5cbiAgICAgICAgPC9UaW1lclN0b3JlUHJvdmlkZXI+XG5cbiAgICAgICAgPFNraWxsTGV2ZWxTZWxlY3RvciAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW5lc3dlZXBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0ICcuL3NraWxsc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtza2lsbExldmVsfSBpZD0nc2tpbGwtbGV2ZWwtc2VsZWN0b3InPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBCRUdJTk5FUiBESU1FTlNJT05TJyB9KX0+QmVnaW5uZXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17XyA9PiBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTRVQgSU5URVJNRURJQVRFIERJTUVOU0lPTlMnIH0pfT5JbnRlcm1lZGlhdGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17XyA9PiBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTRVQgQURWQU5DRUQgRElNRU5TSU9OUycgfSl9PkV4cGVydDwvYnV0dG9uPlxuICAgIDwvZGl2ID5cbiAgKVxufSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnXG5pbXBvcnQgJy4vc21pbGV5c3R5bGVzLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oKCkgPT4ge1xuXG4gIGNvbnN0IFt7IGRpbWVuc2lvbnM6IHsgbnVtYmVyT2ZNaW5lcyB9LCB0aW1lck9uIH0sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbeyBzdXJwcmlzZWQsIGZsYWdzUmVtYWluaW5nIH0sIGJvYXJkRGlzcGF0Y2hdID0gdXNlQm9hcmRDb250ZXh0KCk7XG5cbiAgY29uc3QgcmVzZXRDYWxsYmFjayA9ICgpID0+IHtcbiAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFU0VUIFNNSUxFUycgfSk7XG4gICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTRVQgRkxBR1MgUkVNQUlOSU5HJywgcGF5bG9hZDogbnVtYmVyT2ZNaW5lcyB9KTtcbiAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTV0lUQ0ggVElNRVIgT0ZGJyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3NtaWxleS1iYXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtaWxleS1ndXknXG4gICAgICAgIGlkPXtcbiAgICAgICAgICBzdXJwcmlzZWQgPT09ICdkZWFkJyA/ICdkZWFkLWd1eSdcbiAgICAgICAgICAgIDogdGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyA/ICd2aWN0b3J5LWd1eSdcbiAgICAgICAgICAgICAgOiBzdXJwcmlzZWQgPT09IHRydWUgPyAnc3VycHJpc2VkLWd1eSdcbiAgICAgICAgICAgICAgICA6ICdzbWlsZXktZ3V5J1xuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q2FsbGJhY2t9PjwvZGl2PlxuICAgICAgPGRpdiBpZD0nZmxhZ3MtcmVtYWluaW5nJz57ZmxhZ3NSZW1haW5pbmd9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHtcbiAgbGFiZWwsXG4gIHNpemU6IF8sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFtmaWVsZCwgeyBlcnJvciB9XSA9IHVzZUZpZWxkKHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAgey8qIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT57bGFiZWx9PC9sYWJlbD4gKi99XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj57ZXJyb3IgPyBlcnJvciA6IG51bGx9PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJUU1NyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgTWVEb2N1bWVudCwgdXNlTG9naW5NdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCJUU1NyYy91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQgXCIuL3VzZXJGb3Jtcy5zY3NzXCI7XG5cbmNvbnN0IFVzZXJMb2dpbkZvcm06IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgW18sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgW2xvZ2luXSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGxvZ2luRGF0YSA9IGF3YWl0IGxvZ2luKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgb3B0aW9uczogdmFsdWVzIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtNZURvY3VtZW50XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbG9naW5FcnJvcnMgPSBsb2dpbkRhdGE/LmRhdGE/LmxvZ2luLmVycm9ycztcbiAgICAgICAgY29uc3QgbG9naW5TdWNjZXNzID0gbG9naW5EYXRhPy5kYXRhPy5sb2dpbi51c2VyO1xuXG4gICAgICAgIGlmIChsb2dpbkVycm9ycykge1xuICAgICAgICAgIHNldEVycm9ycyh0b0Vycm9yTWFwKGxvZ2luRXJyb3JzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9naW5TdWNjZXNzKSB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VyTmFtZTogbG9naW5TdWNjZXNzLnVzZXJuYW1lIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQWZ0ZXIgbG9nZ2luZyBpbiByZXR1cm4gdG8gaG9tZSBzY3JlZW5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHsoe30pID0+IChcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibG9naW4tcmVnaXN0ZXItZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbnB1dHNcIj5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxvZ2luXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJUU1NyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgTWVEb2N1bWVudCwgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCJUU1NyYy91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQgXCIuL3VzZXJGb3Jtcy5zY3NzXCI7XG5cbmNvbnN0IFVzZXJMb2dpbkZvcm06IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IFssIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgW3JlZ2lzdGVyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCByZWdpc3Rlcih7XG4gICAgICAgICAgdmFyaWFibGVzOiB7IG9wdGlvbnM6IHZhbHVlcyB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbTWVEb2N1bWVudF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRXJyb3JzID0gcmVnaXN0ZXJEYXRhPy5kYXRhPy5yZWdpc3Rlci5lcnJvcnM7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyU3VjY2VzcyA9IHJlZ2lzdGVyRGF0YT8uZGF0YT8ucmVnaXN0ZXIudXNlcjtcblxuICAgICAgICBpZiAocmVnaXN0ZXJFcnJvcnMpIHtcbiAgICAgICAgICBzZXRFcnJvcnModG9FcnJvck1hcChyZWdpc3RlckVycm9ycykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyU3VjY2Vzcykge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUIERFRklORUQgVVNFUk5BTUVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgdXNlck5hbWU6IHJlZ2lzdGVyU3VjY2Vzcy51c2VybmFtZSB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsIi8vIGh0dHBzOi8vb3ZlcnJlYWN0ZWQuaW8vbWFraW5nLXNldGludGVydmFsLWRlY2xhcmF0aXZlLXdpdGgtcmVhY3QtaG9va3MvXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlSW50ZXJ2YWxGdW5jIH0gZnJvbSAnVFNTcmMvbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3QgdXNlSW50ZXJ2YWw6IFVzZUludGVydmFsRnVuYyA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgY29uc3Qgc2F2ZWRDYWxsYmFjazogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gUmVhY3QudXNlUmVmKCk7XG4gIC8vIFJlbWVtYmVyIHRoZSBsYXRlc3QgY2FsbGJhY2suXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIH0sIFtjYWxsYmFja10pO1xuXG4gIC8vIFNldCB1cCB0aGUgaW50ZXJ2YWwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpO1xuICAgIH1cblxuICAgIC8vIElmIHZpY3RvcnkgaXMgZGVjbGFyZWQgb3IgYm9tYiBzdG9wIHRoZSB0aW1lci4uLlxuICAgIGlmIChkZWxheSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgLy8gT3RoZXJ3aXNlLi4uXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbCh0aWNrLCBkZWxheSk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSwgW2RlbGF5XSlcbn1cblxuXG5leHBvcnQgeyB1c2VJbnRlcnZhbCB9OyIsIlxuaW1wb3J0IHsgQXJnLCBRdWVyeSwgTXV0YXRpb24sIFJlc29sdmVyLCBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlIH0gZnJvbSAnVFNEYXRhYmFzZS9lbnRpdGllcy9BZHZhbmNlZF9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtBZHZhbmNlZFNjb3JlXSlcbiAgYXN5bmMgYWxsQWR2YW5jZWRTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxBZHZhbmNlZFNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChBZHZhbmNlZFNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQWR2YW5jZWRTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdBZHZhbmNlZFNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEFkdmFuY2VkU2NvcmU+IHtcbiAgICBjb25zdCBuZXdBZHZhbmNlZFNjb3JlID0gZW0uY3JlYXRlKEFkdmFuY2VkU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QWR2YW5jZWRTY29yZSk7XG4gICAgcmV0dXJuIG5ld0FkdmFuY2VkU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQmVnaW5uZXJTY29yZSB9IGZyb20gJ1RTRGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzJztcblxuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEJlZ2lubmVyU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtCZWdpbm5lclNjb3JlXSlcbiAgYXN5bmMgYWxsQmVnaW5uZXJTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxCZWdpbm5lclNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChCZWdpbm5lclNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQmVnaW5uZXJTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdCZWdpbm5lclNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEJlZ2lubmVyU2NvcmU+IHtcbiAgICBjb25zdCBuZXdCZWdpbm5lclNjb3JlID0gZW0uY3JlYXRlKEJlZ2lubmVyU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QmVnaW5uZXJTY29yZSk7XG4gICAgcmV0dXJuIG5ld0JlZ2lubmVyU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmUgfSBmcm9tICdUU0RhdGFiYXNlL2VudGl0aWVzL0ludGVybWVkaWF0ZV9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIge1xuXG4gIEBRdWVyeSgoKSA9PiBbSW50ZXJtZWRpYXRlU2NvcmVdKVxuICBhc3luYyBhbGxJbnRlcm1lZGlhdGVTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZVtdPiB7XG4gICAgcmV0dXJuIGVtLmZpbmQoSW50ZXJtZWRpYXRlU2NvcmUsIHt9KTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBJbnRlcm1lZGlhdGVTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdJbnRlcm1lZGlhdGVTY29yZShcbiAgICBAQXJnKCd1c2VybmFtZScsICgpID0+IFN0cmluZykgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBAQXJnKCd0aW1lJywgKCkgPT4gTnVtYmVyKSB0aW1lOiBudW1iZXIsXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZT4ge1xuICAgIGNvbnN0IG5ld0ludGVybWVkaWF0ZVNjb3JlID0gZW0uY3JlYXRlKEludGVybWVkaWF0ZVNjb3JlLCB7IHVzZXJuYW1lLCB0aW1lIH0pXG4gICAgYXdhaXQgZW0ucGVyc2lzdEFuZEZsdXNoKG5ld0ludGVybWVkaWF0ZVNjb3JlKTtcbiAgICByZXR1cm4gbmV3SW50ZXJtZWRpYXRlU2NvcmU7XG4gIH1cbn0iLCJpbXBvcnQge1xuICBDdHgsXG4gIFF1ZXJ5LFxuICBNdXRhdGlvbixcbiAgUmVzb2x2ZXIsXG4gIEFyZyxcbiAgSW5wdXRUeXBlLFxuICBGaWVsZCxcbiAgT2JqZWN0VHlwZSxcbn0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL1VzZXJcIjtcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIkBtaWtyby1vcm0vcG9zdGdyZXNxbFwiO1xuaW1wb3J0IGFyZ29uMiBmcm9tIFwiYXJnb24yXCI7XG5pbXBvcnQge0NPT0tJRV9OQU1FfSBmcm9tIFwiVFNTcmMvY29uc3RhbnRzXCI7XG5cbkBJbnB1dFR5cGUoKVxuY2xhc3MgVXNlcm5hbWVQYXNzd29yZElucHV0IHtcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgRmllbGRFcnJvciB7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIGZpZWxkOiBzdHJpbmc7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgVXNlclJlc3BvbnNlIHtcbiAgQEZpZWxkKCgpID0+IFtGaWVsZEVycm9yXSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBlcnJvcnM/OiBGaWVsZEVycm9yW107XG5cbiAgQEZpZWxkKCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcj86IFVzZXI7XG59XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgQFF1ZXJ5KCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgYXN5bmMgbWUoQEN0eCgpIHsgcmVxLCBlbSB9OiBNaW5lQ29udGV4dCkge1xuICAgIC8vIHlvdSBhcmUgbm90IGxvZ2dlZCBpblxuICAgIGlmICghcmVxLnNlc3Npb24udXNlcklkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGVtLmZpbmRPbmUoVXNlciwgeyBpZDogcmVxLnNlc3Npb24udXNlcklkIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgQFF1ZXJ5KCgpID0+IFtVc2VyXSlcbiAgZ2V0QWxsVXNlcnMoQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHQpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIHJldHVybiBlbS5maW5kKFVzZXIsIHt9KTtcbiAgfVxuXG4gIEBRdWVyeSgoKSA9PiBVc2VyUmVzcG9uc2UpXG4gIGFzeW5jIGdldFNpbmdsZVVzZXIoXG4gICAgQEFyZyhcImlkXCIsICgpID0+IE51bWJlcikgaWQ6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbS5maW5kT25lKFVzZXIsIHsgaWQgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgcmVnaXN0ZXIoXG4gICAgQEFyZyhcIm9wdGlvbnNcIiwgKCkgPT4gVXNlcm5hbWVQYXNzd29yZElucHV0KSBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQsXG4gICAgQEN0eCgpIHsgZW0sIHJlcSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGlmIChvcHRpb25zLnVzZXJuYW1lLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhc3N3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYXJnb24yLmhhc2gob3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICBsZXQgdXNlcjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGVtIGFzIEVudGl0eU1hbmFnZXIpXG4gICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoVXNlcilcbiAgICAgICAgLmdldEtuZXhRdWVyeSgpXG4gICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgIHVzZXJuYW1lOiBvcHRpb25zLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pXG4gICAgICAgIC5yZXR1cm5pbmcoXCIqXCIpO1xuICAgICAgdXNlciA9IHJlc3VsdFswXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyBEdXBsaWNhdGUgdXNlcm5hbWUgZXJyb3JcbiAgICAgIGlmIChlcnIuZGV0YWlsLmluY2x1ZGVzKFwiYWxyZWFkeSBleGlzdHNcIikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICAgIC8vIFN0b3JlIHVzZXIgaWQgc2Vzc2lvbiwgdGhpcyB3aWxsIHNldCBhIGNvb2tpZSBvbiB0aGUgdXNlciBhbmQga2VlcCB0aGVtIGxvZ2dlZCBpbi5cbiAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBCb29sZWFuKVxuICBsb2dvdXQoQEN0eCgpIHsgcmVxLCByZXMgfTogTWluZUNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICByZXEuc2Vzc2lvbi5kZXN0cm95KChlcnIpID0+IHtcbiAgICAgICAgcmVzLmNsZWFyQ29va2llKENPT0tJRV9OQU1FKTtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95ZWQhISEnKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4geyBvazogdHJ1ZSB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgbG9naW4oXG4gICAgQEFyZyhcIm9wdGlvbnNcIiwgKCkgPT4gVXNlcm5hbWVQYXNzd29yZElucHV0KSBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQsXG4gICAgQEN0eCgpIHsgZW0sIHJlcSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW0uZmluZE9uZShVc2VyLCB7IHVzZXJuYW1lOiBvcHRpb25zLnVzZXJuYW1lIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJ0aGF0IHVzZXJuYW1lIGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgYXJnb24yLnZlcmlmeSh1c2VyLnBhc3N3b3JkLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbmNvcnJlY3QgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmVxLnNlc3Npb24udXNlcklkID0gdXNlci5pZDtcblxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQm9vbGVhbilcbiAgYXN5bmMgZGVsZXRlVXNlcihcbiAgICBAQXJnKFwiaWRcIiwgKCkgPT4gTnVtYmVyKSBpZDogbnVtYmVyLFxuICAgIEBDdHgoKSB7IGVtIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBlbS5uYXRpdmVEZWxldGUoVXNlciwgeyBpZCB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9Qcm92aWRlcixcbiAgSHR0cExpbmssXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyByZW5kZXJUb05vZGVTdHJlYW0gfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaHRtbFN0YXJ0LCBodG1sRW5kIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCB7IEdsb2JhbFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiVFNDb21wb25lbnRzL0hvbWUvSG9tZVwiO1xuXG5cblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgIHVyaTogXCIvZ3JhcGhxbFwiLFxuICAgIGZldGNoLFxuICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIH0sXG4gIH0pLFxufSk7XG5cbmNvbnN0IG1pbmVzd2VlcGVyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxubWluZXN3ZWVwZXJSb3V0ZXIuZ2V0KFwiKlwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHt9O1xuICBsZXQgcmVzdWx0U2NvcmVzO1xuICB0cnkge1xuICAgIGNvbnN0IGxpbmsgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIiA6IFwiaHR0cHM6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2dyYXBocWxcIjtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBheGlvcy5wb3N0KGxpbmssIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgcXVlcnk6IGBxdWVyeSBHZXRCZWdpbm5lclNjb3JlcyB7XG4gICAgICAgICAgICAgICAgYWxsQmVnaW5uZXJTY29yZXMge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICB0aW1lXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWAsXG4gICAgfSk7XG5cbiAgICByZXN1bHRTY29yZXMgPSByZXN1bHRzLmRhdGE/LmRhdGEuYWxsQmVnaW5uZXJTY29yZXMgfHwgW107XG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgbWluZXN3ZWVwZXJTdHJlYW0gPSByZW5kZXJUb05vZGVTdHJlYW0oXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxHbG9iYWxTdG9yZVByb3ZpZGVyPlxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgIDwvR2xvYmFsU3RvcmVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xuXG4gIHJlcy53cml0ZShodG1sU3RhcnQoISFwcm9jZXNzLmVudi5OT0RFX0VOViwgcHJvY2Vzcy5lbnYuQ2xvdWRmcm9udCwgcmVzdWx0U2NvcmVzKSk7XG4gIG1pbmVzd2VlcGVyU3RyZWFtLnBpcGUocmVzLCB7IGVuZDogZmFsc2UgfSk7XG4gIG1pbmVzd2VlcGVyU3RyZWFtLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICByZXMud3JpdGUoaHRtbEVuZCghIXByb2Nlc3MuZW52Lk5PREVfRU5WLCBwcm9jZXNzLmVudi5DbG91ZGZyb250KSk7XG4gICAgcmVzLmVuZCgpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtaW5lc3dlZXBlclJvdXRlcjtcbiIsImltcG9ydCB7IEdlbmVyaWNTY29yZSB9IGZyb20gXCJUU1NyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9sZWFkZXJib2FyZC10eXBlc1wiO1xuXG5jb25zdCBodG1sU3RhcnQgPSAoREVWX0VOVjogYm9vbGVhbiwgQ2xvdWRmcm9udDogc3RyaW5nIHwgdW5kZWZpbmVkLCByZXN1bHRTY29yZXM6IEdlbmVyaWNTY29yZVtdKSA9PiB7XG4gIHJldHVybiAoYDwhRE9DVFlQRSBIVE1MPlxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgICA8dGl0bGU+TWluZXN3ZWVwZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JyR7Q2xvdWRmcm9udH0vbWluZS1pbWFnZXMvbWluZWNvbi5wbmcnLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvc3RhdGljL2luZGV4LmNzcycvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8c2NyaXB0PlxuICAgICAgICBjb25zdCBkZXZTdHlsZVNoZWV0SHJlZiA9ICcvc3RhdGljL2luZGV4LmNzcyc7XG4gICAgICAgIGNvbnN0IHByb2RTdHlsZVNoZWV0SHJlZiA9ICcke0Nsb3VkZnJvbnR9L2J1aWxkL3B1YmxpYy9pbmRleC5jc3MnO1xuICAgICAgICBjb25zdCBbaGVhZF0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVBRCcpO1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsuaHJlZiA9ICgke0RFVl9FTlZ9ID09PSB0cnVlID8gZGV2U3R5bGVTaGVldEhyZWYgOiBwcm9kU3R5bGVTaGVldEhyZWYpXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICA8L3NjcmlwdD5cblxuXG5cbiAgICAgIDwhLS0gU2VydmVyIFNpZGUgUmVuZGVyaW5nIG9mIFBhZ2UgRGF0YSAtLT5cbiAgICAgIDxzY3JpcHQ+d2luZG93Ll9fSU5JVElBTF9fREFUQV9fPSR7SlNPTi5zdHJpbmdpZnkoe3NzclRvcFRpbWVzOiByZXN1bHRTY29yZXN9KX08L3NjcmlwdD5cblxuICAgIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJtaW5lc3dlZXBlci1yb290XCI+YClcbn07XG5cblxuY29uc3QgaHRtbEVuZCA9IChERVZfRU5WOiBib29sZWFuLCBDbG91ZGZyb250OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IChgPC9kaXY+XG4gICAgICA8c2NyaXB0PlxuICAgICAgY29uc3QgZGV2U2NyaXB0TGluayA9ICcvc3RhdGljL2luZGV4LmpzJztcbiAgICAgIGNvbnN0IHByb2RTY3JpcHRMaW5rID0gJyR7Q2xvdWRmcm9udH0vYnVpbGQvcHVibGljL2luZGV4LmpzJztcblxuICAgICAgY29uc3QgW2JvZHldID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JPRFknKTtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSAoJHtERVZfRU5WfSA9PT0gdHJ1ZSA/IGRldlNjcmlwdExpbmsgOiBwcm9kU2NyaXB0TGluaylcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIDwvc2NyaXB0PlxuICAgIDwvYm9keT5cbjwvaHRtbD5gKTtcblxuZXhwb3J0IHtcbiAgaHRtbFN0YXJ0LFxuICBodG1sRW5kXG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcInRzLXNyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5leHBvcnQgY29uc3QgdG9FcnJvck1hcCA9IChlcnJvcnM6IEZpZWxkRXJyb3JbXSkgPT4ge1xuICBjb25zdCBlcnJvck1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBlcnJvcnMuZm9yRWFjaCgoeyBmaWVsZCwgbWVzc2FnZSB9KSA9PiB7XG4gICAgZXJyb3JNYXBbZmllbGRdID0gbWVzc2FnZTtcbiAgfSk7XG4gIHJldHVybiBlcnJvck1hcDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWlrcm8tb3JtL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcmdvbjJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1yZWRpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG4vLyBBcG9sbG9cbmltcG9ydCB7XG4gIEFwb2xsb1NlcnZlclBsdWdpbkxhbmRpbmdQYWdlR3JhcGhRTFBsYXlncm91bmRcbn0gZnJvbSBcImFwb2xsby1zZXJ2ZXItY29yZVwiO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbi8vIEV4cHJlc3NcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1pbmVzd2VlcGVyUm91dGVyIGZyb20gJy4vc3NyLWNsaWVudC9pbmRleCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8vIEdyYXBoUWxcbmltcG9ydCB7IGJ1aWxkU2NoZW1hIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbi8vIE1pa3JvLU9ybVxuaW1wb3J0IG1pY3JvQ29uZmlnIGZyb20gJy4uL2RhdGFiYXNlL21pa3JvLW9ybS5jb25maWcnO1xuLy8gUmVkaXNcbmltcG9ydCByZWRpcyBmcm9tICdyZWRpcyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IGNvbm5lY3RSZWRpcyBmcm9tICdjb25uZWN0LXJlZGlzJztcblxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmltcG9ydCB7IENPT0tJRV9OQU1FLCBfX3Byb2RfXyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBCZWdpbm5lclNjb3JlUmVzb2x2ZXIgfSBmcm9tICcuL1Jlc29sdmVycy9iZWdpbm5lclNjb3Jlcyc7XG5pbXBvcnQgeyBJbnRlcm1lZGlhdGVTY29yZVJlc29sdmVyIH0gZnJvbSAnLi9SZXNvbHZlcnMvaW50ZXJtZWRpYXRlU2NvcmVzJztcbmltcG9ydCB7IEFkdmFuY2VkU2NvcmVSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL2FkdmFuY2VkU2NvcmVzJztcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL3VzZXJzJztcblxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IHJlZGlzU3RvcmUgPSBjb25uZWN0UmVkaXMoc2Vzc2lvbik7XG4gIGNvbnN0IHJlZGlzQ2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgbGluayA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcgOiAnaHR0cHM6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwJztcblxuICBhcHAudXNlKGNvcnMoXG4gICAge1xuICAgICAgb3JpZ2luOiBsaW5rLFxuICAgICAgY3JlZGVudGlhbHM6IHRydWVcbiAgICB9KVxuICApXG5cbiAgYXBwLnVzZShcbiAgICBzZXNzaW9uKHtcbiAgICAgIG5hbWU6IENPT0tJRV9OQU1FLFxuICAgICAgc3RvcmU6IG5ldyByZWRpc1N0b3JlKHtcbiAgICAgICAgY2xpZW50OiByZWRpc0NsaWVudCxcbiAgICAgICAgZGlzYWJsZVRvdWNoOiB0cnVlXG4gICAgICB9KSxcbiAgICAgIGNvb2tpZToge1xuICAgICAgICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMCwgLy8xMCB5ZWFyc1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLCAvL2NzcmZcbiAgICAgICAgc2VjdXJlOiBfX3Byb2RfXyAvLyBjb29raWUgb25seSB3b3JrcyBpbiBodHRwc1xuICAgICAgfSxcbiAgICAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIHNlY3JldDogJ2FiY2RlZmdoaWprbG1ub3AnLFxuICAgICAgcmVzYXZlOiBmYWxzZVxuICAgIH0pXG4gICk7XG5cbiAgY29uc3Qgb3JtID0gYXdhaXQgTWlrcm9PUk0uaW5pdChtaWNyb0NvbmZpZyk7XG4gIGF3YWl0IG9ybS5nZXRNaWdyYXRvcigpLnVwKCk7XG5cbiAgY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBhd2FpdCBidWlsZFNjaGVtYSh7XG4gICAgICByZXNvbHZlcnM6IFtCZWdpbm5lclNjb3JlUmVzb2x2ZXIsIEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIsIEFkdmFuY2VkU2NvcmVSZXNvbHZlciwgVXNlclJlc29sdmVyXSxcbiAgICAgIHZhbGlkYXRlOiBmYWxzZVxuICAgIH0pLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIEFwb2xsb1NlcnZlclBsdWdpbkxhbmRpbmdQYWdlR3JhcGhRTFBsYXlncm91bmQoKSxcbiAgICBdLFxuICAgIGNvbnRleHQ6ICh7IHJlcSwgcmVzIH0pID0+ICh7IGVtOiBvcm0uZW0sIHJlcSwgcmVzIH0pXG4gIH0pO1xuXG4gIGF3YWl0IGFwb2xsb1NlcnZlci5zdGFydCgpO1xuICBhcG9sbG9TZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwLCBjb3JzOiBmYWxzZSB9KTtcblxuICBhcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3RzLWRpc3QvcHVibGljJykpKTtcblxuICBhcHAuZ2V0KCcqJywgbWluZXN3ZWVwZXJSb3V0ZXIpO1xuXG4gIGFwcC5saXN0ZW4oNDAwMCwgKCkgPT4gY29uc29sZS5sb2coJ2JlYXQgbWluZXN3ZWVwZXIgYXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0IDQwMDAnKSk7XG59XG5cbm1haW4oKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9