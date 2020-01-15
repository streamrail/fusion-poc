import { Injectable } from "@angular/core";
import { of, Observable } from 'rxjs';
import { ApiService } from '@ironsrc/fusion-ui';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _userData: any;

  constructor(
  ) {
    this._userData = null;
  }

  fetchUserData(refresh?: boolean): Observable<any>{
    if (this._userData === null) {
      this._userData = {id: '123', username: 'test', name: 'Test'}; // simulate get user from server
    }
    return of(this._userData);
  }
  public get userData() {
    return this._userData;
  }

  clearUserData() {
    this._userData = null;
  }
}
