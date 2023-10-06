import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const elementOffset = this.el.nativeElement.getBoundingClientRect().top;
    const triggerPosition = elementOffset - window.innerHeight + 100; // Adjust this value as needed

    if (scrollPosition >= triggerPosition) {
      this.renderer.addClass(this.el.nativeElement, 'visible');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'visible');
    }
  }
}
