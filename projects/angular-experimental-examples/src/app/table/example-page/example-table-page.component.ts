import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-table-page.component.html',
  styleUrls: ['./example-table-page.component.scss'],
})
export class ExampleTablePageComponent {
  @HostBinding('class')
  class = 'content content-full-height';

  @Input()
  title!: string;

  @Input()
  sourceCodePath!: string;
}
