import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {
    }

    signin(email: string, password: string) {
        return this.http.post('http://medapp.dev/api/users/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                const token = response.json().token;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return {
                    token: token, decoded_token: JSON.parse(window.atob(base64))
                };
            }
        ).do(
            tokenData => {
                localStorage.setItem('token', tokenData.token);
            }
        );
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem('token');
            this.router.navigate(['admin/login']);
    }
}
