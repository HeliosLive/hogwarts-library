import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfComponent } from './bookshelf.component';

import { HGWCardModule } from '@shared/card/card.module';

@NgModule({
  declarations: [BookshelfComponent],
  imports: [CommonModule, HGWCardModule],
  exports: [BookshelfComponent],
})
export class BookshelfModule {}
