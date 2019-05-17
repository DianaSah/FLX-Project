import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddUserRecipeService {

  constructor(public afs: AngularFirestore) { }

  // addUserRecipe(userRecipe) {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.afs.collection('users').doc(user.uid).collection('userRecipes').add(userRecipe);
  //   });
  // }

  getRecipes(userId) {
      return this.afs.collection('users').doc(userId).collection<Recipe>('userRecipes').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  addUserRecipe(userRecipe) {
    firebase.auth().onAuthStateChanged((user) => {
      let ingredients = userRecipe.ingredients;
      let ingredientsArray = ingredients.split(',');
      let steps = userRecipe.steps;
      let stepsArray = steps.split('.');
      let nameToSearch = userRecipe.title.toLowerCase();
      this.afs.collection('users').doc(user.uid).collection('userRecipes').add({
        title: nameToSearch,
        imageSrc: userRecipe.imageSrc,
        description: userRecipe.description,
        cuisineType: userRecipe.cuisineType,
        rating: 0,
        isFavorite: false,
        cookDuration: parseInt(userRecipe.cookDuration),
        ingredients: ingredientsArray,
        steps: stepsArray,
        //videos: value.videos,
      });
    });
  }


}
