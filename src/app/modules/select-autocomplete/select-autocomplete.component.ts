import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
})
export class SelectAutocompleteComponent  {
  countries = [
    { id: 2, label: 'United States', alphacode: 'us' },
    { id: 3, label: 'Canada', alphacode: 'ca' },
    { id: 4, label: 'United Kingdom', alphacode: 'uk' },
    { id: 5, label: 'Germany', alphacode: 'de' },
    { id: 6, label: 'France', alphacode: 'fr' },
    { id: 7, label: 'Italy', alphacode: 'it' },
    { id: 8, label: 'Spain', alphacode: 'es' },
    { id: 9, label: 'Australia', alphacode: 'au' },
    { id: 10, label: 'Brazil', alphacode: 'br' }
  ];

  formAutComplete!:FormGroup;

  constructor(private fb:FormBuilder){
    this.formAutComplete = this.fb.group({
      label: [null],
      id: [null],
      alphacode: [null]
    })
  }

  get alphacode(){
    return this.formAutComplete.get('alphacode');
  }

  get label(){
    return this.formAutComplete.get('label');
  }
}


