import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    { title: 'New People' },
    { title: 'Upcoming Birthdays' },
    { title: 'New Donors' },
    { title: 'Auditorium' },
    { title: 'Kids' },
    { title: 'Giving' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
