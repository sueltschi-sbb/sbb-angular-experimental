import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SbbxTableModule } from 'angular-experimental';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleTableComponent } from './table/simple-table/simple-table.component';
import { FilterableTableComponent } from './table/filterable-table/filterable-table.component';
import { FormattedTableComponent } from './table/formatted-table/formatted-table.component';
import { GroupedTableComponent } from './table/grouped-table/grouped-table.component';
import { PagedTableComponent } from './table/paged-table/paged-table.component';
import { StickyTableComponent } from './table/sticky-table/sticky-table.component';
import { FullFeatureTableComponent } from './table/full-feature-table/full-feature-table.component';
import { RemoteTableComponent } from './table/remote-table/remote-table.component';
import { ExampleTablePageComponent } from './table/example-page/example-table-page.component';
import { SbbHeaderLeanModule } from '@sbb-esta/angular/header-lean';
import { SbbSidebarModule } from '@sbb-esta/angular/sidebar';
import { SbbAccordionModule } from '@sbb-esta/angular/accordion';
import { SbbIconModule } from '@sbb-esta/angular/icon';
import { SbbInputModule } from '@sbb-esta/angular/input';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { SbbSearchModule } from '@sbb-esta/angular/search';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    PagedTableComponent,
    GroupedTableComponent,
    FormattedTableComponent,
    FilterableTableComponent,
    StickyTableComponent,
    FullFeatureTableComponent,
    RemoteTableComponent,
    ExampleTablePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SbbHeaderLeanModule,
    SbbInputModule,
    SbbSidebarModule,
    SbbIconModule,
    SbbAccordionModule,
    SbbButtonModule,
    SbbSearchModule,
    SbbxTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
