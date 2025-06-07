import { Component, Input } from '@angular/core';
import { Rsvp } from './lib/types';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-rsvp-item',
  templateUrl: './rsvp-item.component.html',
  styleUrls: ['./rsvp-item.component.less'],
  imports: [
    MatIconModule
  ]
})
export class RsvpItemComponent {
  @Input() data!: Rsvp
}
