import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ControlService } from '../control.service';
import { DeviceService } from '../../device/device.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CONTROLS_TYPES_ARR } from '../../../models/control.enum';
import { Device } from '../../../models/device.model';
import { ErrorMessageService } from '../../../services';

@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.component.html',
  styleUrls: ['./add-control.component.css']
})
export class AddControlComponent implements OnInit {

  controlForm: FormGroup;
  devices: Array<Device>;
  controlTypes: Array<String> = CONTROLS_TYPES_ARR;
  constructor(public _location: Location,
              public _service: ControlService,
              public  deviceService: DeviceService,
              public errMsgSrv: ErrorMessageService,
              public fb: FormBuilder,
             ) {
              this.buildForm();
            }

  ngOnInit() {
    this.getAllDevices();
  }


  get type(){ return this.controlForm.get('type') }
  get name(){ return this.controlForm.get('name') }
  get state(){ return this.controlForm.get('state') }
  get control_by(){ return this.controlForm.get('control_by') }
  get controller_pin(){ return this.controlForm.get('controller_pin') }



  getAllDevices() {
    this.deviceService.getAllDeives()
    .subscribe(devices => {
      this.devices = devices;
    });
  }

  buildForm() {

        this.controlForm = this.fb.group({
        'deleted' : [false, Validators.compose([])],
        'type': ['', Validators.compose([Validators.required])],
        'name': ['', Validators.compose([Validators.required])],
        'state': [false, Validators.compose([Validators.required])],
        'controller_pin': ['', Validators.compose([Validators.required])],
        'control_by': this.fb.group({
          '_id': ['', Validators.compose([Validators.required])]
        })
        });
      }

  goBack() {
    this._location.back()
  }

  onControlAdd(control) {
    this._service.create(control)
    .subscribe(res => {
      this.goBack();
     });
  }

}
