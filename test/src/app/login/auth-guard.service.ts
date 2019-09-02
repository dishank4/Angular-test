import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginServiceService } from '../core/service/login-service.service';
import { Role } from '../core/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginServiceService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
    if (this.loginService.isUserLogedIn() && localStorage.getItem('role') === Role.Admin){
      return true;
    } else {
      return false;
    }
  }
}
