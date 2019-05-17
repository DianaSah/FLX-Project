import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../recipe.service';

import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {
  public recipe$: Observable<Recipe>;
  favorite: string = 'favorite_border';

  userDoc: AngularFirestoreDocument<any>;
  recipeDoc: AngularFirestoreDocument<any>;

  user: Observable<any>;
  recipe: Observable<any>;
  currRecipeId = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private router: Router,
    private afs: AngularFirestore
  ) {
  }

  ngOnChanges() {

  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getRecipe();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userDoc = this.afs.doc(`users/` + user.uid);
        this.user = this.userDoc.valueChanges();
      }
    });
    this.recipeDoc = this.afs.doc('recipes/' + this.currRecipeId);
    this.recipe = this.recipeDoc.valueChanges();
  }

  get recipeId() {
    return this.recipeDoc.ref.id;
  }

  get userId() {
    return this.userDoc.ref.id;
  }

  getRecipe(): void {
    const id = this.currRecipeId;
    this.recipe$ = this.recipeService.getRecipe(id);
  }

  goBack(): void {
    this.location.back();
  }

  handleFavorite() {

  }

}

