import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PerformanceReportComponent} from './performance-report.component';

const routes: Routes = [
    {
        path: '',
        component: PerformanceReportComponent
    }
];

@NgModule({
    declarations: [PerformanceReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PerformanceReportModule {}