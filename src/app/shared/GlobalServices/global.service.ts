import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  modeName;
  modeChecked:boolean;

  constructor() { }
}
