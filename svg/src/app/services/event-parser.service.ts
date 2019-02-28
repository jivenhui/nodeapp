import { Injectable } from '@angular/core';
import {RootNode} from '../models/rootNode';
import {ParagraphNode} from '../models/paragraphNode';
import {TextNode} from '../models/TextNode';

@Injectable({
  providedIn: 'root'
})
export class EventParserService {
  private svgDom;
  constructor() { }

  setSvgDom(svgDom) {
    this.svgDom = svgDom;
  }

  parseEvent(event): RootNode {
    // Search for nearest parent node with ID
    let nodeId: string;
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].id !== '') {
        nodeId = event.path[i].id;
        break;
      }
    }
    // Search for clicked element in svgDom variable
    const root = this.svgDom.getElementById(nodeId);
    return this.parseToNodes(root);
  }

  private parseToNodes(root: HTMLElement): RootNode {
    const rect = this.getNodeFromChildren(root.children, 'rect');
    let svgNode;
    if (this.getNodeFromChildren(root.children, 'text') !== null) {
      svgNode = this.parseTextNode(this.getNodeFromChildren(root.children, 'text'));
    }
    const rootNode = new RootNode(root, rect, svgNode);
    return rootNode;
  }

  private parseTextNode(textNode: HTMLElement) {
    if (textNode.innerHTML.includes('TextParagraph')) {
      return this.parseParagraphNode(textNode);
    } else {
      return this.parseBulletPointNode(textNode);
    }
  }

  getNodeFromChildren(children: HTMLCollection, nodeName: string) {
    let node;
    for (let i = 0; i < children.length; i++) {
      if (children[i].nodeName === nodeName) {
        node = children[i];
        break;
      } else {
        node = null;
      }
    }
    return node;
  }


  private parseParagraphNode(textNode: HTMLElement) {
    return new ParagraphNode(new TextNode(textNode), textNode.children[0], textNode.children[0].children);
  }

  private parseBulletPointNode(textNode: HTMLElement) {
    return new ParagraphNode(new TextNode(textNode), textNode, textNode.children);
  }
}
