import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import type { Post } from '@shared/models/post.interface';
import { ApiConfigService } from '@core/services/api-config.service';

@Injectable({ providedIn: 'any' })
export class PostsHttpService {
  private readonly endpoint = 'posts';

  constructor(
    private httpClient: HttpClient,
    private apiConfigService: ApiConfigService
  ) {}

  load(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${this.apiConfigService.baseUrl}/${this.endpoint}`
    );
  }
}
