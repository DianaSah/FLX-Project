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
  choosenIngr: string;
  ingredients$: Observable<string[]>;
  private searchTerms = new Subject<string>();

  choosenIngredients: string[] = [];

  constructor(private searchByIngredientsService: SearchByIngredientsService ) { }

    // Push a search term into the observable stream.
    search(term: string): void {
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
      switchMap((term: string) => this.searchByIngredientsService.searchIngredients(term)),
    );
  }

  addToListFromHint(ingredient: string): void {
    this.choosenIngr = ingredient;
    this.addIngredientToList();
  }

  deleteIngredient(ingredient: string): void {
    this.choosenIngredients = this.choosenIngredients.filter((ingr) => ingr !== ingredient);
  }

  addIngredientToList(): void {
    this.search('');
    this.choosenIngredients.push(this.choosenIngr);
    this.choosenIngr = null;
  }

  drop(event: CdkDragDrop<string[]>) {
      if (this.isMouseOverList) {
        this.choosenIngr = event.item.element.nativeElement.firstElementChild.getAttribute('name');
        this.addIngredientToList();
      }
  }
}
