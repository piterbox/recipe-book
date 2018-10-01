import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShopingService} from './shoping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscribtion: Subscription;

  constructor(private shopService: ShopingService) {}

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.subscribtion = this.shopService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shopService.startEditing.next(index);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
