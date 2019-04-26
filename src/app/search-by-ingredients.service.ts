import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INGREDIENTS } from './mock_ingredients';

@Injectable({
  providedIn: 'root'
})
export class SearchByIngredientsService {

  getIngredients(): Observable< string[] > {
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

  constructor() { }
}
