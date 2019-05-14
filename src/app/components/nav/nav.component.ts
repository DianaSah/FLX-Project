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
  visibility: boolean = true;

  constructor(
    private router: Router,
    public checkLogInService: CheckLogInService
  ) {}

  ngOnInit() {
    this.checkLogInService.checkLogin();
  }

  toggleFocus() {
    this.clicked = !this.clicked;
  }

  toggle() {
    this.visibility = !this.visibility;
  }

  catchLogOutEvent(): void {
    this.checkLogInService.isUserLogIn = false;
    this.toggle();
    this.router.navigate(['']);
  }
}
