import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Star} from '../models/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  getUserStars(userId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
    return starsRef.valueChanges();
  }

  getRecipeStars(recipeId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('recipeId', '==', recipeId) );
    return starsRef.valueChanges();
  }

  setStar(userId, recipeId, value) {

    const star: Star = { userId, recipeId, value };

    const starPath = `stars/${star.userId}_${star.recipeId}`;

    return this.afs.doc(starPath).set(star);
  }

}
