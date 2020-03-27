import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit {
  @ViewChild('name', {static: false}) elName: ElementRef;
  @ViewChild('state', {static: false}) elState: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    this.elName.nativeElement.style.background = 'black';
    this.elName.nativeElement.style.color = 'white';
    this.elState.nativeElement.style.background = 'yellow';
    this.elState.nativeElement.style.color = 'black';
  }


}
