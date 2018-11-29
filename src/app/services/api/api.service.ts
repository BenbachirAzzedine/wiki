import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  protected environment: { production: boolean, httpdBackHost: string };

  constructor(protected http: HttpClient) {
    this.environment = environment;
  }

}
