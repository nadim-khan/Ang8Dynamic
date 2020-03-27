import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/GlobalServices/user.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }
  loginData = this.fb.group({
    username: ['', Validators.required],
    loginPassword: ['', Validators.required]
  });
  login() {
  this.userService.loggedUser = this.loginData.value;
  this.userService.login();
  }
  ngOnInit() {
  }

}
