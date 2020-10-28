import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {User} from '../../model/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private username: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
    this.decodeAndNotify();
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = JSON.parse(atob(token.split('.')[1])) as User;
    this.username = user.username;
    this.userSubject.next(user);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUsername(): string {
    return this.username;
  }

  jwt_decode(token): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}
