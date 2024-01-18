import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UrlInputComponent } from './url-input/url-input.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlRetrieveComponent } from './url-retrieve/url-retrieve.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlInputComponent,
    UrlRetrieveComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,UrlInputComponent]
})
export class AppModule { }
