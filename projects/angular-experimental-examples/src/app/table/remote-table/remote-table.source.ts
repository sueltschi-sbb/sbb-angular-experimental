import { TableData, TableDataService } from '../table-data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SbbxRemoteTableDataSource } from 'angular-experimental';

@Injectable()
export class RemoteTableDataSource extends SbbxRemoteTableDataSource<TableData, string> {
  constructor(private tableDataService: TableDataService) {
    super();
  }

  protected execLoad(
    sort?: { column: string; direction: 'asc' | 'desc' },
    page?: { pageSize: number; pageIndex: number },
    filter?: string
  ): Observable<{ data: TableData[]; length: number; pageIndex: number }> {
    return this.tableDataService.fetchTableDataRemote(sort, page, filter);
  }
}
