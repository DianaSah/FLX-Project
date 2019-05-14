import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CheckLogInService {
  isUserLogIn: boolean;

  constructor() { }

  checkLogin() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isUserLogIn = true;
      } else {
        this.isUserLogIn = false;
      }
    });
  }
}
