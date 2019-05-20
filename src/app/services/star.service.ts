import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Star} from '../models/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  // Star reviews that belong to a user
  getUserStars(userId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
    return starsRef.valueChanges();
  }

  // Get all stars that belog to a Recipe
  getRecipeStars(recipeId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('recipeId', '==', recipeId) );
    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, recipeId, value) {
    // Star document data
    const star: Star = { userId, recipeId, value };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.recipeId}`;

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star);
  }

}
