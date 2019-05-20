import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './models/recipe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  chosenIngredient: string;
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

  getRecipesByIngredient(ingredient) {
    return this.afs.collection<Recipe>('recipes').stateChanges().pipe(
      map(actions => {
        const recipes: Recipe[] = [];
        actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          if (data.ingredients.indexOf(ingredient) !== -1) {
            recipes.push({id, ...data});
          }
        });
        return recipes;
      }));
  }

  getRecipesByIngr() {
    return this.getRecipesByIngredient(this.chosenIngredient);
  }

  getIngredient() {
    return this.chosenIngredient;
  }

  searchRecipes(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      // if not search term, return empty ingredient array.
      return of([]);
    }
    return this.afs.collection<Recipe>('recipes', ref => ref.orderBy('title')).snapshotChanges().pipe(
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

  getCuisineTypes(): Observable<string[]> {
    return this.afs.collection<Recipe>('recipes').stateChanges().pipe(
      map(actions => {
          const cuisineTypesSet = new Set();
          actions.map(a => {
            const recipe = a.payload.doc.data() as Recipe;
            cuisineTypesSet.add(recipe.cuisineType);
          });
          return Array.from(cuisineTypesSet);
      }));
  }
}

