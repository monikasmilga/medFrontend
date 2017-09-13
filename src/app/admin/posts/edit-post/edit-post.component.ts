import {Component, OnInit} from '@angular/core';
import {Post} from '../../../post.interface';
import {PostService} from '../../../post.services';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

    public post: Post = new Post();

    constructor(private postService: PostService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const params: any = this.activatedRoute.snapshot.params;
        this.postService.getPost(params.id).subscribe(
            post => this.post = post,
            error => console.log(error)
        );
    }

    public onUpdate(event: any) {
        this.postService.updatePost(this.post).subscribe(post => this.router.navigate(['admin/posts']),
            error => console.log(error)
        );
    }
}
