import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchByIngredientsService } from 'src/app/search-by-ingredients.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;

  constructor(
    private serchByIngredientsService: SearchByIngredientsService,
    private router: Router
  ) { }
  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.payload.doc.id]);
  }
  ngOnInit() {
    this.recipes$ = this.serchByIngredientsService.getRecipesInDb();
  }

}
