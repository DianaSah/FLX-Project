import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipesFbService {

  constructor(
    public dataBase: AngularFirestore
    ) {}

  addRecipe(value: any){
    let ingredients=value.ingredients;
    let ingredientsArray = ingredients.split(', ');
    let steps = value.steps;
    let stepsArray = steps.split('. ');
    let nameToSearch = value.title.toLowerCase();
    return this.dataBase.collection('recipes').add({
      title: nameToSearch,
      imageSrc: value.imageSrc,
      description: value.description,
      cuisineType: value.cuisineType,
      rating: 0,
      isFavorite: false,
      cookDuration: parseInt(value.cookDuration),
      ingredients: ingredientsArray,
      steps: stepsArray,
      //videos: value.videos,
    });
  }
}
