import { Component, OnInit } from '@angular/core';

import { CategoriesGatewayService } from './../../services/api-gateway/categories-gateway.service';
import { PlugGatewayService } from './../../services/api-gateway/plug-gateway.service';
import { Plug, Categories} from 'src/app/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards: Plug[];
  categorie: Categories[];
  catId;
  error: any;

  loading = false;

  constructor(
    private plugGatewayService: PlugGatewayService,
    private categoriesGatewayService: CategoriesGatewayService,
  ) { }

  ngOnInit() {
    this.loadCards();
  }

  async loadCards() {
    this.loading = true;
    try {
      await this.plugGatewayService.loadPlugByForward()
      .then((card: Plug[]) => { this.cards = card; },
        error => this.error = error
      );
      this.loadCategories();
    } catch (error) {

    }

  }

  loadCategories() {
    this.catId = this.cards.map(car => car.categories[0]);
    console.log(this.catId);
    this.categoriesGatewayService.loadCategories()
    .then((category: Categories[]) => {this.categorie = category; },
    error => this.error = error
    ).finally(() => {
      this.loading = false;
    });
  }
}
