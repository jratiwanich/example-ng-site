var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injector } from '@angular/core';
import { NodeModule } from '../../util/node/node.module';
import { JcrModel } from '../../model/jcr-model';
var ColComponent = (function () {
    function ColComponent(jcr, injector) {
        this.jcr = jcr;
        this.injector = injector;
        this.modelInjectors = [];
        this.nodeUtil = new NodeModule();
        console.debug("\nColComponent constructor");
        //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
    }
    ColComponent.prototype.ngOnInit = function () {
        console.debug("ColComponent ngOnInit MODEL=" + JSON.stringify(this.jcr));
        this.nodeUtil.loadChildComponent(this.jcr.model, this.modelInjectors, this.injector);
    };
    return ColComponent;
}());
ColComponent = __decorate([
    Component({
        selector: 'app-col',
        templateUrl: './col.component.html',
        styleUrls: ['./col.component.css', '../../app.component.css']
    }),
    __metadata("design:paramtypes", [JcrModel, Injector])
], ColComponent);
export { ColComponent };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/col/col.component.js.map