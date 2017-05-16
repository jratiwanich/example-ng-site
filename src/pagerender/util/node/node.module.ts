import { NgModule , Injector, ErrorHandler, ReflectiveInjector} from '@angular/core';
import { CommonModule } from '@angular/common';

import { JcrModel, JcrOutlet} from '../../model/jcr-model';
import { PageUiComponent } from '../../ui/page/page-ui.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { NavComponent } from '../../ui/nav/nav.component';
import { JumbotronComponent } from '../../ui/jumbotron/jumbotron.component';
import { ColComponent } from '../../ui/col/col.component';
import { RowComponent } from '../../ui/row/row.component';
import { TextComponent } from '../../ui/text/text.component';
import { AppComponent } from '../../app.component';
import { ImageComponent } from '../../ui/image/image.component';
const DATA_EXTENSION = '.data.json';

@NgModule({
  declarations: [
    AppComponent,
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
    TextComponent ]
})
export class NodeModule {

  loadedComponents = {
      'pagerender-vue-structure-container': PageUiComponent,
      'example-components-jumbotron': JumbotronComponent,
      'example-components-nav': NavComponent,
      'example-components-footer': FooterComponent,
      'example-components-row': RowComponent,
      'example-components-col': ColComponent,
      'pagerender-vue-components-base': TextComponent
    };

  public loadChildComponent(data: any, injects: any, injector: Injector){
    console.debug("loading NodeModule.loadChildComponent()");
    //let injChild: Injector;
    if(data){
      if(typeof data.children !== 'undefined' || data.children !=null){
        for(let node of data.children){
          node.type  = this.loadedComponents[node.component];

          let inject =  ReflectiveInjector.resolveAndCreate([JcrModel],injector);
           //let inject =  inject.resolveAndCreateChild([JcrModel]);

          //let injChild = ReflectiveInjector.fromResolvedProviders(pvd);
          if(inject){
            inject.get(JcrModel).setModel(node);
            //using path as a unique identifier
            injects[node.path] = inject;

            //example to add DOM node with the outlet context
            //let d = document.createElement("DIV");
            //d.appendChild(document.createTextNode("test div"));
            //this.myContent = [[d],[d]];

          }
          console.debug("node.component="+node.component);
        }
      }else{
        //console.warn("No more child node to navigate : ", data['component']);
        throw new Error("No more child node to navigate : "+ data['component']);
      }
    }
  }

  private handleError(error: any): Promise<any> {
      console.error('[pagerender-ng] error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  /**
 *
 * this method will try to add .data.json to the end of the path (if it was .html, otherwise
 * we just try to add .data.json
 *
 * @param path
 * @returns {*}
 */
public pagePathToDataPath(path):string {

    console.debug('converting',path,'to dataPath')
    var firstHtmlExt = path.indexOf('.html')
    var res = null
    if(firstHtmlExt >= 0) {
        var pathNoExt = path.substring(0,firstHtmlExt)
        res = pathNoExt + DATA_EXTENSION
    }
    else {
        res = path + DATA_EXTENSION
    }
    console.debug('result',res)
    return res

}


}
