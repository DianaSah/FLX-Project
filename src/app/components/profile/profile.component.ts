import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddNewRecipeComponent} from '../add-new-recipe/add-new-recipe.component';
//import {Recipe} from '../../models/recipe'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //userRecipe: Recipe = {}
  isLoggedIn: boolean;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.isLoggedIn = true : this.isLoggedIn = false;
    });
  }

  addCustomerRecipe() {
    this.dialog.open(AddNewRecipeComponent);
  }

}

