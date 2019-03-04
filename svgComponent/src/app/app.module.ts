import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './elements/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SafeHtmlPipe,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
