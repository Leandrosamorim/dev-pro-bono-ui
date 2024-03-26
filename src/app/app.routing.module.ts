import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { DevelopersComponent } from './developers/developers.component';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrganizationProjectsComponent } from './organization-projects/organization-projects.component';
import { DeveloperProjectsComponent } from './developer-projects/developer-projects.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'registerOrganization', component : OrganizationRegisterComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'organizations', component: OrganizationsComponent},
    {path: 'organizationProfile', component: OrganizationProfileComponent},
    {path: 'developers', component: DevelopersComponent},
    {path: 'organizationProjects', component: OrganizationProjectsComponent},
    {path: 'developerProjects', component: DeveloperProjectsComponent}
];
