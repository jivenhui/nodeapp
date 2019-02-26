import {Component, OnInit, Sanitizer, ViewEncapsulation} from '@angular/core';
import {SvgService} from '../services/svg.service';
import {DomSanitizer} from '@angular/platform-browser';
import * as d3 from 'd3';
import {SvgEditorService} from '../svgEditor/svg-editor.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ITagExclusionDescriptor as string} from 'tslint/lib/rules/completed-docs/tagExclusion';
import {EventParserService} from '../services/event-parser.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnInit {
  svgDom: Document;
  svgList;
  text;
  selected;
  textAreaString;
  private selectedNode: HTMLElement | null;

  constructor(public svgService: SvgService, public sanitizer: DomSanitizer, public eventParser: EventParserService) {
  }

  ngOnInit() {
    this.svgList = this.svgService.getList();
    this.svgDom = this.svgList[0].content;
    this.eventParser.setSvgDom(this.svgDom);
  }

  svgClick(event) {
    const node = this.eventParser.parseEvent(event);
    debugger
    // Search for nearest parent node with ID
    let nodeId: string;
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].id !== '') {
        nodeId = event.path[i].id;
        break;
      }
    }
    // Search for clicked element in svgDom variable
    this.selectedNode = this.svgDom.getElementById(nodeId);
    this.handleEdit(this.selectedNode);
  }

  handleEdit(nodeId) {
    for (let i = 0; i < nodeId.childNodes.length; i++) {
      if (nodeId.childNodes[i].nodeName === 'text') {
        this.handleText(nodeId.childNodes[i]);
      }
    }
  }

  editText(input: string) {
    // Create array of each newLine in textArea
    const textAreaList = input.split('\n');
    for (let i = 0; i < this.selectedNode.children.length; i++) {
      if (this.selectedNode.children[i].classList.contains('TextShape') && this.selectedNode.children[i].children[0].classList.contains('ListItem')) {
        this.editBulletPoints(textAreaList, i);
      } else if (this.selectedNode.children[i].classList.contains('TextShape') && this.selectedNode.children[i].children[0].classList.contains('TextParagraph')) {
        this.editParagraph(textAreaList, i);
      }
    }
  }

  editBulletPoints(textAreaList: string[], i: number) {
    // Search for text nodes
    if (this.selectedNode.children[i].nodeName === 'text') {
      // Create deep copy of tspan to append and remove all existing tspan's
      debugger;
      let nodeClone = this.selectedNode.children[i].children[0].cloneNode(true);
      this.removeNodeContent(this.selectedNode.children[i]);
      // loop trough edited text from the textArea
      for (let d = 0; d < textAreaList.length; d++) {
        // deep copy of clone for each element in textArea array
        const nodeToEdit: any = nodeClone.cloneNode(true);
        // Search for y in all tspan's and change y value
        for (let a = 0; a < nodeToEdit.childNodes.length; a++) {
          if (nodeToEdit.childNodes[a].classList.contains('TextPosition')) {
            for (let c = 1; c < nodeToEdit.childNodes[a].attributes.length; c++) {
              if (nodeToEdit.childNodes[a].attributes[c].name === 'y' && d !== 0) {
                nodeToEdit.childNodes[a].attributes[c].nodeValue = Number(nodeToEdit.childNodes[a].attributes[c].nodeValue) + 663;
              }
              // set clone with edited y value
              nodeClone = nodeToEdit;
            }
          }
        }
        nodeToEdit.childNodes[1].lastChild.textContent = textAreaList[d];
        this.selectedNode.children[i].appendChild(nodeToEdit);
      }
    }
  }

  private editParagraph(textAreaList: string[], i: number) {
    // Search for text nodes
    if (this.selectedNode.children[i].nodeName === 'text') {
      // Create deep copy of tspan to append and remove all existing tspan's
      let nodeClone = this.selectedNode.children[i].children[0].children[0].cloneNode(true);
      this.removeNodeContent(this.selectedNode.children[i].children[0]);
      // loop trough edited text from the textArea
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
        this.selectedNode.children[i].children[0].appendChild(nodeToEdit);
      }
    }
  }

  removeNodeContent(node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }

  private handleText(textNode) {
    textNode.classList.add('selected');
    let textNodes;
    if (textNode.children[0].classList.contains('ListItem')) {
      textNodes = textNode.children;
    } else {
      textNodes = textNode.children[0].children;
    }
    let textAreaString = '';
    for (let i = 0; i < textNodes.length; i++) {
      let test = textNodes[i];
      while (test.children.length !== 0) {
        if (test.children.length > 1) {
          test = test.children[1];
        } else {
          test = test.children[0];
        }
      }
      let input = test.textContent;
      input = input + '\n';
      textAreaString = textAreaString + input;
    }
    this.textAreaString = textAreaString;
  }

  selectSvg(svg) {
    this.svgDom = svg.content;
  }
}
