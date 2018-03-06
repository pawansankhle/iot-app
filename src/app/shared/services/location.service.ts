import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
@Injectable()

export class LocationService {
  public userLocation = new Subject();
  constructor() {};


  getCurrentLocation(): Observable<any> {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.userLocation.next(position);
            this.userLocation.complete();
        });
    }
    return this.userLocation;
  }
}
