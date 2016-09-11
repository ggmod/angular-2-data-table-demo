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
var data_table_demo3_data_1 = require('./data-table-demo3-data');
var DataTableDemo3 = (function () {
    function DataTableDemo3() {
        var _this = this;
        this.filmResource = new angular_2_data_table_1.DataTableResource(data_table_demo3_data_1.films);
        this.films = [];
        this.filmCount = 0;
        // special params:
        this.translations = {
            indexColumn: 'Index column',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Max results',
            paginationRange: 'Result range'
        };
        this.filmResource.count().then(function (count) { return _this.filmCount = count; });
    }
    DataTableDemo3.prototype.reloadFilms = function (params) {
        var _this = this;
        this.filmResource.query(params).then(function (films) { return _this.films = films; });
    };
    DataTableDemo3.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    __decorate([
        core_1.ViewChild(angular_2_data_table_1.DataTable), 
        __metadata('design:type', Object)
    ], DataTableDemo3.prototype, "filmsTable", void 0);
    DataTableDemo3 = __decorate([
        core_1.Component({
            selector: 'data-table-demo-3',
            templateUrl: 'app/demo3/data-table-demo3.html',
            styleUrls: ['app/demo3/data-table-demo3.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableDemo3);
    return DataTableDemo3;
}());
exports.DataTableDemo3 = DataTableDemo3;
//# sourceMappingURL=data-table-demo3.js.map