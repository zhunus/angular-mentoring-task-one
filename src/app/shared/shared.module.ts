import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [BreadcrumbsComponent, TimePipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbsComponent, TimePipe, OrderByPipe]
})
export class SharedModule { }
