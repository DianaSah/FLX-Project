import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked = false;
  constructor() { }

  ngOnInit() {
  }
  handleNavSearch() {
    this.clicked = !this.clicked;
    setTimeout(()=>{
      this.searchElement.nativeElement.focus();
    },150);
  }
  handleInpSearch(){
    setTimeout(()=>{
      this.searchElement.nativeElement.focus();
      this.clicked = !this.clicked;
    },150);
  }

}
