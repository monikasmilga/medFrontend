import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
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
}
