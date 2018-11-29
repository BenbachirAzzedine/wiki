import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public send: EventEmitter<any> = new EventEmitter();

  constructor() { }

  sendTerm(term) {
    this.send.emit(term);
  }
}
