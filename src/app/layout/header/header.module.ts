import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
   //  LocaleResolver,
  ]
})

export class HeaderModule { }
