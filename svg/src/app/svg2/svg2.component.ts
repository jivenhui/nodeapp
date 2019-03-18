import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventParserService } from '../services/event-parser.service';
import { SvgService } from '../services/svg.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RootElement } from '../models/rootElement';
import { TextElement } from '../models/elements/textElement';
import { TitleElement } from '../models/elements/titleElement';
import { ElementType } from '../models/ElementType';

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
  private selectedElement: RootElement;

  constructor(public svgService: SvgService, public eventParser: EventParserService) {
  }

  ngOnInit() {
    this.svgService.getSvg().toPromise().then(resp => {
      this.svgDom = new DOMParser().parseFromString(resp, 'text/html');
      this.eventParser.setSvgDom(this.svgDom);
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

  selectSvg(svg) {
    this.svgDom = svg.content;
  }
}
