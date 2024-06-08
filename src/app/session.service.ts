import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: User | null = null;

  get user(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  set user(user: User | null) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  isAuthenticated(): boolean {
    return this._user !== null || this.user !== null;
  }
}
