import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sbbxColumnFilter]',
})
export class SbbxColumnFilterDirective {
  constructor(public readonly template: TemplateRef<unknown>) {}
}
