"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_josei_Desktop_TeLlevoAPP4_TeLlevoAPP2_TeLlevoApp_conGuardfuncional2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);





 // envia informacion

 // Ventanas emergentes

let LoginPage = class LoginPage {
  constructor(router, toastController) {
    this.router = router;
    this.toastController = toastController;
    this.usuario = {
      email: '',
      password: '',
      nombre: ''
    };
    this.field = ""; //Validar campos vacios
  }

  ngOnInit() {} // Ingresar


  ingresar() {
    // Le asigno un nombre temporal que será lo que esté antes del @ del correo
    var nombreTem = this.usuario.email.split("@");
    this.usuario.nombre = nombreTem[0];

    if (this.usuario.email == '' || this.usuario.password == '') {
      this.presentToast('Ingrese todos los datos');
      document.getElementById("mover").classList.add("animateheadShake");
    } else if (this.validateEmail(this.usuario.email) == false) {
      this.presentToast('Ingrese un correo valido');
      document.getElementById("mover").classList.add("animateheadShake");
    } else {
      let navigationExtras = {
        state: {
          usuario: this.usuario // asignar el objeto usuario a la variable usuario

        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }
  } //  Recuperar contraseña


  Olvidar() {
    this.router.navigate(['/register']);
  } // Validar el correo tengo @ y .


  validateEmail(email) {
    var re = /\S+@\S+.\S+/;
    return re.test(email);
  } // Present Toast


  presentToast(message, duration) {
    var _this = this;

    return (0,C_Users_josei_Desktop_TeLlevoAPP4_TeLlevoAPP2_TeLlevoApp_conGuardfuncional2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: message,
        duration: duration ? duration : 2000
      });
      toast.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100vh;\n}\n\nion-footer {\n  padding-top: 15%;\n}\n\nimg {\n  padding-top: 0%;\n  height: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUdKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6IDE1JTtcclxufVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/icon/DuocPNG.png\" alt=\"\">  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  \r\n    \r\n        <ion-item >\r\n          <ion-label position=\"floating\">Correo Institucional</ion-label>\r\n          <ion-input type=\"email\" [(ngModel)]=\"usuario.email\" minlength=\"3\" maxlength=\"30\"> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item >\r\n          <ion-label position=\"floating\">Contraseña</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.password\" minlength=\"4\" maxlength=\"16\"> </ion-input>\r\n        </ion-item>\r\n    \r\n      \r\n        <ion-footer>\r\n          <ion-item>\r\n            <ion-col>\r\n              <ion-button (click)=\"ingresar()\" size=\"full\">Iniciar Sesión</ion-button>\r\n            </ion-col>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-col>\r\n              <ion-button (click)=\"ingresar()\" [routerLink]=\"['/olvide']\" size=\"full\">¿Olvidaste tu contraseña?</ion-button>\r\n            </ion-col>\r\n          </ion-item>\r\n          </ion-footer>\r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map