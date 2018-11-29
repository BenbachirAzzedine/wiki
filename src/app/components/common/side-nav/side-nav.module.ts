import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { SideNavComponent } from './side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ],
  declarations: [SideNavComponent],
  exports: [SideNavComponent]
})
export class SideNavModule { }
