import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageDirective} from './error-message.directive';
import {ErrorMessageComponent} from './error-message.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ErrorMessageDirective, ErrorMessageComponent],
    exports: [ErrorMessageDirective],
    entryComponents: [ErrorMessageComponent]
})
export class ErrorMessageModule {}
