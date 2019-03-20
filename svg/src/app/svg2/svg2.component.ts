import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventParserService } from '../services/event-parser.service';
import { SvgService } from '../services/svg.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RootElement } from '../models/rootElement';
import { TextElement } from '../models/elements/textElement';
import { TitleElement } from '../models/elements/titleElement';
import { ElementType } from '../models/ElementType';
import { Presentation } from '../models/presentation';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-svg2',
  templateUrl: './svg2.component.html',
  styleUrls: ['./svg2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Svg2Component implements OnInit {
  svgDom: Document;
  text = '';
  elementTypes = ElementType;
  selectedElement: RootElement;
  selectedPresentation: Presentation;

  constructor(public svgService: SvgService, public eventParser: EventParserService) {
  }

  async ngOnInit() {
    // this.svgService.getSvg().toPromise().then(resp => {
    //   this.svgDom = new DOMParser().parseFromString(resp, 'text/html');
    //   this.eventParser.setSvgDom(this.svgDom);
    // });
    this.svgService.getPresentations().subscribe(resp => {
      const presentations: Presentation[] = resp;
      this.svgService.getSlides().subscribe(resp => {
        for (const pres of presentations) {
          for (const slide of resp) {
            if (slide.presentationId === pres.id) {
              pres.slides = [];
              pres.slides.push(slide);
            }
          }
        }
        this.selectedPresentation = presentations[0];
        this.selectSlide(this.selectedPresentation.slides[0]);
        this.eventParser.setSvgDom(this.svgDom);
      });
    });
  }

  svgClick(event) {
    const element = this.eventParser.parseEvent(event);
    if (element !== undefined) {
      this.selectedElement = element;
      if (element.svgElement instanceof TextElement) {
        this.text = element.svgElement.textElement.innerHTML;
      } else if (element.svgElement instanceof TitleElement) {
        this.text = element.svgElement.textElement.innerHTML;
      }
    }
  }

  selectSlide(svg: Slide) {
    this.svgDom = new DOMParser().parseFromString(svg.content, 'text/html');
  }
}
