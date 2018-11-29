import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './components/common/cards/cards.module';
import { HeaderModule } from './components/common/header/header.module';
import { SideNavModule } from './components/common/side-nav/side-nav.module';
import { DetailsModule } from './components/details/details.module';
import { CategoriesModule } from './components/categories/categories.module';
import { SearchModule } from './components/search/search.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    HeaderModule,
    SideNavModule,
    CardsModule,
    DetailsModule,
    CategoriesModule,
    SearchModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
