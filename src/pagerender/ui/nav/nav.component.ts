import { Component, OnInit,Injector, EventEmitter, Inject} from '@angular/core';
import { NodeModule} from '../../util/node/node.module';
import { JcrModel} from '../../model/jcr-model';
import { AppComponent } from '../../app.component';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'nav-ui',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Inject('locationObject') private locationObject: Location
  private nodeUtil = new NodeModule();
  private meParent: AppComponent;


  constructor(public jcr: JcrModel, inj:Injector) {
    console.debug("\n NavComponent constructor");
    this.meParent = inj.get(AppComponent);
   }

 ngOnInit() {
  console.debug("NavComponent.ngOnInit() MODEL="+JSON.stringify(this.jcr));
}

  onLoadContent(event){
    //stop the click event to prevent the main AppComponent to reload the page
    event.preventDefault();

    let jsonPagePath = "assets"+this.nodeUtil.pagePathToDataPath(event.currentTarget.pathname);
    console.debug("NavComponent.onLoadContent("+jsonPagePath+") href=" + event.currentTarget.href);
    this.meParent.loadPage(jsonPagePath,event.currentTarget.href);


  }

}
