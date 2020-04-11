import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[activeEmphasis]'
})
export class ActiveEmphasisDirective {
  @Input() activeEmphasis: string;

  @HostListener('click') setAsActive() {
    let parent: HTMLElement = this.renderer.parentNode(this.element.nativeElement);
    let child: HTMLElement = parent.querySelector('.' + this.activeEmphasis);
    
    if (child)
      this.renderer.removeClass(child, this.activeEmphasis);
    
      this.renderer.addClass(this.element.nativeElement, this.activeEmphasis);
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
