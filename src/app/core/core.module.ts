import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRouterModule} from '../app-router.module';
import {ShopingService} from '../shoping-list/shoping.service';
import {RecipeService} from '../recepies/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRouterModule
  ],
  exports: [
    AppRouterModule,
    HeaderComponent
  ],
  providers:[ShopingService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {

}
