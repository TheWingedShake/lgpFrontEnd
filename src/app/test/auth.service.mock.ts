import { SpyObject } from './test.helpers';
import { AuthService } from '../services/auth-service/auth.service';

export class MockAuthService extends SpyObject {

    loginSpy;
    logoutSpy;
    getUserSpy;
    isLoggedInSpy;
    lookUpCurrentUserSpy;

    constructor() {
        super(AuthService);
        this.loginSpy = this.spy('login').and.returnValue(this);
        this.logoutSpy = this.spy('logout').and.returnValue(this);
        this.getUserSpy = this.spy('getUser').and.returnValue(this);
        this.isLoggedInSpy = this.spy('isLoggedIn').and.returnValue(this);
        this.lookUpCurrentUserSpy = this.spy('lookUpCurrentUser').and.returnValue(this);
    }

    getProviders(): Array<any> {
        return [{ provide: AuthService, useValue: this }];
    }

}
