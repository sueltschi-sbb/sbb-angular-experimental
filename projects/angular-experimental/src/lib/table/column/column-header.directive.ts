import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sbbxColumnHeader]',
})
export class SbbxColumnHeaderDirective {
  constructor(public readonly template: TemplateRef<unknown>) {}
}
