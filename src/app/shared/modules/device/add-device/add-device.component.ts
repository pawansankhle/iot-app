import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { typeArray, INACTIVE_DURATION_UNIT_ARR } from '../../../models';
import { LocationService, ErrorMessageService } from '../../../services';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit, OnDestroy {
  deviceForm: FormGroup;
  deviceTypes: Array<String> = typeArray;
  deviceInactiveUnit: Array<String> = INACTIVE_DURATION_UNIT_ARR;
  disabled: Boolean = false;
  Userlocation: any;


  constructor(public fb: FormBuilder,
              public LocationSrv: LocationService,
              public errMsgSrv: ErrorMessageService,
              public _service: DeviceService,
              public _route: Router,
              public _location: Location
            ) {
    this.buildForm();
    this.setDeviceLocation();
  }

   get device_id(){ return this.deviceForm.get('device_id') }
   get type(){ return this.deviceForm.get('type') }
   get location(){ return this.deviceForm.get('location') }
   get state(){ return this.deviceForm.get('state') }
   get name(){ return this.deviceForm.get('name') }
   get inactive_duration(){ return this.deviceForm.get('inactive_duration') }
   get inactive_duration_unit(){ return this.deviceForm.get('inactive_duration_unit') }

   setDeviceLocation() {
    this.Userlocation = this.LocationSrv.getCurrentLocation().subscribe(location => {
      const cordinates = [];
      cordinates.push(location.coords.latitude);
      cordinates.push(location.coords.longitude);
      this.deviceForm.patchValue({
        'location': cordinates,
      });
     });
   }

  buildForm() {

    this.deviceForm = this.fb.group({
    'enabled' : [true, Validators.compose([])],
    'deleted' : [false, Validators.compose([])],
    'device_id': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    'type': ['', Validators.compose([Validators.required])],
    'name': ['', Validators.compose([Validators.required])],
    'state': [false, Validators.compose([Validators.required])],
    'inactive_duration' : ['', Validators.compose([Validators.required])],
    'inactive_duration_unit' : [this.deviceInactiveUnit[0], Validators.compose([Validators.required])],
    'location' : ['', Validators.compose([Validators.required])],
    'is_online': [false, Validators.compose([Validators.required])],
    });
  }

  onDeviceAdd(device) {
    this._service.create(device)
    .subscribe(res => {
      this.goBack();
     });
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.Userlocation.unsubscribe();
  }

  goBack() {
    this._location.back()
  }


}
