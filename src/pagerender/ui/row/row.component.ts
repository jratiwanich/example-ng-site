import { Component, OnInit,Injector,ReflectiveInjector  } from '@angular/core';
import { NodeModule} from '../../util/node/node.module';
import { JcrModel} from '../../model/jcr-model';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css','../../app.component.css']
})
export class RowComponent implements OnInit {

  private modelInjectors = [];
  private nodeUtil = new NodeModule();

  constructor(public jcr: JcrModel, private injector: Injector) {
    console.debug("\nRowComponent.constructor()");
    //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
 }


  ngOnInit() {
    console.debug("RowComponent ngOnInit model="+JSON.stringify(this.jcr));
    this.nodeUtil.loadChildComponent(this.jcr.model, this.modelInjectors, this.injector);
  }

}
