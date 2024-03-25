import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-organization-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './organization-register.component.html',
  styleUrl: './organization-register.component.css'
})
export class OrganizationRegisterComponent {
  registrationData = {
    name: '',
    contact : {
      email : '',
      phone : ''
    },
    description: '',
    login: '',
    password: ''
  };

  constructor(private authService: AuthService, private router : Router, private appComponent : AppComponent ){}

  onSubmit(): void {
    this.authService.registerOrganization(this.registrationData).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Handle success, such as displaying a success message or redirecting
        this.authService.loginOrganization(this.registrationData.login, this.registrationData.password).subscribe(
          response => {
            localStorage.setItem("jwt", response);
            this.appComponent.isLoggedIn = true;
            this.appComponent.organization = 1;
            this.router.navigate(['/matches']);

          }
        )
      },
      error => {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message
      }
    );
  }
}
