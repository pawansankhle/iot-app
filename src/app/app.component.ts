import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { LoaderService } from './shared/modules/loader';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ErrorEventHandlerService } from './shared/services/error.event.handler.service';
import { ErrorEventType } from './shared/constants';
import { ErrorEvent } from './shared/models';
import { Router } from '@angular/router';
import { setTimeout } from 'timers';
import { AuthService } from './auth/services/auth.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  navBarSrv: SidenavService;
  private subscription: ISubscription;
  public opened: boolean;

   constructor(navBarSrv: SidenavService,
               public loaderSrv: LoaderService,
               private translate: TranslateService,
               private localStorage: LocalStorageService,
               private errorHandlerSrv: ErrorEventHandlerService,
               private route: Router,
               public authSrv: AuthService
  ) {
    this.navBarSrv = navBarSrv;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.localStorage.retrieve('language') || 'en');
  }


  ngOnInit() {
    this.navBarSrv.setSidenav(this.sidenav);
    this.errorHandlerSrv.events.subscribe((event: ErrorEvent) => {
        this. _errorHandler(event);
      })
      this.navigateUser()

      this.subscription = this.authSrv.authenticateState$.subscribe((res) => {
        this.navigateUser();
      });
  }

  navigateUser() {
    if (this.authSrv.isAuthenticated()) {
      this.route.navigate(['/dashboard']);
    }else {
      this.route.navigate(['/auth/login']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  _errorHandler(ev) {
    switch (ev.type) {
      case ErrorEventType.PAGE_NOT_FOUND:
        this.route.navigate(['/page-not-found'], { queryParams: { url : ev.value.url }, skipLocationChange: true,  });
        break;
      case ErrorEventType.SERVER_ERROR:
        this.route.navigate(['/internal-server-error'], { queryParams: { url : ev.value.url }, skipLocationChange: true });
        break;

    }
  }
}

