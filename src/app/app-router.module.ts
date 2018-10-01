
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShopingListComponent} from './shoping-list/shoping-list.component';

import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recepies/recipies.module#RecipiesModule'},
  {path: 'shoping-list', component: ShopingListComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRouterModule{

}
