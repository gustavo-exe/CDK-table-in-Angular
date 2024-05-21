import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAutocompleteComponent } from './select-autocomplete.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SelectAutocompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectAutoCompleteRoutingModule { }
