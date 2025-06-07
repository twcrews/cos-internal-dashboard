import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  imports: [
    MatCardModule,
    MatIconModule,
    LoadingSpinnerComponent
  ]
})
export class WidgetComponent {
  @Input() icon: string = 'lists';
  @Input() title: string = 'Untitled Widget';
}
