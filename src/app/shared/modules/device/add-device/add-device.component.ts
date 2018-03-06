import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { typeArray } from '../../../models/type.enum';
import { StatusArray } from '../../../models/status.enum';
import { LocationService } from '../../../services/location.service';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
import { ErrorMessageService } from '../../../services/error.message.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit, OnDestroy {
  deviceForm: FormGroup;
  deviceTypes: Array<String> = typeArray;
  deviceStatus: Array<String> = StatusArray;
  disabled: Boolean = false;
  Userlocation: any;


  constructor(public fb: FormBuilder,
              public LocationSrv: LocationService,
              public errMsgSrv: ErrorMessageService,
              public service: DeviceService,
              public route: Router
            ) {
    this.buildForm();
    this.setDeviceLocation();
  }

   get device_id(){ return this.deviceForm.get('device_id') }
   get type(){ return this.deviceForm.get('type') }
   get location(){ return this.deviceForm.get('location') }
   get state(){ return this.deviceForm.get('state') }
   get name(){ return this.deviceForm.get('name') }

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
    'status': [this.deviceStatus[1], Validators.compose([Validators.required])],
    'location' : ['', Validators.compose([Validators.required])],
    });
  }

  onDeviceAdd(device) {
    console.log(device);
    this.service.create(device);
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.Userlocation.unsubscribe();
  }

  goBack() {
    this.route.navigate(['/device']);
  }


}
