import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {
 

  constructor( private elementRef:ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color='red';
  }
  change(changedColor:string){
    this.elementRef.nativeElement.style.color=changedColor;
  }

}
