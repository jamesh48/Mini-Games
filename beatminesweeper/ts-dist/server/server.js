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
    user: "ubuntu",
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
    timerOn: false,
    isProxied: false
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
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
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
const isProxied = (state = false, action) => {
    switch (action.type) {
        case 'SET PROXIED TRUE':
            return true;
        default:
            return state;
    }
};
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
    timerOn,
    isProxied
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
    const [{ isProxied, dimensions, definedUserName, timerOn, dimensions: { skillLevel } }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const [{ flippers, mineArr, numbers, scrollBoard, colorDelay }, boardDispatch] = (0,BoardStore__WEBPACK_IMPORTED_MODULE_2__.useBoardContext)();
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.freezeColorDelayEffect(definedUserName, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.stopColorIterationEffect(colorDelay, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.freezeScrollBoardEffect(scrollBoard);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.generateMinesEffect(dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.generateNumberEffect(mineArr, dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.resetGameEffectOnSmileyOrSkill(timerOn, dimensions, boardDispatch);
    _useEffectBoardHooks__WEBPACK_IMPORTED_MODULE_3__.default.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);
    if (!isProxied) {
        (0,CustomHooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(() => boardDispatch({ type: 'ITERATE COLORS' }), colorDelay);
    }
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
    const [{ isProxied, dimensions: { skillLevel }, definedUserName, dimensions, timerOn }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();
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
            isProxied,
            currTile
        })
            : numbers[currTile] ? (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.genNumberClassNames)({
                skillLevel,
                definedUserName,
                timerOn,
                flippers,
                numbers,
                colors,
                isProxied,
                currTile
            })
                : (0,_squareUtils__WEBPACK_IMPORTED_MODULE_1__.genEmptyClassNames)({
                    skillLevel,
                    definedUserName,
                    timerOn,
                    isProxied,
                    flippers,
                    colors,
                    currTile
                }) }, userNotLoggedIn && !isProxied ?
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
    const { timerOn, definedUserName, skillLevel, currTile, numbers, flippers, colors, isProxied } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null && !isProxied) {
        classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
        return classNameArr.join(' ');
    }
    ;
    const numberTileOnVictoryDeadOrNotLoggedIn = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD' || (!definedUserName && !isProxied));
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
    const { isProxied, skillLevel, definedUserName, timerOn, currTile, colors, flippers } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null && !isProxied) {
        classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
        return classNameArr.join(' ');
    }
    ;
    const emptyTileOnVictoryOrDead = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD');
    const emptyTileOnNotLoggedIn = (!definedUserName && !isProxied);
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
    const { timerOn, skillLevel, currTile, colors, flippers, isProxied } = args;
    let classNameArr = ['sweep-square'];
    if (colors !== null && !isProxied) {
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
                    history.push("/");
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
const LoggedOutView = () => {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    const loginSelected = location.pathname === '/login' || location.pathname === '/fullstack/minesweeper/login';
    const registerSelected = location.pathname === '/register';
    const scoreboardSelected = location.pathname === '/scoreboard';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (loginSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: '/login' }, "Login")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (registerSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: '/register' }, "Register")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: '/scoreboard' }, "High Scores"))));
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
    const [{ isProxied }, globalDispatch] = (0,TSSrc_public_GlobalStore_GlobalStore__WEBPACK_IMPORTED_MODULE_11__.useGlobalContext)();
    const [logout] = (0,TSSrc_generated_graphql__WEBPACK_IMPORTED_MODULE_10__.useLogoutMutation)();
    let headerBody = null;
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        if (window.location.href.indexOf("fullstack") > -1) {
            globalDispatch({ type: 'SET PROXIED TRUE' });
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) {
            globalDispatch({
                type: "SET DEFINED USERNAME",
                payload: {
                    userName: data.me.username,
                },
            });
        }
        else {
            globalDispatch({ type: "UNSET DEFINED USERNAME" });
        }
    }, [data]);
    headerBody = loading ? null : !(data === null || data === void 0 ? void 0 : data.me) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedOutView__WEBPACK_IMPORTED_MODULE_7__.default, null)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Home_HeaderInterfaces_LoggedInView__WEBPACK_IMPORTED_MODULE_6__.default, { username: data.me.username, logout: logout }));
    return !isProxied ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "header-nav" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username)
                    ? `header-nav-ul header-is-concealed`
                    : `header-nav-ul` }, headerBody)),
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
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TSComponents_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_2__.default, null));
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
    const [{ isProxied, dimensions: { skillLevel }, definedUserName, timerOn, }, globalDispatch] = (0,GlobalStore__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
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
        if (timerOn === "VICTORY" && typeof definedUserName === "string" && !isProxied) {
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
        if (isProxied && timerOn === 'VICTORY') {
            setTimeout(() => {
                alert(`
        Congratulations!

        You cleared the board in ${("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2)} seconds!

        check out the full game with login and high scores at...
        https://wwww.beatminesweeper.app

        -James
        `);
            }, 500);
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
        req.session.save(() => { });
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
minesweeperRouter.get('/minesweeper-topTimes', (_, res) => {
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
        secret: 'jambobjones',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUN0RCxDQUFDLENBQUM7SUFFSCxNQUFNLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHFEQUFjLENBQUMsbURBQVksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsc0RBQWlCLENBQUMsQ0FBQztJQUVoQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL3N3ZWVwc3F1YXJlc3R5bGVzLnNjc3M/OTRmYiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL2JvYXJkc3R5bGVzLnNjc3M/YjVlMSIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvaGVhZGVyLnNjc3M/YTcxMCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvaG9tZS5zY3NzP2JmZWQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9sZWFkZXJib2FyZC5zY3NzPzkzMzUiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL21pbGxpc2Vjb25kc3R5bGVzLnNjc3M/MDM3MiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbmVzd2VlcGVyL21pbmVzd2VlcGVyLnNjc3M/ZDIzMyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9za2lsbHN0eWxlcy5zY3NzPzVjZmIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9TbWlsZXlCYXIvc21pbGV5c3R5bGVzLnNjc3M/MjY0NCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy91c2VyRm9ybXMuc2Nzcz9mMTU0Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvQWR2YW5jZWRfU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZGF0YWJhc2UvZW50aXRpZXMvSW50ZXJtZWRpYXRlX1Njb3Jlcy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL2RhdGFiYXNlL2VudGl0aWVzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9kYXRhYmFzZS9taWtyby1vcm0uY29uZmlnLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL0dsb2JhbFN0b3JlL0dsb2JhbFN0b3JlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9HbG9iYWxTdG9yZS9nbG9iYWxSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkU3RvcmUvQm9hcmRTdG9yZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC9Cb2FyZFN0b3JlL2JvYXJkQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL0JvYXJkU3RvcmUvYm9hcmRSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL1NxdWFyZXMvU3F1YXJlLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0JvYXJkL1NxdWFyZXMvc3F1YXJlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Cb2FyZC91c2VFZmZlY3RCb2FyZEhvb2tzLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRJblZpZXcudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9IZWFkZXJJbnRlcmZhY2VzL0xvZ2dlZE91dFZpZXcudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkRW50cnkudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvUGFnaW5hdGlvbi9QYWdlTm9MaS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9MZWFkZXJib2FyZC9QYWdpbmF0aW9uL3BhZ2VOb1VsLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvTWlsbGlzZWNvbmRUaW1lci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL1RpbWVyU3RvcmUvVGltZXJTdG9yZS50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9NaWxsaXNlY29uZFRpbWVyL1RpbWVyU3RvcmUvdGltZXJSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL01pbmVzd2VlcGVyL01pbmVzd2VlcGVyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9Ta2lsbExldmVsU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvU21pbGV5QmFyL1NtaWxleUJhci50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvTG9naW4udHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvcHVibGljL2NvbXBvbmVudHMvVXNlckZvcm1zL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3B1YmxpYy9jb21wb25lbnRzL2N1c3RvbUhvb2tzLnRzeCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9SZXNvbHZlcnMvYWR2YW5jZWRTY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL2JlZ2lubmVyU2NvcmVzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL1Jlc29sdmVycy9pbnRlcm1lZGlhdGVTY29yZXMudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy9zZXJ2ZXIvUmVzb2x2ZXJzL3VzZXJzLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL3Nzci1jbGllbnQvaW5kZXgudHN4Iiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvLi90cy1zcmMvc2VydmVyL3Nzci1jbGllbnQvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC8uL3RzLXNyYy91dGlscy90b0Vycm9yTWFwLnRzIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJAbWlrcm8tb3JtL2NvcmVcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1jb3JlXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJhcmdvbjJcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiY29ubmVjdC1yZWRpc1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImNyb3NzLWZldGNoXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvZXh0ZXJuYWwgXCJ0eXBlLWdyYXBocWxcIiIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JlYXRtaW5lc3dlZXBlci5hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZWF0bWluZXN3ZWVwZXIuYXBwLy4vdHMtc3JjL3NlcnZlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgX19wcm9kX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IGNvbnN0IENPT0tJRV9OQU1FPSdxaWQnO1xuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRTY29yZSB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJvcGVydHkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICB0aW1lITogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgQmVnaW5uZXJTY29yZSB7XG4gIEBGaWVsZCgoKSA9PiBJbnQpXG4gIEBQcmltYXJ5S2V5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgaWQhOiBudW1iZXI7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnIH0pXG4gIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFByb3BlcnR5KHsgdHlwZTogJ2RhdGUnLCBvblVwZGF0ZTogKCkgPT4gbmV3IERhdGUoKSB9KVxuICB1cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICd0ZXh0JyB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJvcGVydHkoeyB0eXBlOiAnbnVtYmVyJyB9KVxuICB0aW1lITogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCwgSW50IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuQE9iamVjdFR5cGUoKVxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgSW50ZXJtZWRpYXRlU2NvcmUge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEludClcbiAgQFByb3BlcnR5KHsgdHlwZTogJ251bWJlcicgfSlcbiAgdGltZSE6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQsIEludCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBARmllbGQoKCkgPT4gSW50KVxuICBAUHJpbWFyeUtleSh7IHR5cGU6ICdudW1iZXInIH0pXG4gIGlkITogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJyB9KVxuICBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBQcm9wZXJ0eSh7IHR5cGU6ICdkYXRlJywgb25VcGRhdGU6ICgpID0+IG5ldyBEYXRlKCkgfSlcbiAgdXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcsIHVuaXF1ZTogdHJ1ZSB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBAUHJvcGVydHkoeyB0eXBlOiAndGV4dCcgfSlcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgQmVnaW5uZXJTY29yZSB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL0JlZ2lubmVyX1Njb3Jlc1wiO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmUgfSBmcm9tIFwiVFNEYXRhYmFzZS9lbnRpdGllcy9JbnRlcm1lZGlhdGVfU2NvcmVzXCI7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvQWR2YW5jZWRfU2NvcmVzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIlRTRGF0YWJhc2UvZW50aXRpZXMvVXNlclwiO1xuaW1wb3J0IHsgX19wcm9kX18gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gXCJAbWlrcm8tb3JtL2NvcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBwYXRoOiBcIi4vdHMtc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnNcIixcbiAgICBwYXR0ZXJuOiAvXltcXHctXStcXGQrXFwuW3RqXXMkLyxcbiAgfSxcbiAgZW50aXRpZXM6IFtCZWdpbm5lclNjb3JlLCBJbnRlcm1lZGlhdGVTY29yZSwgQWR2YW5jZWRTY29yZSwgVXNlcl0sXG4gIGRiTmFtZTogXCJNaW5lc3dlZXBlclwiLFxuICB0eXBlOiBcInBvc3RncmVzcWxcIixcbiAgZGVidWc6ICFfX3Byb2RfXyxcbiAgcG9ydDogNTQzMixcbiAgdXNlcjogXCJ1YnVudHVcIixcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBHUGFzc3dvcmRcbn0gYXMgUGFyYW1ldGVyczx0eXBlb2YgTWlrcm9PUk0uaW5pdD5bMF07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlID0ge1xuICBfX3R5cGVuYW1lPzogJ0JlZ2lubmVyU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpbWU6IFNjYWxhcnNbJ0ludCddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGRlbGV0ZVVzZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIG5ld0FkdmFuY2VkU2NvcmU/OiBNYXliZTxBZHZhbmNlZFNjb3JlPjtcbiAgbmV3QmVnaW5uZXJTY29yZT86IE1heWJlPEJlZ2lubmVyU2NvcmU+O1xuICBuZXdJbnRlcm1lZGlhdGVTY29yZT86IE1heWJlPEludGVybWVkaWF0ZVNjb3JlPjtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVVc2VyQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTmV3QWR2YW5jZWRTY29yZUFyZ3MgPSB7XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25OZXdCZWdpbm5lclNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbk5ld0ludGVybWVkaWF0ZVNjb3JlQXJncyA9IHtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8QWR2YW5jZWRTY29yZT47XG4gIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTxCZWdpbm5lclNjb3JlPjtcbiAgYWxsSW50ZXJtZWRpYXRlU2NvcmVzOiBBcnJheTxJbnRlcm1lZGlhdGVTY29yZT47XG4gIGdldEFsbFVzZXJzOiBBcnJheTxVc2VyPjtcbiAgZ2V0U2luZ2xlVXNlcjogVXNlclJlc3BvbnNlO1xuICBtZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldFNpbmdsZVVzZXJBcmdzID0ge1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyRnJhZ21lbnQgPSB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ2luOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGxvZ291dDogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0FkdmFuY2VkU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQWR2YW5jZWRTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGltZTogU2NhbGFyc1snRmxvYXQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIG5ld0JlZ2lubmVyU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpbWU6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uID0geyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJywgbmV3SW50ZXJtZWRpYXRlU2NvcmU/OiB7IF9fdHlwZW5hbWU/OiAnSW50ZXJtZWRpYXRlU2NvcmUnLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIHJlZ2lzdGVyOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsIHwgdW5kZWZpbmVkLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIHwgdW5kZWZpbmVkIH0gfTtcblxuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFkdmFuY2VkU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxBZHZhbmNlZFNjb3JlczogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0FkdmFuY2VkU2NvcmUnLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIsIGNyZWF0ZWRBdDogc3RyaW5nLCB1cGRhdGVkQXQ6IHN0cmluZyB9PiB9O1xuXG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeSA9IHsgX190eXBlbmFtZT86ICdRdWVyeScsIGFsbEJlZ2lubmVyU2NvcmVzOiBBcnJheTx7IF9fdHlwZW5hbWU/OiAnQmVnaW5uZXJTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnkgPSB7IF9fdHlwZW5hbWU/OiAnUXVlcnknLCBhbGxJbnRlcm1lZGlhdGVTY29yZXM6IEFycmF5PHsgX190eXBlbmFtZT86ICdJbnRlcm1lZGlhdGVTY29yZScsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHRpbWU6IG51bWJlciwgY3JlYXRlZEF0OiBzdHJpbmcsIHVwZGF0ZWRBdDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgbWU/OiB7IF9fdHlwZW5hbWU/OiAnVXNlcicsIGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcgfSB8IG51bGwgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXIgb24gVXNlciB7XG4gIGlkXG4gIHVzZXJuYW1lXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIGxvZ2luKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dvdXRNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dvdXRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dvdXRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ291dE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBBZHZhbmNlZFNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWR2YW5jZWRTY29yZSgkdXNlcm5hbWU6IFN0cmluZyEsICR0aW1lOiBGbG9hdCEpIHtcbiAgbmV3QWR2YW5jZWRTY29yZSh1c2VybmFtZTogJHVzZXJuYW1lLCB0aW1lOiAkdGltZSkge1xuICAgIHVzZXJuYW1lXG4gICAgdGltZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFthZHZhbmNlZFNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdXNlcm5hbWU6IC8vIHZhbHVlIGZvciAndXNlcm5hbWUnXG4gKiAgICAgIHRpbWU6IC8vIHZhbHVlIGZvciAndGltZSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8QWR2YW5jZWRTY29yZU11dGF0aW9uLCBBZHZhbmNlZFNjb3JlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPEFkdmFuY2VkU2NvcmVNdXRhdGlvbiwgQWR2YW5jZWRTY29yZU11dGF0aW9uVmFyaWFibGVzPihBZHZhbmNlZFNjb3JlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQWR2YW5jZWRTY29yZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFkdmFuY2VkU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZHZhbmNlZFNjb3JlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8QWR2YW5jZWRTY29yZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFkdmFuY2VkU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxBZHZhbmNlZFNjb3JlTXV0YXRpb24sIEFkdmFuY2VkU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQmVnaW5uZXJTY29yZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEJlZ2lubmVyU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0JlZ2lubmVyU2NvcmUodXNlcm5hbWU6ICR1c2VybmFtZSwgdGltZTogJHRpbWUpIHtcbiAgICB1c2VybmFtZVxuICAgIHRpbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbYmVnaW5uZXJTY29yZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgQmVnaW5uZXJTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxCZWdpbm5lclNjb3JlTXV0YXRpb24sIEJlZ2lubmVyU2NvcmVNdXRhdGlvblZhcmlhYmxlcz4oQmVnaW5uZXJTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEJlZ2lubmVyU2NvcmVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VCZWdpbm5lclNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQmVnaW5uZXJTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEJlZ2lubmVyU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBCZWdpbm5lclNjb3JlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8QmVnaW5uZXJTY29yZU11dGF0aW9uLCBCZWdpbm5lclNjb3JlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEludGVybWVkaWF0ZVNjb3JlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gSW50ZXJtZWRpYXRlU2NvcmUoJHVzZXJuYW1lOiBTdHJpbmchLCAkdGltZTogRmxvYXQhKSB7XG4gIG5ld0ludGVybWVkaWF0ZVNjb3JlKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHRpbWU6ICR0aW1lKSB7XG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248SW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiwgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2ludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHVzZXJuYW1lOiAvLyB2YWx1ZSBmb3IgJ3VzZXJuYW1lJ1xuICogICAgICB0aW1lOiAvLyB2YWx1ZSBmb3IgJ3RpbWUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPihJbnRlcm1lZGlhdGVTY29yZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEludGVybWVkaWF0ZVNjb3JlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uLCBJbnRlcm1lZGlhdGVTY29yZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgLi4uUmVndWxhclVzZXJcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVnaXN0ZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlZ2lzdGVyTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVnaXN0ZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUmVnaXN0ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEFkdmFuY2VkU2NvcmVzIHtcbiAgYWxsQWR2YW5jZWRTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRBZHZhbmNlZFNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBZHZhbmNlZFNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEFkdmFuY2VkU2NvcmVzUXVlcnksIEdldEFkdmFuY2VkU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEFkdmFuY2VkU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QWR2YW5jZWRTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWR2YW5jZWRTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5LCBHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEJlZ2lubmVyU2NvcmVzIHtcbiAgYWxsQmVnaW5uZXJTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRCZWdpbm5lclNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRCZWdpbm5lclNjb3Jlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEJlZ2lubmVyU2NvcmVzUXVlcnksIEdldEJlZ2lubmVyU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEJlZ2lubmVyU2NvcmVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEJlZ2lubmVyU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QmVnaW5uZXJTY29yZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QmVnaW5uZXJTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5LCBHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRJbnRlcm1lZGlhdGVTY29yZXMge1xuICBhbGxJbnRlcm1lZGlhdGVTY29yZXMge1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICB0aW1lXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8R2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksIEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5VmFyaWFibGVzPihHZXRJbnRlcm1lZGlhdGVTY29yZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPEdldEludGVybWVkaWF0ZVNjb3Jlc1F1ZXJ5LCBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+KEdldEludGVybWVkaWF0ZVNjb3Jlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0SW50ZXJtZWRpYXRlU2NvcmVzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEludGVybWVkaWF0ZVNjb3Jlc0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSwgR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNZVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lUXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWVMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSAnLi9nbG9iYWxSZWR1Y2Vycyc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBEZWZpbmVkVXNlck5hbWUsIFRpbWVyT24sIElzUHJveGllZCB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5cbmludGVyZmFjZSBJU3RhdGVUeXBlcyB7XG4gIGRpbWVuc2lvbnM6IERpbWVuc2lvbnNcbiAgdG9wVGltZXM6IFtdO1xuICBkZWZpbmVkVXNlck5hbWU6IERlZmluZWRVc2VyTmFtZTtcbiAgdGltZXJPbjogVGltZXJPbjtcbiAgaXNQcm94aWVkOiBJc1Byb3hpZWQ7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZVR5cGVzID0ge1xuICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9LFxuICB0b3BUaW1lczogW10sXG4gIGRlZmluZWRVc2VyTmFtZTogbnVsbCxcbiAgdGltZXJPbjogZmFsc2UsXG4gIGlzUHJveGllZDogZmFsc2Vcbn07XG5cblxuY29uc3QgR2xvYmFsU3RvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxbSVN0YXRlVHlwZXMsIFJlYWN0LkRpc3BhdGNoPGFueT5dPihbaW5pdGlhbFN0YXRlLCAoKSA9PiB7IH1dKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50XG59XG5cbmNvbnN0IEdsb2JhbFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbzxhbnk+KCgpID0+IFtzdGF0ZSwgZGlzcGF0Y2hdLCBbc3RhdGVdKTtcbiAgcmV0dXJuIChcbiAgICAvLyB2YWx1ZSB3YXMgcHJldmlvdXNseSBzdG9yZVxuICAgIDxHbG9iYWxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9HbG9iYWxTdG9yZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFN0b3JlQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdsb2JhbENvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdsb2JhbENvbnRleHRQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5cbmV4cG9ydCB7IHVzZUdsb2JhbENvbnRleHQsIEdsb2JhbFN0b3JlUHJvdmlkZXIgfTsiLCJpbXBvcnQge0lzUHJveGllZH0gZnJvbSAnTWluZXN3ZWVwZXJUeXBlcyc7XG5cbnR5cGUgSXNQcm94aWVkQWN0aW9uID0ge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGlzUHJveGllZCA9IChzdGF0ZTogSXNQcm94aWVkID0gZmFsc2UsIGFjdGlvbjogSXNQcm94aWVkQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVQgUFJPWElFRCBUUlVFJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbnR5cGUgVGltZXJPblR5cGUgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xufTtcblxuY29uc3QgdGltZXJPbiA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb246IFRpbWVyT25UeXBlKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU1dJVENIIFRJTUVSIE9OXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFwiU1dJVENIIFRJTUVSIE9GRlwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgXCJGUkVFWkUgVElNRVIgU1RBVEUgV0lOXCI6XG4gICAgICByZXR1cm4gXCJGUkVFWkUgV0lOXCI7XG4gICAgY2FzZSBcIkZSRUVaRSBUSU1FUiBTVEFURSBERUFEXCI6XG4gICAgICByZXR1cm4gJ0ZSRUVaRSBERUFEJztcbiAgICBjYXNlIFwiRlJFRVpFIFRJTUVSIFNUQVRFIFZJQ1RPUllcIjpcbiAgICAgIHJldHVybiAnVklDVE9SWSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBEaW1lbnNpb25BY3Rpb24gPSB7XG4gIHR5cGU6IHN0cmluZztcbn07XG5cbmNvbnN0IGRpbWVuc2lvbnMgPSAoc3RhdGUgPSB7IHNraWxsTGV2ZWw6ICdiZWdpbm5lcicsIHZlcnRpY2FsRGltZW5zaW9uOiA5LCBob3Jpem9udGFsRGltZW5zaW9uOiA5LCBudW1iZXJPZk1pbmVzOiAxMCB9LCBhY3Rpb246IERpbWVuc2lvbkFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVCBCRUdJTk5FUiBESU1FTlNJT05TXCI6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnYmVnaW5uZXInLCB2ZXJ0aWNhbERpbWVuc2lvbjogOSwgaG9yaXpvbnRhbERpbWVuc2lvbjogOSwgbnVtYmVyT2ZNaW5lczogMTAgfTtcbiAgICBjYXNlIFwiU0VUIElOVEVSTUVESUFURSBESU1FTlNJT05TXCI6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnaW50ZXJtZWRpYXRlJywgdmVydGljYWxEaW1lbnNpb246IDE2LCBob3Jpem9udGFsRGltZW5zaW9uOiAxNiwgbnVtYmVyT2ZNaW5lczogNDAgfTtcbiAgICBjYXNlICdTRVQgQURWQU5DRUQgRElNRU5TSU9OUyc6XG4gICAgICByZXR1cm4geyBza2lsbExldmVsOiAnYWR2YW5jZWQnLCB2ZXJ0aWNhbERpbWVuc2lvbjogMTYsIGhvcml6b250YWxEaW1lbnNpb246IDMwLCBudW1iZXJPZk1pbmVzOiA5OSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCB0b3BUaW1lcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb246XG4gIHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IHRvcFRpbWVzOiBzdHJpbmdbXX0gfVxuICApID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVCBUT1AgVElNRVNcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC50b3BUaW1lcztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjb25zdCByZWR1Y2VSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4ge1xuLy8gICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pID0+IHJlZHVjZXJzLnJlZHVjZSgoYWNjLCBuZXh0UmVkdWNlcikgPT4gbmV4dFJlZHVjZXIoYWNjLCBhY3Rpb24pLCBzdGF0ZSlcbi8vIH07XG5cblxuY29uc3QgZGVmaW5lZFVzZXJOYW1lID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uOlxuICB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogeyB1c2VyTmFtZTogc3RyaW5nIH0gfVxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUIERFRklORUQgVVNFUk5BTUVcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC51c2VyTmFtZTtcbiAgICBjYXNlIFwiVU5TRVQgREVGSU5FRCBVU0VSTkFNRVwiOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbi8vICAgYTogcmVkdWNlUmVkdWNlcnMocGx1c09uZVJlZHVjZXIsIHBsdXNPbmVSZWR1Y2VyKSwgLy8gYU5ldyA9IGFPbGQgKyAxICsgMVxuLy8gICBiOiByZWR1Y2VSZWR1Y2Vycyh0aW1lc1R3b1JlZHVjZXIsIHBsdXNPbmVSZWR1Y2VyKSAvLyBiTmV3ID0gYk9sZCAqIDIgKyAxXG4vLyB9KTtcblxuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAoc2xpY2VzOiBhbnkpID0+IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4gT2JqZWN0LmtleXMoc2xpY2VzKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4gKHtcbiAgLi4uYWNjLFxuICBbcHJvcF06IHNsaWNlc1twcm9wXShhY2NbcHJvcF0sIGFjdGlvbiksXG59KSxcbiAgc3RhdGVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGRpbWVuc2lvbnMsXG4gIGRlZmluZWRVc2VyTmFtZSxcbiAgdG9wVGltZXMsXG4gIHRpbWVyT24sXG4gIGlzUHJveGllZFxufSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgQm9hcmRIb29rcyBmcm9tICcuL3VzZUVmZmVjdEJvYXJkSG9va3MnO1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tICdDdXN0b21Ib29rcyc7XG5pbXBvcnQgU3F1YXJlIGZyb20gJ1RTQ29tcG9uZW50cy9Cb2FyZC9TcXVhcmVzL1NxdWFyZSc7XG5cbmltcG9ydCAnLi9ib2FyZHN0eWxlcy5zY3NzJztcblxuXG5jb25zdCBCb2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGlzUHJveGllZCwgZGltZW5zaW9ucywgZGVmaW5lZFVzZXJOYW1lLCB0aW1lck9uLCBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSB9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KClcbiAgY29uc3QgW3sgZmxpcHBlcnMsIG1pbmVBcnIsIG51bWJlcnMsIHNjcm9sbEJvYXJkLCBjb2xvckRlbGF5IH0sIGJvYXJkRGlzcGF0Y2hdID0gdXNlQm9hcmRDb250ZXh0KCk7XG5cbiAgLy8gQm9hcmQgU3BlY2lmaWMgdXNlRWZmZWN0cyAmJiBhY3Rpb25zLlxuICBCb2FyZEhvb2tzLmZyZWV6ZUNvbG9yRGVsYXlFZmZlY3QoZGVmaW5lZFVzZXJOYW1lLCBib2FyZERpc3BhdGNoKTtcbiAgQm9hcmRIb29rcy5zdG9wQ29sb3JJdGVyYXRpb25FZmZlY3QoY29sb3JEZWxheSwgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3MuZnJlZXplU2Nyb2xsQm9hcmRFZmZlY3Qoc2Nyb2xsQm9hcmQpO1xuICBCb2FyZEhvb2tzLmdlbmVyYXRlTWluZXNFZmZlY3QoZGltZW5zaW9ucywgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3MuZ2VuZXJhdGVOdW1iZXJFZmZlY3QobWluZUFyciwgZGltZW5zaW9ucywgYm9hcmREaXNwYXRjaCk7XG4gIEJvYXJkSG9va3MucmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsKHRpbWVyT24sIGRpbWVuc2lvbnMsIGJvYXJkRGlzcGF0Y2gpO1xuICBCb2FyZEhvb2tzLnJlc2V0RmxhZ3NSZW1haW5pbmdPblNraWxsQ2hhbmdlT3JUaW1lck9uKHRpbWVyT24sIHNraWxsTGV2ZWwsIGJvYXJkRGlzcGF0Y2gpO1xuXG4gIC8vIGNvbnN0IHNldFNjcm9sbEJvYXJkQ2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRSBTQ1JPTExCT0FSRCcgfSksIFtdKTtcblxuICBpZiAoIWlzUHJveGllZCkge1xuICAgIHVzZUludGVydmFsKCgpID0+IGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnSVRFUkFURSBDT0xPUlMnIH0pLCBjb2xvckRlbGF5KTtcbiAgfVxuXG4gIC8vIE1peGVkIVxuICBCb2FyZEhvb2tzLnJldmVhbEZsaXBwZXJFZmZlY3QoeyBtaW5lQXJyLCBmbGlwcGVycywgbnVtYmVycywgZ2xvYmFsRGlzcGF0Y2gsIGJvYXJkRGlzcGF0Y2ggfSk7XG5cbiAgLy8gR2xvYmFsIEJvYXJkIHVzZUVmZmVjdHNcbiAgQm9hcmRIb29rcy5yZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdChza2lsbExldmVsLCBnbG9iYWxEaXNwYXRjaCk7XG5cblxuICBjb25zdCBzZXRTY3JvbGxCb2FyZENhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFIFNDUk9MTEJPQVJEXCIgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZTogUmVhY3QuV2hlZWxFdmVudCkgPT5cbiAgYm9hcmREaXNwYXRjaCh7XG4gICAgdHlwZTogXCJNT0RVTEFURSBDT0xPUiBERUxBWVwiLFxuICAgIHBheWxvYWQ6IHsgbmV3Q29sb3JEZWxheTogZS5kZWx0YVkgfSxcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIGlkPVwicGxheS1ib2FyZFwiXG4gICAgb25XaGVlbD17KGUpID0+IGNvbG9yRGVsYXkgPyBoYW5kbGVTY3JvbGwoZSkgOiBudWxsfVxuICAgIG9uTW91c2VFbnRlcj17KCkgPT4gY29sb3JEZWxheSA/IHNldFNjcm9sbEJvYXJkQ2FsbGJhY2soKSA6IG51bGx9XG4gICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBjb2xvckRlbGF5ID8gc2V0U2Nyb2xsQm9hcmRDYWxsYmFjaygpIDogbnVsbH1cbiAgICA+XG4gICAgICB7Wy4uLm5ldyBBcnJheShkaW1lbnNpb25zLnZlcnRpY2FsRGltZW5zaW9uKV0ubWFwKChfLCByb3dJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPSdzd2VlcC1yb3cnPlxuICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uKV0ubWFwKChfLCBzcXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyVGlsZTogbnVtYmVyID0gKChyb3dJbmRleCAqIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbikgKyBzcXJJbmRleCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNxdWFyZSBrZXk9e3NxckluZGV4fSBjdXJyVGlsZT17Y3VyclRpbGV9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXYgPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vYm9hcmRSZWR1Y2Vycyc7XG5pbXBvcnQgeyBDb2xvcnMsIEZsYWdzUmVtYWluaW5nLCBTdXJwcmlzZWQsIE51bWJlcnMsIE1pbmVBcnIsIEZsaXBwZXJzLCBDb2xvckRlbGF5LCBTY3JvbGxCb2FyZCB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZXMge1xuICBzY3JvbGxCb2FyZDogU2Nyb2xsQm9hcmQ7XG4gIGNvbG9yRGVsYXk6IENvbG9yRGVsYXk7XG4gIGZsaXBwZXJzOiBGbGlwcGVycztcbiAgbWluZUFycjogTWluZUFycjtcbiAgbnVtYmVyczogTnVtYmVycztcbiAgc3VycHJpc2VkOiBTdXJwcmlzZWQ7XG4gIGZsYWdzUmVtYWluaW5nOiBGbGFnc1JlbWFpbmluZztcbiAgY29sb3JzOiBDb2xvcnM7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlVHlwZXMgPSB7XG4gIHNjcm9sbEJvYXJkOiBmYWxzZSxcbiAgY29sb3JEZWxheTogMTAwMCxcbiAgZmxpcHBlcnM6IFtdLFxuICBtaW5lQXJyOiBbXSxcbiAgbnVtYmVyczoge30sXG4gIHN1cnByaXNlZDogZmFsc2UsXG4gIGZsYWdzUmVtYWluaW5nOiAxMCxcbiAgY29sb3JzOiBbJ2JsdWUtbnVtJywgJ2dyZWVuLW51bScsICdyZWQtbnVtJywgJ2dvbGQtbnVtJywgJ3B1cnBsZS1udW0nLCAnbWFyb29uLW51bScsICd0dXJxdW9pc2UtbnVtJywgJ2dyZXktbnVtJ11cbn07XG5cbmNvbnN0IEJvYXJkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8W0lTdGF0ZVR5cGVzLCBSZWFjdC5EaXNwYXRjaDxhbnk+XT4oW2luaXRpYWxTdGF0ZSwgKCkgPT4geyB9XSk7XG5cblxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXVxufVxuXG5jb25zdCBCb2FyZFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvYXJkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0JvYXJkQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUJvYXJkQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQm9hcmRDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ291bnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvdW50UHJvdmlkZXInKTtcbiAgfTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cblxuXG5cbmV4cG9ydCB7IHVzZUJvYXJkQ29udGV4dCwgQm9hcmRTdG9yZVByb3ZpZGVyIH07IiwiaW1wb3J0IHtHZW5lcmF0ZU51bWJlcnNGdW5jLCBJdGVyYXRlQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuXG5jb25zdCBpdGVyYXRlQ29sb3JzOiBJdGVyYXRlQ29sb3JzRnVuYyA9IChleGlzdGluZ0NvbG9ycykgPT4ge1xuICBjb25zdCBsYXN0Q29sb3IgPSBleGlzdGluZ0NvbG9ycy5wb3AoKTtcbiAgZXhpc3RpbmdDb2xvcnMudW5zaGlmdChsYXN0Q29sb3IpO1xuICByZXR1cm4gWy4uLmV4aXN0aW5nQ29sb3JzXTtcbn07XG5cblxudHlwZSBNb2R1bGF0ZUNvbG9yRGVsYXlGdW5jID0gKGV4aXN0aW5nOiBudW1iZXIsIG5ld0NvbG9yRGVsYXk6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5jb25zdCBtb2R1bGF0ZUNvbG9yRGVsYXk6IE1vZHVsYXRlQ29sb3JEZWxheUZ1bmMgPSAoZXhpc3RpbmcsIG5ld0NvbG9yRGVsYXkpID0+IHtcbiAgaWYgKChleGlzdGluZyArIG5ld0NvbG9yRGVsYXkpID4gMjUpIHtcbiAgICAvLyBJZiBJbmNyZWFzaW5nIHRoZSBDb2xvciBEZWxheS0gZG8gc28gYXQgYSByYXRlIG9mIDEsIG90aGVyd2lzZSB3aGVuIGRlY3JlYXNpbmcgZG8gc28gYXQgMi41IHJhdGUtIGZ1bGwgcmF0ZSBpcyBsZXNzIGVuam95YWJsZVxuICAgIG5ld0NvbG9yRGVsYXkgPSBuZXdDb2xvckRlbGF5IDwgMCAmJiBleGlzdGluZyA8IDIwMCA/IG5ld0NvbG9yRGVsYXkgLyA1XG4gICAgICA6IG5ld0NvbG9yRGVsYXkgPCAwID8gbmV3Q29sb3JEZWxheSAvIDIuNVxuICAgICAgICA6IDFcbiAgICByZXR1cm4gZXhpc3RpbmcgKyBuZXdDb2xvckRlbGF5O1xuICB9XG4gIHJldHVybiBleGlzdGluZztcbn07XG5cblxudHlwZSBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVyczogKHN0cmluZyB8IGJvb2xlYW4pW10sIG1pbmVzOiBudW1iZXJbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbEZsaXBwZXJzOiBSZXZlYWxGbGlwcGVyc0Z1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgbWluZXMpID0+IHtcbiAgZXhpc3RpbmdGbGlwcGVycyA9IGV4aXN0aW5nRmxpcHBlcnMubWFwKChmbGlwcGVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChmbGlwcGVyID09PSAnZmxhZycgfHwgbWluZXM/LmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgcmV0dXJuICdmbGFnJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxpcHBlZFRpbGU6IG51bWJlcikgPT4gKHN0cmluZyB8Ym9vbGVhbilbXTtcblxuY29uc3QgZmxpcE5vcm1hbFRpbGU6IEZsaXBOb3JtYWxUaWxlRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzLCBmbGlwcGVkVGlsZSkgPT4ge1xuICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGlwcGVkVGlsZSwgMSwgdHJ1ZSk7XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEZsaXBSZWN1cnNlZFRpbGVzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgcmVjdXJzZWRUaWxlczogbnVtYmVyW10pID0+IChzdHJpbmcgfCBib29sZWFuKVtdO1xuXG5jb25zdCBmbGlwUmVjdXJzZWRUaWxlczogRmxpcFJlY3Vyc2VkVGlsZXNGdW5jID0gKGV4aXN0aW5nRmxpcHBlcnMsIHJlY3Vyc2VkVGlsZXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWN1cnNlZFRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZXhpc3RpbmdGbGlwcGVycy5zcGxpY2UocmVjdXJzZWRUaWxlc1tpXSwgMSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5leGlzdGluZ0ZsaXBwZXJzXTtcbn07XG5cbnR5cGUgUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSkgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHJldmVhbERlYWRGbGlwcGVyczogUmV2ZWFsRGVhZEZsaXBwZXJzRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzKSA9PiB7XG4gIGV4aXN0aW5nRmxpcHBlcnMgPSBleGlzdGluZ0ZsaXBwZXJzLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiAnZGVhZCdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KVxuICByZXR1cm4gWy4uLmV4aXN0aW5nRmxpcHBlcnNdXG59O1xuXG50eXBlIFNldEZsYWdGbGlwcGVkRnVuYyA9IChleGlzdGluZ0ZsaXBwZXJzOiAoc3RyaW5nIHwgYm9vbGVhbilbXSwgZmxhZ0ZsaXBwZWQ6IG51bWJlcikgPT4gKHN0cmluZyB8IGJvb2xlYW4pW107XG5cbmNvbnN0IHNldEZsYWdGbGlwcGVkOiBTZXRGbGFnRmxpcHBlZEZ1bmMgPSAoZXhpc3RpbmdGbGlwcGVycywgZmxhZ0ZsaXBwZWQpID0+IHtcbiAgaWYgKGV4aXN0aW5nRmxpcHBlcnNbZmxhZ0ZsaXBwZWRdID09PSAnZmxhZycpIHtcbiAgICBleGlzdGluZ0ZsaXBwZXJzLnNwbGljZShmbGFnRmxpcHBlZCwgMSwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGV4aXN0aW5nRmxpcHBlcnMuc3BsaWNlKGZsYWdGbGlwcGVkLCAxLCAnZmxhZycpO1xuICB9XG4gIHJldHVybiBbLi4uZXhpc3RpbmdGbGlwcGVyc107XG59O1xuXG50eXBlIEdlbmVyYXRlTWluZXNGdW5jID0gKGRpbWVuc2lvbnM6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyLCBob3Jpem9udGFsRGltZW5zaW9uOiBudW1iZXIgfSkgPT4gbnVtYmVyW107XG5cbmNvbnN0IGdlbmVyYXRlTWluZXM6IEdlbmVyYXRlTWluZXNGdW5jID0gKHsgbnVtYmVyT2ZNaW5lcywgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSkgPT4ge1xuICBsZXQgZ2VuZXJhdGVkTWluZXM6IG51bWJlcltdID0gW107XG4gIHdoaWxlIChnZW5lcmF0ZWRNaW5lcy5sZW5ndGggPCBudW1iZXJPZk1pbmVzKSB7XG4gICAgY29uc3QgbWluZUNhbmlkYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikpO1xuICAgIGlmICghZ2VuZXJhdGVkTWluZXMuaW5jbHVkZXMobWluZUNhbmlkYXRlKSkge1xuICAgICAgZ2VuZXJhdGVkTWluZXMucHVzaChtaW5lQ2FuaWRhdGUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGdlbmVyYXRlZE1pbmVzO1xufTtcblxuXG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyczogR2VuZXJhdGVOdW1iZXJzRnVuYyA9ICh7IG1pbmVBcnIsIHZlcnRpY2FsRGltZW5zaW9uLCBob3Jpem9udGFsRGltZW5zaW9uIH0pID0+IHtcbiAgbGV0IGJvYXJkID0gWy4uLkFycmF5KHZlcnRpY2FsRGltZW5zaW9uICogaG9yaXpvbnRhbERpbWVuc2lvbikua2V5cygpXTtcbiAgbGV0IG51bUJvYXJkID0ge307XG5cbiAgbWluZUFycj8uZm9yRWFjaCgobWluZSwgXywgbWluZXMpID0+IHtcbiAgICAvLyBOdW1iZXIgaXMgVG9wIExlZnQgRGlhZ29uYWxcbiAgICBsZXQgdExEID0gaG9yaXpvbnRhbERpbWVuc2lvbiArIDE7XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0TEQpICYmICgoKG1pbmUgLSB0TEQpICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIHRMRCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdExEXSkge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdExEXSA9IG51bUJvYXJkW21pbmUgLSB0TERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0TERdID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOdW1iZXIgaXMgQWJvdmVcbiAgICBjb25zdCB0RCA9IGhvcml6b250YWxEaW1lbnNpb247XG4gICAgaWYgKGJvYXJkLmluY2x1ZGVzKG1pbmUgLSB0RCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0RCkpIHtcbiAgICAgIGlmIChudW1Cb2FyZFttaW5lIC0gdERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSBudW1Cb2FyZFttaW5lIC0gdERdICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSB0RF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vTnVtYmVyIGlzIFRvcCBSaWdodCBEaWFnb25hbFxuICAgIGNvbnN0IHRSRCA9IGhvcml6b250YWxEaW1lbnNpb24gLSAxO1xuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gdFJEKSAmJiAoKG1pbmUgLSB0UkQpICUgaG9yaXpvbnRhbERpbWVuc2lvbiAhPT0gMCkgJiYgIW1pbmVzLmluY2x1ZGVzKG1pbmUgLSB0UkQpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIHRSRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSAtIHRSRF0gPSBudW1Cb2FyZFttaW5lIC0gdFJEXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gdFJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTnVtYmVyIHRvIHRoZSByaWdodFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lICsgMSkgJiYgKChtaW5lICsgMSkgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSArIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyAxXSA9IG51bUJvYXJkW21pbmUgKyAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lICsgMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCb3R0b20gUmlnaHQgRGlhZ29uYWxcbiAgICBjb25zdCBiUkQgPSBob3Jpem9udGFsRGltZW5zaW9uICsgMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJSRCkgJiYgKChtaW5lICsgYlJEKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYlJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiUkRdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiUkRdID0gbnVtQm9hcmRbbWluZSArIGJSRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJSRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciBpcyBCZWxvd1xuICAgIGNvbnN0IGJEID0gaG9yaXpvbnRhbERpbWVuc2lvbjtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJEKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSArIGJEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiRF0pIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IG51bUJvYXJkW21pbmUgKyBiRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJEXSA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9OdW1iZXIgaXMgQm90dG9tIExlZnQgRGlhZ29uYWxcbiAgICBjb25zdCBiTEQgPSBob3Jpem9udGFsRGltZW5zaW9uIC0gMTtcbiAgICBpZiAoYm9hcmQuaW5jbHVkZXMobWluZSArIGJMRCkgJiYgKCgobWluZSArIGJMRCkgKyAxKSAlIGhvcml6b250YWxEaW1lbnNpb24gIT09IDApICYmICFtaW5lcy5pbmNsdWRlcyhtaW5lICsgYkxEKSkge1xuICAgICAgaWYgKG51bUJvYXJkW21pbmUgKyBiTERdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgKyBiTERdID0gbnVtQm9hcmRbbWluZSArIGJMRF0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtQm9hcmRbbWluZSArIGJMRF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE51bWJlciB0byB0aGUgbGVmdFxuICAgIGlmIChib2FyZC5pbmNsdWRlcyhtaW5lIC0gMSkgJiYgKG1pbmUgJSBob3Jpem9udGFsRGltZW5zaW9uICE9PSAwKSAmJiAhbWluZXMuaW5jbHVkZXMobWluZSAtIDEpKSB7XG4gICAgICBpZiAobnVtQm9hcmRbbWluZSAtIDFdKSB7XG4gICAgICAgIG51bUJvYXJkW21pbmUgLSAxXSA9IG51bUJvYXJkW21pbmUgLSAxXSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1Cb2FyZFttaW5lIC0gMV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICB9KVxuICByZXR1cm4gbnVtQm9hcmQ7XG59O1xuXG5cbmV4cG9ydCB7XG4gIC8vIENvbG9yc1xuICBpdGVyYXRlQ29sb3JzLFxuICBtb2R1bGF0ZUNvbG9yRGVsYXksXG4gIC8vIEZsaXBwZXJzXG4gIHJldmVhbEZsaXBwZXJzLFxuICBmbGlwTm9ybWFsVGlsZSxcbiAgZmxpcFJlY3Vyc2VkVGlsZXMsXG4gIHJldmVhbERlYWRGbGlwcGVycyxcbiAgc2V0RmxhZ0ZsaXBwZWQsXG4gIC8vIE1pbmVzXG4gIGdlbmVyYXRlTWluZXMsXG4gIC8vIE51bWJlcnNcbiAgZ2VuZXJhdGVOdW1iZXJzLFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgaXRlcmF0ZUNvbG9ycyxcbiAgbW9kdWxhdGVDb2xvckRlbGF5LFxuICByZXZlYWxGbGlwcGVycyxcbiAgZmxpcE5vcm1hbFRpbGUsXG4gIGZsaXBSZWN1cnNlZFRpbGVzLFxuICByZXZlYWxEZWFkRmxpcHBlcnMsXG4gIHNldEZsYWdGbGlwcGVkLFxuICBnZW5lcmF0ZU1pbmVzLFxuICBnZW5lcmF0ZU51bWJlcnNcbn0gZnJvbSAnLi9ib2FyZEFjdGlvbnMnO1xuaW1wb3J0IHtGbGlwcGVyc0Z1bmMsIFNjcm9sbEJvYXJkRnVuYywgQ29sb3JzRnVuY30gZnJvbSAnLi4vYm9hcmQtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sb3JEZWxheUZ1bmNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3Qgc2Nyb2xsQm9hcmQ6IFNjcm9sbEJvYXJkRnVuYyA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPR0dMRSBTQ1JPTExCT0FSRCc6XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuY29uc3QgY29sb3JEZWxheTogQ29sb3JEZWxheUZ1bmMgPSAoc3RhdGUgPSAxMDAwLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJVTlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSBcIlNFVCBDT0xPUiBERUxBWVwiOlxuICAgICAgcmV0dXJuIDEwMDA7XG4gICAgY2FzZSBcIk1PRFVMQVRFIENPTE9SIERFTEFZXCI6XG4gICAgICByZXR1cm4gbW9kdWxhdGVDb2xvckRlbGF5KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5uZXdDb2xvckRlbGF5KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IGNvbG9yczogQ29sb3JzRnVuYyA9IChzdGF0ZSA9IFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiSVRFUkFURSBDT0xPUlNcIjpcbiAgICAgIHJldHVybiBpdGVyYXRlQ29sb3JzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgICAgcmV0dXJuIFsnYmx1ZS1udW0nLCAnZ3JlZW4tbnVtJywgJ3JlZC1udW0nLCAnZ29sZC1udW0nLCAncHVycGxlLW51bScsICdtYXJvb24tbnVtJywgJ3R1cnF1b2lzZS1udW0nLCAnZ3JleS1udW0nXTtcbiAgICBjYXNlIFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGZsaXBwZXJzOiBGbGlwcGVyc0Z1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlJFU0VUIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBcIlNFVCBGTEFHIEZMSVBQRURcIjpcbiAgICAgIHJldHVybiBzZXRGbGFnRmxpcHBlZChzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGFnRmxpcHBlZCk7XG4gICAgY2FzZSBcIkZMSVAgTk9STUFMIFRJTEVcIjpcbiAgICAgIHJldHVybiBmbGlwTm9ybWFsVGlsZShzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5mbGlwcGVkVGlsZSk7XG4gICAgY2FzZSBcIkZMSVAgUkVDVVJTRUQgVElMRVNcIjpcbiAgICAgIHJldHVybiBmbGlwUmVjdXJzZWRUaWxlcyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBcIlJFVkVBTCBERUFEIEZMSVBQRVJTXCI6XG4gICAgICByZXR1cm4gcmV2ZWFsRGVhZEZsaXBwZXJzKHN0YXRlLnNsaWNlKCkpO1xuICAgIGNhc2UgXCJSRVZFQUwgRkxJUFBFUlNcIjpcbiAgICAgIHJldHVybiByZXZlYWxGbGlwcGVycyhzdGF0ZS5zbGljZSgpLCBhY3Rpb24ucGF5bG9hZC5taW5lQXJyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxudHlwZSBNaW5lc0Z1bmMgPSAoc3RhdGU6IFtdIHwgbnVtYmVyW10sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbnVtYmVyT2ZNaW5lczogbnVtYmVyLCBtaW5lczogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IG51bWJlcltdO1xuXG4vLyBwcmVsb2FkZWQgZGVmYXVsdCBzdGF0ZSBwcmV2ZW50cyBhbiBhdXRvbWF0aWMgd2luIGJ5IGRlZmF1bHRcbmNvbnN0IG1pbmVBcnI6IE1pbmVzRnVuYyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJHRU5FUkFURSBNSU5FU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTWluZXMoYWN0aW9uLnBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxudHlwZSBOdW1iZXJzRnVuYyA9IChzdGF0ZToge30sIGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgbWluZUFycjogbnVtYmVyW10sIHZlcnRpY2FsRGltZW5zaW9uOiBudW1iZXIsIGhvcml6b250YWxEaW1lbnNpb246IG51bWJlciB9IH0pID0+IHt9O1xuY29uc3QgbnVtYmVyczogTnVtYmVyc0Z1bmMgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiR0VORVJBVEUgTlVNQkVSU1wiOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlTnVtYmVycyhhY3Rpb24ucGF5bG9hZClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG5cbnR5cGUgU3VycHJpc2VkRnVuYyA9IChzdGF0ZTogYm9vbGVhbiB8IHN0cmluZywgYWN0aW9uOiB7IHR5cGU6IHN0cmluZyB9KSA9PiBib29sZWFuIHwgc3RyaW5nO1xuXG5jb25zdCBzdXJwcmlzZWQ6IFN1cnByaXNlZEZ1bmMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU1VSUFJJU0VEIFNNSUxFUyc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdSRVNFVCBTTUlMRVMnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgJ0RFQUQgU01JTEVTJzpcbiAgICAgIHJldHVybiAnZGVhZCc7XG4gICAgY2FzZSAnVklDVE9SWSBTTUlMRVMnOlxuICAgICAgcmV0dXJuICd2aWN0b3J5JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuXG50eXBlIEZsYWdzUmVtYWluaW5nRnVuYyA9IChzdGF0ZTogbnVtYmVyLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiBudW1iZXIgfSkgPT4gbnVtYmVyO1xuXG5jb25zdCBmbGFnc1JlbWFpbmluZzogRmxhZ3NSZW1haW5pbmdGdW5jID0gKHN0YXRlID0gMTAsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkRFQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgY2FzZSBcIklOQ1JFTUVOVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBcIlNFVCBGTEFHUyBSRU1BSU5JTkdcIjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIENvbWJpbmVSZWR1Y2Vyc0Z1bmMgPSAoc2xpY2VzOiBhbnkpID0+IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4gUmVhY3QuUmVkdWNlclN0YXRlV2l0aG91dEFjdGlvbjxhbnk+XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyczogQ29tYmluZVJlZHVjZXJzRnVuYyA9IChzbGljZXMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PiBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiAoe1xuICAuLi5hY2MsXG4gIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbn0pLFxuICBzdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmxpcHBlcnMsXG4gIG1pbmVBcnIsXG4gIG51bWJlcnMsXG4gIHNjcm9sbEJvYXJkLFxuICBjb2xvcnMsXG4gIGNvbG9yRGVsYXksXG4gIHN1cnByaXNlZCxcbiAgZmxhZ3NSZW1haW5pbmdcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q3VyclRpbGV9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuaW1wb3J0IHsgZ2VuTnVtYmVyQ2xhc3NOYW1lcywgZ2VuRW1wdHlDbGFzc05hbWVzLCBnZW5NaW5lQ2xhc3NOYW1lcywgaGFuZGxlQ2xpY2ssIGdlbmVyYXRlTG9naW5NZXNzYWdlIH0gZnJvbSAnLi9zcXVhcmVVdGlscyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgJy4vc3dlZXBzcXVhcmVzdHlsZXMuc2Nzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGN1cnJUaWxlOiBDdXJyVGlsZVxufTtcblxuY29uc3QgU3F1YXJlOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlIH0gPSBwcm9wcztcbiAgY29uc3QgW3sgaXNQcm94aWVkLCBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSwgZGVmaW5lZFVzZXJOYW1lLCBkaW1lbnNpb25zLCB0aW1lck9uIH0sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbeyBjb2xvcnMsIG1pbmVBcnIsIGZsaXBwZXJzLCBudW1iZXJzIH0sIGJvYXJkRGlzcGF0Y2hdID0gdXNlQm9hcmRDb250ZXh0KCk7XG5cblxuICBjb25zdCB0aWxlSXNBTWluZSA9IG1pbmVBcnIuaW5jbHVkZXMoY3VyclRpbGUpICYmIGZsaXBwZXJzW2N1cnJUaWxlXSAmJiBmbGlwcGVyc1tjdXJyVGlsZV0gIT09ICdmbGFnJztcblxuICBjb25zdCB0aWxlSXNBTnVtYmVyID0gZmxpcHBlcnNbY3VyclRpbGVdICYmIGZsaXBwZXJzW2N1cnJUaWxlXSAhPT0gJ2ZsYWcnICYmIG51bWJlcnNbY3VyclRpbGVdO1xuXG4gIGNvbnN0IHVzZXJOb3RMb2dnZWRJbiA9ICFkZWZpbmVkVXNlck5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXRlc3RpZD17YHRlc3QtJHtjdXJyVGlsZX1gfVxuXG4gICAgICBvbkNsaWNrPXtcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAvLyBJZiB0aWxlIGlzIGEgYm9tYi4uLlxuICAgICAgICAgIGlmIChtaW5lQXJyLmluY2x1ZGVzKGN1cnJUaWxlKSkge1xuICAgICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIERFQUQnIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwge1xuICAgICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgICBtaW5lQXJyLFxuICAgICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgICAgaW5kaWNhdG9yOiAnZGVhZCcsXG4gICAgICAgICAgICAgIGJvYXJkRGlzcGF0Y2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gSXMgYSBOdW1iZXIgb3IgYSBFbXB0eSBTcXVhcmVcbiAgICAgICAgICAvLyBJZiBhbiBlbXB0eSBzcGFjZSBpcyByZXZlYWxlZCB1bmRlciBhIGZsYWcsIGluY3JlbWVudCByZW1haW5pbmcgZmxhZ3NcbiAgICAgICAgICBpZiAoZmxpcHBlcnNbY3VyclRpbGVdID09PSAnZmxhZycpIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UIEZMQUdTIFJFTUFJTklORycgfSk7XG4gICAgICAgICAgLy8gU3RhcnQgdGhlIHRpbWVyIGFuZCByZXZlYWwgdGhlIHRpbGVcbiAgICAgICAgICBpZiAoIXRpbWVyT24pIHtcbiAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NXSVRDSCBUSU1FUiBPTicgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVDbGljayhlLCB7XG4gICAgICAgICAgICAgIGRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgIG1pbmVBcnIsXG4gICAgICAgICAgICAgIG51bWJlcnMsXG4gICAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgICBib2FyZERpc3BhdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIE5vcm1hbCBQbGF5XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUNsaWNrKGUsIHtcbiAgICAgICAgICAgIGRpbWVuc2lvbnMsXG4gICAgICAgICAgICBtaW5lQXJyLFxuICAgICAgICAgICAgbnVtYmVycyxcbiAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgaW5kaWNhdG9yOiBudWxsLFxuICAgICAgICAgICAgYm9hcmREaXNwYXRjaFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91c2VEb3duPXtcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICghZmxpcHBlcnNbY3VyclRpbGVdKSBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1NVUlBSSVNFRCBTTUlMRVMnIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VzZVVwPXtcbiAgICAgICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAvLyBNaW5lLSBEZWF0aCBTZXF1ZW5jZSBYRFxuICAgICAgICAgIGlmIChtaW5lQXJyLmluY2x1ZGVzKGN1cnJUaWxlKSAmJiBlLmJ1dHRvbiA9PT0gMCAmJiAhZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdERUFEIFNNSUxFUycgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdSRVNFVCBTTUlMRVMnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uQ29udGV4dE1lbnU9e1xuICAgICAgICAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIC8vSWYgbnVtYmVyIGlzIGFscmVhZHkgcmV2ZWFsZWQtIHByZXZlbnQgdXNlciBmcm9tIHB1dHRpbmcgYSBmbGFnIG9uIGl0XG4gICAgICAgICAgaWYgKGZsaXBwZXJzW2N1cnJUaWxlXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gZmFsc2UgPyAnREVDUkVNRU5UIEZMQUdTIFJFTUFJTklORycgOiAnSU5DUkVNRU5UIEZMQUdTIFJFTUFJTklORycgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwge1xuICAgICAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgICAgICBtaW5lQXJyLFxuICAgICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgICBjdXJyVGlsZSxcbiAgICAgICAgICAgICAgYm9hcmREaXNwYXRjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBQcmV2ZW50IGNvbnRleHQgbWVudSBpZiB1c2VyIGFjY2lkZW50YWxseSBwcmVzc2VzIGNvbnRleHQgbWVudVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBtaW5lQXJyLmluY2x1ZGVzKGN1cnJUaWxlKSA/IGdlbk1pbmVDbGFzc05hbWVzKHtcbiAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgIHNraWxsTGV2ZWwsXG4gICAgICAgICAgZmxpcHBlcnMsXG4gICAgICAgICAgY29sb3JzLFxuICAgICAgICAgIGlzUHJveGllZCxcbiAgICAgICAgICBjdXJyVGlsZVxuICAgICAgICB9KVxuICAgICAgICAgIDogbnVtYmVyc1tjdXJyVGlsZV0gPyBnZW5OdW1iZXJDbGFzc05hbWVzKHtcbiAgICAgICAgICAgIHNraWxsTGV2ZWwsXG4gICAgICAgICAgICBkZWZpbmVkVXNlck5hbWUsXG4gICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgZmxpcHBlcnMsXG4gICAgICAgICAgICBudW1iZXJzLFxuICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgaXNQcm94aWVkLFxuICAgICAgICAgICAgY3VyclRpbGVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBnZW5FbXB0eUNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAvLyBHbG9iYWxcbiAgICAgICAgICAgICAgc2tpbGxMZXZlbCxcbiAgICAgICAgICAgICAgZGVmaW5lZFVzZXJOYW1lLFxuICAgICAgICAgICAgICB0aW1lck9uLFxuICAgICAgICAgICAgICBpc1Byb3hpZWQsXG4gICAgICAgICAgICAgIC8vIEJvYXJkICYgcGFzc2VkIGluXG4gICAgICAgICAgICAgIGZsaXBwZXJzLFxuICAgICAgICAgICAgICBjb2xvcnMsXG4gICAgICAgICAgICAgIGN1cnJUaWxlXG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgID5cbiAgICAgIHtcbiAgICAgICAgdXNlck5vdExvZ2dlZEluICYmICFpc1Byb3hpZWQgP1xuICAgICAgICAgIGdlbmVyYXRlTG9naW5NZXNzYWdlKHtcbiAgICAgICAgICAgIGN1cnJUaWxlLFxuICAgICAgICAgICAgc2tpbGxMZXZlbFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiB0aWxlSXNBTnVtYmVyID8gbnVtYmVyc1tjdXJyVGlsZV1cbiAgICAgICAgICAgIDogdGlsZUlzQU1pbmUgPyAnKidcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9kaXYgPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTtcbiIsImltcG9ydCB7IEdlbk51bWJlckNsYXNzTmFtZXNGdW5jLCBHZW5lcmF0ZUNvbG9yc0Z1bmMsIEdlbkVtcHR5Q2xhc3NOYW1lc0Z1bmMsIEdlbk1pbmVDbGFzc05hbWVzRnVuYywgR2VuZXJhdGVMb2dpbk1lc3NhZ2VGdW5jLCBDbGFzc05hbWVBcnIsIEhhbmRsZUNsaWNrRnVuYyB9IGZyb20gJ01pbmVzd2VlcGVyVHlwZXMnO1xuXG5cbmNvbnN0IGdlbmVyYXRlTG9naW5NZXNzYWdlOiBHZW5lcmF0ZUxvZ2luTWVzc2FnZUZ1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlLCBza2lsbExldmVsIH0gPSBhcmdzO1xuXG4gIGNvbnN0IHQgPSBjdXJyVGlsZTtcbiAgY29uc3QgYmVnaW5uZXJNZXNzYWdlcyA9IHsgJzEnOiAnUGxlYXNlJywgJzInOiAnTG9naW4nLCAnMyc6ICdGaXJzdCcgfTtcbiAgY29uc3QgaW50ZXJtZWRpYXRlTWVzc2FnZXMgPSB7ICcyJzogJ1BsZWFzZScsICc0JzogJ0xvZ2luJywgJzYnOiAnRmlyc3QnIH07XG4gIGNvbnN0IGFkdmFuY2VkTWVzc2FnZXMgPSB7ICcyJzogJ1BsZWFzZScsICczJzogJ0xvZ2luJywgJzQnOiAnRmlyc3QnIH07XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicgJiYgdCA8IDgxKSB7XG4gICAgcmV0dXJuIGJlZ2lubmVyTWVzc2FnZXNbU3RyaW5nKE1hdGguZmxvb3IodCAvIDEwKSldPy5zdWJzdHJpbmcodCAlIDEwLCAodCAlIDEwKSArIDEpIHx8ICcqJztcbiAgfTtcblxuICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2ludGVybWVkaWF0ZScgJiYgdCA8IDE0NCkge1xuICAgIHJldHVybiBpbnRlcm1lZGlhdGVNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMTcpKV0/LnN1YnN0cmluZyh0ICUgMTcsICh0ICUgMTcpICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIGlmIChza2lsbExldmVsID09PSAnYWR2YW5jZWQnICYmIHQgPCAyNDApIHtcbiAgICByZXR1cm4gYWR2YW5jZWRNZXNzYWdlc1tTdHJpbmcoTWF0aC5mbG9vcih0IC8gMzEpKV0/LnN1YnN0cmluZyh0ICUgMzMuMTUsICh0ICUgMzMuMTUpICsgMSkgfHwgJyonO1xuICB9O1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuXG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JzOiBHZW5lcmF0ZUNvbG9yc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSA9IGFyZ3M7XG4gIGNvbnN0IHQgPSBjdXJyVGlsZTtcbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicpIHtcbiAgICBpZiAoKHQgPD0gOSkgfHwgKHQgPj0gMTYgJiYgdCA8PSAxOSkgfHwgKHQgPj0gMjUgJiYgdCA8PSAyOSkgfHwgKHQgPj0gMzUpKSB7XG4gICAgICByZXR1cm4gY29sb3JzWyh0ICsgKE1hdGguZmxvb3IodCAvIDgpKSkgJSA5XVxuICAgIH1cbiAgfVxuXG4gIGlmIChza2lsbExldmVsID09PSAnaW50ZXJtZWRpYXRlJykge1xuICAgIGlmICgodCA8PSAzMykgfHwgKHQgPj0gNDAgJiYgdCA8PSA2NikgfHwgKHQgPj0gNzMgJiYgdCA8PSA5OSkgfHwgKHQgPj0gMTA3ICYmIHQgPD0gMTQ0KSkge1xuICAgICAgcmV0dXJuIGNvbG9yc1sodCArIChNYXRoLmZsb29yKHQgLyAxNikpKSAlIDhdXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraWxsTGV2ZWwgPT09ICdhZHZhbmNlZCcpIHtcbiAgICBpZiAoKHQgPD0gNjYpIHx8ICh0ID49IDczICYmIHQgPD0gOTkpIHx8ICh0ID49IDEwNSAmJiB0IDw9IDEzMikgfHwgKHQgPj0gMTM4ICYmIHQgPD0gMjQxKSkge1xuICAgICAgcmV0dXJuIGNvbG9yc1sodCArIChNYXRoLmZsb29yKHQgLyAzMCkpKSAlIDhdXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2VuTnVtYmVyQ2xhc3NOYW1lczogR2VuTnVtYmVyQ2xhc3NOYW1lc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IHRpbWVyT24sIGRlZmluZWRVc2VyTmFtZSwgc2tpbGxMZXZlbCwgY3VyclRpbGUsIG51bWJlcnMsIGZsaXBwZXJzLCBjb2xvcnMsIGlzUHJveGllZCB9ID0gYXJncztcbiAgbGV0IGNsYXNzTmFtZUFycjogQ2xhc3NOYW1lQXJyID0gWydzd2VlcC1zcXVhcmUnXTtcblxuICBpZiAoY29sb3JzICE9PSBudWxsICYmICFpc1Byb3hpZWQpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IG51bWJlclRpbGVPblZpY3RvcnlEZWFkT3JOb3RMb2dnZWRJbiA9ICh0aW1lck9uID09PSAnVklDVE9SWScgfHwgdGltZXJPbiA9PT0gJ0ZSRUVaRSBXSU4nIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCcgfHwgKCFkZWZpbmVkVXNlck5hbWUgJiYgIWlzUHJveGllZCkpO1xuXG4gIGNvbnN0IGZsYWdPbk51bWJlclRpbGVHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIG51bWJlclRpbGVPblZpY3RvcnlEZWFkT3JOb3RMb2dnZWRJbiA/ICdkaXNhYmxlZCdcbiAgICAgIDogZmxhZ09uTnVtYmVyVGlsZUdhbWVQbGF5ID8gJ2ZsYWcnXG4gICAgICAgIDogJ251bWJlcidcbiAgKTtcblxuICAvLyBDb2xvciBEZXRlcm1pbmF0aW9uXG4gIGNvbnN0IGN1cnJOdW06IG51bWJlciA9IG51bWJlcnNbY3VyclRpbGVdO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIGN1cnJOdW0gPT09IDEgPyAnYmx1ZS1udW0nXG4gICAgICA6IGN1cnJOdW0gPT09IDIgPyAnZ3JlZW4tbnVtJ1xuICAgICAgICA6IGN1cnJOdW0gPT09IDMgPyAncmVkLW51bSdcbiAgICAgICAgICA6IGN1cnJOdW0gPT09IDQgPyAncHVycGxlLW51bSdcbiAgICAgICAgICAgIDogY3Vyck51bSA9PT0gNSA/ICdtYXJvb24tbnVtJ1xuICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDYgPyAndHVycXVvaXNlLW51bSdcbiAgICAgICAgICAgICAgICA6IGN1cnJOdW0gPT09IDcgPyAnYmxhY2stbnVtJ1xuICAgICAgICAgICAgICAgICAgOiBjdXJyTnVtID09PSA4ID8gJ2dyZXktbnVtJ1xuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IGdlbkVtcHR5Q2xhc3NOYW1lczogR2VuRW1wdHlDbGFzc05hbWVzRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgaXNQcm94aWVkLCBza2lsbExldmVsLCBkZWZpbmVkVXNlck5hbWUsIHRpbWVyT24sIGN1cnJUaWxlLCBjb2xvcnMsIGZsaXBwZXJzIH0gPSBhcmdzXG4gIGxldCBjbGFzc05hbWVBcnI6IENsYXNzTmFtZUFyciA9IFsnc3dlZXAtc3F1YXJlJ107XG5cbiAgaWYgKGNvbG9ycyAhPT0gbnVsbCAmJiAhaXNQcm94aWVkKSB7XG4gICAgY2xhc3NOYW1lQXJyLnB1c2goZ2VuZXJhdGVDb2xvcnMoeyBjdXJyVGlsZSwgY29sb3JzLCBza2lsbExldmVsIH0pLCAnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbiAgfTtcblxuICBjb25zdCBlbXB0eVRpbGVPblZpY3RvcnlPckRlYWQgPSAodGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIERFQUQnKTtcbiAgY29uc3QgZW1wdHlUaWxlT25Ob3RMb2dnZWRJbiA9ICghZGVmaW5lZFVzZXJOYW1lICYmICFpc1Byb3hpZWQpO1xuICBjb25zdCBmbGFnT25FbXB0eVRpbGVHYW1lcGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBlbXB0eVRpbGVSZXZlYWxlZEdhbWVwbGF5ID0gZmxpcHBlcnNbY3VyclRpbGVdID09PSB0cnVlO1xuXG4gIGNsYXNzTmFtZUFyci5wdXNoKFxuICAgIGVtcHR5VGlsZU9uVmljdG9yeU9yRGVhZCA/ICdkaXNhYmxlZCBkYXJrLXNxdWFyZSdcbiAgICAgIDogZW1wdHlUaWxlT25Ob3RMb2dnZWRJbiA/ICdkaXNhYmxlZCdcbiAgICAgICAgOiBmbGFnT25FbXB0eVRpbGVHYW1lcGxheSA/ICdmbGFnJ1xuICAgICAgICAgIDogZW1wdHlUaWxlUmV2ZWFsZWRHYW1lcGxheSA/ICdkYXJrLXNxdWFyZSdcbiAgICAgICAgICAgIDogbnVsbFxuICApO1xuICByZXR1cm4gY2xhc3NOYW1lQXJyLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IGdlbk1pbmVDbGFzc05hbWVzOiBHZW5NaW5lQ2xhc3NOYW1lc0Z1bmMgPSAoYXJncykgPT4ge1xuICBjb25zdCB7IHRpbWVyT24sIHNraWxsTGV2ZWwsIGN1cnJUaWxlLCBjb2xvcnMsIGZsaXBwZXJzLCBpc1Byb3hpZWQgfSA9IGFyZ3M7XG4gIGxldCBjbGFzc05hbWVBcnI6IENsYXNzTmFtZUFyciA9IFsnc3dlZXAtc3F1YXJlJ11cblxuICBpZiAoY29sb3JzICE9PSBudWxsICYmICFpc1Byb3hpZWQpIHtcbiAgICBjbGFzc05hbWVBcnIucHVzaChnZW5lcmF0ZUNvbG9ycyh7IGN1cnJUaWxlLCBjb2xvcnMsIHNraWxsTGV2ZWwgfSksICdkaXNhYmxlZCcpO1xuICAgIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICB9O1xuXG4gIGNvbnN0IGZsYWdPbk1pbmVUaWxlQWZ0ZXJWaWN0b3J5ID0gKHRpbWVyT24gPT09ICdWSUNUT1JZJyB8fCB0aW1lck9uID09PSAnRlJFRVpFIFdJTicpICYmIGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZUFmdGVyRGVhZCA9IHRpbWVyT24gPT09ICdGUkVFWkUgREVBRCc7XG4gIGNvbnN0IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gJ2ZsYWcnO1xuICBjb25zdCBtaW5lVGlsZU9uRGVhZCA9IGZsaXBwZXJzW2N1cnJUaWxlXSA9PT0gdHJ1ZTtcblxuICBjbGFzc05hbWVBcnIucHVzaChcbiAgICBmbGFnT25NaW5lVGlsZUFmdGVyVmljdG9yeSA/ICdmbGFnIGRpc2FibGVkJ1xuICAgICAgOiBtaW5lVGlsZUFmdGVyRGVhZCA/ICdkaXNhYmxlZCBtaW5lJ1xuICAgICAgICA6IHRpbGVJc0ZsYWdnZWRHYW1lUGxheSA/ICdmbGFnJ1xuICAgICAgICAgIDogbWluZVRpbGVPbkRlYWQgPyAnbWluZSdcbiAgICAgICAgICAgIDogbnVsbFxuICApO1xuXG4gIHJldHVybiBjbGFzc05hbWVBcnIuam9pbignICcpO1xufTtcblxuXG50eXBlIFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzOiB7IGN1cnJUaWxlOiBudW1iZXIsIGRpbWVuc2lvbnM6IHsgaG9yaXpvbnRhbERpbWVuc2lvbjogbnVtYmVyLCB2ZXJ0aWNhbERpbWVuc2lvbjogbnVtYmVyIH0sIG51bWJlcnM6IHt9LCBtaW5lQXJyOiBudW1iZXJbXSwgcmVzdWx0QXJyOiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXSB9KSA9PiAoc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcilbXTtcblxuY29uc3QgdGlsZVJlY3Vyc2U6IFRpbGVSZWN1cnNlRnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclRpbGUsIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9ID0gYXJnc1xuICByZXN1bHRBcnIucHVzaChjdXJyVGlsZSlcbiAgdHlwZSBFdmFsVGVzdEZ1bmMgPSAoY3VyclRpbGU6IG51bWJlcikgPT4gbnVtYmVyO1xuXG4gIGNvbnN0IGV2YWxVOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgLSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsUjogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlICsgMSk7XG4gIGNvbnN0IGV2YWxEOiBFdmFsVGVzdEZ1bmMgPSBjdXJyVGlsZSA9PiAoY3VyclRpbGUgKyBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pO1xuICBjb25zdCBldmFsTDogRXZhbFRlc3RGdW5jID0gY3VyclRpbGUgPT4gKGN1cnJUaWxlIC0gMSk7XG5cbiAgdHlwZSBUZXN0Q3VyclRpbGVGdW5jID0gKGN1cnJUaWxlOiBudW1iZXIsIHRlc3RGdW5jOiBGdW5jdGlvbikgPT4gYm9vbGVhbjtcblxuICBjb25zdCB0ZXN0Q3VyclRpbGU6IFRlc3RDdXJyVGlsZUZ1bmMgPSAoY3VyclRpbGUsIHRlc3RGdW5jKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFudW1iZXJzW3Rlc3RGdW5jKGN1cnJUaWxlKV1cbiAgICAgICYmICFtaW5lQXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgIC8vICYmIHByZXZGbGlwcGVyc1t0ZXN0RnVuYyh0aWxlKV0gPT09IGZhbHNlXG4gICAgICAmJiAhcmVzdWx0QXJyLmluY2x1ZGVzKHRlc3RGdW5jKGN1cnJUaWxlKSlcbiAgICAgICYmIHRlc3RGdW5jKGN1cnJUaWxlKSA+PSAwXG4gICAgICAmJiB0ZXN0RnVuYyhjdXJyVGlsZSkgPD0gKGRpbWVuc2lvbnMudmVydGljYWxEaW1lbnNpb24gKiBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24pXG4gICAgKVxuICB9XG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBVcFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxVKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsVShjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBSaWdodFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxSKVxuICAgICYmIChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsUihjdXJyVGlsZSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDAgJiYgY3VyclRpbGUgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gPT09IDApKVxuICApIHtcbiAgICB0aWxlUmVjdXJzZSh7IGN1cnJUaWxlOiBldmFsUihjdXJyVGlsZSksIGRpbWVuc2lvbnMsIG51bWJlcnMsIG1pbmVBcnIsIHJlc3VsdEFyciB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqXG4gIC8vICBHb2luZyBEb3duXG4gIC8vICoqKioqKioqKioqXG5cbiAgaWYgKFxuICAgIHRlc3RDdXJyVGlsZShjdXJyVGlsZSwgZXZhbEQpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxEKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pXG4gIH1cblxuICAvLyAqKioqKioqKioqKlxuICAvLyAgR29pbmcgTGVmdFxuICAvLyAqKioqKioqKioqKlxuXG4gIGlmIChcbiAgICB0ZXN0Q3VyclRpbGUoY3VyclRpbGUsIGV2YWxMKVxuICAgICYmICgoZXZhbEwoY3VyclRpbGUgKyAxKSkgJSBkaW1lbnNpb25zLmhvcml6b250YWxEaW1lbnNpb24gIT09IDBcbiAgICAgIHx8IChldmFsTChjdXJyVGlsZSArIDEpICUgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uID09PSAwICYmIGV2YWxMKGN1cnJUaWxlKSAlIGRpbWVuc2lvbnMuaG9yaXpvbnRhbERpbWVuc2lvbiA9PT0gMCkpXG4gICkge1xuICAgIHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGV2YWxMKGN1cnJUaWxlKSwgZGltZW5zaW9ucywgbnVtYmVycywgbWluZUFyciwgcmVzdWx0QXJyIH0pO1xuICB9O1xuXG4gIHJldHVybiByZXN1bHRBcnI7XG59O1xuXG5cblxuXG5cbmNvbnN0IGhhbmRsZUNsaWNrOiBIYW5kbGVDbGlja0Z1bmMgPSAoZXZlbnQsIGFyZ3MpID0+IHtcblxuICBjb25zdCB7IGN1cnJUaWxlLCBpbmRpY2F0b3IsIGRpbWVuc2lvbnMsIG1pbmVBcnIsIG51bWJlcnMsIGJvYXJkRGlzcGF0Y2ggfSA9IGFyZ3M7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIChpbmRpY2F0b3IgPT09ICdkZWFkJykgPyBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFVkVBTCBERUFEIEZMSVBQRVJTJyB9KVxuICAgIDogKGV2ZW50LnR5cGUgPT09ICdjb250ZXh0bWVudScpID8gYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTRVQgRkxBRyBGTElQUEVEJywgcGF5bG9hZDogeyBmbGFnRmxpcHBlZDogY3VyclRpbGUgfSB9KVxuICAgICAgOiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBpbmRpY2F0b3IgIT09ICdkZWFkJykgJiYgKCFudW1iZXJzW2N1cnJUaWxlXSAmJiAhbWluZUFyci5pbmNsdWRlcyhjdXJyVGlsZSkpID9cbiAgICAgICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ0ZMSVAgUkVDVVJTRUQgVElMRVMnLFxuICAgICAgICAgIHBheWxvYWQ6IHRpbGVSZWN1cnNlKHsgY3VyclRpbGU6IGN1cnJUaWxlLCBkaW1lbnNpb25zLCBudW1iZXJzLCBtaW5lQXJyLCByZXN1bHRBcnI6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgICAgIDogKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgaW5kaWNhdG9yICE9PSAnZGVhZCcpID9cbiAgICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ0ZMSVAgTk9STUFMIFRJTEUnLCBwYXlsb2FkOiB7IGZsaXBwZWRUaWxlOiBjdXJyVGlsZSB9IH0pXG4gICAgICAgICAgOiBudWxsO1xufTtcblxuZXhwb3J0IHtcbiAgZ2VuRW1wdHlDbGFzc05hbWVzLFxuICBnZW5OdW1iZXJDbGFzc05hbWVzLFxuICBnZW5NaW5lQ2xhc3NOYW1lcyxcbiAgZ2VuZXJhdGVMb2dpbk1lc3NhZ2UsXG4gIGhhbmRsZUNsaWNrXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBSZXNldEdhbWVFZmZlY3RPblNtaWxleU9yU2tpbGxGdW5jLFxuICBGcmVlemVDb2xvckRlbGF5RWZmZWN0RnVuYyxcbiAgU3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0RnVuYyxcbiAgR2VuZXJhdGVNaW5lc0VmZmVjdEZ1bmMsXG4gIEZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0RnVuYyxcbiAgUmV2ZWFsRmxpcHBlckVmZmVjdEZ1bmMsXG4gIEdlbmVyYXRlTnVtYmVyRWZmZWN0RnVuYyxcbiAgUmVzZXRPblNraWxsTGV2ZWxDaGFuZ2VFZmZlY3RGdW5jLFxuICBSZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbkZ1bmMsXG59IGZyb20gXCIuLi8uLi8uLi9taW5lc3dlZXBlci10eXBlc1wiO1xuXG5jb25zdCBnZW5lcmF0ZU1pbmVzRWZmZWN0OiBHZW5lcmF0ZU1pbmVzRWZmZWN0RnVuYyA9IChcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiR0VORVJBVEUgTUlORVNcIiwgcGF5bG9hZDogZGltZW5zaW9ucyB9KTtcbiAgfSwgW10pO1xufTtcblxuY29uc3Qgc3RvcENvbG9ySXRlcmF0aW9uRWZmZWN0OiBTdG9wQ29sb3JJdGVyYXRpb25FZmZlY3RGdW5jID0gKFxuICBjb2xvckRlbGF5LFxuICBib2FyZERpc3BhdGNoXG4pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29sb3JEZWxheSA9PT0gbnVsbCkge1xuICAgICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6IFwiU1RPUCBDT0xPUiBJVEVSQVRJT05cIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmREaXNwYXRjaCh7dHlwZTogXCJTVEFSVCBDT0xPUiBJVEVSQVRJT05cIn0pO1xuICAgIH1cbiAgfSwgW2NvbG9yRGVsYXldKTtcbn07XG5cbmNvbnN0IGZyZWV6ZUNvbG9yRGVsYXlFZmZlY3Q6IEZyZWV6ZUNvbG9yRGVsYXlFZmZlY3RGdW5jID0gKFxuICBkZWZpbmVkVXNlck5hbWUsXG4gIGJvYXJkRGlzcGF0Y2hcbikgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZpbmVkVXNlck5hbWUpIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUIENPTE9SIERFTEFZXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkRGlzcGF0Y2goe3R5cGU6IFwiU0VUIENPTE9SIERFTEFZXCJ9KTtcbiAgICB9XG4gIH0sIFtkZWZpbmVkVXNlck5hbWVdKTtcbn07XG5cbi8vIFRoaXMgY29uZGl0aW9uIHJlc2V0cyB0aGUgYm9hcmQgd2hlbiB0aGUgc21pbGV5IGZhY2UgaXMgcHVuY2hlZCBvciB0aGUgc2tpbGxMZXZlbCBpcyBjaGFuZ2VkIGJlY2F1c2UgdGltZXJPbiBpcyBzZXQgdG8gZmFsc2UuIEl0IGFsc28gcmVzZXRzIHRoZSBib2FyZCBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBza2lsbExldmVsIGJlZm9yZSBwbGF5aW5nLCB3aGljaCBpcyBtb3N0IGxpa2VseS5cbmNvbnN0IHJlc2V0R2FtZUVmZmVjdE9uU21pbGV5T3JTa2lsbDogUmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsRnVuYyA9IChcbiAgdGltZXJPbixcbiAgZGltZW5zaW9ucyxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAvLyBTZXQgYWxsIFRpbGVzIHRvIEZhbHNlIChoaWRkZW4pXG4gICAgICBib2FyZERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJSRVNFVCBGTElQUEVSU1wiLFxuICAgICAgICBwYXlsb2FkOiBBcnJheS5mcm9tKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxlbmd0aDpcbiAgICAgICAgICAgICAgZGltZW5zaW9ucy5ob3Jpem9udGFsRGltZW5zaW9uICogZGltZW5zaW9ucy52ZXJ0aWNhbERpbWVuc2lvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IGZhbHNlXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIC8vIEdlbmVyYXRlIE1pbmVzXG4gICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJHRU5FUkFURSBNSU5FU1wiLCBwYXlsb2FkOiBkaW1lbnNpb25zIH0pO1xuICAgIH1cbiAgfSwgW3RpbWVyT24sIGRpbWVuc2lvbnNdKTtcbn07XG5cbmNvbnN0IGZyZWV6ZVNjcm9sbEJvYXJkRWZmZWN0OiBGcmVlemVTY3JvbGxCb2FyZEVmZmVjdEZ1bmMgPSAoc2Nyb2xsQm9hcmQpID0+IHtcbiAgdHlwZSBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAodGhpczogRG9jdW1lbnQsIGV2OiBXaGVlbEV2ZW50KSA9PiBib29sZWFuO1xuXG4gIGNvbnN0IHByZXZlbnREZWZhdWx0OiBQcmV2ZW50RGVmYXVsdEZ1bmMgPSAoZXYpID0+IHtcbiAgICBldiA9IGV2IHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZXYucHJldmVudERlZmF1bHQpIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbEJvYXJkKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgfSwgW3Njcm9sbEJvYXJkXSk7XG59O1xuXG5jb25zdCByZXZlYWxGbGlwcGVyRWZmZWN0OiBSZXZlYWxGbGlwcGVyRWZmZWN0RnVuYyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgbWluZUFyciwgZmxpcHBlcnMsIG51bWJlcnMsIGdsb2JhbERpc3BhdGNoLCBib2FyZERpc3BhdGNoIH0gPSBhcmdzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1pbmVBcnIubGVuZ3RoICYmIGZsaXBwZXJzLmxlbmd0aCAmJiBmbGlwcGVyc1swXSAhPT0gXCJkZWFkXCIpIHtcbiAgICAgIC8vIE9ubHkgc3RvcmUgc2NvcmUgd2hlbiBhbGwgZmxpcHBlcnMgaGF2ZSBiZWVuIGZsaXBwZWQgKGVuZHMgcmVjdXJzaXZlIGxvb3ApXG4gICAgICBpZiAoXG4gICAgICAgIGZsaXBwZXJzLmV2ZXJ5KChmbGlwcGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmbGlwcGVyID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluZUFycltmbGlwcGVyXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZsaXBwZXIgPT09IHRydWUgfHwgZmxpcHBlciA9PT0gXCJmbGFnXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGNsb2NrIGFuZCBpbmRpY2F0ZSBhIHdpblxuICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiRlJFRVpFIFRJTUVSIFNUQVRFIFZJQ1RPUllcIiB9KTtcblxuICAgICAgICAvLyBJZiBhIHZpY3RvcnkgaXMgZGV0ZWN0ZWQgYnkgYWxsIG51bWJlcnMgYmVpbmcgcmV2ZWFsZWQsIGZsaXAgYWxsIHRoZSBlbXB0eSBzcXVhcmVzXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5sZW5ndGggJiZcbiAgICAgICAgT2JqZWN0LmtleXMobnVtYmVycykuZXZlcnkoKG51bSkgPT4gZmxpcHBlcnNbbnVtXSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogXCJSRVZFQUwgRkxJUFBFUlNcIiwgcGF5bG9hZDogeyBtaW5lQXJyIH0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZmxpcHBlcnNdKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTnVtYmVyRWZmZWN0OiBHZW5lcmF0ZU51bWJlckVmZmVjdEZ1bmMgPSAoXG4gIG1pbmVBcnIsXG4gIHsgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgYm9hcmREaXNwYXRjaFxuKSA9PiB7XG4gIC8vV2hlbiBNaW5lcyBhcmUgcmVzZXQsIGdlbmVyYXRlIG51bWJlcnMgYXJvdW5kIHRob3NlIG1pbmVzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYm9hcmREaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkdFTkVSQVRFIE5VTUJFUlNcIixcbiAgICAgIHBheWxvYWQ6IHsgbWluZUFyciwgdmVydGljYWxEaW1lbnNpb24sIGhvcml6b250YWxEaW1lbnNpb24gfSxcbiAgICB9KTtcbiAgfSwgW21pbmVBcnJdKTtcbn07XG5cbmNvbnN0IHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0OiBSZXNldE9uU2tpbGxMZXZlbENoYW5nZUVmZmVjdEZ1bmMgPSAoXG4gIHNraWxsTGV2ZWwsXG4gIGdsb2JhbERpc3BhdGNoXG4pID0+IHtcbiAgLy8gSWYgU2tpbGwgTGV2ZWwgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIGJvYXJkLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbERpc3BhdGNoKHsgdHlwZTogXCJTV0lUQ0ggVElNRVIgT0ZGXCIgfSk7XG4gIH0sIFtza2lsbExldmVsXSk7XG59O1xuXG5jb25zdCByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbjogUmVzZXRGbGFnc1JlbWFpbmluZ09uU2tpbGxDaGFuZ2VPclRpbWVyT25GdW5jID1cbiAgKHRpbWVyT24sIHNraWxsTGV2ZWwsIGJvYXJkRGlzcGF0Y2gpID0+IHtcbiAgICAvLyBUaGlzIHJlc2V0cyB0aGUgZmxhZ3Mgd2hlbmV2ZXIgdGhlIHNraWxsTGV2ZWwgaXMgY2hhbmdlZCBvciBnYW1lIGlzIHJlc2V0XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICAgIGJvYXJkRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUIEZMQUdTIFJFTUFJTklOR1wiLFxuICAgICAgICAgIHBheWxvYWQ6XG4gICAgICAgICAgICBza2lsbExldmVsID09PSBcImJlZ2lubmVyXCJcbiAgICAgICAgICAgICAgPyAxMFxuICAgICAgICAgICAgICA6IHNraWxsTGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgPyA0MFxuICAgICAgICAgICAgICA6IDk5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbc2tpbGxMZXZlbCwgdGltZXJPbl0pO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdlbmVyYXRlTWluZXNFZmZlY3QsXG4gIHN0b3BDb2xvckl0ZXJhdGlvbkVmZmVjdCxcbiAgZnJlZXplQ29sb3JEZWxheUVmZmVjdCxcbiAgcmVzZXRHYW1lRWZmZWN0T25TbWlsZXlPclNraWxsLFxuICBmcmVlemVTY3JvbGxCb2FyZEVmZmVjdCxcbiAgcmV2ZWFsRmxpcHBlckVmZmVjdCxcbiAgZ2VuZXJhdGVOdW1iZXJFZmZlY3QsXG4gIHJlc2V0T25Ta2lsbExldmVsQ2hhbmdlRWZmZWN0LFxuICByZXNldEZsYWdzUmVtYWluaW5nT25Ta2lsbENoYW5nZU9yVGltZXJPbixcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dvdXRNdXRhdGlvbkZuLCBNZURvY3VtZW50IH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmludGVyZmFjZSBMb2dnZWRJblZpZXdQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGxvZ291dDogTG9nb3V0TXV0YXRpb25Gbjtcbn1cblxuY29uc3QgTG9nZ2VkSW5WaWV3OiBSZWFjdC5GQzxMb2dnZWRJblZpZXdQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBob21lU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCI7XG4gIGNvbnN0IHNjb3JlYm9hcmRTZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9zY29yZWJvYXJkXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKGhvbWVTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHsoaG9tZVNlbGVjdGVkICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bsb2dnZWQtaW4tdXNlci10aXRsZWB9PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgTG9nZ2VkIGluIGFzOiB7cHJvcHMudXNlcm5hbWV9e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSkgfHwgPExpbmsgdG89XCIvXCI+TWluZXN3ZWVwZXI8L0xpbms+fVxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChzY29yZWJvYXJkU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBcImhlYWRlci1uYXYtdWwtbGlcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPVwiL3Njb3JlYm9hcmRcIj5IaWdoIFNjb3JlczwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdi11bC1saVwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ291dC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmxvZ291dCh7XG4gICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbTWVEb2N1bWVudF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ291dFxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VkSW5WaWV3O1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmssIHVzZUxvY2F0aW9ufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW50ZXJmYWNlIExvZ2dlZE91dFZpZXdQcm9wcyB7XG59O1xuXG5jb25zdCBMb2dnZWRPdXRWaWV3OiBSZWFjdC5GQzxMb2dnZWRPdXRWaWV3UHJvcHM+ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBsb2dpblNlbGVjdGVkID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvbG9naW4nIHx8IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2Z1bGxzdGFjay9taW5lc3dlZXBlci9sb2dpbic7XG4gIGNvbnN0IHJlZ2lzdGVyU2VsZWN0ZWQgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9yZWdpc3Rlcic7XG4gIGNvbnN0IHNjb3JlYm9hcmRTZWxlY3RlZCA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3Njb3JlYm9hcmQnXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKGxvZ2luU2VsZWN0ZWQgJiYgYHNlbGVjdGVkLWhlYWRlciBoZWFkZXItbmF2LXVsLWxpYCkgfHxcbiAgICAgICAgICBgaGVhZGVyLW5hdi11bC1saWBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8TGluayB0bz0nL2xvZ2luJz5Mb2dpbjwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAocmVnaXN0ZXJTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPXsnL3JlZ2lzdGVyJ30+UmVnaXN0ZXI8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHNjb3JlYm9hcmRTZWxlY3RlZCAmJiBgc2VsZWN0ZWQtaGVhZGVyIGhlYWRlci1uYXYtdWwtbGlgKSB8fFxuICAgICAgICAgIGBoZWFkZXItbmF2LXVsLWxpYFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIHRvPXsnL3Njb3JlYm9hcmQnfT5IaWdoIFNjb3JlczwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZWRPdXRWaWV3OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBNaW5lc3dlZXBlciBmcm9tIFwiVFNDb21wb25lbnRzL01pbmVzd2VlcGVyL01pbmVzd2VlcGVyXCI7XG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSBcIlRTQ29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZFwiO1xuXG5pbXBvcnQgVXNlckxvZ2luRm9ybSBmcm9tIFwiVFNDb21wb25lbnRzL1VzZXJGb3Jtcy9Mb2dpblwiO1xuaW1wb3J0IFVzZXJSZWdpc3RlckZvcm0gZnJvbSBcIlRTQ29tcG9uZW50cy9Vc2VyRm9ybXMvUmVnaXN0ZXJcIjtcbmltcG9ydCBMb2dnZWRJblZpZXcgZnJvbSBcIlRTQ29tcG9uZW50cy9Ib21lL0hlYWRlckludGVyZmFjZXMvTG9nZ2VkSW5WaWV3XCI7XG5pbXBvcnQgTG9nZ2VkT3V0VmlldyBmcm9tIFwiVFNDb21wb25lbnRzL0hvbWUvSGVhZGVySW50ZXJmYWNlcy9Mb2dnZWRPdXRWaWV3XCI7XG5cbmltcG9ydCBcIi4vaG9tZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XG5pbXBvcnQgeyB1c2VNZVF1ZXJ5LCB1c2VMb2dvdXRNdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgR2VuZXJpY1Njb3JlIH0gZnJvbSBcIi4uL0xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIlRTU3JjL3B1YmxpYy9HbG9iYWxTdG9yZS9HbG9iYWxTdG9yZVwiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgc3NyVG9wVGltZXM/OiBHZW5lcmljU2NvcmVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VNZVF1ZXJ5KCk7XG5cbiAgY29uc3QgW3tpc1Byb3hpZWR9LCBnbG9iYWxEaXNwYXRjaF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIGNvbnN0IFtsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcblxuICBsZXQgaGVhZGVyQm9keSA9IG51bGw7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImZ1bGxzdGFja1wiKSA+IC0xKSB7XG4gICAgICBnbG9iYWxEaXNwYXRjaCh7dHlwZTogJ1NFVCBQUk9YSUVEIFRSVUUnfSlcbiAgICB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhPy5tZT8udXNlcm5hbWUpIHtcbiAgICAgIGdsb2JhbERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdXNlck5hbWU6IGRhdGEubWUudXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiBcIlVOU0VUIERFRklORUQgVVNFUk5BTUVcIiB9KTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgaGVhZGVyQm9keSA9IGxvYWRpbmcgPyBudWxsIDogIWRhdGE/Lm1lID8gKFxuICAgIDxMb2dnZWRPdXRWaWV3IC8+XG4gICkgOiAoXG4gICAgPExvZ2dlZEluVmlldyB1c2VybmFtZT17ZGF0YS5tZS51c2VybmFtZX0gbG9nb3V0PXtsb2dvdXR9IC8+XG4gICk7XG5cbiAgcmV0dXJuICFpc1Byb3hpZWQgPyAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdlwiPlxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZGF0YT8ubWU/LnVzZXJuYW1lXG4gICAgICAgICAgICAgID8gYGhlYWRlci1uYXYtdWwgaGVhZGVyLWlzLWNvbmNlYWxlZGBcbiAgICAgICAgICAgICAgOiBgaGVhZGVyLW5hdi11bGBcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7aGVhZGVyQm9keX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiPlxuICAgICAgICAgIDxVc2VyTG9naW5Gb3JtIC8+XG4gICAgICAgICAgPE1pbmVzd2VlcGVyIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgPFVzZXJSZWdpc3RlckZvcm0gLz5cbiAgICAgICAgICA8TWluZXN3ZWVwZXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2NvcmVib2FyZFwiPlxuICAgICAgICAgIDxMZWFkZXJib2FyZCBzc3JUb3BUaW1lcz17cHJvcHMuc3NyVG9wVGltZXN9IC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgIDxNaW5lc3dlZXBlciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPE1pbmVzd2VlcGVyIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExlYWRlckJvYXJkRW50cnkgZnJvbSBcIlRTQ29tcG9uZW50cy9MZWFkZXJib2FyZC9MZWFkZXJib2FyZEVudHJ5XCI7XG5pbXBvcnQgUGFnZU5vVWwgZnJvbSBcIi4vUGFnaW5hdGlvbi9wYWdlTm9VbFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IFwiLi9sZWFkZXJib2FyZC5zY3NzXCI7XG5pbXBvcnQge1xuICBGb3JtYXRUaW1lRnVuYyxcbiAgR2VuZXJpY1Njb3JlLFxuICBIYW5kbGVDbGlja1BhZ2VGdW5jLFxuICBIYW5kbGVTY29yZVZpZXdGdW5jLFxuICBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYyxcbiAgTGVhZGVyYm9hcmRQcm9wcyxcbiAgTWFrZVRpdGxlRnVuYyxcbiAgUGVyc29uYWxpemVkLFxufSBmcm9tIFwiLi9sZWFkZXJib2FyZC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgdXNlR2V0QWR2YW5jZWRTY29yZXNRdWVyeSxcbiAgdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeSxcbiAgdXNlR2V0SW50ZXJtZWRpYXRlU2NvcmVzUXVlcnksXG59IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5jb25zdCBMZWFkZXJib2FyZDogUmVhY3QuRkM8TGVhZGVyYm9hcmRQcm9wcz4gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCBbXG4gICAge1xuICAgICAgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0sXG4gICAgfSxcbiAgICBnbG9iYWxEaXNwYXRjaCxcbiAgXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcGFnZU9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVMZW5ndGggPSAoKSA9PiB7XG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYmVnaW5uZXJcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRCZWdpbm5lclNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBpZiAoZGF0YT8uYWxsQmVnaW5uZXJTY29yZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmFsbEJlZ2lubmVyU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJpbnRlcm1lZGlhdGVcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSgpO1xuICAgICAgaWYgKGRhdGE/LmFsbEludGVybWVkaWF0ZVNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsSW50ZXJtZWRpYXRlU2NvcmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJhZHZhbmNlZFwiKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldEFkdmFuY2VkU2NvcmVzUXVlcnkoKTtcbiAgICAgIGlmIChkYXRhPy5hbGxBZHZhbmNlZFNjb3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWxsQWR2YW5jZWRTY29yZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAxMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY29yZVZpZXdIZWxwZXIgPSAoXG4gICAgYXJyYXk6IEdlbmVyaWNTY29yZVtdLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgcGFnZU9mZnNldDogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiBhcnJheVxuICAgICAgLnNsaWNlKDApXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lIC0gYi50aW1lKVxuICAgICAgLnNsaWNlKGN1cnJlbnRQYWdlICogcGFnZU9mZnNldCwgY3VycmVudFBhZ2UgKiBwYWdlT2Zmc2V0ICsgcGFnZU9mZnNldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVWaWV3OiBIYW5kbGVTY29yZVZpZXdGdW5jID0gKHNzclRvcFRpbWVzKSA9PiB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiAmJiBzc3JUb3BUaW1lcykge1xuICAgICAgcmV0dXJuIHNzclRvcFRpbWVzLnNsaWNlKDAsIHBhZ2VPZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChza2lsbExldmVsID09PSBcImJlZ2lubmVyXCIpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0QmVnaW5uZXJTY29yZXNRdWVyeSgpO1xuICAgICAgY29uc3QgdG9wU2NvcmVzID0gZGF0YT8uYWxsQmVnaW5uZXJTY29yZXM7XG4gICAgICBpZiAodG9wU2NvcmVzKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gaGFuZGxlU2NvcmVWaWV3SGVscGVyKHRvcFNjb3JlcywgY3VycmVudFBhZ2UsIHBhZ2VPZmZzZXQpO1xuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2tpbGxMZXZlbCA9PT0gXCJpbnRlcm1lZGlhdGVcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRJbnRlcm1lZGlhdGVTY29yZXNRdWVyeSgpO1xuICAgICAgY29uc3QgdG9wU2NvcmVzID0gZGF0YT8uYWxsSW50ZXJtZWRpYXRlU2NvcmVzO1xuICAgICAgaWYgKHRvcFNjb3Jlcykge1xuICAgICAgICBsZXQgdGVzdCA9IGhhbmRsZVNjb3JlVmlld0hlbHBlcih0b3BTY29yZXMsIGN1cnJlbnRQYWdlLCBwYWdlT2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNraWxsTGV2ZWwgPT09IFwiYWR2YW5jZWRcIikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRBZHZhbmNlZFNjb3Jlc1F1ZXJ5KCk7XG4gICAgICBjb25zdCB0b3BTY29yZXMgPSBkYXRhPy5hbGxBZHZhbmNlZFNjb3JlcztcblxuICAgICAgaWYgKHRvcFNjb3Jlcykge1xuICAgICAgICByZXR1cm4gaGFuZGxlU2NvcmVWaWV3SGVscGVyKHRvcFNjb3JlcywgY3VycmVudFBhZ2UsIHBhZ2VPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiBcImxvYWRpbmdcIixcbiAgICAgICAgdGltZTogMCxcbiAgICAgICAgdXBkYXRlZEF0OiBcIlwiLFxuICAgICAgICBjcmVhdGVkQXQ6IFwiXCIsXG4gICAgICAgIGlkOiAxLFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGNvbnN0IFtwZXJzb25hbGl6ZWQsIHNldFBlcnNvbmFsaXplZF0gPSBSZWFjdC51c2VTdGF0ZTxQZXJzb25hbGl6ZWQ+KGZhbHNlKTtcblxuICBjb25zdCBmb3JtYXRUaW1lOiBGb3JtYXRUaW1lRnVuYyA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3QgY2VudGlzZWNvbmRzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDEwKSAlIDEwMCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBzZWNvbmRzID0gKFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMik7XG4gICAgY29uc3QgbWludXRlcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBob3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApKS5zbGljZSgtMik7XG5cbiAgICByZXR1cm4gbWludXRlcyAhPT0gXCIwMFwiXG4gICAgICA/IGAke21pbnV0ZXN9IDogJHtzZWNvbmRzfSAuICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgIDogaG91cnMgIT09IFwiMDBcIlxuICAgICAgPyBgJHtob3Vyc30gOiAke21pbnV0ZXN9OiAke3NlY29uZHN9IC4gJHtjZW50aXNlY29uZHN9YFxuICAgICAgOiBgJHtzZWNvbmRzfSAuICR7Y2VudGlzZWNvbmRzfSBzZWNzYDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja1BlcnNvbmFsaXplZDogTGVhZGVyYm9hcmRIYW5kbGVDbGlja0Z1bmMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTDtcbiAgICByZXR1cm4gdXNlck5hbWUgPyBzZXRQZXJzb25hbGl6ZWQodXNlck5hbWUpIDogc2V0UGVyc29uYWxpemVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja1BhZ2U6IEhhbmRsZUNsaWNrUGFnZUZ1bmMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS5pbm5lckhUTUwpIC0gMTtcbiAgICBzZXRDdXJyZW50UGFnZShzZWxlY3RlZCk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVRpdGxlOiBNYWtlVGl0bGVGdW5jID0gKHBlcnNvbmFsaXplZCwgc2tpbGxMZXZlbCkgPT5cbiAgICBwZXJzb25hbGl6ZWRcbiAgICAgID8gYCR7cGVyc29uYWxpemVkfXMgJHtza2lsbExldmVsfSBMZWFkZXJib2FyZDpgXG4gICAgICA6IGAke3NraWxsTGV2ZWx9IExlYWRlcmJvYXJkYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJsZWFkZXJib2FyZFwiPlxuICAgICAgPGgzIGlkPVwibGVhZGVyYm9hcmQtaGVhZGVyXCI+e21ha2VUaXRsZShwZXJzb25hbGl6ZWQsIHNraWxsTGV2ZWwpfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbm5lcnMtY2lyY2xlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVzLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgeyhoYW5kbGVTY29yZVZpZXcocHJvcHM/LnNzclRvcFRpbWVzKSB8fCBbXSkubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeSA/IChcbiAgICAgICAgICAgICAgPExlYWRlckJvYXJkRW50cnlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgICBwZXJzb25hbGl6ZWQ9e3BlcnNvbmFsaXplZH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgZW50cnk9e2VudHJ5fVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja1BlcnNvbmFsaXplZH1cbiAgICAgICAgICAgICAgICBmb3JtYXRUaW1lPXtmb3JtYXRUaW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFnZU5vVWxcbiAgICAgICAgICBwYWdlT2Zmc2V0PXtwYWdlT2Zmc2V0fVxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja1BhZ2V9XG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIHRvcFRpbWVzUGVyUGFnZT17cGFnZU9mZnNldH1cbiAgICAgICAgICBub09mVG9wVGltZXM9e2hhbmRsZVNjb3JlTGVuZ3RoKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXJib2FyZC1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICB7cGVyc29uYWxpemVkID8gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2tQZXJzb25hbGl6ZWQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZXR1cm4tdG8tbGVhZGVyYm9hcmQtYnV0dG9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtgcmV0dXJuIHRvICR7c2tpbGxMZXZlbH0gTGVhZGVyQm9hcmRgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLXNraWxsLWxldmVsLXNlbGVjdG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItYnV0dG9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJiZWdpbm5lclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiU0VUIEJFR0lOTkVSIERJTUVOU0lPTlNcIiB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtc2tpbGwtbGV2ZWwtc2VsZWN0b3ItYnV0dG9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJpbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiBcIlNFVCBJTlRFUk1FRElBVEUgRElNRU5TSU9OU1wiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRlcmJvYXJkLXNraWxsLWxldmVsLXNlbGVjdG9yLWJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhbHVlPVwiYWR2YW5jZWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6IFwiU0VUIEFEVkFOQ0VEIERJTUVOU0lPTlNcIiB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCB7IFBlcnNvbmFsaXplZCwgRm9ybWF0VGltZUZ1bmMsIExlYWRlcmJvYXJkRW50cnksIExlYWRlcmJvYXJkSGFuZGxlQ2xpY2tGdW5jIH0gZnJvbSBcIi4vbGVhZGVyYm9hcmQtdHlwZXNcIjtcblxuXG5pbnRlcmZhY2UgTGVhZGVyYm9hcmRFbnRyeVByb3BzIHtcbiAgcGVyc29uYWxpemVkOiBQZXJzb25hbGl6ZWQ7XG4gIGhhbmRsZUNsaWNrOiBMZWFkZXJib2FyZEhhbmRsZUNsaWNrRnVuYztcbiAgZW50cnk6IExlYWRlcmJvYXJkRW50cnk7XG4gIGluZGV4OiBudW1iZXI7XG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIGZvcm1hdFRpbWU6Rm9ybWF0VGltZUZ1bmM7XG59XG5jb25zdCBTaW5nbGVMZWFkZXJib2FyZEVudHJ5OiBSZWFjdC5GQzxMZWFkZXJib2FyZEVudHJ5UHJvcHM+ID0gKHtcbiAgY3VycmVudFBhZ2UsXG4gIHBlcnNvbmFsaXplZCxcbiAgaGFuZGxlQ2xpY2ssXG4gIGVudHJ5OiB7IHVzZXJuYW1lLCB0aW1lIH0sXG4gIGluZGV4LFxuICBmb3JtYXRUaW1lLFxufSkgPT4ge1xuICBjb25zdCBbeyBkZWZpbmVkVXNlck5hbWUgfV0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgZ29sZGVuID0gZGVmaW5lZFVzZXJOYW1lID09PSB1c2VybmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBjbGFzc05hbWU9e3BlcnNvbmFsaXplZCA/IFwicGVyc29uYWxpemVkIHNjb3Jlcy1saXN0LWl0ZW1cIiA6IFwic2NvcmVzLWxpc3QtaXRlbVwifVxuICAgID5cbiAgICAgIHsvKiBOdW1iZXIgKi99XG4gICAgICA8aDVcbiAgICAgICAgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdXNlclwiIDogXCJzY29yZXMtdXNlclwifVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgeygoY3VycmVudFBhZ2UgKiAxMCkgKyBpbmRleCApICsgMX0uXG4gICAgICA8L2g1PlxuICAgICAgey8qIE5hbWUgKi99XG4gICAgICA8aDVcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Z29sZGVuID8gXCJnb2xkZW4gc2NvcmVzLXVzZXJcIiA6IFwic2NvcmVzLXVzZXJcIn1cbiAgICAgID5cbiAgICAgICAge3VzZXJuYW1lfVxuICAgICAgPC9oNT5cbiAgICAgIHsvKiBWZXJ0aWNhbCBsaW5lICovfVxuICAgICAgPGg1IGNsYXNzTmFtZT17Z29sZGVuID8gXCJnb2xkZW4gc2NvcmVzLXVzZXJcIiA6IFwiYmxhY2stbnVtIHNjb3Jlcy11c2VyXCJ9PlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIHx7XCIgXCJ9XG4gICAgICA8L2g1PlxuICAgICAgey8qIFRpbWUgKi99XG4gICAgICA8aDUgY2xhc3NOYW1lPXtnb2xkZW4gPyBcImdvbGRlbiBzY29yZXMtdGltZVwiIDogXCJzY29yZXMtdGltZVwifT5cbiAgICAgICAge2Zvcm1hdFRpbWUodGltZSl9XG4gICAgICA8L2g1PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGVhZGVyYm9hcmRFbnRyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhhbmRsZUNsaWNrUGFnZUZ1bmMgfSBmcm9tIFwiLi4vbGVhZGVyYm9hcmQtdHlwZXNcIjtcblxuaW50ZXJmYWNlIFBhZ2VOb0xpUHJvcHMge1xuICBwYWdlSW5kZXg6IG51bWJlcjtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgaGFuZGxlQ2xpY2s6IEhhbmRsZUNsaWNrUGFnZUZ1bmM7XG59XG5jb25zdCBQYWdlTm9MaTogUmVhY3QuRkM8UGFnZU5vTGlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIGtleT17cHJvcHMucGFnZUluZGV4fVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgcHJvcHMuY3VycmVudFBhZ2UgKyAxID09PSBwcm9wcy5wYWdlSW5kZXhcbiAgICAgICAgICA/IGBwYWdlTm9MaSBzZWxlY3RlZC1wYWdlLWxpYFxuICAgICAgICAgIDogXCJwYWdlTm9MaVwiXG4gICAgICB9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja31cbiAgICA+XG4gICAgICA8YT57cHJvcHMucGFnZUluZGV4fTwvYT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vTGk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIYW5kbGVDbGlja1BhZ2VGdW5jIH0gZnJvbSBcIi4uL2xlYWRlcmJvYXJkLXR5cGVzXCI7XG5pbXBvcnQgUGFnZU5vIGZyb20gXCIuL1BhZ2VOb0xpXCI7XG5cbmludGVyZmFjZSBQYWdlTm9VbFByb3BzIHtcbiAgcGFnZU9mZnNldDogbnVtYmVyO1xuICBub09mVG9wVGltZXM6IG51bWJlcjtcbiAgdG9wVGltZXNQZXJQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIGhhbmRsZUNsaWNrOiBIYW5kbGVDbGlja1BhZ2VGdW5jXG59XG5cbmNvbnN0IFBhZ2VOb1VsOiBSZWFjdC5GQzxQYWdlTm9VbFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG5cbiAgY29uc3QgcmVuZGVyUGFnZU51bWJlcnMgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLm5vT2ZUb3BUaW1lcykge1xuICAgIHJldHVybiBbLi4ubmV3IEFycmF5KE1hdGguY2VpbChwcm9wcy5ub09mVG9wVGltZXMgLyBwcm9wcy50b3BUaW1lc1BlclBhZ2UpKV1cbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICB9KVxuICAgICAgLm1hcCgocGFnZUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhZ2VOb1xuICAgICAgICAgICAga2V5PXtwYWdlSW5kZXh9XG4gICAgICAgICAgICBwYWdlSW5kZXg9e3BhZ2VJbmRleH1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwcm9wcy5jdXJyZW50UGFnZX1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBpZD1cInBhZ2UtbnVtYmVyc1wiPlxuICAgICAge3JlbmRlclBhZ2VOdW1iZXJzKCl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb1VsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tIFwiQ3VzdG9tSG9va3NcIjtcbmltcG9ydCB7IHVzZVRpbWVyQ29udGV4dCB9IGZyb20gXCJUaW1lclN0b3JlXCI7XG5pbXBvcnQgeyB1c2VBZHZhbmNlZFNjb3JlTXV0YXRpb24sIHVzZUJlZ2lubmVyU2NvcmVNdXRhdGlvbiwgdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IFwiLi9taWxsaXNlY29uZHN0eWxlcy5zY3NzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbcG9zdEJlZ2lubmVyU2NvcmVdID0gdXNlQmVnaW5uZXJTY29yZU11dGF0aW9uKCk7XG4gIGNvbnN0IFtwb3N0SW50ZXJtZWRpYXRlU2NvcmVdID0gdXNlSW50ZXJtZWRpYXRlU2NvcmVNdXRhdGlvbigpO1xuICBjb25zdCBbcG9zdEFkdmFuY2VkU2NvcmVdID0gdXNlQWR2YW5jZWRTY29yZU11dGF0aW9uKCk7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBpc1Byb3hpZWQsXG4gICAgICBkaW1lbnNpb25zOiB7IHNraWxsTGV2ZWwgfSxcbiAgICAgIGRlZmluZWRVc2VyTmFtZSxcbiAgICAgIHRpbWVyT24sXG4gICAgfSwgZ2xvYmFsRGlzcGF0Y2hcbiAgXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbeyB0aW1lclRpbWUgfSwgdGltZXJEaXNwYXRjaF0gPSB1c2VUaW1lckNvbnRleHQoKTtcblxuICB1c2VJbnRlcnZhbChcbiAgICAoKSA9PiB7XG4gICAgICB0aW1lckRpc3BhdGNoKHsgdHlwZTogXCJJVEVSQVRFIFRJTUVSIFRJTUVcIiwgcGF5bG9hZDogMTAgfSk7XG4gICAgfSxcbiAgICB0aW1lck9uID09PSB0cnVlXG4gICAgICA/IDEwXG4gICAgICA6IHRpbWVyT24gPT09IFwiRlJFRVpFIFdJTlwiIHx8IHRpbWVyT24gPT09IFwiRlJFRVpFIERFQURcIiB8fCB0aW1lck9uID09PSBcIlZJQ1RPUllcIlxuICAgICAgPyAtMVxuICAgICAgOiBudWxsXG4gICk7XG5cbiAgLy8gSWYgVGltZXIgaXMgY2hhbmdlZCB0byB0cnVlLCBzdGFydCB0aGUgdGltZXIuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyT24gPT09IGZhbHNlKSB7XG4gICAgICB0aW1lckRpc3BhdGNoKHsgdHlwZTogXCJDTEVBUiBUSU1FUiBUSU1FXCIgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVyT24gPT09IFwiVklDVE9SWVwiICYmIHR5cGVvZiBkZWZpbmVkVXNlck5hbWUgPT09IFwic3RyaW5nXCIgJiYgIWlzUHJveGllZCkge1xuICAgICAgaWYgKHNraWxsTGV2ZWwgPT09ICdiZWdpbm5lcicpIHtcbiAgICAgICAgcG9zdEJlZ2lubmVyU2NvcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczogeyB1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWUgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe3R5cGU6ICdGUkVFWkUgVElNRVIgU1RBVEUgV0lOJ30pXG4gICAgICAgICAgLy8gZ2xvYmFsRGlzcGF0Y2goeyB0eXBlOiAnU0VUIFRPUCBUSU1FUycsIHBheWxvYWQ6IHsgdG9wVGltZXM6IG5ld1RvcFRpbWVzIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2tpbGxMZXZlbCA9PT0gJ2ludGVybWVkaWF0ZScpIHtcbiAgICAgICAgcG9zdEludGVybWVkaWF0ZVNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChza2lsbExldmVsID09PSAnYWR2YW5jZWQnKSB7XG4gICAgICAgIHBvc3RBZHZhbmNlZFNjb3JlKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogZGVmaW5lZFVzZXJOYW1lLCB0aW1lOiB0aW1lclRpbWV9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHt0eXBlOiAnRlJFRVpFIFRJTUVSIFNUQVRFIFdJTid9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc1Byb3hpZWQgJiYgdGltZXJPbiA9PT0gJ1ZJQ1RPUlknKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWxlcnQoYFxuICAgICAgICBDb25ncmF0dWxhdGlvbnMhXG5cbiAgICAgICAgWW91IGNsZWFyZWQgdGhlIGJvYXJkIGluICR7KFwiMFwiICsgKE1hdGguZmxvb3IodGltZXJUaW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX0gc2Vjb25kcyFcblxuICAgICAgICBjaGVjayBvdXQgdGhlIGZ1bGwgZ2FtZSB3aXRoIGxvZ2luIGFuZCBoaWdoIHNjb3JlcyBhdC4uLlxuICAgICAgICBodHRwczovL3d3d3cuYmVhdG1pbmVzd2VlcGVyLmFwcFxuXG4gICAgICAgIC1KYW1lc1xuICAgICAgICBgXG5cbiAgICAgICAgKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9LCBbdGltZXJPbl0pO1xuXG4gIGNvbnN0IGNlbnRpc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwKSAlIDEwMCkpLnNsaWNlKC0yKTtcbiAgY29uc3Qgc2Vjb25kcyA9IChcIjBcIiArIChNYXRoLmZsb29yKHRpbWVyVGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lclRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKTtcbiAgY29uc3QgaG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKHRpbWVyVGltZSAvIDM2MDAwMDApKS5zbGljZSgtMik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWlsbGktc2Vjb25kLXRpbWVyLWNvbnRhaW5lcic+XG4gICAgICA8aDQgaWQ9XCJtaWxsaS1zZWNvbmQtdGltZXJcIiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9PlxuICAgICAgICB7aG91cnMgIT09IFwiMDBcIlxuICAgICAgICAgID8gYCR7aG91cnN9IDogJHttaW51dGVzfSA6ICR7c2Vjb25kc30gOiAke2NlbnRpc2Vjb25kc31gXG4gICAgICAgICAgOiBtaW51dGVzICE9PSBcIjAwXCJcbiAgICAgICAgICA/IGAke21pbnV0ZXN9IDogJHtzZWNvbmRzfSA6ICR7Y2VudGlzZWNvbmRzfWBcbiAgICAgICAgICA6IGAke3NlY29uZHN9IDogJHtjZW50aXNlY29uZHN9YH1cbiAgICAgIDwvaDQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbWJpbmVkUmVkdWNlcnMgZnJvbSBcIi4vdGltZXJSZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgVGltZXJJU3RhdGVUeXBlcywgVGltZXJTdG9yZUludGVyZmFjZSB9IGZyb20gXCIuLi9UaW1lclR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGltZXJJU3RhdGVUeXBlcyA9IHtcbiAgdGltZXJUaW1lOiAwLFxufTtcblxuY29uc3QgVGltZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcbiAgW1RpbWVySVN0YXRlVHlwZXMsIFJlYWN0LkRpc3BhdGNoPGFueT5dXG4+KFtpbml0aWFsU3RhdGUsICgpID0+IHt9XSk7XG5cblxuY29uc3QgVGltZXJTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQzxUaW1lclN0b3JlSW50ZXJmYWNlPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKENvbWJpbmVkUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vPGFueT4oKCkgPT4gW3N0YXRlLCBkaXNwYXRjaF0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRpbWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L1RpbWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVRpbWVyQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVGltZXJDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVRpbWVyQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGltZXJTdG9yZVByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyB1c2VUaW1lckNvbnRleHQsIFRpbWVyU3RvcmVQcm92aWRlciB9O1xuIiwiLy8gaW1wb3J0IHsgfSBmcm9tICcuL3RpbWVyQWN0aW9ucy5qcyc7XG5cbmltcG9ydCB7IENvbWJpbmVSZWR1Y2Vyc0Z1bmMgfSBmcm9tIFwiTWluZXN3ZWVwZXJUeXBlc1wiO1xuaW1wb3J0IHsgVGltZXJUaW1lRnVuYyB9IGZyb20gXCIuLi9UaW1lclR5cGVzXCI7XG5cbmNvbnN0IHRpbWVyVGltZTogVGltZXJUaW1lRnVuYyA9IChzdGF0ZSA9IDAsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIklURVJBVEUgVElNRVIgVElNRVwiOlxuICAgICAgcmV0dXJuIChzdGF0ZSArPSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBcIkNMRUFSIFRJTUVSIFRJTUVcIjpcbiAgICAgIHJldHVybiAwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyczogQ29tYmluZVJlZHVjZXJzRnVuYyA9IChzbGljZXMpID0+IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBPYmplY3Qua2V5cyhzbGljZXMpLnJlZHVjZShcbiAgICAoYWNjLCBwcm9wKSA9PiAoe1xuICAgICAgLi4uYWNjLFxuICAgICAgW3Byb3BdOiBzbGljZXNbcHJvcF0oYWNjW3Byb3BdLCBhY3Rpb24pLFxuICAgIH0pLFxuICAgIHN0YXRlXG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7IHRpbWVyVGltZSB9KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgVGltZXJTdG9yZVByb3ZpZGVyIH0gZnJvbSBcIlRpbWVyU3RvcmVcIjtcbmltcG9ydCB7IEJvYXJkU3RvcmVQcm92aWRlciB9IGZyb20gXCJCb2FyZFN0b3JlXCI7XG5cbmltcG9ydCBCb2FyZCBmcm9tIFwiVFNDb21wb25lbnRzL0JvYXJkL0JvYXJkXCI7XG5pbXBvcnQgTWlsbGlzZWNvbmRUaW1lciBmcm9tIFwiVFNDb21wb25lbnRzL01pbGxpc2Vjb25kVGltZXIvTWlsbGlzZWNvbmRUaW1lclwiO1xuaW1wb3J0IFNraWxsTGV2ZWxTZWxlY3RvciBmcm9tIFwiVFNDb21wb25lbnRzL1NraWxsTGV2ZWxTZWxlY3Rvci9Ta2lsbExldmVsU2VsZWN0b3JcIjtcblxuaW1wb3J0IFNtaWxleUJhciBmcm9tIFwiVFNDb21wb25lbnRzL1NtaWxleUJhci9TbWlsZXlCYXJcIjtcblxuaW1wb3J0IFwiLi9taW5lc3dlZXBlci5zY3NzXCI7XG5cblxuY29uc3QgTWluZXN3ZWVwZXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW1xuICAgIHtcbiAgICAgIGRpbWVuc2lvbnM6IHsgc2tpbGxMZXZlbCB9LFxuICAgIH0sXG4gIF0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLWNvbnRhaW5lcnNcIiBpZD1cIm1haW4tc3BhY2UtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGlkPVwidG90YWwtYm9hcmRcIiBjbGFzc05hbWU9e3NraWxsTGV2ZWx9PlxuICAgICAgICA8Qm9hcmRTdG9yZVByb3ZpZGVyPlxuICAgICAgICAgIDxTbWlsZXlCYXIgLz5cbiAgICAgICAgICA8Qm9hcmQgLz5cbiAgICAgICAgPC9Cb2FyZFN0b3JlUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8VGltZXJTdG9yZVByb3ZpZGVyPlxuICAgICAgICAgIDxNaWxsaXNlY29uZFRpbWVyIC8+XG4gICAgICAgIDwvVGltZXJTdG9yZVByb3ZpZGVyPlxuXG4gICAgICA8U2tpbGxMZXZlbFNlbGVjdG9yIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW5lc3dlZXBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnO1xuaW1wb3J0ICcuL3NraWxsc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgW3sgZGltZW5zaW9uczogeyBza2lsbExldmVsIH0gfSwgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtza2lsbExldmVsfSBpZD0nc2tpbGwtbGV2ZWwtc2VsZWN0b3InPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfID0+IGdsb2JhbERpc3BhdGNoKHsgdHlwZTogJ1NFVCBCRUdJTk5FUiBESU1FTlNJT05TJyB9KX0+QmVnaW5uZXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17XyA9PiBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTRVQgSU5URVJNRURJQVRFIERJTUVOU0lPTlMnIH0pfT5JbnRlcm1lZGlhdGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17XyA9PiBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTRVQgQURWQU5DRUQgRElNRU5TSU9OUycgfSl9PkV4cGVydDwvYnV0dG9uPlxuICAgIDwvZGl2ID5cbiAgKVxufSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9hcmRDb250ZXh0IH0gZnJvbSAnQm9hcmRTdG9yZSc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnR2xvYmFsU3RvcmUnXG5pbXBvcnQgJy4vc21pbGV5c3R5bGVzLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oKCkgPT4ge1xuXG4gIGNvbnN0IFt7IGRpbWVuc2lvbnM6IHsgbnVtYmVyT2ZNaW5lcyB9LCB0aW1lck9uIH0sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCBbeyBzdXJwcmlzZWQsIGZsYWdzUmVtYWluaW5nIH0sIGJvYXJkRGlzcGF0Y2hdID0gdXNlQm9hcmRDb250ZXh0KCk7XG5cbiAgY29uc3QgcmVzZXRDYWxsYmFjayA9ICgpID0+IHtcbiAgICBib2FyZERpc3BhdGNoKHsgdHlwZTogJ1JFU0VUIFNNSUxFUycgfSk7XG4gICAgYm9hcmREaXNwYXRjaCh7IHR5cGU6ICdTRVQgRkxBR1MgUkVNQUlOSU5HJywgcGF5bG9hZDogbnVtYmVyT2ZNaW5lcyB9KTtcbiAgICBnbG9iYWxEaXNwYXRjaCh7IHR5cGU6ICdTV0lUQ0ggVElNRVIgT0ZGJyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3NtaWxleS1iYXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtaWxleS1ndXknXG4gICAgICAgIGlkPXtcbiAgICAgICAgICBzdXJwcmlzZWQgPT09ICdkZWFkJyA/ICdkZWFkLWd1eSdcbiAgICAgICAgICAgIDogdGltZXJPbiA9PT0gJ1ZJQ1RPUlknIHx8IHRpbWVyT24gPT09ICdGUkVFWkUgV0lOJyA/ICd2aWN0b3J5LWd1eSdcbiAgICAgICAgICAgICAgOiBzdXJwcmlzZWQgPT09IHRydWUgPyAnc3VycHJpc2VkLWd1eSdcbiAgICAgICAgICAgICAgICA6ICdzbWlsZXktZ3V5J1xuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q2FsbGJhY2t9PjwvZGl2PlxuICAgICAgPGRpdiBpZD0nZmxhZ3MtcmVtYWluaW5nJz57ZmxhZ3NSZW1haW5pbmd9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHtcbiAgbGFiZWwsXG4gIHNpemU6IF8sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFtmaWVsZCwgeyBlcnJvciB9XSA9IHVzZUZpZWxkKHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAgey8qIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT57bGFiZWx9PC9sYWJlbD4gKi99XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj57ZXJyb3IgPyBlcnJvciA6IG51bGx9PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiR2xvYmFsU3RvcmVcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJUU1NyYy9wdWJsaWMvY29tcG9uZW50cy9Vc2VyRm9ybXMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgTWVEb2N1bWVudCwgdXNlTG9naW5NdXRhdGlvbiB9IGZyb20gXCJUU1NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCJUU1NyYy91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQgXCIuL3VzZXJGb3Jtcy5zY3NzXCI7XG5cbmNvbnN0IFVzZXJMb2dpbkZvcm06IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgW18sIGdsb2JhbERpc3BhdGNoXSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgW2xvZ2luXSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuXG5cbiAgICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgbG9naW4oe1xuICAgICAgICAgIHZhcmlhYmxlczogeyBvcHRpb25zOiB2YWx1ZXMgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW01lRG9jdW1lbnRdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsb2dpbkVycm9ycyA9IGxvZ2luRGF0YT8uZGF0YT8ubG9naW4uZXJyb3JzO1xuICAgICAgICBjb25zdCBsb2dpblN1Y2Nlc3MgPSBsb2dpbkRhdGE/LmRhdGE/LmxvZ2luLnVzZXI7XG5cbiAgICAgICAgaWYgKGxvZ2luRXJyb3JzKSB7XG4gICAgICAgICAgc2V0RXJyb3JzKHRvRXJyb3JNYXAobG9naW5FcnJvcnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2dpblN1Y2Nlc3MpIHtcbiAgICAgICAgICBnbG9iYWxEaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIlNFVCBERUZJTkVEIFVTRVJOQU1FXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXJOYW1lOiBsb2dpblN1Y2Nlc3MudXNlcm5hbWUgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBBZnRlciBsb2dnaW5nIGluIHJldHVybiB0byBob21lIHNjcmVlblxuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdmdWxsc3RhY2snKSA+IC0xKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9mdWxsc3RhY2svbWluZXN3ZWVwZXInKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIlRTU3JjL3B1YmxpYy9jb21wb25lbnRzL1VzZXJGb3Jtcy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZURvY3VtZW50LCB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIlRTU3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIlRTU3JjL3V0aWxzL3RvRXJyb3JNYXBcIjtcbmltcG9ydCBcIi4vdXNlckZvcm1zLnNjc3NcIjtcblxuY29uc3QgVXNlckxvZ2luRm9ybTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgWywgZ2xvYmFsRGlzcGF0Y2hdID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBjb25zdCBbcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IHJlZ2lzdGVyKHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgb3B0aW9uczogdmFsdWVzIH0sXG4gICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtNZURvY3VtZW50XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFcnJvcnMgPSByZWdpc3RlckRhdGE/LmRhdGE/LnJlZ2lzdGVyLmVycm9ycztcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gcmVnaXN0ZXJEYXRhPy5kYXRhPy5yZWdpc3Rlci51c2VyO1xuXG4gICAgICAgIGlmIChyZWdpc3RlckVycm9ycykge1xuICAgICAgICAgIHNldEVycm9ycyh0b0Vycm9yTWFwKHJlZ2lzdGVyRXJyb3JzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJTdWNjZXNzKSB7XG4gICAgICAgICAgZ2xvYmFsRGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVQgREVGSU5FRCBVU0VSTkFNRVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VyTmFtZTogcmVnaXN0ZXJTdWNjZXNzLnVzZXJuYW1lIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZnVsbHN0YWNrJykgPiAtMSkge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvZnVsbHN0YWNrL21pbmVzd2VlcGVyJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7fSkgPT4gKFxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1yZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWlucHV0c1wiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luRm9ybTtcbiIsIi8vIGh0dHBzOi8vb3ZlcnJlYWN0ZWQuaW8vbWFraW5nLXNldGludGVydmFsLWRlY2xhcmF0aXZlLXdpdGgtcmVhY3QtaG9va3MvXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlSW50ZXJ2YWxGdW5jIH0gZnJvbSAnVFNTcmMvbWluZXN3ZWVwZXItdHlwZXMnO1xuXG5cblxuY29uc3QgdXNlSW50ZXJ2YWw6IFVzZUludGVydmFsRnVuYyA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgY29uc3Qgc2F2ZWRDYWxsYmFjazogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gUmVhY3QudXNlUmVmKCk7XG4gIC8vIFJlbWVtYmVyIHRoZSBsYXRlc3QgY2FsbGJhY2suXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIH0sIFtjYWxsYmFja10pO1xuXG4gIC8vIFNldCB1cCB0aGUgaW50ZXJ2YWwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpO1xuICAgIH1cblxuICAgIC8vIElmIHZpY3RvcnkgaXMgZGVjbGFyZWQgb3IgYm9tYiBzdG9wIHRoZSB0aW1lci4uLlxuICAgIGlmIChkZWxheSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgLy8gT3RoZXJ3aXNlLi4uXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbCh0aWNrLCBkZWxheSk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSwgW2RlbGF5XSlcbn1cblxuXG5leHBvcnQgeyB1c2VJbnRlcnZhbCB9OyIsIlxuaW1wb3J0IHsgQXJnLCBRdWVyeSwgTXV0YXRpb24sIFJlc29sdmVyLCBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgTWluZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlIH0gZnJvbSAnVFNEYXRhYmFzZS9lbnRpdGllcy9BZHZhbmNlZF9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtBZHZhbmNlZFNjb3JlXSlcbiAgYXN5bmMgYWxsQWR2YW5jZWRTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxBZHZhbmNlZFNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChBZHZhbmNlZFNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQWR2YW5jZWRTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdBZHZhbmNlZFNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEFkdmFuY2VkU2NvcmU+IHtcbiAgICBjb25zdCBuZXdBZHZhbmNlZFNjb3JlID0gZW0uY3JlYXRlKEFkdmFuY2VkU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QWR2YW5jZWRTY29yZSk7XG4gICAgcmV0dXJuIG5ld0FkdmFuY2VkU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQmVnaW5uZXJTY29yZSB9IGZyb20gJ1RTRGF0YWJhc2UvZW50aXRpZXMvQmVnaW5uZXJfU2NvcmVzJztcblxuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEJlZ2lubmVyU2NvcmVSZXNvbHZlciB7XG5cbiAgQFF1ZXJ5KCgpID0+IFtCZWdpbm5lclNjb3JlXSlcbiAgYXN5bmMgYWxsQmVnaW5uZXJTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxCZWdpbm5lclNjb3JlW10+IHtcbiAgICByZXR1cm4gZW0uZmluZChCZWdpbm5lclNjb3JlLCB7fSk7XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gQmVnaW5uZXJTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdCZWdpbm5lclNjb3JlKFxuICAgIEBBcmcoJ3VzZXJuYW1lJywgKCkgPT4gU3RyaW5nKSB1c2VybmFtZTogc3RyaW5nLFxuICAgIEBBcmcoJ3RpbWUnLCAoKSA9PiBOdW1iZXIpIHRpbWU6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPEJlZ2lubmVyU2NvcmU+IHtcbiAgICBjb25zdCBuZXdCZWdpbm5lclNjb3JlID0gZW0uY3JlYXRlKEJlZ2lubmVyU2NvcmUsIHsgdXNlcm5hbWUsIHRpbWUgfSlcbiAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gobmV3QmVnaW5uZXJTY29yZSk7XG4gICAgcmV0dXJuIG5ld0JlZ2lubmVyU2NvcmU7XG4gIH1cbn0iLCJcbmltcG9ydCB7IEFyZywgUXVlcnksIE11dGF0aW9uLCBSZXNvbHZlciwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmUgfSBmcm9tICdUU0RhdGFiYXNlL2VudGl0aWVzL0ludGVybWVkaWF0ZV9TY29yZXMnO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIEludGVybWVkaWF0ZVNjb3JlUmVzb2x2ZXIge1xuXG4gIEBRdWVyeSgoKSA9PiBbSW50ZXJtZWRpYXRlU2NvcmVdKVxuICBhc3luYyBhbGxJbnRlcm1lZGlhdGVTY29yZXMoXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZVtdPiB7XG4gICAgcmV0dXJuIGVtLmZpbmQoSW50ZXJtZWRpYXRlU2NvcmUsIHt9KTtcbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBJbnRlcm1lZGlhdGVTY29yZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBuZXdJbnRlcm1lZGlhdGVTY29yZShcbiAgICBAQXJnKCd1c2VybmFtZScsICgpID0+IFN0cmluZykgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBAQXJnKCd0aW1lJywgKCkgPT4gTnVtYmVyKSB0aW1lOiBudW1iZXIsXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxJbnRlcm1lZGlhdGVTY29yZT4ge1xuICAgIGNvbnN0IG5ld0ludGVybWVkaWF0ZVNjb3JlID0gZW0uY3JlYXRlKEludGVybWVkaWF0ZVNjb3JlLCB7IHVzZXJuYW1lLCB0aW1lIH0pXG4gICAgYXdhaXQgZW0ucGVyc2lzdEFuZEZsdXNoKG5ld0ludGVybWVkaWF0ZVNjb3JlKTtcbiAgICByZXR1cm4gbmV3SW50ZXJtZWRpYXRlU2NvcmU7XG4gIH1cbn0iLCJpbXBvcnQge1xuICBDdHgsXG4gIFF1ZXJ5LFxuICBNdXRhdGlvbixcbiAgUmVzb2x2ZXIsXG4gIEFyZyxcbiAgSW5wdXRUeXBlLFxuICBGaWVsZCxcbiAgT2JqZWN0VHlwZSxcbn0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJUU0RhdGFiYXNlL2VudGl0aWVzL1VzZXJcIjtcbmltcG9ydCB7IE1pbmVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIkBtaWtyby1vcm0vcG9zdGdyZXNxbFwiO1xuaW1wb3J0IGFyZ29uMiBmcm9tIFwiYXJnb24yXCI7XG5pbXBvcnQge0NPT0tJRV9OQU1FfSBmcm9tIFwiVFNTcmMvY29uc3RhbnRzXCI7XG5cbkBJbnB1dFR5cGUoKVxuY2xhc3MgVXNlcm5hbWVQYXNzd29yZElucHV0IHtcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgRmllbGRFcnJvciB7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIGZpZWxkOiBzdHJpbmc7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgVXNlclJlc3BvbnNlIHtcbiAgQEZpZWxkKCgpID0+IFtGaWVsZEVycm9yXSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBlcnJvcnM/OiBGaWVsZEVycm9yW107XG5cbiAgQEZpZWxkKCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcj86IFVzZXI7XG59XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgQFF1ZXJ5KCgpID0+IFVzZXIsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgYXN5bmMgbWUoQEN0eCgpIHsgcmVxLCBlbSB9OiBNaW5lQ29udGV4dCkge1xuICAgIC8vIHlvdSBhcmUgbm90IGxvZ2dlZCBpblxuICAgIGlmICghcmVxLnNlc3Npb24udXNlcklkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGVtLmZpbmRPbmUoVXNlciwgeyBpZDogcmVxLnNlc3Npb24udXNlcklkIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgQFF1ZXJ5KCgpID0+IFtVc2VyXSlcbiAgZ2V0QWxsVXNlcnMoQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHQpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIHJldHVybiBlbS5maW5kKFVzZXIsIHt9KTtcbiAgfVxuXG4gIEBRdWVyeSgoKSA9PiBVc2VyUmVzcG9uc2UpXG4gIGFzeW5jIGdldFNpbmdsZVVzZXIoXG4gICAgQEFyZyhcImlkXCIsICgpID0+IE51bWJlcikgaWQ6IG51bWJlcixcbiAgICBAQ3R4KCkgeyBlbSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbS5maW5kT25lKFVzZXIsIHsgaWQgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGRvZXMgbm90IGV4aXN0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFVzZXJSZXNwb25zZSlcbiAgYXN5bmMgcmVnaXN0ZXIoXG4gICAgQEFyZyhcIm9wdGlvbnNcIiwgKCkgPT4gVXNlcm5hbWVQYXNzd29yZElucHV0KSBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQsXG4gICAgQEN0eCgpIHsgZW0sIHJlcSB9OiBNaW5lQ29udGV4dFxuICApOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xuICAgIGlmIChvcHRpb25zLnVzZXJuYW1lLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhc3N3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYXJnb24yLmhhc2gob3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICBsZXQgdXNlcjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGVtIGFzIEVudGl0eU1hbmFnZXIpXG4gICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoVXNlcilcbiAgICAgICAgLmdldEtuZXhRdWVyeSgpXG4gICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgIHVzZXJuYW1lOiBvcHRpb25zLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pXG4gICAgICAgIC5yZXR1cm5pbmcoXCIqXCIpO1xuICAgICAgdXNlciA9IHJlc3VsdFswXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyBEdXBsaWNhdGUgdXNlcm5hbWUgZXJyb3JcbiAgICAgIGlmIChlcnIuZGV0YWlsLmluY2x1ZGVzKFwiYWxyZWFkeSBleGlzdHNcIikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICAgIC8vIFN0b3JlIHVzZXIgaWQgc2Vzc2lvbiwgdGhpcyB3aWxsIHNldCBhIGNvb2tpZSBvbiB0aGUgdXNlciBhbmQga2VlcCB0aGVtIGxvZ2dlZCBpbi5cbiAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuICAgIHJlcS5zZXNzaW9uLnNhdmUoKCkgPT4ge30pXG5cbiAgICByZXR1cm4ge3VzZXJ9O1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IEJvb2xlYW4pXG4gIGxvZ291dChAQ3R4KCkgeyByZXEsIHJlcyB9OiBNaW5lQ29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgIHJlcS5zZXNzaW9uLmRlc3Ryb3koKGVycikgPT4ge1xuICAgICAgICByZXMuY2xlYXJDb29raWUoQ09PS0lFX05BTUUpO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3llZCEhIScpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB7IG9rOiB0cnVlIH07XG4gIH1cblxuICBATXV0YXRpb24oKCkgPT4gVXNlclJlc3BvbnNlKVxuICBhc3luYyBsb2dpbihcbiAgICBAQXJnKFwib3B0aW9uc1wiLCAoKSA9PiBVc2VybmFtZVBhc3N3b3JkSW5wdXQpIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCxcbiAgICBAQ3R4KCkgeyBlbSwgcmVxIH06IE1pbmVDb250ZXh0XG4gICk6IFByb21pc2U8VXNlclJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbS5maW5kT25lKFVzZXIsIHsgdXNlcm5hbWU6IG9wdGlvbnMudXNlcm5hbWUgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcInRoYXQgdXNlcm5hbWUgZG9lcyBub3QgZXhpc3RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBhcmdvbjIudmVyaWZ5KHVzZXIucGFzc3dvcmQsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWVsZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImluY29ycmVjdCBwYXNzd29yZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuXG4gICAgICByZXR1cm4geyB1c2VyIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIEBNdXRhdGlvbigoKSA9PiBCb29sZWFuKVxuICBhc3luYyBkZWxldGVVc2VyKFxuICAgIEBBcmcoXCJpZFwiLCAoKSA9PiBOdW1iZXIpIGlkOiBudW1iZXIsXG4gICAgQEN0eCgpIHsgZW0gfTogTWluZUNvbnRleHRcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtLm5hdGl2ZURlbGV0ZShVc2VyLCB7IGlkIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBIdHRwTGluayxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHJlbmRlclRvTm9kZVN0cmVhbSB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBodG1sU3RhcnQsIGh0bWxFbmQgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgR2xvYmFsU3RvcmVQcm92aWRlciB9IGZyb20gXCJHbG9iYWxTdG9yZVwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCJUU0NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICB1cmk6IFwiL2dyYXBocWxcIixcbiAgICBmZXRjaCxcbiAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBtaW5lc3dlZXBlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbm1pbmVzd2VlcGVyUm91dGVyLmdldCgnL21pbmVzd2VlcGVyLXRvcFRpbWVzJywgKF8sIHJlcykgPT4ge1xuICByZXMuc2VuZCgnb2snKTtcbn0pXG5cbm1pbmVzd2VlcGVyUm91dGVyLmdldChcIipcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB7fTtcbiAgbGV0IHJlc3VsdFNjb3JlcztcbiAgdHJ5IHtcbiAgICBjb25zdCBsaW5rID0gJ2h0dHBzOi8vYmVhdG1pbmVzd2VlcGVyLmFwcC9ncmFwaHFsJ1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLnBvc3QobGluaywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBxdWVyeTogYHF1ZXJ5IEdldEJlZ2lubmVyU2NvcmVzIHtcbiAgICAgICAgICAgICAgICBhbGxCZWdpbm5lclNjb3JlcyB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgIHRpbWVcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9YCxcbiAgICB9KTtcblxuICAgIHJlc3VsdFNjb3JlcyA9IHJlc3VsdHMuZGF0YT8uZGF0YS5hbGxCZWdpbm5lclNjb3JlcyB8fCBbXTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgbWluZXN3ZWVwZXJTdHJlYW0gPSByZW5kZXJUb05vZGVTdHJlYW0oXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxHbG9iYWxTdG9yZVByb3ZpZGVyPlxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgIDwvR2xvYmFsU3RvcmVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xuXG4gIHJlcy53cml0ZShcbiAgICBodG1sU3RhcnQoISFwcm9jZXNzLmVudi5OT0RFX0VOViwgcHJvY2Vzcy5lbnYuQ2xvdWRmcm9udCwgcmVzdWx0U2NvcmVzKVxuICApO1xuICBtaW5lc3dlZXBlclN0cmVhbS5waXBlKHJlcywgeyBlbmQ6IGZhbHNlIH0pO1xuICBtaW5lc3dlZXBlclN0cmVhbS5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgcmVzLndyaXRlKGh0bWxFbmQoISFwcm9jZXNzLmVudi5OT0RFX0VOViwgcHJvY2Vzcy5lbnYuQ2xvdWRmcm9udCkpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWluZXN3ZWVwZXJSb3V0ZXI7XG4iLCJpbXBvcnQgeyBHZW5lcmljU2NvcmUgfSBmcm9tIFwiVFNTcmMvcHVibGljL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQtdHlwZXNcIjtcblxuY29uc3QgaHRtbFN0YXJ0ID0gKERFVl9FTlY6IGJvb2xlYW4sIENsb3VkZnJvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCwgcmVzdWx0U2NvcmVzOiBHZW5lcmljU2NvcmVbXSkgPT4ge1xuICByZXR1cm4gKGA8IURPQ1RZUEUgSFRNTD5cbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICAgICAgPHRpdGxlPk1pbmVzd2VlcGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPScke0Nsb3VkZnJvbnR9L21pbmUtaW1hZ2VzL21pbmVjb24ucG5nJy8+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0YXRpYy9pbmRleC5jc3MnLz5cbiAgICAgIDwvaGVhZD5cblxuICAgICAgPHNjcmlwdD5cbiAgICAgICAgY29uc3QgZGV2U3R5bGVTaGVldEhyZWYgPSAnL3N0YXRpYy9pbmRleC5jc3MnO1xuICAgICAgICBjb25zdCBwcm9kU3R5bGVTaGVldEhyZWYgPSAnJHtDbG91ZGZyb250fS9idWlsZC9wdWJsaWMvaW5kZXguY3NzJztcbiAgICAgICAgY29uc3QgW2hlYWRdID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFQUQnKTtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBsaW5rLmhyZWYgPSAoJHtERVZfRU5WfSA9PT0gdHJ1ZSA/IGRldlN0eWxlU2hlZXRIcmVmIDogcHJvZFN0eWxlU2hlZXRIcmVmKVxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgPC9zY3JpcHQ+XG5cblxuXG4gICAgICA8IS0tIFNlcnZlciBTaWRlIFJlbmRlcmluZyBvZiBQYWdlIERhdGEgLS0+XG4gICAgICA8c2NyaXB0PndpbmRvdy5fX0lOSVRJQUxfX0RBVEFfXz0ke0pTT04uc3RyaW5naWZ5KHtzc3JUb3BUaW1lczogcmVzdWx0U2NvcmVzfSl9PC9zY3JpcHQ+XG5cbiAgICA8Ym9keT5cbiAgICA8ZGl2IGlkPVwibWluZXN3ZWVwZXItcm9vdFwiPmApXG59O1xuXG5cbmNvbnN0IGh0bWxFbmQgPSAoREVWX0VOVjogYm9vbGVhbiwgQ2xvdWRmcm9udDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiAoYDwvZGl2PlxuICAgICAgPHNjcmlwdD5cbiAgICAgIGNvbnN0IGRldlNjcmlwdExpbmsgPSAnL3N0YXRpYy9pbmRleC5qcyc7XG4gICAgICBjb25zdCBwcm9kU2NyaXB0TGluayA9ICcke0Nsb3VkZnJvbnR9L2J1aWxkL3B1YmxpYy9pbmRleC5qcyc7XG5cbiAgICAgIGNvbnN0IFtib2R5XSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdCT0RZJyk7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gKCR7REVWX0VOVn0gPT09IHRydWUgPyBkZXZTY3JpcHRMaW5rIDogcHJvZFNjcmlwdExpbmspXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICA8L3NjcmlwdD5cbiAgICA8L2JvZHk+XG48L2h0bWw+YCk7XG5cbmV4cG9ydCB7XG4gIGh0bWxTdGFydCxcbiAgaHRtbEVuZFxufVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgRmllbGRFcnJvciB9IGZyb20gXCJ0cy1zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZXhwb3J0IGNvbnN0IHRvRXJyb3JNYXAgPSAoZXJyb3JzOiBGaWVsZEVycm9yW10pID0+IHtcbiAgY29uc3QgZXJyb3JNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgZXJyb3JzLmZvckVhY2goKHsgZmllbGQsIG1lc3NhZ2UgfSkgPT4ge1xuICAgIGVycm9yTWFwW2ZpZWxkXSA9IG1lc3NhZ2U7XG4gIH0pO1xuICByZXR1cm4gZXJyb3JNYXA7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1pa3JvLW9ybS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJnb24yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtcmVkaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuLy8gQXBvbGxvXG5pbXBvcnQge1xuICBBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUdyYXBoUUxQbGF5Z3JvdW5kXG59IGZyb20gXCJhcG9sbG8tc2VydmVyLWNvcmVcIjtcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG4vLyBFeHByZXNzXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBtaW5lc3dlZXBlclJvdXRlciBmcm9tICcuL3Nzci1jbGllbnQvaW5kZXgnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vLyBHcmFwaFFsXG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG4vLyBNaWtyby1Pcm1cbmltcG9ydCBtaWNyb0NvbmZpZyBmcm9tICcuLi9kYXRhYmFzZS9taWtyby1vcm0uY29uZmlnJztcbi8vIFJlZGlzXG5pbXBvcnQgcmVkaXMgZnJvbSAncmVkaXMnO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcbmltcG9ydCBjb25uZWN0UmVkaXMgZnJvbSAnY29ubmVjdC1yZWRpcyc7XG5cbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuXG5pbXBvcnQgeyBDT09LSUVfTkFNRSwgX19wcm9kX18gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgQmVnaW5uZXJTY29yZVJlc29sdmVyIH0gZnJvbSAnLi9SZXNvbHZlcnMvYmVnaW5uZXJTY29yZXMnO1xuaW1wb3J0IHsgSW50ZXJtZWRpYXRlU2NvcmVSZXNvbHZlciB9IGZyb20gJy4vUmVzb2x2ZXJzL2ludGVybWVkaWF0ZVNjb3Jlcyc7XG5pbXBvcnQgeyBBZHZhbmNlZFNjb3JlUmVzb2x2ZXIgfSBmcm9tICcuL1Jlc29sdmVycy9hZHZhbmNlZFNjb3Jlcyc7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tICcuL1Jlc29sdmVycy91c2Vycyc7XG5cblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICBjb25zdCByZWRpc1N0b3JlID0gY29ubmVjdFJlZGlzKHNlc3Npb24pO1xuICBjb25zdCByZWRpc0NsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudCgpO1xuXG4gIGFwcC51c2UoY29ycyhcbiAgICB7XG4gICAgICBvcmlnaW46IFsnaHR0cHM6Ly9mdWxsc3RhY2tocml2bmFrLmNvbScsICdodHRwczovL2JlYXRtaW5lc3dlZXBlci5hcHAnXSxcbiAgICAgIGNyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSlcbiAgKVxuXG4gIGFwcC51c2UoXG4gICAgc2Vzc2lvbih7XG4gICAgICBuYW1lOiBDT09LSUVfTkFNRSxcbiAgICAgIHN0b3JlOiBuZXcgcmVkaXNTdG9yZSh7XG4gICAgICAgIGNsaWVudDogcmVkaXNDbGllbnQsXG4gICAgICAgIGRpc2FibGVUb3VjaDogdHJ1ZVxuICAgICAgfSksXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1ICogMTAsIC8vMTAgeWVhcnNcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiAnbGF4JywgLy9jc3JmXG4gICAgICAgIHNlY3VyZTogX19wcm9kX18gLy8gY29va2llIG9ubHkgd29ya3MgaW4gaHR0cHNcbiAgICAgIH0sXG4gICAgICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBzZWNyZXQ6ICdqYW1ib2Jqb25lcycsXG4gICAgICByZXNhdmU6IGZhbHNlXG4gICAgfSlcbiAgKTtcblxuICBjb25zdCBvcm0gPSBhd2FpdCBNaWtyb09STS5pbml0KG1pY3JvQ29uZmlnKTtcbiAgYXdhaXQgb3JtLmdldE1pZ3JhdG9yKCkudXAoKTtcblxuICBjb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IGF3YWl0IGJ1aWxkU2NoZW1hKHtcbiAgICAgIHJlc29sdmVyczogW0JlZ2lubmVyU2NvcmVSZXNvbHZlciwgSW50ZXJtZWRpYXRlU2NvcmVSZXNvbHZlciwgQWR2YW5jZWRTY29yZVJlc29sdmVyLCBVc2VyUmVzb2x2ZXJdLFxuICAgICAgdmFsaWRhdGU6IGZhbHNlXG4gICAgfSksXG4gICAgcGx1Z2luczogW1xuICAgICAgQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VHcmFwaFFMUGxheWdyb3VuZCgpLFxuICAgIF0sXG4gICAgY29udGV4dDogKHsgcmVxLCByZXMgfSkgPT4gKHsgZW06IG9ybS5lbSwgcmVxLCByZXMgfSlcbiAgfSk7XG5cbiAgYXdhaXQgYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG4gIGFwb2xsb1NlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAsIGNvcnM6IGZhbHNlIH0pO1xuXG4gIGFwcC51c2UoJy9zdGF0aWMnLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vdHMtZGlzdC9wdWJsaWMnKSkpO1xuXG4gIGFwcC5nZXQoJyonLCBtaW5lc3dlZXBlclJvdXRlcik7XG5cbiAgYXBwLmxpc3Rlbig0MDAwLCAoKSA9PiBjb25zb2xlLmxvZygnYmVhdCBtaW5lc3dlZXBlciBhcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQgNDAwMCcpKTtcbn1cblxubWFpbigpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=