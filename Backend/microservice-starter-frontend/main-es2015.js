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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <ms-header text=\"Microservice Starter\"></ms-header>\n    <div id=\"microservices\">\n        <mat-card id=\"microservices-card\">\n            <div id=\"path-chooser-container\">\n                <ms-path-chooser id=\"path-chooser\" (pathSubmitted)=\"pathChanged($event)\"></ms-path-chooser>\n            </div>\n            <div id=\"microservice-runner-container\">\n                <ms-microservice-runner id=\"microservice-runner\" (runMicroservicesSubmitted)=\"runMicroservices($event)\">\n                </ms-microservice-runner>\n            </div>\n        </mat-card>\n    </div>\n</div>\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>{{text}}</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/microservice-runner/microservice-runner.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/microservice-runner/microservice-runner.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div id=\"lists-container\">\n        <mat-card id=\"available-microservices-card\">\n            <mat-card-title>Available Microservices</mat-card-title>\n            <mat-card-content>\n                <div *ngFor=\"let msName of getAvailableMicroservices()\">\n                    <span>{{msName}}</span>\n                    <button mat-icon-button color=\"primary\" matTooltipPosition=\"right\"\n                        (click)=\"addMicroserviceToRun(msName)\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card id=\"microservices-to-run-card\">\n            <mat-card-title>Microservices To Run</mat-card-title>\n            <mat-card-content>\n                <div *ngFor=\"let msName of microservicesToRun\">\n                    <span>{{msName}}</span>\n                    <button mat-icon-button color=\"primary\" matTooltipPosition=\"right\"\n                        (click)=\"removeMicroserviceToRun(msName)\">\n                        <mat-icon class=\"delete-icon\">delete</mat-icon>\n                    </button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n    </div>\n\n    <div id=\"buttons-container\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Add All\" matTooltipPosition=\"right\"\n            (click)=\"addAllMicroservicesToRun()\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-raised-button color=\"primary\" matTooltip=\"Delete All\" matTooltipPosition=\"right\"\n            (click)=\"clearMicroservicesToRun()\">\n            <mat-icon>delete</mat-icon>\n        </button>\n        <button mat-raised-button color=\"primary\" matTooltip=\"Run\" matTooltipPosition=\"right\"\n            (click)=\"runMicroservices()\">\n            <mat-icon>play_arrow</mat-icon>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/path-chooser/path-chooser.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/path-chooser/path-chooser.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <form [formGroup]=\"pathChooserForm\" (ngSubmit)=\"onSubmit()\">\n        <div id=\"search-bar\">\n            <mat-form-field floatLabel=\"always\">\n                <mat-label>Microservices Path</mat-label>\n                <input matInput placeholder=\"C:/Your/Microservice/Path\" formControlName=\"path\">\n                <mat-error\n                    *ngIf=\"this.pathFormControl.hasError('invalidPath') && this.pathFormControl.hasError('sameInvalidPath')\">\n                    Path is invalid or contains no microservices\n                </mat-error>\n            </mat-form-field>\n            <button id=\"search-btn\" type=\"submit\" mat-raised-button color=\"primary\"\n                [disabled]=\"this.pathFormControl.hasError('required')\">\n                <mat-icon>search</mat-icon>\n            </button>\n        </div>\n    </form>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#content #microservices {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#content #microservices #microservices-card {\n  height: 74%;\n  width: 50%;\n  display: grid;\n  grid-template: 20% 80%/15% 70% 15%;\n}\n#content #microservices #microservices-card > * {\n  grid-column: 2;\n}\n#content #microservices #path-chooser-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#content #microservices #path-chooser-container #path-chooser {\n  width: 100%;\n}\n#content #microservices #microservice-runner-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#content #microservices #microservice-runner-container #microservice-runner {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEJhclxcUHJvamVjdHNcXEdpdFxcTWljcm9zZXJ2aWNlU3RhcnRlclxcRnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjtBRENJO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxrQ0FBQTtBQ0FaO0FER1E7RUFDSSxjQUFBO0FDRFo7QURJUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRlo7QURJWTtFQUNJLFdBQUE7QUNGaEI7QURNUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKWjtBRE1ZO0VBQ0ksV0FBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAjbWljcm9zZXJ2aWNlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgI21pY3Jvc2VydmljZXMtY2FyZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzQlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAvLyBncmlkLXRlbXBsYXRlOiAyMCUgODAlIC8gMTAwJTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMjAlIDgwJSAvIDE1JSA3MCUgMTUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjbWljcm9zZXJ2aWNlcy1jYXJkID4gKntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcGF0aC1jaG9vc2VyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgI3BhdGgtY2hvb3NlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21pY3Jvc2VydmljZS1ydW5uZXItY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgI21pY3Jvc2VydmljZS1ydW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNjb250ZW50ICNtaWNyb3NlcnZpY2VzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29udGVudCAjbWljcm9zZXJ2aWNlcyAjbWljcm9zZXJ2aWNlcy1jYXJkIHtcbiAgaGVpZ2h0OiA3NCU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDIwJSA4MCUvMTUlIDcwJSAxNSU7XG59XG4jY29udGVudCAjbWljcm9zZXJ2aWNlcyAjbWljcm9zZXJ2aWNlcy1jYXJkID4gKiB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuI2NvbnRlbnQgI21pY3Jvc2VydmljZXMgI3BhdGgtY2hvb3Nlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZW50ICNtaWNyb3NlcnZpY2VzICNwYXRoLWNob29zZXItY29udGFpbmVyICNwYXRoLWNob29zZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb250ZW50ICNtaWNyb3NlcnZpY2VzICNtaWNyb3NlcnZpY2UtcnVubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2NvbnRlbnQgI21pY3Jvc2VydmljZXMgI21pY3Jvc2VydmljZS1ydW5uZXItY29udGFpbmVyICNtaWNyb3NlcnZpY2UtcnVubmVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers_microservices_microservices_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/microservices/microservices.actions */ "./src/app/reducers/microservices/microservices.actions.ts");
/* harmony import */ var _services_microservice_reader_microservice_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/microservice-reader/microservice-manager.service */ "./src/app/services/microservice-reader/microservice-manager.service.ts");





