import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { RecipeService} from '../../recipe.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  cuisineTypes$: Observable<string[]>;
  selectedCuisineType: string;
  selectedCookDuration: string;
  selectedNumberOfIngr: string;
  recipes: Recipe[] = [];
  filteredrecipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.id]);
  }
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredrecipes = recipes;
    });
    this.cuisineTypes$ = this.recipeService.getCuisineTypes();
  }
  filter() {
    this.filteredrecipes = this.recipes;
    if (this.selectedCookDuration) {
      switch (this.selectedCookDuration) {
        case '5-15':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.cookDuration <= 15) {
              return recipe;
            }
          });
          break;
        case '15-30':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.cookDuration <= 30 && recipe.cookDuration >= 15) {
              return recipe;
            }
          });
          break;
        case '30-45':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.cookDuration <= 45 && recipe.cookDuration >= 30) {
              return recipe;
            }
          });
          break;
        case '45+':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.cookDuration >= 45) {
              return recipe;
            }
          });
          break;
      }
    }

    if (this.selectedNumberOfIngr) {
      switch (this.selectedNumberOfIngr) {
        case '2-5':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.ingredients.length <= 5) {
              return recipe;
            }
          });
          break;
        case '5-8':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.ingredients.length <= 8 && recipe.ingredients.length >= 5) {
              return recipe;
            }
          });
          break;
        case '8-11':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.ingredients.length <= 11 && recipe.ingredients.length >= 8) {
              return recipe;
            }
          });
          break;
        case '11+':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.ingredients.length >= 11) {
              return recipe;
            }
          });
          break;
      }
    }
    if (this.selectedCuisineType) {
      this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
        if (recipe.cuisineType === this.selectedCuisineType) {
          return recipe;
        }
      });
    }

  }

}
