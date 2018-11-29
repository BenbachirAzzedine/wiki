import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [DetailsComponent],
  exports: [DetailsComponent]
})
export class DetailsModule { }
