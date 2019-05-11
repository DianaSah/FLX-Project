import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }
  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.id]);
  }
  ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }

}
