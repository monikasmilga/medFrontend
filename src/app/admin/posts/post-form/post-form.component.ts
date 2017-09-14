import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  post: Post = new Post();

  constructor(formBuilder: FormBuilder,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private postsService: PostsService, ) {
    this.form = formBuilder.group({
      title: ['', [
          Validators.required,
          Validators.minLength(3)
      ]],
      text: ['', [
          Validators.required,
          Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Edit post' : 'New post';

      if (!id)
        return;

      this.postsService.getPost(id).subscribe(post => this.post = post, response => {
        if (response.status === 404) {
          this.router.navigate(['Not Found']);
        }
      });
    });

    // if (this.router.url === '/admin/posts/new') {
    //   this.showPassword = true;
    // }
  }
  onSave() {
    var result, post = this.form.value;
    if (this.post.id) {
      post.id = this.post.id;
      result = this.postsService.updatePost(post);
    } else {
      result = this.postsService.createPost(post);
    }

    result.subscribe(
        post => this.router.navigate(['admin/posts']),
        error => console.log(error)
    );
  }

}
