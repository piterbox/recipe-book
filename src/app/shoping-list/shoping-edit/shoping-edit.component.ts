  import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
  import {NgForm} from '@angular/forms';
  import {Ingredient} from '../../shared/ingredient.model';
  import {ShopingService} from '../shoping.service';
  import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shopService: ShopingService) { }

  ngOnInit() {
    this.subscription = this.shopService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shopService.getIngredient(index);
        this.shopListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.shopListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shopService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
