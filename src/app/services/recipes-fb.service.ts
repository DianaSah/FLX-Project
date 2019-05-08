import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
//import {RECIPES} from '../mock_recepies';
import{ Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesFbService {

  constructor(
    public dataBase: AngularFirestore
    ) {}

  addRecipe(value){
    //let ingr=value.ingredients.toString();
    //let ingredientsArray = JSON.parse("[" + ingr + "]");
    //console.log(ingredientsArray);
    return this.dataBase.collection('recipes').add({
      title: value.title,
      imageSrc: value.imageSrc,
      description: value.description,
      cuisineType: value.cuisineType,
      rating: 0,
      isFavorite: false,
      cookDuration: parseInt(value.cookDuration),
      ingredients: value.ingredients,
      steps: value.steps,
      //videos: value.videos,
    });
  }
}
