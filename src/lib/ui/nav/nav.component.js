var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injector, Inject } from '@angular/core';
import { NodeModule } from '../../util/node/node.module';
import { JcrModel } from '../../model/jcr-model';
import { PagerenderComponent } from '../../pagerender.component';
var NavComponent = (function () {
    function NavComponent(jcr, inj) {
        this.jcr = jcr;
        this.nodeUtil = new NodeModule();
        console.debug("\n NavComponent constructor");
        this.meParent = inj.get(PagerenderComponent);
    }
    NavComponent.prototype.ngOnInit = function () {
        console.debug("NavComponent.ngOnInit() MODEL=" + JSON.stringify(this.jcr));
    };
    NavComponent.prototype.onLoadContent = function (event) {
        //stop the click event to prevent the main AppComponent to reload the page
        event.preventDefault();
        var jsonPagePath = "assets" + this.nodeUtil.pagePathToDataPath(event.currentTarget.pathname);
        console.debug("NavComponent.onLoadContent(" + jsonPagePath + ") href=" + event.currentTarget.href);
        this.meParent.loadPage(jsonPagePath, event.currentTarget.href);
    };
    return NavComponent;
}());
__decorate([
    Inject('locationObject'),
    __metadata("design:type", Location)
], NavComponent.prototype, "locationObject", void 0);
NavComponent = __decorate([
    Component({
        selector: 'nav-ui',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    }),
    __metadata("design:paramtypes", [JcrModel, Injector])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/nav/nav.component.js.map