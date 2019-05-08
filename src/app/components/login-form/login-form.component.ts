import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  public loginRedirect(): void {
    this.router.navigate(['/profile']);
  }
  public printUser(event: Event): void {
    console.log(event);
  }

  public printError(event: Event): void {
    console.error(event);
  }

  ngOnInit() {}
}
