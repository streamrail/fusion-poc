import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

import { finalize, mergeMap } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loading: boolean;
  disabled: boolean;
  loginForm: FormGroup;
  returnToUrl: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _userService: UserService,
    public _globalService: GlobalService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
    this.returnToUrl = this._route.snapshot.queryParams['returnToUrl'];
  }

  doLogin() {
    this._setFormDirty();
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
        this._authService
            .login(this.loginForm.get('userName').value, this.loginForm.get('password').value)
            .pipe(
                mergeMap(() => this._userService.fetchUserData(true)),
                finalize(() => (this.loading = false))
            )
            .subscribe(
                () => {
                    this._globalService.loading = true;
                    if (this.returnToUrl) {
                        this._globalService.redirectToPage(this.returnToUrl);
                    } else {
                        this._globalService.redirectToBase();
                    }
                },
                err => {
                    // TODO:
                }
            );
  }
  private _setFormDirty() {
    this.loginForm.get('userName').markAsDirty();
    this.loginForm.get('password').markAsDirty();
}
}
