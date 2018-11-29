import { Injectable } from '@angular/core';

import { Categories } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesHydratorService {

  constructor() {
  }

  hydrateCategories(data: any): Categories {
    const cat = new Categories();

    cat.id = data.id;
    cat.name = data.name;

    return cat;
  }
}
