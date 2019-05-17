import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddNewRecipeComponent} from '../add-new-recipe/add-new-recipe.component';
import {Recipe} from '../../models/recipe';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import { AddUserRecipeService } from 'src/app/services/add-user-recipe.service';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //userRecipe: Recipe = {}
  public recipes$: Observable<Recipe[]>;
  isLoggedIn: boolean;

  userRef: AngularFirestoreDocument<any>;

  recipesRef: AngularFirestoreCollection<any>;

  constructor(
    private dialog: MatDialog,
    private afs: AngularFirestore,
    public addUserRecipe: AddUserRecipeService,
    private router: Router,
  ) { }


  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.isLoggedIn = true : this.isLoggedIn = false;
      this.recipes$ =  this.addUserRecipe.getRecipes(user.uid);
    });
    // this.recipes$ =  this.addUserRecipe.getRecipes();

  }

  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.id]);
  }

  addCustomerRecipe() {
    this.dialog.open(AddNewRecipeComponent);
  }

}


