import { Component } from '@angular/core';
import { GlobalService } from './shared/GlobalServices/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicApp';
  modeName = 'Dark';
  checked= false;
  getModeCss;
  constructor(private globalService:GlobalService){}
  toggleMode(){
    this.checked = !this.checked;
    if(this.checked === true){
      this.modeName = 'Dark';
      this.getModeCss={
        'darkMode':true
      }
    }else{
      this.modeName = 'Light';
      this.getModeCss={
        'darkMode':false
      }
    }
    this.globalService.modeChecked=this.checked;
    this.globalService.modeName=this.modeName;
  }
}
