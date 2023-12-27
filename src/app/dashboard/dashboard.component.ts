import { Component, Input } from '@angular/core';
import { AppData } from 'src/lib/types';
import { Day } from './agenda/lib/types';
import { ChartData } from 'chart.js';
import { PersonTile } from './person-tile/person-tile.component';
import { Rsvp } from './rsvp-item/lib/types';
import { chartOptions } from './lib/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  @Input() appData: AppData = {};

  newProfiles?: PersonTile[];
  rsvps?: Rsvp[];
  firstTimeVisitors?: PersonTile[];
  birthdays?: PersonTile[];
  newDonors?: PersonTile[];
  auditoriumData?: ChartData;
  kidsCheckInData?: ChartData;
  givingData?: ChartData;
  agenda?: Day[];

  chartOptions = chartOptions;

  ngOnInit() {
    this.updateData();
  }

  ngOnChanges() {
    this.updateData();
  }

  updateData() {
    this.newProfiles = this.appData.newProfiles;
    this.rsvps = this.appData.rsvps;
    this.firstTimeVisitors = this.appData.firstTimeVisitors;
    this.birthdays = this.appData.birthdays;
    this.newDonors = this.appData.newDonors;
    this.auditoriumData = this.appData.auditoriumData;
    this.kidsCheckInData = this.appData.kidsCheckInData;
    this.givingData = this.appData.givingData;
    this.agenda = this.appData.agenda;
  }
}
