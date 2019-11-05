import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightNewDirective } from './highlight-new.directive';

@NgModule({
  declarations: [CoursesComponent, CourseItemComponent, SearchControlComponent, CoursesListComponent, HighlightNewDirective],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
