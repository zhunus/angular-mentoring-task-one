import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { differenceInDays } from 'date-fns';

@Directive({
  selector: '[appHighlightNew]'
})
export class HighlightNewDirective implements OnChanges {
  @Input('appHighlightNew')
  createdDate: Date;

  constructor(private el: ElementRef) {
  }

  private addBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

  ngOnChanges(): void {
    const currentDate = new Date();
    const diff = differenceInDays(currentDate, this.createdDate);
    if (this.createdDate < currentDate && diff < 14) {
      this.addBorder('var(--success)');
    }
    if (this.createdDate > currentDate) {
      this.addBorder('var(--blue)');
    }
  }
}
