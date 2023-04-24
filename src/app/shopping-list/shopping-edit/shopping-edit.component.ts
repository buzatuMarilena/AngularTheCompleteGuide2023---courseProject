import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  constructor(private shoppingService: ShoppingListService) {
  }

  onAddItem(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name,
      form.value.amount);
    this.shoppingService.addIngredient(newIngredient);
  }

  ngOnInit() {
  }

}
