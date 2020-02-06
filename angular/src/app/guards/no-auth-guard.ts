import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: "root"
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authToken = this._authService.authToken;
    if (authToken) {
      return false
    } else {
      return true;
    }
  }
}
