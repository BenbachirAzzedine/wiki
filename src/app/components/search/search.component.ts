import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { PlugGatewayService } from './../../services/api-gateway/plug-gateway.service';
import { Plug, Categories } from './../../models';
import { SearchService } from './../../services/search.service';
import { CategoriesGatewayService } from './../../services/api-gateway/categories-gateway.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  cards: Plug[];
  categorie: Categories[];
  error: any;

  constructor(
    private plugGatewayService: PlugGatewayService,
    private categoriesGatewayService: CategoriesGatewayService,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.loadTerm();
    this.loadCategories();
  }

  loadTerm() {
    this.searchService.send.pipe(debounceTime(400),
      distinctUntilChanged()).subscribe(res => {
        this.plugGatewayService.loadPlugByTerms(res)
          .then((card: Plug[]) => { this.cards = card; },
            error => this.error = error
          );
      });
  }


  loadCategories() {
    this.categoriesGatewayService.loadCategories()
      .then((category: Categories[]) => { this.categorie = category; },
        error => this.error = error
      );
  }
}
