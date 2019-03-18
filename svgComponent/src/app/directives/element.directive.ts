import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic]',
  exportAs: 'dynamicdirective'
})
export class ElementDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
