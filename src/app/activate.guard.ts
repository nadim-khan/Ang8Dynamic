import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/GlobalServices/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor( private userService: UserService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.accessible) {
      return true;
    } else {
      if (confirm('You dont have permission untill you log In,\\n\\n Press Ok to Log In')) {
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/home');
      }
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
