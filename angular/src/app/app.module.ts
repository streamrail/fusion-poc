import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SharedModule} from './shared/shared.module';
import {ServicesModule} from './services/services.module';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule ,
    ServicesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
