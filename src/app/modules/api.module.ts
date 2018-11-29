import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  ApiService,

  CategoriesService,
  CategoriesHydratorService,
  CategoriesGatewayService,

  PlugService,
  PlugHydratorService,
  PlugGatewayService
} from '../services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiService,

    CategoriesService,
    CategoriesHydratorService,
    CategoriesGatewayService,

    PlugService,
    PlugHydratorService,
    PlugGatewayService
  ]
})

export class ApiModule {

}
