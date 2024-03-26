import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationProjectModalComponent } from '../organization-project-modal/organization-project-modal.component';
import { OrganizationProjectService } from '../organization-project.service';
import { DeveloperService } from '../developer.service';
import { StatusMappingPipe } from '../status-mapping.pipe';
import { CommonModule } from '@angular/common';
import { Developer } from '../models/developer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-developer-projects',
  standalone: true,
  imports: [StatusMappingPipe, CommonModule,FontAwesomeModule],
  template: `<div class="container">
  <h2>Projects</h2>
  <div class="card-container">
    <div class="card" *ngFor="let item of items" >
      <div class="card-header">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="card-body">
          <p>{{ item.description }}</p>
          <p>{{ item.status.toString() | statusMapping }}</p>
          <fa-icon *ngIf="item.status == '3'" [icon]="faEdit"></fa-icon>
      </div>
    </div>
  </div>
</div>`,
  styleUrl: './developer-projects.component.css'
})
export class DeveloperProjectsComponent implements OnInit {

    constructor(private organizationProjectService : OrganizationProjectService, private developerService : DeveloperService){}
  
    faEdit = faEdit;
    developer : Developer;
    items = [{
      uId: '',
      name: '',
      description : '',
      status : '',
      developers : [],
      feedbacks : []
    }];
  
  
    ngOnInit(){
      this.developerService.getMyProfile().subscribe( 
        (response : any) => {
          this.developer = response[0];
          this.organizationProjectService.getOrganizationProjectsbyDeveloperId(this.developer.uId).subscribe((response2) => {
            this.items = response2
          },
          (error) => {
            console.log('Failed to find projects');
          }
         );
      },
        error => {
          console.error('Failed to retrieve info', error);
        // Handle error, such as displaying an error message
      });
      
    }
}
