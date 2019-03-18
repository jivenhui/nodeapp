import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  @Input() text: string;
  @Output() textChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    document.getElementById('text-editor')
    .addEventListener('DOMNodeInserted', ev => {
      const element = ev.target as HTMLElement;
      if (element.tagName === 'SPAN') {
        element.outerHTML = element.innerHTML;
      } else if (element.tagName === 'B' || 'I') {
        if (element.style !== undefined && element.style.fontSize !== undefined) {
        element.style.fontSize = '';
        }
      }
    });
  }

  changeText(textChanged: string) {
    this.textChanged.emit(textChanged);
  }

  ol() {
    document.execCommand('insertOrderedList', false, null);
  }

  ul() {
    document.execCommand('insertUnorderedList', false, null);
  }

  bold() {
    document.execCommand('bold', false, null);
  }

  underscored() {
    document.execCommand('underline', false, null);
  }

  italic() {
    document.execCommand('italic', false, null);
  }
}
