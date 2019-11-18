import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private user: string | null;

  constructor() {}

  login(username: string, password: string) {
    this.user = username;
    console.log('logged in successfully');
  }

  logout() {
    this.user = null;
    console.log('logged out successfully');
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getUserInfo(): string {
    return this.user;
  }
}
