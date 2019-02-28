import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EventParserService} from '../services/event-parser.service';
import {SvgService} from '../services/svg.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ParagraphNode} from '../models/paragraphNode';
import {RootNode} from '../models/rootNode';

@Component({
  selector: 'app-svg2',
  templateUrl: './svg2.component.html',
  styleUrls: ['./svg2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Svg2Component implements OnInit {
  svgDom: Document;
  svgList;
  textAreaString;
  private selectedNode: RootNode;

  constructor(public svgService: SvgService, public eventParser: EventParserService) {
  }

  ngOnInit() {
    this.svgList = this.svgService.getList();
    this.svgDom = this.svgList[0].content;
    this.eventParser.setSvgDom(this.svgDom);
  }

  svgClick(event) {
    const node = this.eventParser.parseEvent(event);
    this.selectedNode = node;
    if (node.svgNode instanceof ParagraphNode) {
      const par = <ParagraphNode> node.svgNode;
      this.handleText(par.tspanList);
    }
  }

  editText(input: string) {
    // Create array of each newLine in textArea
    const textAreaList = input.split('\n');
    if (this.selectedNode.svgNode instanceof ParagraphNode) {
      this.editParagraph(textAreaList);
    }
  }

  editParagraph(textAreaList: string[]) {
    const par = <ParagraphNode> this.selectedNode.svgNode;
    debugger
    par.addText(textAreaList);
  }

  private handleText(tSpanList) {
    let textAreaString = '';
    for (let i = 0; i < tSpanList.length; i++) {
      let test = tSpanList[i];
      while (test.children.length !== 0) {
        if (test.children.length > 1) {
          test = test.children[1];
        } else {
          test = test.children[0];
        }
      }
      let input = test.textContent;
      if (i === tSpanList.length - 1) {
        input = input;
      } else {
        input = input + '\n';
      }
      textAreaString = textAreaString + input;
    }
    this.textAreaString = textAreaString;
  }

  selectSvg(svg) {
    this.svgDom = svg.content;
  }
}
