import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {first, of, tap, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  private readonly developerLoginUrl = 'http://localhost:5046/api/auth';
  private readonly developerRegisterUrl = 'http://localhost:5046/api/Developer'
  private readonly organizationRegisterUrl = 'http://localhost:5658/api/Organization/'
  private readonly organizationLoginUrl = 'http://localhost:5658/api/auth'

  login(username: string, password: string) : Observable<any>{
    let value = this.http.post(this.developerLoginUrl, {login: username, password : password}, {responseType: 'text'});
    return value;
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.developerRegisterUrl, data);
  }

  loginOrganization(username: string, password: string) : Observable<any>{
    let httpParams = new HttpParams().set('username', username).set('password', password)
    let value = this.http.post(this.organizationLoginUrl + '?username=' + username + '&password='+ password, httpParams,{responseType: 'text'});
    return value;
  }

  registerOrganization(data: any): Observable<any> {
    return this.http.post<any>(this.organizationRegisterUrl, data);
  }
}
