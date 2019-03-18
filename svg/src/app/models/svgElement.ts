import {ElementType} from './ElementType';

export interface SvgElement {
  elementType: ElementType

  addContent();
  editContent(content);
  getContent()
}
