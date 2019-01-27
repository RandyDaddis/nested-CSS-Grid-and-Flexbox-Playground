import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedCssGrids1Component } from './nested-css-grids-1/nested-css-grids-1.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedCssGrids1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
