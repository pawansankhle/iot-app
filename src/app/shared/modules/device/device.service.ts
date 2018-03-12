import {Injectable} from '@angular/core';
import { Device } from '../../models/device.model';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';
import { MessageService } from '../../services/message.service';
import {LoaderService} from '../../modules/loader/loader.service';

@Injectable()
export class DeviceService {

  constructor(public http: HttpClientService,
             public _messageSrv: MessageService,
             public _loader: LoaderService
            ) {};

  create(device) {
    this._loader.show();
    const url = UrlConstant.CREATE_DEVICE_URL;
    return this.http.post(url, device)
    .map(res => {
      this._loader.hide();
      const result = res.json();
      this._messageSrv.simple(result.message);
      return result;
    });
    }

  search(sortBy: string, sortType: string, page: number, limit: number) {
    const url = UrlConstant.SEARCH_DEVICE_URL;
    return this.http.getWithPagination(url, sortBy, sortType, page, limit);

  }

  removeById(deviceId) {
    if (deviceId) {
      const url = UrlConstant.DEVICE_REMOVE_BY_ID_URL + deviceId;
      return this.http.post(url, '').
      map(res => {
        const result = res.json();
        this._messageSrv.simple(result.message);
        return result;
      });
    }
  }

}
