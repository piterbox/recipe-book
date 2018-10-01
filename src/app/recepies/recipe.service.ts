import { Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShopingService} from '../shoping-list/shoping.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'Some description',
      'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredient('meat', 200),
        new Ingredient('milk', 300)
      ]),
    new Recipe(
      'A test recipe2',
      'Some description',
      'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredient('floor', 400),
        new Ingredient('egg', 3),
        new Ingredient('milk', 200),
      ]),
  ];

  constructor(private shopService: ShopingService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.shopService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
