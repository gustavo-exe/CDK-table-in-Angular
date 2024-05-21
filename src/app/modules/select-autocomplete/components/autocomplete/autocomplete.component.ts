import { Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { OptionComponent } from './option/option.component';
import { merge, switchMap } from 'rxjs';
import { AutocompleteContentDirective } from './autocomplete-content-directive.directive';

@Component({
  selector: 'app-autocomplete',
  template: `
    <ng-template #root>
      <div class=" border border-gray-400 bg-white  rounded-xl shadow-sm   max-h-28  overflow-auto w-full min-w-20 mt-4">
      <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'appAutocomplete'
})
export class AutocompleteComponent {
  @ViewChild('root') rootTemplate!: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  content!: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option:any) => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
