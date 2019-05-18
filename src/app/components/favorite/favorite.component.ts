import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';


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
  ) { }

  @Input() userId;
  @Input() recipeId;

  fav: Observable<any>;
  avgRating: Observable<any>;

  ngOnInit() {
    this.fav = this.favoriteService.getRecipeFavs(this.recipeId);
    let docRef = this.afs.collection('favorite').doc(`${this.userId}_${this.recipeId}`);

    docRef.ref.get().then((doc) => {
      if (doc.exists) {
        this.favorite = doc.data().value;
        console.log(this.favorite);
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

  }

  favHandler(value) {
    this.favorite = !this.favorite;
    this.favIcon === 'favorite_border' ? this.favIcon = 'favorite' : this.favIcon = 'favorite_border';
    this.favoriteService.setFav(this.userId, this.recipeId, value);
  }



}
