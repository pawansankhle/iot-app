import {Injectable} from '@angular/core';
import {Http, BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthEventHandlerService } from '../../auth/services/authEvent.handler.service';
import { ErrorEventHandlerService } from '../../shared/services/error.event.handler.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
import { LoaderService } from '../../shared/modules/loader/';
import { setTimeout } from 'timers';

@Injectable()
export class HttpClientService extends BaseRequestOptions {

  accessToken: String = 'abcd';
  constructor(private http: Http,
              public auth: AuthEventHandlerService,
              public errorSrv: ErrorEventHandlerService,
              private loaderSrv: LoaderService
  ) {
    super();
    if (localStorage.getItem('token')) {
        this.accessToken = localStorage.getItem('token');
    }

    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('access-token',this.accessToken+'');
}


_serverError(err: any) {
  console.log(err);
  if (typeof(err) ===  'object') {
    this.loaderSrv.hide();
    if (err.status === 401) {
      this.auth.unAuthorizAccess();
      return Observable.throw('Unauthorized');
    }
    if (err.status === 500) {
      this.errorSrv.Error500(err);
      return Observable.throw('error=>500');
    }

    if (err.status === 404) {
      this.errorSrv.Error404(err);
      return Observable.throw('error=>404');
    }

  }
  return Observable.throw(err || 'backend server error');
}

  get(url) {
    return this.http.get(url, {
      headers: this.headers,
    })
    .catch(e => {
      return this._serverError(e);
    });
  }

  getWithPagination(url, sort: string, order: string, page: number) {
    const pagination = `?sort=${sort}&order=${order}&page=${page}`;
    return this.http.get(url + pagination, {
      headers: this.headers,
    })
    .map(res => res.json())
    .catch(e => {
      return this._serverError(e);
    });
  }

  post(url, data) {
   return this.http.post(url, data, {
     headers: this.headers,
     // withCredentials: true
    })
    .catch(e => {
      return this._serverError(e);
    });
  }
}
