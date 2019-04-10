import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef, private renderer:Renderer2) {}

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.changeColor(event.keyCode);
  }

  private changeColor(keycode: number){

    switch(keycode){
      case 40 :
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      break;
      case 37 :
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
      break;
      case 38 :
      this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
      break;
      case 39 :
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
      break;
    }
  }

}
