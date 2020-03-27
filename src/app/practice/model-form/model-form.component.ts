import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  modelForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.minLength(6)]
  });

  ngOnInit() {
    this.modelForm.statusChanges.subscribe(data2 => {
     // console.log("statuschange() :",data2)
    });
    this.modelForm.valueChanges
    .subscribe(data => {
     // console.log("valuechange() :",data)
    });
  }

  submitmodelForm() {
    console.log('ModelForm : ', this.modelForm.value);
  }

}
