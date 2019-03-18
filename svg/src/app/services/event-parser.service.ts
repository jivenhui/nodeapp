import { Injectable } from '@angular/core';
import { RootElement } from '../models/rootElement';
import { SvgElement } from '../models/svgElement';
import { TitleElement } from '../models/elements/titleElement';
import { TextElement } from '../models/elements/textElement';
import { ToastrService } from 'ngx-toastr';
import { ImageElement } from '../models/elements/imageElement';

@Injectable({
  providedIn: 'root'
})
export class EventParserService {
  public svgDom: Document;
  constructor(public toastr: ToastrService) { }

  setSvgDom(svgDom) {
    this.svgDom = svgDom;
  }

  parseEvent(event): RootElement {
    // Search for nearest parent element with ID
    let elementId: string;
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].id !== '') {
        elementId = event.path[i].id;
        break;
      }
    }
    if (elementId === undefined) {
      return undefined;
    } else {
      // Search for clicked element in svgDom variable
      const root = this.svgDom.getElementById(elementId);
      return this.parseToRootElement(root);
    }
  }

  private parseToRootElement(root: HTMLElement): RootElement {
    const rect = this.getElemetFromChildren(root.children, 'rect');
    let svgElement: SvgElement;
    if (root.id.includes('paragraph')) {
      svgElement = new TextElement(this.getElemetFromChildren(root.children, 'foreignObject'));
    } else if (root.id.includes('title')) {
      svgElement = new TitleElement(this.getElemetFromChildren(root.children, 'foreignObject'));
    } else if (root.id.includes('image')) {
      svgElement = new ImageElement(this.getElemetFromChildren(root.children, 'image'));
    } else {
      this.toastr.warning('Selected element not editable');
      return undefined;
    }
    const rootElement = new RootElement(root, rect, svgElement);
    return rootElement;
  }

  getElemetFromChildren(children: HTMLCollection, elementName: string) {
    let element;
    for (let i = 0; i < children.length; i++) {
      if (children[i].nodeName === elementName) {
        element = children[i];
        break;
      } else {
        element = null;
      }
    }
    return element;
  }
}
