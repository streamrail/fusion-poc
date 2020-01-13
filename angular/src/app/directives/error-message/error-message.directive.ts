import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Host,
    Optional,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewContainerRef,
    ChangeDetectorRef
} from '@angular/core';
import {ErrorMessageComponent} from './error-message.component';
import {AbstractControl, ControlContainer, FormGroupDirective} from '@angular/forms';
import {ErrorMessages} from './error-message.config';
import {LogService, InputComponent} from '@ironsrc/fusion-ui';
import {isString} from 'util';

enum FormControlStatus {
    Valid = 'VALID',
    Invalid = 'INVALID',
    Pending = 'PENDING'
}

@Directive({
    selector: '[isErrorMessage]'
})
export class ErrorMessageDirective implements OnInit, OnDestroy, OnChanges {
    @Input() showError: boolean;
    @Input() isErrorMessage: string;
    @Input() errorInnerMessage: string;
    @Input() customMessages: {[key: string]: string};
    @Input() customMapping: {[key: string]: string};
    @Input() errorStyles = {};
    private errorMessageComponent: ComponentRef<ErrorMessageComponent>;
    private _formControl: AbstractControl;
    private _isTooltipMessage: boolean;
    private _currentStatus: FormControlStatus;

    constructor(
        private _elementRef: ElementRef,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _viewContainerRef: ViewContainerRef,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fg: ControlContainer,
        @Optional() @Host() private _inputComponent: InputComponent,
        private _loggerService: LogService
    ) {}

    get parentFormControl(): AbstractControl {
        return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null;
    }

    ngOnInit() {
        this.customMessages = this.customMessages || {};
        this.customMapping = this.customMapping || {};
        const showErrorInit = this.showError;
        this.showError = this.showError === undefined || this.showError === null ? true : this.showError;

        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ErrorMessageComponent);
        this.errorMessageComponent = this._viewContainerRef.createComponent(componentFactory);
        this.errorMessageComponent.instance.styles = this.errorStyles;
        this._formControl = this.parentFormControl.get(this._elementRef.nativeElement.getAttribute('formcontrolname'));
        this._isTooltipMessage = this._elementRef.nativeElement.getAttribute('errortype');
        this._formControl.valueChanges.subscribe(() => {
            this._checkErrors();
        });

        this._formControl.statusChanges.subscribe((status: FormControlStatus) => {
            // handle async validations
            if (status === FormControlStatus.Invalid && this._currentStatus === FormControlStatus.Pending) {
                this._checkErrors(true);
            }
            this._currentStatus = status;
        });

        if (showErrorInit) {
            this._checkErrors();
        }
    }

    ngOnChanges() {
        this._checkErrors();
    }

    ngOnDestroy() {
        if (this.errorMessageComponent) {
            this.errorMessageComponent.destroy();
        }
    }

    private _setComponentError(error: any) {
        if (this._inputComponent) {
            this._inputComponent.error = error;
            this._inputComponent.toggleErrorClass(!!error);
        }
    }

    private _checkErrors(async?: boolean) {
        if (this.errorMessageComponent) {
            let errorMessage = '';
            this.errorMessageComponent.instance.showError = false;
            this._setComponentError('');
            const errors = this._formControl.errors || {};
            const isFormControlInvalid = Object.keys(errors).some(errorKey => {
                // if error value is string to that's the message will be shown
                errorMessage = isString(errors[errorKey]) ? errors[errorKey] : this._getMessage(errorKey);
                return true;
            });

            if (isFormControlInvalid && this.showError) {
                if (this._isTooltipMessage) {
                    this._setComponentError(errorMessage);
                } else {
                    this.errorMessageComponent.instance.errorMessage = errorMessage;
                    this.errorMessageComponent.instance.showError = this.showError;
                    if (this._inputComponent) {
                        this._inputComponent.error = this.errorMessageComponent.instance.showError;
                        this._inputComponent.toggleErrorClass(this.errorMessageComponent.instance.showError);
                    }
                }
            }

            if (async) {
                this._changeDetectorRef.detectChanges();
                this.errorMessageComponent.changeDetectorRef.detectChanges();
            }
        }
    }

    private _getMessage(errorKey) {
        let errorMessage = '';
        if (this.customMessages[errorKey]) {
            errorMessage = this.customMessages[errorKey];
        } else if (ErrorMessages[errorKey]) {
            errorMessage = ErrorMessages[errorKey];
            errorMessage = errorMessage.replace('{NAME}', this.isErrorMessage);
            errorMessage = errorMessage.replace('{INNER-NAME}', this.errorInnerMessage || this.isErrorMessage);
            Object.keys(this.customMapping).forEach(find => (errorMessage = errorMessage.replace(`{${find}}`, this.customMapping[find])));
        } else {
            this._loggerService.error(new Error(`Unknown validation message for error key: ${errorKey}`));
        }

        return errorMessage;
    }
}
