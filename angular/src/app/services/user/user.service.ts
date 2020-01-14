import { Injectable } from "@angular/core";
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _userData: any;
  private _fetchUserDataSubject: Observable<any>;

  constructor() {
    this._userData = null;
  }

  fetchUserData(refresh?: boolean) {
    console.log('fetchUserData');
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
    if (this._userData === null) {
      this._userData = {id: '123', username: 'test', name: 'Test'}; // simulate get user from server
    }
    return of(this._userData);
  }
  public get userData() {
    return this._userData || {};
  }

  clearUserData() {
    this._userData = {};
  }
}
