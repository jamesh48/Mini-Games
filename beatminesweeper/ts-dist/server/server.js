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
    user: "jameshrivnak",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL1NxdWFyZXMvc3dlZXBzcXVhcmVzdHlsZXMuc2Nzcz85NGZiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvYm9hcmRzdHlsZXMuc2Nzcz9iNWUxIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9oZWFkZXIuc2Nzcz9hNzEwIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9ob21lLnNjc3M/YmZlZCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnNjc3M/OTMzNSIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvbWlsbGlzZWNvbmRzdHlsZXMuc2Nzcz8wMzcyIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWluZXN3ZWVwZXIvbWluZXN3ZWVwZXIuc2Nzcz9kMjMzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvU2tpbGxMZXZlbFNlbGVjdG9yL3NraWxsc3R5bGVzLnNjc3M/NWNmYiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NtaWxleUJhci9zbWlsZXlzdHlsZXMuc2Nzcz8yNjQ0Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvVXNlckZvcm1zL3VzZXJGb3Jtcy5zY3NzP2YxNTQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9lbnRpdGllcy9BZHZhbmNlZF9TY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9lbnRpdGllcy9CZWdpbm5lcl9TY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9lbnRpdGllcy9JbnRlcm1lZGlhdGVfU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvVXNlci50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL21pa3JvLW9ybS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9nZW5lcmF0ZWQvZ3JhcGhxbC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvR2xvYmFsU3RvcmUvR2xvYmFsU3RvcmUudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL0dsb2JhbFN0b3JlL2dsb2JhbFJlZHVjZXJzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvQm9hcmQudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvQm9hcmRTdG9yZS9Cb2FyZFN0b3JlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkU3RvcmUvYm9hcmRBY3Rpb25zLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvQm9hcmRTdG9yZS9ib2FyZFJlZHVjZXJzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvU3F1YXJlcy9TcXVhcmUudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvQm9hcmQvU3F1YXJlcy9zcXVhcmVVdGlscy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL3VzZUVmZmVjdEJvYXJkSG9va3MudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9IZWFkZXJJbnRlcmZhY2VzL0xvZ2dlZEluVmlldy50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ib21lL0hlYWRlckludGVyZmFjZXMvTG9nZ2VkT3V0Vmlldy50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Ib21lL0hvbWUudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvTGVhZGVyYm9hcmQudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvTGVhZGVyYm9hcmRFbnRyeS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9QYWdpbmF0aW9uL1BhZ2VOb0xpLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL1BhZ2luYXRpb24vcGFnZU5vVWwudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWlsbGlzZWNvbmRUaW1lci9NaWxsaXNlY29uZFRpbWVyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvVGltZXJTdG9yZS9UaW1lclN0b3JlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvVGltZXJTdG9yZS90aW1lclJlZHVjZXJzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTWluZXN3ZWVwZXIvTWluZXN3ZWVwZXIudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvU2tpbGxMZXZlbFNlbGVjdG9yL1NraWxsTGV2ZWxTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9TbWlsZXlCYXIvU21pbGV5QmFyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvUmVnaXN0ZXIudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvY3VzdG9tSG9va3MudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL1Jlc29sdmVycy9hZHZhbmNlZFNjb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9SZXNvbHZlcnMvYmVnaW5uZXJTY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL2ludGVybWVkaWF0ZVNjb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9SZXNvbHZlcnMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvc3NyLWNsaWVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvc3NyLWNsaWVudC90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3V0aWxzL3RvRXJyb3JNYXAudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcIkBtaWtyby1vcm0vY29yZVwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWNvcmVcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImFyZ29uMlwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJjb25uZWN0LXJlZGlzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiY3Jvc3MtZmV0Y2hcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWRpc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInR5cGUtZ3JhcGhxbFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBfX3Byb2RfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5leHBvcnQgY29uc3QgQ09PS0lFX05BTUU9J3FpZCc7XG4iLCJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE9iamVjdFR5cGUsIEZpZWxkLCBJbnQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5AT2JqZWN0VHlwZSgpXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZFNjb3JlIHtcbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByaW1hcnlLZXkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICBpZCE6IG51bWJlcjtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScgfSlcbiAgY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScsIG9uVXBkYXRlOiAoKSA9PiBuZXcgRGF0ZSgpIH0pXG4gIHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ3RleHQnIH0pXG4gIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIHRpbWUhOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE9iamVjdFR5cGUsIEZpZWxkLCBJbnQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5AT2JqZWN0VHlwZSgpXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBCZWdpbm5lclNjb3JlIHtcbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByaW1hcnlLZXkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICBpZCE6IG51bWJlcjtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScgfSlcbiAgY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAnZGF0ZScsIG9uVXBkYXRlOiAoKSA9PiBuZXcgRGF0ZSgpIH0pXG4gIHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ3RleHQnIH0pXG4gIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIHRpbWUhOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE9iamVjdFR5cGUsIEZpZWxkLCBJbnQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5AT2JqZWN0VHlwZSgpXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBJbnRlcm1lZGlhdGVTY29yZSB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJvcGVydHkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICB0aW1lITogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JywgdW5pcXVlOiB0cnVlIH0pXG4gIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICBwYXNzd29yZCE6IHN0cmluZztcbn0iLCJpbXBvcnQgeyBCZWdpbm5lclNjb3JlIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzXCI7XG5pbXBvcnQgeyBJbnRlcm1lZGlhdGVTY29yZSB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL0ludGVybWVkaWF0ZV9TY29yZXNcIjtcbmltcG9ydCB7IEFkdmFuY2VkU2NvcmUgfSBmcm9tIFwiVFNEYXRhYmFzZS9lbnRpdGllcy9BZHZhbmNlZF9TY29yZXNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiVFNEYXRhYmFzZS9lbnRpdGllcy9Vc2VyXCI7XG5pbXBvcnQgeyBfX3Byb2RfXyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSBcIkBtaWtyby1vcm0vY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBwYXRoOiBcIi4vdHMtc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnNcIixcbiAgICBwYXR0ZXJuOiAvXltcXHctXStcXGQrXFwuW3RqXXMkLyxcbiAgfSxcbiAgZW50aXRpZXM6IFtCZWdpbm5lclNjb3JlLCBJbnRlcm1lZGlhdGVTY29yZSwgQWR2YW5jZWRTY29yZSwgVXNlcl0sXG4gIGRiTmFtZTogXCJNaW5lc3dlZXBlclwiLFxuICB0eXBlOiBcInBvc3RncmVzcWxcIixcbiAgZGVidWc6ICFfX3Byb2RfXyxcbiAgcG9ydDogNTQzMixcbiAgdXNlcjogXCJqYW1lc2hyaXZuYWtcIixcbn0gYXMgUGFyYW1ldGVyczx0eXBlb2YgTWlrcm9PUk0uaW5pdD5bMF07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0JlZ2lubmVyU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGRlbGV0ZVVzZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIG5ld0FkdmFuY2VkU2NvcmU/OiBNYXliZTxBZHZhbmNlZFNjb3JlPjtcbiAgbmV3QmVnaW5uZXJTY29yZT86IE1heWJlPEJlZ2lubmVyU2NvcmU+O1xuICBuZXdJbnRlcm1lZGlhdGVTY29yZT86IE1heWJlPEludGVybWVkaWF0ZVNjb3JlPjtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVVc2VyQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTmV3QWR2YW5jZWRTY29yZUFyZ3MgPSB7XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25OZXdCZWdpbm5lclNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbk5ld0ludGVybWVkaWF0ZVNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8QWR2YW5jZWRTY29yZT47XG4gIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTxCZWdpbm5lclNjb3JlPjtcbiAgYWxsSW50ZXJtZWRpYXRlU2NvcmVzOiBBcnJheTxJbnRlcm1lZGlhdGVTY29yZT47XG4gIGdldEFsbFVzZXJzOiBBcnJheTxVc2VyPjtcbiAgZ2V0U2luZ2xlVXNlcjogVXNlclJlc3BvbnNlO1xuICBtZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFNpbmdsZVVzZXJBcmdzID0ge1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyRnJhZ21lbnQgPSB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ2luOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ291dDogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0FkdmFuY2VkU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQWR2YW5jZWRTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0JlZ2lubmVyU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uID0geyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJywgbmV3SW50ZXJtZWRpYXRlU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIHJlZ2lzdGVyOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNyZWF0ZWRBdDogc3RyaW5nLCB1cGRhdGVkQXQ6IHN0cmluZyB9PiB9O1xuXG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeSA9IHsgX190eXBlbmFtZT86ICdRdWVyeScsIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTx7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxJbnRlcm1lZGlhdGVTY29yZXM6IEFycmF5PHsgX190eXBlbmFtZT86ICdJbnRlcm1lZGlhdGVTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgbWU/OiB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXIgb24gVXNlciB7XG4gIGlkXG4gIHVzZXJuYW1lXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIGxvZ2luKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dvdXRNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dvdXRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dvdXRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ291dE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBBZHZhbmNlZFNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWR2YW5jZWRTY29yZSgkdXNlcm5hbWU6IFN0cmluZyEsICR0aW1lOiBGbG9hdCEpIHtcbiAgbmV3QWR2YW5jZWRTY29yZSh1c2VybmFtZTogJHVzZXJuYW1lLCB0aW1lOiAkdGltZSkge1xuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFthZHZhbmNlZFNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdXNlcm5hbWU6IC8vIHZhbHVlIGZvciAndXNlcm5hbWUnXG4gKiAgICAgIHRpbWU6IC8vIHZhbHVlIGZvciAndGltZSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPEFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzPihBZHZhbmNlZFNjb3JlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8QWR2YW5jZWRTY29yZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxBZHZhbmNlZFNjb3JlTXV0YXRpb24sIEFkdmFuY2VkU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQmVnaW5uZXJTY29yZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEJlZ2lubmVyU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0JlZ2lubmVyU2NvcmUodXNlcm5hbWU6ICR1c2VybmFtZSwgdGltZTogJHRpbWUpIHtcbiAgICB1c2VybmFtZVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbYmVnaW5uZXJTY29yZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxCZWdpbm5lclNjb3JlTXV0YXRpb24sIEJlZ2lubmVyU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4oQmVnaW5uZXJTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEJlZ2lubmVyU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8QmVnaW5uZXJTY29yZU11dGF0aW9uLCBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEludGVybWVkaWF0ZVNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gSW50ZXJtZWRpYXRlU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0ludGVybWVkaWF0ZVNjb3JlKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHRpbWU6ICR0aW1lKSB7XG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2ludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPihJbnRlcm1lZGlhdGVTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVnaXN0ZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlZ2lzdGVyTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVnaXN0ZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUmVnaXN0ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEFkdmFuY2VkU2NvcmVzIHtcbiAgYWxsQWR2YW5jZWRTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBZHZhbmNlZFNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEFkdmFuY2VkU2NvcmVzUXVlcnksIEdldEFkdmFuY2VkU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEFkdmFuY2VkU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEJlZ2lubmVyU2NvcmVzIHtcbiAgYWxsQmVnaW5uZXJTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRCZWdpbm5lclNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEJlZ2lubmVyU2NvcmVzUXVlcnksIEdldEJlZ2lubmVyU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEJlZ2lubmVyU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRJbnRlcm1lZGlhdGVTY29yZXMge1xuICBhbGxJbnRlcm1lZGlhdGVTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8R2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEludGVybWVkaWF0ZVNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNZVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lUXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWVMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSAnLi9nbG9iYWxSZWR1Y2Vycyc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBEZWZpbmVkVXNlck5hbWUsIFRpbWVyT24gfSBmcm9tICdNaW5lc3dlZXBlclR5cGVzJztcblxuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZXMge1xuICBkaW1lbnNpb25zOiBEaW1lbnNpb25zXG4gIHRvcFRpbWVzOiBbXTtcbiAgZGVmaW5lZFVzZXJOYW1lOiBEZWZpbmVkVXNlck5hbWU7XG4gIHRpbWVyT246IFRpbWVyT25cbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlVHlwZXMgPSB7XG4gIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbDogJ2JlZ2lubmVyJywgdmVydGljYWxEaW1lbnNpb246IDksIGhvcml6b250YWxEaW1lbnNpb246IDksIG51bWJlck9mTWluZXM6IDEwIH0sXG4gIHRvcFRpbWVzOiBbXSxcbiAgZGVmaW5lZFVzZXJOYW1lOiBudWxsLFxuICB0aW1lck9uOiBmYWxzZVxufTtcblxuXG5jb25zdCBHbG9iYWxTdG9yZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFtJU3RhdGVUeXBlcywgUmVhY3QuRGlzcGF0Y2g8YW55Pl0+KFtpbml0aWFsU3RhdGUsICgpID0+IHsgfV0pO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRcbn1cblxuY29uc3QgR2xvYmFsU3RvcmVQcm92aWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoQ29tYmluZWRSZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuICByZXR1cm4gKFxuICAgIC8vIHZhbHVlIHdhcyBwcmV2aW91c2x5IHN0b3JlXG4gICAgPEdsb2JhbFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0dsb2JhbFN0b3JlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU3RvcmVDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50UHJvdmlkZXInKVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuXG5leHBvcnQgeyB1c2VHbG9iYWxDb250ZXh0LCBHbG9iYWxTdG9yZVByb3ZpZGVyIH07IiwidHlwZSBUaW1lck9uVHlwZSA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG59O1xuXG5jb25zdCB0aW1lck9uID0gKHN0YXRlID0gZmFsc2UsIGFjdGlvbjogVGltZXJPblR5cGUpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTV0lUQ0ggVElNRVIgT05cIjpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgXCJTV0lUQ0ggVElNRVIgT0ZGXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSBcIkZSRUVaRSBUSU1FUiBTVEFURSBXSU5cIjpcbiAgICAgIHJldHVybiBcIkZSRUVaRSBXSU5cIjtcbiAgICBjYXNlIFwiRlJFRVpFIFRJTUVSIFNUQVRFIERFQURcIjpcbiAgICAgIHJldHVybiAnRlJFRVpFIERFQUQnO1xuICAgIGNhc2UgXCJGUkVFWkUgVElNRVIgU1RBVEUgVklDVE9SWVwiOlxuICAgICAgcmV0dXJuICdWSUNUT1JZJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIERpbWVuc2lvbkFjdGlvbiA9IHtcbiAgdHlwZTogc3RyaW5nO1xufTtcblxuY29uc3QgZGltZW5zaW9ucyA9IChzdGF0ZSA9IHsgc2tpbGxMZXZlbDogJ2JlZ2lubmVyJywgdmVydGljYWxEaW1lbnNpb246IDksIGhvcml6b250YWxEaW1lbnNpb246IDksIG51bWJlck9mTWluZXM6IDEwIH0sIGFjdGlvbjogRGltZW5zaW9uQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIEJFR0lOTkVSIERJTUVOU0lPTlNcIjpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9O1xuICAgIGNhc2UgXCJTRVQgSU5URVJNRURJQVRFIERJTUVOU0lPTlNcIjpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdpbnRlcm1lZGlhdGUnLCB2ZXJ0aWNhbERpbWVuc2lvbjogMTYsIGhvcml6b250YWxEaW1lbnNpb246IDE2LCBudW1iZXJPZk1pbmVzOiA0MCB9O1xuICAgIGNhc2UgJ1NFVCBBRFZBTkNFRCBESU1FTlNJT05TJzpcbiAgICAgIHJldHVybiB7IHNraWxsTGV2ZWw6ICdhZHZhbmNlZCcsIHZlcnRpY2FsRGltZW5zaW9uOiAxNiwgaG9yaXpvbnRhbERpbWVuc2lvbjogMzAsIG51bWJlck9mTWluZXM6IDk5IH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvcFRpbWVzID0gKHN0YXRlID0gW10sIGFjdGlvbjpcbiAgeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgdG9wVGltZXM6IHN0cmluZ1tdfSB9XG4gICkgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIFRPUCBUSU1FU1wiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnRvcFRpbWVzO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGNvbnN0IHJlZHVjZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiB7XG4vLyAgIHJldHVybiAoc3RhdGUsIGFjdGlvbikgPT4gcmVkdWNlcnMucmVkdWNlKChhY2MsIG5leHRSZWR1Y2VyKSA9PiBuZXh0UmVkdWNlcihhY2MsIGFjdGlvbiksIHN0YXRlKVxuLy8gfTtcblxuXG5jb25zdCBkZWZpbmVkVXNlck5hbWUgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb246XG4gIHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IHVzZXJOYW1lOiBzdHJpbmcgfSB9XG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnVzZXJOYW1lO1xuICAgIGNhc2UgXCJVTlNFVCBERUZJTkVEIFVTRVJOQU1FXCI6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuLy8gICBhOiByZWR1Y2VSZWR1Y2VycyhwbHVzT25lUmVkdWNlciwgcGx1c09uZVJlZHVjZXIpLCAvLyBhTmV3ID0gYU9sZCArIDEgKyAxXG4vLyAgIGI6IHJlZHVjZVJlZHVjZXJzKHRpbWVzVHdvUmVkdWNlciwgcGx1c09uZVJlZHVjZXIpIC8vIGJOZXcgPSBiT2xkICogMiArIDFcbi8vIH0pO1xuXG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChzbGljZXM6IGFueSkgPT4gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiAoe1xuICAuLi5hY2MsXG4gIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbn0pLFxuICBzdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZGltZW5zaW9ucyxcbiAgZGVmaW5lZFVzZXJOYW1lLFxuICB0b3BUaW1lcyxcbiAgdGltZXJPblxufSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgQm9hcmRIb29rcyBmcm9tICcuL3VzZUVmZmVjdEJvYXJkSG9va3MnO1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tICdDdXN0b21Ib29rcyc7XG5pbXBvcnQgU3F1YXJlIGZyb20gJ1RTQ29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL1NxdWFyZSc7XG5cbmltcG9ydCAnLi9ib2FyZHN0eWxlcy5zY3NzJztcblxuXG5jb25zdCBCb2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRpbWVuc2lvbnMsIGRlZmluZWRVc2VyTmFtZSwgdGltZXJPbiwgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpXG4gIGNvbnN0IFt7IGZsaXBwZXJzLCBtaW5lQXJyLCBudW1iZXJzLCBzY3JvbGxCb2FyZCwgY29sb3JEZWxheSB9LCBib2FyZERpc3BhdGNoXSA9IHVzZUJvYXJkQ29udGV4dCgpO1xuXG4gIC8vIEJvYXJkIFNwZWNpZmljIHVzZUVmZmVjdHMgJiYgYWN0aW9ucy5cbiAgQm9hcmRIb29rcy5mcmVlemVDb2xvckRlbGF5RWZmZWN0KGRlZmluZWRVc2VyTmFtZSwgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3Muc3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0KGNvbG9yRGVsYXksIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLmZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0KHNjcm9sbEJvYXJkKTtcbiAgQm9hcmRIb29rcy5nZW5lcmF0ZU1pbmVzRWZmZWN0KGRpbWVuc2lvbnMsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLmdlbmVyYXRlTnVtYmVyRWZmZWN0KG1pbmVBcnIsIGRpbWVuc2lvbnMsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLnJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbCh0aW1lck9uLCBkaW1lbnNpb25zLCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5yZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbih0aW1lck9uLCBza2lsbExldmVsLCBib2FyZERpc3BhdGNoKTtcblxuICAvLyBjb25zdCBzZXRTY3JvbGxCb2FyZENhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEUgU0NST0xMQk9BUkQnIH0pLCBbXSk7XG5cbiAgdXNlSW50ZXJ2YWwoKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdJVEVSQVRFIENPTE9SUycgfSksIGNvbG9yRGVsYXkpO1xuXG4gIC8vIE1peGVkIVxuICBCb2FyZEhvb2tzLnJldmVhbEZsaXBwZXJFZmZlY3QoeyBtaW5lQXJyLCBmbGlwcGVycywgbnVtYmVycywgZ2xvYmFsRGlzcGF0Y2gsIGJvYXJkRGlzcGF0Y2ggfSk7XG5cbiAgLy8gR2xvYmFsIEJvYXJkIHVzZUVmZmVjdHNcbiAgQm9hcmRIb29rcy5yZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdChza2lsbExldmVsLCBnbG9iYWxEaXNwYXRjaCk7XG5cblxuICBjb25zdCBzZXRTY3JvbGxCb2FyZENhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFIFNDUk9MTEJPQVJEXCIgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZTogUmVhY3QuV2hlZWxFdmVudCkgPT5cbiAgYm9hcmREaXNwYXRjaCh7XG4gICAgdHlwZTogXCJNT0RVTEFURSBDT0xPUiBERUxBWVwiLFxuICAgIHBheWxvYWQ6IHsgbmV3Q29sb3JEZWxheTogZS5kZWx0YVkgfSxcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIGlkPVwicGxheS1ib2FyZFwiXG4gICAgb25XaGVlbD17KGUpID0+IGNvbG9yRGVsYXkgPyBoYW5kbGVTY3JvbGwoZSkgOiBudWxsfVxuICAgIG9uTW91c2VFbnRlcj17KCkgPT4gY29sb3JEZWxheSA/IHNldFNjcm9sbEJvYXJkQ2FsbGJhY2soKSA6IG51bGx9XG4gICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBjb2xvckRlbGF5ID8gc2V0U2Nyb2xsQm9hcmRDYWxsYmFjaygpIDogbnVsbH1cbiAgICA+XG4gICAgICB7Wy4uLm5ldyBBcnJheShkaW1lbnNpb25zLnZlcnRpY2FsRGltZW5zaW9uKV0ubWFwKChfLCByb3dJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPSdzd2VlcC1yb3cnPlxuICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKV0ubWFwKChfLCBzcXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyVGlsZTogbnVtYmVyID0gKChyb3dJbmRleCAqIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbikgKyBzcXJJbmRleCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNxdWFyZSBrZXk9e3NxckluZGV4fSBjdXJyVGlsZT17Y3VyclRpbGV9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXYgPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vYm9hcmRSZWR1Y2Vycyc7XG5pbXBvcnQgeyBDb2xvcnMsIEZsYWdzUmVtYWluaW5nLCBTdXJwcmlzZWQsIE51bWJlcnMsIE1pbmVBcnIsIEZsaXBwZXJzLCBDb2xvckRlbGF5LCBTY3JvbGxCb2FyZCB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZXMge1xuICBzY3JvbGxCb2FyZDogU2Nyb2xsQm9hcmQ7XG4gIGNvbG9yRGVsYXk6IENvbG9yRGVsYXk7XG4gIGZsaXBwZXJzOiBGbGlwcGVycztcbiAgbWluZUFycjogTWluZUFycjtcbiAgbnVtYmVyczogTnVtYmVycztcbiAgc3VycHJpc2VkOiBTdXJwcmlzZWQ7XG4gIGZsYWdzUmVtYWluaW5nOiBGbGFnc1JlbWFpbmluZztcbiAgY29sb3JzOiBDb2xvcnM7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlVHlwZXMgPSB7XG4gIHNjcm9sbEJvYXJkOiBmYWxzZSxcbiAgY29sb3JEZWxheTogMTAwMCxcbiAgZmxpcHBlcnM6IFtdLFxuICBtaW5lQXJyOiBbXSxcbiAgbnVtYmVyczoge30sXG4gIHN1cnByaXNlZDogZmFsc2UsXG4gIGZsYWdzUmVtYWluaW5nOiAxMCxcbiAgY29sb3JzOiBbJ2JsdWUtbnVtJywgJ2dyZWVuLW51bScsICdyZWQtbnVtJywgJ2dvbGQtbnVtJywgJ3B1cnBsZS1udW0nLCAnbWFyb29uLW51bScsICd0dXJxdW9pc2UtbnVtJywgJ2dyZXktbnVtJ11cbn07XG5cbmNvbnN0IEJvYXJkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8W0lTdGF0ZVR5cGVzLCBSZWFjdC5EaXNwYXRjaDxhbnk+XT4oW2luaXRpYWxTdGF0ZSwgKCkgPT4geyB9XSk7XG5cblxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXVxufVxuXG5jb25zdCBCb2FyZFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvYXJkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0JvYXJkQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUJvYXJkQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQm9hcmRDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50UHJvdmlkZXInKTtcbiAgfTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cblxuXG5cbmV4cG9ydCB7IHVzZUJvYXJkQ29udGV4dCwgQm9hcmRTdG9yZVByb3ZpZGVyIH07IiwiaW1wb3J0IHtHZW5lcmF0ZU51bWJlcnNGdW5jLCBJdGVyYXRlQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuXG5jb25zdCBpdGVyYXRlQ29sb3JzOiBJdGVyYXRlQ29sb3JzRnVuYyA9IChleGlzdGluZ0NvbG9ycykgPT4ge1xuICBjb25zdCBsYXN0Q29sb3IgPSBleGlzdGluZ0NvbG9ycy5wb3AoKTtcbiAgZXhpc3RpbmdDb2xvcnMudW5zaGlmdChsYXN0Q29sb3IpO1xuICByZXR1cm4gWy4uLmV4aXN0aW5nQ29sb3JzXTtcbn07XG5cblxudHlwZSBNb2R1bGF0ZUNvbG9yRGVsYXlGdW5jID0gKGV4aXN0aW5nOiBudW1iZXIsIG5ld0NvbG9yRGVsYXk6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5jb25zdCBtb2R1bGF0ZUNvbG9yRGVsYXk6IE1vZHVsYXRlQ29sb3JEZWxheUZ1bmMgPSAoZXhpc3RpbmcsIG5ld0NvbG9yRGVsYXkpID0+IHtcbiAgaWYgKChleGlzdGluZyArIG5ld0NvbG9yRGVsYXkpID4gMjUpIHtcbiAgICAvLyBJZiBJbmNyZWFzaW5nIHRoZSBDb2xvciBEZWxheS0gZG8gc28gYXQgYSByYXRlIG9mIDEsIG90aGVyd2lzZSB3aGVuIGRlY3JlYXNpbmcgZG8gc28gYXQgMi41IHJhdGUtIGZ1bGwgcmF0ZSBpcyBsZXNzIGVuam95YWJsZVxuICAgIG5ld0NvbG9yRGVsYXkgPSBuZXdDb2xvckRlbGF5IDwgMCAmJiBleGlzdGluZyA8IDIwMCA/IG5ld0NvbG9yRGVsYXkgLyA1XG4gICAgICA6IG5ld0NvbG9yRGVsYXkgPCAwID8gbmV3Q29sb3JEZWxheSAvIDIuNVxuICAgICAgICA6IDFcbiAgICByZXR1cm4gZXhpc3RpbmcgKyBuZXdDb2xvckRlbGF5O1xuICB9XG4gIHJldHVybiBleGlzdGluZztcbn07XG5cblxudHlwZSBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIG1pbmVzOiBudW1iZXJbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbEZsaXBwZXJzOiBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgbWluZXMpID0+IHtcbiAgZXhpc3RpbmdGbGlwcGVycyA9IGV4aXN0aW5nRmxpcHBlcnMubWFwKChmbGlwcGVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChmbGlwcGVyID09PSAnZmxhZycgfHwgbWluZXM/LmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgcmV0dXJuICdmbGFnJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxpcHBlZFRpbGU6IG51bWJlcikgPT4gKHN0cmluZyB8Ym9vbGVhbilbXTtcblxuY29uc3QgZmxpcE5vcm1hbFRpbGU6IEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzLCBmbGlwcGVkVGlsZSkgPT4ge1xuICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGlwcGVkVGlsZSwgMSwgdHJ1ZSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBSZWN1cnNlZFRpbGVzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgcmVjdXJzZWRUaWxlczogbnVtYmVyW10pID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCBmbGlwUmVjdXJzZWRUaWxlczogRmxpcFJlY3Vyc2VkVGlsZXNGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnMsIHJlY3Vyc2VkVGlsZXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWN1cnNlZFRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZXhpc3RpbmdGbGlwcGVycy5zcGxpY2UocmVjdXJzZWRUaWxlc1tpXSwgMSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5leGlzdGluZ0ZsaXBwZXJzXTtcbn07XG5cbnR5cGUgUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbERlYWRGbGlwcGVyczogUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzKSA9PiB7XG4gIGV4aXN0aW5nRmxpcHBlcnMgPSBleGlzdGluZ0ZsaXBwZXJzLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiAnZGVhZCdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KVxuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdXG59O1xuXG50eXBlIFNldEZsYWdGbGlwcGVkRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxhZ0ZsaXBwZWQ6IG51bWJlcikgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHNldEZsYWdGbGlwcGVkOiBTZXRGbGFnRmxpcHBlZEZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgZmxhZ0ZsaXBwZWQpID0+IHtcbiAgaWYgKGV4aXN0aW5nRmxpcHBlcnNbZmxhZ0ZsaXBwZWRdID09PSAnZmxhZycpIHtcbiAgICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGFnRmxpcHBlZCwgMSwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGV4aXN0aW5nRmxpcHBlcnMuc3BsaWNlKGZsYWdGbGlwcGVkLCAxLCAnZmxhZycpO1xuICB9XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEdlbmVyYXRlTWluZXNGdW5jID0gKGRpbWVuc2lvbnM6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyLCBob3Jpem9udGFsRGltZW5zaW9uOiBudW1iZXIgfSkgPT4gbnVtYmVyW107XG5cbmNvbnN0IGdlbmVyYXRlTWluZXM6IEdlbmVyYXRlTWluZXNGdW5jID0gKHsgbnVtYmVyT2ZNaW5lcywgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSkgPT4ge1xuICBsZXQgZ2VuZXJhdGVkTWluZXM6IG51bWJlcltdID0gW107XG4gIHdoaWxlIChnZW5lcmF0ZWRNaW5lcy5sZW5ndGggPCBudW1iZXJPZk1pbmVzKSB7XG4gICAgY29uc3QgbWluZUNhbmlkYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikpO1xuICAgIGlmICghZ2VuZXJhdGVkTWluZXMuaW5jbHVkZXMobWluZUNhbmlkYXRlKSkge1xuICAgICAgZ2VuZXJhdGVkTWluZXMucHVzaChtaW5lQ2FuaWRhdGUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGdlbmVyYXRlZE1pbmVzO1xufTtcblxuXG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyczogR2VuZXJhdGVOdW1iZXJzRnVuYyA9ICh7IG1pbmVBcnIsIHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0pID0+IHtcbiAgbGV0IGJvYXJkID0gWy4uLkFycmF5KHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikua2V5cygpXTtcbiAgbGV0IG51bUJvYXJkID0ge307XG5cbiAgbWluZUFycj8uZm9yRWFjaCgobWluZSwgXywgbWluZXMpID0+IHtcbiAgICAvLyBOdW1iZXIgaXMgVG9wIExlZnQgRGlhZ29uYWxcbiAgICBsZXQgdExEID0gaG9yaXpvbnRhbERpbWVuc2lvbiArIDE7XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0TEQpICYmICgoKG1pbmUgLSB0TEQpICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIHRMRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdExEXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdExEXSA9IG51bUJvYXJkW21pbmUgLSB0TERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0TERdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgaXMgQWJvdmVcbiAgICBjb25zdCB0RCA9IGhvcml6b250YWxEaW1lbnNpb247XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0RCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0RCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSBudW1Cb2FyZFttaW5lIC0gdERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vTnVtYmVyIGlzIFRvcCBSaWdodCBEaWFnb25hbFxuICAgIGNvbnN0IHRSRCA9IGhvcml6b250YWxEaW1lbnNpb24gLSAxO1xuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gdFJEKSAmJiAoKG1pbmUgLSB0UkQpICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0UkQpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIHRSRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIHRSRF0gPSBudW1Cb2FyZFttaW5lIC0gdFJEXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdFJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTnVtYmVyIHRvIHRoZSByaWdodFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lICsgMSkgJiYgKChtaW5lICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSArIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyAxXSA9IG51bUJvYXJkW21pbmUgKyAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCb3R0b20gUmlnaHQgRGlhZ29uYWxcbiAgICBjb25zdCBiUkQgPSBob3Jpem9udGFsRGltZW5zaW9uICsgMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJSRCkgJiYgKChtaW5lICsgYlJEKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYlJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiUkRdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiUkRdID0gbnVtQm9hcmRbbWluZSArIGJSRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJSRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCZWxvd1xuICAgIGNvbnN0IGJEID0gaG9yaXpvbnRhbERpbWVuc2lvbjtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJEKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIGJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IG51bUJvYXJkW21pbmUgKyBiRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9OdW1iZXIgaXMgQm90dG9tIExlZnQgRGlhZ29uYWxcbiAgICBjb25zdCBiTEQgPSBob3Jpem9udGFsRGltZW5zaW9uIC0gMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJMRCkgJiYgKCgobWluZSArIGJMRCkgKyAxKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYkxEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiTERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiTERdID0gbnVtQm9hcmRbbWluZSArIGJMRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJMRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciB0byB0aGUgbGVmdFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gMSkgJiYgKG1pbmUgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSAxXSA9IG51bUJvYXJkW21pbmUgLSAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICB9KVxuICByZXR1cm4gbnVtQm9hcmQ7XG59O1xuXG5cbmV4cG9ydCB7XG4gIC8vIENvbG9yc1xuICBpdGVyYXRlQ29sb3JzLFxuICBtb2R1bGF0ZUNvbG9yRGVsYXksXG4gIC8vIEZsaXBwZXJzXG4gIHJldmVhbEZsaXBwZXJzLFxuICBmbGlwTm9ybWFsVGlsZSxcbiAgZmxpcFJlY3Vyc2VkVGlsZXMsXG4gIHJldmVhbERlYWRGbGlwcGVycyxcbiAgc2V0RmxhZ0ZsaXBwZWQsXG4gIC8vIE1pbmVzXG4gIGdlbmVyYXRlTWluZXMsXG4gIC8vIE51bWJlcnNcbiAgZ2VuZXJhdGVOdW1iZXJzLFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgaXRlcmF0ZUNvbG9ycyxcbiAgbW9kdWxhdGVDb2xvckRlbGF5LFxuICByZXZlYWxGbGlwcGVycyxcbiAgZmxpcE5vcm1hbFRpbGUsXG4gIGZsaXBSZWN1cnNlZFRpbGVzLFxuICByZXZlYWxEZWFkRmxpcHBlcnMsXG4gIHNldEZsYWdGbGlwcGVkLFxuICBnZW5lcmF0ZU1pbmVzLFxuICBnZW5lcmF0ZU51bWJlcnNcbn0gZnJvbSAnLi9ib2FyZEFjdGlvbnMnO1xuaW1wb3J0IHtGbGlwcGVyc0Z1bmMsIFNjcm9sbEJvYXJkRnVuYywgQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sb3JEZWxheUZ1bmNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3Qgc2Nyb2xsQm9hcmQ6IFNjcm9sbEJvYXJkRnVuYyA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPR0dMRSBTQ1JPTExCT0FSRCc6XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuY29uc3QgY29sb3JEZWxheTogQ29sb3JEZWxheUZ1bmMgPSAoc3RhdGUgPSAxMDAwLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJVTlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSBcIlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIDEwMDA7XG4gICAgY2FzZSBcIk1PRFVMQVRFIENPTE9SIERFTEFZXCI6XG4gICAgICByZXR1cm4gbW9kdWxhdGVDb2xvckRlbGF5KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5uZXdDb2xvckRlbGF5KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IGNvbG9yczogQ29sb3JzRnVuYyA9IChzdGF0ZSA9IFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiSVRFUkFURSBDT0xPUlNcIjpcbiAgICAgIHJldHVybiBpdGVyYXRlQ29sb3JzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgICAgcmV0dXJuIFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXTtcbiAgICBjYXNlIFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGZsaXBwZXJzOiBGbGlwcGVyc0Z1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlJFU0VUIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBcIlNFVCBGTEFHIEZMSVBQRURcIjpcbiAgICAgIHJldHVybiBzZXRGbGFnRmxpcHBlZChzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGFnRmxpcHBlZCk7XG4gICAgY2FzZSBcIkZMSVAgTk9STUFMIFRJTEVcIjpcbiAgICAgIHJldHVybiBmbGlwTm9ybWFsVGlsZShzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGlwcGVkVGlsZSk7XG4gICAgY2FzZSBcIkZMSVAgUkVDVVJTRUQgVElMRVNcIjpcbiAgICAgIHJldHVybiBmbGlwUmVjdXJzZWRUaWxlcyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBcIlJFVkVBTCBERUFEIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gcmV2ZWFsRGVhZEZsaXBwZXJzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJSRVZFQUwgRkxJUFBFUlNcIjpcbiAgICAgIHJldHVybiByZXZlYWxGbGlwcGVycyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5taW5lQXJyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxudHlwZSBNaW5lc0Z1bmMgPSAoc3RhdGU6IFtdIHwgbnVtYmVyW10sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCBtaW5lczogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IG51bWJlcltdO1xuXG4vLyBwcmVsb2FkZWQgZGVmYXVsdCBzdGF0ZSBwcmV2ZW50cyBhbiBhdXRvbWF0aWMgd2luIGJ5IGRlZmF1bHRcbmNvbnN0IG1pbmVBcnI6IE1pbmVzRnVuYyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJHRU5FUkFURSBNSU5FU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTWluZXMoYWN0aW9uLnBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxudHlwZSBOdW1iZXJzRnVuYyA9IChzdGF0ZToge30sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbWluZUFycjogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IHt9O1xuY29uc3QgbnVtYmVyczogTnVtYmVyc0Z1bmMgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiR0VORVJBVEUgTlVNQkVSU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTnVtYmVycyhhY3Rpb24ucGF5bG9hZClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG5cbnR5cGUgU3VycHJpc2VkRnVuYyA9IChzdGF0ZTogYm9vbGVhbiB8IHN0cmluZywgYWN0aW9uOiB7IHR5cGU6IHN0cmluZyB9KSA9PiBib29sZWFuIHwgc3RyaW5nO1xuXG5jb25zdCBzdXJwcmlzZWQ6IFN1cnByaXNlZEZ1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU1VSUFJJU0VEIFNNSUxFUyc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdSRVNFVCBTTUlMRVMnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgJ0RFQUQgU01JTEVTJzpcbiAgICAgIHJldHVybiAnZGVhZCc7XG4gICAgY2FzZSAnVklDVE9SWSBTTUlMRVMnOlxuICAgICAgcmV0dXJuICd2aWN0b3J5JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG50eXBlIEZsYWdzUmVtYWluaW5nRnVuYyA9IChzdGF0ZTogbnVtYmVyLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiBudW1iZXIgfSkgPT4gbnVtYmVyO1xuXG5jb25zdCBmbGFnc1JlbWFpbmluZzogRmxhZ3NSZW1haW5pbmdGdW5jID0gKHN0YXRlID0gMTAsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkRFQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgY2FzZSBcIklOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBcIlNFVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIENvbWJpbmVSZWR1Y2Vyc0Z1bmMgPSAoc2xpY2VzOiBhbnkpID0+IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4gUmVhY3QuUmVkdWNlclN0YXRlV2l0aG91dEFjdGlvbjxhbnk+XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyczogQ29tYmluZVJlZHVjZXJzRnVuYyA9IChzbGljZXMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PiBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiAoe1xuICAuLi5hY2MsXG4gIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbn0pLFxuICBzdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmxpcHBlcnMsXG4gIG1pbmVBcnIsXG4gIG51bWJlcnMsXG4gIHNjcm9sbEJvYXJkLFxuICBjb2xvcnMsXG4gIGNvbG9yRGVsYXksXG4gIHN1cnByaXNlZCxcbiAgZmxhZ3NSZW1haW5pbmdcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q3VyclRpbGV9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuaW1wb3J0IHsgZ2VuTnVtYmVyQ2xhc3NOYW1lcywgZ2VuRW1wdHlDbGFzc05hbWVzLCBnZW5NaW5lQ2xhc3NOYW1lcywgaGFuZGxlQ2xpY2ssIGdlbmVyYXRlTG9naW5NZXNzYWdlIH0gZnJvbSAnLi9zcXVhcmVVdGlscyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgJy4vc3dlZXBzcXVhcmVzdHlsZXMuc2Nzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGN1cnJUaWxlOiBDdXJyVGlsZVxufTtcblxuY29uc3QgU3F1YXJlOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlIH0gPSBwcm9wcztcbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sIGRlZmluZWRVc2VyTmFtZSwgZGltZW5zaW9ucywgdGltZXJPbiB9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgW3sgY29sb3JzLCBtaW5lQXJyLCBmbGlwcGVycywgbnVtYmVycyB9LCBib2FyZERpc3BhdGNoXSA9IHVzZUJvYXJkQ29udGV4dCgpO1xuXG5cbiAgY29uc3QgdGlsZUlzQU1pbmUgPSBtaW5lQXJyLmluY2x1ZGVzKGN1cnJUaWxlKSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gJiYgZmxpcHBlcnNbY3VyclRpbGVdICE9PSAnZmxhZyc7XG5cbiAgY29uc3QgdGlsZUlzQU51bWJlciA9IGZsaXBwZXJzW2N1cnJUaWxlXSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gIT09ICdmbGFnJyAmJiBudW1iZXJzW2N1cnJUaWxlXTtcblxuICBjb25zdCB1c2VyTm90TG9nZ2VkSW4gPSAhZGVmaW5lZFVzZXJOYW1lO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS10ZXN0aWQ9e2B0ZXN0LSR7Y3VyclRpbGV9YH1cblxuICAgICAgb25DbGljaz17XG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgLy8gSWYgdGlsZSBpcyBhIGJvbWIuLi5cbiAgICAgICAgICBpZiAobWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkpIHtcbiAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ0ZSRUVaRSBUSU1FUiBTVEFURSBERUFEJyB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICAgIGluZGljYXRvcjogJ2RlYWQnLFxuICAgICAgICAgICAgICBib2FyZERpc3BhdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIElzIGEgTnVtYmVyIG9yIGEgRW1wdHkgU3F1YXJlXG4gICAgICAgICAgLy8gSWYgYW4gZW1wdHkgc3BhY2UgaXMgcmV2ZWFsZWQgdW5kZXIgYSBmbGFnLCBpbmNyZW1lbnQgcmVtYWluaW5nIGZsYWdzXG4gICAgICAgICAgaWYgKGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnKSBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0lOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIH0pO1xuICAgICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBhbmQgcmV2ZWFsIHRoZSB0aWxlXG4gICAgICAgICAgaWYgKCF0aW1lck9uKSB7XG4gICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTV0lUQ0ggVElNRVIgT04nIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwge1xuICAgICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgICBtaW5lQXJyLFxuICAgICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgICAgYm9hcmREaXNwYXRjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBOb3JtYWwgUGxheVxuICAgICAgICAgIHJldHVybiBoYW5kbGVDbGljayhlLCB7XG4gICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgIG51bWJlcnMsXG4gICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgIGluZGljYXRvcjogbnVsbCxcbiAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdXNlRG93bj17XG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoIWZsaXBwZXJzW2N1cnJUaWxlXSkgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTVVJQUklTRUQgU01JTEVTJyB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91c2VVcD17XG4gICAgICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgLy8gTWluZS0gRGVhdGggU2VxdWVuY2UgWERcbiAgICAgICAgICBpZiAobWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkgJiYgZS5idXR0b24gPT09IDAgJiYgIWUuY3RybEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnREVBRCBTTUlMRVMnIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQgU01JTEVTJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkNvbnRleHRNZW51PXtcbiAgICAgICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAvL0lmIG51bWJlciBpcyBhbHJlYWR5IHJldmVhbGVkLSBwcmV2ZW50IHVzZXIgZnJvbSBwdXR0aW5nIGEgZmxhZyBvbiBpdFxuICAgICAgICAgIGlmIChmbGlwcGVyc1tjdXJyVGlsZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBmbGlwcGVyc1tjdXJyVGlsZV0gPT09IGZhbHNlID8gJ0RFQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIDogJ0lOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkcnIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgbWluZUFycixcbiAgICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gUHJldmVudCBjb250ZXh0IG1lbnUgaWYgdXNlciBhY2NpZGVudGFsbHkgcHJlc3NlcyBjb250ZXh0IG1lbnVcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkgPyBnZW5NaW5lQ2xhc3NOYW1lcyh7XG4gICAgICAgICAgdGltZXJPbixcbiAgICAgICAgICBza2lsbExldmVsLFxuICAgICAgICAgIGZsaXBwZXJzLFxuICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICBjdXJyVGlsZVxuICAgICAgICB9KVxuICAgICAgICAgIDogbnVtYmVyc1tjdXJyVGlsZV0gPyBnZW5OdW1iZXJDbGFzc05hbWVzKHtcbiAgICAgICAgICAgIHNraWxsTGV2ZWwsXG4gICAgICAgICAgICBkZWZpbmVkVXNlck5hbWUsXG4gICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgZmxpcHBlcnMsXG4gICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgY3VyclRpbGVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBnZW5FbXB0eUNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAvLyBHbG9iYWxcbiAgICAgICAgICAgICAgc2tpbGxMZXZlbCxcbiAgICAgICAgICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgICAvLyBCb2FyZCAmIHBhc3NlZCBpblxuICAgICAgICAgICAgICBmbGlwcGVycyxcbiAgICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgICBjdXJyVGlsZVxuICAgICAgICAgICAgfSlcbiAgICAgIH1cbiAgICA+XG4gICAgICB7XG4gICAgICAgIHVzZXJOb3RMb2dnZWRJbiA/XG4gICAgICAgICAgZ2VuZXJhdGVMb2dpbk1lc3NhZ2Uoe1xuICAgICAgICAgICAgY3VyclRpbGUsXG4gICAgICAgICAgICBza2lsbExldmVsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHRpbGVJc0FOdW1iZXIgPyBudW1iZXJzW2N1cnJUaWxlXVxuICAgICAgICAgICAgOiB0aWxlSXNBTWluZSA/ICcqJ1xuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICA8L2RpdiA+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiaW1wb3J0IHsgR2VuTnVtYmVyQ2xhc3NOYW1lc0Z1bmMsIEdlbmVyYXRlQ29sb3JzRnVuYywgR2VuRW1wdHlDbGFzc05hbWVzRnVuYywgR2VuTWluZUNsYXNzTmFtZXNGdW5jLCBHZW5lcmF0ZUxvZ2luTWVzc2FnZUZ1bmMsIENsYXNzTmFtZUFyciwgSGFuZGxlQ2xpY2tGdW5jIH0gZnJvbSAnTWluZXN3ZWVwZXJUeXBlcyc7XG5cblxuY29uc3QgZ2VuZXJhdGVMb2dpbk1lc3NhZ2U6IEdlbmVyYXRlTG9naW5NZXNzYWdlRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIHNraWxsTGV2ZWwgfSA9IGFyZ3M7XG5cbiAgY29uc3QgdCA9IGN1cnJUaWxlO1xuICBjb25zdCBiZWdpbm5lck1lc3NhZ2VzID0geyAnMSc6ICdQbGVhc2UnLCAnMic6ICdMb2dpbicsICczJzogJ0ZpcnN0JyB9O1xuICBjb25zdCBpbnRlcm1lZGlhdGVNZXNzYWdlcyA9IHsgJzInOiAnUGxlYXNlJywgJzQnOiAnTG9naW4nLCAnNic6ICdGaXJzdCcgfTtcbiAgY29uc3QgYWR2YW5jZWRNZXNzYWdlcyA9IHsgJzInOiAnUGxlYXNlJywgJzMnOiAnTG9naW4nLCAnNCc6ICdGaXJzdCcgfTtcblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2JlZ2lubmVyJyAmJiB0IDwgODEpIHtcbiAgICByZXR1cm4gYmVnaW5uZXJNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMTApKV0/LnN1YnN0cmluZyh0ICUgMTAsICh0ICUgMTApICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIGlmIChza2lsbExldmVsID09PSAnaW50ZXJtZWRpYXRlJyAmJiB0IDwgMTQ0KSB7XG4gICAgcmV0dXJuIGludGVybWVkaWF0ZU1lc3NhZ2VzW1N0cmluZyhNYXRoLmZsb29yKHQgLyAxNykpXT8uc3Vic3RyaW5nKHQgJSAxNywgKHQgJSAxNykgKyAxKSB8fCAnKic7XG4gIH07XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdhZHZhbmNlZCcgJiYgdCA8IDI0MCkge1xuICAgIHJldHVybiBhZHZhbmNlZE1lc3NhZ2VzW1N0cmluZyhNYXRoLmZsb29yKHQgLyAzMSkpXT8uc3Vic3RyaW5nKHQgJSAzMy4xNSwgKHQgJSAzMy4xNSkgKyAxKSB8fCAnKic7XG4gIH07XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cblxuY29uc3QgZ2VuZXJhdGVDb2xvcnM6IEdlbmVyYXRlQ29sb3JzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIGNvbG9ycywgc2tpbGxMZXZlbCB9ID0gYXJncztcbiAgY29uc3QgdCA9IGN1cnJUaWxlO1xuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2JlZ2lubmVyJykge1xuICAgIGlmICgodCA8PSA5KSB8fCAodCA+PSAxNiAmJiB0IDw9IDE5KSB8fCAodCA+PSAyNSAmJiB0IDw9IDI5KSB8fCAodCA+PSAzNSkpIHtcbiAgICAgIHJldHVybiBjb2xvcnNbKHQgKyAoTWF0aC5mbG9vcih0IC8gOCkpKSAlIDldXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdpbnRlcm1lZGlhdGUnKSB7XG4gICAgaWYgKCh0IDw9IDMzKSB8fCAodCA+PSA0MCAmJiB0IDw9IDY2KSB8fCAodCA+PSA3MyAmJiB0IDw9IDk5KSB8fCAodCA+PSAxMDcgJiYgdCA8PSAxNDQpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDE2KSkpICUgOF1cbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2FkdmFuY2VkJykge1xuICAgIGlmICgodCA8PSA2NikgfHwgKHQgPj0gNzMgJiYgdCA8PSA5OSkgfHwgKHQgPj0gMTA1ICYmIHQgPD0gMTMyKSB8fCAodCA+PSAxMzggJiYgdCA8PSAyNDEpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDMwKSkpICUgOF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZW5OdW1iZXJDbGFzc05hbWVzOiBHZW5OdW1iZXJDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgdGltZXJPbiwgZGVmaW5lZFVzZXJOYW1lLCBza2lsbExldmVsLCBjdXJyVGlsZSwgbnVtYmVycywgZmxpcHBlcnMsIGNvbG9ycyB9ID0gYXJncztcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXTtcblxuICBpZiAoY29sb3JzICE9PSBudWxsKSB7XG4gICAgY2xhc3NOYW1lQXJyLnB1c2goZ2VuZXJhdGVDb2xvcnMoeyBjdXJyVGlsZSwgY29sb3JzLCBza2lsbExldmVsIH0pLCAnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbiAgfTtcblxuICBjb25zdCBudW1iZXJUaWxlT25WaWN0b3J5RGVhZE9yTm90TG9nZ2VkSW4gPSAodGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIERFQUQnIHx8ICFkZWZpbmVkVXNlck5hbWUpO1xuXG4gIGNvbnN0IGZsYWdPbk51bWJlclRpbGVHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIG51bWJlclRpbGVPblZpY3RvcnlEZWFkT3JOb3RMb2dnZWRJbiA/ICdkaXNhYmxlZCdcbiAgICAgIDogZmxhZ09uTnVtYmVyVGlsZUdhbWVQbGF5ID8gJ2ZsYWcnXG4gICAgICAgIDogJ251bWJlcidcbiAgKTtcblxuICAvLyBDb2xvciBEZXRlcm1pbmF0aW9uXG4gIGNvbnN0IGN1cnJOdW06IG51bWJlciA9IG51bWJlcnNbY3VyclRpbGVdO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIGN1cnJOdW0gPT09IDEgPyAnYmx1ZS1udW0nXG4gICAgICA6IGN1cnJOdW0gPT09IDIgPyAnZ3JlZW4tbnVtJ1xuICAgICAgICA6IGN1cnJOdW0gPT09IDMgPyAncmVkLW51bSdcbiAgICAgICAgICA6IGN1cnJOdW0gPT09IDQgPyAncHVycGxlLW51bSdcbiAgICAgICAgICAgIDogY3Vyck51bSA9PT0gNSA/ICdtYXJvb24tbnVtJ1xuICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDYgPyAndHVycXVvaXNlLW51bSdcbiAgICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDcgPyAnYmxhY2stbnVtJ1xuICAgICAgICAgICAgICAgICAgOiBjdXJyTnVtID09PSA4ID8gJ2dyZXktbnVtJ1xuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IGdlbkVtcHR5Q2xhc3NOYW1lczogR2VuRW1wdHlDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgc2tpbGxMZXZlbCwgZGVmaW5lZFVzZXJOYW1lLCB0aW1lck9uLCBjdXJyVGlsZSwgY29sb3JzLCBmbGlwcGVycyB9ID0gYXJnc1xuICBsZXQgY2xhc3NOYW1lQXJyOiBDbGFzc05hbWVBcnIgPSBbJ3N3ZWVwLXNxdWFyZSddO1xuXG4gIGlmIChjb2xvcnMgIT09IG51bGwpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IGVtcHR5VGlsZU9uVmljdG9yeU9yRGVhZCA9ICh0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCcpO1xuICBjb25zdCBlbXB0eVRpbGVPbk5vdExvZ2dlZEluID0gIWRlZmluZWRVc2VyTmFtZTtcbiAgY29uc3QgZmxhZ09uRW1wdHlUaWxlR2FtZXBsYXkgPSBmbGlwcGVyc1tjdXJyVGlsZV0gPT09ICdmbGFnJztcbiAgY29uc3QgZW1wdHlUaWxlUmV2ZWFsZWRHYW1lcGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gdHJ1ZTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBlbXB0eVRpbGVPblZpY3RvcnlPckRlYWQgPyAnZGlzYWJsZWQgZGFyay1zcXVhcmUnXG4gICAgICA6IGVtcHR5VGlsZU9uTm90TG9nZ2VkSW4gPyAnZGlzYWJsZWQnXG4gICAgICAgIDogZmxhZ09uRW1wdHlUaWxlR2FtZXBsYXkgPyAnZmxhZydcbiAgICAgICAgICA6IGVtcHR5VGlsZVJldmVhbGVkR2FtZXBsYXkgPyAnZGFyay1zcXVhcmUnXG4gICAgICAgICAgICA6IG51bGxcbiAgKTtcbiAgcmV0dXJuIGNsYXNzTmFtZUFyci5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBnZW5NaW5lQ2xhc3NOYW1lczogR2VuTWluZUNsYXNzTmFtZXNGdW5jID0gKGFyZ3MpID0+IHtcbiAgY29uc3QgeyB0aW1lck9uLCBza2lsbExldmVsLCBjdXJyVGlsZSwgY29sb3JzLCBmbGlwcGVycyB9ID0gYXJncztcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXVxuXG4gIGlmIChjb2xvcnMgIT09IG51bGwpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IGZsYWdPbk1pbmVUaWxlQWZ0ZXJWaWN0b3J5ID0gKHRpbWVyT24gPT09ICdWSUNUT1JZJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIFdJTicpICYmIGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZUFmdGVyRGVhZCA9IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCc7XG4gIGNvbnN0IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZU9uRGVhZCA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gdHJ1ZTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBmbGFnT25NaW5lVGlsZUFmdGVyVmljdG9yeSA/ICdmbGFnIGRpc2FibGVkJ1xuICAgICAgOiBtaW5lVGlsZUFmdGVyRGVhZCA/ICdkaXNhYmxlZCBtaW5lJ1xuICAgICAgICA6IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA/ICdmbGFnJ1xuICAgICAgICAgIDogbWluZVRpbGVPbkRlYWQgPyAnbWluZSdcbiAgICAgICAgICAgIDogbnVsbFxuICApO1xuXG4gIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xufTtcblxuXG50eXBlIFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzOiB7IGN1cnJUaWxlOiBudW1iZXIsIGRpbWVuc2lvbnM6IHsgaG9yaXpvbnRhbERpbWVuc2lvbjogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyIH0sIG51bWJlcnM6IHt9LCBtaW5lQXJyOiBudW1iZXJbXSwgcmVzdWx0QXJyOiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXSB9KSA9PiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXTtcblxuY29uc3QgdGlsZVJlY3Vyc2U6IFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9ID0gYXJnc1xuICByZXN1bHRBcnIucHVzaChjdXJyVGlsZSlcbiAgdHlwZSBFdmFsVGVzdEZ1bmMgPSAoY3VyclRpbGU6IG51bWJlcikgPT4gbnVtYmVyO1xuXG4gIGNvbnN0IGV2YWxVOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgLSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsUjogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlICsgMSk7XG4gIGNvbnN0IGV2YWxEOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgKyBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsTDogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlIC0gMSk7XG5cbiAgdHlwZSBUZXN0Q3VyclRpbGVGdW5jID0gKGN1cnJUaWxlOiBudW1iZXIsIHRlc3RGdW5jOiBGdW5jdGlvbikgPT4gYm9vbGVhbjtcblxuICBjb25zdCB0ZXN0Q3VyclRpbGU6IFRlc3RDdXJyVGlsZUZ1bmMgPSAoY3VyclRpbGUsIHRlc3RGdW5jKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFudW1iZXJzW3Rlc3RGdW5jKGN1cnJUaWxlKV1cbiAgICAgICYmICFtaW5lQXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgIC8vICYmIHByZXZGbGlwcGVyc1t0ZXN0RnVuYyh0aWxlKV0gPT09IGZhbHNlXG4gICAgICAmJiAhcmVzdWx0QXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgICYmIHRlc3RGdW5jKGN1cnJUaWxlKSA+PSAwXG4gICAgICAmJiB0ZXN0RnVuYyhjdXJyVGlsZSkgPD0gKGRpbWVuc2lvbnMudmVydGljYWxEaW1lbnNpb24gKiBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pXG4gICAgKVxuICB9XG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBVcFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxVKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsVShjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBSaWdodFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxSKVxuICAgICYmIChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDAgJiYgY3VyclRpbGUgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDApKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsUihjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBEb3duXG4gIC8vICoqKioqKioqKioqXG5cbiAgaWYgKFxuICAgIHRlc3RDdXJyVGlsZShjdXJyVGlsZSwgZXZhbEQpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxEKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pXG4gIH1cblxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgTGVmdFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxMKVxuICAgICYmICgoZXZhbEwoY3VyclRpbGUgKyAxKSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsTChjdXJyVGlsZSArIDEpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uID09PSAwICYmIGV2YWxMKGN1cnJUaWxlKSAlIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbiA9PT0gMCkpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxMKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pO1xuICB9O1xuXG4gIHJldHVybiByZXN1bHRBcnI7XG59O1xuXG5cblxuXG5cbmNvbnN0IGhhbmRsZUNsaWNrOiBIYW5kbGVDbGlja0Z1bmMgPSAoZXZlbnQsIGFyZ3MpID0+IHtcblxuICBjb25zdCB7IGN1cnJUaWxlLCBpbmRpY2F0b3IsIGRpbWVuc2lvbnMsIG1pbmVBcnIsIG51bWJlcnMsIGJvYXJkRGlzcGF0Y2ggfSA9IGFyZ3M7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIChpbmRpY2F0b3IgPT09ICdkZWFkJykgPyBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFVkVBTCBERUFEIEZMSVBQRVJTJyB9KVxuICAgIDogKGV2ZW50LnR5cGUgPT09ICdjb250ZXh0bWVudScpID8gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTRVQgRkxBRyBGTElQUEVEJywgcGF5bG9hZDogeyBmbGFnRmxpcHBlZDogY3VyclRpbGUgfSB9KVxuICAgICAgOiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBpbmRpY2F0b3IgIT09ICdkZWFkJykgJiYgKCFudW1iZXJzW2N1cnJUaWxlXSAmJiAhbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkpID9cbiAgICAgICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ0ZMSVAgUkVDVVJTRUQgVElMRVMnLFxuICAgICAgICAgIHBheWxvYWQ6IHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGN1cnJUaWxlLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnI6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgICAgIDogKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgaW5kaWNhdG9yICE9PSAnZGVhZCcpID9cbiAgICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0ZMSVAgTk9STUFMIFRJTEUnLCBwYXlsb2FkOiB7IGZsaXBwZWRUaWxlOiBjdXJyVGlsZSB9IH0pXG4gICAgICAgICAgOiBudWxsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2VuRW1wdHlDbGFzc05hbWVzLFxuICBnZW5OdW1iZXJDbGFzc05hbWVzLFxuICBnZW5NaW5lQ2xhc3NOYW1lcyxcbiAgZ2VuZXJhdGVMb2dpbk1lc3NhZ2UsXG4gIGhhbmRsZUNsaWNrXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBSZXNldEdhbWVFZmZlY3RPblNtaWxleU9yU2tpbGxGdW5jLFxuICBGcmVlemVDb2xvckRlbGF5RWZmZWN0RnVuYyxcbiAgU3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0RnVuYyxcbiAgR2VuZXJhdGVNaW5lc0VmZmVjdEZ1bmMsXG4gIEZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0RnVuYyxcbiAgUmV2ZWFsRmxpcHBlckVmZmVjdEZ1bmMsXG4gIEdlbmVyYXRlTnVtYmVyRWZmZWN0RnVuYyxcbiAgUmVzZXRPblNraWxsTGV2ZWxDaGFuZ2VFZmZlY3RGdW5jLFxuICBSZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbkZ1bmMsXG59IGZyb20gXCIuLi8uLi8uLi9taW5lc3dlZXBlci10eXBlc1wiO1xuXG5jb25zdCBnZW5lcmF0ZU1pbmVzRWZmZWN0OiBHZW5lcmF0ZU1pbmVzRWZmZWN0RnVuYyA9IChcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiR0VORVJBVEUgTUlORVNcIiwgcGF5bG9hZDogZGltZW5zaW9ucyB9KTtcbiAgfSwgW10pO1xufTtcblxuY29uc3Qgc3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0OiBTdG9wQ29sb3JJdGVyYXRpb25FZmZlY3RGdW5jID0gKFxuICBjb2xvckRlbGF5LFxuICBib2FyZERpc3BhdGNoXG4pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29sb3JEZWxheSA9PT0gbnVsbCkge1xuICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmREaXNwYXRjaCh7dHlwZTogXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIn0pO1xuICAgIH1cbiAgfSwgW2NvbG9yRGVsYXldKTtcbn07XG5cbmNvbnN0IGZyZWV6ZUNvbG9yRGVsYXlFZmZlY3Q6IEZyZWV6ZUNvbG9yRGVsYXlFZmZlY3RGdW5jID0gKFxuICBkZWZpbmVkVXNlck5hbWUsXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZpbmVkVXNlck5hbWUpIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUIENPTE9SIERFTEFZXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goe3R5cGU6IFwiU0VUIENPTE9SIERFTEFZXCJ9KTtcbiAgICB9XG4gIH0sIFtkZWZpbmVkVXNlck5hbWVdKTtcbn07XG5cbi8vIFRoaXMgY29uZGl0aW9uIHJlc2V0cyB0aGUgYm9hcmQgd2hlbiB0aGUgc21pbGV5IGZhY2UgaXMgcHVuY2hlZCBvciB0aGUgc2tpbGxMZXZlbCBpcyBjaGFuZ2VkIGJlY2F1c2UgdGltZXJPbiBpcyBzZXQgdG8gZmFsc2UuIEl0IGFsc28gcmVzZXRzIHRoZSBib2FyZCBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBza2lsbExldmVsIGJlZm9yZSBwbGF5aW5nLCB3aGljaCBpcyBtb3N0IGxpa2VseS5cbmNvbnN0IHJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbDogUmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsRnVuYyA9IChcbiAgdGltZXJPbixcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAvLyBTZXQgYWxsIFRpbGVzIHRvIEZhbHNlIChoaWRkZW4pXG4gICAgICBib2FyZERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJSRVNFVCBGTElQUEVSU1wiLFxuICAgICAgICBwYXlsb2FkOiBBcnJheS5mcm9tKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxlbmd0aDpcbiAgICAgICAgICAgICAgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uICogZGltZW5zaW9ucy52ZXJ0aWNhbERpbWVuc2lvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IGZhbHNlXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIC8vIEdlbmVyYXRlIE1pbmVzXG4gICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJHRU5FUkFURSBNSU5FU1wiLCBwYXlsb2FkOiBkaW1lbnNpb25zIH0pO1xuICAgIH1cbiAgfSwgW3RpbWVyT24sIGRpbWVuc2lvbnNdKTtcbn07XG5cbmNvbnN0IGZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0OiBGcmVlemVTY3JvbGxCb2FyZEVmZmVjdEZ1bmMgPSAoc2Nyb2xsQm9hcmQpID0+IHtcbiAgdHlwZSBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAodGhpczogRG9jdW1lbnQsIGV2OiBXaGVlbEV2ZW50KSA9PiBib29sZWFuO1xuXG4gIGNvbnN0IHByZXZlbnREZWZhdWx0OiBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAoZXYpID0+IHtcbiAgICBldiA9IGV2IHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZXYucHJldmVudERlZmF1bHQpIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbEJvYXJkKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgfSwgW3Njcm9sbEJvYXJkXSk7XG59O1xuXG5jb25zdCByZXZlYWxGbGlwcGVyRWZmZWN0OiBSZXZlYWxGbGlwcGVyRWZmZWN0RnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgbWluZUFyciwgZmxpcHBlcnMsIG51bWJlcnMsIGdsb2JhbERpc3BhdGNoLCBib2FyZERpc3BhdGNoIH0gPSBhcmdzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1pbmVBcnIubGVuZ3RoICYmIGZsaXBwZXJzLmxlbmd0aCAmJiBmbGlwcGVyc1swXSAhPT0gXCJkZWFkXCIpIHtcbiAgICAgIC8vIE9ubHkgc3RvcmUgc2NvcmUgd2hlbiBhbGwgZmxpcHBlcnMgaGF2ZSBiZWVuIGZsaXBwZWQgKGVuZHMgcmVjdXJzaXZlIGxvb3ApXG4gICAgICBpZiAoXG4gICAgICAgIGZsaXBwZXJzLmV2ZXJ5KChmbGlwcGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmbGlwcGVyID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluZUFycltmbGlwcGVyXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZsaXBwZXIgPT09IHRydWUgfHwgZmxpcHBlciA9PT0gXCJmbGFnXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGNsb2NrIGFuZCBpbmRpY2F0ZSBhIHdpblxuICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiRlJFRVpFIFRJTUVSIFNUQVRFIFZJQ1RPUllcIiB9KTtcblxuICAgICAgICAvLyBJZiBhIHZpY3RvcnkgaXMgZGV0ZWN0ZWQgYnkgYWxsIG51bWJlcnMgYmVpbmcgcmV2ZWFsZWQsIGZsaXAgYWxsIHRoZSBlbXB0eSBzcXVhcmVzXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5sZW5ndGggJiZcbiAgICAgICAgT2JqZWN0LmtleXMobnVtYmVycykuZXZlcnkoKG51bSkgPT4gZmxpcHBlcnNbbnVtXSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJSRVZFQUwgRkxJUFBFUlNcIiwgcGF5bG9hZDogeyBtaW5lQXJyIH0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZmxpcHBlcnNdKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyRWZmZWN0OiBHZW5lcmF0ZU51bWJlckVmZmVjdEZ1bmMgPSAoXG4gIG1pbmVBcnIsXG4gIHsgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIC8vV2hlbiBNaW5lcyBhcmUgcmVzZXQsIGdlbmVyYXRlIG51bWJlcnMgYXJvdW5kIHRob3NlIG1pbmVzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkdFTkVSQVRFIE5VTUJFUlNcIixcbiAgICAgIHBheWxvYWQ6IHsgbWluZUFyciwgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgICB9KTtcbiAgfSwgW21pbmVBcnJdKTtcbn07XG5cbmNvbnN0IHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0OiBSZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdEZ1bmMgPSAoXG4gIHNraWxsTGV2ZWwsXG4gIGdsb2JhbERpc3BhdGNoXG4pID0+IHtcbiAgLy8gSWYgU2tpbGwgTGV2ZWwgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIGJvYXJkLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTV0lUQ0ggVElNRVIgT0ZGXCIgfSk7XG4gIH0sIFtza2lsbExldmVsXSk7XG59O1xuXG5jb25zdCByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbjogUmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT25GdW5jID1cbiAgKHRpbWVyT24sIHNraWxsTGV2ZWwsIGJvYXJkRGlzcGF0Y2gpID0+IHtcbiAgICAvLyBUaGlzIHJlc2V0cyB0aGUgZmxhZ3Mgd2hlbmV2ZXIgdGhlIHNraWxsTGV2ZWwgaXMgY2hhbmdlZCBvciBnYW1lIGlzIHJlc2V0XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAgIGJvYXJkRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUIEZMQUdTIFJFTUFJTklOR1wiLFxuICAgICAgICAgIHBheWxvYWQ6XG4gICAgICAgICAgICBza2lsbExldmVsID09PSBcImJlZ2lubmVyXCJcbiAgICAgICAgICAgICAgPyAxMFxuICAgICAgICAgICAgICA6IHNraWxsTGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgPyA0MFxuICAgICAgICAgICAgICA6IDk5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbc2tpbGxMZXZlbCwgdGltZXJPbl0pO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdlbmVyYXRlTWluZXNFZmZlY3QsXG4gIHN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdCxcbiAgZnJlZXplQ29sb3JEZWxheUVmZmVjdCxcbiAgcmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsLFxuICBmcmVlemVTY3JvbGxCb2FyZEVmZmVjdCxcbiAgcmV2ZWFsRmxpcHBlckVmZmVjdCxcbiAgZ2VuZXJhdGVOdW1iZXJFZmZlY3QsXG4gIHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0LFxuICByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbixcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dvdXRNdXRhdGlvbkZuLCBNZURvY3VtZW50IH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmludGVyZmFjZSBMb2dnZWRJblZpZXdQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGxvZ291dDogTG9nb3V0TXV0YXRpb25Gbjtcbn1cblxuY29uc3QgTG9nZ2VkSW5WaWV3OiBSZWFjdC5GQzxMb2dnZWRJblZpZXdQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBob21lU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCI7XG4gIGNvbnN0IHNjb3JlYm9hcmRTZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9zY29yZWJvYXJkXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKGhvbWVTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHsoaG9tZVNlbGVjdGVkICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bsb2dnZWQtaW4tdXNlci10aXRsZWB9PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgTG9nZ2VkIGluIGFzOiB7cHJvcHMudXNlcm5hbWV9e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSkgfHwgPExpbmsgdG89XCIvXCI+TWluZXN3ZWVwZXI8L0xpbms+fVxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChzY29yZWJvYXJkU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBcImhlYWRlci1uYXYtdWwtbGlcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPVwiL3Njb3JlYm9hcmRcIj5IaWdoIFNjb3JlczwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdi11bC1saVwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ291dC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmxvZ291dCh7XG4gICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbTWVEb2N1bWVudF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTG9nb3V0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZWRJblZpZXc7XG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGluaywgdXNlTG9jYXRpb259IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cblxuY29uc3QgTG9nZ2VkT3V0VmlldzogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBsb2dpblNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvbG9naW4nO1xuICBjb25zdCByZWdpc3RlclNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvcmVnaXN0ZXInO1xuICBjb25zdCBzY29yZWJvYXJkU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zY29yZWJvYXJkJ1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChsb2dpblNlbGVjdGVkICYmIGBzZWxlY3RlZC1oZWFkZXIgaGVhZGVyLW5hdi11bC1saWApIHx8XG4gICAgICAgICAgYGhlYWRlci1uYXYtdWwtbGlgXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAocmVnaXN0ZXJTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHNjb3JlYm9hcmRTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPVwiL3Njb3JlYm9hcmRcIj5IaWdoIFNjb3JlczwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZWRPdXRWaWV3OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBNaW5lc3dlZXBlciBmcm9tIFwiVFNDb21wb25lbnRzL01pbmVzd2VlcGVyL01pbmVzd2VlcGVyXCI7XG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSBcIlRTQ29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZFwiO1xuXG5pbXBvcnQgVXNlckxvZ2luRm9ybSBmcm9tIFwiVFNDb21wb25lbnRzL1VzZXJGb3Jtcy9Mb2dpblwiO1xuaW1wb3J0IFVzZXJSZWdpc3RlckZvcm0gZnJvbSBcIlRTQ29tcG9uZW50cy9Vc2VyRm9ybXMvUmVnaXN0ZXJcIjtcbmltcG9ydCBMb2dnZWRJblZpZXcgZnJvbSBcIlRTQ29tcG9uZW50cy9Ib21lL0hlYWRlckludGVyZmFjZXMvTG9nZ2VkSW5WaWV3XCI7XG5pbXBvcnQgTG9nZ2VkT3V0VmlldyBmcm9tIFwiVFNDb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRPdXRWaWV3XCI7XG5cbmltcG9ydCBcIi4vaG9tZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XG5pbXBvcnQgeyB1c2VNZVF1ZXJ5LCB1c2VMb2dvdXRNdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgR2VuZXJpY1Njb3JlIH0gZnJvbSBcIi4uL0xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIlRTU3JjL3B1YmxpYy9HbG9iYWxTdG9yZS9HbG9iYWxTdG9yZVwiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgc3NyVG9wVGltZXM/OiBHZW5lcmljU2NvcmVbXVxufVxuXG5leHBvcnQgY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlTWVRdWVyeSgpO1xuICBjb25zdCBbLGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgW2xvZ291dF0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xuXG4gIGxldCBoZWFkZXJCb2R5ID0gbnVsbDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhPy5tZT8udXNlcm5hbWUpIHtcbiAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnU0VUIERFRklORUQgVVNFUk5BTUUnLCBwYXlsb2FkOiB7dXNlck5hbWU6IGRhdGEubWUudXNlcm5hbWV9fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnVU5TRVQgREVGSU5FRCBVU0VSTkFNRSd9KTtcbiAgICB9XG4gIH0sIFtkYXRhXSlcblxuICBoZWFkZXJCb2R5ID0gbG9hZGluZyA/IG51bGwgOiAhZGF0YT8ubWUgPyAoXG4gICAgPExvZ2dlZE91dFZpZXcgLz5cbiAgKSA6IChcbiAgICA8TG9nZ2VkSW5WaWV3IHVzZXJuYW1lPXtkYXRhLm1lLnVzZXJuYW1lfSBsb2dvdXQ9e2xvZ291dH0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17ZGF0YT8ubWU/LnVzZXJuYW1lID8gYGhlYWRlci1uYXYtdWwgaGVhZGVyLWlzLWNvbmNlYWxlZGAgOiBgaGVhZGVyLW5hdi11bGAgfSA+e2hlYWRlckJvZHl9PC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIj5cbiAgICAgICAgICA8VXNlckxvZ2luRm9ybSAvPlxuICAgICAgICAgIDxNaW5lc3dlZXBlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxVc2VyUmVnaXN0ZXJGb3JtIC8+XG4gICAgICAgICAgPE1pbmVzd2VlcGVyIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Njb3JlYm9hcmRcIj5cbiAgICAgICAgICA8TGVhZGVyYm9hcmQgc3NyVG9wVGltZXM9e3Byb3BzLnNzclRvcFRpbWVzfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgIDxNaW5lc3dlZXBlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC8+XG4gICk7XG59O1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGVhZGVyQm9hcmRFbnRyeSBmcm9tIFwiVFNDb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkRW50cnlcIjtcbmltcG9ydCBQYWdlTm9VbCBmcm9tIFwiLi9QYWdpbmF0aW9uL3BhZ2VOb1VsXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkdsb2JhbFN0b3JlXCI7XG5pbXBvcnQgXCIuL2xlYWRlcmJvYXJkLnNjc3NcIjtcbmltcG9ydCB7XG4gIEZvcm1hdFRpbWVGdW5jLFxuICBHZW5lcmljU2NvcmUsXG4gIEhhbmRsZUNsaWNrUGFnZUZ1bmMsXG4gIEhhbmRsZVNjb3JlVmlld0Z1bmMsXG4gIExlYWRlcmJvYXJkSGFuZGxlQ2xpY2tGdW5jLFxuICBMZWFkZXJib2FyZFByb3BzLFxuICBNYWtlVGl0bGVGdW5jLFxuICBQZXJzb25hbGl6ZWQsXG59IGZyb20gXCIuL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5pbXBvcnQge1xuICB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LFxuICB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LFxuICB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSxcbn0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmNvbnN0IExlYWRlcmJvYXJkOiBSZWFjdC5GQzxMZWFkZXJib2FyZFByb3BzPiA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSxcbiAgICB9LFxuICAgIGdsb2JhbERpc3BhdGNoLFxuICBdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwYWdlT2Zmc2V0XSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcblxuICBjb25zdCBoYW5kbGVTY29yZUxlbmd0aCA9ICgpID0+IHtcbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJiZWdpbm5lclwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnkoKTtcbiAgICAgIGlmIChkYXRhPy5hbGxCZWdpbm5lclNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsQmVnaW5uZXJTY29yZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImludGVybWVkaWF0ZVwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBpZiAoZGF0YT8uYWxsSW50ZXJtZWRpYXRlU2NvcmVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZGF0YS5hbGxJbnRlcm1lZGlhdGVTY29yZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImFkdmFuY2VkXCIpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSgpO1xuICAgICAgaWYgKGRhdGE/LmFsbEFkdmFuY2VkU2NvcmVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZGF0YS5hbGxBZHZhbmNlZFNjb3Jlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDEwO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjb3JlVmlld0hlbHBlciA9IChcbiAgICBhcnJheTogR2VuZXJpY1Njb3JlW10sXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBwYWdlT2Zmc2V0OiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0LCBjdXJyZW50UGFnZSAqIHBhZ2VPZmZzZXQgKyBwYWdlT2Zmc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheS5zbGljZSgwKS5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpKTtcbiAgICByZXR1cm4gYXJyYXlcbiAgICAgIC5zbGljZSgwKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZSAtIGIudGltZSlcbiAgICAgIC5zbGljZShjdXJyZW50UGFnZSAqIHBhZ2VPZmZzZXQsIGN1cnJlbnRQYWdlICogcGFnZU9mZnNldCArIHBhZ2VPZmZzZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjb3JlVmlldzogSGFuZGxlU2NvcmVWaWV3RnVuYyA9IChzc3JUb3BUaW1lcykgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgc3NyVG9wVGltZXMpIHtcbiAgICAgIHJldHVybiBzc3JUb3BUaW1lcy5zbGljZSgwLCBwYWdlT2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJiZWdpbm5lclwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnkoKTtcbiAgICAgIGNvbnN0IHRvcFNjb3JlcyA9IGRhdGE/LmFsbEJlZ2lubmVyU2NvcmVzO1xuICAgICAgaWYgKHRvcFNjb3Jlcykge1xuICAgICAgICBsZXQgdGVzdCA9IGhhbmRsZVNjb3JlVmlld0hlbHBlcih0b3BTY29yZXMsIGN1cnJlbnRQYWdlLCBwYWdlT2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCIpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkoKTtcbiAgICAgIGNvbnN0IHRvcFNjb3JlcyA9IGRhdGE/LmFsbEludGVybWVkaWF0ZVNjb3JlcztcbiAgICAgIGlmICh0b3BTY29yZXMpIHtcbiAgICAgICAgbGV0IHRlc3QgPSBoYW5kbGVTY29yZVZpZXdIZWxwZXIodG9wU2NvcmVzLCBjdXJyZW50UGFnZSwgcGFnZU9mZnNldCk7XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImFkdmFuY2VkXCIpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSgpO1xuICAgICAgY29uc3QgdG9wU2NvcmVzID0gZGF0YT8uYWxsQWR2YW5jZWRTY29yZXM7XG5cbiAgICAgIGlmICh0b3BTY29yZXMpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVNjb3JlVmlld0hlbHBlcih0b3BTY29yZXMsIGN1cnJlbnRQYWdlLCBwYWdlT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB1c2VybmFtZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIHRpbWU6IDAsXG4gICAgICAgIHVwZGF0ZWRBdDogXCJcIixcbiAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICBpZDogMSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfTtcblxuICBjb25zdCBbcGVyc29uYWxpemVkLCBzZXRQZXJzb25hbGl6ZWRdID0gUmVhY3QudXNlU3RhdGU8UGVyc29uYWxpemVkPihmYWxzZSk7XG5cbiAgY29uc3QgZm9ybWF0VGltZTogRm9ybWF0VGltZUZ1bmMgPSAodGltZSkgPT4ge1xuICAgIGNvbnN0IGNlbnRpc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAxMCkgJSAxMDApKS5zbGljZSgtMik7XG4gICAgY29uc3Qgc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMik7XG4gICAgY29uc3QgaG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSkuc2xpY2UoLTIpO1xuXG4gICAgcmV0dXJuIG1pbnV0ZXMgIT09IFwiMDBcIlxuICAgICAgPyBgJHttaW51dGVzfSA6ICR7c2Vjb25kc30gLiAke2NlbnRpc2Vjb25kc31gXG4gICAgICA6IGhvdXJzICE9PSBcIjAwXCJcbiAgICAgID8gYCR7aG91cnN9IDogJHttaW51dGVzfTogJHtzZWNvbmRzfSAuICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgIDogYCR7c2Vjb25kc30gLiAke2NlbnRpc2Vjb25kc30gc2Vjc2A7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tQZXJzb25hbGl6ZWQ6IExlYWRlcmJvYXJkSGFuZGxlQ2xpY2tGdW5jID0gKGUpID0+IHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGUuY3VycmVudFRhcmdldC5pbm5lckhUTUw7XG4gICAgcmV0dXJuIHVzZXJOYW1lID8gc2V0UGVyc29uYWxpemVkKHVzZXJOYW1lKSA6IHNldFBlcnNvbmFsaXplZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tQYWdlOiBIYW5kbGVDbGlja1BhZ2VGdW5jID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF0uaW5uZXJIVE1MKSAtIDE7XG4gICAgc2V0Q3VycmVudFBhZ2Uoc2VsZWN0ZWQpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VUaXRsZTogTWFrZVRpdGxlRnVuYyA9IChwZXJzb25hbGl6ZWQsIHNraWxsTGV2ZWwpID0+XG4gICAgcGVyc29uYWxpemVkXG4gICAgICA/IGAke3BlcnNvbmFsaXplZH1zICR7c2tpbGxMZXZlbH0gTGVhZGVyYm9hcmQ6YFxuICAgICAgOiBgJHtza2lsbExldmVsfSBMZWFkZXJib2FyZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibGVhZGVyYm9hcmRcIj5cbiAgICAgIDxoMyBpZD1cImxlYWRlcmJvYXJkLWhlYWRlclwiPnttYWtlVGl0bGUocGVyc29uYWxpemVkLCBza2lsbExldmVsKX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5uZXJzLWNpcmNsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3Jlcy1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHsoaGFuZGxlU2NvcmVWaWV3KHByb3BzPy5zc3JUb3BUaW1lcykgfHwgW10pLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkgPyAoXG4gICAgICAgICAgICAgIDxMZWFkZXJCb2FyZEVudHJ5XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAgICAgcGVyc29uYWxpemVkPXtwZXJzb25hbGl6ZWR9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGVudHJ5PXtlbnRyeX1cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2tQZXJzb25hbGl6ZWR9XG4gICAgICAgICAgICAgICAgZm9ybWF0VGltZT17Zm9ybWF0VGltZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhZ2VOb1VsXG4gICAgICAgICAgcGFnZU9mZnNldD17cGFnZU9mZnNldH1cbiAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2tQYWdlfVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3BUaW1lc1BlclBhZ2U9e3BhZ2VPZmZzZXR9XG4gICAgICAgICAgbm9PZlRvcFRpbWVzPXtoYW5kbGVTY29yZUxlbmd0aCgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAge3BlcnNvbmFsaXplZCA/IChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrUGVyc29uYWxpemVkKGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV0dXJuLXRvLWxlYWRlcmJvYXJkLWJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT17YHJldHVybiB0byAke3NraWxsTGV2ZWx9IExlYWRlckJvYXJkYH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLXNraWxsLWxldmVsLXNlbGVjdG9yLWJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhbHVlPVwiYmVnaW5uZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiBcIlNFVCBCRUdJTk5FUiBESU1FTlNJT05TXCIgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLXNraWxsLWxldmVsLXNlbGVjdG9yLWJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhbHVlPVwiaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTRVQgSU5URVJNRURJQVRFIERJTUVOU0lPTlNcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1za2lsbC1sZXZlbC1zZWxlY3Rvci1idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cImFkdmFuY2VkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiBcIlNFVCBBRFZBTkNFRCBESU1FTlNJT05TXCIgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyYm9hcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkdsb2JhbFN0b3JlXCI7XG5pbXBvcnQgeyBQZXJzb25hbGl6ZWQsIEZvcm1hdFRpbWVGdW5jLCBMZWFkZXJib2FyZEVudHJ5LCBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyB9IGZyb20gXCIuL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5cblxuaW50ZXJmYWNlIExlYWRlcmJvYXJkRW50cnlQcm9wcyB7XG4gIHBlcnNvbmFsaXplZDogUGVyc29uYWxpemVkO1xuICBoYW5kbGVDbGljazogTGVhZGVyYm9hcmRIYW5kbGVDbGlja0Z1bmM7XG4gIGVudHJ5OiBMZWFkZXJib2FyZEVudHJ5O1xuICBpbmRleDogbnVtYmVyO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBmb3JtYXRUaW1lOkZvcm1hdFRpbWVGdW5jO1xufVxuY29uc3QgU2luZ2xlTGVhZGVyYm9hcmRFbnRyeTogUmVhY3QuRkM8TGVhZGVyYm9hcmRFbnRyeVByb3BzPiA9ICh7XG4gIGN1cnJlbnRQYWdlLFxuICBwZXJzb25hbGl6ZWQsXG4gIGhhbmRsZUNsaWNrLFxuICBlbnRyeTogeyB1c2VybmFtZSwgdGltZSB9LFxuICBpbmRleCxcbiAgZm9ybWF0VGltZSxcbn0pID0+IHtcbiAgY29uc3QgW3sgZGVmaW5lZFVzZXJOYW1lIH1dID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IGdvbGRlbiA9IGRlZmluZWRVc2VyTmFtZSA9PT0gdXNlcm5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgY2xhc3NOYW1lPXtwZXJzb25hbGl6ZWQgPyBcInBlcnNvbmFsaXplZCBzY29yZXMtbGlzdC1pdGVtXCIgOiBcInNjb3Jlcy1saXN0LWl0ZW1cIn1cbiAgICA+XG4gICAgICB7LyogTnVtYmVyICovfVxuICAgICAgPGg1XG4gICAgICAgIGNsYXNzTmFtZT17Z29sZGVuID8gXCJnb2xkZW4gc2NvcmVzLXVzZXJcIiA6IFwic2NvcmVzLXVzZXJcIn1cbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjVweFwiIH19XG4gICAgICA+XG4gICAgICAgIHsoKGN1cnJlbnRQYWdlICogMTApICsgaW5kZXggKSArIDF9LlxuICAgICAgPC9oNT5cbiAgICAgIHsvKiBOYW1lICovfVxuICAgICAgPGg1XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy11c2VyXCIgOiBcInNjb3Jlcy11c2VyXCJ9XG4gICAgICA+XG4gICAgICAgIHt1c2VybmFtZX1cbiAgICAgIDwvaDU+XG4gICAgICB7LyogVmVydGljYWwgbGluZSAqL31cbiAgICAgIDxoNSBjbGFzc05hbWU9e2dvbGRlbiA/IFwiZ29sZGVuIHNjb3Jlcy11c2VyXCIgOiBcImJsYWNrLW51bSBzY29yZXMtdXNlclwifT5cbiAgICAgICAge1wiIFwifVxuICAgICAgICB8e1wiIFwifVxuICAgICAgPC9oNT5cbiAgICAgIHsvKiBUaW1lICovfVxuICAgICAgPGg1IGNsYXNzTmFtZT17Z29sZGVuID8gXCJnb2xkZW4gc2NvcmVzLXRpbWVcIiA6IFwic2NvcmVzLXRpbWVcIn0+XG4gICAgICAgIHtmb3JtYXRUaW1lKHRpbWUpfVxuICAgICAgPC9oNT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUxlYWRlcmJvYXJkRW50cnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIYW5kbGVDbGlja1BhZ2VGdW5jIH0gZnJvbSBcIi4uL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5cbmludGVyZmFjZSBQYWdlTm9MaVByb3BzIHtcbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIGhhbmRsZUNsaWNrOiBIYW5kbGVDbGlja1BhZ2VGdW5jO1xufVxuY29uc3QgUGFnZU5vTGk6IFJlYWN0LkZDPFBhZ2VOb0xpUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICBrZXk9e3Byb3BzLnBhZ2VJbmRleH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHByb3BzLmN1cnJlbnRQYWdlICsgMSA9PT0gcHJvcHMucGFnZUluZGV4XG4gICAgICAgICAgPyBgcGFnZU5vTGkgc2VsZWN0ZWQtcGFnZS1saWBcbiAgICAgICAgICA6IFwicGFnZU5vTGlcIlxuICAgICAgfVxuICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAgPGE+e3Byb3BzLnBhZ2VJbmRleH08L2E+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb0xpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGFuZGxlQ2xpY2tQYWdlRnVuYyB9IGZyb20gXCIuLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuaW1wb3J0IFBhZ2VObyBmcm9tIFwiLi9QYWdlTm9MaVwiO1xuXG5pbnRlcmZhY2UgUGFnZU5vVWxQcm9wcyB7XG4gIHBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgbm9PZlRvcFRpbWVzOiBudW1iZXI7XG4gIHRvcFRpbWVzUGVyUGFnZTogbnVtYmVyO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBoYW5kbGVDbGljazogSGFuZGxlQ2xpY2tQYWdlRnVuY1xufVxuXG5jb25zdCBQYWdlTm9VbDogUmVhY3QuRkM8UGFnZU5vVWxQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuXG4gIGNvbnN0IHJlbmRlclBhZ2VOdW1iZXJzID0gKCkgPT4ge1xuICAgIGlmIChwcm9wcy5ub09mVG9wVGltZXMpIHtcbiAgICByZXR1cm4gWy4uLm5ldyBBcnJheShNYXRoLmNlaWwocHJvcHMubm9PZlRvcFRpbWVzIC8gcHJvcHMudG9wVGltZXNQZXJQYWdlKSldXG4gICAgICAubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHBhZ2VJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYWdlTm9cbiAgICAgICAgICAgIGtleT17cGFnZUluZGV4fVxuICAgICAgICAgICAgcGFnZUluZGV4PXtwYWdlSW5kZXh9XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cHJvcHMuY3VycmVudFBhZ2V9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgaWQ9XCJwYWdlLW51bWJlcnNcIj5cbiAgICAgIHtyZW5kZXJQYWdlTnVtYmVycygpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm9VbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIkN1c3RvbUhvb2tzXCI7XG5pbXBvcnQgeyB1c2VUaW1lckNvbnRleHQgfSBmcm9tIFwiVGltZXJTdG9yZVwiO1xuaW1wb3J0IHsgdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uLCB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24sIHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24gfSBmcm9tIFwiVFNTcmMvZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCBcIi4vbWlsbGlzZWNvbmRzdHlsZXMuc2Nzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW3Bvc3RCZWdpbm5lclNjb3JlXSA9IHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbigpO1xuICBjb25zdCBbcG9zdEludGVybWVkaWF0ZVNjb3JlXSA9IHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24oKTtcbiAgY29uc3QgW3Bvc3RBZHZhbmNlZFNjb3JlXSA9IHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbigpO1xuICBjb25zdCBbXG4gICAge1xuICAgICAgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sXG4gICAgICBkZWZpbmVkVXNlck5hbWUsXG4gICAgICB0aW1lck9uLFxuICAgIH0sIGdsb2JhbERpc3BhdGNoXG4gIF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgW3sgdGltZXJUaW1lIH0sIHRpbWVyRGlzcGF0Y2hdID0gdXNlVGltZXJDb250ZXh0KCk7XG5cbiAgdXNlSW50ZXJ2YWwoXG4gICAgKCkgPT4ge1xuICAgICAgdGltZXJEaXNwYXRjaCh7IHR5cGU6IFwiSVRFUkFURSBUSU1FUiBUSU1FXCIsIHBheWxvYWQ6IDEwIH0pO1xuICAgIH0sXG4gICAgdGltZXJPbiA9PT0gdHJ1ZVxuICAgICAgPyAxMFxuICAgICAgOiB0aW1lck9uID09PSBcIkZSRUVaRSBXSU5cIiB8fCB0aW1lck9uID09PSBcIkZSRUVaRSBERUFEXCIgfHwgdGltZXJPbiA9PT0gXCJWSUNUT1JZXCJcbiAgICAgID8gLTFcbiAgICAgIDogbnVsbFxuICApO1xuXG4gIC8vIElmIFRpbWVyIGlzIGNoYW5nZWQgdG8gdHJ1ZSwgc3RhcnQgdGhlIHRpbWVyLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0aW1lck9uID09PSBmYWxzZSkge1xuICAgICAgdGltZXJEaXNwYXRjaCh7IHR5cGU6IFwiQ0xFQVIgVElNRVIgVElNRVwiIH0pO1xuICAgIH1cblxuICAgIGlmICh0aW1lck9uID09PSBcIlZJQ1RPUllcIiAmJiB0eXBlb2YgZGVmaW5lZFVzZXJOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2JlZ2lubmVyJykge1xuICAgICAgICBwb3N0QmVnaW5uZXJTY29yZSh7XG4gICAgICAgICAgdmFyaWFibGVzOiB7IHVzZXJuYW1lOiBkZWZpbmVkVXNlck5hbWUsIHRpbWU6IHRpbWVyVGltZSB9LFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ0ZSRUVaRSBUSU1FUiBTVEFURSBXSU4nfSlcbiAgICAgICAgICAvLyBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTRVQgVE9QIFRJTUVTJywgcGF5bG9hZDogeyB0b3BUaW1lczogbmV3VG9wVGltZXMgfSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChza2lsbExldmVsID09PSAnaW50ZXJtZWRpYXRlJykge1xuICAgICAgICBwb3N0SW50ZXJtZWRpYXRlU2NvcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBkZWZpbmVkVXNlck5hbWUsIHRpbWU6IHRpbWVyVGltZX1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe3R5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgV0lOJ30pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNraWxsTGV2ZWwgPT09ICdhZHZhbmNlZCcpIHtcbiAgICAgICAgcG9zdEFkdmFuY2VkU2NvcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBkZWZpbmVkVXNlck5hbWUsIHRpbWU6IHRpbWVyVGltZX1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe3R5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgV0lOJ30pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt0aW1lck9uXSk7XG5cbiAgY29uc3QgY2VudGlzZWNvbmRzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZXJUaW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpO1xuICBjb25zdCBzZWNvbmRzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZXJUaW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgY29uc3QgbWludXRlcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpO1xuICBjb25zdCBob3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IodGltZXJUaW1lIC8gMzYwMDAwMCkpLnNsaWNlKC0yKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtaWxsaS1zZWNvbmQtdGltZXItY29udGFpbmVyJz5cbiAgICAgIDxoNCBpZD1cIm1pbGxpLXNlY29uZC10aW1lclwiIGNsYXNzTmFtZT17c2tpbGxMZXZlbH0+XG4gICAgICAgIHtob3VycyAhPT0gXCIwMFwiXG4gICAgICAgICAgPyBgJHtob3Vyc30gOiAke21pbnV0ZXN9IDogJHtzZWNvbmRzfSA6ICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgICAgICA6IG1pbnV0ZXMgIT09IFwiMDBcIlxuICAgICAgICAgID8gYCR7bWludXRlc30gOiAke3NlY29uZHN9IDogJHtjZW50aXNlY29uZHN9YFxuICAgICAgICAgIDogYCR7c2Vjb25kc30gOiAke2NlbnRpc2Vjb25kc31gfVxuICAgICAgPC9oND5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tYmluZWRSZWR1Y2VycyBmcm9tIFwiLi90aW1lclJlZHVjZXJzXCI7XG5pbXBvcnQgeyBUaW1lcklTdGF0ZVR5cGVzIH0gZnJvbSBcIi4uL1RpbWVyVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUaW1lcklTdGF0ZVR5cGVzID0ge1xuICB0aW1lclRpbWU6IDAsXG59O1xuXG5jb25zdCBUaW1lckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxuICBbVGltZXJJU3RhdGVUeXBlcywgUmVhY3QuRGlzcGF0Y2g8YW55Pl1cbj4oW2luaXRpYWxTdGF0ZSwgKCkgPT4ge31dKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xufTtcblxuY29uc3QgVGltZXJTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihDb21iaW5lZFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbzxhbnk+KCgpID0+IFtzdGF0ZSwgZGlzcGF0Y2hdLCBbc3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaW1lckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9UaW1lckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VUaW1lckNvbnRleHQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRpbWVyQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VUaW1lckNvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFRpbWVyU3RvcmVQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IHsgdXNlVGltZXJDb250ZXh0LCBUaW1lclN0b3JlUHJvdmlkZXIgfTtcbiIsIi8vIGltcG9ydCB7IH0gZnJvbSAnLi90aW1lckFjdGlvbnMuanMnO1xuXG5pbXBvcnQgeyBDb21iaW5lUmVkdWNlcnNGdW5jIH0gZnJvbSBcIk1pbmVzd2VlcGVyVHlwZXNcIjtcbmltcG9ydCB7IFRpbWVyVGltZUZ1bmMgfSBmcm9tIFwiLi4vVGltZXJUeXBlc1wiO1xuXG5jb25zdCB0aW1lclRpbWU6IFRpbWVyVGltZUZ1bmMgPSAoc3RhdGUgPSAwLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJJVEVSQVRFIFRJTUVSIFRJTUVcIjpcbiAgICAgIHJldHVybiAoc3RhdGUgKz0gYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgXCJDTEVBUiBUSU1FUiBUSU1FXCI6XG4gICAgICByZXR1cm4gMDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnM6IENvbWJpbmVSZWR1Y2Vyc0Z1bmMgPSAoc2xpY2VzKSA9PiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgT2JqZWN0LmtleXMoc2xpY2VzKS5yZWR1Y2UoXG4gICAgKGFjYywgcHJvcCkgPT4gKHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbiAgICB9KSxcbiAgICBzdGF0ZVxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoeyB0aW1lclRpbWUgfSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCB7IFRpbWVyU3RvcmVQcm92aWRlciB9IGZyb20gXCJUaW1lclN0b3JlXCI7XG5pbXBvcnQgeyBCb2FyZFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiQm9hcmRTdG9yZVwiO1xuXG5pbXBvcnQgQm9hcmQgZnJvbSBcIlRTQ29tcG9uZW50cy9Cb2FyZC9Cb2FyZFwiO1xuaW1wb3J0IE1pbGxpc2Vjb25kVGltZXIgZnJvbSBcIlRTQ29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL01pbGxpc2Vjb25kVGltZXJcIjtcbmltcG9ydCBTa2lsbExldmVsU2VsZWN0b3IgZnJvbSBcIlRTQ29tcG9uZW50cy9Ta2lsbExldmVsU2VsZWN0b3IvU2tpbGxMZXZlbFNlbGVjdG9yXCI7XG5cbmltcG9ydCBTbWlsZXlCYXIgZnJvbSBcIlRTQ29tcG9uZW50cy9TbWlsZXlCYXIvU21pbGV5QmFyXCI7XG5cbmltcG9ydCBcIi4vbWluZXN3ZWVwZXIuc2Nzc1wiO1xuXG5cbmNvbnN0IE1pbmVzd2VlcGVyOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSxcbiAgICB9LFxuICBdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS1jb250YWluZXJzXCIgaWQ9XCJtYWluLXNwYWNlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwidG90YWwtYm9hcmRcIiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9PlxuICAgICAgICAgIDxCb2FyZFN0b3JlUHJvdmlkZXI+XG4gICAgICAgICAgICA8U21pbGV5QmFyIC8+XG4gICAgICAgICAgICA8Qm9hcmQgLz5cbiAgICAgICAgICA8L0JvYXJkU3RvcmVQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFRpbWVyU3RvcmVQcm92aWRlcj5cbiAgICAgICAgICA8TWlsbGlzZWNvbmRUaW1lciAvPlxuICAgICAgICA8L1RpbWVyU3RvcmVQcm92aWRlcj5cblxuICAgICAgICA8U2tpbGxMZXZlbFNlbGVjdG9yIC8+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmVzd2VlcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdHbG9iYWxTdG9yZSc7XG5pbXBvcnQgJy4vc2tpbGxzdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICBjb25zdCBbeyBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSB9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9IGlkPSdza2lsbC1sZXZlbC1zZWxlY3Rvcic+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e18gPT4gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU0VUIEJFR0lOTkVSIERJTUVOU0lPTlMnIH0pfT5CZWdpbm5lcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBJTlRFUk1FRElBVEUgRElNRU5TSU9OUycgfSl9PkludGVybWVkaWF0ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBBRFZBTkNFRCBESU1FTlNJT05TJyB9KX0+RXhwZXJ0PC9idXR0b24+XG4gICAgPC9kaXYgPlxuICApXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb2FyZENvbnRleHQgfSBmcm9tICdCb2FyZFN0b3JlJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdHbG9iYWxTdG9yZSdcbmltcG9ydCAnLi9zbWlsZXlzdHlsZXMuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbygoKSA9PiB7XG5cbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBudW1iZXJPZk1pbmVzIH0sIHRpbWVyT24gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFt7IHN1cnByaXNlZCwgZmxhZ3NSZW1haW5pbmcgfSwgYm9hcmREaXNwYXRjaF0gPSB1c2VCb2FyZENvbnRleHQoKTtcblxuICBjb25zdCByZXNldENhbGxiYWNrID0gKCkgPT4ge1xuICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQgU01JTEVTJyB9KTtcbiAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1NFVCBGTEFHUyBSRU1BSU5JTkcnLCBwYXlsb2FkOiBudW1iZXJPZk1pbmVzIH0pO1xuICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NXSVRDSCBUSU1FUiBPRkYnIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nc21pbGV5LWJhcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc21pbGV5LWd1eSdcbiAgICAgICAgaWQ9e1xuICAgICAgICAgIHN1cnByaXNlZCA9PT0gJ2RlYWQnID8gJ2RlYWQtZ3V5J1xuICAgICAgICAgICAgOiB0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nID8gJ3ZpY3RvcnktZ3V5J1xuICAgICAgICAgICAgICA6IHN1cnByaXNlZCA9PT0gdHJ1ZSA/ICdzdXJwcmlzZWQtZ3V5J1xuICAgICAgICAgICAgICAgIDogJ3NtaWxleS1ndXknXG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17cmVzZXRDYWxsYmFja30+PC9kaXY+XG4gICAgICA8ZGl2IGlkPSdmbGFncy1yZW1haW5pbmcnPntmbGFnc1JlbWFpbmluZ308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuXG50eXBlIElucHV0RmllbGRQcm9wcyA9IFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4gJiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbmNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgc2l6ZTogXyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICB7LyogPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9PntsYWJlbH08L2xhYmVsPiAqL31cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvcm0tZXJyb3ItbWVzc2FnZVwiPntlcnJvciA/IGVycm9yIDogbnVsbH08L2g1PlxuICAgICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIlRTU3JjL3V0aWxzL3RvRXJyb3JNYXBcIjtcbmltcG9ydCBcIi4vdXNlckZvcm1zLnNjc3NcIjtcblxuY29uc3QgVXNlckxvZ2luRm9ybTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBbXywgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbbG9naW5dID0gdXNlTG9naW5NdXRhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW4oe1xuICAgICAgICAgIHZhcmlhYmxlczogeyBvcHRpb25zOiB2YWx1ZXMgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW01lRG9jdW1lbnRdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsb2dpbkVycm9ycyA9IGxvZ2luRGF0YT8uZGF0YT8ubG9naW4uZXJyb3JzO1xuICAgICAgICBjb25zdCBsb2dpblN1Y2Nlc3MgPSBsb2dpbkRhdGE/LmRhdGE/LmxvZ2luLnVzZXI7XG5cbiAgICAgICAgaWYgKGxvZ2luRXJyb3JzKSB7XG4gICAgICAgICAgc2V0RXJyb3JzKHRvRXJyb3JNYXAobG9naW5FcnJvcnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2dpblN1Y2Nlc3MpIHtcbiAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIlNFVCBERUZJTkVEIFVTRVJOQU1FXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXJOYW1lOiBsb2dpblN1Y2Nlc3MudXNlcm5hbWUgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBBZnRlciBsb2dnaW5nIGluIHJldHVybiB0byBob21lIHNjcmVlblxuICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIlRTU3JjL3V0aWxzL3RvRXJyb3JNYXBcIjtcbmltcG9ydCBcIi4vdXNlckZvcm1zLnNjc3NcIjtcblxuY29uc3QgVXNlckxvZ2luRm9ybTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgWywgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IHJlZ2lzdGVyKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgb3B0aW9uczogdmFsdWVzIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtNZURvY3VtZW50XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFcnJvcnMgPSByZWdpc3RlckRhdGE/LmRhdGE/LnJlZ2lzdGVyLmVycm9ycztcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gcmVnaXN0ZXJEYXRhPy5kYXRhPy5yZWdpc3Rlci51c2VyO1xuXG4gICAgICAgIGlmIChyZWdpc3RlckVycm9ycykge1xuICAgICAgICAgIHNldEVycm9ycyh0b0Vycm9yTWFwKHJlZ2lzdGVyRXJyb3JzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJTdWNjZXNzKSB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VyTmFtZTogcmVnaXN0ZXJTdWNjZXNzLnVzZXJuYW1lIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7KHt9KSA9PiAoXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImxvZ2luLXJlZ2lzdGVyLWZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5wdXRzXCI+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWdpc3RlclwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5Gb3JtO1xuIiwiLy8gaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9tYWtpbmctc2V0aW50ZXJ2YWwtZGVjbGFyYXRpdmUtd2l0aC1yZWFjdC1ob29rcy9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VJbnRlcnZhbEZ1bmMgfSBmcm9tICdUU1NyYy9taW5lc3dlZXBlci10eXBlcyc7XG5cblxuXG5jb25zdCB1c2VJbnRlcnZhbDogVXNlSW50ZXJ2YWxGdW5jID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBjb25zdCBzYXZlZENhbGxiYWNrOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PGFueT4gPSBSZWFjdC51c2VSZWYoKTtcbiAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBjYWxsYmFjay5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgfSwgW2NhbGxiYWNrXSk7XG5cbiAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdmljdG9yeSBpcyBkZWNsYXJlZCBvciBib21iIHN0b3AgdGhlIHRpbWVyLi4uXG4gICAgaWYgKGRlbGF5ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICAvLyBPdGhlcndpc2UuLi5cbiAgICBpZiAoZGVsYXkgIT09IG51bGwpIHtcbiAgICAgIGxldCBpZCA9IHNldEludGVydmFsKHRpY2ssIGRlbGF5KTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9LCBbZGVsYXldKVxufVxuXG5cbmV4cG9ydCB7IHVzZUludGVydmFsIH07IiwiXG5pbXBvcnQgeyBBcmcsIFF1ZXJ5LCBNdXRhdGlvbiwgUmVzb2x2ZXIsIEN0eCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBNaW5lQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEFkdmFuY2VkU2NvcmUgfSBmcm9tICdUU0RhdGFiYXNlL2VudGl0aWVzL0FkdmFuY2VkX1Njb3Jlcyc7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRTY29yZVJlc29sdmVyIHtcblxuICBAUXVlcnkoKCkgPT4gW0FkdmFuY2VkU2NvcmVdKVxuICBhc3luYyBhbGxBZHZhbmNlZFNjb3JlcyhcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEFkdmFuY2VkU2NvcmVbXT4ge1xuICAgIHJldHVybiBlbS5maW5kKEFkdmFuY2VkU2NvcmUsIHt9KTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBBZHZhbmNlZFNjb3JlLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIG5ld0FkdmFuY2VkU2NvcmUoXG4gICAgQEFyZygndXNlcm5hbWUnLCAoKSA9PiBTdHJpbmcpIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgQEFyZygndGltZScsICgpID0+IE51bWJlcikgdGltZTogbnVtYmVyLFxuICAgIEBDdHgoKSB7IGVtIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8QWR2YW5jZWRTY29yZT4ge1xuICAgIGNvbnN0IG5ld0FkdmFuY2VkU2NvcmUgPSBlbS5jcmVhdGUoQWR2YW5jZWRTY29yZSwgeyB1c2VybmFtZSwgdGltZSB9KVxuICAgIGF3YWl0IGVtLnBlcnNpc3RBbmRGbHVzaChuZXdBZHZhbmNlZFNjb3JlKTtcbiAgICByZXR1cm4gbmV3QWR2YW5jZWRTY29yZTtcbiAgfVxufSIsIlxuaW1wb3J0IHsgQXJnLCBRdWVyeSwgTXV0YXRpb24sIFJlc29sdmVyLCBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBCZWdpbm5lclNjb3JlIH0gZnJvbSAnVFNEYXRhYmFzZS9lbnRpdGllcy9CZWdpbm5lcl9TY29yZXMnO1xuXG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQmVnaW5uZXJTY29yZVJlc29sdmVyIHtcblxuICBAUXVlcnkoKCkgPT4gW0JlZ2lubmVyU2NvcmVdKVxuICBhc3luYyBhbGxCZWdpbm5lclNjb3JlcyhcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEJlZ2lubmVyU2NvcmVbXT4ge1xuICAgIHJldHVybiBlbS5maW5kKEJlZ2lubmVyU2NvcmUsIHt9KTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBCZWdpbm5lclNjb3JlLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIG5ld0JlZ2lubmVyU2NvcmUoXG4gICAgQEFyZygndXNlcm5hbWUnLCAoKSA9PiBTdHJpbmcpIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgQEFyZygndGltZScsICgpID0+IE51bWJlcikgdGltZTogbnVtYmVyLFxuICAgIEBDdHgoKSB7IGVtIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8QmVnaW5uZXJTY29yZT4ge1xuICAgIGNvbnN0IG5ld0JlZ2lubmVyU2NvcmUgPSBlbS5jcmVhdGUoQmVnaW5uZXJTY29yZSwgeyB1c2VybmFtZSwgdGltZSB9KVxuICAgIGF3YWl0IGVtLnBlcnNpc3RBbmRGbHVzaChuZXdCZWdpbm5lclNjb3JlKTtcbiAgICByZXR1cm4gbmV3QmVnaW5uZXJTY29yZTtcbiAgfVxufSIsIlxuaW1wb3J0IHsgQXJnLCBRdWVyeSwgTXV0YXRpb24sIFJlc29sdmVyLCBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBJbnRlcm1lZGlhdGVTY29yZSB9IGZyb20gJ1RTRGF0YWJhc2UvZW50aXRpZXMvSW50ZXJtZWRpYXRlX1Njb3Jlcyc7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgSW50ZXJtZWRpYXRlU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtJbnRlcm1lZGlhdGVTY29yZV0pXG4gIGFzeW5jIGFsbEludGVybWVkaWF0ZVNjb3JlcyhcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEludGVybWVkaWF0ZVNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChJbnRlcm1lZGlhdGVTY29yZSwge30pO1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IEludGVybWVkaWF0ZVNjb3JlLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIG5ld0ludGVybWVkaWF0ZVNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEludGVybWVkaWF0ZVNjb3JlPiB7XG4gICAgY29uc3QgbmV3SW50ZXJtZWRpYXRlU2NvcmUgPSBlbS5jcmVhdGUoSW50ZXJtZWRpYXRlU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3SW50ZXJtZWRpYXRlU2NvcmUpO1xuICAgIHJldHVybiBuZXdJbnRlcm1lZGlhdGVTY29yZTtcbiAgfVxufSIsImltcG9ydCB7XG4gIEN0eCxcbiAgUXVlcnksXG4gIE11dGF0aW9uLFxuICBSZXNvbHZlcixcbiAgQXJnLFxuICBJbnB1dFR5cGUsXG4gIEZpZWxkLFxuICBPYmplY3RUeXBlLFxufSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvVXNlclwiO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eU1hbmFnZXIgfSBmcm9tIFwiQG1pa3JvLW9ybS9wb3N0Z3Jlc3FsXCI7XG5pbXBvcnQgYXJnb24yIGZyb20gXCJhcmdvbjJcIjtcbmltcG9ydCB7Q09PS0lFX05BTUV9IGZyb20gXCJUU1NyYy9jb25zdGFudHNcIjtcblxuQElucHV0VHlwZSgpXG5jbGFzcyBVc2VybmFtZVBhc3N3b3JkSW5wdXQge1xuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICB1c2VybmFtZTogc3RyaW5nO1xuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5AT2JqZWN0VHlwZSgpXG5jbGFzcyBGaWVsZEVycm9yIHtcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgZmllbGQ6IHN0cmluZztcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5AT2JqZWN0VHlwZSgpXG5jbGFzcyBVc2VyUmVzcG9uc2Uge1xuICBARmllbGQoKCkgPT4gW0ZpZWxkRXJyb3JdLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGVycm9ycz86IEZpZWxkRXJyb3JbXTtcblxuICBARmllbGQoKCkgPT4gVXNlciwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICB1c2VyPzogVXNlcjtcbn1cblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZXIge1xuICBAUXVlcnkoKCkgPT4gVXNlciwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBtZShAQ3R4KCkgeyByZXEsIGVtIH06IE1pbmVDb250ZXh0KSB7XG4gICAgLy8geW91IGFyZSBub3QgbG9nZ2VkIGluXG4gICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VySWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZW0uZmluZE9uZShVc2VyLCB7IGlkOiByZXEuc2Vzc2lvbi51c2VySWQgfSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBAUXVlcnkoKCkgPT4gW1VzZXJdKVxuICBnZXRBbGxVc2VycyhAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dCk6IFByb21pc2U8VXNlcltdPiB7XG4gICAgcmV0dXJuIGVtLmZpbmQoVXNlciwge30pO1xuICB9XG5cbiAgQFF1ZXJ5KCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgZ2V0U2luZ2xlVXNlcihcbiAgICBAQXJnKFwiaWRcIiwgKCkgPT4gTnVtYmVyKSBpZDogbnVtYmVyLFxuICAgIEBDdHgoKSB7IGVtIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8VXNlclJlc3BvbnNlPiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGVtLmZpbmRPbmUoVXNlciwgeyBpZCB9KTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcInVzZXIgZG9lcyBub3QgZXhpc3RcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VyIH07XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gVXNlclJlc3BvbnNlKVxuICBhc3luYyByZWdpc3RlcihcbiAgICBAQXJnKFwib3B0aW9uc1wiLCAoKSA9PiBVc2VybmFtZVBhc3N3b3JkSW5wdXQpIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCxcbiAgICBAQ3R4KCkgeyBlbSwgcmVxIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8VXNlclJlc3BvbnNlPiB7XG4gICAgaWYgKG9wdGlvbnMudXNlcm5hbWUubGVuZ3RoIDw9IDIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcImxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGFzc3dvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcImxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBhcmdvbjIuaGFzaChvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIGxldCB1c2VyO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoZW0gYXMgRW50aXR5TWFuYWdlcilcbiAgICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcihVc2VyKVxuICAgICAgICAuZ2V0S25leFF1ZXJ5KClcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgdXNlcm5hbWU6IG9wdGlvbnMudXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnJldHVybmluZyhcIipcIik7XG4gICAgICB1c2VyID0gcmVzdWx0WzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIC8vIER1cGxpY2F0ZSB1c2VybmFtZSBlcnJvclxuICAgICAgaWYgKGVyci5kZXRhaWwuaW5jbHVkZXMoXCJhbHJlYWR5IGV4aXN0c1wiKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgLy8gU3RvcmUgdXNlciBpZCBzZXNzaW9uLCB0aGlzIHdpbGwgc2V0IGEgY29va2llIG9uIHRoZSB1c2VyIGFuZCBrZWVwIHRoZW0gbG9nZ2VkIGluLlxuICAgIHJlcS5zZXNzaW9uLnVzZXJJZCA9IHVzZXIuaWQ7XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IEJvb2xlYW4pXG4gIGxvZ291dChAQ3R4KCkgeyByZXEsIHJlcyB9OiBNaW5lQ29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgIHJlcS5zZXNzaW9uLmRlc3Ryb3koKGVycikgPT4ge1xuICAgICAgICByZXMuY2xlYXJDb29raWUoQ09PS0lFX05BTUUpO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3llZCEhIScpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB7IG9rOiB0cnVlIH07XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gVXNlclJlc3BvbnNlKVxuICBhc3luYyBsb2dpbihcbiAgICBAQXJnKFwib3B0aW9uc1wiLCAoKSA9PiBVc2VybmFtZVBhc3N3b3JkSW5wdXQpIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCxcbiAgICBAQ3R4KCkgeyBlbSwgcmVxIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8VXNlclJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbS5maW5kT25lKFVzZXIsIHsgdXNlcm5hbWU6IG9wdGlvbnMudXNlcm5hbWUgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcInRoYXQgdXNlcm5hbWUgZG9lcyBub3QgZXhpc3RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBhcmdvbjIudmVyaWZ5KHVzZXIucGFzc3dvcmQsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWVsZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImluY29ycmVjdCBwYXNzd29yZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuXG4gICAgICByZXR1cm4geyB1c2VyIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBCb29sZWFuKVxuICBhc3luYyBkZWxldGVVc2VyKFxuICAgIEBBcmcoXCJpZFwiLCAoKSA9PiBOdW1iZXIpIGlkOiBudW1iZXIsXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtLm5hdGl2ZURlbGV0ZShVc2VyLCB7IGlkIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBIdHRwTGluayxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHJlbmRlclRvTm9kZVN0cmVhbSB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBodG1sU3RhcnQsIGh0bWxFbmQgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgR2xvYmFsU3RvcmVQcm92aWRlciB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCJUU0NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XG5cblxuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBcIi9ncmFwaHFsXCIsXG4gICAgZmV0Y2gsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgbWluZXN3ZWVwZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5taW5lc3dlZXBlclJvdXRlci5nZXQoXCIqXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBjb250ZXh0ID0ge307XG4gIGxldCByZXN1bHRTY29yZXM7XG4gIHRyeSB7XG4gICAgY29uc3QgbGluayA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiIDogXCJodHRwczovL2JlYXRtaW5lc3dlZXBlci5hcHAvZ3JhcGhxbFwiO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLnBvc3QobGluaywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBxdWVyeTogYHF1ZXJ5IEdldEJlZ2lubmVyU2NvcmVzIHtcbiAgICAgICAgICAgICAgICBhbGxCZWdpbm5lclNjb3JlcyB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgIHRpbWVcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9YCxcbiAgICB9KTtcblxuICAgIHJlc3VsdFNjb3JlcyA9IHJlc3VsdHMuZGF0YT8uZGF0YS5hbGxCZWdpbm5lclNjb3JlcyB8fCBbXTtcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCBtaW5lc3dlZXBlclN0cmVhbSA9IHJlbmRlclRvTm9kZVN0cmVhbShcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPEdsb2JhbFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgPC9HbG9iYWxTdG9yZVByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVzLndyaXRlKGh0bWxTdGFydCghIXByb2Nlc3MuZW52Lk5PREVfRU5WLCBwcm9jZXNzLmVudi5DbG91ZGZyb250LCByZXN1bHRTY29yZXMpKTtcbiAgbWluZXN3ZWVwZXJTdHJlYW0ucGlwZShyZXMsIHsgZW5kOiBmYWxzZSB9KTtcbiAgbWluZXN3ZWVwZXJTdHJlYW0ub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgIHJlcy53cml0ZShodG1sRW5kKCEhcHJvY2Vzcy5lbnYuTk9ERV9FTlYsIHByb2Nlc3MuZW52LkNsb3VkZnJvbnQpKTtcbiAgICByZXMuZW5kKCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pbmVzd2VlcGVyUm91dGVyO1xuIiwiaW1wb3J0IHsgR2VuZXJpY1Njb3JlIH0gZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5cbmNvbnN0IGh0bWxTdGFydCA9IChERVZfRU5WOiBib29sZWFuLCBDbG91ZGZyb250OiBzdHJpbmcgfCB1bmRlZmluZWQsIHJlc3VsdFNjb3JlczogR2VuZXJpY1Njb3JlW10pID0+IHtcbiAgcmV0dXJuIChgPCFET0NUWVBFIEhUTUw+XG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gICAgICAgIDx0aXRsZT5NaW5lc3dlZXBlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj0nJHtDbG91ZGZyb250fS9taW5lLWltYWdlcy9taW5lY29uLnBuZycvPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9zdGF0aWMvaW5kZXguY3NzJy8+XG4gICAgICA8L2hlYWQ+XG5cbiAgICAgIDxzY3JpcHQ+XG4gICAgICAgIGNvbnN0IGRldlN0eWxlU2hlZXRIcmVmID0gJy9zdGF0aWMvaW5kZXguY3NzJztcbiAgICAgICAgY29uc3QgcHJvZFN0eWxlU2hlZXRIcmVmID0gJyR7Q2xvdWRmcm9udH0vYnVpbGQvcHVibGljL2luZGV4LmNzcyc7XG4gICAgICAgIGNvbnN0IFtoZWFkXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRUFEJyk7XG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgbGluay5ocmVmID0gKCR7REVWX0VOVn0gPT09IHRydWUgPyBkZXZTdHlsZVNoZWV0SHJlZiA6IHByb2RTdHlsZVNoZWV0SHJlZilcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIDwvc2NyaXB0PlxuXG5cblxuICAgICAgPCEtLSBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcgb2YgUGFnZSBEYXRhIC0tPlxuICAgICAgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX19EQVRBX189JHtKU09OLnN0cmluZ2lmeSh7c3NyVG9wVGltZXM6IHJlc3VsdFNjb3Jlc30pfTwvc2NyaXB0PlxuXG4gICAgPGJvZHk+XG4gICAgPGRpdiBpZD1cIm1pbmVzd2VlcGVyLXJvb3RcIj5gKVxufTtcblxuXG5jb25zdCBodG1sRW5kID0gKERFVl9FTlY6IGJvb2xlYW4sIENsb3VkZnJvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gKGA8L2Rpdj5cbiAgICAgIDxzY3JpcHQ+XG4gICAgICBjb25zdCBkZXZTY3JpcHRMaW5rID0gJy9zdGF0aWMvaW5kZXguanMnO1xuICAgICAgY29uc3QgcHJvZFNjcmlwdExpbmsgPSAnJHtDbG91ZGZyb250fS9idWlsZC9wdWJsaWMvaW5kZXguanMnO1xuXG4gICAgICBjb25zdCBbYm9keV0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQk9EWScpO1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9ICgke0RFVl9FTlZ9ID09PSB0cnVlID8gZGV2U2NyaXB0TGluayA6IHByb2RTY3JpcHRMaW5rKVxuICAgICAgYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgPC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuPC9odG1sPmApO1xuXG5leHBvcnQge1xuICBodG1sU3RhcnQsXG4gIGh0bWxFbmRcbn1cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tIFwidHMtc3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmV4cG9ydCBjb25zdCB0b0Vycm9yTWFwID0gKGVycm9yczogRmllbGRFcnJvcltdKSA9PiB7XG4gIGNvbnN0IGVycm9yTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGVycm9ycy5mb3JFYWNoKCh7IGZpZWxkLCBtZXNzYWdlIH0pID0+IHtcbiAgICBlcnJvck1hcFtmaWVsZF0gPSBtZXNzYWdlO1xuICB9KTtcbiAgcmV0dXJuIGVycm9yTWFwO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtaWtyby1vcm0vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ29uMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0LXJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3Jvc3MtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWRpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbi8vIEFwb2xsb1xuaW1wb3J0IHtcbiAgQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VHcmFwaFFMUGxheWdyb3VuZFxufSBmcm9tIFwiYXBvbGxvLXNlcnZlci1jb3JlXCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuLy8gRXhwcmVzc1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbWluZXN3ZWVwZXJSb3V0ZXIgZnJvbSAnLi9zc3ItY2xpZW50L2luZGV4JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gR3JhcGhRbFxuaW1wb3J0IHsgYnVpbGRTY2hlbWEgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuLy8gTWlrcm8tT3JtXG5pbXBvcnQgbWljcm9Db25maWcgZnJvbSAnLi4vZGF0YWJhc2UvbWlrcm8tb3JtLmNvbmZpZyc7XG4vLyBSZWRpc1xuaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5pbXBvcnQgY29ubmVjdFJlZGlzIGZyb20gJ2Nvbm5lY3QtcmVkaXMnO1xuXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW1wb3J0IHsgQ09PS0lFX05BTUUsIF9fcHJvZF9fIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEJlZ2lubmVyU2NvcmVSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL2JlZ2lubmVyU2NvcmVzJztcbmltcG9ydCB7IEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIgfSBmcm9tICcuL1Jlc29sdmVycy9pbnRlcm1lZGlhdGVTY29yZXMnO1xuaW1wb3J0IHsgQWR2YW5jZWRTY29yZVJlc29sdmVyIH0gZnJvbSAnLi9SZXNvbHZlcnMvYWR2YW5jZWRTY29yZXMnO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnLi9SZXNvbHZlcnMvdXNlcnMnO1xuXG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbiAgY29uc3QgcmVkaXNTdG9yZSA9IGNvbm5lY3RSZWRpcyhzZXNzaW9uKTtcbiAgY29uc3QgcmVkaXNDbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQoKTtcblxuICBjb25zdCBsaW5rID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJyA6ICdodHRwczovL2JlYXRtaW5lc3dlZXBlci5hcHAnO1xuXG5cblxuICBhcHAudXNlKGNvcnMoXG4gICAge1xuICAgICAgb3JpZ2luOiBsaW5rLFxuICAgICAgY3JlZGVudGlhbHM6IHRydWVcbiAgICB9KVxuICApXG5cbiAgYXBwLnVzZShcbiAgICBzZXNzaW9uKHtcbiAgICAgIG5hbWU6IENPT0tJRV9OQU1FLFxuICAgICAgc3RvcmU6IG5ldyByZWRpc1N0b3JlKHtcbiAgICAgICAgY2xpZW50OiByZWRpc0NsaWVudCxcbiAgICAgICAgZGlzYWJsZVRvdWNoOiB0cnVlXG4gICAgICB9KSxcbiAgICAgIGNvb2tpZToge1xuICAgICAgICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMCwgLy8xMCB5ZWFyc1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLCAvL2NzcmZcbiAgICAgICAgc2VjdXJlOiBfX3Byb2RfXyAvLyBjb29raWUgb25seSB3b3JrcyBpbiBodHRwc1xuICAgICAgfSxcbiAgICAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIHNlY3JldDogJ2FiY2RlZmdoaWprbG1ub3AnLFxuICAgICAgcmVzYXZlOiBmYWxzZVxuICAgIH0pXG4gICk7XG5cbiAgY29uc3Qgb3JtID0gYXdhaXQgTWlrcm9PUk0uaW5pdChtaWNyb0NvbmZpZyk7XG4gIGF3YWl0IG9ybS5nZXRNaWdyYXRvcigpLnVwKCk7XG5cbiAgY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBhd2FpdCBidWlsZFNjaGVtYSh7XG4gICAgICByZXNvbHZlcnM6IFtCZWdpbm5lclNjb3JlUmVzb2x2ZXIsIEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIsIEFkdmFuY2VkU2NvcmVSZXNvbHZlciwgVXNlclJlc29sdmVyXSxcbiAgICAgIHZhbGlkYXRlOiBmYWxzZVxuICAgIH0pLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIEFwb2xsb1NlcnZlclBsdWdpbkxhbmRpbmdQYWdlR3JhcGhRTFBsYXlncm91bmQoKSxcbiAgICBdLFxuICAgIGNvbnRleHQ6ICh7IHJlcSwgcmVzIH0pID0+ICh7IGVtOiBvcm0uZW0sIHJlcSwgcmVzIH0pXG4gIH0pO1xuXG4gIGF3YWl0IGFwb2xsb1NlcnZlci5zdGFydCgpO1xuICBhcG9sbG9TZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwLCBjb3JzOiBmYWxzZSB9KTtcblxuICBhcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3RzLWRpc3QvcHVibGljJykpKTtcblxuICBhcHAuZ2V0KCcqJywgbWluZXN3ZWVwZXJSb3V0ZXIpO1xuXG4gIGFwcC5saXN0ZW4oNDAwMCwgKCkgPT4gY29uc29sZS5sb2coJ2JlYXQgbWluZXN3ZWVwZXIgYXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0IDQwMDAnKSk7XG59XG5cbm1haW4oKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9