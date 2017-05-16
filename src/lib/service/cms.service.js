var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ABOUT } from './mock.cms';
var CmsService = (function () {
    //constructor(private jsonp: Jsonp) { }
    function CmsService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.pageUrl = 'http://localhost:8080/content/sites/example/about.data.json';
        this.aboutUrl = "./assets/data/about.data.json";
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        //let obj;
        //this.getJSON().subscribe(data => obj=data, error => console.log(error));
        //console.log(obj);
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    }
    CmsService.prototype.getJSON = function (url) {
        return this.http.get(url, { headers: this.headers })
            .map(function (response) {
            console.log("getJSON().data=" + JSON.stringify(response));
            return response.json();
        })
            .catch(this.handleError);
    };
    CmsService.prototype.getPromiseData = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CmsService.prototype.getPageJson = function () {
        return this.jsonp.request(this.aboutUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // subscribe = () => {
    // //this.isSuccess = false;
    // this.jsonp.request(this.pageUrl, this.headers).subscribe(response => {
    //   console.log(response);
    //   //this.isSuccess = true;
    // });
    // }
    CmsService.prototype.getStaticPageData = function () {
        return Promise.resolve(ABOUT);
    };
    CmsService.prototype.handleError = function (error) {
        console.error('[pagerender-ng] error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CmsService;
}());
CmsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Jsonp])
], CmsService);
export { CmsService };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/service/cms.service.js.map