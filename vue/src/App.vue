<template>
  <div id="app">
    <FusionLayout :config="layout" @menuItemClick="menuItemClick">
      <div>
        <router-view @updateLayoutTitle="updateLayoutTitle"></router-view>
      </div>
    </FusionLayout>
  </div>
</template>
 
 <script>
import { FusionLayout } from "@ironsrc/fusion-ui/native/vue/fusion-vue.vue";

export default {
  name: "app",
  data() {
    return {
      layout: {
        userName: "Fusion User",
        state: {
          title: ""
        },
        menuItems,
        headerPrimaryMenuItems,
        headerSecondaryMenuItems
      }
    };
  },
  components: {
    FusionLayout
  },
  methods: {
    menuItemClick: function(e) {
      if (e.redirect) {
        if (this.$router.currentRoute.path !== e.redirect) {
          this.$router.push(e.redirect);
        }
      }
    },
    updateLayoutTitle: function(layoutState) {
      // layoutState => {title: string, element?: Node}
      this.layout = { ...this.layout, state: { ...layoutState } };
    }
  }
};

const headerPrimaryMenuItems = [
  {
    name: "IronSource",
    cssClass: "is-user-menu-item",
    redirect: "https://www.ironsrc.com/",
    openNewTab: true
  }
];

const headerSecondaryMenuItems = [
  {
    name: "Knowledge Center",
    cssClass: "is-user-menu-item",
    redirect: "https://www.ironsrc.com/",
    openNewTab: true
  },
  {
    name: "Download SDK",
    cssClass: "is-user-menu-item",
    redirect: "https://www.ironsrc.com/",
    openNewTab: true
  },
  {
    name: "Contact Us",
    cssClass: "is-user-menu-item",
    redirect: "https://www.ironsrc.com/",
    openNewTab: true
  }
];

const menuItems = [
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
];
</script>