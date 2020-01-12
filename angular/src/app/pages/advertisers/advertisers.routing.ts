import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvertisersListComponent }    from './advertisers-list/advertisers-list.component';
import { AdvertiserDetailsComponent }  from './advertiser-details/advertiser-details.component';

const heroesRoutes: Routes = [
  { path: '',  component: AdvertisersListComponent },
  { path: 'edit/:id', component: AdvertiserDetailsComponent },
  { path: 'create', component: AdvertiserDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdvertisersRoutingModule { }