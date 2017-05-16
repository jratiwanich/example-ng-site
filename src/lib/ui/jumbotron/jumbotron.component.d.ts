import { OnInit } from '@angular/core';
import { JcrModel } from '../../model/jcr-model';
export declare class JumbotronComponent implements OnInit {
    jcr: JcrModel;
    private nodeUtil;
    constructor(jcr: JcrModel);
    ngOnInit(): void;
}
