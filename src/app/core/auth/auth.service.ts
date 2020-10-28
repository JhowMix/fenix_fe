import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(username: string, password: string): Observable<any> {
    const body = `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`;

    return this.http
      .post(environment.url + 'token', body, {
        headers: new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }),
        observe: 'response' })
      .pipe(tap(res => {
        this.userService.setToken(res.body.access_token);
      }));
  }
}
