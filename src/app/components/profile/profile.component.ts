import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { AddNewRecipeComponent } from '../add-new-recipe/add-new-recipe.component';
//import {Recipe} from '../../models/recipe' 


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //userRecipe: Recipe = {}

  constructor(
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  addCustomerRecipe() {
    this.dialog.open(AddNewRecipeComponent);
  }
}

