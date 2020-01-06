import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { IconModule, ButtonModule } from '@ironsrc/fusion-ui';

import { AdvertisersListComponent } from "./advertisers-list/advertisers-list.component";
import { AdvertiserDetailsComponent } from "./advertiser-details/advertiser-details.component";

import { AdvertisersRoutingModule } from './advertisers-rounting.module';


@NgModule({
    declarations: [AdvertisersListComponent, AdvertiserDetailsComponent],
    imports: [CommonModule, FormsModule, AdvertisersRoutingModule, IconModule, ButtonModule]
})
export class AdvertisersModule { }
