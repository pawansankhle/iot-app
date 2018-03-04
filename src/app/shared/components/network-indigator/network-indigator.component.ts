import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { MessageService } from '../../services';

@Component({
  selector: 'app-network-indigator',
  templateUrl: './network-indigator.component.html',
  styleUrls: ['./network-indigator.component.css']
})
export class NetworkIndigatorComponent implements OnInit {
  isConnected: Observable<boolean>;

  constructor(
    public msgSrv: MessageService
  ) {
      this.isConnected = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').map(() => true),
        Observable.fromEvent(window, 'offline').map(() => false));
    }

  ngOnInit() {
  }

}
