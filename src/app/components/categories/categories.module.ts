import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from './../common/cards/cards.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,

    CardsModule
  ]
})
export class CategoriesModule { }
