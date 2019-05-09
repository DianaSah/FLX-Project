import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: any = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }
  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.payload.doc.id]);
  }
  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe((recipe) => this.recipes = recipe
    );
  }

}
