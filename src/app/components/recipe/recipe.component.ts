import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any;
  favorite: string = 'favorite_border';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.recipe = data.payload.data();
        this.recipe.id = data.payload.id;
      }
    });
    this.favorite = this.recipe.isFavorite ? 'favorite' : 'favorite_border';
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

