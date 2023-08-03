import { Component } from '@angular/core';
import { newProfilesUrl, teamRsvpsUrl } from 'src/lib/configuration';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  newProfilesUrl = newProfilesUrl;
  teamRsvpsUrl = teamRsvpsUrl;
}
