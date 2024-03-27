import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { OrganizationProjectService } from '../organization-project.service';
import { CommonModule } from '@angular/common';
import { OrganizationProjectModalComponent } from '../organization-project-modal/organization-project-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddOrganizationProjectComponent } from '../add-organization-project/add-organization-project.component';
import { StatusMappingPipe } from '../status-mapping.pipe';

export interface DialogData {
  uId: ''
}

@Component({
  selector: 'app-organization-projects',
  standalone: true,
  imports: [CommonModule, StatusMappingPipe],
  template: `<body><div class="container">
  <h2>Projects</h2>
  <button (click)="openAddProject(null)">Add Project</button>
  <div class="card-container">
    <div class="card" *ngFor="let item of items" (click)="openModal(item.uId)" >
      <div class="card-header">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="card-body">
          <p>{{ item.description }}</p>
          <p>{{ item.status.toString() | statusMapping }}</p>
      </div>
    </div>
  </div>
</div></body>`,
  styleUrl: './organization-projects.component.css'
})
export class OrganizationProjectsComponent implements OnInit {

    constructor(private organizationProjectService : OrganizationProjectService, public dialog : MatDialog){}
  
    items = [{
      uId: '',
      name: '',
      description : '',
      status : '',
      developers : [],
      feedbacks : []
    }];
  
  
    ngOnInit(){
      this.organizationProjectService.getOrganizationProjects().subscribe((response) => {
        this.items = response
      },
      (error) => {
        console.log('Failed to find organizations');
      }
     );
    }

    openModal(projectId : string): void {
      const dialogRef = this.dialog.open(OrganizationProjectModalComponent, {
        data: {uId : projectId},
        width: '800px'
      });
      dialogRef.afterClosed().subscribe((response) => {
        this.ngOnInit();
      },
      (error) => {
        console.log('Failed to find organizations');
      }
     );
    }

    openAddProject(projectId : string | null): void {
      const dialogRef = this.dialog.open(AddOrganizationProjectComponent, {
        width: '800px'
      });
    }
}
