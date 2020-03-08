import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeColorDirective }  from '../change-color.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css']
})
export class ParentColorComponent implements OnInit {
  @ViewChild(ChangeColorDirective,{static: false}) changeColorDirective:ChangeColorDirective;

  constructor() { }

  ngOnInit() {
  }
  changeColor(color:string){
    this.changeColorDirective.change(color);
  }

}
