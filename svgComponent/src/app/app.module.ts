import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './elements/title/title.component';
import { ElementDirective } from './directives/element.directive';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SafeHtmlPipe,
    TitleComponent,
    ElementDirective
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
