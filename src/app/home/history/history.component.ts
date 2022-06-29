import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private readonly historyService: HistoryService) {}

  ngOnInit() {
    this.posts$ = this.historyService.data$;
  }

  trackByFn(index: number, item: Post) {
    return index ?? item.id;
  }
}
