import { Injectable } from '@angular/core';
import { ApiService, ApiResponseType } from '@ironsrc/fusion-ui';
import { UserService } from '../user/user.service';

import { of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private _authToken: string;
    private _authTokenKey: string;
    public isLoggedIn: BehaviorSubject<boolean>

    constructor(
        private _apiService: ApiService,
        private _userService: UserService
    ) {
        this._authTokenKey = 'connectAuthService';
        this._authToken = localStorage.getItem(this._authTokenKey);
        this.isLoggedIn = new BehaviorSubject(this._authToken !== null);
    }

    public get authToken() {
        return this._authToken;
    }

    public login(username, password) {
        const apiUrl = `https://partners.streamrail.com/api/v2/login`;
        const formData: FormData = new FormData();
        formData.append('username', 'yoni@streamrail.com');
        formData.append('password', '1234');
        return this._apiService
            .post(
                apiUrl,
                formData,
                {responseType: ApiResponseType.Json, headers: {Authorization: ''}}
            )
            .pipe(
                tap(tokenData => {
                    localStorage.setItem(this._authTokenKey, JSON.stringify(tokenData));
                    this._authToken = tokenData;
                    this.isLoggedIn.next(true);
                })
            );
    }

    public logout() {
        localStorage.removeItem(this._authTokenKey);
        this._authToken = '';
        this._userService.clearUserData();
        setTimeout(() => {
            this.isLoggedIn.next(false);
        }, 100)
    }
}
