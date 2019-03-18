import { SvgElement } from "../svgElement";
import { ElementType } from "../ElementType";

export class ImageElement implements SvgElement{
    
    constructor(public imageElement: HTMLElement) {
        this.elementType = ElementType.IMAGEELEMENT;
      }

      getContent() {
        return this.imageElement.attributes[4].nodeValue;
    }
      
    elementType: import("../ElementType").ElementType;    addContent() {
        throw new Error("Method not implemented.");
    }
    editContent(content: any) {
        this.imageElement.innerHTML = content;
    }


}