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

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  // recipe: Recipe = {
  //   id: 1,
  //   title: 'Spaghetti Bolognese',
  //   imageSrc:
  //     'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
  //   description:
  //     'Our best ever spaghetti Bolognese is super easy and a true Italian classic',
  //   cuisineType: 'italian',
  //   rating: 0,
  //   isFavorite: false,
  //   cookDuration: 30,
  //   ingredients: ['garlic', 'tomato', 'parmesan', 'beef', 'onion', 'spaghetti'],
  //   steps:
  //     'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins.Add the garlic and mince and fry until they both brown.Add the mushrooms and herbs, and cook for another couple of mins.Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning.Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions.Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce.Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
  // };

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

}

