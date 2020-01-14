import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "report",
    pathMatch: "full"
  },
  {
    path: "report",
    loadChildren: () => import("./pages/performance-report/performance-report.module").then(m => m.PerformanceReportModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "custom-reports",
    loadChildren: () =>import("./pages/custom-reports/custom-reports.module").then(m => m.CustomReportsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "advertisers",
    loadChildren: () =>import("./pages/advertisers/advertisers.module").then(m => m.AdvertisersModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "campaigns",
    loadChildren: () =>import("./pages/campaigns/campaigns.module").then(m => m.CampaignsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "deals",
    loadChildren: () =>import("./pages/deals/deals.module").then(m => m.DealsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "app-lists",
    loadChildren: () =>import("./pages/app-lists/app-lists.module").then(m => m.AppListsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "device-id-lists",
    loadChildren: () =>import("./pages/device-id-lists/device-id-lists.module").then(m => m.DeviceIdListsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "ip-lists",
    loadChildren: () =>import("./pages/ip-lists/ip-lists.module").then(m => m.IpListsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
    
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
