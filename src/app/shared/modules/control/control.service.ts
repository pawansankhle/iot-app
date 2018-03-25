import {Injectable} from '@angular/core';
import { Device, Control } from '../../models';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';
import { MessageService } from '../../services/message.service';
import {LoaderService} from '../../modules/loader/loader.service';

@Injectable()
export class ControlService {

  constructor(public http: HttpClientService,
             public _messageSrv: MessageService,
             public _loader: LoaderService
            ) {};

  create(device) {
    this._loader.show();
    const url = UrlConstant.CONTROL_URL;
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


  searchControls(sortBy: string, sortType: string, page: number, limit: number) {
    const url = UrlConstant.CONTROL_SEARCH_URL;
    return this.http.getWithPagination(url, sortBy, sortType, page, limit);

  }

  controlOnOff(control: Control) {
    const url = UrlConstant.CONTROL_ONOFF_URL + `/${control._id}/${control.state}`;
    return this.http.post(url, control).
    map(res => {
      const result = res.json();
      this._messageSrv.simple(result.message);
      return result;
    });
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
