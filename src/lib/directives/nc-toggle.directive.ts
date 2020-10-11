import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { style, animate, AnimationBuilder, AnimationFactory } from '@angular/animations';

@Directive({
  selector: '[nc-toggle]',
})
export class ToggleDirective implements OnInit{

  @Input('nc-toggle') bloc: any;
  shown: boolean = false;

  constructor(public el: ElementRef, private builder: AnimationBuilder){}

  ngOnInit() {
    this.bloc.style.opacity = 0;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  /**
   * Listen to user click
   */
  @HostListener('click') Click (): void {
    this.shown = !this.shown;
    const myAnimation: AnimationFactory = this.builder.build([
      animate(200, style({opacity: +this.shown}))
    ]);

    // Run the animation
    myAnimation.create(this.bloc).play();
  }


}
