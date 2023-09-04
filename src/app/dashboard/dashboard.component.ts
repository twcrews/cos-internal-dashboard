import { Component } from '@angular/core';
import {
  birthdaysUrl,
  firstTimeVisitorsUrl,
  newDonorsUrl,
  newProfilesUrl,
  teamRsvpsUrl,
} from 'src/lib/configuration';
import { PersonTile } from './person-tile/person-tile.component';
import { Rsvp } from './rsvp-item/lib/types';
import { ApiService } from 'src/lib/services/api.service';
import {
  BirthdayPeople,
  Person,
} from 'src/lib/planningCenter/people/2023-03-21/types';
import { getBirthdays, getFirstTimeVisitors, getRsvps } from './lib/mutators';
import { CheckIn } from 'src/lib/planningCenter/check-ins/2023-04-05/types';
import { DateTime } from 'luxon';
import { HomeWidgetsNewDonor } from 'src/lib/planningCenter/giving/privateTypes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  newProfiles?: PersonTile[];
  rsvps?: Rsvp[];
  firstTimeVisitors?: PersonTile[];
  birthdays?: PersonTile[];
  newDonors?: PersonTile[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchNewProfiles();
    this.fetchRsvps();
    this.fetchFirstTimeVisitors();
    this.fetchBirthdays();
    this.fetchNewDonors();
  }

  fetchNewProfiles() {
    this.apiService.fetchCollection<Person>(newProfilesUrl).subscribe(
      (data) =>
        (this.newProfiles = data.data?.map(
          (d) =>
            ({
              avatarUrl: d.attributes?.avatar,
              name: d.attributes?.name,
              caption: DateTime.fromISO(
                d.attributes?.created_at?.toString() ?? ''
              ).toRelativeCalendar(),
            } as PersonTile)
        ))
    );
  }

  fetchRsvps() {
    this.apiService
      .fetchSingle<any>(teamRsvpsUrl)
      .subscribe((data) => (this.rsvps = getRsvps(data)));
  }

  fetchFirstTimeVisitors() {
    this.apiService
      .fetchCollection<CheckIn>(firstTimeVisitorsUrl)
      .subscribe(
        (data) => (this.firstTimeVisitors = getFirstTimeVisitors(data))
      );
  }

  fetchBirthdays() {
    this.apiService
      .fetchSingle<BirthdayPeople>(birthdaysUrl)
      .subscribe((data) => (this.birthdays = getBirthdays(data)));
  }

  fetchNewDonors() {
    this.apiService
      .fetchCollection<HomeWidgetsNewDonor>(newDonorsUrl)
      .subscribe(
        (data) =>
          (this.newDonors = data.data?.map((d) => ({
            avatarUrl: d.attributes?.avatar_url,
            name: d.attributes?.name ?? 'Unknown person',
            caption: DateTime.fromISO(
              d.attributes?.first_donation_received_at?.toString() ?? ''
            ).toFormat('MMMM d'),
          })))
      );
  }
}
