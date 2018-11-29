import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SearchService } from './../../../services/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  searchBar = this.fb.group({
    search: ['']
  });

  constructor(
    private fb: FormBuilder,
    public search: SearchService,
    ) { }

  ngOnInit() {

  }

  onSend(event: any) {
    this.search.sendTerm(event.target.value);
  }

}
