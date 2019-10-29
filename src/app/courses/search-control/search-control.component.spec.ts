import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlComponent } from './search-control.component';
import { FormsModule } from '@angular/forms';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console.log statement when search', () => {
    component.searchQuery = 'test query';
    const result = component.search();
    expect(result).toEqual('test query');
  });
});
