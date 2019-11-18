import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class AuthModule {}
