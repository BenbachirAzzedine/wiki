import { Injectable } from '@angular/core';

import { CategoriesService } from '../api';
import { Categories } from './../../models';
import { CategoriesHydratorService} from '../api-hydrator';

import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class CategoriesGatewayService {

  constructor(private service: CategoriesService, private hydrator: CategoriesHydratorService) {
  }

  loadCategories(): Promise<Categories[]> {
    const me = this;
    let _categories: Categories[];

    return new Promise(((resolve, reject) => {
      me.service.getCategories().subscribe(res => {
        _categories = res.map(cat => me.hydrator.hydrateCategories(cat));
        resolve(_categories);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadCategoriesById(id: string): Promise<Categories> {
    const me = this;
    let _categories: Categories[];

    return new Promise(((resolve, reject) => {
      me.service.getCategories().subscribe(res => {
        _categories = res.map(cat => me.hydrator.hydrateCategories(cat)).filter((cat) => {
            return cat.id.indexOf(id) !== -1;
          });
        resolve(_categories[0]);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }

  loadCategoriesByIds(id: string): Promise<Categories> {
    const me = this;
    let _categories: Categories[];

    return new Promise(((resolve, reject) => {
      me.service.getCategories().subscribe(res => {
        _categories = res.map(cat => me.hydrator.hydrateCategories(cat)).filter((cat) => {
            return cat.id.indexOf(id) !== -1;
          });
        resolve(_categories[0]);
      }, err => {
        reject(err);
        return throwError(err || 'Server error');
      });
    }));
  }
}
