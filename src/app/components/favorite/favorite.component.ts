import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorite: boolean;
  favIcon: string = 'favorite_border';

  constructor(
    private favoriteService: FavoriteService,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) {
  }

  @Input() userId;
  @Input() recipeId;

  fav: Observable<any>;
  avgRating: Observable<any>;

  ngOnInit() {
    this.fav = this.favoriteService.getRecipeFavs(this.recipeId);
    this.checkFav()
  }

  favHandler(isFavorite) {
    this.favorite = !this.favorite;

    if (isFavorite === true) {
      this.favIcon = 'favorite';
      this.afs.doc(`recipes/${this.recipeId}`)
        .ref.get().then((doc) => {
        this.favoriteService.setFav(
          this.userId,
          this.recipeId,
          isFavorite,
          doc.data().title,
          doc.data().imageSrc,
          doc.data().description,
          doc.data().cuisineType,
          doc.data().rating,
          doc.data().cookDuration,
          doc.data().ingredients,
          doc.data().steps,
          doc.data().videos);
      })
    } else {
      this.favIcon = 'favorite_border';
      this.afs.collection('favorite').doc(`${this.userId}_${this.recipeId}`).delete();
    }

  }

  checkFav() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.afs.collection('favorite').doc(`${this.userId}_${this.recipeId}`)
          .ref.get().then((doc) => {
          if (doc.exists) {
            this.favIcon = 'favorite';
            this.favorite = doc.data().isFavorite;
          } else {
            this.favIcon = 'favorite_border';
          }
        });
      }
    });
  }


}
