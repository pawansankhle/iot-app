import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from '../../../shared/modules/device/device.component';
import { DeviceRoutingModule } from './device.routing.module';
import { SharedModule } from '../../shared.module';
import { AddDeviceComponent } from '../../../shared/modules/device/add-device/add-device.component';
@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule
  ],
  exports: [  ],
  declarations: [ DeviceComponent, AddDeviceComponent ]
})
export class DeviceModule { }
