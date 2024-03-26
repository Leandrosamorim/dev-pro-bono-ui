import { Component, Inject, OnInit } from '@angular/core';
import { OrganizationProjectService } from '../organization-project.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../organization-projects/organization-projects.component';
import { Developer, UpdateDeveloperCommand } from '../models/developer';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OrganizationProjectModalComponent } from '../organization-project-modal/organization-project-modal.component';

@Component({
  selector: 'app-add-organization-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-organization-project.component.html',
  styleUrl: './add-organization-project.component.css'
})
export class AddOrganizationProjectComponent implements OnInit {

  constructor(private organizationProjectService : OrganizationProjectService, public dialogRef: MatDialogRef<AddOrganizationProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  item = {
    uId: '',
    name: '',
    description : '',
    status : ''
  };
  cmd : {
    uId: string,
    name: string,
    description : string,
    status : number
  };

  options = [
    { id: 0, name: 'Design' },
    { id: 1, name: 'Iniciado' },
    { id: 2, name: 'Interrompido' },
    { id: 3, name: 'Finalizado' }
  ];
  selectedOptionId = Number(this.item.status);

  onSubmit(form : NgForm) {
    this.item.status = this.selectedOptionId.toString();
    this.cmd = {
      uId : '',
      name : this.item.name,
      description : this.item.description,
      status : Number(this.item.status)
    }
    if(this.item.uId === '')
    {
      this.organizationProjectService.createProject(this.cmd).subscribe(
        (response : any) => {
          console.log('Success');
          this.dialogRef.close();
          
        // Handle success, such as displaying a success message or redirecting
      },
        error => {
          console.error('Failed to retrieve info', error);
        // Handle error, such as displaying an error message
        });
    }else{
      this.cmd.uId = this.item.uId;
      this.organizationProjectService.updateProject(this.cmd).subscribe(
        (response : any) => {
          console.log('Success');
          this.dialogRef.close();
        // Handle success, such as displaying a success message or redirecting
      },
        error => {
          console.error('Failed to retrieve info', error);
        // Handle error, such as displaying an error message
        });
    }
    }

  ngOnInit(): void {
    if(this.data != null){
      this.organizationProjectService.getOrganizationProjectsByProjectId(this.data.uId).subscribe( 
        (response : any) => {
          this.item = response[0];
        // Handle success, such as displaying a success message or redirecting
      },
        error => {
          console.error('Failed to retrieve info', error);
        // Handle error, such as displaying an error message
      });
    }
  }

  onOptionChange(event : any) {
    this.selectedOptionId = event.target.value;
  }
}
