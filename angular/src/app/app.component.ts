import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@ironsrc/fusion-ui'

import menuItems from './app.menu.items.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appLoaded: Boolean;
  menuItems: MenuItem[];
  headerUserMenuItems: MenuItem[];
  headerHelpMenuItems: MenuItem[];
  headerState;

  constructor() {}

  ngOnInit() {
    this.appLoaded = false;
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
