import { Component, OnInit, Input } from '@angular/core';
// import { RECIPES } from '../../mock_recepies';
import { Recipe } from '../../models/recipe';
import {SearchByIngredientsService} from '../../services/search-by-ingredients.service';
import { Observable } from 'rxjs';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;
  // public filteredRecipes$: Observable<string[]>;

  public constructor(private searchByIngredientsService: SearchByIngredientsService) {
    this.recipes$ = this.searchByIngredientsService.getRecipesInDb();
  }

  ngOnInit() {
  }

}
