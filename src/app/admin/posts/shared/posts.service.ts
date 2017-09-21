import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Post} from './post';
import {GlobalVariable} from "../../../config/global";

@Injectable()
export class PostsService {

    private baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http, private authService: AuthService) {

    }

    // "any" stands for domain which this app communicates with, safety reasons
    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'posts?token=' + token).map(
            (response: Response) => {
                return response.json().posts;
            }
        );
    }

    getPost(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'posts/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().post;
                }
            );
    }

    createPost(post) {
        const token = this.authService.getToken();
        return this.http.post(this.baseApiUrl + 'posts?token=' + token,
            post, { headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    updatePost(post) {
        const token = this.authService.getToken();
        return this.http.put(this.baseApiUrl + 'posts/' + post.id + '?token=' + token,
            post,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deletePost(id: any) {
        const token = this.authService.getToken();
        return this.http.delete(this.baseApiUrl + 'posts/' + id + '?token=' + token);
    }
}

