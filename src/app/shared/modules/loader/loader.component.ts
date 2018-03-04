import { Component, OnInit, Input } from '@angular/core';
import { LoaderService, SlimLoadingBarEventType, SlimLoadingBarEvent } from './loader.service';

@Component({
    selector: 'app-loader',
    template: `<div class="load-9">
                <div class="spinner" *ngIf="show">
                <div class="bubble-1"></div>
                <div class="bubble-2"></div>
               </div></div>`
})
export class LoaderComponent implements OnInit {

    @Input() show = false;

    constructor(public service: LoaderService) { }

    ngOnInit() {
        this.service.events.subscribe((event: SlimLoadingBarEvent) => {
            if (event.type === SlimLoadingBarEventType.VISIBLE) {
                 this.show = event.value;
            }
        });
    }

}
