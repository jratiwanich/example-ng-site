import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ABOUT, CmsPage } from './mock.cms';

@Injectable()
export class CmsService {
   private pageUrl = 'http://localhost:8080/content/sites/example/about.data.json';
   private aboutUrl = "./assets/data/about.data.json";
   private headers = new Headers({'Content-Type': 'application/json'});
   private error;
   //constructor(private jsonp: Jsonp) { }
   constructor(private http: Http, private jsonp: Jsonp) {
     //let obj;
      //this.getJSON().subscribe(data => obj=data, error => console.log(error));
      //console.log(obj);
      this.headers.append('Access-Control-Allow-Origin', '*');
      this.headers.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
      this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
   }

   public getJSON(url: string){
         return this.http.get(url, {headers: this.headers})
                         .map((response: Response) =>{
                           console.log("getJSON().data="+ JSON.stringify(response));
                           return response.json();
                         })
                         .catch(this.handleError);

     }

  public getPromiseData(url: string):Promise<any>{
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }


    getPageJson():Promise<CmsPage>{
      return this.jsonp.request(this.aboutUrl, {headers: this.headers})
                 .toPromise()
                 .then(response => response.json().data)
                 .catch(this.handleError);

    }

  // subscribe = () => {
  // //this.isSuccess = false;
  // this.jsonp.request(this.pageUrl, this.headers).subscribe(response => {
  //   console.log(response);
  //   //this.isSuccess = true;
  // });
  // }

  getStaticPageData(): Promise<CmsPage>{
    return Promise.resolve(ABOUT);
  }

  private handleError(error: any): Promise<any> {
      console.error('[pagerender-ng] error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
