import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchComponent } from './components/search/search.component';
import { RecipesListByIngredientComponent } from './components/recipes-list-by-ingredient/recipes-list-by-ingredient.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes_list', component: RecipesListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'ingredient_search', component: RecipesListByIngredientComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
