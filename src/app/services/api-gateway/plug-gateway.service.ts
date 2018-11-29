import { Injectable } from '@angular/core';

import { PlugHydratorService} from '../api-hydrator/plug-hydrator.service';
import { PlugService } from '../api/plug.service';
import { Plug } from './../../models';

import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class PlugGatewayService {

  constructor(private service: PlugService, private hydrator: PlugHydratorService) {
  }

  loadPlugs(): Promise<Plug[]> {
    const me = this;
    let _plug: Plug[];

    return new Promise(((resolve, reject) => {
      me.service.getPlugs().subscribe(res => {
        _plug = res.map(plu => me.hydrator.hydratePlug(plu));
        resolve(_plug);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadPlugByCategories(category: string): Promise<Plug[]> {
    const me = this;
    let _plug: Plug[];

    return new Promise(((resolve, reject) => {
      me.service.getPlugs().subscribe(res => {
        _plug = res.map(plu => me.hydrator.hydratePlug(plu)).filter((plu) => {
          return plu.categories.indexOf(category) !== -1;
          });
        resolve(_plug);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadPlugByTerms(term: string): Promise<Plug[]> {
    const me = this;
    let _plug: Plug[];

    return new Promise(((resolve, reject) => {
      me.service.getPlugs().subscribe(res => {
        _plug = res.map(plug => me.hydrator.hydratePlug(plug)).filter((plug) => {
          return [
            plug.id,
            plug.publicationDate,
            plug.title,
            plug.description,
            plug.url,
            plug.categories,
            plug.plugLink,
            plug.tags,
          ].join(' ').includes(term);
          });
        resolve(_plug);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadPlugById(id: string): Promise<Plug[]> {
    const me = this;
    let _plug: Plug[];

    return new Promise(((resolve, reject) => {
      me.service.getPlugs().subscribe(res => {
        _plug = res.map(plu => me.hydrator.hydratePlug(plu)).filter((plu) => {
          return plu.id.indexOf(id) !== -1;
          });
        resolve(_plug);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadPlugByForward(): Promise<Plug[]> {
    const me = this;
    let _plug: Plug[];

    return new Promise(((resolve, reject) => {
      me.service.getPlugs().subscribe(res => {
        _plug = res.map(plu => me.hydrator.hydratePlug(plu)).filter((plu) => {
          return plu.forward === true;
          });
        resolve(_plug);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

}
