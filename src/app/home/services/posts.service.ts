import { Injectable } from '@angular/core';

import { BehaviorSubject, take, tap } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { PostsHttpService } from './posts-http.service';

@Injectable({
  providedIn: 'any',
})
export class PostsService {
  private readonly data = new BehaviorSubject<Post[]>([]);
  public data$ = this.data.asObservable();

  constructor(private postsHttpService: PostsHttpService) {}

  /**
    Disclaimer!
    In Current case, We could also return without subscription and just use the data with async pipe
    However, what if we want to call it again and overwrite it into the previous state?
  **/
  fetch(): void {
    this.data.next([]);
    this.postsHttpService
      .load()
      .pipe(
        take(1),
        tap((response: Post[]) => {
          this.data.next(response);
        })
      )
      .subscribe();
  }
}
