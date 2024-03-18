import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  private readonly myMatchesUrl = 'http://localhost:5046/api/match'

  getMyMatches() :  Observable<any>{
   return this.http.get(this.myMatchesUrl);
  }

  matchOrganization(organizationId : string) : Observable<any>{
    return this.http.post(this.myMatchesUrl + '?OrganizationUId=' +organizationId, null)
  }
}
