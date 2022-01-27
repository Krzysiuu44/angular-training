import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import { AlertPositiveComponent } from './alert-positive/alert-positive.component';
import {AlertNegativeComponent} from "./alert-negative/alert-negative.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AlertPositiveComponent,
    AlertNegativeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
