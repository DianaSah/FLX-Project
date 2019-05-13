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
  searchValue: string = "";
  recipes$: Observable<Recipe[]>;
  recipes: Array<any>;

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

  searchByName() {
    let value = this.searchValue.toLowerCase();
    this.searchRecipes(value)
      .subscribe(result => {
        this.recipes = result;
      });
  }

  searchRecipes(searchValue) {
    return this.afs.collection<Recipe>('recipes',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }


}
