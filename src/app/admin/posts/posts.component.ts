import {Component, OnInit} from '@angular/core';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-all-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

    public posts: Post[] = [];

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts
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
