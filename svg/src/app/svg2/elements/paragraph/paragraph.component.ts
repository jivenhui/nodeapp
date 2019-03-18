import { Component, OnInit, Input } from '@angular/core';
import { RootElement } from 'src/app/models/rootElement';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input() text: string;
  @Input() selectedElement: RootElement;

  ngOnInit() {
  }

  textChanged(text: string) {
    this.selectedElement.svgElement.editContent(text);
  }
}
