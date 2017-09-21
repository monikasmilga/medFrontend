import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Post} from './post';
import {GlobalVariable} from '../../config/global';


@Injectable()
export class BlogService {

    private baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http) {

    }

    getBlogs(): Observable<any> {
        return this.http.get(this.baseApiUrl + 'all/posts').map((response: Response) => {
            // console.log(response.json().posts);
            return response.json().posts;
        });
    }

    getBlog(id: any): Observable<any> {
        return this.http.get(this.baseApiUrl + 'one/post/' + id)
            .map(
                (response: Response) => {
                    return response.json().post;
                }
            );
    }
}