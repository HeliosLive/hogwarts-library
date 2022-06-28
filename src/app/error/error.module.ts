import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { ErrorComponent } from './error.component';

import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [ErrorRoutingModule, AngularSvgIconModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
