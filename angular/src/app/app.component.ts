import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@ironsrc/fusion-ui'

import menuItems from './app.menu.items.data';
import { Observable } from 'rxjs';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appLoaded: Boolean = true;
  menuItems: MenuItem[];
  headerUserMenuItems: MenuItem[];
  headerHelpMenuItems: MenuItem[];
  headerState: any;
  isLoggedIn$: Observable<any>;

  constructor(
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this._userService.isLoggedIn.asObservable();
    this.headerState = {
      title: 'test'
    };
    this.menuItems = this.filterPermittedMenuItems(menuItems);
    this.headerUserMenuItems = [];
    this.headerHelpMenuItems = [];
  }

  filterPermittedMenuItems(menuItems: MenuItem[]) {
    return menuItems;
  }
}
