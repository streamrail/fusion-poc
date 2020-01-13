import { Injectable } from '@angular/core';
import { ApiService } from '@ironsrc/fusion-ui';
import { UserService } from '../user/user.service';

import { of } from 'rxjs';

@Injectable()
export class AuthService {
    private _authToken: string;
    private _authTokenKey: string;

    constructor(private _apiService: ApiService, private _userService: UserService) {
        this._authTokenKey = 'connectAuthService';
    }

    public get isLoggedAsUser(): boolean {
        return !!this._authToken;
    }

    public get authToken() {
        if (!this._authToken) {
            this._authToken = localStorage.getItem(this._authTokenKey);
        }
        return this._authToken;
    }

    public set authToken(token) {
        this._authToken = token;
        localStorage.setItem(this._authTokenKey, token);
    }

    public login(username, password) {
        this.logout();
        // const apiUrl = `/api/v2/login`;
        // return this._apiService
        //     .post(
        //         apiUrl,
        //         {
        //             username: username,
        //             password: password
        //         },
        //         {responseType: ApiResponseType.Json, headers: {Authorization: ''}}
        //     )
        //     .pipe(
        //         tap(tokenData => {
        //             this.authToken = tokenData;
        //         })
        //     );
        this.authToken = '1234';
        return of({token: 12});
    }

    public logout() {
        localStorage.removeItem(this._authTokenKey);
        this.authToken = '';
    }
}
