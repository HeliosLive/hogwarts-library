import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { PostsHttpService } from './posts-http.service';

@Injectable({
  providedIn: 'any',
})
export class PostsService {
  constructor(private postsHttpService: PostsHttpService) {}

  getAllData(): Observable<Post[]> {
    return this.postsHttpService.load();
  }
}
