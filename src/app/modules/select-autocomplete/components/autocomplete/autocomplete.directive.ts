import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { NgControl } from '@angular/forms';
import { fromEvent, takeUntil } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective implements OnInit {

  @Input() appAutocomplete!: AutocompleteComponent;
  private overlayRef!: OverlayRef | null;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private ngControl: NgControl,
    private vcr: ViewContainerRef,
    private overlay: Overlay,
  ) {
  }

  get control() {
    return this.ngControl.control;
  }

  get origin() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    fromEvent(this.origin, 'focus').subscribe(() => {
      this.openDropdown();

      this.appAutocomplete.optionsClick()
        .pipe(takeUntil(this.overlayRef!.detachments()))
        .subscribe(( value ) => {
          this.control?.setValue(value);
          this.close();
        });
    });
  }



openDropdown() {
  this.overlayRef = this.overlay.create({
    width: this.origin.offsetWidth,
    backdropClass: '',
    scrollStrategy: this.overlay.scrollStrategies.reposition(),
    positionStrategy: this.getOverlayPosition()
  });

  const template = new TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
  this.overlayRef.attach(template);
}

private close() {
  this.overlayRef?.detach();
  this.overlayRef = null;
}

private getOverlayPosition() {
  const positions = [
    new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    )
  ];

  return this.overlay
    .position()
    .flexibleConnectedTo(this.origin)
    .withPositions(positions)
    .withFlexibleDimensions(false)
    .withPush(false);
}

}
