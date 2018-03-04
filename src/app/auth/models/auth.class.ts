import {AuthEventType} from '../constants/auth.events.constant';

export class AuthEvent {
    constructor(public type: AuthEventType, public value: any) {}
}