let AppComponent = class AppComponent {
    constructor(store, msManager) {
        this.store = store;
        this.msManager = msManager;
    }
    ngOnInit() {
        this.microservicesSubscription = this.store.select('microservices').subscribe((ms) => {
            this.microservices = ms;
        });
    }
    ngOnDestroy() {
        this.microservicesSubscription.unsubscribe();
    }
    pathChanged(path) {
        this.msManager.getMicroserviceNames(path).subscribe((ms) => {
            this.store.dispatch(new _reducers_microservices_microservices_actions__WEBPACK_IMPORTED_MODULE_3__["Set"]({ names: ms, path: path, pathIsValid: !!ms.length }));
        }, (err) => {
            this.store.dispatch(new _reducers_microservices_microservices_actions__WEBPACK_IMPORTED_MODULE_3__["Set"]({ names: [], path: path, pathIsValid: false }));
        });
    }
    runMicroservices(msNames) {
        this.msManager.startMicroservices(this.microservices.path, msNames).subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_microservice_reader_microservice_manager_service__WEBPACK_IMPORTED_MODULE_4__["MicroserviceManagerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ms-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers_microservices_microservices_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/microservices/microservices.reducer */ "./src/app/reducers/microservices/microservices.reducer.ts");
/* harmony import */ var _reducers_microservices_to_run_microservices_to_run_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/microservices-to-run/microservices-to-run.reducer */ "./src/app/reducers/microservices-to-run/microservices-to-run.reducer.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_microservice_reader_microservice_manager_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/microservice-reader/microservice-manager.service */ "./src/app/services/microservice-reader/microservice-manager.service.ts");
/* harmony import */ var _components_path_chooser_path_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/path-chooser/path-chooser.component */ "./src/app/components/path-chooser/path-chooser.component.ts");
/* harmony import */ var _components_microservice_runner_microservice_runner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/microservice-runner/microservice-runner.component */ "./src/app/components/microservice-runner/microservice-runner.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _components_path_chooser_path_chooser_component__WEBPACK_IMPORTED_MODULE_15__["PathChooserComponent"],
            _components_microservice_runner_microservice_runner_component__WEBPACK_IMPORTED_MODULE_16__["MicroserviceRunnerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
                microservices: _reducers_microservices_microservices_reducer__WEBPACK_IMPORTED_MODULE_9__["microservicesReducer"],
                microservicesToRun: _reducers_microservices_to_run_microservices_to_run_reducer__WEBPACK_IMPORTED_MODULE_10__["microservicesToRunReducer"]
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 10
            })
        ],
        providers: [_services_microservice_reader_microservice_manager_service__WEBPACK_IMPORTED_MODULE_14__["MicroserviceManagerService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 4.5rem;\n  background-color: #3f51b5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\ndiv h1 {\n  color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 520;\n  font-size: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXEJhclxcUHJvamVjdHNcXEdpdFxcTWljcm9zZXJ2aWNlU3RhcnRlclxcRnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlIQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGhlaWdodDo0LjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MjA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgfVxyXG59IiwiZGl2IHtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbmRpdiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MjA7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "text", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ms-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/microservice-runner/microservice-runner.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/microservice-runner/microservice-runner.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#content #lists-container {\n  height: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding-right: 1.5rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#content #lists-container mat-card {\n  height: auto;\n  width: 38%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#content #lists-container mat-card mat-card-title {\n  font-size: 0.9em;\n}\n#content #lists-container mat-card mat-card-content {\n  height: auto;\n  overflow: auto;\n}\n#content #lists-container mat-card mat-card-content div {\n  padding-top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#content #lists-container mat-card mat-card-content div span {\n  font-size: 0.9em;\n  margin: 0.425rem 0;\n}\n#content #lists-container mat-card mat-card-content div .mat-icon-button {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n#content #lists-container mat-card mat-card-content div .delete-icon {\n  font-size: 22px;\n}\n#content #buttons-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#content #buttons-container button {\n  padding: 0;\n  min-width: 2.5rem;\n  margin: 0.35rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taWNyb3NlcnZpY2UtcnVubmVyL0Q6XFxCYXJcXFByb2plY3RzXFxHaXRcXE1pY3Jvc2VydmljZVN0YXJ0ZXJcXEZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtaWNyb3NlcnZpY2UtcnVubmVyXFxtaWNyb3NlcnZpY2UtcnVubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21pY3Jvc2VydmljZS1ydW5uZXIvbWljcm9zZXJ2aWNlLXJ1bm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDUjtBRENRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDWjtBRENZO0VBQ0ksZ0JBQUE7QUNDaEI7QURFWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQWhCO0FERWdCO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQXBCO0FERW9CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0F4QjtBREdvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEeEI7QURJb0I7RUFDSSxlQUFBO0FDRnhCO0FEU0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUFI7QURTUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pY3Jvc2VydmljZS1ydW5uZXIvbWljcm9zZXJ2aWNlLXJ1bm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgI2xpc3RzLWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgICAgICBtYXQtY2FyZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDM4JTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjAuOWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC40MjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjYnV0dG9ucy1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjM1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNjb250ZW50ICNsaXN0cy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI2NvbnRlbnQgI2xpc3RzLWNvbnRhaW5lciBtYXQtY2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDM4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNjb250ZW50ICNsaXN0cy1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuI2NvbnRlbnQgI2xpc3RzLWNvbnRhaW5lciBtYXQtY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiNjb250ZW50ICNsaXN0cy1jb250YWluZXIgbWF0LWNhcmQgbWF0LWNhcmQtY29udGVudCBkaXYge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbnRlbnQgI2xpc3RzLWNvbnRhaW5lciBtYXQtY2FyZCBtYXQtY2FyZC1jb250ZW50IGRpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luOiAwLjQyNXJlbSAwO1xufVxuI2NvbnRlbnQgI2xpc3RzLWNvbnRhaW5lciBtYXQtY2FyZCBtYXQtY2FyZC1jb250ZW50IGRpdiAubWF0LWljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4jY29udGVudCAjbGlzdHMtY29udGFpbmVyIG1hdC1jYXJkIG1hdC1jYXJkLWNvbnRlbnQgZGl2IC5kZWxldGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbiNjb250ZW50ICNidXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2NvbnRlbnQgI2J1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogMi41cmVtO1xuICBtYXJnaW46IDAuMzVyZW0gMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/microservice-runner/microservice-runner.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/microservice-runner/microservice-runner.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MicroserviceRunnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroserviceRunnerComponent", function() { return MicroserviceRunnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_reducers_microservices_to_run_microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reducers/microservices-to-run/microservices-to-run.actions */ "./src/app/reducers/microservices-to-run/microservices-to-run.actions.ts");




let MicroserviceRunnerComponent = class MicroserviceRunnerComponent {
    constructor(store) {
        this.store = store;
        this.runMicroservicesSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.microservicesToRun = [];
    }
    ngOnInit() {
        this.microservicesSubscription =
            this.store.select('microservices').subscribe((ms) => {
                this.allAvailableMicroservices = ms.names;
                this.clearMicroservicesToRun();
            });
        this.microservicesToRunSubscription =
            this.store.select('microservicesToRun').subscribe((msToRun) => {
                this.microservicesToRun = msToRun;
            });
    }
    ngOnDestroy() {
        this.microservicesSubscription.unsubscribe();
        this.microservicesToRunSubscription.unsubscribe();
    }
    getAvailableMicroservices() {
        return this.distinctArray(this.allAvailableMicroservices, this.microservicesToRun);
    }
    addMicroserviceToRun(msName) {
        this.store.dispatch(new src_app_reducers_microservices_to_run_microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_3__["AddMicroservice"](msName));
    }
    removeMicroserviceToRun(msName) {
        this.store.dispatch(new src_app_reducers_microservices_to_run_microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveMicroservice"](msName));
    }
    addAllMicroservicesToRun() {
        this.store.dispatch(new src_app_reducers_microservices_to_run_microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_3__["AddMultipleMicroservices"](this.getAvailableMicroservices()));
    }
    clearMicroservicesToRun() {
        this.store.dispatch(new src_app_reducers_microservices_to_run_microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_3__["ClearAll"]());
    }
    runMicroservices() {
        this.runMicroservicesSubmitted.emit(this.microservicesToRun);
    }
    distinctArray(arr, distinctByArr) {
        return arr.filter((value) => !distinctByArr.includes(value));
    }
};
MicroserviceRunnerComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MicroserviceRunnerComponent.prototype, "runMicroservicesSubmitted", void 0);
MicroserviceRunnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ms-microservice-runner',
        template: __webpack_require__(/*! raw-loader!./microservice-runner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/microservice-runner/microservice-runner.component.html"),
        styles: [__webpack_require__(/*! ./microservice-runner.component.scss */ "./src/app/components/microservice-runner/microservice-runner.component.scss")]
    })
], MicroserviceRunnerComponent);



