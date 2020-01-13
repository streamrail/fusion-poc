import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AdvertisersListComponent } from "./advertisers-list/advertisers-list.component";
import { AdvertiserDetailsComponent } from "./advertiser-details/advertiser-details.component";

import { AdvertisersRoutingModule } from './advertisers-rounting.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [AdvertisersListComponent, AdvertiserDetailsComponent],
    imports: [CommonModule, FormsModule, AdvertisersRoutingModule, SharedModule]
})
export class AdvertisersModule { }
