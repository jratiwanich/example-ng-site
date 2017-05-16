import { Component, OnInit,Injector,ReflectiveInjector  } from '@angular/core';
import { NodeModule} from '../../util/node/node.module';
import { JcrModel} from '../../model/jcr-model';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  ///private modelInjector: Injector;
  private nodeUtil = new NodeModule();

  constructor(public jcr: JcrModel) {
     console.debug("\nJumbotronComponent.constructor()");
     //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
  }


 ngOnInit() {
   console.debug("JumbotronComponent.ngOnInit() model="+JSON.stringify(this.jcr));
   //this.nodeUtil.loadChildComponent(this.jcr.model,this.modelInjector);

 }

}
