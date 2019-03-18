import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
