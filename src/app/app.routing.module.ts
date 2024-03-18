import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationsComponent } from './organizations/organizations.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'organizations', component: OrganizationsComponent}
];
