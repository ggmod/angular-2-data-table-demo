"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var angular_2_data_table_1 = require('angular-2-data-table');
var data_table_demo1_1 = require('./demo1/data-table-demo1');
var data_table_demo2_1 = require('./demo2/data-table-demo2');
var data_table_demo3_1 = require('./demo3/data-table-demo3');
var data_table_demo1_remote_1 = require('./demo1/data-table-demo1-remote');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, angular_2_data_table_1.DataTableModule],
            declarations: [app_component_1.AppComponent, data_table_demo1_1.DataTableDemo1, data_table_demo2_1.DataTableDemo2, data_table_demo3_1.DataTableDemo3, data_table_demo1_remote_1.DataTableDemo1Remote],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map