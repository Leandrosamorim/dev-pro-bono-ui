import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [HttpClientModule]
})
export class RegisterComponent {
  registrationData = {
    name: '',
    contact : {
      email : '',
      phone : ''
    },
    contactPhone: '',
    contactEmail: '',
    stackId: 0,
    login: '',
    password: ''
  };

  options = [
    { id: 1, name: '.NET' },
    { id: 2, name: 'JAVA' }
  ];
  selectedOptionId = 1;

  constructor(private authService: AuthService, private router : Router, private appComponent : AppComponent){}

  onSubmit(): void {
    this.registrationData.stackId = this.selectedOptionId;
    this.authService.register(this.registrationData).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.authService.loginOrganization(this.registrationData.login, this.registrationData.password).subscribe(
          response => {
            localStorage.setItem("jwt", response);
            this.appComponent.isLoggedIn = true;
            this.appComponent.organization = 0;
            this.router.navigate(['/matches']);

        // Handle success, such as displaying a success message or redirecting
        })
    },
      error => {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message
      }
    );
  }

  onOptionChange(event : any) {
    this.selectedOptionId = event.target.value;
  }
}