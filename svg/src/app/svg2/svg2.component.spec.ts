import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg2Component } from './svg2.component';
import { AppModule } from '../app.module';
import { ToastrModule } from 'ngx-toastr';

describe('Svg2Component', () => {
  let component: Svg2Component;
  let fixture: ComponentFixture<Svg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ Svg2Component ],
      imports: [AppModule,
        ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
