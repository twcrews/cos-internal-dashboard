import { Component, Input } from '@angular/core';
import { Rsvp } from './lib/types';
import { ApiService } from 'src/lib/services/api.service';
import { getRsvps } from './lib/mutators';

@Component({
  selector: 'app-rsvp-list',
  templateUrl: './rsvp-list.component.html',
  styleUrls: ['./rsvp-list.component.less'],
})
export class RsvpListComponent {
  @Input() url!: string;
  rsvps?: Rsvp[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService
      .fetchSingle<any>(this.url)
      .subscribe((data) => (this.rsvps = getRsvps(data)));
  }
}
