import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization, UpdateOrganizationCommand } from './models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {


  constructor(private http: HttpClient) { }

  private readonly allOrganizationUrl = 'http://localhost:5658/api/Organization/all';
  private readonly organizationUrl = 'http://localhost:5658/api/Organization';

  getOrganizations() :  Observable<any>{
   return this.http.get(this.allOrganizationUrl);
  }
  getMyProfile() :  Observable<Organization[]>{
    return this.http.get<Organization[]>(this.organizationUrl);
   }
 
   updateProfile(organization : UpdateOrganizationCommand) : Observable<any>{
     return this.http.put(this.organizationUrl, organization)
   }
}
