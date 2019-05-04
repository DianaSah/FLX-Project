import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../../mock_recepies';
import {NgForm} from '@angular/forms';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { getInjectorIndex } from '@angular/core/src/render3/di';


@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.scss']
})
export class AddNewRecipeComponent implements OnInit {
  
  genId(){
    return (RECIPES.length +1);
  }

  onSubmitNewRecipe(value: any) {
    
    let CustomRecipe = {
      id: this.genId(),
      title: value.title,
      imageSrc: '',
      description: value.description,
      cuisineType: value.cuisineType,
      rating: 0,
      isFavorite: false,
      cookDuration: value.cookDuration,
      ingredients: value.ingredients,
      steps: value.steps
    };
    console.log(CustomRecipe);
    RECIPES[RECIPES.length] = CustomRecipe;
    console.log(RECIPES);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
