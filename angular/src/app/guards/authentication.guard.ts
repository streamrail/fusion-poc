import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { UserService } from "../services/user/user.service";
import { GlobalService } from "../services/global/global.service";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _globalService: GlobalService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authToken = this._authService.authToken;
    if (authToken) {
      return this._userService.fetchUserData().pipe(
        map(() => {
          return true;
        }),
        catchError(() => of(this.disablePage(state.url)))
      );
    } else {
      return this.disablePage(state.url);
    }
  }
  
  disablePage(url) {
    const options = !this._isBaseRoute(url)
      ? { queryParams: { returnToUrl: url } }
      : {};
    this._globalService.redirectToPage("/login", options);
    return false;
  }

  _isBaseRoute(url): boolean {
    return url === "/" || !url;
  }
}
