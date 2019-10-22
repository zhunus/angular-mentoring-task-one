import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [BreadcrumbsComponent, TimePipe],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbsComponent, TimePipe]
})
export class SharedModule { }
