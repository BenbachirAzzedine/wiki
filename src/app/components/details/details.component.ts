import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PlugGatewayService } from './../../services/api-gateway/plug-gateway.service';
import { Plug } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Plug[];
  error: any;

  constructor(
    private plugGatewayService: PlugGatewayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadDetail();
  }

  loadDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    this.plugGatewayService.loadPlugById(id)
    .then((detail: Plug[]) => { this.details = detail; },
      error => this.error = error
    );
  }

}
