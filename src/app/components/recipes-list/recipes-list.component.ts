import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { RecipeService} from '../../services/recipe.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  searchText: string;
  cuisineTypes$: Observable<string[]>;
  selectedCuisineType: string;
  selectedCookDuration: string;
  selectedNumberOfIngr: string;
  selectedRating: string;
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
    if (this.selectedRating) {
      switch (this.selectedRating) {
        case '0-1':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.rating <= 1) {
              return recipe;
            }
          });
          break;
        case '1-2':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.rating <= 2 && recipe.rating >= 1) {
              return recipe;
            }
          });
          break;
        case '2-3':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.rating <= 3 && recipe.rating >= 2) {
              return recipe;
            }
          });
          break;
        case '3-4':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.rating <= 4 && recipe.rating >= 3) {
              return recipe;
            }
          });
          break;
        case '4-5':
          this.filteredrecipes = this.filteredrecipes.filter((recipe) => {
            if (recipe.rating <= 5 && recipe.rating >= 4) {
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
