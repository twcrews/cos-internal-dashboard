import { Component, Input } from '@angular/core';
import { Rsvp } from '../lib/types';

@Component({
  selector: 'app-rsvp-item',
  templateUrl: './rsvp-item.component.html',
  styleUrls: ['./rsvp-item.component.less']
})
export class RsvpItemComponent {
  @Input() data!: Rsvp
}
