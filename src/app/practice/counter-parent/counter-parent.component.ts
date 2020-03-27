import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
  // tslint:disable-next-line: typedef-whitespace
  @ViewChild(CounterComponent, {static: false}) counterCOmponent: CounterComponent;

  constructor() { }
  increase() {
    this.counterCOmponent.increaseByOne();
  }
  decrease() {
    this.counterCOmponent.decreaseByOne();
  }

  ngOnInit() {
  }

}
