import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlugService } from './plug.service';
import { environment } from './../../../environments/environment';

describe('PlugService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [PlugService]
  }));

  it('should be created', inject([PlugService], (service: PlugService) => {
    expect(service).toBeTruthy();
  }));

  it('should send a request on get()',
  async(
    inject([PlugService, HttpTestingController], (service: PlugService, backend: HttpTestingController) => {
      service.getPlugs().subscribe();

      backend.expectOne({
        url: environment.httpdBackHost + '/plug.json',
        method: 'GET'
      }, 'GET TO /plug');
    })
  )
);
});
