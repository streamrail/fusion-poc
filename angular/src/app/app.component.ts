import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@ironsrc/fusion-ui'

import menuItems from './app.menu.items.data';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appLoaded: boolean = true;
  isLoggedIn: boolean = false;
  menuItems: MenuItem[];
  headerUserMenuItems: MenuItem[];
  headerHelpMenuItems: MenuItem[];
  headerState: any;

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._userService.isLoggedIn$.subscribe(isLoggedIn => {
      console.log(`isLoggedIn = ${isLoggedIn}`);
    });
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
