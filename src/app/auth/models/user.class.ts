import { IUser } from '../interfaces/user.interface';
// import { Address } from '../classes/address.class';
export class User implements IUser {
  username: String;
  password: String;
  created_on: Date;
  enabled: Boolean;
  deleted: Boolean;
  firstname: String;
  lastname: String;
  email: String;
  mobile: String;
  image: any;
  roles: any;
  _id: Number;
  // addresses: Address[];
}
