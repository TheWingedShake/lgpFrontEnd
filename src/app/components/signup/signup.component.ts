import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { UserModel } from '../user/user.model';
import { UserService } from '../../services/user-service/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  userModel: UserModel;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', Validators.required],
      passwords: this.fb.group({
        password: new FormControl('', Validators.required),
        repeat: new FormControl('', Validators.required)
      }, {validator: this.passwordConf})
    });
  }

  passwordConf(group: FormGroup) {
    if(group.get('password').value !== group.get('repeat').value) {
      return {passwordConf: true};
    } else {
      return null;
    }
  }

  onSubmit(value) {
    const  body = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.userEmail,
      password: value.passwords.password,
      repeat: value.passwords.repeat
    };
    this.userService.signUpUser(body).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => console.log(error)
    );
  }

  cancel() {
    this.location.back();
  }

}
