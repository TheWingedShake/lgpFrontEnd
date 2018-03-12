import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserModel } from '../user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn(username: string, password: string) {
    this.message = '';
    this.authService.login(username, password).subscribe(
      data => {
        if (data['error']) {
          this.message = 'Wrong creditionals.';
        } else if (data['userId']) {
          const userModel = new UserModel({
            id: data['userId'],
            firstName: data['firstName'],
            lastName: data['lastName'],
            email: data['email']
          });
          this.authService.setUser(userModel);
        }
      },
      error => console.log(error)
    );
  }

  logout(): boolean {
    this.authService.logout().subscribe(
      data => {
        console.log(data);
        this.authService.unsetUser();
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/home']);
      }
    );
    return false;
  }


}
