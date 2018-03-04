import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.css']
})
export class InternalServerErrorComponent implements OnInit {

  errorUrl: String;
  constructor(public router: Router) { }

  ngOnInit() {
    const param = this.router.parseUrl(this.router.url);
    console.log(param);
    this.errorUrl = param.queryParams.url;
  }

}
