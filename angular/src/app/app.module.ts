import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule, IconModule } from '@ironsrc/fusion-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