/***/ }),

/***/ "./src/app/components/path-chooser/path-chooser.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/path-chooser/path-chooser.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#content form {\n  width: 100%;\n}\n#content form #search-bar {\n  width: 100%;\n  min-width: 18rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#content form #search-bar mat-form-field {\n  padding-right: 1.5rem;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n#content form #search-bar #search-btn {\n  padding: 0;\n  min-width: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRoLWNob29zZXIvRDpcXEJhclxcUHJvamVjdHNcXEdpdFxcTWljcm9zZXJ2aWNlU3RhcnRlclxcRnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhdGgtY2hvb3NlclxccGF0aC1jaG9vc2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhdGgtY2hvb3Nlci9wYXRoLWNob29zZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDWjtBRENZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNDaEI7QURFWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aC1jaG9vc2VyL3BhdGgtY2hvb3Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3NlYXJjaC1iYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjc2VhcmNoLWJ0bntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZW50IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb250ZW50IGZvcm0gI3NlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jY29udGVudCBmb3JtICNzZWFyY2gtYmFyIG1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBmbGV4OiAxO1xufVxuI2NvbnRlbnQgZm9ybSAjc2VhcmNoLWJhciAjc2VhcmNoLWJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/path-chooser/path-chooser.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/path-chooser/path-chooser.component.ts ***!
  \*******************************************************************/
