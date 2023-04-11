import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A_Test_Recipe', 'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505'),
    new Recipe('A_Test_Recipe2', 'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
