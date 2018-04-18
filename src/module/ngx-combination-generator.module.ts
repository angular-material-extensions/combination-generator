import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgxCombinationGeneratorService} from './service/ngx-combination-generator.service';

// Export module's public API
export {NgxCombinationGeneratorService} from './service/ngx-combination-generator.service';

@NgModule({
  imports:
    [
      CommonModule
    ],
})
export class NgxCombinationGeneratorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxCombinationGeneratorModule,
      providers: [NgxCombinationGeneratorService]
    };
  }
}
