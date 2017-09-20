import { Component, OnInit } from '@angular/core';
import {BlogsService} from './shared/blogs.service';
import {Post} from './shared/blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private blogsService: BlogsService) {
  }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe(
        posts => this.posts = posts,
        (error: Response) => console.log(error),
    );
  }
}