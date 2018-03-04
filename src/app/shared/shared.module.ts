
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { TranslationModule } from '../shared/translation';
import { ConfigService } from './services';
import { SharedRoutingModule } from './shared.routing.module';
import { HttpClientService, ErrorEventHandlerService, MessageService } from './services';

import { PageNotFoundComponent,
         InternalServerErrorComponent,
         NetworkIndigatorComponent } from './components';

import { MaterialModule } from './modules/material.module';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    InternalServerErrorComponent,
    NetworkIndigatorComponent,
],
  imports: [
    CommonModule,
    CoreModule,
    TranslationModule,
    MaterialModule,
    SharedRoutingModule,
  ],
  exports: [
    TranslationModule,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    NetworkIndigatorComponent,
    RouterModule,
    CoreModule,
    MaterialModule,
  ],
  providers: [
    HttpClientService,
    ConfigService,
    ErrorEventHandlerService,
    MessageService,
    ]
})
export class SharedModule {}
