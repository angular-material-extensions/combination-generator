import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatTooltipModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {DisqusModule} from 'ngx-disqus';
import {ClipboardModule} from 'ngx-clipboard';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  imports:
    [
      RouterModule,
      NgbCollapseModule.forRoot(),
      NgxMaterialPagesModule.forRoot(),
      DisqusModule.forRoot('ngx-combination-generator'),
      HighlightModule.forRoot(),
      ClipboardModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatTooltipModule,
      MatInputModule,
      MatChipsModule,
      MatButtonModule,
      MatIconModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatDividerModule,
      MatSnackBarModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    NgxMaterialPagesModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
    DisqusModule,
    HighlightModule,
    ClipboardModule
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
