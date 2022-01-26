import { Component, ContentChild, Input } from '@angular/core';
import { SbbxColumnHeaderDirective } from './column-header.directive';
import { SbbxColumnCellDirective } from './column-cell.directive';
import { SbbxColumnFilterDirective } from './column-filter.directive';

@Component({
  selector: 'sbbx-column',
  template: '',
})
export class SbbxColumnComponent<T> {
  @ContentChild(SbbxColumnHeaderDirective)
  columnHeaderDirective!: SbbxColumnHeaderDirective;

  @ContentChild(SbbxColumnFilterDirective)
  columnFilterDirective!: SbbxColumnFilterDirective;

  @ContentChild(SbbxColumnCellDirective)
  columnCellDirective!: SbbxColumnCellDirective<T>;

  @Input()
  id!: string;

  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  @Input()
  justify?: 'left' | 'right' | 'center';

  @Input()
  width?: string;

  @Input()
  headerClass?: string;

  @Input()
  filterClass?: string;

  @Input()
  cellClass?: string | ((row: T) => string | undefined);

  @Input()
  get groupWithNext(): boolean {
    return this._groupWithNext;
  }

  set groupWithNext(value: unknown) {
    this._groupWithNext = value !== undefined && value !== false;
  }

  private _groupWithNext = false;

  @Input()
  get sortable(): boolean {
    return this._sortable;
  }

  set sortable(value: unknown) {
    this._sortable = value !== undefined && value !== false;
  }

  _sortable = false;

  @Input()
  get sticky(): boolean {
    return this._sticky;
  }

  set sticky(value: unknown) {
    this._sticky = value !== undefined && value !== false;
  }

  private _sticky = false;

  @Input()
  get stickyEnd(): boolean {
    return this._stickyEnd;
  }

  set stickyEnd(value: unknown) {
    this._stickyEnd = value !== undefined && value !== false;
  }

  private _stickyEnd = false;
}
