import { Component, OnInit } from '@angular/core';

import { take, tap } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
})
export class BookshelfComponent implements OnInit {
  posts!: Post[];

  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getAllData()
      .pipe(
        take(1),
        tap((posts: Post[]) => (this.posts = posts))
      )
      .subscribe();
  }
}
