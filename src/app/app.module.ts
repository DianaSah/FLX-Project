import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarRatingModule } from 'angular-star-rating';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import {ModalComponent, ShareComponent} from './components/share/share.component';
import { AutofocusDirective } from './autofocus.directive';
import {SearchComponent} from './components/search/search.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
    ModalComponent,
    AutofocusDirective,
    SearchComponent,
    SafePipe
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
    MatListModule,
    MatTooltipModule,
    FormsModule,
    DragDropModule,
    MatCardModule,
    MatDialogModule,
    StarRatingModule.forRoot(),
    NgxAuthFirebaseUIModule.forRoot({
    apiKey: "AIzaSyAPCaQl95Xh3q9DS8VhATyLxwKKuGzmick",
    authDomain: "cookbook-epam2019.firebaseapp.com",
    databaseURL: "https://cookbook-epam2019.firebaseio.com",
    projectId: "cookbook-epam2019",
    storageBucket: "cookbook-epam2019.appspot.com",
    messagingSenderId: "21753682188",
    appId: "1:21753682188:web:1888b214325b993f"
    }),
    HttpClientModule,
    ShareButtonsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
