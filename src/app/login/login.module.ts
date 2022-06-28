import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { HGWButtonModule } from '@shared/components/button/button.module';
import { HGWRippleDirectiveModule } from '@shared/directives/ripple/ripple.directive.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, HGWButtonModule, HGWRippleDirectiveModule],
  exports: [LoginComponent],
})
export class LoginModule {}
