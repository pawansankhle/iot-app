import { Injectable } from '@angular/core';
import { IAuth } from '../interfaces/auth.interface';
import { UrlConstant } from '../../shared/constants/url.constant';
import { User } from '../../auth/models/user.class';
import { Observable } from 'rxjs/Observable';
import { HttpClientService } from '../../shared/services/http.service';
import { Subject } from 'rxjs/Subject';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService implements IAuth {

    user: User = new User();
    jwtHelper: JwtHelper = new JwtHelper();
    private authenticate = new Subject<boolean>();
    authenticateState$ = this.authenticate.asObservable();

    constructor(public http: HttpClientService) {}

    getUserinContext() {
        if (this.isAuthenticated()) {
            const token = localStorage.getItem('token');
            const tokenDecoded = this.jwtHelper.decodeToken(token);
            console.log(tokenDecoded);
            // this.user.email = tokenDecoded.email;
            // this.user.firstname = tokenDecoded.firstname;
            // this.user.lastname = tokenDecoded.lastname;
            return tokenDecoded;
        }else {
            this.authenticate.next(false);
        }
    }


    isAuthenticated() {
        let isAuth: boolean;
        if (localStorage.getItem('token')) {
            isAuth = true;
        }else {
            isAuth = false;
        }

        return isAuth;
    }

    // delete the token in localStorage and change the navbar state
    logout(): Observable<any>  {
        return this.http.get(UrlConstant.USER_SIGNOUT_URL)
        .map(res => {
            localStorage.removeItem('token');
            this.authenticate.next(false);
        });
    }

    // save the token in localStorage and change the navbar state
    saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.authenticate.next(true);
    }

    login(form: any): Observable<any> {
        return this.http.post(UrlConstant.USER_LOGIN_URL, form)
        .map(res => res.json())        }
}
