import { Component, Input, input } from '@angular/core';
import fontColorContrast from 'font-color-contrast';
import { Tag } from 'src/lib/planningCenter/calendar/types';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.less'
})
export class TagComponent {
  defaultColor = '#666666';
  @Input() tag: Tag = { name: 'Empty Tag', color: this.defaultColor };
  fontColor = fontColorContrast(this.tag.color ?? this.defaultColor, 0.3);
}
