import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { Post } from '@shared/models/post.interface';

@Injectable({
  providedIn: 'any',
})
export class HistoryService {
  private readonly data = new BehaviorSubject<Post[]>([]);
  public data$ = this.data.asObservable();

  set(post: Post): void {
    this.data.next([...this.data.value, post]);
  }
}
