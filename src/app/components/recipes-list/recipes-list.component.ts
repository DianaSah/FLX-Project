import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { RecipeService} from '../../services/recipe.service';
import {DOCUMENT} from '@angular/common';

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
  rating: string[] = ['0-1', '1-2', '2-3', '3-4', '4-5'];
  numberIngr: string[] = ['2-5', '5-8', '8-11', '11+'];
  timeCook: string[] = ['5-15', '15-30', '30-45', '45+'];
  windowScrolled: boolean;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

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
