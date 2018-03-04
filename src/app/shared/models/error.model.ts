import { ErrorEventType } from '../constants/error.events.constants';

export class ErrorEvent {
    constructor(public type: ErrorEventType, public value: any) {}
}
