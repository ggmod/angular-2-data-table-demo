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
var data_table_demo1_remote_service_1 = require('./data-table-demo1-remote-service');
var DataTableDemo1Remote = (function () {
    function DataTableDemo1Remote(remoteService) {
        this.remoteService = remoteService;
        this.items = [];
        this.itemCount = 0;
    }
    DataTableDemo1Remote.prototype.reloadItems = function (params) {
        var _this = this;
        this.remoteService.query(params).then(function (result) {
            _this.items = result.items;
            _this.itemCount = result.count;
        });
    };
    DataTableDemo1Remote = __decorate([
        core_1.Component({
            selector: 'data-table-demo-1-remote',
            providers: [data_table_demo1_remote_service_1.RemoteService],
            templateUrl: 'app/demo1/data-table-demo1.html',
            styleUrls: ['app/demo1/data-table-demo1.css']
        }), 
        __metadata('design:paramtypes', [data_table_demo1_remote_service_1.RemoteService])
    ], DataTableDemo1Remote);
    return DataTableDemo1Remote;
}());
exports.DataTableDemo1Remote = DataTableDemo1Remote;
//# sourceMappingURL=data-table-demo1-remote.js.map