import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceReportComponent } from './performance-report/performance-report.component';
import { CustomReportsComponent } from './custom-reports/custom-reports.component';

const routes: Routes = [
  {
    path: 'report',
    component: PerformanceReportComponent
  },
  {
    path: 'custom-reports',
    component: CustomReportsComponent
  }
  // },
  // {
  //   path: '/advertisers',
  //   component: require('./components/Advertisers.vue').default
  // },
  // {
  //   path: '/campaigns',
  //   component: require('./components/Campaigns.vue').default
  // },
  // {
  //   path: '/deals',
  //   component: require('./components/Deals.vue').default
  // },
  // {
  //   path: '/app-lists',
  //   component: require('./components/BundleIDsLists.vue').default
  // },
  // {
  //   path: '/device-id-lists',
  //   component: require('./components/DeviceIDsLists.vue').default
  // },
  // {
  //   path: '/ip-lists',
  //   component: require('./components/IPLists.vue').default
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
