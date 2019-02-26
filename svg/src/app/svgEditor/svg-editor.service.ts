import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgEditorService {
  svg: Document;

  constructor() {
  }

  setSVG(svg: Document) {
    this.svg = svg;
  }

}
