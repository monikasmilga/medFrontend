import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {
    constructor(private http: Http, private authService: AuthService) {

    }

    // "any" stands for domain which this app communicates with, safety reasons
    getUsers(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medapp.dev/api/users?token=' + token).map(
            (response: Response) => {
                return response.json().users;
            }
        );
    }

    createUser(first_name: string,
               last_name: string,
               role_id: number,
               position: string,
               email: string,
               password: string) {
        const token = this.authService.getToken();
        return this.http.post('http://medapp.dev/api/users?token=' + token,
            {
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
                role_id: role_id,
                position: position},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }
}
