import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { UserService } from '@ironsrc/fusion-ui';
import { GlobalService } from './global/global.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [
        AuthService,
        UserService,
        GlobalService
    ]
})
export class ServicesModule {}