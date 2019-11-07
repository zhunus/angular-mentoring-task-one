import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {
  public searchQuery: string;

  @Output()
  public search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }

}
