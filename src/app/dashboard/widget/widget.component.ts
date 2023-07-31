import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class WidgetComponent {
  @Input() icon: string = 'lists';
  @Input() title: string = 'Untitled Widget';
}
