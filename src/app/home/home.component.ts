import { FormData } from './../shared/modelInterface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() formData: FormData[];
  dynamicForm: FormGroup;
  submitted: boolean;
  formVal=[];
  selected = new FormControl(0);

  constructor() {}

  ngOnInit() {
    const formGroup = {};
    this.formData.forEach(formControl => {
      this.formVal=formControl.Controls;
      this.formVal.forEach(data =>{
        formGroup[data.Field] = new FormControl( '' ) ;
      })
    });
    this.dynamicForm = new FormGroup(formGroup);
  }

  submitForm() {
    console.log("Submitted Data : ",this.dynamicForm.value);
  }
  toggleTab(){
    this.selected = new FormControl(1);
  }

}
