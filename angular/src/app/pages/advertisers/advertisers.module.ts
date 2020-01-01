import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AdvertisersComponent} from './advertisers.component';

const routes: Routes = [
    {
        path: '',
        component: AdvertisersComponent
    }
];

@NgModule({
    declarations: [AdvertisersComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdvertisersModule {}