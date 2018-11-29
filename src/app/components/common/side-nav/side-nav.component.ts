import { Component, OnInit } from '@angular/core';

import { Categories } from '../../../models/categories';
import { CategoriesGatewayService } from '../../../services/api-gateway/categories-gateway.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  categories: Categories[];
  error: any;

  constructor(
    private categoriesGatewayService: CategoriesGatewayService,
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoriesGatewayService.loadCategories()
      .then((categories: Categories[]) => { this.categories = categories; },
        error => this.error = error
      );
  }
}
