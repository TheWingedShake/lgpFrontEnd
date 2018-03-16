import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private usersUrl = '/users';

  user: any;

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) {
  }

  setUser(newUser): any {
    this.user = newUser;
    return this.user;
  }

  getUser(): any {
    return this.user;
  }

  getUserById(id): any {
    return this.http.get(this.apiUrl + this.usersUrl + '/view/' + id)
    .pipe();
  }

  signUpUser(data: any) {
    return this.http.post(this.apiUrl + this.usersUrl + '/signup', data);
  }

}
