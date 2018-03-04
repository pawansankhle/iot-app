import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Device } from '../../models/device.model';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-light',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {
  displayedColumns = ['DeviceId', 'Type', 'State', 'Status'];
  // 'Enabled', 'Active',  'Location'
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClientService) { }

  ngOnInit() {
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.http.getWithPagination(UrlConstant.GET_ALL_DEVICES, 'deviceId', 'desc', this.paginator.pageIndex)
    .subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}

