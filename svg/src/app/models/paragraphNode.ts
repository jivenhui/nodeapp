
import {SvgNode} from './svgNode';
import {NodeType} from './nodeType';

export class ParagraphNode implements SvgNode {
  public nodeType: NodeType;

  constructor(public text: HTMLElement, public rootTspan, public tspanList: HTMLCollection) {
    this.nodeType = NodeType.PARAGRAPH;
  }

  getClonedText() {
    return this.tspanList[0].cloneNode(true);
  }

  removeNodeContent() {
    while (this.rootTspan.hasChildNodes()) {
      this.rootTspan.removeChild(this.rootTspan.lastChild);
    }
  }

  addText(textAreaList, nodeClone) {
    for (let d = 0; d < textAreaList.length; d++) {
      // deep copy of clone for each element in textArea array
      const nodeToEdit: any = nodeClone.cloneNode(true);
      // Search for y in all tspan's and change y value
      for (let c = 1; c < nodeToEdit.attributes.length; c++) {
        if (nodeToEdit.attributes[c].name === 'y' && d !== 0) {
          nodeToEdit.attributes[c].nodeValue = Number(nodeToEdit.attributes[c].nodeValue) + 663;
        }
        // set clone with edited y value
        nodeClone = nodeToEdit;
      }
      const info = nodeToEdit.offsetWidth;
      console.log(info);
      nodeToEdit.lastChild.textContent = textAreaList[d];
      this.rootTspan.appendChild(nodeToEdit);
    }
  }
}
