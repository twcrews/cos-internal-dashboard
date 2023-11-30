import { Component, Input } from '@angular/core';
import { Day } from './lib/types';
import { DateTime } from 'luxon';
import { VEvent } from 'ts-ics';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.less'],
})
export class AgendaComponent {
  @Input() days?: Day[];
  upcoming?: Day[];
  maxDays = 30;

  ngOnInit() {
    this.upcoming = this.days
      ?.filter((d) => {
        const today = DateTime.now().startOf('day');
        const maxDate = today.plus({ days: this.maxDays });
        return d.day >= today && d.day <= maxDate;
      })
      .sort((a, b) => {
        const aSeconds = a.day.toSeconds();
        const bSeconds = b.day.toSeconds();

        if (aSeconds > bSeconds) {
          return 1;
        }
        if (aSeconds < bSeconds) {
          return -1;
        }
        return 0;
      });
    this.upcoming?.forEach((d) =>
      d.events.sort(
        (a, b) => a.event.start.date.getTime() - b.event.start.date.getTime()
      )
    );
  }

  getFriendlySubtitle(event: VEvent) {
    let subtitle: string = '';

    if (event.start.type === 'DATE') {
      subtitle = 'All day';
    } else {
      subtitle = DateTime.fromJSDate(event.start.date).toFormat('h:mm a');
    }

    if (event.end) {
      subtitle = `${subtitle}– ${DateTime.fromJSDate(event.end.date).toFormat(
        'h:mm a'
      )}`.replace(/(AM|PM)(.*?)(AM|PM)/, '$2$3');
    }
    return subtitle;
  }
}
