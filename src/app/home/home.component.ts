import { FormData } from './../shared/modelInterface/form-data';
import { ModelForm } from '../shared/model/model-form';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from '../shared/GlobalServices/global.service';
import { UserService } from '../shared/GlobalServices/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() formData: FormData[] = ModelForm;
  dynamicForm: FormGroup;
  submitted = false;
  formVal = [];
  selected = new FormControl(0);

  constructor(private userService: UserService) {}

  ngOnInit() {
    const formGroup = {};
    console.log(this.formData);
    this.formData.forEach(formControl => {
      this.formVal = formControl.Controls;
      this.formVal.forEach(data => {
        formGroup[data.Field] = new FormControl( '') ;
      });
    });
    this.dynamicForm = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
    console.log('Submitted Data : ', this.dynamicForm.value);
  }
  toggleTab() {
    this.selected = new FormControl(1);
  }

}
