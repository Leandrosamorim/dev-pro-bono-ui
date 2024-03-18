import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer, UpdateDeveloperCommand } from '../models/developer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 developer : Developer;
 updatedDeveloper = 
 {
  uId : '',
  name : '',
  contact: {
      id : '',
      email: '',
      phone: ''
  },
  stackId: 0,
  login : '',
  password: ''
 } 


  constructor(private developerService : DeveloperService ){ }

  onSubmit(form : NgForm) {
    this.updatedDeveloper.uId = this.developer.uId;
    this.updatedDeveloper.name = form.value.name;
    this.updatedDeveloper.contact.id = this.developer.contact.id;
    this.updatedDeveloper.contact.email = form.value.email;
    this.updatedDeveloper.contact.phone = form.value.phone;
    if (form.value.stackId === ".NET"){
      this.updatedDeveloper.stackId = 1
    }else{
      this.updatedDeveloper.stackId = 2
    };

    this.developerService.updateProfile(this.updatedDeveloper).subscribe(
      (response : UpdateDeveloperCommand[]) => {
        console.log('Success');
      // Handle success, such as displaying a success message or redirecting
    },
      error => {
        console.error('Failed to retrieve info', error);
      // Handle error, such as displaying an error message
      });
  }

  ngOnInit(): void {
    this.developerService.getMyProfile().subscribe( 
      (response : Developer[]) => {
        this.developer = response[0];
      // Handle success, such as displaying a success message or redirecting
    },
      error => {
        console.error('Failed to retrieve info', error);
      // Handle error, such as displaying an error message
    });

    }
  }
