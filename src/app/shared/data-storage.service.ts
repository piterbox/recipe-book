import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recepies/recipe.service';
import 'rxjs/add/operator/map';

import {AuthService} from '../auth/auth.service';
import {Recipe} from '../recepies/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    return this.http.put('https://recipe-book-74da6.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    this.http.get<Recipe[]>('https://recipe-book-74da6.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes) => {
          this.recipeService.setRecipes(recipes);
}
      );
  }
}
