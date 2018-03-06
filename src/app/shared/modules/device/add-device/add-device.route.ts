
import { Routes } from '@angular/router';
import { AddDeviceComponent } from '../../device/add-device/add-device.component';

export const AddDeviceRoutes: Routes = [
    {
      path: 'add',
      component: AddDeviceComponent,
      canActivate: [],
      data: {
        breadcrumb: 'add Device'
      }
    },
  ];

