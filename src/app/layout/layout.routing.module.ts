import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHeaderRoutes, LayoutSideNavRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutHeaderRoutes,
      ...LayoutSideNavRoutes
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
