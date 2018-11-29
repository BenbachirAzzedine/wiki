import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService extends ApiService {
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.environment.httpdBackHost + '/categories.json');
  }
}
