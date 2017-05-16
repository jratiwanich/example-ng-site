import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'footer-ui',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 @Input() model: any;
  constructor() { }

  ngOnInit() {
  }

}
