import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp-1/comp-1.component';
import { provideHttpClient, } from '@angular/common/http';
import { Comp2Component } from './comp-2/comp-2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  // entryComponents:[],
  // providers: [],
  providers: [provideHttpClient()],

  bootstrap: [AppComponent]
})
export class AppModule { }
