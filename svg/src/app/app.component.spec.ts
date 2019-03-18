import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Svg2Component } from './svg2/svg2.component';
import { AppModule } from './app.module';
import { ParagraphComponent } from './svg2/elements/paragraph/paragraph.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ToolComponent } from './text-editor/tool/tool.component';
import { SafePipe } from './pipes/safe.pipe';
import { MatIconModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Svg2Component,
        ParagraphComponent,
        TextEditorComponent,
        ToolComponent,
        SafePipe
      ],
      imports: [
        MatIconModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
