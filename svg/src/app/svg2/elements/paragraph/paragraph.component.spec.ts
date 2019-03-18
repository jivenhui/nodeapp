import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphComponent } from './paragraph.component';
import { AppModule } from 'src/app/app.module';
import { TextEditorComponent } from 'src/app/text-editor/text-editor.component';
import { ToolComponent } from 'src/app/text-editor/tool/tool.component';
import { MatIconModule } from '@angular/material';

describe('ParagraphComponent', () => {
  let component: ParagraphComponent;
  let fixture: ComponentFixture<ParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphComponent, TextEditorComponent, ToolComponent],
      imports: [MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
