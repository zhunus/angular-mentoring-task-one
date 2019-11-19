import { Component, OnChanges } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  username = '';

  constructor(private authorizationService: AuthorizationService) {}

  ngOnChanges() {
    this.username = this.authorizationService.getUserInfo();
  }
}
