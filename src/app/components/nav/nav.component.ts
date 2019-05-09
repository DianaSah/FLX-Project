import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckLogInService } from 'src/app/check-log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('searchRecipe') searchElement: ElementRef;
  clicked: boolean = false;
  constructor(
    private router: Router,
    private checkLogInService: CheckLogInService
  ) {}

  ngOnInit() {}

  handleNavSearch() {
    this.clicked = !this.clicked;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }
  handleInpSearch() {
    this.clicked = !this.clicked;
  }

  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }

  catchLogOutEvent(): void {
    this.checkLogInService.IsUserLogIn = false;
    this.toggle();
    this.router.navigate(['']);
  }
}
