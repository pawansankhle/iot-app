import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { AuthService } from '../../auth/services';
import { User } from '../../auth/models/user.class';
import { ISubscription } from 'rxjs/Subscription';
import { MessageService } from '../../shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit, OnDestroy {
  navSrv: SidenavService;
  opened = false;
  user: User;
  private subscription: ISubscription;

  constructor(
    navSrv: SidenavService,
    public authSrv: AuthService,
    public msgSrv: MessageService
  ) {
    this.navSrv = navSrv;
  }

  ngOnInit() {
    this.getUserProfile();
    // this.subscription = this.authSrv.authenticateState$.subscribe(res => {
    //   this.getUserProfile();
    // });
  }

  getUserProfile() {
    this.user = this.authSrv.getUserinContext();
  }

  toggleSideNav(toggle: boolean) {
    this.opened = toggle;
    this.navSrv.toggle(this.opened);
  }

  logout() {
    this.authSrv.logout().subscribe(res => {
      this.toggleSideNav(false);
       this.msgSrv.simple(res);
    })
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
