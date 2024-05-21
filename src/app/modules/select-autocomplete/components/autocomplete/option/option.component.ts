import { Component, ElementRef, Input } from '@angular/core';
import { Observable, fromEvent, mapTo } from 'rxjs';

@Component({
  selector: 'app-option',
  template: `
    <div class="px-1 py-2 cursor-pointer">
      <ng-content></ng-content>
    </div>
  `
})
export class OptionComponent {
  @Input() value!: string;
  click$!: Observable<string>;

  constructor(private host: ElementRef) {}

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

  get element() {  return this.host.nativeElement; }
}
