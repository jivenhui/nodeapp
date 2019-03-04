import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnInit, AfterViewInit {
  svgDom;
  @ViewChild('title') titleElementRef: ElementRef
  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.svgService.getSvg().subscribe(resp => {
      // this.svgDom = new DOMParser().parseFromString(resp, 'image/svg+xml');
      this.svgDom = resp;
    });
  }
    ngAfterViewInit() {
      this.titleElementRef.nativeElement.focus();
    }


}
