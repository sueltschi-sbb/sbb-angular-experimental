import { Component } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular/table';
import { TableData, TableDataService } from '../table-data.service';

@Component({
  selector: 'app-sticky-table',
  templateUrl: './sticky-table.component.html',
  styleUrls: ['./sticky-table.component.scss'],
})
export class StickyTableComponent {
  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  constructor(private tableDataService: TableDataService) {
    this.dataSource.data = this.tableDataService.data;
  }
}
