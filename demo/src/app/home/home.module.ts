import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxCombinationGeneratorModule} from 'ngx-combination-generator';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    NgxCombinationGeneratorModule.forRoot(),
    HomeRoutingModule,
    AppSharedModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
