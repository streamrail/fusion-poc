import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {IpListsComponent} from './ip-lists.component';

const routes: Routes = [
    {
        path: '',
        component: IpListsComponent
    }
];

@NgModule({
    declarations: [IpListsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class IpListsModule {}