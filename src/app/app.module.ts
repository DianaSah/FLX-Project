import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatIconModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeComponent,
    HomeComponent,
    ProfileComponent,
    RecipesListComponent,
    LoginFormComponent,
    SearchByIngredientsComponent
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
    NgxAuthFirebaseUIModule.forRoot({
    apiKey: "AIzaSyAPCaQl95Xh3q9DS8VhATyLxwKKuGzmick",
    authDomain: "cookbook-epam2019.firebaseapp.com",
    databaseURL: "https://cookbook-epam2019.firebaseio.com",
    projectId: "cookbook-epam2019",
    storageBucket: "cookbook-epam2019.appspot.com",
    messagingSenderId: "21753682188",
    appId: "1:21753682188:web:1888b214325b993f"
    }),

  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
