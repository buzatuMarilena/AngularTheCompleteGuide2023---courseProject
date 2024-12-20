import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  //private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
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
