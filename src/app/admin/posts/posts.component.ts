import {Component, OnInit} from '@angular/core';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.service';
import {Response} from '@angular/http';
import {fadeInAnimation} from '../../animations/fade-in.animation';
import {Subscription} from "rxjs";
import {AppService} from "../../shared/app.service";

@Component({
    selector: 'app-all-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
})

export class PostsComponent implements OnInit {

    public posts: Post[] = [];

    subscription: Subscription;

    constructor(private postsService: PostsService, private appService: AppService) {
    }

    ngOnInit() {
        this.loadPosts();

        this.subscription = this.appService.on('posts-updated')
            .subscribe(
                () => this.loadPosts()
            );
    }

    loadPosts() {
        return this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }

    onDelete(post) {
        if (confirm('Are you sure you want to delete ' + post.title + '?')) {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);

            this.postsService.deletePost(post.id)
                .subscribe(null,
                    error => {
                        alert('Could not delete post');
                        this.posts.splice(index, 0, post);
                    });
        }
    }
}
