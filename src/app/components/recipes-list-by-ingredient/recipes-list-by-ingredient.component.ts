import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/recipe.service';


@Component({
  selector: 'app-recipes-list-by-ingredient',
  templateUrl: './recipes-list-by-ingredient.component.html',
  styleUrls: ['./recipes-list-by-ingredient.component.scss']
})
export class RecipesListByIngredientComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;
  chosenIngre: string;

  public constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes$ = this.recipeService.getRecipesByIngr();
    this.chosenIngre = this.recipeService.getIngredient();
  }
}
