"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_organizar_organizar_module_ts"],{

/***/ 9126:
/*!*******************************************************!*\
  !*** ./src/app/organizar/organizar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizarPageRoutingModule": () => (/* binding */ OrganizarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _organizar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organizar.page */ 4013);




const routes = [
    {
        path: '',
        component: _organizar_page__WEBPACK_IMPORTED_MODULE_0__.OrganizarPage
    }
];
let OrganizarPageRoutingModule = class OrganizarPageRoutingModule {
};
OrganizarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrganizarPageRoutingModule);



/***/ }),

/***/ 7543:
/*!***********************************************!*\
  !*** ./src/app/organizar/organizar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizarPageModule": () => (/* binding */ OrganizarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _organizar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organizar-routing.module */ 9126);
/* harmony import */ var _organizar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizar.page */ 4013);







let OrganizarPageModule = class OrganizarPageModule {
};
OrganizarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _organizar_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganizarPageRoutingModule
        ],
        declarations: [_organizar_page__WEBPACK_IMPORTED_MODULE_1__.OrganizarPage]
    })
], OrganizarPageModule);



/***/ }),

/***/ 4013:
/*!*********************************************!*\
  !*** ./src/app/organizar/organizar.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizarPage": () => (/* binding */ OrganizarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _organizar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organizar.page.html?ngResource */ 6107);
/* harmony import */ var _organizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizar.page.scss?ngResource */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let OrganizarPage = class OrganizarPage {
    constructor(toastController, router) {
        this.toastController = toastController;
        this.router = router;
        this.usuario = {
            asientos: "",
            destino: "",
            hora_salida: "",
            patente: "",
            numero: ""
        };
    }
    ingresar() {
        var infoJson = JSON.stringify(this.usuario);
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: 'usuario', value: infoJson });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: 'logeado', value: 'ok' });
        console.log('se guardaron datos del usuario');
        this.router.navigate(['/buscar-viaje']);
    }
    ngOnInit() {
    }
};
OrganizarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
OrganizarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-organizar',
        template: _organizar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_organizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrganizarPage);



/***/ }),

/***/ 9346:
/*!**********************************************************!*\
  !*** ./src/app/organizar/organizar.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  padding-left: 45px;\n  width: 80%;\n  height: 60%;\n}\n\nion-item {\n  margin-left: 9px;\n  margin-right: 9px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJvcmdhbml6YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 6107:
/*!**********************************************************!*\
  !*** ./src/app/organizar/organizar.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n        <ion-title>Crear viaje</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Asientos Disponibles</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"usuario.asientos\" placeholder=\"N° de asientos disponibles\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Lugar de Destino</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"usuario.destino\" placeholder=\"Destino\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Hora de Salida</ion-label>\r\n      <ion-input type=\"time\" [(ngModel)]=\"usuario.hora_salida\" placeholder=\"Salida\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Patente</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"usuario.patente\"placeholder=\"Patente del automóvil\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Número de Celular</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"usuario.numero\" placeholder=\"Contacto\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-button (click)=\"ingresar()\" expand=\"block\" >Crear</ion-button>\r\n    </ion-item>\r\n\r\n</ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_organizar_organizar_module_ts.js.map