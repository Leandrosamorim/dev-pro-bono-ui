import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrganizationProjectService {

  constructor(private http: HttpClient) { }

  private readonly organizatioProjectnUrl = 'http://localhost:5658/api/Project';

  getOrganizationProjects() :  Observable<any>{
   return this.http.get(this.organizatioProjectnUrl);
  }

  getOrganizationProjectsbyDeveloperId(developerId: string) :  Observable<any>{
    return this.http.get(this.organizatioProjectnUrl+'/DeveloperProjects?DeveloperId='+developerId);
   }

  getOrganizationProjectsByProjectId(projectId:string): Observable<any>{
    return this.http.get(this.organizatioProjectnUrl + '?ProjectId=' + projectId)
  }

  addProjectDeveloper(projectId:string, developerId:string): Observable<any>{
    return this.http.post(this.organizatioProjectnUrl+'/developer?projectId='+projectId+'&developerId='+developerId, null )
  }

  updateProject(data : any): Observable<any>{
    return this.http.put(this.organizatioProjectnUrl, data);
  }

  createProject(data : any): Observable<any>{
    return this.http.post(this.organizatioProjectnUrl, data);
  }
}