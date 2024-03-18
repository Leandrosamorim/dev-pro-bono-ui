import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
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
    contactName: '',
    contactEmail: '',
    stackId: 0,
    login: '',
    password: ''
  };

  constructor(private authService: AuthService){}

  onSubmit(): void {
    this.authService.register(this.registrationData).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Handle success, such as displaying a success message or redirecting
      },
      error => {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message
      }
    );
  }
}