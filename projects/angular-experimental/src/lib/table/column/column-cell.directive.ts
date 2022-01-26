import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sbbxColumnCell]',
})
export class SbbxColumnCellDirective<T> {
  constructor(public readonly template: TemplateRef<T>) {}
}
