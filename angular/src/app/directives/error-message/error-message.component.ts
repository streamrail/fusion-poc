import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'is-error-message',
    template: `
        <div class="error-msg" *ngIf="showError" [ngStyle]="styles" [innerHTML]="errorMessage"></div>
    `
})
export class ErrorMessageComponent implements OnInit {
    @Input() showError: boolean;
    @Input() errorMessage: string;
    @Input() styles: any;
    constructor() {}

    ngOnInit() {}
}
