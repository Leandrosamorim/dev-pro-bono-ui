import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {


  constructor(private http: HttpClient) { }

  private readonly organizationUrl = 'http://localhost:5658/api/Organization/all'

  getOrganizations() :  Observable<any>{
   return this.http.get(this.organizationUrl);
  }
}
