(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_naslovna_naslovna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/naslovna/naslovna.component */ "./src/app/components/naslovna/naslovna.component.ts");







const routes = [
    { path: 'registracija', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'prijava', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _components_naslovna_naslovna_component__WEBPACK_IMPORTED_MODULE_4__["NaslovnaComponent"], pathMatch: "full" },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'cataleya';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["role", "main", 1, "flex-shrink-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.service */ "./src/app/components/navbar/navbar.service.ts");
/* harmony import */ var _components_footer_footer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.service */ "./src/app/components/footer/footer.service.ts");
/* harmony import */ var _components_naslovna_naslovna_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/naslovna/naslovna.component */ "./src/app/components/naslovna/naslovna.component.ts");
/* harmony import */ var _components_zaposlenici_zaposlenici_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/zaposlenici/zaposlenici.component */ "./src/app/components/zaposlenici/zaposlenici.component.ts");
/* harmony import */ var _components_usluge_usluge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/usluge/usluge.component */ "./src/app/components/usluge/usluge.component.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/components/booking/booking.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"], _components_footer_footer_service__WEBPACK_IMPORTED_MODULE_9__["FooterService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _components_naslovna_naslovna_component__WEBPACK_IMPORTED_MODULE_10__["NaslovnaComponent"],
        _components_zaposlenici_zaposlenici_component__WEBPACK_IMPORTED_MODULE_11__["ZaposleniciComponent"],
        _components_usluge_usluge_component__WEBPACK_IMPORTED_MODULE_12__["UslugeComponent"],
        _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _components_naslovna_naslovna_component__WEBPACK_IMPORTED_MODULE_10__["NaslovnaComponent"],
                    _components_zaposlenici_zaposlenici_component__WEBPACK_IMPORTED_MODULE_11__["ZaposleniciComponent"],
                    _components_usluge_usluge_component__WEBPACK_IMPORTED_MODULE_12__["UslugeComponent"],
                    _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"], _components_footer_footer_service__WEBPACK_IMPORTED_MODULE_9__["FooterService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/booking/booking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/booking/booking.component.ts ***!
  \*********************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BookingComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookingComponent.ɵfac = function BookingComponent_Factory(t) { return new (t || BookingComponent)(); };
BookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingComponent, selectors: [["app-booking"]], decls: 79, vars: 0, consts: [["id", "booking", 1, "section"], [1, "section-center"], [1, "container"], [1, "row"], [1, "booking-form"], [1, "booking-bg"], [1, "form-header", "pt-5", "text-center"], [1, "pt-5"], [1, "form-group"], [1, "form-label"], ["type", "date", "required", "", 1, "form-control"], [1, "col-md-6"], ["required", "", "type", "time", 1, "form-control"], ["required", "", 1, "form-control"], ["value", "", "selected", "", "hidden", ""], [1, "select-arrow"], [1, "form-btn"], [1, "submit-btn", "btn"], [1, "featurette-divider"]], template: function BookingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rezervirajte svoj termin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datum rezervacije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Po\u010Detno vrijeme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Zavr\u0161no vrijeme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Usluga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Odaberite uslugu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0161i\u0161anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "pranje+\u0161i\u0161anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0161i\u0161anje+feniranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "pranje+\u0161i\u0161anje+feniranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "bojanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "pramenovi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "balayage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "minival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "keratin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "mezoterapija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Olaplex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "PRP tretman za \u0107elavost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "frizura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Zaposlenica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Odaberite zaposlenicu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "svejedno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Kristina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Bela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ivana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PROVJERITE DOSTUPNOST TERMINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", 18);
    } }, styles: [".section[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]   .section-center[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n#booking[_ngcontent-%COMP%] {\r\n\tfont-family: \"ElMessiri-SemiBold\";\r\n    background: rgba(248, 215, 183, 0.993); \r\n}\r\n\r\n.featurette-divider[_ngcontent-%COMP%] {\r\n    margin: 3rem 0; \r\n  }\r\n\r\n.booking-form[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tmax-width: 912px;\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n\tbackground: #fff;\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .booking-bg[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 25px;\r\n\ttop: -25px;\r\n\tbottom: -25px;\r\n\twidth: 400px;\r\n\tbackground-image: url('booking.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tpadding: 25px;\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);\r\n\toverflow: hidden;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .booking-bg[_ngcontent-%COMP%]::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\ttop: 0;\r\n\tbackground: rgba(182, 149, 115, 0.78);\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] {\r\n\tmargin-left: 425px;\r\n\tpadding: 30px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 30px;\r\n\tmargin-top: 60px;\r\n\tposition: relative;\r\n\tz-index: 20;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-family: \"ElMessiri-SemiBold\";\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 15px;\r\n\tfont-weight: 900;\r\n\tcolor: #fff;\r\n\tfont-size: 42px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n\tbackground-color: #fff;\r\n\theight: 45px;\r\n\tpadding: 0px 15px;\r\n\tcolor: #151515;\r\n\tborder: 1px solid #e5e5e5;\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\tbox-shadow: none;\r\n\tborder-radius: 40px;\r\n\ttransition: 0.2s all;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\r\n\tcolor: #e5e5e5;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n\tbackground: #f8f8f8;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   input[type=\"date\"].form-control[_ngcontent-%COMP%]:invalid {\r\n\tcolor: #e5e5e5;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]:invalid {\r\n\tcolor: #e5e5e5;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n\tcolor: #151515;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] + .select-arrow[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 3px;\r\n\tbottom: 5px;\r\n\twidth: 32px;\r\n\tline-height: 32px;\r\n\theight: 32px;\r\n\ttext-align: center;\r\n\tpointer-events: none;\r\n\tcolor: #e5e5e5;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] + .select-arrow[_ngcontent-%COMP%]:after {\r\n\tcontent: '\\279C';\r\n\tdisplay: block;\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\r\n\tcolor: #ffba9a;\r\n\ttext-transform: uppercase;\r\n\tline-height: 24px;\r\n\theight: 24px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tmargin-left: 20px;\r\n}\r\n\r\n.booking-form[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%] {\r\n\tmargin-top: 30px;\r\n}\r\n\r\n@keyframes hvr-wobble-horizontal {\r\n    16.65% {\r\n      transform: translateX(8px); }\r\n    33.3% {\r\n      transform: translateX(-6px); }\r\n    49.95% {\r\n      transform: translateX(4px); }\r\n    66.6% {\r\n      transform: translateX(-2px); }\r\n    83.25% {\r\n      transform: translateX(1px); }\r\n    100% {\r\n      transform: translateX(0); } }\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    display: block;\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n\tbackground-color: #ffba9a;\r\n\tfont-weight: 700;\r\n\tfont-size: 18px;\r\n\tborder: none;\r\n\tborder-radius: 40px;\r\n\theight: 55px;\r\n\r\n\r\n    letter-spacing: 2px;\r\n    border: none;\r\n    margin-right: 19px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    font-family: \"Montserrat-SemiBold\";\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0); }\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n      animation-name: hvr-wobble-horizontal;\r\n      animation-duration: 1s;\r\n      animation-timing-function: ease-in-out;\r\n      animation-iteration-count: 1; \r\n    color: #fff;}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\t.booking-form[_ngcontent-%COMP%]   .booking-bg[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\ttop: -15px;\r\n\t\twidth: 95%;\r\n\t\tmargin: auto;\r\n\t}\r\n\t.booking-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] {\r\n\t\tmargin-left: 0px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLE9BQU87Q0FDUCxRQUFRO0NBRVIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsaUNBQWlDO0lBQzlCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQ0FBc0M7RUFDeEQ7O0FBRUY7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUVsQixnREFBZ0Q7QUFDakQ7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFVBQVU7Q0FDVixhQUFhO0NBQ2IsWUFBWTtDQUNaLG9DQUEyRDtDQUMzRCxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixrQkFBa0I7Q0FFbEIsZ0RBQWdEO0NBQ2hELGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLFFBQVE7Q0FDUixTQUFTO0NBQ1QsTUFBTTtDQUNOLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FFaEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUVuQixvQkFBb0I7QUFDckI7O0FBVUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUVkLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFxQkU7SUFDRTtNQUVFLDBCQUEwQixFQUFFO0lBQzlCO01BRUUsMkJBQTJCLEVBQUU7SUFDL0I7TUFFRSwwQkFBMEIsRUFBRTtJQUM5QjtNQUVFLDJCQUEyQixFQUFFO0lBQy9CO01BRUUsMEJBQTBCLEVBQUU7SUFDOUI7TUFFRSx3QkFBd0IsRUFBRSxFQUFFOztBQUNoQztJQUNFLGNBQWM7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7OztJQUdULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFFbEMseUNBQXlDO0lBQ3pDLG9DQUFvQyxFQUFFOztBQUN0QztNQUVFLHFDQUFxQztNQUVyQyxzQkFBc0I7TUFFdEIsc0NBQXNDO01BRXRDLDRCQUE0QjtJQUM5QixXQUFXLENBQUM7O0FBRWhCO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0NBQ2I7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24tY2VudGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNib29raW5nIHtcclxuXHRmb250LWZhbWlseTogXCJFbE1lc3NpcmktU2VtaUJvbGRcIjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyMTUsIDE4MywgMC45OTMpOyBcclxufVxyXG5cclxuLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDNyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbiAgfVxyXG5cclxuLmJvb2tpbmctZm9ybSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1heC13aWR0aDogOTEycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuYm9va2luZy1iZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDI1cHg7XHJcblx0dG9wOiAtMjVweDtcclxuXHRib3R0b206IC0yNXB4O1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9va2luZy5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuYm9va2luZy1iZzo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0dG9wOiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTgyLCAxNDksIDExNSwgMC43OCk7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0+Zm9ybSB7XHJcblx0bWFyZ2luLWxlZnQ6IDQyNXB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0taGVhZGVyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdG1hcmdpbi10b3A6IDYwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWhlYWRlciBoMiB7XHJcblx0Zm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA5MDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWhlYWRlciBwIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdHBhZGRpbmc6IDBweCAxNXB4O1xyXG5cdGNvbG9yOiAjMTUxNTE1O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG5cdHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjZTVlNWU1O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogI2U1ZTVlNTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0YmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XHJcblx0Y29sb3I6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XHJcblx0Y29sb3I6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCBvcHRpb24ge1xyXG5cdGNvbG9yOiAjMTUxNTE1O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wrLnNlbGVjdC1hcnJvdyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAzcHg7XHJcblx0Ym90dG9tOiA1cHg7XHJcblx0d2lkdGg6IDMycHg7XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRjb2xvcjogI2U1ZTVlNTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCsuc2VsZWN0LWFycm93OmFmdGVyIHtcclxuXHRjb250ZW50OiAnXFwyNzlDJztcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0tbGFiZWwge1xyXG5cdGNvbG9yOiAjZmZiYTlhO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWJ0biB7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGh2ci13b2JibGUtaG9yaXpvbnRhbCB7XHJcbiAgICAxNi42NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTsgfVxyXG4gICAgMzMuMyUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpOyB9XHJcbiAgICA0OS45NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxyXG4gICAgNjYuNiUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XHJcbiAgICA4My4yNSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTsgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxyXG4gIEBrZXlmcmFtZXMgaHZyLXdvYmJsZS1ob3Jpem9udGFsIHtcclxuICAgIDE2LjY1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XHJcbiAgICAzMy4zJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7IH1cclxuICAgIDQ5Ljk1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgICA2Ni42JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cclxuICAgIDgzLjI1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmJhOWE7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApOyB9XHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLWhvcml6b250YWw7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLWhvcml6b250YWw7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgXHJcbiAgICBjb2xvcjogI2ZmZjt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0LmJvb2tpbmctZm9ybSAuYm9va2luZy1iZyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR0b3A6IC0xNXB4O1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHR9XHJcblx0LmJvb2tpbmctZm9ybT5mb3JtIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking',
                templateUrl: './booking.component.html',
                styleUrls: ['./booking.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _footer_footer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.service */ "./src/app/components/footer/footer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dru\u017Eimo se i na ostalim mre\u017Eama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kontaktirajte nas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vukovarska 23, Osijek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "031/202-322");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "info@bellastudio.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Radno vrijeme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ponedjeljak - 08:00-19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Utorak - 08:00-19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Srijeda - 08:00-19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u010Cetvrtak - 08:00-19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Petak - 08:00-19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Subota - 08:00-18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nedjelja - Zatvoreno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Copyright \u00A9 Bella");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(footer) {
        this.footer = footer;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_footer_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 1, consts: [["class", "footer mt-auto pt-3", 4, "ngIf"], [1, "footer", "mt-auto", "pt-3"], [1, "container", "py-5"], [1, "text-center"], [1, "row", "justify-content-center"], [1, "row-lg", "align-items-center"], [1, "d-inline-block"], ["href", "https://www.instagram.com/"], ["id", "ig", 1, "fa", "fa-instagram", "fa-3x"], [1, "px-2"], [1, "row-lg", "d-inline-block"], ["href", "https://www.facebook.com"], ["id", "fb", 1, "fa", "fa-facebook", "fa-3x"], [1, "featurette-divider"], [1, "col-lg-6", "text-center"], [1, "text-center", "pt-5"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 46, 0, "footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#ig[_ngcontent-%COMP%]:hover, #fb[_ngcontent-%COMP%]:hover{\r\n    color: gray;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgba(248, 209, 169, 0.993);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n    background : white;\r\n    color: rgba(248, 209, 169, 0.993);\r\n    font-family: \"ElMessiri-SemiBold\";\r\n}\r\n\r\n.featurette-divider[_ngcontent-%COMP%] {\r\n    margin: 5rem 0; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQ0FBc0M7RUFDeEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpZzpob3ZlciwgI2ZiOmhvdmVye1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogcmdiYSgyNDgsIDIwOSwgMTY5LCAwLjk5Myk7XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQgOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI0OCwgMjA5LCAxNjksIDAuOTkzKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG59XHJcblxyXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogNXJlbSAwOyAvKiBTcGFjZSBvdXQgdGhlIEJvb3RzdHJhcCA8aHI+IG1vcmUgKi9cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _footer_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/footer/footer.service.ts ***!
  \*****************************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterService {
    constructor() { this.visible = true; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
}
FooterService.ɵfac = function FooterService_Factory(t) { return new (t || FooterService)(); };
FooterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FooterService, factory: FooterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.service */ "./src/app/components/navbar/navbar.service.ts");
/* harmony import */ var _footer_footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.service */ "./src/app/components/footer/footer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class LoginComponent {
    constructor(nav, footer) {
        this.nav = nav;
        this.footer = footer;
    }
    ngOnInit() {
        this.nav.hide();
        this.footer.hide();
    }
    ngOnDestroy() {
        this.nav.show();
        this.footer.show();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_footer_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 0, consts: [[1, "wrapper"], ["href", "", 1, "fixed-top", "pl-3", "pt-2"], ["id", "nazad", 1, "fa", "fa-arrow-circle-left", "fa-3x"], [1, "inner"], [1, "image-holder"], ["src", "../../../assets/images/registration-form-5.jpg", "alt", ""], ["action", ""], [1, "form-holder"], ["type", "text", "placeholder", "e-mail", "required", "", 1, "form-control"], ["type", "password", "placeholder", "lozinka", "required", "", 1, "form-control", 2, "font-size", "15px"], [1, "form-login", "pt-1", "ml-auto"], [1, "ml-auto"], [1, "py-3"], [1, "pl-5", "ml-5"], ["routerLink", "/registracija"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Prijava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Potvrdi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nemate ra\u010Dun? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Registrirajte se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@font-face {\r\n    font-family: \"ElMessiri-SemiBold\";\r\n    src: url('ElMessiri-SemiBold.ttf'); }\r\n  @font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url('Montserrat-Regular.ttf'); }\r\n  @font-face {\r\n    font-family: \"Montserrat-SemiBold\";\r\n    src: url('Montserrat-SemiBold.ttf'); }\r\n  *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat-Regular\";\r\n    color: #999;\r\n    font-size: 12px;\r\n    margin: 0; }\r\n  p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n    margin: 0; }\r\n  img[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n  ul[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    margin-bottom: 0; }\r\n  a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #ffba9a;\r\n    transition: all 0.3s ease; }\r\n  a[_ngcontent-%COMP%]:hover {\r\n      text-decoration: none;\r\n      color: #f08f62; }\r\n  [_ngcontent-%COMP%]:focus {\r\n    outline: none; }\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url('bg-registration-form-4.jpg') no-repeat;\r\n    background-size: cover; }\r\n  .inner[_ngcontent-%COMP%] {\r\n    max-width: 850px;\r\n    margin: auto;\r\n    background: #fff;\r\n    display: flex;\r\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); }\r\n  .image-holder[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding-right: 15px; }\r\n  form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding-top: 77px;\r\n    padding-right: 60px;\r\n    padding-left: 15px; }\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-family: \"ElMessiri-SemiBold\";\r\n    text-align: center;\r\n    margin-bottom: 27px;\r\n    color: #ffba9a; }\r\n  .form-holder[_ngcontent-%COMP%] {\r\n    padding-left: 24px;\r\n    position: relative; }\r\n  .form-holder[_ngcontent-%COMP%]:before {\r\n      box-sizing: border-box;\r\n      content: \"\";\r\n      width: 10px;\r\n      height: 10px;\r\n      border-radius: 50%;\r\n      border: 2px solid #ffba9a;\r\n      position: absolute;\r\n      left: 1px;\r\n      top: 50%;\r\n      transform: translateY(-50%); }\r\n  .form-holder.active[_ngcontent-%COMP%]:before {\r\n      border: 2px solid transparent;\r\n      background: #ffba9a; }\r\n  .form-control[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 23.5px;\r\n    height: 47px;\r\n    padding: 0 24px;\r\n    color: #808080;\r\n    font-size: 13px;\r\n    border: none;\r\n    background: #f7f7f7;\r\n    margin-bottom: 25px; }\r\n  .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]::-moz-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]:-moz-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  @keyframes hvr-wobble-horizontal {\r\n    16.65% {\r\n      transform: translateX(8px); }\r\n    33.3% {\r\n      transform: translateX(-6px); }\r\n    49.95% {\r\n      transform: translateX(4px); }\r\n    66.6% {\r\n      transform: translateX(-2px); }\r\n    83.25% {\r\n      transform: translateX(1px); }\r\n    100% {\r\n      transform: translateX(0); } }\r\n  button[_ngcontent-%COMP%] {\r\n    letter-spacing: 2px;\r\n    border: none;\r\n    width: 133px;\r\n    height: 47px;\r\n    margin-right: 19px;\r\n    border-radius: 23.5px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    background: #ffba9a;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-family: \"Montserrat-SemiBold\";\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0); }\r\n  button[_ngcontent-%COMP%]:hover {\r\n      animation-name: hvr-wobble-horizontal;\r\n      animation-duration: 1s;\r\n      animation-timing-function: ease-in-out;\r\n      animation-iteration-count: 1; }\r\n  .checkbox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 19px;\r\n    margin-bottom: 37px;\r\n    margin-left: 26px; }\r\n  .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      color: #999; }\r\n  .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer; }\r\n  .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n      display: block; }\r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 10px;\r\n    width: 10px;\r\n    border-radius: 50%;\r\n    border: 1px solid #e7e7e7; }\r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n      content: \"\";\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 4px;\r\n      height: 4px;\r\n      border-radius: 50%;\r\n      background: #ffba9a;\r\n      position: absolute;\r\n      display: none; }\r\n  .form-login[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 23px; }\r\n  @media (max-width: 767px) {\r\n    .inner[_ngcontent-%COMP%] {\r\n      display: block; }\r\n  \r\n    .image-holder[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      padding-right: 0; }\r\n  \r\n    form[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      padding: 0px 15px 70px; }\r\n  \r\n    .wrapper[_ngcontent-%COMP%] {\r\n      background: none; } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtDQUFtRSxFQUFFO0VBQ3ZFO0lBQ0UsaUNBQWlDO0lBQ2pDLGtDQUFtRSxFQUFFO0VBQ3ZFO0lBQ0Usa0NBQWtDO0lBQ2xDLG1DQUFvRSxFQUFFO0VBQ3hFO0lBR0Usc0JBQXNCLEVBQUU7RUFFMUI7SUFDRSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTLEVBQUU7RUFFYjtJQUNFLFNBQVMsRUFBRTtFQUViO0lBQ0UsZUFBZSxFQUFFO0VBRW5CO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0VBRXBCO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUIsRUFBRTtFQUMzQjtNQUNFLHFCQUFxQjtNQUNyQixjQUFjLEVBQUU7RUFFcEI7SUFDRSxhQUFhLEVBQUU7RUFFakI7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1REFBOEU7SUFDOUUsc0JBQXNCLEVBQUU7RUFFMUI7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RCxvREFBb0Q7SUFDcEQsbURBQW1EO0lBQ25ELGtEQUFrRCxFQUFFO0VBRXREO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQixFQUFFO0VBRXZCO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUU7RUFFdEI7SUFDRSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFFO0VBRWxCO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFFO0VBQ3BCO01BR0Usc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1IsMkJBQTJCLEVBQUU7RUFDL0I7TUFDRSw2QkFBNkI7TUFDN0IsbUJBQW1CLEVBQUU7RUFFekI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBRTtFQUNyQjtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFFO0VBQ3JDO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsaUNBQWlDLEVBQUU7RUFDckM7TUFDRSxlQUFlO01BQ2YsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixpQ0FBaUMsRUFBRTtFQUNyQztNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFFO0VBcUJ2QztJQUNFO01BRUUsMEJBQTBCLEVBQUU7SUFDOUI7TUFFRSwyQkFBMkIsRUFBRTtJQUMvQjtNQUVFLDBCQUEwQixFQUFFO0lBQzlCO01BRUUsMkJBQTJCLEVBQUU7SUFDL0I7TUFFRSwwQkFBMEIsRUFBRTtJQUM5QjtNQUVFLHdCQUF3QixFQUFFLEVBQUU7RUFDaEM7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFFbEMseUNBQXlDO0lBQ3pDLG9DQUFvQyxFQUFFO0VBQ3RDO01BRUUscUNBQXFDO01BRXJDLHNCQUFzQjtNQUV0QixzQ0FBc0M7TUFFdEMsNEJBQTRCLEVBQUU7RUFFbEM7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBRTtFQUNuQjtNQUNFLGVBQWU7TUFDZixXQUFXLEVBQUU7RUFDZjtNQUNFLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZUFBZSxFQUFFO0VBQ25CO01BQ0UsY0FBYyxFQUFFO0VBRXBCO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUU7RUFDM0I7TUFDRSxXQUFXO01BQ1gsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhLEVBQUU7RUFFbkI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFFO0VBRXJCO0lBQ0U7TUFDRSxjQUFjLEVBQUU7O0lBRWxCO01BQ0UsV0FBVztNQUNYLGdCQUFnQixFQUFFOztJQUVwQjtNQUNFLFdBQVc7TUFDWCxzQkFBc0IsRUFBRTs7SUFFMUI7TUFDRSxnQkFBZ0IsRUFBRSxFQUFFO0VBRXhCLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9lbF9tZXNzaXJpL0VsTWVzc2lyaS1TZW1pQm9sZC50dGZcIik7IH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpOyB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCIpOyB9XHJcbiAgKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwOyB9XHJcbiAgXHJcbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgdWwge1xyXG4gICAgbWFyZ2luOiAwOyB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZiYTlhO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmMDhmNjI7IH1cclxuICBcclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXJlZ2lzdHJhdGlvbi1mb3JtLTQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cclxuICBcclxuICAuaW5uZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XHJcbiAgXHJcbiAgLmltYWdlLWhvbGRlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDsgfVxyXG4gIFxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiA3N3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDsgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxuICAgIGNvbG9yOiAjZmZiYTlhOyB9XHJcbiAgXHJcbiAgLmZvcm0taG9sZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gICAgLmZvcm0taG9sZGVyOmJlZm9yZSB7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmJhOWE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMXB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XHJcbiAgICAuZm9ybS1ob2xkZXIuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZiYTlhOyB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjMuNXB4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxyXG4gICAgLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiOyB9XHJcbiAgICAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7IH1cclxuICAgIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7IH1cclxuICAgIC5mb3JtLWNvbnRyb2w6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiOyB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGh2ci13b2JibGUtaG9yaXpvbnRhbCB7XHJcbiAgICAxNi42NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTsgfVxyXG4gICAgMzMuMyUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpOyB9XHJcbiAgICA0OS45NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxyXG4gICAgNjYuNiUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XHJcbiAgICA4My4yNSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTsgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxyXG4gIEBrZXlmcmFtZXMgaHZyLXdvYmJsZS1ob3Jpem9udGFsIHtcclxuICAgIDE2LjY1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XHJcbiAgICAzMy4zJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7IH1cclxuICAgIDQ5Ljk1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgICA2Ni42JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cclxuICAgIDgzLjI1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTMzcHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMy41cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmJhOWE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7IH1cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtaG9yaXpvbnRhbDtcclxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtaG9yaXpvbnRhbDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyB9XHJcbiAgXHJcbiAgLmNoZWNrYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjZweDsgfVxyXG4gICAgLmNoZWNrYm94IGxhYmVsIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogIzk5OTsgfVxyXG4gICAgLmNoZWNrYm94IGlucHV0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgIC5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgXHJcbiAgLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7IH1cclxuICAgIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmYmE5YTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgLmZvcm0tbG9naW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjNweDsgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmlubmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cclxuICBcclxuICAgIC5pbWFnZS1ob2xkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIFxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTVweCA3MHB4OyB9XHJcbiAgXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IH0gfVxyXG4gIFxyXG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }, { type: _footer_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/naslovna/naslovna.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/naslovna/naslovna.component.ts ***!
  \***********************************************************/
/*! exports provided: NaslovnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaslovnaComponent", function() { return NaslovnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _zaposlenici_zaposlenici_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zaposlenici/zaposlenici.component */ "./src/app/components/zaposlenici/zaposlenici.component.ts");
/* harmony import */ var _usluge_usluge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usluge/usluge.component */ "./src/app/components/usluge/usluge.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking/booking.component */ "./src/app/components/booking/booking.component.ts");





class NaslovnaComponent {
    constructor() { }
    ngOnInit() {
    }
}
NaslovnaComponent.ɵfac = function NaslovnaComponent_Factory(t) { return new (t || NaslovnaComponent)(); };
NaslovnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NaslovnaComponent, selectors: [["app-naslovna"]], decls: 40, vars: 0, consts: [["id", "myCarousel", "data-ride", "carousel", "width", "100%", "height", "100%", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#myCarousel", "data-slide-to", "0", 1, "active"], ["data-target", "#myCarousel", "data-slide-to", "1"], ["data-target", "#myCarousel", "data-slide-to", "2"], ["data-target", "#myCarousel", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/images/slide1.jpg", "width", "100%", "height", "100%", "alt", "", 1, "bd-placeholder-img"], [1, "container"], [1, "carousel-caption", "text-left"], [1, "carousel-item"], ["src", "../../../assets/images/salon.jpeg", "width", "100%", "height", "100%", "alt", "", 1, "bd-placeholder-img"], [1, "carousel-caption"], ["src", "../../../assets/images/slide3.jpg", "width", "100%", "height", "100%", "alt", "", 1, "bd-placeholder-img"], ["src", "../../../assets/images/slide4.jpg", "width", "100%", "height", "100%", "alt", "", 1, "bd-placeholder-img"], [1, "carousel-caption", "text-right", "text-dark"], ["href", "#myCarousel", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#myCarousel", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function NaslovnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ljepota po\u010Dinje onog trenutka kada odlu\u010Di\u0161 biti svoja!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Poklon bon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Razveselite dragu osobu nekim od tretmana iz na\u0161e ponude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-zaposlenici");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-usluge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_zaposlenici_zaposlenici_component__WEBPACK_IMPORTED_MODULE_1__["ZaposleniciComponent"], _usluge_usluge_component__WEBPACK_IMPORTED_MODULE_2__["UslugeComponent"], _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__["BookingComponent"]], styles: ["@font-face {\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  src: url('ElMessiri-SemiBold.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-Regular\";\r\n  src: url('Montserrat-Regular.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-SemiBold\";\r\n  src: url('Montserrat-SemiBold.ttf'); }\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\r\n.bd-placeholder-img[_ngcontent-%COMP%] {\r\n    object-fit:cover;\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n  }\r\n@media (min-width: 768px) {\r\n    .bd-placeholder-img-lg[_ngcontent-%COMP%] {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n  }\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n  }\r\n.carousel-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 90vh;\r\n  }\r\np[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{\r\n    font-family: \"ElMessiri-SemiBold\";\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXNsb3ZuYS9uYXNsb3ZuYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFtRSxFQUFFO0FBQ3ZFO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFtRSxFQUFFO0FBQ3ZFO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFvRSxFQUFFO0FBQ3hFO0VBR0Usc0JBQXNCLEVBQUU7QUFDMUI7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjtFQUNuQjtBQUtBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7RUFDRjtBQUVGLHdCQUF3QjtBQUN4QjtJQUNJLG1CQUFtQjtFQUNyQjtBQUNBLGlFQUFpRTtBQUNqRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDRSxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGlDQUFpQztFQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmFzbG92bmEvbmFzbG92bmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2VsX21lc3NpcmkvRWxNZXNzaXJpLVNlbWlCb2xkLnR0ZlwiKTsgfVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGZcIik7IH1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIik7IH1cclxuKiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbi5iZC1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmQtcGxhY2Vob2xkZXItaW1nLWxnIHtcclxuICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLyogQ2Fyb3VzZWwgYmFzZSBjbGFzcyAqL1xyXG4uY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbiAgLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgYm90dG9tOiAzcmVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXHJcbiAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaXRlbSA+IGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gIH1cclxuICBcclxuICBwLGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaslovnaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-naslovna',
                templateUrl: './naslovna.component.html',
                styleUrls: ['./naslovna.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.service */ "./src/app/components/navbar/navbar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bella");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Naslovna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zaposlenici");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Usluge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Galerija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Registracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-expand-md navbar-light fixed-top", "id", "navv", 4, "ngIf"], ["id", "navv", 1, "navbar", "navbar-expand-md", "navbar-light", "fixed-top"], [1, "container"], ["routerLink", "", 1, "navbar-brand", "mr-5"], ["id", "naziv_salona", 1, "display-4"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-3", "mr-auto"], [1, "nav-item", "active"], ["href", "", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "", 1, "nav-item", "nav-link", "mx-2", 2, "cursor", "pointer"], ["routerLink", "", 1, "nav-link", 2, "cursor", "pointer"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/prijava", 1, "nav-item", "nav-link", "mr-3", 2, "cursor", "pointer"], ["routerLink", "/registracija", 1, "nav-link", 2, "cursor", "pointer"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 36, 0, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@font-face {\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  src: url('ElMessiri-SemiBold.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-Regular\";\r\n  src: url('Montserrat-Regular.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-SemiBold\";\r\n  src: url('Montserrat-SemiBold.ttf'); }\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\r\n.navbar[_ngcontent-%COMP%]{\r\n  height:70px;\r\n  background: white;\r\n  font-size: 18px;\r\n  position: relative;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  font-size: 20px;\r\n}\r\n#naziv_salona[_ngcontent-%COMP%]{\r\n  font-family: 'Dancing Script', cursive, bold;\r\n  \r\n}\r\n#navv[_ngcontent-%COMP%]{\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQW1FLEVBQUU7QUFDdkU7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQW1FLEVBQUU7QUFDdkU7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW9FLEVBQUU7QUFDeEU7RUFHRSxzQkFBc0IsRUFBRTtBQUUxQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvZWxfbWVzc2lyaS9FbE1lc3NpcmktU2VtaUJvbGQudHRmXCIpOyB9XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiKTsgfVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVNlbWlCb2xkLnR0ZlwiKTsgfVxyXG4qIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jbmF6aXZfc2Fsb25he1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlLCBib2xkO1xyXG4gIC8qIGZvbnQtc2l6ZTogNTBweDsgKi9cclxufVxyXG5cclxuI25hdnZ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/navbar/navbar.service.ts ***!
  \*****************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarService {
    constructor() { this.visible = true; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.service */ "./src/app/components/navbar/navbar.service.ts");
/* harmony import */ var _footer_footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.service */ "./src/app/components/footer/footer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class RegisterComponent {
    constructor(nav, footer) {
        this.nav = nav;
        this.footer = footer;
    }
    ngOnInit() {
        this.nav.hide();
        this.footer.hide();
    }
    ngOnDestroy() {
        this.nav.show();
        this.footer.hide();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_footer_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 24, vars: 0, consts: [[1, "wrapper"], ["href", "", 1, "fixed-top", "pl-3", "pt-2"], ["id", "nazad", 1, "fa", "fa-arrow-circle-left", "fa-3x"], [1, "inner"], [1, "image-holder"], ["src", "../../../assets/images/registration-form-5.jpg", "alt", ""], ["action", ""], [1, "form-holder", "active"], ["type", "text", "placeholder", "korisni\u010Dko ime", "required", "", 1, "form-control"], [1, "form-holder"], ["type", "text", "placeholder", "e-mail", "required", "", 1, "form-control"], ["type", "password", "placeholder", "lozinka", "required", "", 1, "form-control", 2, "font-size", "15px"], [1, "form-login", "pt-1", "ml-auto", "pl-5"], [1, "ml-auto"], [1, "pl-5", "py-3"], [1, "pl-5", "ml-auto"], ["routerLink", "/prijava"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registracija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Potvrdi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ve\u0107 imate ra\u010Dun? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Prijavite se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@font-face {\r\n    font-family: \"ElMessiri-SemiBold\";\r\n    src: url('ElMessiri-SemiBold.ttf'); }\r\n  @font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url('Montserrat-Regular.ttf'); }\r\n  @font-face {\r\n    font-family: \"Montserrat-SemiBold\";\r\n    src: url('Montserrat-SemiBold.ttf'); }\r\n  *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat-Regular\";\r\n    color: #999;\r\n    font-size: 12px;\r\n    margin: 0; }\r\n  p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n    margin: 0; }\r\n  img[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n  ul[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    margin-bottom: 0; }\r\n  a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #ffba9a;\r\n    transition: all 0.3s ease; }\r\n  a[_ngcontent-%COMP%]:hover {\r\n      text-decoration: none;\r\n      color: #f08f62; }\r\n  [_ngcontent-%COMP%]:focus {\r\n    outline: none; }\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url('bg-registration-form-4.jpg') no-repeat;\r\n    background-size: cover; }\r\n  .inner[_ngcontent-%COMP%] {\r\n    max-width: 850px;\r\n    margin: auto;\r\n    background: #fff;\r\n    display: flex;\r\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); }\r\n  .image-holder[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding-right: 15px; }\r\n  form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding-top: 77px;\r\n    padding-right: 60px;\r\n    padding-left: 15px; }\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-family: \"ElMessiri-SemiBold\";\r\n    text-align: center;\r\n    margin-bottom: 27px;\r\n    color: #ffba9a; }\r\n  .form-holder[_ngcontent-%COMP%] {\r\n    padding-left: 24px;\r\n    position: relative; }\r\n  .form-holder[_ngcontent-%COMP%]:before {\r\n      box-sizing: border-box;\r\n      content: \"\";\r\n      width: 10px;\r\n      height: 10px;\r\n      border-radius: 50%;\r\n      border: 2px solid  #ffba9a; \r\n      position: absolute;\r\n      left: 1px;\r\n      top: 50%;\r\n      transform: translateY(-50%); }\r\n  .form-holder.active[_ngcontent-%COMP%]:before {\r\n      border: 2px solid transparent;\r\n      background: #ffba9a; }\r\n  .form-control[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 23.5px;\r\n    height: 47px;\r\n    padding: 0 24px;\r\n    color: #808080;\r\n    font-size: 13px;\r\n    border: none;\r\n    background: #f7f7f7;\r\n    margin-bottom: 25px; }\r\n  .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]::-moz-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  .form-control[_ngcontent-%COMP%]:-moz-placeholder {\r\n      font-size: 13px;\r\n      color: #808080;\r\n      text-transform: uppercase;\r\n      font-family: \"Montserrat-Regular\"; }\r\n  @keyframes hvr-wobble-horizontal {\r\n    16.65% {\r\n      transform: translateX(8px); }\r\n    33.3% {\r\n      transform: translateX(-6px); }\r\n    49.95% {\r\n      transform: translateX(4px); }\r\n    66.6% {\r\n      transform: translateX(-2px); }\r\n    83.25% {\r\n      transform: translateX(1px); }\r\n    100% {\r\n      transform: translateX(0); } }\r\n  button[_ngcontent-%COMP%] {\r\n    letter-spacing: 2px;\r\n    border: none;\r\n    width: 133px;\r\n    height: 47px;\r\n    margin-right: 19px;\r\n    border-radius: 23.5px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    background: #ffba9a;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-family: \"Montserrat-SemiBold\";\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0); }\r\n  button[_ngcontent-%COMP%]:hover {\r\n      animation-name: hvr-wobble-horizontal;\r\n      animation-duration: 1s;\r\n      animation-timing-function: ease-in-out;\r\n      animation-iteration-count: 1; }\r\n  .checkbox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 19px;\r\n    margin-bottom: 37px;\r\n    margin-left: 26px; }\r\n  .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      color: #999; }\r\n  .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      opacity: 0;\r\n      cursor: pointer; }\r\n  .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n      display: block; }\r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 10px;\r\n    width: 10px;\r\n    border-radius: 50%;\r\n    border: 1px solid #e7e7e7; }\r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n      content: \"\";\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 4px;\r\n      height: 4px;\r\n      border-radius: 50%;\r\n      background: #ffba9a;\r\n      position: absolute;\r\n      display: none; }\r\n  .form-login[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 23px; }\r\n  @media (max-width: 767px) {\r\n    .inner[_ngcontent-%COMP%] {\r\n      display: block; }\r\n  \r\n    .image-holder[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      padding-right: 0; }\r\n  \r\n    form[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      padding: 0px 15px 70px; }\r\n  \r\n    .wrapper[_ngcontent-%COMP%] {\r\n      background: none; } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtDQUFtRSxFQUFFO0VBQ3ZFO0lBQ0UsaUNBQWlDO0lBQ2pDLGtDQUFtRSxFQUFFO0VBQ3ZFO0lBQ0Usa0NBQWtDO0lBQ2xDLG1DQUFvRSxFQUFFO0VBQ3hFO0lBR0Usc0JBQXNCLEVBQUU7RUFFMUI7SUFDRSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTLEVBQUU7RUFFYjtJQUNFLFNBQVMsRUFBRTtFQUViO0lBQ0UsZUFBZSxFQUFFO0VBRW5CO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0VBRXBCO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUIsRUFBRTtFQUMzQjtNQUNFLHFCQUFxQjtNQUNyQixjQUFjLEVBQUU7RUFFcEI7SUFDRSxhQUFhLEVBQUU7RUFFakI7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1REFBOEU7SUFDOUUsc0JBQXNCLEVBQUU7RUFJMUI7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RCxvREFBb0Q7SUFDcEQsbURBQW1EO0lBQ25ELGtEQUFrRCxFQUFFO0VBRXREO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQixFQUFFO0VBRXZCO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUU7RUFFdEI7SUFDRSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFFO0VBRWxCO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFFO0VBQ3BCO01BR0Usc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1IsMkJBQTJCLEVBQUU7RUFDL0I7TUFDRSw2QkFBNkI7TUFDN0IsbUJBQW1CLEVBQUU7RUFFekI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBRTtFQUNyQjtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFFO0VBQ3JDO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsaUNBQWlDLEVBQUU7RUFDckM7TUFDRSxlQUFlO01BQ2YsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixpQ0FBaUMsRUFBRTtFQUNyQztNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGlDQUFpQyxFQUFFO0VBcUJ2QztJQUNFO01BRUUsMEJBQTBCLEVBQUU7SUFDOUI7TUFFRSwyQkFBMkIsRUFBRTtJQUMvQjtNQUVFLDBCQUEwQixFQUFFO0lBQzlCO01BRUUsMkJBQTJCLEVBQUU7SUFDL0I7TUFFRSwwQkFBMEIsRUFBRTtJQUM5QjtNQUVFLHdCQUF3QixFQUFFLEVBQUU7RUFDaEM7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFFbEMseUNBQXlDO0lBQ3pDLG9DQUFvQyxFQUFFO0VBQ3RDO01BRUUscUNBQXFDO01BRXJDLHNCQUFzQjtNQUV0QixzQ0FBc0M7TUFFdEMsNEJBQTRCLEVBQUU7RUFFbEM7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBRTtFQUNuQjtNQUNFLGVBQWU7TUFDZixXQUFXLEVBQUU7RUFDZjtNQUNFLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZUFBZSxFQUFFO0VBQ25CO01BQ0UsY0FBYyxFQUFFO0VBRXBCO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUU7RUFDM0I7TUFDRSxXQUFXO01BQ1gsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhLEVBQUU7RUFFbkI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFFO0VBRXJCO0lBQ0U7TUFDRSxjQUFjLEVBQUU7O0lBRWxCO01BQ0UsV0FBVztNQUNYLGdCQUFnQixFQUFFOztJQUVwQjtNQUNFLFdBQVc7TUFDWCxzQkFBc0IsRUFBRTs7SUFFMUI7TUFDRSxnQkFBZ0IsRUFBRSxFQUFFO0VBRXhCLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9lbF9tZXNzaXJpL0VsTWVzc2lyaS1TZW1pQm9sZC50dGZcIik7IH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpOyB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCIpOyB9XHJcbiAgKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwOyB9XHJcbiAgXHJcbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgdWwge1xyXG4gICAgbWFyZ2luOiAwOyB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZiYTlhO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmMDhmNjI7IH1cclxuICBcclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXJlZ2lzdHJhdGlvbi1mb3JtLTQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cclxuICBcclxuICBcclxuICAgIFxyXG4gIC5pbm5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cclxuICBcclxuICAuaW1hZ2UtaG9sZGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDc3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG4gICAgY29sb3I6ICNmZmJhOWE7IH1cclxuICBcclxuICAuZm9ybS1ob2xkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAuZm9ybS1ob2xkZXI6YmVmb3JlIHtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgICNmZmJhOWE7IFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxyXG4gICAgLmZvcm0taG9sZGVyLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmYmE5YTsgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzLjVweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cclxuICAgIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjsgfVxyXG4gICAgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiOyB9XHJcbiAgICAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiOyB9XHJcbiAgICAuZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBodnItd29iYmxlLWhvcml6b250YWwge1xyXG4gICAgMTYuNjUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7IH1cclxuICAgIDMzLjMlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTsgfVxyXG4gICAgNDkuOTUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7IH1cclxuICAgIDY2LjYlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTsgfVxyXG4gICAgODMuMjUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cclxuICBAa2V5ZnJhbWVzIGh2ci13b2JibGUtaG9yaXpvbnRhbCB7XHJcbiAgICAxNi42NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTsgfVxyXG4gICAgMzMuMyUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpOyB9XHJcbiAgICA0OS45NSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxyXG4gICAgNjYuNiUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XHJcbiAgICA4My4yNSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTsgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEzM3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjMuNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYTlhO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApOyB9XHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLWhvcml6b250YWw7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLWhvcml6b250YWw7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgfVxyXG4gIFxyXG4gIC5jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7IH1cclxuICAgIC5jaGVja2JveCBsYWJlbCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICM5OTk7IH1cclxuICAgIC5jaGVja2JveCBpbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XHJcbiAgICAuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gIFxyXG4gIC5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3OyB9XHJcbiAgICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmJhOWE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gIC5mb3JtLWxvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7IH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgXHJcbiAgICAuaW1hZ2UtaG9sZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuICBcclxuICAgIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMHB4IDE1cHggNzBweDsgfVxyXG4gIFxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lOyB9IH1cclxuICBcclxuICAvKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }, { type: _footer_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/usluge/usluge.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/usluge/usluge.component.ts ***!
  \*******************************************************/
/*! exports provided: UslugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UslugeComponent", function() { return UslugeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UslugeComponent {
    constructor() { }
    ngOnInit() {
    }
}
UslugeComponent.ɵfac = function UslugeComponent_Factory(t) { return new (t || UslugeComponent)(); };
UslugeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UslugeComponent, selectors: [["app-usluge"]], decls: 131, vars: 0, consts: [[1, "featurette-divider"], [1, "d-flex", "justify-content-center", "pb-5"], [1, "row", "featurette"], [1, "col-md-7"], [1, "d-flex", "justify-content-center"], [1, "featurette-heading"], [1, "d-flex", "justify-content-center", "pt-5"], [1, "table", "pt-2"], [1, "text-right"], ["scope", "col"], ["scope", "row"], [1, "col-md-5"], ["src", "../../../assets/images/sisanje.jpg", "width", "500", "height", "500", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid slice", 1, "bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto"], [1, "col-md-7", "order-md-2"], [1, "col-md-5", "order-md-1"], ["src", "../../../assets/images/bojanje.jpg", "width", "500", "height", "500", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid slice", 1, "bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto"], ["src", "../../../assets/images/tretmani.jpg", "width", "500", "height", "500", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid slice", 1, "bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto"], [1, "d-flex", "justify-content-center", "pt-2"], [1, "lead"], ["src", "../../../assets/images/frizure.jpg", "width", "500", "height", "500", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid slice", 1, "bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto"]], template: function UslugeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usluge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0160i\u0161anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0161i\u0161anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "30 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "pranje+\u0161i\u0161anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0161i\u0161anje+feniranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "50 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "pranje+\u0161i\u0161anje+feniranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "70 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Bojanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "bojanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "100 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "pramenovi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "180 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "balayage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "470 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "80 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Tretmani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "minival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "110 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "keratin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "200 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "mezoterapija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "130 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Olaplex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "570 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "PRP tretman za \u0107elavost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "300 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Frizure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Frizura koja \u0107e prema rije\u010Dima stru\u010Dnjaka biti najpopularnija ovu jesen je verzija popularne frizure iz 70-ih koja uklju\u010Duje \u0161i\u0161ke i slojevito o\u0161i\u0161anu, pomalo razbaru\u0161enu kosu koja bez previ\u0161e napora izgleda glamurozno. Kombinacija pramenova koji uokviruju lice i slojevito o\u0161i\u0161ana kosa osiguravaju volumen. Tako\u0111er, ova frizura dobro se odr\u017Eava. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Naravno da ni ova jesen ne\u0107e pro\u0107i bez jedne od najpopularnijih frizura proteklih nekoliko godina. Veli\u010Danstveni bob uvijek je tu, a verzija koja \u0107e se nositi ovu jesen je bob s o\u0161trim rezom. Precizan rez i du\u017Eina do \u010Deljusti bit \u0107e veliki hit, ali sigurni smo da \u0107e i druge verzije boba imati svoje mjesto me\u0111u jesenskim frizurama. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr", 0);
    } }, styles: [".featurette-divider[_ngcontent-%COMP%] {\r\n    margin: 3rem 0; \r\n  }\r\n  \r\n  \r\n  \r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n  \r\n  \r\n  \r\n  @media (min-width: 40em) {\r\n    \r\n    .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading[_ngcontent-%COMP%] {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 62em) {\r\n    .featurette-heading[_ngcontent-%COMP%] {\r\n      margin-top: 0;\r\n      font-family: \"ElMessiri-SemiBold\";\r\n    }\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family: \"ElMessiri-SemiBold\";\r\n    text-align: center;\r\n    color: #ffba9a; }\r\n  \r\n  p[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{\r\n    font-family: \"ElMessiri-SemiBold\";\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2x1Z2UvdXNsdWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYyxFQUFFLHNDQUFzQztFQUN4RDs7RUFFQSxvQ0FBb0M7O0VBQ3BDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBR0E7c0RBQ29EOztFQUVwRDtJQUNFLHFDQUFxQztJQUNyQztNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2IsaUNBQWlDO0lBQ25DO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixjQUFjLEVBQUU7O0VBRWxCO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2x1Z2UvdXNsdWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDNyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBSRVNQT05TSVZFIENTU1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcclxuICAgIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJFbE1lc3NpcmktU2VtaUJvbGRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmJhOWE7IH1cclxuXHJcbiAgcCwgdGFibGV7XHJcbiAgICBmb250LWZhbWlseTogXCJFbE1lc3NpcmktU2VtaUJvbGRcIjtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcblxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UslugeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usluge',
                templateUrl: './usluge.component.html',
                styleUrls: ['./usluge.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/zaposlenici/zaposlenici.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/zaposlenici/zaposlenici.component.ts ***!
  \*****************************************************************/
/*! exports provided: ZaposleniciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaposleniciComponent", function() { return ZaposleniciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ZaposleniciComponent {
    constructor() { }
    ngOnInit() {
    }
}
ZaposleniciComponent.ɵfac = function ZaposleniciComponent_Factory(t) { return new (t || ZaposleniciComponent)(); };
ZaposleniciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZaposleniciComponent, selectors: [["app-zaposlenici"]], decls: 92, vars: 0, consts: [[1, "container", "marketing"], [1, "d-flex", "justify-content-center", "pb-5"], [1, "row"], [1, "col-lg-4"], ["src", "../../../assets/images/Tihana.jpg", "alt", "", "width", "240", "height", "224", 1, "bd-placeholder-img", "rounded-circle"], [1, "text-dark", "pt-2"], [1, "pt-1", "d-flex", "justify-content-center", "pr-2"], ["data-toggle", "modal", "data-target", "#myModal1", "role", "button", 1, "btn", "mojbutton"], ["src", "../../../assets/images/Bela.jpeg", "alt", "", "width", "240", "height", "288", 1, "bd-placeholder-img", "rounded-circle"], [1, "pt-1", "d-flex", "justify-content-center"], ["data-toggle", "modal", "data-target", "#myModal2", "role", "button", 1, "btn", "mojbutton"], ["src", "../../../assets/images/kristinka.jpg", "alt", "", "width", "240", "height", "224", 1, "bd-placeholder-img", "rounded-circle"], ["data-toggle", "modal", "data-target", "#myModal3", "role", "button", 1, "btn", "mojbutton"], ["id", "myModal1", "role", "dialog", 1, "modal", "mt-5", "pt-5"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "border-0"], [1, "modal-title"], ["data-dismiss", "modal", 1, "btn", "close"], [1, "modal-body", "mojfont"], [1, "modal-footer", "border-0", "d-flex", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "mojbutton", "btn", "btn-default"], ["id", "myModal2", "role", "dialog", 1, "modal", "mt-5", "pt-5"], ["id", "myModal3", "role", "dialog", 1, "modal", "mt-5", "pt-5"]], template: function ZaposleniciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upoznajte na\u0161 tim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kristina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vidi vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vidi vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ivana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vidi vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Kristina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi et repellendus modi nobis sed quia magnam sunt fugiat quo vero quisquam quasi dolore voluptatibus vel ut laboriosam, voluptatem ipsa facere distinctio in architecto iusto quam! Dolorem nemo consequatur nostrum maiores consectetur fugit dignissimos molestias! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " mob: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "095/211-76-77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " e-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "kristina@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Bela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique odit aspernatur in quibusdam nemo libero autem quam, quo odio! Autem tempora labore nisi molestiae qui pariatur, perspiciatis eius assumenda, ducimus numquam fugiat velit, officia sapiente! Veritatis, ab, voluptate atque laudantium perferendis nobis vero corporis, odio ea quas nisi debitis! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " mob: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "095/663-52-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " e-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "bela@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ivana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci inventore nemo culpa quaerat consequuntur dolorum dicta quia, incidunt obcaecati repudiandae consequatur. Nihil quos voluptatibus magni voluptates odit beatae enim velit rerum eum, dolor temporibus praesentium, cumque in aliquid dolores fugiat, eaque tempore. Iure ab velit possimus quis expedita. Vel? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " mob: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "091/762-54-32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " e-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "ivana@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  src: url('ElMessiri-SemiBold.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-Regular\";\r\n  src: url('Montserrat-Regular.ttf'); }\r\n@font-face {\r\n  font-family: \"Montserrat-SemiBold\";\r\n  src: url('Montserrat-SemiBold.ttf'); }\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\r\n.bd-placeholder-img[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n  }\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-family: \"ElMessiri-SemiBold\";\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  text-align: center;\r\n  color: #ffba9a; }\r\n.marketing[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  font-family: \"ElMessiri-SemiBold\";\r\n  color: gray;\r\n  display: inline-block;\r\n}\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-right: .75rem;\r\n  margin-left: .78rem;\r\n}\r\n@keyframes hvr-wobble-horizontal {\r\n        16.65% {\r\n          transform: translateX(8px); }\r\n        33.3% {\r\n          transform: translateX(-6px); }\r\n        49.95% {\r\n          transform: translateX(4px); }\r\n        66.6% {\r\n          transform: translateX(-2px); }\r\n        83.25% {\r\n          transform: translateX(1px); }\r\n        100% {\r\n          transform: translateX(0); } }\r\n.mojbutton[_ngcontent-%COMP%] {\r\nletter-spacing: 2px;\r\nborder: none;\r\nwidth: 133px;\r\nheight: 47px;\r\nborder-radius: 23.5px;\r\ncursor: pointer;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: center;\r\npadding: 0;\r\nbackground: #ffba9a;\r\nfont-size: 15px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\nfont-family: \"Montserrat-SemiBold\";\r\ntransform: perspective(1px) translateZ(0);\r\nbox-shadow: 0 0 1px #fff; }\r\n.mojbutton[_ngcontent-%COMP%]:hover {\r\n  animation-name: hvr-wobble-horizontal;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1; }\r\nh4[_ngcontent-%COMP%], .mojfont[_ngcontent-%COMP%]{\r\n    font-family: \"ElMessiri-SemiBold\";\r\n\r\n  }\r\n.close[_ngcontent-%COMP%]{\r\n  border:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy96YXBvc2xlbmljaS96YXBvc2xlbmljaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFtRSxFQUFFO0FBQ3ZFO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFtRSxFQUFFO0FBQ3ZFO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFvRSxFQUFFO0FBQ3hFO0VBR0Usc0JBQXNCLEVBQUU7QUFFeEI7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsaUJBQWlCO0VBQ25CO0FBRUY7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixjQUFjLEVBQUU7QUFFbEI7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQXFCTTtRQUNFO1VBRUUsMEJBQTBCLEVBQUU7UUFDOUI7VUFFRSwyQkFBMkIsRUFBRTtRQUMvQjtVQUVFLDBCQUEwQixFQUFFO1FBQzlCO1VBRUUsMkJBQTJCLEVBQUU7UUFDL0I7VUFFRSwwQkFBMEIsRUFBRTtRQUM5QjtVQUVFLHdCQUF3QixFQUFFLEVBQUU7QUFFdEM7QUFDQSxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLGtDQUFrQztBQUVsQyx5Q0FBeUM7QUFDekMsd0JBQXdCLEVBQUU7QUFDMUI7RUFFRSxxQ0FBcUM7RUFFckMsc0JBQXNCO0VBRXRCLHNDQUFzQztFQUV0Qyw0QkFBNEIsRUFBRTtBQUVoQztJQUNJLGlDQUFpQzs7RUFFbkM7QUFFRjtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvemFwb3NsZW5pY2kvemFwb3NsZW5pY2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2VsX21lc3NpcmkvRWxNZXNzaXJpLVNlbWlCb2xkLnR0ZlwiKTsgfVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGZcIik7IH1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIik7IH1cclxuKiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcblxyXG4gIC5iZC1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXJrZXRpbmcgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRWxNZXNzaXJpLVNlbWlCb2xkXCI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZiYTlhOyB9XHJcblxyXG4ubWFya2V0aW5nIGg2e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubWFya2V0aW5nIC5jb2wtbGctNCBwIHtcclxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcclxuICBtYXJnaW4tbGVmdDogLjc4cmVtO1xyXG59XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgaHZyLXdvYmJsZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAxNi42NSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XHJcbiAgICAgICAgMzMuMyUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7IH1cclxuICAgICAgICA0OS45NSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgICAgICAgNjYuNiUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cclxuICAgICAgICA4My4yNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XHJcbiAgICAgIEBrZXlmcmFtZXMgaHZyLXdvYmJsZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAxNi42NSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XHJcbiAgICAgICAgMzMuMyUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7IH1cclxuICAgICAgICA0OS45NSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgICAgICAgNjYuNiUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cclxuICAgICAgICA4My4yNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XHJcbiAgICAgICAgICBcclxuLm1vamJ1dHRvbiB7XHJcbmxldHRlci1zcGFjaW5nOiAycHg7XHJcbmJvcmRlcjogbm9uZTtcclxud2lkdGg6IDEzM3B4O1xyXG5oZWlnaHQ6IDQ3cHg7XHJcbmJvcmRlci1yYWRpdXM6IDIzLjVweDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxucGFkZGluZzogMDtcclxuYmFja2dyb3VuZDogI2ZmYmE5YTtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5jb2xvcjogI2ZmZjtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4td2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG50cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuYm94LXNoYWRvdzogMCAwIDFweCAjZmZmOyB9XHJcbi5tb2pidXR0b246aG92ZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtaG9yaXpvbnRhbDtcclxuICBhbmltYXRpb24tbmFtZTogaHZyLXdvYmJsZS1ob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7IH1cclxuXHJcbmg0LCAubW9qZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVsTWVzc2lyaS1TZW1pQm9sZFwiO1xyXG5cclxuICB9XHJcblxyXG4uY2xvc2V7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZaposleniciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zaposlenici',
                templateUrl: './zaposlenici.component.html',
                styleUrls: ['./zaposlenici.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\38595\Desktop\mapa\cataleya\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map