import {RectNode} from './rectNode';
import {SvgNode} from './svgNode';
import {NodeType} from './nodeType';

export class RootNode {

  constructor(public rootNode: HTMLElement, public rectNode: RectNode, public svgNode: any, ) {
  }

}
