import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() parentData: string;
  @Input() arrList: any[];
  @Output() childEvent = new EventEmitter();
  currValue: string;
  prevValue: string;


  constructor() {
    console.log('[Child LifecycleComponent] : Child Constructor Called');
  }
  ngOnChanges(changes: any) {
    console.log('Child ngOnChanges');
    // tslint:disable-next-line: forin
    for (const propertyName in changes) {
      const change = changes[propertyName];
      this.currValue = change.currentValue;
      this.prevValue = change.previousValue;
      console.log(propertyName + ': Current Value : [ ' + this.currValue + '] Previous Value : [ ' + this.prevValue + ']');
    }
  }

  ngOnInit() {
    console.log('[Child LifecycleComponent] : Child ngOnInit Called');
  }

  ngDoCheck() {
    console.log('[Child LifecycleComponent] : Child ngDoCheck Called');
  }
  ngOnDestroy() {
    console.log('===>[Child LifecycleComponent] : Child ngOnDestroy Called');
  }

}
