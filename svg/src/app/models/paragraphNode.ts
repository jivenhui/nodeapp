
import {SvgNode} from './svgNode';
import {NodeType} from './nodeType';
import {TextNode} from './TextNode';

export class ParagraphNode extends SvgNode {

  constructor(public textNode: TextNode, public rootTspan, public tspanList: HTMLCollection) {
    super(NodeType.PARAGRAPH);
  }

  addText(textAreaList) {
    let nodeClone = this.tspanList[0].cloneNode(true);
    while (this.rootTspan.hasChildNodes()) {
      this.rootTspan.removeChild(this.rootTspan.lastChild);
    }
    for (let d = 0; d < textAreaList.length; d++) {
      // deep copy of clone for each element in textArea array
      const nodeToEdit: any = nodeClone.cloneNode(true);
      // Search for y in all tspan's and change y value
      let node = nodeToEdit;
      while (node.hasChildNodes()) {

        for (let c = 1; c < node.attributes.length; c++) {
          if (node.attributes[c].name === 'y' && d !== 0) {
            node.attributes[c].nodeValue = Number(node.attributes[c].nodeValue) + 663;
          }
          // set clone with edited y value
          node = nodeToEdit.firstChild
          nodeClone = nodeToEdit;
        }
      }
      nodeToEdit.lastChild.textContent = textAreaList[d];
      this.rootTspan.appendChild(nodeToEdit);
    }
  }
}
