import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollDetector]'
})
export class ScrollDetectorDirective {
  @Output() reachedBottom = new EventEmitter<void>();

  @HostListener('window:scroll', [])
  onScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos === max) {
      this.reachedBottom.emit();
    }
  }
}