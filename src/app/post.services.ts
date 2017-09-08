import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class PostService {
    constructor(private http: Http) {

    }
    // "any" stands for domain which this app communicates with, safety reasons
    getPosts(): Observable<any> {
        return this.http.get('http://medapp.dev/api/posts').map(
            (response: Response) => {
                return response.json().posts;
            }
        );
    }
}

