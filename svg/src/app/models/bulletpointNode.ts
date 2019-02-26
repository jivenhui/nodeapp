import {Tspan} from './tspan';
import {SvgNode} from './svgNode';
import {NodeType} from './nodeType';

export class BulletpointNode extends SvgNode{
  constructor(public tspanList: Array<Tspan>) {
    super(NodeType.BULLETPOINT);
  }
}
