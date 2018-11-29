import { Component, OnInit, Input } from '@angular/core';

import { Plug, Categories } from 'src/app/models';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input() card: Plug;
  @Input() category: Categories;
  @Input() error: any;

  constructor() { }

  ngOnInit() {
  }

}
