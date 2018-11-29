import { TestBed, inject } from '@angular/core/testing';

import { CategoriesHydratorService } from './categories-hydrator.service';
import { Categories } from './../../models';

describe('CategoriesHydratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', inject([CategoriesHydratorService], (service: CategoriesHydratorService) => {
    expect(service).toBeTruthy();
  }));

  it('should hydrate category', inject([CategoriesHydratorService], (service: CategoriesHydratorService) => {
    const categories = <Categories>{
      id: 1,
      name: 'fake',
    };

    const categoriesApi = {
      id: 1,
      name: 'fake',
    };

    expect(JSON.stringify(service.hydrateCategories(categoriesApi))).toEqual(JSON.stringify(categories));
  }));
});
