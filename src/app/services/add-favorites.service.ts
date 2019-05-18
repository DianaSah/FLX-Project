import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AddFavoritesService {

  constructor(public afs: AngularFirestore) { }

  generateNewField(userKey){
    this.afs.collection('users').doc(userKey).set({
      favorites: [],
    }, { merge: true });
   }

   addUserRecipe(userRecipe):void {
    firebase.auth().onAuthStateChanged((user) => {
      this.afs.collection('users').doc(user.uid).collection('favoriteRecipes').add({userRecipe});
    });
  }
}
