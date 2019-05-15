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

   checkIfFieldExist() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.afs.collection('users').doc(user.uid)
          .ref.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              if (doc.get('favorites') != null) {
                console.log('Document data:', doc.data().userRecipes);
              } else {
                console.log('yourPropertyName does not exist!');
                this.generateNewField(user.uid);
              }
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
      }
    });
  }
}
