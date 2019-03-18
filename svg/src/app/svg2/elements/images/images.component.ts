import { Component, OnInit, Input } from '@angular/core';
import { RootElement } from 'src/app/models/rootElement';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() selectedElement: RootElement;
  
  constructor() { }

  ngOnInit() {
    debugger
    console.log(this.selectedElement.svgElement.getContent())
  }

  imageChanged() {

  }

}
