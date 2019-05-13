import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckLogInService } from 'src/app/check-log-in.service';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked: boolean = false;
  visibility: boolean = true;

  isMouseOverList: boolean;
  chosenRecp: string;
  recipes$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  newSearchHintList: boolean;

  public hintRecipes: string[] = [];
  public i: number;
  public chosenRecipes: string[] = [];

  constructor(
    private router: Router,
    public checkLogInService: CheckLogInService,
    private recipeService: RecipeService
  ) {}
  search(term: string): void {
    this.newSearchHintList = true;
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.isMouseOverList = false;
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
    this.chosenRecp = null;
  }

  toggleFocus() {
    this.clicked = !this.clicked;
    this.chosenRecp = null;
  }

  toggle() {
    this.visibility = !this.visibility;
  }

  exportRecipes() {
    this.recipeService.chosenRecipe = this.chosenRecipes;
  }

  catchLogOutEvent(): void {
    this.checkLogInService.IsUserLogIn = false;
    this.toggle();
    this.router.navigate(['']);
  }

}
