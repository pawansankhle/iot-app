import { User } from './user.model';
import { CONTROLS_TYPES } from './control.enum';
import { Device } from './device.model';

export interface Control {
    _id: String;
    created_by: User;
    modified_by: User;
    created_on: Date;
    modified_on: Date;
    state: Boolean;
    type: CONTROLS_TYPES;
    name: String;
    controller_pin: Number;
    control_by: Device
}
