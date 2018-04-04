import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { UserModel } from './user.model';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private authService: AuthService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.userService.getUserById(this.id)
    .subscribe(
      data => this.user = new UserModel(data),
      error => console.log(error)
    );
  }

  back(): void {
    this.location.back();
  }

  isEditable() {
    return this.authService.getUser() && this.authService.getUser().id === this.id;
  }

}
