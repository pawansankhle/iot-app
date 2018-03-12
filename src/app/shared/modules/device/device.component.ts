import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Device } from '../../models/device.model';
import { HttpClientService } from '../../services/http.service';
import { UrlConstant } from '../../constants/url.constant';
import {map} from 'rxjs/operators/map';
import { DeviceService } from './device.service';

import {merge} from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';


@Component({
  selector: 'app-light',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'DeviceId', 'Type', 'Status', 'Action'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClientService, private _service: DeviceService) { }

  ngOnInit() {}

  _loadData() {
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this._service.search(
          this.sort.active, this.sort.direction, this.paginator.pageIndex + 1, this.paginator.pageSize);
      }),
      map(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total;
        console.log(this.resultsLength);

        return data.docs;
      }), catchError(() => {
        this.isLoadingResults = false;
        return observableOf([]);
      })
    )
    .subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    });
  }

  ngAfterViewInit() {
    this._loadData();
   }

   deviceDelete(deviceId) {
    console.log(deviceId, 'here');
    this._service.removeById(deviceId)
    .subscribe(data => {
      console.log(data);
      if (data.success) {
        this.dataSource.data = this.dataSource.data.filter(function(device: Device){
                return device.device_id !== deviceId;
        });
      }
    });

   }
}

