import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SidenavService } from './sidenav.service';
import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    SidenavComponent,
  ],
  providers: [
    SidenavService,
  ],
})

export class SideNavModule { }
