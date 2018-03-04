import { Injectable } from '@angular/core';
import {AuthEventType} from '../constants/auth.events.constant';
import { AuthEvent } from '../models/auth.class';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthEventHandlerService {
    private eventSource: Subject<AuthEvent> = new Subject<AuthEvent>();
    public events: Observable<AuthEvent> = this.eventSource.asObservable();

    constructor() {}


    private emitEvent(event: AuthEvent) {
        if (this.eventSource) {
            this.eventSource.next(event);
        }
    }

    unAuthorizAccess() {
        const authEventName = 'unAuthorized';
        this.emitEvent(new AuthEvent(AuthEventType.UNAUTHORIZED, authEventName));
    }

}
