import { Component } from '@angular/core';
import {
  firstTimeVisitorsUrl,
  newProfilesUrl,
  teamRsvpsUrl,
} from 'src/lib/configuration';
import { PersonTile } from './person-tile/person-tile.component';
import { Rsvp } from './rsvp-item/lib/types';
import { ApiService } from 'src/lib/services/api.service';
import { Person } from 'src/lib/planningCenter/people/2023-03-21/types';
import { friendlyTimespanArray, timespan } from 'src/lib/formatting/date';
import { getFirstTimeVisitors, getRsvps } from './lib/mutators';
import { CheckIn } from 'src/lib/planningCenter/check-ins/2023-04-05/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  newProfiles?: PersonTile[];
  rsvps?: Rsvp[];
  firstTimeVisitors?: PersonTile[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchNewProfiles();
    this.fetchRsvps();
    this.fetchFirstTimeVisitors();
  }

  fetchNewProfiles() {
    this.apiService.fetchCollection<Person>(newProfilesUrl).subscribe(
      (data) =>
        (this.newProfiles = data.data?.map(
          (d) =>
            ({
              avatarUrl: d.attributes?.avatar,
              name: d.attributes?.name,
              caption: `${
                friendlyTimespanArray(
                  timespan(
                    new Date(d.attributes?.created_at ?? new Date()),
                    new Date()
                  )
                )[0]
              } ago`,
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
}
