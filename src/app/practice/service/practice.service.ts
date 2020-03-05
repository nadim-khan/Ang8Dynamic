import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  constructor() { }

  getDate(){
    console.log("Practice service called")
    return new Date();
  }
}
