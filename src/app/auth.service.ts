import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {first, of, tap, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  private readonly loginUrl = 'http://localhost:5046/api/auth';
  private readonly registerUrl = 'http://localhost:5046/api/Developer'

  login(username: string, password: string) : Observable<any>{
    let value = this.http.post(this.loginUrl, {login: username, password : password}, {responseType: 'text'});
    return value;
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, data);
  }
}
