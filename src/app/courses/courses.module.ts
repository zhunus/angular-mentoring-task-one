import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightNewDirective } from './highlight-new.directive';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseNewComponent } from './course-new/course-new.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  { path: 'courses/new', component: CourseNewComponent},
  { path: 'courses/:id', component: CourseEditComponent},
  { path: 'courses', component: CoursesComponent },
];

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    SearchControlComponent,
    CoursesListComponent,
    HighlightNewDirective,
    CourseComponent,
    CourseNewComponent,
    CourseFormComponent,
    CourseEditComponent
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule.forChild(routes)],
  exports: [CoursesComponent]
})
export class CoursesModule {}
