import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  providers = AuthProvider;

  printUser(event) {
    console.log(event);
  }

  printError(event) {
   console.error(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
