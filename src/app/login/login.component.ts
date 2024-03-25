import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [HttpClientModule,
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]
})
export class LoginComponent {
  username : string;
  password : string;
  organization = 0;

  constructor(private authService : AuthService, private router : Router, private appComponent : AppComponent) {  }

  onClick(){

    if (this.organization === 0){
      this.organization = 1;
    }else{
      this.organization = 0;
    }
  }
  onSubmit(form: NgForm){
    this.username = form.value.username;
    this.password = form.value.password;

    if (this.organization === 0){
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          localStorage.setItem("jwt", response);
          this.router.navigate(['/matches']);
          this.appComponent.isLoggedIn = true;
          this.appComponent.organization = this.organization;
        },
        (error) => {
          console.log('Wrong credentials');
          alert('Login failed');
        }
       );
    }else{
      this.authService.loginOrganization(this.username, this.password).subscribe(
        (response) => {
          localStorage.setItem("jwt", response);
          this.router.navigate(['/matches']);
          this.appComponent.isLoggedIn = true;
          this.appComponent.organization = this.organization;
        },
        (error) => {
          console.log('Wrong credentials');
        }
       );
    }
    
  }

  redirectToRegister():void{
    this.router.navigate(['/register'])
  }

  redirectToRegisterOrganization():void{
    this.router.navigate(['/registerOrganization'])
  }
   

  }
