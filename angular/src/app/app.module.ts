import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule, IconModule } from '@ironsrc/fusion-ui';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    IconModule.forRoot({svgOptions: {assetsPath: 'https://supersonicads-a.akamaihd.net/demand'}})   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
