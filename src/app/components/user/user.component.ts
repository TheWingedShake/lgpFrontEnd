import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { UserModel } from './user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  user: UserModel;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) {
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

}
