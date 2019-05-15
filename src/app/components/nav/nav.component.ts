import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckLogInService } from 'src/app/check-log-in.service';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {RecipeService} from '../../recipe.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked: boolean = false;
  visibility: boolean = true;

  chosenRecpTitle: string;
  recipes$: Observable<Recipe[]>;
  private searchTerms = new Subject<string>();
  newSearchHintList: boolean;

  public hintRecipes: Recipe[] = [];
  public i: number;
  public chosenRecipes: string[] = [];

  constructor(
    private router: Router,
    public checkLogInService: CheckLogInService,
    private recipeService: RecipeService,
  ) {}
  search(term: string): void {
    this.newSearchHintList = true;
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.checkLogInService.checkLogin();
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => {
        this.recipeService.searchRecipes(term).subscribe((recipes) => {
           this.hintRecipes = recipes;
        });
        return this.recipeService.searchRecipes(term);
      }),
    );
  }

  openRecipe(recipe) {
      this.router.navigate(['/recipe/' + recipe.id]);
      this.chosenRecpTitle = null;
      this.hintRecipes = [];
  }

  openRecipeEnterKey() {
    let id: string;
    this.hintRecipes.forEach((recipe) => {
      if (recipe.title === this.chosenRecpTitle) {
        id = recipe.id;
      }
    });
    this.clicked = !this.clicked;
    this.chosenRecpTitle = null;
    this.hintRecipes = [];
    this.router.navigateByUrl('/recipe/' + id);
  }

  toggleFocus() {
    setTimeout(() => {
      this.clicked = !this.clicked;
      this.chosenRecpTitle = null;
    }, 200);
  }

  toggle() {
    this.visibility = !this.visibility;
  }

  catchLogOutEvent(): void {
    this.checkLogInService.isUserLogIn = false;
    this.toggle();
    this.router.navigate(['']);
  }

  arrowDown() {
    if (!this.hintRecipes[0]) {
      return;
    }
    if (this.newSearchHintList) {
      this.i = -1;
      this.newSearchHintList = false;
    }
    if (this.i !== this.hintRecipes.length - 1 ) {
      this.i++;
      this.chosenRecpTitle = this.hintRecipes[this.i].title;
    } else {
      this.i = 0;
      this.chosenRecpTitle = this.hintRecipes[this.i].title;
    }
  }
   arrowUp() {
    if (!this.hintRecipes[0]) {
    return;
    }
    if (this.newSearchHintList) {
      this.i = this.hintRecipes.length;
      this.newSearchHintList = false;
    }
    if (this.i !== 0) {
      this.i--;
      this.chosenRecpTitle = this.hintRecipes[this.i].title;
    } else {
      this.i = this.hintRecipes.length - 1;
      this.chosenRecpTitle = this.hintRecipes[this.i].title;
    }
   }

}
