import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './models/recipe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(
    public afs: AngularFirestore,
    ) { }

  getRecipes() {
    return this.afs.collection<Recipe>('recipes', ref => ref.orderBy('title')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Recipe;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getRecipe(id): Observable<Recipe> {
      return this.afs.collection<Recipe>('recipes').stateChanges().pipe(
        map(actions => {
          let recipe: Recipe;
          actions.map(a => {
            const data = a.payload.doc.data() as Recipe;
            const ind = a.payload.doc.id;
            if (ind === id) {
              recipe = data;
            }
          });
          return recipe;
      }));
  }


  searchRecipes(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      // if not search term, return empty ingredient array.
      return of([]);
    }
    return this.afs.collection<Recipe>('recipes').stateChanges().pipe(
      map(actions => {
          const recipeList: Recipe[] = [];
          actions.map(a => {
            const recipe = a.payload.doc.data() as Recipe;
            const recipeName = recipe.title.toLowerCase();
            const id = a.payload.doc.id;
            if (recipeName.indexOf(term.toLowerCase()) === 0) {
               recipeList.push({id, ...recipe});
            }
        });
          return recipeList;
      })
      );
  }
}

