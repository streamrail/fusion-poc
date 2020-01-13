import { Injectable } from "@angular/core";
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  private _userData: any = {};

  constructor() {}

  fetchUserData(refresh?: boolean) {
    // if (refresh || Object.keys(this._userData).length === 0) {
    //   const options: ApiRequestOptions = {
    //     responseType: ApiResponseType.Json,
    //     cache: CacheType.Application,
    //     retryStrategy: { maxRetryAttempts: 0 }
    //   };
    //   this._fetchUserDataSubject = this._apiService.get(API_URL, options).pipe(
    //     tap((response: { userData: any }) => {
    //       this._userData = response.userData;
    //       this._fetched = true;
    //       return this._userData;
    //     }),
    //     catchError(err => {
    //       this.clearUserData();
    //       return observableThrowError(err);
    //     })
    //   );
    //   return this._fetchUserDataSubject;
    // } else {
    //   return this._fetchUserDataSubject;
    // }
    this._userData = {username: 'test'};
    this.isLoggedIn.next(true);
    return of(this.userData);
  }
  public get userData() {
    return this._userData;
  }

  clearUserData() {
    this.isLoggedIn.next(false);
    this._userData = {};
  }
}
