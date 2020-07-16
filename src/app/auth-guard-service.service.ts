import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
   let url: string=state.url;
   console.log("in");
   return this.validateLogin(url);
  }
  validateLogin(url: string): boolean {
    if(this.userService.validlogin){
      console.log("valid login");
      return true;
    }
    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/app']);
    return false;
  }
  }
  


