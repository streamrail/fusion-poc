import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DeviceIdListsComponent} from './device-id-lists.component';

const routes: Routes = [
    {
        path: '',
        component: DeviceIdListsComponent
    }
];

@NgModule({
    declarations: [DeviceIdListsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DeviceIdListsModule {}