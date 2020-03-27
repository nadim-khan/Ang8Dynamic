import { Component, HostListener } from '@angular/core';
import { GlobalService } from './shared/GlobalServices/global.service';
import { Router } from '@angular/router';
import { UserService } from './shared/GlobalServices/user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic App';
  sidebar = false;
  modeName = 'Dark';
  showLogin = true;
  showsignup = true;
  showsignout = false;
  checked = false;
  getModeCss;
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
   ) {}
  visitHome() {
    this.router.navigateByUrl('');
  }
  sidenavToggle() {
    alert()
    this.sidebar = !this.sidebar;
  }
  toggleMode() {
    this.checked = !this.checked;
    if (this.checked === true) {
      this.modeName = 'Dark';
      this.getModeCss = {
        darkMode: true
      };
    } else {
      this.modeName = 'Light';
      this.getModeCss = {
        darkMode: false
      };
    }
    this.globalService.modeChecked = this.checked;
    this.globalService.modeName = this.modeName;
  }
  async login(): Promise<void> {
    this.userService.login();
    await this.authService.signIn();
  }
  signup() {
    this.router.navigateByUrl('/home');
  }

  signout() {
    this.authService.signOut();
    this.router.navigateByUrl('/home');
  }
}
