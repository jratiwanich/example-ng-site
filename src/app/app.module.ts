import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import { AppComponent } from './app.component';

//import { PagerenderComponent} from 'lib/pagerender.component';

@NgModule({
  declarations: [
    AppComponent//,PagerenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
