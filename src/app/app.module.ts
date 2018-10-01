import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouterModule} from './app-router.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {ShopingListModule} from './shoping-list/shoping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    SharedModule,
    ShopingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
