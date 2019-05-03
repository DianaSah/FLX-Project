import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {INGREDIENTS} from './mock_ingredients';
import {RECIPES} from './mock_recepies';
import {Recipe} from './models/recipe';

@Injectable({
  providedIn: 'root'
})
export class SearchByIngredientsService {
  public filteredRecipes: Recipe[] = [];
  exportIngredients$: Observable<any>;
  private exportIngr = new Subject<any>();

  getIngredients(): Observable<string[]> {
    return of(INGREDIENTS);
  }


  /* GET ingredients which name contains search term */
  searchIngredients(term: string): Observable<string[]> {
    if (!term.trim()) {
      // if not search term, return empty ingredient array.
      return of([]);
    }

    return of(INGREDIENTS.filter((ingr) => ingr.indexOf(term) === 0));
  }

  constructor() {
    this.exportIngredients$ = this.exportIngr.asObservable();
  }

  exportRecipes() {
    return this.filteredRecipes;
  }

  checkIngredients(chosenIngrs) {
    chosenIngrs = chosenIngrs.sort();
    this.filteredRecipes = RECIPES.filter((recipe) => {
      const chsnIngrs = new Set(chosenIngrs);
      const Ingrs = new Set(recipe.ingredients);
      let amountMissedIngrInRecipe = 0;
      let amountChsnIngrInRecipe = 0;
      Ingrs.forEach((ingredient) => {
        if (chsnIngrs.has(ingredient)) {
          amountChsnIngrInRecipe++;
        } else {
          amountMissedIngrInRecipe++;
        }
      });
      if (chsnIngrs.size >= Ingrs.size) {
        if (amountChsnIngrInRecipe === Ingrs.size) {
          return true;
        }
      } else if (Ingrs.size <= chsnIngrs.size + 2) {
        if (amountChsnIngrInRecipe === chsnIngrs.size && amountMissedIngrInRecipe <= 2) {
          return true;
        } else {
          return false;
        }
      }
    });
    this.exportIngr.next(this.filteredRecipes);
  }


}
