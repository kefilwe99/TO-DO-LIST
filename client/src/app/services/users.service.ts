import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }



registerFn(user: User):Observable<any> {
  return this.http.post<any>('http://localhost:5000/api/auth/register',user);
}
}




