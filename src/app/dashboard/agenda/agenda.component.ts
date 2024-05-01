import { Component, Input } from '@angular/core';
import { EventDay } from './lib/types';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.less'],
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
