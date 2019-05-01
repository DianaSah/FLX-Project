import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';
import { AddNewRecipeComponent } from './components/add-new-recipe/add-new-recipe.component';

import {RecipesFbService} from './services/recipes-fb.service';

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
    AddNewRecipeComponent
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
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'FLX-project'),
    AngularFirestoreModule
  ],
  providers: [RecipesFbService],
  bootstrap: [AppComponent],
  entryComponents: [AddNewRecipeComponent]
})
export class AppModule { }
