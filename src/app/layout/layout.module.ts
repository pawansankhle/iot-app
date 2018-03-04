import { NgModule } from '@angular/core';

// import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { LayoutRoutingModule } from './layout.routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    // FooterModule,
    HeaderModule,
    SideNavModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    SideNavModule,
  ],
  declarations: [ ]
})

export class LayoutModule { }
