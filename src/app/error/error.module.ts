import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { ErrorComponent } from './error.component';

import { ErrorRoutingModule } from './error-routing.module';
import { HGWButtonModule } from '@shared/components/button/button.module';
import { HGWRippleDirectiveModule } from '@shared/directives/ripple/ripple.directive.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    ErrorRoutingModule,
    AngularSvgIconModule,
    HGWButtonModule,
    HGWRippleDirectiveModule,
  ],
  exports: [ErrorComponent],
})
export class ErrorModule {}
