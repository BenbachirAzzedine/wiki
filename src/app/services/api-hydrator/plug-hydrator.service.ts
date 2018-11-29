import { Injectable } from '@angular/core';

import { Plug } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class PlugHydratorService {

  constructor() {
  }

  hydratePlug(data: any): Plug {
    const plu = new Plug();

    plu.id = data.id;
    plu.publicationDate = data.publicationDate;
    plu.title = data.title;
    plu.logo = data.logo;
    plu.description = data.description;
    plu.url = data.url;
    plu.categories = data.categories;
    plu.plugLink = data.plugLink;
    plu.tags = data.tags;
    plu.forward = data.forward;

    return plu;
  }
}
