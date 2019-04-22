import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../../mock_recepies';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes = RECIPES;

  constructor() { }

  ngOnInit() {
  }

}
