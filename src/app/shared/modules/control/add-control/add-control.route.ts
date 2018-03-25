
import { Routes } from '@angular/router';
import { AddControlComponent } from '../../control/add-control/add-control.component';

export const AddControlRoutes: Routes = [
    {
      path: 'add',
      component: AddControlComponent,
      canActivate: [],
      data: {
        breadcrumb: 'add Control'
      }
    },
  ];

