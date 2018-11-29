import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { CardsModule } from './../common/cards/cards.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,

    CardsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
