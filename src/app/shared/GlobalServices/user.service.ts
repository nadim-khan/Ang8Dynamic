import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged = false;
  accessible = false;
  loggedUser;
  allUserList = [];
  constructor(private globalService: GlobalService, private router: Router) { }

  isAdminRights() {
    this.accessible = true;
    this.logged = false;
  }

  login() {
    this.globalService.getUsers()
    .subscribe(data => {
      this.allUserList = data;
      console.log(this.loggedUser);
      console.log(data);
      data.forEach(detail => {
        if ( this.loggedUser.username === detail.username || this.loggedUser.username === detail.email) {
          if ( this.loggedUser.loginPassword === detail.password) {
            alert('Successful Login');
            this.isAdminRights();
            this.router.navigateByUrl('/home');
          }
        }
      });
    });
    this.logged = true;
  }
}
