import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedCssGrids0Component } from './nested-css-grids-0/nested-css-grids-0.component';
import { NestedCssGrids1Component } from './nested-css-grids-1/nested-css-grids-1.component';
import { NestedCssGrids2Component } from './nested-css-grids-2/nested-css-grids-2.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedCssGrids0Component,
    NestedCssGrids1Component,
    NestedCssGrids2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
