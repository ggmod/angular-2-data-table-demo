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
var angular_2_data_table_1 = require('angular-2-data-table');
var data_table_demo2_data_1 = require('./data-table-demo2-data');
var DataTableDemo2 = (function () {
    function DataTableDemo2() {
        var _this = this;
        this.carResource = new angular_2_data_table_1.DataTableResource(data_table_demo2_data_1.cars);
        this.cars = [];
        this.carCount = 0;
        this.yearLimit = 1999;
        this.rowColors = this.rowColors.bind(this);
        this.carResource.count().then(function (count) { return _this.carCount = count; });
    }
    DataTableDemo2.prototype.reloadCars = function (params) {
        var _this = this;
        this.carResource.query(params).then(function (cars) { return _this.cars = cars; });
    };
    // custom features:
    DataTableDemo2.prototype.carClicked = function (car) {
        alert(car.model);
    };
    DataTableDemo2.prototype.rowColors = function (car) {
        if (car.year >= this.yearLimit)
            return 'rgb(255, 255, 197)';
    };
    __decorate([
        core_1.ViewChild(angular_2_data_table_1.DataTable), 
        __metadata('design:type', angular_2_data_table_1.DataTable)
    ], DataTableDemo2.prototype, "carsTable", void 0);
    DataTableDemo2 = __decorate([
        core_1.Component({
            selector: 'data-table-demo-2',
            templateUrl: 'app/demo2/data-table-demo2.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableDemo2);
    return DataTableDemo2;
}());
exports.DataTableDemo2 = DataTableDemo2;
//# sourceMappingURL=data-table-demo2.js.map