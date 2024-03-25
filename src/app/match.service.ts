import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  private readonly developerMatchUrl = 'http://localhost:5046/api/match'
  private readonly organizationMatchUrl = 'http://localhost:5658/api/match'

  getMyMatches() :  Observable<any>{
   return this.http.get(this.developerMatchUrl);
  }

  getMyOrganizationMatches() :  Observable<any>{
    return this.http.get(this.organizationMatchUrl);
   }

   getDevelopersToMatch(stackId : string) : Observable<any>{
    return this.http.get(this.organizationMatchUrl+'/developers' + '?StackId=' +stackId);
   }

  matchOrganization(organizationId : string) : Observable<any>{
    return this.http.post(this.developerMatchUrl + '?OrganizationUId=' +organizationId, null)
  }

  matchDeveloper(developerId : string) : Observable<any>{
    return this.http.post(this.organizationMatchUrl + '?DeveloperUId=' +developerId, null)
  }
}
