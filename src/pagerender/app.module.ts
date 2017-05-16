import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';

import PRErrorHandler from './util/prerror-handler';
import { JcrModel, JcrOutlet} from './model/jcr-model';
import { AppComponent} from './app.component';
import { CmsService } from './service/cms.service';
import { PageUiComponent } from './ui/page/page-ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { JumbotronComponent } from './ui/jumbotron/jumbotron.component';
import { ColComponent } from './ui/col/col.component';
import { RowComponent } from './ui/row/row.component';
import { TextComponent } from './ui/text/text.component';
import { ImageComponent } from './ui/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    PageUiComponent,
    FooterComponent,
    NavComponent,
    JumbotronComponent,
    ColComponent,
    RowComponent,
    TextComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  entryComponents: [
    FooterComponent,
    PageUiComponent,
    NavComponent,
    RowComponent,
    ColComponent,
    JumbotronComponent,
    TextComponent ],
  providers: [
    CmsService,
    JcrModel,
    { provide: ErrorHandler, useClass: PRErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
