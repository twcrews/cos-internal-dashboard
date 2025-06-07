import { Component, Input } from '@angular/core';
import { EventDay } from './lib/types';
import { TagComponent } from './tag/tag.component';
import { LoadingSpinnerComponent } from '../widget/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.less'],
  imports: [
    TagComponent,
    LoadingSpinnerComponent
  ]
})
export class AgendaComponent {
  @Input() days?: EventDay[];

  ngAfterViewChecked() {
    const body = document.querySelector('.agenda-container');
    const containers = document.querySelectorAll('.events-container');
    containers.forEach(container => {
      if (container.clientHeight - 5 > (body?.clientHeight ?? 268) && !container.classList.contains('animated')) {
        container.classList.add('animated');
      }
    })
  }
}
