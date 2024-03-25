import { Component, OnInit } from '@angular/core';
import { Organization, UpdateOrganizationCommand } from '../models/organization';
import { FormsModule, NgForm } from '@angular/forms';
import { OrganizationService } from '../organization.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './organization-profile.component.html',
  styleUrl: './organization-profile.component.css'
})
export class OrganizationProfileComponent implements OnInit {
  organization : Organization;
  updatedOrganization = 
  {
   uId : '',
   name : '',
   contact: {
       id : '',
       email: '',
       phone: ''
   },
   description: '',
   login : '',
   password: ''
  };

constructor(private organizationService : OrganizationService ){ }

  onSubmit(form : NgForm) {
    this.updatedOrganization.uId = this.organization.uId;
    this.updatedOrganization.name = form.value.name;
    this.updatedOrganization.contact.id = this.organization.contact.id;
    this.updatedOrganization.contact.email = form.value.email;
    this.updatedOrganization.contact.phone = form.value.phone;
    this.updatedOrganization.description = form.value.description;

    this.organizationService.updateProfile(this.updatedOrganization).subscribe(
      (response : UpdateOrganizationCommand[]) => {
        console.log('Success');
      // Handle success, such as displaying a success message or redirecting
    },
      error => {
        console.error('Failed to retrieve info', error);
      // Handle error, such as displaying an error message
      });
  }

  ngOnInit(): void {
    this.organizationService.getMyProfile().subscribe( 
      (response : Organization[]) => {
        this.organization = response[0];
      // Handle success, such as displaying a success message or redirecting
    },
      error => {
        console.error('Failed to retrieve info', error);
      // Handle error, such as displaying an error message
    });

    }
  }

