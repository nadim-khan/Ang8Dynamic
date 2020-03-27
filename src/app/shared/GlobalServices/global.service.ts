import { Injectable } from '@angular/core';
import { Users } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  modeName;
  modeChecked: boolean;
  userUrl = '../../assets/data/users.json';

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl);
  }
  getMessageLifecycle(): string {
 return 'Lifecycle Message';
  }

}
