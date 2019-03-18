import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver} from '@angular/core';
import { SvgService } from '../services/svg.service';
import { ElementDirective } from '../directives/element.directive';
import { TitleComponent } from '../elements/title/title.component';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnInit, AfterViewInit {
  svgDom;
  @ViewChild('sider')
  sider;
  constructor(private svgService: SvgService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.svgService.getSvg().subscribe(resp => {
      // this.svgDom = new DOMParser().parseFromString(resp, 'image/svg+xml');
      this.svgDom = resp;
    });

  }
    ngAfterViewInit() {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TitleComponent);
      this.sider.viewContainerRef.createComponent(componentFactory);
    }


}
