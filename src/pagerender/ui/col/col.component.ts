import { Component, OnInit, Injector,ReflectiveInjector } from '@angular/core';
import { NodeModule} from '../../util/node/node.module';
import { JcrModel} from '../../model/jcr-model';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css','../../app.component.css']
})
export class ColComponent implements OnInit {
  private modelInjectors=[];
  private nodeUtil = new NodeModule();

  constructor(public jcr: JcrModel, private injector: Injector) {
    console.debug("\nColComponent constructor");
    //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);

 }


  ngOnInit() {
    console.debug("ColComponent ngOnInit MODEL="+JSON.stringify(this.jcr));
    this.nodeUtil.loadChildComponent(this.jcr.model,this.modelInjectors, this.injector);

  }

}
