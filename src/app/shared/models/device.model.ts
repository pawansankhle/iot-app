import { User } from './user.model';
import { Type } from './type.enum';
import { Status} from './status.enum';
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
    type: Type;
    state: Boolean;
    status: Status;
    location: Location;
    name: String;

}
