import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Device } from '../../models/device.model';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';
import {map} from 'rxjs/operators/map';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-light',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'DeviceId', 'Type', 'State', 'Status'];
  // 'Enabled', 'Active',  'Location'
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClientService, private service: DeviceService) { }

  ngOnInit() {
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.service.search('deviceId', 'desc', this.paginator.pageIndex + 1 , 10)
   .subscribe(data => {
      console.log(data);
      this.dataSource.data = data.docs;
      this.resultsLength = data.total;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}

