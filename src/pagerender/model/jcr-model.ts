import { Injectable } from '@angular/core';

@Injectable()
export class JcrModel {
  model: any;
  template: string;
  pagePath: string;
  path: string;
  component: string;

  // public addModel(data: any){
  //   let o = {};
  //   o[data.component] = data;
  //   this.model.push(o);
  // }

  public setModel(data: any){
    this.model = data;
  }
  public getModel(component: string){
    return this.model[component];
  }
}

// export class JcrModel {
//   children: Array<JcrModel>;
//   siteCSS: Array<string>;
//   siteJS: Array<string>;
//   template: string;
//   title: string;
//   siteRoot: string;
//   pagePath: string;
//   path: string;
//   component: string;
//   context: {
//     fieldName: 'active',
//     value: false
//   }
//   type: any;
// }

export class JcrOutlet{
  component: any;
  content: any;
  injector: any;
}
