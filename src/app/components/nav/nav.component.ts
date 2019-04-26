import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked = false;
  constructor() { }

  ngOnInit() {
  }
  handleNavSearch() {
    this.clicked = !this.clicked;
    setTimeout(()=>{
      this.searchElement.nativeElement.focus();
    },50);
  }
  handleInpSearch(){
    this.clicked = !this.clicked;
  }

}
