import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-pro-bem-ui';

  isLoggedIn = false;
  organization = 0;

  constructor(private router : Router) {  }

  redirectToRegister():void{
    this.router.navigate(['/register'])
  }

  redirectToLogin():void{
    this.router.navigate(['/login'])
  }

  redirectToProfile():void{
    this.router.navigate(['/profile'])
  }

  redirectToOrganization():void{
    this.router.navigate(['/organizations'])
  }

  redirectToMatch():void{
    this.router.navigate(['/matches'])
  }
  redirectToOrganizationProfile():void{
    this.router.navigate(['/organizationProfile'])
  }
  redirectToDevelopers():void{
    this.router.navigate(['/developers'])
  }
  redirectToOrganizationProjects():void{
    this.router.navigate(['/organizationProjects'])
  }

  logout():void{
    this.isLoggedIn = false;
    localStorage.setItem("jwt", '');
    this.router.navigate([''])
  }
}
