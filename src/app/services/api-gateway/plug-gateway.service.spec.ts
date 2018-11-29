import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlugGatewayService } from './plug-gateway.service';
import { PlugHydratorService } from './../api-hydrator/plug-hydrator.service';
import { PlugService } from './../api/plug.service';

import { of } from 'rxjs';

describe('PlugGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [PlugGatewayService]
  }));

  it('should be created', inject([PlugGatewayService], (service: PlugGatewayService) => {
    expect(service).toBeTruthy();
  }));

  it('should loadPlug()',
  inject(
    [PlugGatewayService,
      PlugService,
      PlugHydratorService
    ],
    (service: PlugGatewayService,
     api: PlugService,
     hydrator: PlugHydratorService) => {
      const fakeData = [
        {
          id: 1,
          publicationDate: 'fake',
          title: 'fake',
          description: 'fake',
          url: ['fake'],
          categories: ['fake'],
          plugFile: ['fake'],
          forward: 'fake'
        }
      ];

      spyOn(api, 'getPlugs').and.returnValue(of(fakeData));
      spyOn(hydrator, 'hydratePlug').and.returnValue({});

      service.loadPlugs();

      expect(api.getPlugs).toHaveBeenCalled();
      expect(hydrator.hydratePlug).toHaveBeenCalledWith(fakeData[0]);
    }
  )
);
});
