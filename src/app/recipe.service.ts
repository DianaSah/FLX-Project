import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './models/recipe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public afs: AngularFirestore) { }

  getRecipes() {
    return this.afs.collection<Recipe>('recipes').valueChanges();
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
}

