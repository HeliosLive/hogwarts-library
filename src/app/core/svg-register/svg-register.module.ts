import { NgModule } from '@angular/core';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

import { FlowIcons } from './flow-icons.enum';

@NgModule({
  imports: [AngularSvgIconModule.forRoot()],
})
export class SvgRegisterModule {
  constructor(private iconReg: SvgIconRegistryService) {
    /* flow */
    this.iconReg.loadSvg('assets/svg/404.svg', FlowIcons.error)?.subscribe();
  }
}
