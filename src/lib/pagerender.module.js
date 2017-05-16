var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import PRErrorHandler from './util/prerror-handler';
import { JcrModel } from './model/jcr-model';
import { PagerenderComponent } from './pagerender.component';
import { CmsService } from './service/cms.service';
import { PageUiComponent } from './ui/page/page-ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { JumbotronComponent } from './ui/jumbotron/jumbotron.component';
import { ColComponent } from './ui/col/col.component';
import { RowComponent } from './ui/row/row.component';
import { TextComponent } from './ui/text/text.component';
import { ImageComponent } from './ui/image/image.component';
var PagerenderModule = (function () {
    function PagerenderModule() {
    }
    return PagerenderModule;
}());
PagerenderModule = __decorate([
    NgModule({
        declarations: [
            PagerenderComponent,
            PageUiComponent,
            FooterComponent,
            NavComponent,
            JumbotronComponent,
            ColComponent,
            RowComponent,
            TextComponent,
            ImageComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            JsonpModule
        ],
        entryComponents: [
            FooterComponent,
            PageUiComponent,
            NavComponent,
            RowComponent,
            ColComponent,
            JumbotronComponent,
            TextComponent
        ],
        providers: [
            CmsService,
            JcrModel,
            { provide: ErrorHandler, useClass: PRErrorHandler }
        ],
        bootstrap: [PagerenderComponent]
    })
], PagerenderModule);
export { PagerenderModule };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/pagerender.module.js.map