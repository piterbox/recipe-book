///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`.show .dropdown-menu{display: block; left: -75px;}`]
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      )
  }
  onGetData() {
    this.dataStorageService.fetchRecipes();
  }
  logout() {
    this.authService.logout();
  }
}
