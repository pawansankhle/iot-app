import {Injectable} from '@angular/core';
import {ILoader} from './interfaces/loader.interface';
// import {isPresent} from '../../util/util.common';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


export enum SlimLoadingBarEventType {
    VISIBLE
}

export class SlimLoadingBarEvent {
    constructor(public type: SlimLoadingBarEventType, public value: any) {}
}

@Injectable()
export class LoaderService implements ILoader {
    // private _color:string = 'firebrick';
    private _visible = true;

    private eventSource: Subject<SlimLoadingBarEvent> = new Subject<SlimLoadingBarEvent>();
    public events: Observable<SlimLoadingBarEvent> = this.eventSource.asObservable();

    constructor() { }

    set visible(value: boolean) {
        if (typeof value !== 'undefined') {
            this._visible = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
        }
    }

    get visible(): boolean {
        return this._visible;
    }

    private emitEvent(event: SlimLoadingBarEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }

    show() {
        this.hide();
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

}
