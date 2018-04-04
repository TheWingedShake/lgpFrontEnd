import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../user/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  id: string;
  user: UserModel;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.route.params.subscribe(params => this.id = params['id']);
   }

  ngOnInit() {
    this.userService.getUserById(this.id)
    .subscribe(
      data => {
        this.user = new UserModel(data);
        this.instantiateForm();
      },
      error => console.log(error)
    );
  }

  instantiateForm(): void {
    this.userForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required]
    });
  }

  onSubmit(value): void {
    this.userService.updateUser({
      id: this.id,
      firstName: value.firstName,
      lastName: value.lastName
    }).subscribe(
      data => this.router.navigate(['/user/view', this.id]),
      error => console.log(error)
    );
  }

  back(): void {
    this.location.back();
  }

}
