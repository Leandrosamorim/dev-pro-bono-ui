import { Component, OnInit } from '@angular/core';
import { OrganizationProjectService } from '../organization-project.service';
import { CommonModule } from '@angular/common';
import { OrganizationProjectModalComponent } from '../organization-project-modal/organization-project-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface DialogData {
  uId: ''
}

@Component({
  selector: 'app-organization-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-projects.component.html',
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
        width: '1200px'
      });
    }

    
}
