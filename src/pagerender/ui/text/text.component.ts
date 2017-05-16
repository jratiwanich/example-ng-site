import { Component, OnInit,Injector,ReflectiveInjector  } from '@angular/core';
import { NodeModule} from '../../util/node/node.module';
import { JcrModel} from '../../model/jcr-model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css','../../app.component.css']
})
export class TextComponent implements OnInit {
  private modelInjectors=[];
  private nodeUtil = new NodeModule();

  constructor(public jcr: JcrModel, private injector: Injector) {
    console.debug("\n TextComponent constructor");
    //this.modelInjector = ReflectiveInjector.resolveAndCreate([JcrModel], injector);
 }


  ngOnInit() {
    console.debug("TextComponent ngOnInit MODEL="+JSON.stringify(this.jcr));
    //this.nodeUtil.loadChildComponent(this.jcr.model, this.modelInjectors, this.injector);
  }

}
