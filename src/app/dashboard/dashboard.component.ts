import { Component, Input } from '@angular/core';
import { AppData } from '../../lib/types';
import { EventDay } from './agenda/lib/types';
import { ChartData } from 'chart.js';
import { PersonTile, PersonTileComponent } from './person-tile/person-tile.component';
import { Rsvp } from './rsvp-item/lib/types';
import { chartOptions, currencyChartOptions } from './lib/charts';
import { WidgetComponent } from './widget/widget.component';
import { RsvpItemComponent } from './rsvp-item/rsvp-item.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  imports: [
    WidgetComponent,
    PersonTileComponent,
    RsvpItemComponent,
    AgendaComponent,
    BaseChartDirective
  ]
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
  agenda?: EventDay[];

  chartOptions = chartOptions;
  currencyChartOptions = currencyChartOptions;

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
