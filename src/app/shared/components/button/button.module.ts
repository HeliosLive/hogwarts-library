import { NgModule } from '@angular/core';
import { HGWRippleDirectiveModule } from '@shared/directives/ripple/ripple.directive.module';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [HGWRippleDirectiveModule],
  exports: [ButtonComponent],
})
export class HGWButtonModule {}
