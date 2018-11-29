import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoriesHydratorService } from './../api-hydrator/categories-hydrator.service';
import { CategoriesService } from './../api/categories.service';
import { CategoriesGatewayService } from './categories-gateway.service';

import { of } from 'rxjs';

describe('CategoriesGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [CategoriesGatewayService]
  }));

  it('should be created', inject([CategoriesGatewayService], (service: CategoriesGatewayService) => {
    expect(service).toBeTruthy();
  }));

  it('should loadCategories()',
  inject(
    [CategoriesGatewayService,
      CategoriesService,
      CategoriesHydratorService
    ],
    (service: CategoriesGatewayService,
     api: CategoriesService,
     hydrator: CategoriesHydratorService) => {
      const fakeData = [
        {
          id: 1,
          name: 'fake'
        }
      ];

      spyOn(api, 'getCategories').and.returnValue(of(fakeData));
      spyOn(hydrator, 'hydrateCategories').and.returnValue({});

      service.loadCategories();

      expect(api.getCategories).toHaveBeenCalled();
      expect(hydrator.hydrateCategories).toHaveBeenCalledWith(fakeData[0]);
    }
  )
);
});
