import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color = 'red';
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    // En cada evento de keyup vamos a hacer un uppercase al valor de nuestro input
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

}
