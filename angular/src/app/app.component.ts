import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerPrimaryMenuItems = []
  headerSecondaryMenuItems = []
  mainMenuItems = [
    {
      name: "Reports",
      icon: "bar-chart",
      children: [
        {
          name: "Performance",
          redirect: "/report",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Custom Reports",
          redirect: "/custom-reports",
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
          redirect: "/advertisers",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Campaigns",
          redirect: "/campaigns",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Deals",
          redirect: "/deals",
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
          redirect: "/app-lists",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "Device IDs",
          redirect: "/device-id-lists",
          cssClass: "is-user-menu-last-child-item"
        },
        {
          name: "IPs",
          redirect: "/ip-lists",
          cssClass: "is-user-menu-last-child-item"
        }
      ]
    }
  ]
}