/*! exports provided: PathChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathChooserComponent", function() { return PathChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




let PathChooserComponent = class PathChooserComponent {
    constructor(store) {
        this.store = store;
        this.localStoragePathKey = 'path';
        this.pathIsValid = true;
        this.lastInvalidPath = null;
        this.pathSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.pathFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem(this.localStoragePathKey), [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            this.pathOkValidator(),
            this.sameInvalidPath()
        ]);
        this.pathChooserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            path: this.pathFormControl
        });
        this.microservicesSubscription = this.store.select('microservices').subscribe((ms) => {
            this.pathIsValid = ms.pathIsValid;
            if (this.pathIsValid) {
                localStorage.setItem(this.localStoragePathKey, this.pathFormControl.value);
                this.lastInvalidPath = null;
            }
            else {
                this.lastInvalidPath = this.pathFormControl.value;
            }
            this.pathFormControl.updateValueAndValidity();
        });
    }
    ngOnDestroy() {
        this.microservicesSubscription.unsubscribe();
    }
    onSubmit() {
        this.pathSubmitted.emit(this.pathChooserForm.get('path').value);
    }
    pathOkValidator() {
        return (control) => {
            return this.pathIsValid ? null : { invalidPath: control.value };
        };
    }
    sameInvalidPath() {
        return (control) => {
            return control.value !== this.lastInvalidPath ? null : { sameInvalidPath: control.value };
        };
    }
};
PathChooserComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PathChooserComponent.prototype, "pathSubmitted", void 0);
PathChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ms-path-chooser',
        template: __webpack_require__(/*! raw-loader!./path-chooser.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/path-chooser/path-chooser.component.html"),
        styles: [__webpack_require__(/*! ./path-chooser.component.scss */ "./src/app/components/path-chooser/path-chooser.component.scss")]
    })
], PathChooserComponent);



