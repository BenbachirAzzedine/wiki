import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';


import { HomePageComponent } from './home-page.component';
import { CardsModule } from './../common/cards/cards.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatCardModule,

    CardsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
