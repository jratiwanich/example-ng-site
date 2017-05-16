import { Component } from '@angular/core';
//import { PagerenderComponent} from 'lib/pagerender.component';

@Component({
  selector: 'app-root',
  //template: '<pagerender-ng></pagerender-ng>'

  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  //extends PagerenderComponent
  title = 'app works!';
  message ="-";
  onKeyUp(input) {
        this.message = input.value;
    }
}
