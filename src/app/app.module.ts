import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import {ModalComponent, ShareComponent} from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeComponent,
    HomeComponent,
    ProfileComponent,
    RecipesListComponent,
    LoginFormComponent,
    SearchByIngredientsComponent,
    SearchByNameComponent,
    ShareComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    StarRatingModule.forRoot(),
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyDFRKhQ0MIfPRQz8htnyBntkpChVkLYiDE",
      authDomain: "cookbook-bf1ce.firebaseapp.com",
      databaseURL: "https://cookbook-bf1ce.firebaseio.com",
      projectId: "cookbook-bf1ce",
      storageBucket: "cookbook-bf1ce.appspot.com",
      messagingSenderId: "77682848734"
    }),
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
