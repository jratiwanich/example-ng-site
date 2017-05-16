import { Component, OnInit, Injector,ReflectiveInjector } from '@angular/core';
import { JcrModel} from '../../model/jcr-model';
import { NodeModule} from '../../util/node/node.module';

@Component({
  selector: 'page-ui',
  templateUrl: './page-ui.component.html',
  styleUrls: ['./page-ui.component.css','../../app.component.css']
})
export class PageUiComponent implements OnInit {

  private modelInjectors=[];
  private nodeUtil = new NodeModule();

  constructor(public jcr: JcrModel,
              private injector: Injector
              ) {
    console.debug("\nPageUiComponent.constructor()");
    //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
 }


  ngOnInit() {
    console.debug("PageUiComponent.ngOnInit() MODEL="+JSON.stringify(this.jcr));
    this.nodeUtil.loadChildComponent(this.jcr.model,this.modelInjectors,this.injector);
  }


}
