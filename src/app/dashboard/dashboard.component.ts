import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

interface BoxContent {
  title: string;
  content: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  leftBoxes: BoxContent[] = [
    { title: 'Box 1', content: 'Box 1 content' },
    { title: 'Box 2', content: 'Box 2 content' },
    { title: 'Box 3', content: 'Box 3 content' },
  ];

  // Dummy data for right container boxes
  rightBoxes: BoxContent[] = [
    { title: 'Right Box 1', content: 'Right Box 1 content' },
    { title: 'Right Box 2', content: 'Right Box 2 content' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
