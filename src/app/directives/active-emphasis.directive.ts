import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Directive({
  selector: '[activeEmphasis]'
})
export class ActiveEmphasisDirective implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
  }
}