/***/ }),

/***/ "./src/app/reducers/microservices-to-run/microservices-to-run.actions.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/reducers/microservices-to-run/microservices-to-run.actions.ts ***!
  \*******************************************************************************/
/*! exports provided: ADD_MICROSERVICE, REMOVE_MICROSERVICE, ADD_MULTIPLE_MICROSERVICES, CLEAR_ALL, AddMicroservice, RemoveMicroservice, AddMultipleMicroservices, ClearAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MICROSERVICE", function() { return ADD_MICROSERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MICROSERVICE", function() { return REMOVE_MICROSERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MULTIPLE_MICROSERVICES", function() { return ADD_MULTIPLE_MICROSERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ALL", function() { return CLEAR_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMicroservice", function() { return AddMicroservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMicroservice", function() { return RemoveMicroservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMultipleMicroservices", function() { return AddMultipleMicroservices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAll", function() { return ClearAll; });
const ADD_MICROSERVICE = '[MicroservicesToRun] AddMicroservice';
const REMOVE_MICROSERVICE = '[MicroservicesToRun] RemoveMicroservice';
const ADD_MULTIPLE_MICROSERVICES = '[MicroservicesToRun] AddMultipleMicroservices';
const CLEAR_ALL = '[MicroservicesToRun] ClearAll';
class AddMicroservice {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MICROSERVICE;
    }
}
AddMicroservice.ctorParameters = () => [
    { type: String }
];
class RemoveMicroservice {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MICROSERVICE;
    }
}
RemoveMicroservice.ctorParameters = () => [
    { type: String }
];
class AddMultipleMicroservices {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MULTIPLE_MICROSERVICES;
    }
}
AddMultipleMicroservices.ctorParameters = () => [
    { type: Array }
];
class ClearAll {
    constructor() {
        this.type = CLEAR_ALL;
    }
}


/***/ }),

/***/ "./src/app/reducers/microservices-to-run/microservices-to-run.reducer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/reducers/microservices-to-run/microservices-to-run.reducer.ts ***!
  \*******************************************************************************/
/*! exports provided: microservicesToRunReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microservicesToRunReducer", function() { return microservicesToRunReducer; });
/* harmony import */ var _microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservices-to-run.actions */ "./src/app/reducers/microservices-to-run/microservices-to-run.actions.ts");

const defaultState = [];
function microservicesToRunReducer(state = defaultState, action) {
    switch (action.type) {
        case _microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_MICROSERVICE"]:
            return [...state, action.payload];
        case _microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_MULTIPLE_MICROSERVICES"]:
            return [...state, ...action.payload];
        case _microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_MICROSERVICE"]:
            return state.filter(x => x !== action.payload);
        case _microservices_to_run_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ALL"]:
            return defaultState;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/microservices/microservices.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reducers/microservices/microservices.actions.ts ***!
  \*****************************************************************/
/*! exports provided: SET, Set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
const SET = '[Microservices] Set';
class Set {
    constructor(payload) {
        this.payload = payload;
        this.type = SET;
    }
}
Set.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/reducers/microservices/microservices.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reducers/microservices/microservices.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: microservicesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microservicesReducer", function() { return microservicesReducer; });
/* harmony import */ var _microservices_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservices.actions */ "./src/app/reducers/microservices/microservices.actions.ts");

const defaultState = { names: [], path: '', pathIsValid: true };
function microservicesReducer(state = defaultState, action) {
    switch (action.type) {
        case _microservices_actions__WEBPACK_IMPORTED_MODULE_0__["SET"]:
            return state = action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/microservice-reader/microservice-manager.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/microservice-reader/microservice-manager.service.ts ***!
  \******************************************************************************/
/*! exports provided: MicroserviceManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroserviceManagerService", function() { return MicroserviceManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MicroserviceManagerService = class MicroserviceManagerService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost';
    }
    getMicroserviceNames(path) {
        return this.http.get(`${this.BASE_URL}/microservices?path=${path}`);
    }
    startMicroservices(path, microservices) {
        return this.http.post(`${this.BASE_URL}/start`, microservices.map(ms => `${path}/${ms}`));
    }
};
MicroserviceManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MicroserviceManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MicroserviceManagerService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Bar\Projects\Git\MicroserviceStarter\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map