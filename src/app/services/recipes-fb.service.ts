import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import{ Recipe } from '../models/Recipe';

@Injectable()
export class RecipesFbService {
  recepiesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(public firestoreDB: AngularFirestore) { 
    //this.recipes = firestoreDB.collection('recipes').valueChanges();
    //this.recipes = this.firestoreDB.collection('recipes').snapshotChanges().pipe(map(changes => {
      //return changes.map(a => {
        //const data = a.payload.doc.data() as Recipe;
        //data.id = a.payload.doc.id;
        //return data;
      //})
    //}))
  }
}
