import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-tile',
  templateUrl: './person-tile.component.html',
  styleUrls: ['./person-tile.component.less']
})
export class PersonTileComponent {
  @Input() data!: PersonTile;
}

export type PersonTile = {
  avatarUrl: string;
  name: string;
  caption?: string;
  subCaption?: string;
}