import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAutoCompleteRoutingModule } from "./select-autocomplete-routing.module";
import { SelectAutocompleteComponent } from './select-autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule } from './components/autocomplete/autocomplete.module';


@NgModule({
  declarations: [
    SelectAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectAutoCompleteRoutingModule,
    AutocompleteModule
  ],

})
export class SelectAutocompleteModule { }
