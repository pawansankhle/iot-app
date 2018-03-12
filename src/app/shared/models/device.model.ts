import { User } from './user.model';
import { Type } from './type.enum';
import { INACTIVE_DURATION_UNIT } from './inactive-duration-unit.enum';
import { Location } from './location.model';

export interface Device {
    _id: String;
    device_id: String;
    created_by: User;
    modified_by: User;
    created_on: Date;
    modified_on: Date;
    enabled: Boolean;
    deleted: Boolean;
    inactive_duration: Number;
    inactive_duration_unit: INACTIVE_DURATION_UNIT;
    type: Type;
    state: Boolean;
    is_online: Boolean;
    location: Location;
    name: String;

}
