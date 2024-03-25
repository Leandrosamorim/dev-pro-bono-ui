import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrganizationProjectService } from '../organization-project.service';
import { DialogData } from '../organization-projects/organization-projects.component';
import { MatchesComponent } from '../matches/matches.component';
import { AddProjectDeveloperComponent } from '../add-project-developer/add-project-developer.component';

@Component({
  selector: 'app-organization-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-project-modal.component.html',
  styleUrl: './organization-project-modal.component.css'
})
export class OrganizationProjectModalComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private organizationProjectService : OrganizationProjectService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  projectId = '';
  item = {
    uId: '',
    name: '',
    description : '',
    status : '',
    developers : [{
      uId : '',
      name: ''
    }],
    feedbacks : [{
      uId: '',
      rating: '',
      message: ''
    }]
  };

  ngOnInit(){
    this.projectId = this.data.uId;
    this.organizationProjectService.getOrganizationProjectsByProjectId(this.projectId).subscribe((response) => {
      this.item = response[0]
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  }

  closeModal(): void {
    const dialogRef = this.dialog.closeAll();
  }

  addDeveloper(): void {
    const dialogRef = this.dialog.open(AddProjectDeveloperComponent, {
      data : {uId : this.projectId},
      width: '1200px'
    });
    dialogRef.afterClosed().subscribe((response) => {
      this.ngOnInit();
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  }
}
