import { Injectable } from "@angular/core";
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  isLoggedIn$: Observable<boolean>
  private _isLoggedIn$: BehaviorSubject<boolean>
  private _userData: any;

  constructor() {
    this._isLoggedIn$ = new BehaviorSubject(false);
    this.isLoggedIn$ = this._isLoggedIn$.asObservable();
    this._userData = {};
  }

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
    this._isLoggedIn$.next(true);
    return of(this.userData);
  }
  public get userData() {
    return this._userData;
  }

  public get isLoggedIn():boolean {
    return this._isLoggedIn$.getValue();
  }

  clearUserData() {
    this._isLoggedIn$.next(false);
    this._userData = {};
  }
}
