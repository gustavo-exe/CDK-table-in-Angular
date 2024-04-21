import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { PaginatorModule } from './paginator/paginator.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    CdkTableModule,
    PaginatorModule
  ]
})
export class TableModule { }
