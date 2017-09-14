import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {User} from './user';
import {AuthService} from '../../auth.service';

@Injectable()
export class UsersService {
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

    createUser(user) {
        const token = this.authService.getToken();
        return this.http.post('http://medapp.dev/api/users?token=' + token,
            user, { headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}).map(
            (response: Response) => response.json()
        );
    }

    updateUser(user) {
        const token = this.authService.getToken();
        return this.http.put('http://medapp.dev/api/users/' + user.id + '?token=' + token,
            user,
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
