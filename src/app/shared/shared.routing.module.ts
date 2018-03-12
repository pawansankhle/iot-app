import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';


@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          children: [],
        },
        {
          path: 'internal-server-error',
          component: InternalServerErrorComponent
        }
      ]),
    ],
    exports: [
      RouterModule,
    ],
  })
export class SharedRoutingModule {}
