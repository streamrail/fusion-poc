import { Component } from '@angular/core';
import { MenuItem } from '@ironsrc/fusion-ui'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerState = {
    title: 'test'
  }
  headerPrimaryMenuItems = []
  headerSecondaryMenuItems = []
  mainMenuItems: MenuItem[] = [
    {
      name: "Reports",
      icon: "bar-chart",
      children: [
        {
          name: "Performance",
          route: "/report",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Custom Reports",
          route: "/custom-reports",
          cssClass: "is-user-menu-last-child-item"
        }
      ]
    },
    {
      icon: "spaceship",
      name: "Demand",
      children: [
        {
          name: "Advertisers",
          route: "/advertisers",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Campaigns",
          route: "/campaigns",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Deals",
          route: "/deals",
          cssClass: "is-user-menu-last-child-item"
        }
      ]
    },
    {
      icon: "apps",
      name: "Manage",
      children: [
        {
          name: "Bundle IDs",
          route: "/app-lists",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Device IDs",
          route: "/device-id-lists",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "IPs",
          route: "/ip-lists",
          cssClass: "is-user-menu-last-child-item"
        }
      ]
    }
  ]
}
