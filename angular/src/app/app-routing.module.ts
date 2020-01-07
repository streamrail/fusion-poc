import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "report",
    pathMatch: "full"
  },
  {
    path: "report",
    loadChildren: () =>
      import("./pages/performance-report/performance-report.module").then(
        m => m.PerformanceReportModule
      )
  },
  {
    path: "custom-reports",
    loadChildren: () =>
      import("./pages/custom-reports/custom-reports.module").then(
        m => m.CustomReportsModule
      )
  },
  {
    path: "advertisers",
    loadChildren: () =>
      import("./pages/advertisers/advertisers.module").then(
        m => m.AdvertisersModule
      )
  },
  {
    path: "campaigns",
    loadChildren: () =>
      import("./pages/campaigns/campaigns.module").then(
        m => m.CampaignsModule
      )
  },
  {
    path: "deals",
    loadChildren: () =>
      import("./pages/deals/deals.module").then(
        m => m.DealsModule
      )
  },
  {
    path: "app-lists",
    loadChildren: () =>
      import("./pages/app-lists/app-lists.module").then(
        m => m.AppListsModule
      )
  },
  {
    path: "device-id-lists",
    loadChildren: () =>
      import("./pages/device-id-lists/device-id-lists.module").then(
        m => m.DeviceIdListsModule
      )
  },
  {
    path: "ip-lists",
    loadChildren: () =>
      import("./pages/ip-lists/ip-lists.module").then(
        m => m.IpListsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
