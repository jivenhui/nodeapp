import { SvgElement } from "../svgElement";
import { ElementType } from "../ElementType";

export class TitleElement implements SvgElement {
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
        //regex that removes html tags to get singel line titles.
        const singleLine = content.replace(/(<([^>]+)>)/ig, '');
        this.textElement.innerHTML = singleLine;
    }
}