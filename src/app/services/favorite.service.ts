import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Favorite {
  userId: any;
  recipeId: any;
  value: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private afs: AngularFirestore) { }

  // Get all favs that belog to a Recipe
  getRecipeFavs(recipeId) {
    const favsRef = this.afs.collection('favorite', ref => ref.where('recipeId', '==', recipeId) );
    return favsRef.valueChanges();
  }

  // Create or update favorite
  setFav(userId, recipeId, value) {
    // Favorite document data
    const fav: Favorite = { userId, recipeId, value };

    // Custom doc ID for relationship
    const favPath = `favorite/${fav.userId}_${fav.recipeId}`;

    // Set the data, return the promise
    return this.afs.doc(favPath).set(fav);
  }

}
