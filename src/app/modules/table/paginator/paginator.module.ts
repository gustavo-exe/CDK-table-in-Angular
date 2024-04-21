import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { FormsModule } from '@angular/forms';
import { FetchPages } from './fetch.pages.pipe';



@NgModule({
  declarations: [
    PaginatorComponent, FetchPages
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
