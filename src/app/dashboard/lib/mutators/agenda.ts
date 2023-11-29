import { icsCalendarToObject } from 'ts-ics';
import { Day } from '../../agenda/lib/types';
import { DateTime, Duration } from 'luxon';

export type NamedCalendar = {
  calendar: string;
  name: string;
};

export const parseAgenda = (calendars: NamedCalendar[]): Day[] => {
  const calendarObjects = calendars.map((c) => ({
    name: c.name,
    calendar: icsCalendarToObject(c.calendar),
  }));

  let days: Day[] = [];
  calendarObjects.forEach((o) => {
    o.calendar.events?.forEach((e) => {
      const startDate = DateTime.fromJSDate(e.start.date).startOf('day');
      const endDate = DateTime.fromJSDate(e.end?.date || e.start.date).startOf(
        'day'
      );

      for (
        let eventDay = 0;
        eventDay < endDate.diff(startDate, 'days').days || eventDay === 0;
        eventDay++
      ) {
        const currentDay = startDate.plus(
          Duration.fromObject({ days: eventDay })
        );
        const existingDay = days.find((d) => d.day.equals(currentDay));

        if (existingDay) {
          existingDay.events.push({ name: o.name, event: e });
        } else {
          days.push({
            day: currentDay,
            events: [{ name: o.name, event: e }],
          });
        }
      }
    });
  });

  return days;
};
