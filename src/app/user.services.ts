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
               email: string,
               position: string,
               role_id: number,
               password: string) {
        const token = this.authService.getToken();
        return this.http.post('http://medapp.dev/api/users?token=' + token,
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                position: position,
                role_id: role_id,
                password: password
            },
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }

    deleteUser(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medapp.dev/api/users/' + id + '?token=' + token);
    }
}
