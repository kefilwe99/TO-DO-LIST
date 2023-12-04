import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  registerFn(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/auth/register', user);
  }

  loginFn(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/auth/login', user);
  }
}
