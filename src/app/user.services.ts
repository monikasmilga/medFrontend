import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {User} from './user.interface';

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

    getUser(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medapp.dev/api/users/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().user;
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

    updateUser(user: User) {
        const token = this.authService.getToken();
        return this.http.put('http://medapp.dev/api/users/' + user.id + '?token=' + token,
            JSON.stringify(user),
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deleteUser(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medapp.dev/api/users/' + id + '?token=' + token);
    }
}
