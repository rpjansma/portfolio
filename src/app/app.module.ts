
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


registerLocaleData(localePt);


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [

  ],
  bootstrap: [],
})
export class AppModule {}
