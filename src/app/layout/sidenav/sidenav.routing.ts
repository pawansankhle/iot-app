import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { LoginComponent } from '../../auth/login/login.component';
export const LayoutSideNavRoutes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    outlet: 'sidenav',
    }

];
