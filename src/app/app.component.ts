import { Component } from '@angular/core';
import {
  agendaUrl,
  auditoriumChartUrl,
  birthdaysUrl,
  clientHeadHash,
  firstTimeVisitorsUrl,
  givingChartUrl,
  headHashUrl,
  kidsCheckInChartUrl,
  newDonorsUrl,
  newProfilesUrl,
  planningCenterApiKey,
  teamRsvpsUrl,
} from 'src/lib/configuration';
import { forkJoin, Observable, map } from 'rxjs';
import { CheckIn } from 'src/lib/planningCenter/check-ins/2023-04-05/types';
import { HomeWidgetsNewDonor } from 'src/lib/planningCenter/giving/privateTypes';
import {
  Person,
  BirthdayPeople,
} from 'src/lib/planningCenter/people/2023-03-21/types';
import { DashboardWidget } from 'src/lib/planningCenter/undocumented/people/types';
import { ApiService } from 'src/lib/services/api.service';
import {
  parseWeeklyChartData,
  parseMonthlyChartData,
} from './dashboard/lib/mutators/charts';
import {
  parseFirstTimeVisitors,
  parseBirthdays,
  parseNewProfiles,
} from './dashboard/lib/mutators/people';
import { parseRsvps } from './dashboard/lib/mutators/rsvps';
import { AppData } from 'src/lib/types';
import { parseNewDonors } from './dashboard/lib/mutators/giving';
import { DateTime, Duration } from 'luxon';
import { BackgroundColor } from './status/status.component';
import { hardRefresh } from 'src/lib/browser';
import { EventInstance } from 'src/lib/planningCenter/calendar/types';
import { parseAgenda } from './dashboard/lib/mutators/agenda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  private fetchIntervalInSeconds = 300; // Refresh data every 5 minutes
  private hardRefreshIntervalInHours = 24; // Refresh page each day
  private checkForUpatesIntervalInSeconds = 60; // Check for client updates every minute
  private clientUpdateDelayInSeconds = 300; // Wait 5 minutes before refreshing client

  private lastRefresh: DateTime = DateTime.now();
  private fetchDataInterval?: any;
  private statusUpdateInterval?: any;
  private clientUpdateCheckInterval?: any;

  title = 'cos-dashboard';

  appData?: AppData;

  statusText: string = '';
  statusColor: BackgroundColor = BackgroundColor.None;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if (planningCenterApiKey.get() !== null) {
      this.init();
    }
  }

  init() {
    this.fetchData();
    this.fetchDataInterval = setInterval(() => {
      this.fetchData();
    }, Duration.fromObject({ seconds: this.fetchIntervalInSeconds }).toMillis());

    this.statusUpdateInterval = setInterval(() => {
      this.updateStatusText();
    }, Duration.fromObject({ minutes: 1 }).toMillis());

    setTimeout(() => {
      hardRefresh();
    }, Duration.fromObject({ hours: this.hardRefreshIntervalInHours }).toMillis());

    this.checkForClientUpdates();
    this.clientUpdateCheckInterval = setInterval(() => {
      this.checkForClientUpdates();
    }, Duration.fromObject({ seconds: this.checkForUpatesIntervalInSeconds }).toMillis());

    this.setupMouseHiding();
  }

  fetchData() {
    forkJoin([
      this.apiService.fetchCollection<Person>(newProfilesUrl),
      this.apiService.fetchSingle<any>(teamRsvpsUrl),
      this.apiService.fetchCollection<CheckIn>(firstTimeVisitorsUrl),
      this.apiService.fetchSingle<BirthdayPeople>(birthdaysUrl),
      this.apiService.fetchCollection<HomeWidgetsNewDonor>(newDonorsUrl),
      this.apiService.postAndFetchSingle<DashboardWidget>(
        auditoriumChartUrl,
        ''
      ),
      this.apiService.postAndFetchSingle<DashboardWidget>(
        kidsCheckInChartUrl,
        ''
      ),
      this.apiService.postAndFetchSingle<DashboardWidget>(givingChartUrl, ''),
      this.apiService.fetchCollection<EventInstance>(agendaUrl)
    ]).subscribe(
      ([
        newProfiles,
        rsvps,
        firstTimeVisitors,
        birthdays,
        newDonors,
        auditoriumData,
        kidsCheckInData,
        givingData,
        agenda
      ]) => {
        this.appData = {
          newProfiles: parseNewProfiles(newProfiles),
          rsvps: parseRsvps(rsvps),
          firstTimeVisitors: parseFirstTimeVisitors(firstTimeVisitors),
          birthdays: parseBirthdays(birthdays),
          newDonors: parseNewDonors(newDonors),
          auditoriumData: parseWeeklyChartData(auditoriumData),
          kidsCheckInData: parseWeeklyChartData(kidsCheckInData),
          givingData: parseMonthlyChartData(givingData),
          agenda: parseAgenda(agenda)
        };
        this.statusText = 'updated just now';
        this.lastRefresh = DateTime.now();
      }
    );
  }

  updateStatusText() {
    const now = DateTime.now();
    this.statusText = `updated ${now
      .minus(now.diff(this.lastRefresh))
      .minus({ minutes: 1 })
      .toRelative({ unit: 'minutes' })}`;
  }

  checkForClientUpdates() {
    this.fetchHeadHash().subscribe((text) => {
      const currentHeadHash = clientHeadHash.get();

      if (currentHeadHash === null) {
        clientHeadHash.set(text);
        return;
      }

      if (text !== currentHeadHash) {
        clientHeadHash.set(text);
        this.updateClient();
      }
    });
  }

  updateClient() {
    clearInterval(this.statusUpdateInterval);
    clearInterval(this.clientUpdateCheckInterval);
    clearInterval(this.fetchDataInterval);

    this.statusColor = BackgroundColor.Warning;
    this.statusText = 'Client updating soon';

    setTimeout(
      () => hardRefresh(),
      Duration.fromObject({
        seconds: this.clientUpdateDelayInSeconds,
      }).toMillis()
    );
  }

  fetchHeadHash() {
    return this.apiService.fetchPlainText(headHashUrl);
  }

  setupMouseHiding() {
    let timeout: any;
    let wakeTime = 3500; // how long to wait before hiding cursor 
    let currentCursor = document.body.style.cursor;
    currentCursor == 'none' ? 'default' : currentCursor;
    timeout = setTimeout(hideMouseCursor, wakeTime);
    
    function hideMouseCursor() {  
      if (document.body.style.cursor !== 'none') {
        document.body.style.cursor = 'none';  
      }
    }

    function showMouseCursor() {
      clearTimeout(timeout);
      if (document.body.style.cursor !== 'default') {
        document.body.style.cursor = 'default';  
      }
    }

    document.onmousemove = function () {  
      showMouseCursor();
      timeout = setTimeout(hideMouseCursor, wakeTime);
    };

    document.onmousedown = function () {
      showMouseCursor();
      timeout = setTimeout(hideMouseCursor, wakeTime);
    };
  }
}
