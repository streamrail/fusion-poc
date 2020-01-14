import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@ironsrc/fusion-ui'

import menuItems from './app.menu.items.data';
import { AuthService } from './services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appLoaded: boolean = true;
  menuItems: MenuItem[];
  headerUserMenuItems: MenuItem[];
  headerHelpMenuItems: MenuItem[];
  headerState: any;
  isLoggedIn$: Observable<boolean>

  constructor(
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn.asObservable();
    this.isLoggedIn$.subscribe(isLoggedIn => {
      console.log('isLoggedIn', isLoggedIn);
    });
    this.headerState = {
      title: 'test'
    };
    this.menuItems = this.filterPermittedMenuItems(menuItems);
    this.headerUserMenuItems = [
      {
        name: 'My Account',
        cssClass: 'is-user-menu-item'
    },
    {
        name: 'User Management',
        cssClass: 'is-user-menu-item',
        permissions: ['manageOwnUsers']
    },
    {
        name: 'Logout',
        cssClass: 'is-user-menu-item',
        route: '/logout'
    }
    ];
    this.headerHelpMenuItems = [];
  }

  filterPermittedMenuItems(menuItems: MenuItem[]) {
    return menuItems;
  }
}
