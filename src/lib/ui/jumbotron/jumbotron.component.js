var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NodeModule } from '../../util/node/node.module';
import { JcrModel } from '../../model/jcr-model';
var JumbotronComponent = (function () {
    function JumbotronComponent(jcr) {
        this.jcr = jcr;
        ///private modelInjector: Injector;
        this.nodeUtil = new NodeModule();
        console.debug("\nJumbotronComponent.constructor()");
        //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        console.debug("JumbotronComponent.ngOnInit() model=" + JSON.stringify(this.jcr));
        //this.nodeUtil.loadChildComponent(this.jcr.model,this.modelInjector);
    };
    return JumbotronComponent;
}());
JumbotronComponent = __decorate([
    Component({
        selector: 'jumbotron',
        templateUrl: './jumbotron.component.html',
        styleUrls: ['./jumbotron.component.css']
    }),
    __metadata("design:paramtypes", [JcrModel])
], JumbotronComponent);
export { JumbotronComponent };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/jumbotron/jumbotron.component.js.map