import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../recipe.service';

import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  clicked = false;
  favorite = 'favorite_border';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    if (this.recipe.isFavorite === false) {
      this.favorite = 'favorite_border';
    } else if (this.recipe.isFavorite === true) {
      this.favorite = 'favorite';
    }
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

  handleFavorite() {
    if (this.favorite === 'favorite_border') {
      this.favorite = 'favorite';
      this.recipe.isFavorite = true;
    } else {
      this.favorite = 'favorite_border';
      this.recipe.isFavorite = false;
    }
  }

}

