import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CmsPage } from './mock.cms';
export declare class CmsService {
    private http;
    private jsonp;
    private pageUrl;
    private aboutUrl;
    private headers;
    private error;
    constructor(http: Http, jsonp: Jsonp);
    getJSON(url: string): Observable<any>;
    getPromiseData(url: string): Promise<any>;
    getPageJson(): Promise<CmsPage>;
    getStaticPageData(): Promise<CmsPage>;
    private handleError(error);
}
