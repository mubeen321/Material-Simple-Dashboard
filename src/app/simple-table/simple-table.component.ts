import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Phase #1', weight: 6 },
  { position: 'Phase #2', weight: 19 },
  { position: 'Phase #3', weight: 1 },
];
@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['position', 'weight'];
  dataSource = ELEMENT_DATA;
}
