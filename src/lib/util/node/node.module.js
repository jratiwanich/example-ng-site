var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ReflectiveInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcrModel } from '../../model/jcr-model';
import { PageUiComponent } from '../../ui/page/page-ui.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { NavComponent } from '../../ui/nav/nav.component';
import { JumbotronComponent } from '../../ui/jumbotron/jumbotron.component';
import { ColComponent } from '../../ui/col/col.component';
import { RowComponent } from '../../ui/row/row.component';
import { TextComponent } from '../../ui/text/text.component';
import { PagerenderComponent } from '../../pagerender.component';
import { ImageComponent } from '../../ui/image/image.component';
var DATA_EXTENSION = '.data.json';
var NodeModule = (function () {
    function NodeModule() {
        this.loadedComponents = {
            'pagerender-vue-structure-container': PageUiComponent,
            'example-components-jumbotron': JumbotronComponent,
            'example-components-nav': NavComponent,
            'example-components-footer': FooterComponent,
            'example-components-row': RowComponent,
            'example-components-col': ColComponent,
            'pagerender-vue-components-base': TextComponent
        };
    }
    NodeModule.prototype.loadChildComponent = function (data, injects, injector) {
        console.debug("loading NodeModule.loadChildComponent()");
        //let injChild: Injector;
        if (data) {
            if (typeof data.children !== 'undefined' || data.children != null) {
                for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
                    var node = _a[_i];
                    node.type = this.loadedComponents[node.component];
                    var inject = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
                    //let inject =  inject.resolveAndCreateChild([JcrModel]);
                    //let injChild = ReflectiveInjector.fromResolvedProviders(pvd);
                    if (inject) {
                        inject.get(JcrModel).setModel(node);
                        //using path as a unique identifier
                        injects[node.path] = inject;
                        //example to add DOM node with the outlet context
                        //let d = document.createElement("DIV");
                        //d.appendChild(document.createTextNode("test div"));
                        //this.myContent = [[d],[d]];
                    }
                    console.debug("node.component=" + node.component);
                }
            }
            else {
                //console.warn("No more child node to navigate : ", data['component']);
                throw new Error("No more child node to navigate : " + data['component']);
            }
        }
    };
    NodeModule.prototype.handleError = function (error) {
        console.error('[pagerender-ng] error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
   *
   * this method will try to add .data.json to the end of the path (if it was .html, otherwise
   * we just try to add .data.json
   *
   * @param path
   * @returns {*}
   */
    NodeModule.prototype.pagePathToDataPath = function (path) {
        console.debug('converting', path, 'to dataPath');
        var firstHtmlExt = path.indexOf('.html');
        var res = null;
        if (firstHtmlExt >= 0) {
            var pathNoExt = path.substring(0, firstHtmlExt);
            res = pathNoExt + DATA_EXTENSION;
        }
        else {
            res = path + DATA_EXTENSION;
        }
        console.debug('result', res);
        return res;
    };
    return NodeModule;
}());
NodeModule = __decorate([
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
            CommonModule
        ],
        entryComponents: [
            FooterComponent,
            PageUiComponent,
            NavComponent,
            RowComponent,
            ColComponent,
            JumbotronComponent,
            TextComponent
        ]
    })
], NodeModule);
export { NodeModule };
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/util/node/node.module.js.map