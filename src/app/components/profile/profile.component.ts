import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddNewRecipeComponent} from '../add-new-recipe/add-new-recipe.component';
import * as firebase from 'firebase/app';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';
import {Favorite} from '../../models/favorite';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { AddUserRecipeService } from '../../services/add-user-recipe.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;
  isLoggedIn: boolean;
  recipes: Favorite[] = [];

  constructor(
    private dialog: MatDialog,
    private favoriteService: FavoriteService,
    public addUserRecipe: AddUserRecipeService,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;

        this.isLoggedIn = true;
        let userFavRecipes = [];

        this.favoriteService.getFavRecipes().subscribe((recipes) => {
          if (userFavRecipes !== []) {
            recipes.forEach( (recipe) => {
              if (recipe.id.substring(0, recipe.id.indexOf('_')) === user.uid) {
                return userFavRecipes.push(recipe);
              }
            });
            userFavRecipes = [];
          }
        });
        this.recipes = userFavRecipes;
        this.recipes$ =  this.addUserRecipe.getRecipes(user.uid);
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  viewDetails(recipe) {
    const fullId = recipe.id;
    const id = fullId.substring(fullId.indexOf('_') + 1, fullId.length);
    this.router.navigate(['/recipe/' + id]);
  }

  addCustomerRecipe() {
    this.dialog.open(AddNewRecipeComponent);
  }

  removeRecipe(event: any) {
    firebase.auth().onAuthStateChanged((user) => {
    if (event.target.className === 'remove-btn') {
      if (confirm(`Are you sure that you want to remove "${event.target.title}"`)) {
        this.afs.collection('users').doc(user.uid).collection('userRecipes').doc((event.target.name)).delete();
        this.afs.collection('recipes').doc((event.target.name)).delete();
      }
    }
    });
  }

}


