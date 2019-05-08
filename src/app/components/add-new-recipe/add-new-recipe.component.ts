import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../../mock_recepies';
import {NgForm} from '@angular/forms';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { getInjectorIndex } from '@angular/core/src/render3/di';
import { fbind } from 'q';
import {RecipesFbService, } from '../../services/recipes-fb.service'

import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.scss']
})
export class AddNewRecipeComponent implements OnInit {
  newRecipeForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: RecipesFbService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newRecipeForm = this.fb.group({
      title: [''],
      imageSrc: [''],
      description: [''],
      cuisineType: [''],
      cookDuration: [''],
      ingredients: [''],
      steps: ['']
    });
  }

  resetFields(){
    this.newRecipeForm = this.fb.group({
      title: new FormControl(''),
      imageSrc: new FormControl(''),
      description: new FormControl(''),
      cuisineType: new FormControl(''),
      cookDuration: new FormControl(''),
      ingredients: new FormControl(''),
      steps: new FormControl('')
    });
  }

  onSubmitNewRecipe(value) {
    this.firebaseService.addRecipe(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['profile']);
      }
    )
    console.log(value);
  }

}
