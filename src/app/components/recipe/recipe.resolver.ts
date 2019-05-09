import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { RecipeService } from '../../recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<any> {

  constructor(public recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      let recipeId = route.paramMap.get('id');
      this.recipeService.getRecipeById(recipeId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}
