import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../../mock_recepies';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[] = RECIPES;

  constructor() { }

  ngOnInit() {
  }

}
