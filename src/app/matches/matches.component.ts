import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '../helpers/jwt.interceptor';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {

  constructor(private matchService : MatchService){}

  items = [{
    name : '',
    description : ''
  }];

  ngOnInit(){
    this.matchService.getMyMatches().subscribe((response) => {
      this.items = response
    },
    (error) => {
      console.log('Failed to find matches');
    }
   );
  }





}
