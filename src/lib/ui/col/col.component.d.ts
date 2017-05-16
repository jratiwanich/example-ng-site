import { OnInit, Injector } from '@angular/core';
import { JcrModel } from '../../model/jcr-model';
export declare class ColComponent implements OnInit {
    jcr: JcrModel;
    private injector;
    private modelInjectors;
    private nodeUtil;
    constructor(jcr: JcrModel, injector: Injector);
    ngOnInit(): void;
}
