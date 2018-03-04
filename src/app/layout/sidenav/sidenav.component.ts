import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { MENU } from '../../shared/constants/menu.constatns';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  user: any;
  menus = MENU;
  constructor(public authSrv: AuthService) { }

  ngOnInit() {
  }

  }
