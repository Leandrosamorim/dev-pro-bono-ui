import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrganizationProjectService } from '../organization-project.service';
import { DialogData } from '../organization-projects/organization-projects.component';
import { MatchesComponent } from '../matches/matches.component';
import { AddProjectDeveloperComponent } from '../add-project-developer/add-project-developer.component';
import { AddOrganizationProjectComponent } from '../add-organization-project/add-organization-project.component';
import { StatusMappingPipe } from '../status-mapping.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-organization-project-modal',
  standalone: true,
  imports: [CommonModule, StatusMappingPipe,FontAwesomeModule],
  template: `<div class="modal-overlay">

  
  <div class="modal-content">
    <h2>{{ item.name }}</h2>
    <p><strong>Description:</strong> {{ item.description }}</p>
    <p><strong>Status:</strong> {{ item.status.toString() | statusMapping }}</p>
    <div class="card-container">
      <h2>Developers</h2>
      <div class="card" *ngFor="let developer of item.developers">
        <div class="card-header">
          <h3>{{ developer.name }}</h3>
        </div>
        <div class="card-body">
          <fa-icon *ngIf="item.status == '3'" [icon]="faEdit"></fa-icon>
        </div>
      </div>
      <div class="card-container">
          <h2>Feedbacks</h2>
          <div class="card" *ngFor="let item of item.feedbacks">
            <div class="card-body">
              <h3>{{ item.rating }}</h3>
              <p>{{ item.message }}</p>
            </div>
          </div>

    <button (click)="updateProject()">Update Project</button>
    <button *ngIf="item.status != '3'" (click)="addDeveloper()">Add Developer</button>
    <button (click)="closeModal()">Close</button>
  </div>
</div>
`,
  styleUrl: './organization-project-modal.component.css',
})
export class OrganizationProjectModalComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private organizationProjectService : OrganizationProjectService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  faEdit = faEdit;
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

  updateProject(): void {
    const dialogRef = this.dialog.open(AddOrganizationProjectComponent, {
      data : {uId : this.projectId, name : this.item.name, description: this.item.description, status: Number(this.item.status)},
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
