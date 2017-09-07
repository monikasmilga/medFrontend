import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: Http) {

    }
    // "any" stands for domain which this app communicates with, safety reasons
    getUsers(): Observable<any> {
        return this.http.get('http://medapp.dev/api/users').map(
            (response: Response) => {
                return response.json().users;
            }
        );
    }
}
