import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
    selector: 'is-logout',
    template: `
        <div style="text-align: center;">
            <fusion-loader [status]="loading" height="80"><span class="font4">Logout.. Please Wait…</span></fusion-loader>
        </div>
    `
})
export class LogoutComponent implements OnInit {
    loading: boolean;

    constructor(
        private _authService: AuthService,
        private _globalService: GlobalService
    ) {}

    ngOnInit() {
        this.loading = true;
        this.doLogout();
    }

    doLogout() {
        this._authService.logout();
        this._globalService.redirectToPage('/login');
    }
}
