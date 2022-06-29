import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { PostsService } from '../services/posts.service';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
})
export class BookshelfComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(
    private readonly postsService: PostsService,
    private readonly historyService: HistoryService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.data$;
    this.startFetching();
  }

  onClick(post: Post): void {
    this.historyService.set(post);
  }

  private startFetching(): void {
    this.postsService.fetch();
  }
}
