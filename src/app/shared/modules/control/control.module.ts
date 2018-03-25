import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import { ControlRoutingModule } from './control.routing.module';
import { SharedModule } from '../../shared.module';
import { AddControlComponent } from '../control/add-control/add-control.component';

@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule,
    SharedModule
  ],
  declarations: [ControlComponent, AddControlComponent]
})
export class ControlModule { }
