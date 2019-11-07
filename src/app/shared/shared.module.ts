import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [BreadcrumbsComponent, TimePipe, OrderByPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbsComponent, TimePipe, OrderByPipe, FilterPipe]
})
export class SharedModule { }
