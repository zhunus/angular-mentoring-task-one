import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login = '';
  public password = '';

  constructor(private authorizationService: AuthorizationService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.authorizationService.login(this.login, this.password);
    this.router.navigateByUrl('/courses');
  }
}
