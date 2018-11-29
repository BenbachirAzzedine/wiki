import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';
import { environment } from './../../../environments/environment';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [CategoriesService]
  }));

  it('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));

  it('should send a request on get()',
  async(
    inject([CategoriesService, HttpTestingController], (service: CategoriesService, backend: HttpTestingController) => {
      service.getCategories().subscribe();

      backend.expectOne({
        url: environment.httpdBackHost + '/categories.json',
        method: 'GET'
      }, 'GET TO /categories');
    })
  )
);

});
