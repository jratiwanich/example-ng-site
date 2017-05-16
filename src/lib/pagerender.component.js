var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injector, HostListener } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { CmsService } from './service/cms.service';
import { MergeModule } from './util/merge/merge.module';
import { JcrModel } from './model/jcr-model';
import { NodeModule } from './util/node/node.module';
import { PageUiComponent } from './ui/page/page-ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { JumbotronComponent } from './ui/jumbotron/jumbotron.component';
import { RowComponent } from './ui/row/row.component';
import { ColComponent } from './ui/col/col.component';
import { TextComponent } from './ui/text/text.component';
var PagerenderComponent = (function () {
    //page = PageUiComponent;
    function PagerenderComponent(cmsSrv, jcr, injector, location) {
        var _this = this;
        this.cmsSrv = cmsSrv;
        this.jcr = jcr;
        this.injector = injector;
        this.location = location;
        //@ViewChild(PageUiComponent) childView: PageUiComponent;
        this.title = 'ng Page Render';
        //test path only
        //private aboutUrl = "./assets/content/sites/example/about.data.json";
        this.exampleUrl = "./assets/content/sites/example.data.json";
        this.templateUrl = "./assets/content/templates/example.data.json";
        this.currentUrl = this.exampleUrl;
        this.modelInjectors = [];
        this.nodeUtil = new NodeModule();
        this.loadedComponents = {
            'pagerender-vue-structure-container': PageUiComponent,
            'example-components-jumbotron': JumbotronComponent,
            'example-components-nav': NavComponent,
            'example-components-footer': FooterComponent,
            'example-components-row': RowComponent,
            'example-components-col': ColComponent,
            'pagerender-vue-components-base': TextComponent
        };
        console.debug("AppComponent.constructor() location=" + location.pathname);
        this.m = new MergeModule();
        location.onPopState(function () {
            console.debug("only loading page on onPopState() " + location.pathname);
            var jsonPagePath; // = ;
            //set a default page temporary for testing when hitting back button
            if (location.pathname == "/")
                jsonPagePath = _this.currentUrl;
            else
                jsonPagePath = "assets" + _this.nodeUtil.pagePathToDataPath(location.pathname);
            _this.getTemplateData(jsonPagePath, _this.templateUrl);
        });
    }
    PagerenderComponent.prototype.onPopState = function ($event) {
        console.log($event.currentTarget.pathname + ' Back button pressed 1=');
    };
    PagerenderComponent.prototype.ngOnInit = function () {
        console.debug("AppComponent.OnInit() " + location.pathname);
        this.getTemplateData(this.currentUrl, this.templateUrl);
    };
    PagerenderComponent.prototype.getTemplateData = function (contentpath, templatepath) {
        var _this = this;
        if (templatepath === void 0) { templatepath = ""; }
        if (templatepath == "")
            templatepath = this.templateUrl;
        this.cmsSrv.getJSON(templatepath)
            .subscribe(function (response) {
            //this.pageTemplate = response;
            console.debug("pageTemplate is ready > loading content");
            if (response)
                _this.getContentData(contentpath, response);
            //this.pageModel = this.loadAllComponents();
        }, function (err) { console.error(err); });
    };
    PagerenderComponent.prototype.getContentData = function (path, template) {
        var _this = this;
        this.cmsSrv.getJSON(path)
            .subscribe(function (response) {
            //this.contentData = response;
            console.debug("getContentData() is ready > loading page view");
            if (template)
                _this.loadPageData(template, response);
        }, function (err) { console.error(err); });
    };
    PagerenderComponent.prototype.loadPage = function (pagePath, url) {
        this.location.pushState(null, "TITLEx", url);
        this.getTemplateData(pagePath, this.templateUrl);
        console.debug("successfully loaded the page " + url);
    };
    PagerenderComponent.prototype.loadPageData = function (template, content) {
        console.debug("loadPageData()");
        //this.pageModel = this.loadAllComponents();
        if (template && content) {
            this.pageModel = this.m.merge(template, content);
            //this.pageTemplate = null;
            this.nodeUtil.loadChildComponent(this.pageModel, this.modelInjectors, this.injector);
        }
    };
    return PagerenderComponent;
}());
__decorate([
    HostListener('window:popstate', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PagerenderComponent.prototype, "onPopState", null);
PagerenderComponent = __decorate([
    Component({
        selector: 'pagerender-ng',
        template: "<div *ngFor=\"let node of pageModel?.children\">\n              <ng-container *ngComponentOutlet=\"node.type;\n                            injector: modelInjectors[node.path];\n                            content: myContent\"\n                            (navEmitter)=\"loadPage($event)\">\n              </ng-container>\n             </div>"
        //templateUrl: './app.component.html',
        //styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [CmsService,
        JcrModel,
        Injector,
        PlatformLocation])
], PagerenderComponent);
export { PagerenderComponent };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/pagerender.component.js.map