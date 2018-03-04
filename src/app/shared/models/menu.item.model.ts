
import { IMenuItem } from '../interfaces';

export class MenuItem {
    title: String;
    component: any;
    children: Array<IMenuItem>;
    icon: String;
}
