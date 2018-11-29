import { TestBed, inject } from '@angular/core/testing';

import { PlugHydratorService } from './plug-hydrator.service';
import { Plug } from './../../models';

describe('PlugHydratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', inject([PlugHydratorService], (service: PlugHydratorService) => {
    expect(service).toBeTruthy();
  }));

  it('should hydrate plug', inject([PlugHydratorService], (service: PlugHydratorService) => {
    const plug = <Plug>{
      id: 1,
      publicationDate: 'fake',
      title: 'fake',
      description: 'fake',
      url: ['fake'],
      categories: [1],
      plugLink: [1],
      forward: false
    };

    const plugApi = {
      id: 1,
      publicationDate: 'fake',
      title: 'fake',
      description: 'fake',
      url: ['fake'],
      categories: [1],
      plugLink: [1],
      forward: false
    };

    expect(JSON.stringify(service.hydratePlug(plugApi))).toEqual(JSON.stringify(plug));
  }));
});
