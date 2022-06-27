import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HGWCardModule } from '@shared/card/card.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HGWCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
