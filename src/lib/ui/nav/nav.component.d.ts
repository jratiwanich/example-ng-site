import { OnInit, Injector } from '@angular/core';
import { JcrModel } from '../../model/jcr-model';
export declare class NavComponent implements OnInit {
    jcr: JcrModel;
    private locationObject;
    private nodeUtil;
    private meParent;
    constructor(jcr: JcrModel, inj: Injector);
    ngOnInit(): void;
    onLoadContent(event: any): void;
}
