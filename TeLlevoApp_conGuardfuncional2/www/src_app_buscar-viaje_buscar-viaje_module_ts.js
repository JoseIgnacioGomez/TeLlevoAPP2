"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_buscar-viaje_buscar-viaje_module_ts"],{

/***/ 161:
/*!*************************************************************!*\
  !*** ./src/app/buscar-viaje/buscar-viaje-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarViajePageRoutingModule": () => (/* binding */ BuscarViajePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _buscar_viaje_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-viaje.page */ 3972);




const routes = [
    {
        path: '',
        component: _buscar_viaje_page__WEBPACK_IMPORTED_MODULE_0__.BuscarViajePage
    }
];
let BuscarViajePageRoutingModule = class BuscarViajePageRoutingModule {
};
BuscarViajePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuscarViajePageRoutingModule);



/***/ }),

/***/ 8355:
/*!*****************************************************!*\
  !*** ./src/app/buscar-viaje/buscar-viaje.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarViajePageModule": () => (/* binding */ BuscarViajePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _buscar_viaje_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-viaje-routing.module */ 161);
/* harmony import */ var _buscar_viaje_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar-viaje.page */ 3972);







let BuscarViajePageModule = class BuscarViajePageModule {
};
BuscarViajePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buscar_viaje_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarViajePageRoutingModule
        ],
        declarations: [_buscar_viaje_page__WEBPACK_IMPORTED_MODULE_1__.BuscarViajePage]
    })
], BuscarViajePageModule);



/***/ }),

/***/ 3972:
/*!***************************************************!*\
  !*** ./src/app/buscar-viaje/buscar-viaje.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarViajePage": () => (/* binding */ BuscarViajePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buscar_viaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-viaje.page.html?ngResource */ 2354);
/* harmony import */ var _buscar_viaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar-viaje.page.scss?ngResource */ 5498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);






let BuscarViajePage = class BuscarViajePage {
    constructor(toastController) {
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    verDatos() {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'usuario' }).then((valor) => {
            var objeto = JSON.parse(valor.value);
            console.log(objeto);
        });
    }
};
BuscarViajePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
BuscarViajePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-buscar-viaje',
        template: _buscar_viaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buscar_viaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuscarViajePage);



/***/ }),

/***/ 5498:
/*!****************************************************************!*\
  !*** ./src/app/buscar-viaje/buscar-viaje.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNjYXItdmlhamUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2354:
/*!****************************************************************!*\
  !*** ./src/app/buscar-viaje/buscar-viaje.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title>Buscar Viaje</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Lugar de Destino</ion-label>\r\n    <ion-input placeholder=\"Destino\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Hora de Salida</ion-label>\r\n    <ion-input placeholder=\"Salida\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Número de Celular</ion-label>\r\n    <ion-input placeholder=\"Contacto\" type=\"number\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-button expand=\"block\" (click)=\"verDatos()\">Buscar Viaje</ion-button>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_buscar-viaje_buscar-viaje_module_ts.js.map