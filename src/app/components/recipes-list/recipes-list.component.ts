import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { RecipeService} from '../../recipe.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  viewDetails(recipe) {
    this.router.navigate(['/recipe/' + recipe.id]);
  }
  ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }

}
