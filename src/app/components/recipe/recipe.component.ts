import {Component, OnInit, OnChanges, ViewChild, ElementRef} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../recipe.service';
import { IMAGES_SRC } from '../../mock-images-src';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {
  @ViewChild('IngredientIcon') icon: ElementRef;
  public recipe$: Observable<Recipe>;
  favorite: string = 'favorite_border';
  imgSrc: string[] = IMAGES_SRC.map((imageData) => imageData.name);
  userDoc: AngularFirestoreDocument<any>;
  recipeDoc: AngularFirestoreDocument<any>;

  user: Observable<any>;
  recipe: Observable<any>;
  currRecipeId = this.route.snapshot.paramMap.get('id');

  currentUser = firebase.auth().currentUser;

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
    if (this.currentUser) {
      return this.userDoc.ref.id;
    }

  }

  clickOnIngredient(event: any) {
    if (event.target.className === 'icon') {
      this.recipeService.chosenIngredient = event.target.name;
      this.router.navigate(['ingredient_search']);
    }
  }

  getRecipe(): void {
    const id = this.currRecipeId;
    this.recipe$ = this.recipeService.getRecipe(id);
  }

  getUserRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe$ = this.recipeService.getUserRecipe(id);
  }

  goBack(): void {
    this.location.back();
  }

  handleFavorite() {

  }

}

