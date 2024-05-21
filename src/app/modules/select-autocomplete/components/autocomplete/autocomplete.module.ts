import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from './option/option.component';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteContentDirective } from './autocomplete-content-directive.directive';
import { AutocompleteDirective } from './autocomplete.directive';


const declarations = [
  OptionComponent,
  AutocompleteComponent,
  AutocompleteContentDirective,
  AutocompleteDirective,
]
@NgModule({
  declarations: declarations,
  imports: [
    CommonModule
  ],
  exports: [declarations]
})
export class AutocompleteModule { }
