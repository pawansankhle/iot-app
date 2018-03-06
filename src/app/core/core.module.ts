import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './core.routing';
import 'hammerjs';
import { Ng2Webstorage } from 'ng2-webstorage';
import { ScrollbarModule } from 'ngx-scrollbar';
@NgModule({
    declarations: [],
    imports: [
              FormsModule,
              HttpModule,
              FlexLayoutModule,
              ReactiveFormsModule,
              Ng2Webstorage,
              ScrollbarModule,
              RouterModule.forChild(coreRoutes),
              ],
    providers: [
        {
            provide: 'Window',
            useValue: window,
           }
    ],
    exports: [
              RouterModule ,
              Ng2Webstorage,
              ReactiveFormsModule,
              HttpModule,
              FlexLayoutModule,
              FormsModule,
              ScrollbarModule,
              ]
})

export class CoreModule {}
