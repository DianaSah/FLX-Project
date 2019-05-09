import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Recipe { name: string; }

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private afs: AngularFirestore) {
  }

  getRecipes() {
    return this.afs.collection('recipes').snapshotChanges();
  }

  getRecipeById(recipeKey) {
    return this.afs.collection('recipes').doc(recipeKey).snapshotChanges();
  }

}
