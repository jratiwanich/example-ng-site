var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var JcrModel = (function () {
    function JcrModel() {
    }
    // public addModel(data: any){
    //   let o = {};
    //   o[data.component] = data;
    //   this.model.push(o);
    // }
    JcrModel.prototype.setModel = function (data) {
        this.model = data;
    };
    JcrModel.prototype.getModel = function (component) {
        return this.model[component];
    };
    return JcrModel;
}());
JcrModel = __decorate([
    Injectable()
], JcrModel);
export { JcrModel };
// export class JcrModel {
//   children: Array<JcrModel>;
//   siteCSS: Array<string>;
//   siteJS: Array<string>;
//   template: string;
//   title: string;
//   siteRoot: string;
//   pagePath: string;
//   path: string;
//   component: string;
//   context: {
//     fieldName: 'active',
//     value: false
//   }
//   type: any;
// }
var JcrOutlet = (function () {
    function JcrOutlet() {
    }
    return JcrOutlet;
}());
export { JcrOutlet };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/model/jcr-model.js.map