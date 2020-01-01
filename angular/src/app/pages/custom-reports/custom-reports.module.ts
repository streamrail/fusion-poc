import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CustomReportsComponent} from './custom-reports.component';

const routes: Routes = [
    {
        path: '',
        component: CustomReportsComponent
    }
];

@NgModule({
    declarations: [CustomReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CustomReportsModule {}