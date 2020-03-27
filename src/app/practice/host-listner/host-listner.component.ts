import { Component, OnInit, HostListener , ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-host-listner',
  templateUrl: './host-listner.component.html',
  styleUrls: ['./host-listner.component.css']
})
export class HostListnerComponent implements OnInit {

  // tslint:disable-next-line: deprecation
  constructor(private elemetRef: ElementRef, private renderer: Renderer) { }
  hostListnerTitle = 'Welcome to HostListner Concept';

  @HostListener('click') onclick() {
    alert('HostListner Clicked');
  }
  @HostListener('mouseenter') onmouseover() {
    this.changebgColor('red');
    console.log('HostListner Mouseover');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.changebgColor('black');
    console.log('HostListner Mouseover');
  }


  changebgColor(color: string) {
    this.renderer.setElementStyle(this.elemetRef.nativeElement, 'color', color );
  }
  ngOnInit() {
  }

}
