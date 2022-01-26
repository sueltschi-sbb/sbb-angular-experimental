import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { SbbSort } from '@sbb-esta/angular/table';
import { SbbxColumnComponent } from './column/column.component';
import { SbbTableFilter } from '@sbb-esta/angular/table/table/table-data-source';
import { SbbPaginator } from '@sbb-esta/angular/pagination';
import { SbbxRowGroupComponent } from './column/row-group.component';
import { CollectionViewer } from '@angular/cdk/collections/collection-viewer';
import { Observable } from 'rxjs';

export interface SbbxTableDataSource<T, F extends SbbTableFilter | string = string> {
  connect(collectionViewer: CollectionViewer): Observable<T[]>;

  disconnect(collectionViewer: CollectionViewer): void;

  get sort(): SbbSort | null;

  set sort(sort: SbbSort | null);

  get paginator(): SbbPaginator | null;

  set paginator(paginator: SbbPaginator | null);

  set filter(filter: F);

  get filteredData(): T[];

  loading?: Observable<boolean>;
}

@Component({
  selector: 'sbbx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class SbbxTableComponent<T, F extends SbbTableFilter | string> implements OnInit {
  @Output()
  rowClick = new EventEmitter<T>();

  @Input()
  dataSource!: SbbxTableDataSource<T, F>;

  @Input()
  pageSize?: number;

  @Input()
  loading = false;

  @Input()
  noDataText?: string;

  @Input()
  sortDirection: 'asc' | 'desc' = 'asc';

  @Input()
  sortColumn = '';

  @Input()
  get stickyHeader(): boolean {
    return this._stickyHeader;
  }

  set stickyHeader(value: unknown) {
    this._stickyHeader = value !== undefined && value !== false;
  }

  private _stickyHeader = false;

  @ContentChildren(SbbxColumnComponent)
  columns?: QueryList<SbbxColumnComponent<T>>;

  @ContentChild(SbbxRowGroupComponent)
  rowGroup?: SbbxRowGroupComponent<T>;

  @ViewChild(SbbPaginator, { static: true }) paginator?: SbbPaginator;

  @ViewChild(SbbSort, { static: true }) sort?: SbbSort;

  get columnNames(): string[] {
    return this.columns?.map((c) => c.id) ?? [];
  }

  get hasFilterColumns(): boolean {
    return this.columns?.some((c) => !!c.columnFilterDirective) ?? false;
  }

  get filterColumnNames(): string[] {
    return this.columns?.map((c) => `${c.id}-filter`) ?? [];
  }

  get filterColumns(): Iterable<SbbxColumnComponent<T>> {
    return this.columns?.filter((c) => !!c.columnFilterDirective) ?? [];
  }

  ngOnInit() {
    if (this.paginator && this.pageSize) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  getCellClass(cellClass: undefined | string | ((element: T) => string | undefined), element: T) {
    if (!cellClass) {
      return undefined;
    }

    return typeof cellClass === 'string' ? cellClass : cellClass(element);
  }

  handleRowClick(row: T) {
    this.rowClick.next(row);
  }
}
