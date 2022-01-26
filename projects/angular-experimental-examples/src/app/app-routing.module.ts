import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTableComponent } from './table/simple-table/simple-table.component';
import { PagedTableComponent } from './table/paged-table/paged-table.component';
import { GroupedTableComponent } from './table/grouped-table/grouped-table.component';
import { FormattedTableComponent } from './table/formatted-table/formatted-table.component';
import { FilterableTableComponent } from './table/filterable-table/filterable-table.component';
import { StickyTableComponent } from './table/sticky-table/sticky-table.component';
import { FullFeatureTableComponent } from './table/full-feature-table/full-feature-table.component';
import { RemoteTableComponent } from './table/remote-table/remote-table.component';

const routes: Routes = [
  {
    path: 'table',
    children: [
      { path: 'simple', component: SimpleTableComponent },
      { path: 'paged', component: PagedTableComponent },
      { path: 'grouped', component: GroupedTableComponent },
      { path: 'formatted', component: FormattedTableComponent },
      { path: 'filterable', component: FilterableTableComponent },
      { path: 'sticky', component: StickyTableComponent },
      { path: 'full', component: FullFeatureTableComponent },
      { path: 'remote', component: RemoteTableComponent },
    ],
  },
  { path: '', redirectTo: '/table/simple', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
