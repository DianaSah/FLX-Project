import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import{ Recipe } from '../models/Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipesFbService {
  recepiesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(public firestore: AngularFirestore) { 
    this.recipes = firestore.collection('recipes').valueChanges();
  }
}
