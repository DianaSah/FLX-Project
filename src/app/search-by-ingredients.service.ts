import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {Recipe} from './models/recipe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchByIngredientsService {
  chosenIngre: string[] = [];
  checkIngredients$: Observable<Recipe[]>;
  private checkIngredientsSubject = new Subject<Recipe[]>();

  /* GET ingredients which name contains search term */
  searchIngredients(term: string): Observable<string[]> {
    if (!term.trim()) {
      // if not search term, return empty ingredient array.
      return of([]);
    }
    return this.afs.collection<Recipe>('recipes', ref => ref.orderBy('title')).snapshotChanges().pipe(
      map(actions => {
          const ingrSet = new Set();
          actions.map(a => {
            const recipe = a.payload.doc.data() as Recipe;
            recipe.ingredients.forEach((ingr) => {
                if (ingr.indexOf(term) === 0) {
                  ingrSet.add(ingr);
                }
            });
          });
          return Array.from(ingrSet);
      }));
  }

  constructor( public afs: AngularFirestore) {
    this.checkIngredients$ = this.checkIngredientsSubject.asObservable();
  }

  checkIngredients(chosenIngrs) {
    chosenIngrs = chosenIngrs.sort();
    return this.afs.collection<Recipe>('recipes').snapshotChanges().pipe(
      map(actions => {
          const filteredRecipes: Recipe[] = [];
          actions.map(a => {
            const recipe = a.payload.doc.data() as Recipe;
            const id = a.payload.doc.id;
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
                filteredRecipes.push({id, ...recipe});
              }
            } else if (Ingrs.size <= chsnIngrs.size + 2) {
              if (amountChsnIngrInRecipe === chsnIngrs.size && amountMissedIngrInRecipe <= 10) {
                filteredRecipes.push({id, ...recipe});
              }
            }
          });
          return filteredRecipes;
    })
    );
  }

  getRecipesInDb() {
    return this.checkIngredients(this.chosenIngre);
  }
}

