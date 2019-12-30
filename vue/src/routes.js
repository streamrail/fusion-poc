export default [
  {
    path: '/report',
    component: require('./components/PerformanceReport.vue').default
  },
  {
    path: '/custom-reports',
    component: require('./components/CustomReports.vue').default
  },
  {
    path: '/advertisers',
    component: require('./components/Advertisers.vue').default
  },
  {
    path: '/campaigns',
    component: require('./components/Campaigns.vue').default
  },
  {
    path: '/deals',
    component: require('./components/Deals.vue').default
  },
  {
    path: '/app-lists',
    component: require('./components/BundleIDsLists.vue').default
  },
  {
    path: '/device-id-lists',
    component: require('./components/DeviceIDsLists.vue').default
  },
  {
    path: '/ip-lists',
    component: require('./components/IPLists.vue').default
  }
];