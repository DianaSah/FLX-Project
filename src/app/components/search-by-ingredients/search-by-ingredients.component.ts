import { Component, OnInit } from '@angular/core';
import { SearchByIngredientsService } from '../../search-by-ingredients.service';
import { Observable, Subject, of } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IMAGES_SRC } from '../../mock-images-src';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.scss']
})

export class SearchByIngredientsComponent implements OnInit {
  isMouseOverList: boolean;
  imagesSrc1: object[] = IMAGES_SRC.slice(0, Math.floor((IMAGES_SRC.length) / 2));
  imagesSrc2: object[] = IMAGES_SRC.slice(Math.floor((IMAGES_SRC.length) / 2), IMAGES_SRC.length);
  chosenIngr: string;
  ingredients$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  newSearchHintList: boolean;

  public hintIngredients: string[] = [];
  public i: number;
  public chosenIngredients: string[] = [];
  constructor(private searchByIngredientsService: SearchByIngredientsService) {
  }

    // Push a search term into the observable stream.
    search(term: string): void {
      this.newSearchHintList = true;
      this.searchTerms.next(term);
    }
  ngOnInit(): void {
    this.isMouseOverList = false;
    this.ingredients$ = this.searchTerms.pipe(
      // wait 100ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        this.searchByIngredientsService.searchIngredients(term).subscribe((ingredients) => {
          this.hintIngredients = ingredients;
        });
        return this.searchByIngredientsService.searchIngredients(term);
      }),
    );
  }

  addToListFromHint(ingredient: string): void {
    this.chosenIngr = ingredient;
    this.addIngredientToList();
  }

  deleteIngredient(ingredient: string): void {
    this.chosenIngredients = this.chosenIngredients.filter((ingr) => ingr !== ingredient);
  }

  addIngredientToList(): void {
    this.search('');
    if (!this.chosenIngr) {
      this.chosenIngr = null;
    } else if (this.chosenIngredients.indexOf(this.chosenIngr) === -1 && this.chosenIngr.trim()) {
      this.chosenIngredients.push(this.chosenIngr);
    }
    this.chosenIngr = null;
  }

  drop(event: CdkDragDrop<string[]>) {
      if (this.isMouseOverList) {
        this.chosenIngr = event.item.element.nativeElement.firstElementChild.getAttribute('name');
        this.addIngredientToList();
      }
  }
  exportIngredients() {
    this.searchByIngredientsService.chosenIngre = this.chosenIngredients;
  }

  arrowDown() {
    if (this.newSearchHintList) {
      this.i = -1;
      this.newSearchHintList = false;
    }
    if (this.i !== this.hintIngredients.length - 1 ) {
      this.i++;
      this.chosenIngr = this.hintIngredients[this.i];
    } else {
      this.i = 0;
      this.chosenIngr = this.hintIngredients[this.i];
    }
  }
   arrowUp() {
    if (this.newSearchHintList) {
      this.i = this.hintIngredients.length;
      this.newSearchHintList = false;
    }
    if (this.i !== 0) {
      this.i--;
      this.chosenIngr = this.hintIngredients[this.i];
    } else {
      this.i = this.hintIngredients.length - 1;
      this.chosenIngr = this.hintIngredients[this.i];
    }
   }
}
