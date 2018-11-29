import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'homepage', component: HomePageComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: 'categories/:id', component: CategoriesComponent
  },
  {
    path: 'search', component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
