import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../../mock_recepies';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.scss']
})
export class AddNewRecipeComponent implements OnInit {
  recipes = RECIPES;

  onSubmitNewRecipe(value: any) {
    console.log(value);  
  }
  constructor() { }

  ngOnInit() {
  }

}
