import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { MatchesComponent } from '../matches/matches.component';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule, MatchesComponent],
  templateUrl: './developers.component.html',
  providers: [MatchesComponent],
  styleUrl: './developers.component.css'
})
export class DevelopersComponent implements OnInit {

  constructor(private matchService : MatchService){}

  items = [{
    uId: '',
    name: '',
    stackName : ''
  }];
  options = [
    { id: 1, name: '.NET' },
    { id: 2, name: 'JAVA' }
  ];
  selectedOptionId = 1;

  developerToMatch = '';

  onOptionChange(event : any) {
    this.selectedOptionId = event.target.value;
    this.ngOnInit();
  }

  ngOnInit(){
    this.matchService.getDevelopersToMatch(this.selectedOptionId.toString()).subscribe((response) => {
      this.items = response
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  }

  match(developerId : string){
    this.developerToMatch = developerId;
    this.matchService.matchDeveloper(this.developerToMatch).subscribe((response) => {
      this.ngOnInit();
      console.log('Success');
    },
    (error) => {
      console.log('Failed to find organizations');
    }
   );
  };
}
