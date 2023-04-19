import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Pesto Pasta', 'Easy',
      'https://nyssaskitchen.com/wp-content/uploads/2022/05/Pesto-Pasta-30-scaled.jpg',
      [
        new Ingredient('Pasta',1),
        new Ingredient('Pesto',2)
      ]),
    new Recipe('Chickpea Tikka Masala', 'Medium',
      'https://simple-veganista.com/wp-content/uploads/2019/10/easy-chickpea-tikka-masala-recipe-2.jpg',
      [
        new Ingredient('Chickpea',3),
        new Ingredient('Garam Masala',4)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
