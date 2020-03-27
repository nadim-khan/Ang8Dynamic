import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { GlobalService } from '../../shared/GlobalServices/global.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges {
  steps = [
    {desc: 'Creating a component'},
    {desc: 'Rendering a component'},
    {desc: 'Creating and Rendering its child component'},
    {desc: 'Checking data-bound properties'},
    {desc: 'Destroying and reovinfg it from DOM'},
  ];
  cData: string;
  msg: string;
  myArr: any = ['Angular', 'Java', 'JavaScript'];

  constructor( private msgService: GlobalService) {
    console.log('[LifecycleComponent] : Constructor Called');
    this.msg = this.msgService.getMessageLifecycle();
    console.log(this.msg);
  }
  ngOnChanges() {
    console.log('[LifecycleComponent] : ngOnChanges Called');
  }

  ngOnInit() {
    console.log('[LifecycleComponent] : ngOnInit Called');
  }

  textBind(value: any) {
    this.cData = value;
    alert(this.msg);
  }
  addValue() {
    this.myArr.push('VueJS');
  }

}
