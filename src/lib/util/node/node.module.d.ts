import { Injector } from '@angular/core';
import { PageUiComponent } from '../../ui/page/page-ui.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { NavComponent } from '../../ui/nav/nav.component';
import { JumbotronComponent } from '../../ui/jumbotron/jumbotron.component';
import { ColComponent } from '../../ui/col/col.component';
import { RowComponent } from '../../ui/row/row.component';
import { TextComponent } from '../../ui/text/text.component';
export declare class NodeModule {
    loadedComponents: {
        'pagerender-vue-structure-container': typeof PageUiComponent;
        'example-components-jumbotron': typeof JumbotronComponent;
        'example-components-nav': typeof NavComponent;
        'example-components-footer': typeof FooterComponent;
        'example-components-row': typeof RowComponent;
        'example-components-col': typeof ColComponent;
        'pagerender-vue-components-base': typeof TextComponent;
    };
    loadChildComponent(data: any, injects: any, injector: Injector): void;
    private handleError(error);
    /**
   *
   * this method will try to add .data.json to the end of the path (if it was .html, otherwise
   * we just try to add .data.json
   *
   * @param path
   * @returns {*}
   */
    pagePathToDataPath(path: any): string;
}
