import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { SafePipe } from './safe.pipe';
import { Svg2Component } from './svg2/svg2.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SafePipe,
    Svg2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
