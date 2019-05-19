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
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.isLoggedIn = true : this.isLoggedIn = false;
      this.recipes$ =  this.addUserRecipe.getRecipes(user.uid);
    });
    this.favoriteService.getFavRecipes().subscribe((recipes) => {
      this.recipes = recipes;
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


