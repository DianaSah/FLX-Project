import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from './models/recipe';
import { RECIPES } from './mock_recepies';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipe(id): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
