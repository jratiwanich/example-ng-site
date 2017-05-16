import { Component, OnInit, ViewChild,  NgModuleFactory, ReflectiveInjector, Injector, HostListener} from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { CmsService } from './service/cms.service';
import { MergeModule } from './util/merge/merge.module';
import { JcrModel, JcrOutlet} from './model/jcr-model';
import { NodeModule} from './util/node/node.module';


import { PageUiComponent } from './ui/page/page-ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { JumbotronComponent } from './ui/jumbotron/jumbotron.component';
import { RowComponent } from './ui/row/row.component';
import { ColComponent } from './ui/col/col.component';
import { TextComponent } from './ui/text/text.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //@ViewChild(PageUiComponent) childView: PageUiComponent;
  title = 'ng Page Render';

  //public contentData: any;
  //private pageTemplate: any;
  private pageModel: any; //JcrModel;
  private pageComponents: Array<any>;//Array<JcrOutlet>;
  private m: MergeModule;
  private myModule: NgModuleFactory<any>;

//test path only
//private aboutUrl = "./assets/content/sites/example/about.data.json";
private exampleUrl = "./assets/content/sites/example.data.json";
private templateUrl = "./assets/content/templates/example.data.json";
private currentUrl = this.exampleUrl;

  private modelInjectors =[];
  private modelInjector: Injector;
  private modelProvider: any;
  private nodeUtil = new NodeModule();

  myContent: any;


  loadedComponents = {
      'pagerender-vue-structure-container': PageUiComponent,
      'example-components-jumbotron': JumbotronComponent,
      'example-components-nav': NavComponent,
      'example-components-footer': FooterComponent,
      'example-components-row': RowComponent,
      'example-components-col': ColComponent,
      'pagerender-vue-components-base': TextComponent
    };

  //page = PageUiComponent;
  constructor(private cmsSrv: CmsService,
              public jcr: JcrModel,
              private injector: Injector,
              private location: PlatformLocation) {
    console.debug("AppComponent.constructor() location="+ location.pathname);
    this.m = new MergeModule();

    location.onPopState(()=>{
      console.debug("only loading page on onPopState() " +location.pathname);
      let jsonPagePath; // = ;
      //set a default page temporary for testing when hitting back button
      if(location.pathname=="/")
        jsonPagePath = this.currentUrl;
      else
        jsonPagePath = "assets"+this.nodeUtil.pagePathToDataPath(location.pathname);

      this.getTemplateData(jsonPagePath,this.templateUrl);

    });

 }

 @HostListener('window:popstate', ['$event'])
 onPopState($event) {
   console.log($event.currentTarget.pathname+ ' Back button pressed 1=');
 }

 ngOnInit(){
   console.debug("AppComponent.OnInit() "+location.pathname);
   this.getTemplateData(this.currentUrl,this.templateUrl);

   }

 getTemplateData( contentpath: string, templatepath: string=""){
   if(templatepath=="") templatepath = this.templateUrl;
   this.cmsSrv.getJSON(templatepath)
     .subscribe(response=> {
                //this.pageTemplate = response;
                console.debug("pageTemplate is ready > loading content");
                if(response) this.getContentData(contentpath, response);

                //this.pageModel = this.loadAllComponents();
              },
               err=>{console.error(err);});
 }

 getContentData(path:string, template:any){

   this.cmsSrv.getJSON(path)
               .subscribe(response=> {
                 //this.contentData = response;
                 console.debug("getContentData() is ready > loading page view");
                 if(template) this.loadPageData(template,response);
               },
               err=>{console.error(err);});
 }


 loadPage(pagePath: string, url: string){

   this.location.pushState(null,"TITLEx",url);
   this.getTemplateData(pagePath,this.templateUrl);
   console.debug("successfully loaded the page " + url);

}



loadPageData(template, content){
  console.debug("loadPageData()");
  //this.pageModel = this.loadAllComponents();
  if(template && content){
    this.pageModel = this.m.merge(template,content);
    //this.pageTemplate = null;
    this.nodeUtil.loadChildComponent(this.pageModel,this.modelInjectors,this.injector);

  }

}






}
