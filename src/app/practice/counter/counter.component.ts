import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message;
  count = 0;

  constructor() {

  }

  increaseByOne() {
    this.count = this.count + 1;
    this.message = 'Counter : ' + this.count;
  }
  decreaseByOne() {
    this.count = this.count - 1;
    this.message = 'Counter : ' + this.count;
  }

  ngOnInit() {
  }

}
