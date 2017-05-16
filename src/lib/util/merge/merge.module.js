var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var MergeModule = (function () {
    function MergeModule() {
    }
    MergeModule.prototype.merge = function (obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (typeof obj2[p] === 'object') {
                    if (obj2[p] instanceof Array) {
                        for (var pos = 0; pos < obj2[p].length; pos++) {
                            if (typeof obj2[p][pos] === 'object') {
                                var found = false;
                                var path = obj2[p][pos].path;
                                for (var i = 0; i < obj1[p].length; i++) {
                                    if (obj1[p][i].path === path) {
                                        //obj1[p][i] = mergeRecursive(obj1[p][i], obj2[p][pos])
                                        obj1[p][i] = this.merge(obj1[p][i], obj2[p][pos]);
                                        break;
                                    }
                                }
                                if (!found) {
                                    obj1[p].push(obj2[p][pos]);
                                }
                            }
                        }
                    }
                    else {
                        //obj1[p] = mergeRecursive(obj1[p], obj2[p]);
                        obj1[p] = this.merge(obj1[p], obj2[p]);
                    }
                }
                else {
                    obj1[p] = obj2[p];
                }
            }
            catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    };
    return MergeModule;
}());
MergeModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: []
    })
], MergeModule);
export { MergeModule };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/util/merge/merge.module.js.map