import {Injectable, Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Favorite} from '../models/favorite';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  @Input() userId;
  @Input() recipeId;

  constructor(private afs: AngularFirestore) { }

  // Get all favs that belog to a Recipe
  getRecipeFavs(recipeId) {
    const favsRef = this.afs.collection('favorite', ref => ref.where('recipeId', '==', recipeId) );
    return favsRef.valueChanges();
  }

  // Create or update favorite
  setFav(userId, recipeId, isFavorite, title, imageSrc, description, cuisineType, rating, cookDuration, ingredients, steps, videos) {
    // Favorite document data
    const fav: Favorite = { userId, recipeId, isFavorite, title, imageSrc, description, cuisineType, rating, cookDuration, ingredients,
      steps, videos };

    // Custom doc ID for relationship
    const favPath = `favorite/${fav.userId}_${fav.recipeId}`;

    // Set the data, return the promise
    return this.afs.doc(favPath).set(fav);
  }


  getFavRecipes() {
    return this.afs.collection<Favorite>('favorite', ref => ref.orderBy('title')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Favorite;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getFavRecipe(id): Observable<Favorite> {
    return this.afs.collection<Favorite>('favorite').stateChanges().pipe(
      map(actions => {
        let recipe: Favorite;
        actions.map(a => {
          const data = a.payload.doc.data() as Favorite;
          const ind = a.payload.doc.id;
          if (ind === id) {
            recipe = data;
            console.log(recipe)
          }
        });
        return recipe;
      }));
  }

}
