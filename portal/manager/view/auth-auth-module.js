(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: authRoutes, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRoutes", function() { return authRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");






var authRoutes = Object(angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__["FormioAuthRoutes"])({
    auth: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
});
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__["FormioAuth"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth/auth.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/auth/auth.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-primary panel panel-default\">\n  <div class=\"card-header panel-heading\">Login to your account</div>\n  <div class=\"card-body panel-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth/auth.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/auth/auth.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");



var AuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthComponent, _super);
    function AuthComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth/auth.component.scss")]
        })
    ], AuthComponent);
    return AuthComponent;
}(angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__["FormioAuthComponent"]));



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map