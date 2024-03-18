import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { CommonModule } from '@angular/common';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent implements OnInit {

  constructor(private organizationService : OrganizationService, private matchService : MatchService){}

  items = [{
    uId: '',
    name : '',
    description : ''
  }];

  organizationToMatch = '';

  ngOnInit(){
    this.organizationService.getOrganizations().subscribe((response) => {
      this.items = response
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  }

  match(organizationId : string){
    this.organizationToMatch = organizationId;
    this.matchService.matchOrganization(this.organizationToMatch).subscribe((response) => {
      console.log('Success');
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  };
}
