import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public printUser(event: Event): void {
    console.log(event);
  }

  public printError(event: Event): void {
    console.error(event);
  }

  constructor() {}

  ngOnInit() {}
}
