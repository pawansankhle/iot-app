import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ErrorCode, ErrorEventType} from '../constants';
import { ErrorMessage, ErrorEvent } from '../models';

@Injectable()
export class ErrorEventHandlerService {
    public eventSource: Subject<ErrorEvent> = new Subject<ErrorEvent>();
    public  events: Observable<ErrorEvent> = this.eventSource.asObservable();
    constructor() {}


    private emitEvent(event: ErrorEvent) {
        if (this.eventSource) {
            this.eventSource.next(event);
        }
    }

    _getErrorMsg(error) {
        const errmsg = new ErrorMessage();
        errmsg.status = ErrorCode[error.status];
        errmsg.url = error.url;
        errmsg.messgae = error.statusText;
        return errmsg;
    }

    Error500(err) {
        this.emitEvent(new ErrorEvent(ErrorEventType.SERVER_ERROR, this._getErrorMsg(err) ));
    }

    Error404(err) {
        this.emitEvent(new ErrorEvent(ErrorEventType.PAGE_NOT_FOUND, this._getErrorMsg(err)));
    }

}
