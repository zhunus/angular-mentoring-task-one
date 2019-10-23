import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent }
];
