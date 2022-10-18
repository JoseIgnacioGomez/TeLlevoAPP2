"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_olvide_olvide_module_ts"],{

/***/ 9670:
/*!*************************************************!*\
  !*** ./src/app/olvide/olvide-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidePageRoutingModule": () => (/* binding */ OlvidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _olvide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvide.page */ 7090);




const routes = [
    {
        path: '',
        component: _olvide_page__WEBPACK_IMPORTED_MODULE_0__.OlvidePage
    }
];
let OlvidePageRoutingModule = class OlvidePageRoutingModule {
};
OlvidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OlvidePageRoutingModule);



/***/ }),

/***/ 1816:
/*!*****************************************!*\
  !*** ./src/app/olvide/olvide.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidePageModule": () => (/* binding */ OlvidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _olvide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvide-routing.module */ 9670);
/* harmony import */ var _olvide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvide.page */ 7090);







let OlvidePageModule = class OlvidePageModule {
};
OlvidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _olvide_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlvidePageRoutingModule
        ],
        declarations: [_olvide_page__WEBPACK_IMPORTED_MODULE_1__.OlvidePage]
    })
], OlvidePageModule);



/***/ }),

/***/ 7090:
/*!***************************************!*\
  !*** ./src/app/olvide/olvide.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidePage": () => (/* binding */ OlvidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _olvide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvide.page.html?ngResource */ 7260);
/* harmony import */ var _olvide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvide.page.scss?ngResource */ 8978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let OlvidePage = class OlvidePage {
    constructor() { }
    ngOnInit() {
    }
};
OlvidePage.ctorParameters = () => [];
OlvidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-olvide',
        template: _olvide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_olvide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OlvidePage);



/***/ }),

/***/ 8978:
/*!****************************************************!*\
  !*** ./src/app/olvide/olvide.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbHZpZGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7260:
/*!****************************************************!*\
  !*** ./src/app/olvide/olvide.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>olvide</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_olvide_olvide_module_ts.js.map