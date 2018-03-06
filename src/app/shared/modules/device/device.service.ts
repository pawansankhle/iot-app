import {Injectable} from '@angular/core';
import { Device } from '../../models/device.model';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';

@Injectable()
export class DeviceService {

  constructor(public http: HttpClientService) {};

  create(device) {
    const url = UrlConstant.CREATE_DEVICE_URL;
    this.http.post(url, device)
    .subscribe(res => {
        console.log(res);
    });
  }

  search(sortBy: string, sortType: string, page: number, limit: number) {
    const url = UrlConstant.SEARCH_DEVICE_URL;
    return this.http.getWithPagination(url, sortBy, sortType, page, limit);

  }

}
