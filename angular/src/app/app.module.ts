import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@ironsrc/fusion-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceReportComponent } from './performance-report/performance-report.component';
import { CustomReportsComponent } from './custom-reports/custom-reports.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DealsComponent } from './deals/deals.component';
import { AppListsComponent } from './app-lists/app-lists.component';
import { DeviceIdListsComponent } from './device-id-lists/device-id-lists.component';
import { IpListsComponent } from './ip-lists/ip-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceReportComponent,
    CustomReportsComponent,
    AdvertisersComponent,
    CampaignsComponent,
    DealsComponent,
    AppListsComponent,
    DeviceIdListsComponent,
    IpListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
