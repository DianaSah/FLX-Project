import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddNewRecipeComponent} from '../add-new-recipe/add-new-recipe.component';
//import {Recipe} from '../../models/recipe'
import {CheckLogInService} from '../../check-log-in.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //userRecipe: Recipe = {}
  isLoggedIn: boolean = this.checkLogInService.isUserLogIn;

  constructor(
    private dialog: MatDialog,
    private checkLogInService: CheckLogInService
  ) { }

  ngOnInit() {}

  addCustomerRecipe() {
    this.dialog.open(AddNewRecipeComponent);
  }

}

