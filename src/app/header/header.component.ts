import { Component, DoCheck } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  username = '';
  isAuthorized = false;

  constructor(private authorizationService: AuthorizationService) {}

  ngDoCheck() {
    this.username = this.authorizationService.getUserInfo();
    this.isAuthorized = this.authorizationService.isAuthenticated();
  }

  logout() {
    this.authorizationService.logout();
  }
}
