import { Component, OnInit, HostListener ,ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-host-listner',
  templateUrl: './host-listner.component.html',
  styleUrls: ['./host-listner.component.css']
})
export class HostListnerComponent implements OnInit {

  @HostListener('click') onclick() {
    alert("HostListner Clicked");
  }
  @HostListener('mouseenter') onmouseover(){
    this.changebgColor('red');
    console.log("HostListner Mouseover");
  }
  @HostListener('mouseleave') onmouseleave(){
    this.changebgColor('black');
    console.log("HostListner Mouseover");
  }

  constructor(private elemetRef:ElementRef, private renderer:Renderer) { }


  changebgColor(color:string){
    this.renderer.setElementStyle(this.elemetRef.nativeElement,'color',color)
  }
  hostListnerTitle = "Welcome to HostListner Concept";

  

  ngOnInit() {
  }

}
