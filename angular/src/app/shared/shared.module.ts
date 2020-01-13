import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../components/components.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, ComponentsModule],
    providers: [],
    declarations: [],
    exports: [ReactiveFormsModule, FormsModule, RouterModule, ComponentsModule]
})
export class SharedModule {}
