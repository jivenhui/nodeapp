import {RectElement} from './rectElement';
import {SvgElement} from './svgElement';
import {ElementType} from './ElementType';

export class RootElement {
  constructor(public rootElement: HTMLElement, public rectElement: RectElement,  public svgElement: SvgElement, ) {
  }

}
