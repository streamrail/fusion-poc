import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AppListsComponent} from './app-lists.component';

const routes: Routes = [
    {
        path: '',
        component: AppListsComponent
    }
];

@NgModule({
    declarations: [AppListsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AppListsModule {}