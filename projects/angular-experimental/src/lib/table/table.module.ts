import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbbxTableComponent } from './table.component';
import { SbbxColumnComponent } from './column/column.component';
import { SbbxColumnHeaderDirective } from './column/column-header.directive';
import { SbbxColumnFilterDirective } from './column/column-filter.directive';
import { SbbxColumnCellDirective } from './column/column-cell.directive';
import { SbbxRowGroupComponent } from './column/row-group.component';
import { SbbTableModule } from '@sbb-esta/angular/table';
import { SbbPaginationModule } from '@sbb-esta/angular/pagination';
import { SbbLoadingModule } from '@sbb-esta/angular/loading';

@NgModule({
  declarations: [
    SbbxTableComponent,
    SbbxColumnComponent,
    SbbxColumnHeaderDirective,
    SbbxColumnFilterDirective,
    SbbxColumnCellDirective,
    SbbxRowGroupComponent,
  ],
  imports: [CommonModule, SbbTableModule, SbbPaginationModule, SbbTableModule, SbbLoadingModule],
  exports: [
    SbbxTableComponent,
    SbbxColumnComponent,
    SbbxColumnHeaderDirective,
    SbbxColumnFilterDirective,
    SbbxColumnCellDirective,
    SbbxRowGroupComponent,
  ],
})
export class SbbxTableModule {}
