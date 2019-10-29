import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {
  public searchQuery: string;

  constructor() { }

  ngOnInit() {
  }

  search(): string {
    return this.searchQuery;
  }

}
