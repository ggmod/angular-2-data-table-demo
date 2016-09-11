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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BASE_URL = 'http://localhost:3000';
function paramsToQueryString(params) {
    var result = [];
    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }
    return result.map(function (param) { return param.join('='); }).join('&');
}
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
    }
    RemoteService.prototype.query = function (params) {
        return this.http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
            .then(function (resp) { return ({
            items: resp.json(),
            count: Number(resp.headers.get('X-Total-Count'))
        }); });
    };
    RemoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RemoteService);
    return RemoteService;
}());
exports.RemoteService = RemoteService;
//# sourceMappingURL=data-table-demo1-remote-service.js.map