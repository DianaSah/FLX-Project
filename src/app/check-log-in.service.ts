import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLogInService {
  IsUserLogIn: boolean = false;
  constructor() { }
}
