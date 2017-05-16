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
import { JcrModel } from '../../model/jcr-model';
import { NodeModule } from '../../util/node/node.module';
var PageUiComponent = (function () {
    function PageUiComponent(jcr, injector) {
        this.jcr = jcr;
        this.injector = injector;
        this.modelInjectors = [];
        this.nodeUtil = new NodeModule();
        console.debug("\nPageUiComponent.constructor()");
        //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
    }
    PageUiComponent.prototype.ngOnInit = function () {
        console.debug("PageUiComponent.ngOnInit() MODEL=" + JSON.stringify(this.jcr));
        this.nodeUtil.loadChildComponent(this.jcr.model, this.modelInjectors, this.injector);
    };
    return PageUiComponent;
}());
PageUiComponent = __decorate([
    Component({
        selector: 'page-ui',
        templateUrl: './page-ui.component.html',
        styleUrls: ['./page-ui.component.css', '../../app.component.css']
    }),
    __metadata("design:paramtypes", [JcrModel,
        Injector])
], PageUiComponent);
export { PageUiComponent };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/page/page-ui.component.js.map