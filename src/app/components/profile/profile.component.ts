import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddNewRecipeComponent} from '../add-new-recipe/add-new-recipe.component';
import * as firebase from 'firebase/app';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';
import {Favorite} from '../../models/favorite';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean;
  recipes: Favorite[] = [];

  constructor(
    private dialog: MatDialog,
    private favoriteService: FavoriteService,
    private router: Router,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.isLoggedIn = true : this.isLoggedIn = false;
      let userFavRecipes = [];
      this.favoriteService.getFavRecipes().subscribe((recipes) => {
        recipes.forEach(function (recipe) {
          if (recipe.id.substring(0, recipe.id.indexOf('_')) === user.uid) {
            console.log(recipe.id.substring(0, recipe.id.indexOf('_')));
            return userFavRecipes.push(recipe)
          }
        });
      });
      this.recipes = userFavRecipes;
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

}


