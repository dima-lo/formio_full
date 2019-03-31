(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-submission-submission-module"],{

/***/ "./src/app/form/submission/SubmissionResourceConfig.ts":
/*!*************************************************************!*\
  !*** ./src/app/form/submission/SubmissionResourceConfig.ts ***!
  \*************************************************************/
/*! exports provided: SubmissionResourceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionResourceConfig", function() { return SubmissionResourceConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




var SubmissionResourceConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionResourceConfig, _super);
    function SubmissionResourceConfig(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    Object.defineProperty(SubmissionResourceConfig.prototype, "name", {
        get: function () {
            return this.config.formName;
        },
        set: function (name) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubmissionResourceConfig.prototype, "form", {
        get: function () {
            return this.config.formPath;
        },
        set: function (form) { },
        enumerable: true,
        configurable: true
    });
    SubmissionResourceConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], SubmissionResourceConfig);
    return SubmissionResourceConfig;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"]));



/***/ }),

/***/ "./src/app/form/submission/SubmissionService.ts":
/*!******************************************************!*\
  !*** ./src/app/form/submission/SubmissionService.ts ***!
  \******************************************************/
/*! exports provided: SubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionService", function() { return SubmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");





var SubmissionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionService, _super);
    function SubmissionService(appConfig, config, loader, resourcesService) {
        var _this = _super.call(this, appConfig, config, loader, resourcesService) || this;
        _this.appConfig = appConfig;
        _this.config = config;
        _this.loader = loader;
        _this.resourcesService = resourcesService;
        _this.onResource = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    SubmissionService.prototype.setContext = function (route) {
        var _this = this;
        if (this.appConfig.currentForm) {
            _super.prototype.init.call(this);
            return _super.prototype.setContext.call(this, route);
        }
        route.params.subscribe(function (params) {
            _this.appConfig.loadForm(true).then(function () {
                _super.prototype.init.call(_this);
                _super.prototype.setContext.call(_this, route);
            });
        });
    };
    SubmissionService.prototype.save = function (resource) {
        var _this = this;
        return _super.prototype.save.call(this, this.appConfig.submitAlter(resource)).then(function (submission) {
            _this.appConfig.parent.send({ formSubmission: submission });
        });
    };
    SubmissionService.prototype.loadResource = function (route) {
        var _this = this;
        this.resourceLoaded = new Promise(function (resolve) {
            route.params.subscribe(function (params) {
                _this.appConfig.loadForm(true).then(function () {
                    _super.prototype.init.call(_this);
                    _super.prototype.loadResource.call(_this, route).then(function (resource) {
                        _this.onResource.emit(resource);
                        resolve(resource);
                    });
                });
            });
        });
    };
    SubmissionService.prototype.init = function () { };
    SubmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"],
            angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResources"]])
    ], SubmissionService);
    return SubmissionService;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceService"]));



/***/ }),

/***/ "./src/app/form/submission/index/index.component.html":
/*!************************************************************!*\
  !*** ./src/app/form/submission/index/index.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<formio-grid\n  [src]=\"gridSrc\"\n  [query]=\"gridQuery\"\n  [onForm]=\"service.formLoaded\"\n  (rowSelect)=\"onSelect($event)\"\n  (error)=\"service.onError($event)\"\n  (createItem)=\"onCreateItem()\"\n  createText=\"\"\n></formio-grid>\n"

/***/ }),

/***/ "./src/app/form/submission/index/index.component.scss":
/*!************************************************************!*\
  !*** ./src/app/form/submission/index/index.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vc3VibWlzc2lvbi9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form/submission/index/index.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/form/submission/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: SubmissionIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionIndexComponent", function() { return SubmissionIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");



var SubmissionIndexComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionIndexComponent, _super);
    function SubmissionIndexComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/form/submission/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/form/submission/index/index.component.scss")]
        })
    ], SubmissionIndexComponent);
    return SubmissionIndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/form/submission/resource/resource.component.html":
/*!******************************************************************!*\
  !*** ./src/app/form/submission/resource/resource.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"downloadUrl\" [href]=\"downloadUrl\" target=\"_blank\" class=\"pull-right\"><img src=\"assets/pdf.png\" style=\"height: 2em;\" /></a>\n<ul class=\"nav nav-tabs mb-2\">\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">View</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.edit\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.delete\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/form/submission/resource/resource.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/form/submission/resource/resource.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vc3VibWlzc2lvbi9yZXNvdXJjZS9yZXNvdXJjZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form/submission/resource/resource.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/form/submission/resource/resource.component.ts ***!
  \****************************************************************/
/*! exports provided: SubmissionResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionResourceComponent", function() { return SubmissionResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");



var SubmissionResourceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionResourceComponent, _super);
    function SubmissionResourceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionResourceComponent.prototype.getDownloadPDF = function () {
        var _this = this;
        this.service.onResource.subscribe(function () {
            _this.service.formio.getDownloadUrl().then(function (url) {
                _this.downloadUrl = url;
            });
        });
    };
    SubmissionResourceComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.getDownloadPDF();
    };
    SubmissionResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/form/submission/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.scss */ "./src/app/form/submission/resource/resource.component.scss")]
        })
    ], SubmissionResourceComponent);
    return SubmissionResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/form/submission/submission.module.ts":
/*!******************************************************!*\
  !*** ./src/app/form/submission/submission.module.ts ***!
  \******************************************************/
/*! exports provided: SubmissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionModule", function() { return SubmissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _SubmissionService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmissionService */ "./src/app/form/submission/SubmissionService.ts");
/* harmony import */ var _SubmissionResourceConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubmissionResourceConfig */ "./src/app/form/submission/SubmissionResourceConfig.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/form/submission/index/index.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/form/submission/resource/resource.component.ts");










var SubmissionModule = /** @class */ (function () {
    function SubmissionModule() {
    }
    SubmissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_8__["SubmissionIndexComponent"], _resource_resource_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionResourceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_4__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceRoutes"])({
                    index: _index_index_component__WEBPACK_IMPORTED_MODULE_8__["SubmissionIndexComponent"],
                    resource: _resource_resource_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionResourceComponent"]
                }))
            ],
            providers: [
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                    useClass: _SubmissionService__WEBPACK_IMPORTED_MODULE_6__["SubmissionService"]
                },
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useClass: _SubmissionResourceConfig__WEBPACK_IMPORTED_MODULE_7__["SubmissionResourceConfig"]
                }
            ]
        })
    ], SubmissionModule);
    return SubmissionModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-submission-submission-module.js.map