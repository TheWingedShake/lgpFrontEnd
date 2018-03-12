import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-service/user.service';
import { UserModel } from '../../components/user/user.model';

@Injectable()
export class AuthService {

  private authUrl = '/users';

  user: UserModel;

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private userSerive: UserService) { }

  login(email: string, password: string) {
    const body = {email: email, password: password};
    return this.http.post(this.apiUrl + this.authUrl + '/signin', body, {withCredentials: true});
  }

  logout() {
    return this.http.get(this.apiUrl + this.authUrl + '/logout', {withCredentials: true});
  }

  setUser(user: UserModel) {
    this.user = user;
  }

  unsetUser(): void {
    this.user = null;
  }

  getUser(): any {
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  lookUpCurrentUser() {
      this.http.get(this.apiUrl + this.authUrl + '/current', {
        withCredentials: true
      }).subscribe(
        data => {
          if (data['error']) {
            console.log(data['error']);
          }else if (data['userId']) {
            const user = new UserModel({
              id: data['userId'],
              firstName: data['firstName'],
              lastName: data['lastName']
            });
            this.setUser(user);
          }
        },
        error => console.log(error)
      );
  }

}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
