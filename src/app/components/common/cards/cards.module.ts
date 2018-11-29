import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { HomePageComponent } from './../../home-page/home-page.component';




@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
  ],
  declarations: [CardsComponent, HomePageComponent],
  exports: [CardsComponent]
})
export class CardsModule { }
