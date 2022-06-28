import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';

import { HgwReversePipeModule } from '@shared/pipes/reverse/reverse.pipe.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HgwReversePipeModule],
  exports: [HistoryComponent],
})
export class HistoryModule {}
