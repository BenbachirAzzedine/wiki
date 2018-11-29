import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { Plug, Categories } from 'src/app/models';
import { PlugGatewayService } from './../../services/api-gateway/plug-gateway.service';
import { CategoriesGatewayService } from './../../services/api-gateway/categories-gateway.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cards: Plug[];
  categorie: Categories;
  error: any;

  loading = false;

  catId;

  constructor(
    private plugGatewayService: PlugGatewayService,
    private categoriesGatewayService: CategoriesGatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCards();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadCards();
      }
    });
  }

  async loadCards() {
    this.catId = this.route.snapshot.paramMap.get('id');
    this.loading = true;
     try {
       await this.plugGatewayService.loadPlugByCategories(this.catId)
         .then((card: Plug[]) => { this.cards = card; },
           error => this.error = error
         );

         this.loadCategories();

     } catch (error) {

     }
  }

  loadCategories() {
    this.categoriesGatewayService.loadCategoriesById(this.catId)
    .then((category: Categories) => {this.categorie = category; },
    error => this.error = error
    ).finally(() => {
      this.loading = false;
    });
  }
}
