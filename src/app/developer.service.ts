import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer, UpdateDeveloperCommand } from './models/developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private http: HttpClient) { }

  private readonly developerContactUrl = 'http://localhost:5046/api/developer/contact'
  private readonly developerUrl = 'http://localhost:5046/api/developer'

  getMyProfile() :  Observable<Developer[]>{
   return this.http.get<Developer[]>(this.developerContactUrl);
  }

  updateProfile(developer : UpdateDeveloperCommand) : Observable<any>{
    return this.http.put(this.developerUrl, developer)
  }

  getDevelopers(stackId : number) :  Observable<any>{
    return this.http.get(this.developerUrl + '?stackId=' + stackId);
  }
}
