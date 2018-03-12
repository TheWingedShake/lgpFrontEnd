import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { CityService } from './services/city-service/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private authService: AuthService, private cityService: CityService) {}

  ngOnInit(): void {
    this.title = 'Logistic planner';
    this.authService.lookUpCurrentUser();
  }

}
