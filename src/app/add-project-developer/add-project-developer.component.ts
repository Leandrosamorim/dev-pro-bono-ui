import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatchService } from '../match.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../organization-projects/organization-projects.component';
import { OrganizationProjectService } from '../organization-project.service';
import { OrganizationProjectModalComponent } from '../organization-project-modal/organization-project-modal.component';

@Component({
  selector: 'app-add-project-developer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-project-developer.component.html',
  styleUrl: './add-project-developer.component.css'
})
export class AddProjectDeveloperComponent {
  constructor(public dialogRef: MatDialogRef<AddProjectDeveloperComponent>, private matchService : MatchService, private projectService : OrganizationProjectService, @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  items = [{
    uId: '',
    name : '',
    stackName : '',
    contact : {
      email: '',
      phone: ''
    }
  }];

  ngOnInit(){
      this.matchService.getMyOrganizationMatches().subscribe((response) => {
        this.items = response
      },
      (error) => {
        console.log('Failed to find matches');
      }
     );
    }

    addProjectDeveloper(developerId : string){
      this.projectService.addProjectDeveloper(this.data.uId, developerId).subscribe((response) => {
        this.items = response;
        this.dialogRef.close();
      },
      (error) => {
        console.log('Failed to find matches');
      }
     );
    }
    
  }
