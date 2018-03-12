import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control.component';

export const ControlRoutes: Routes = [
  {
    path: '',
    component: ControlComponent,
    canActivate: [],
    data: {
      breadcrumbs: 'Control'
    }
    },
//   ...AddDeviceRoutes
];


@NgModule({
  imports: [
    RouterModule.forChild(ControlRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ControlRoutingModule {}
