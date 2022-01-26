import { Component, ContentChild, Input } from '@angular/core';
import { SbbxColumnCellDirective } from './column-cell.directive';

@Component({
  selector: 'sbbx-row-group',
  template: '',
})
export class SbbxRowGroupComponent<T> {
  @Input()
  groupWhen!: (index: number, rowData: T) => boolean;

  @Input()
  id!: string;

  @Input()
  justify?: 'left' | 'right';

  @Input()
  cellClass?: string | ((row: T) => string | undefined);

  @ContentChild(SbbxColumnCellDirective)
  columnCellDirective!: SbbxColumnCellDirective<T>;
}
