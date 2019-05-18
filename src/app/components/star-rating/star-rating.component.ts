import {Component, Input, OnInit} from '@angular/core';
import {StarService} from '../../services/star.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  constructor(
    private starService: StarService,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) {
  }

  @Input() userId;
  @Input() recipeId;

  stars: Observable<any>;
  avgRating: Observable<any>;

  ngOnInit() {
    this.stars = this.starService.getRecipeStars(this.recipeId);

    this.avgRating = this.stars.pipe(map(arr => {
      const ratings = arr.map(v => {
        return v.value;
      });
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : '0';
    }));

    this.avgRating.subscribe(rate => {
      this.afs.doc('recipes/' + this.route.snapshot.paramMap.get('id')).update({rating: rate});
    });
  }

  starHandler(value) {
    this.starService.setStar(this.userId, this.recipeId, value);
  }

}
