import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFocus() {
      this.clicked = !this.clicked;
  }

}
