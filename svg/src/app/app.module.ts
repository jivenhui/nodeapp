import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe.pipe';
import { Svg2Component } from './svg2/svg2.component';
import { AutoSizeDirective } from './directives/auto-size.directive';
import {AutosizeModule} from 'ngx-autosize';
import { ParagraphComponent } from './svg2/elements/paragraph/paragraph.component';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ToolComponent } from './text-editor/tool/tool.component';
import { ToastrModule } from 'ngx-toastr';
import { ImagesComponent } from './svg2/elements/images/images.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    Svg2Component,
    AutoSizeDirective,
    ParagraphComponent,
    TextEditorComponent,
    ToolComponent,
    ImagesComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
