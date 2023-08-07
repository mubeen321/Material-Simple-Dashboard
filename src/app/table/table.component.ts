// table.component.ts

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiService) {
    console.log('TableComponent constructor', this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadTableData();
  }

  loadTableData() {
    this.apiService.getUsers().subscribe(
      (data) => {
        console.log('Data from API', data)
        // Assuming the API response has a 'data' property containing the array of users
        this.dataSource.data = data.data;
        console.log('Data loaded', this.dataSource.data);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
