import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import {SearchByIngredientsService} from '../../services/search-by-ingredients.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recipes-list-by-ingredient',
  templateUrl: './recipes-list-by-ingredient.component.html',
  styleUrls: ['./recipes-list-by-ingredient.component.scss']
})
export class RecipesListByIngredientComponent implements OnInit, OnDestroy {
  public recipes: Observable<Recipe[]>;
  recipeObservable;
  chosenIngre: string;
  public ingredients: string[];

  public constructor(
    private recipeService: RecipeService,
    private searchByIngredientsService: SearchByIngredientsService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.recipeObservable = this.recipeService.getRecipesByIngr();
    this.recipeObservable.subscribe(recipe => {
      this.recipes = recipe;
    });
    this.chosenIngre = this.recipeService.getIngredient();

    this.searchByIngredientsService.getAllIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients.sort();
    });
  }

  ngOnDestroy() {
    this.clearIngredients();
  }

  checkIngr() {
    this.recipeObservable = this.recipeService.getRecipesByIngr();
    this.recipeObservable.subscribe(recipe => {
      this.recipes = recipe;
    });
  }

  clickOnIngredient(event: any) {
    if (event.target.className === 'icon') {
      this.recipeService.chosenIngredient = event.target.name;
      this.chosenIngre = event.target.name;
      this.checkIngr();
    }
  }

  clearIngredients() {
    this.recipeService.chosenIngredient = undefined;
    this.chosenIngre = undefined;
    this.checkIngr();
  }
}
