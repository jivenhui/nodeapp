import { SvgElement } from "../svgElement";
import { ElementType } from "../ElementType";

export class TextElement implements SvgElement{
  getContent() {
    throw new Error("Method not implemented.");
  }
  elementType: ElementType;

  constructor(public textElement: HTMLElement) {
    this.elementType = ElementType.TEXTELEMENT;
  }
  addContent() {
    throw new Error("Method not implemented.");
  }
  editContent(content: string) {
    this.textElement.innerHTML = content;
  }
}
