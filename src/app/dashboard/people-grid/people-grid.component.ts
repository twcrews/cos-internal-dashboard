import { Component, Input } from '@angular/core';
import { PersonTile } from './person-tile/person-tile.component';
import { Person } from 'src/lib/planningCenter/people/2023-03-21/types';
import { ApiService } from 'src/lib/services/api.service';
import { friendlyTimespanArray, friendlyTimespanString, timespan } from 'src/lib/formatting/date';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.less'],
})
export class PeopleGridComponent {
  @Input() url!: string;
  people?: PersonTile[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetchCollection<Person>(this.url).subscribe(
      (data) =>
        (this.people = data.data?.map(
          (d) =>
            ({
              avatarUrl: d.attributes?.avatar,
              name: d.attributes?.name,
              caption: `${friendlyTimespanArray(
                timespan(new Date(d.attributes?.created_at ?? new Date()), new Date())
              )[0]} ago`,
            } as PersonTile)
        ))
    );
  }
}
