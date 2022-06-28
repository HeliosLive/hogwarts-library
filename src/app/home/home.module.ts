import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { HistoryModule } from './history/history.module';
import { BookshelfModule } from './bookshelf/bookshelf.module';
import { PostsService } from './services/posts.service';
import { PostsHttpService } from './services/posts-http.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HistoryModule, BookshelfModule],
  providers: [PostsService, PostsHttpService],
  exports: [HomeComponent],
})
export class HomeModule {}
