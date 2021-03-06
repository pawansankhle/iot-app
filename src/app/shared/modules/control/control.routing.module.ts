import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control.component';
import { AddControlRoutes } from './add-control/add-control.route';

export const ControlRoutes: Routes = [
  {
    path: '',
    component: ControlComponent,
    canActivate: [],
    data: {
      breadcrumbs: 'Control'
    }
    },
   ...AddControlRoutes
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
