import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device.component';
import { AddDeviceRoutes } from '../device/add-device/add-device.route';

export const DeviceRoutes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    canActivate: [],
    children: [
      ...AddDeviceRoutes,
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(DeviceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeviceRoutingModule {}
