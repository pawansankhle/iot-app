import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {map} from 'rxjs/operators/map';
import {merge} from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import { ControlService } from './control.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'type', 'state', 'controller'];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ControlService) { }

  ngOnInit() {}

  _loadData() {
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this._service.searchControls(
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

   onControlChange(control) {
    console.log(control);
    this._service.controlOnOff(control)
    .subscribe(res => console.log(res));
   }


}
