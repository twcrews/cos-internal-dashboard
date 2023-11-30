import { VEvent, WeekdayNumberObject, icsCalendarToObject } from 'ts-ics';
import { Day } from '../../agenda/lib/types';
import { DateTime, Duration } from 'luxon';
import { ByWeekday, Frequency, RRule, Weekday } from 'rrule';
import { addMinutes } from 'date-fns';

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
    const allEvents: VEvent[] | undefined = o.calendar.events?.flatMap((e) =>
      splitRecurringEvent(e)
    );
    allEvents?.forEach((e) => {
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

const splitRecurringEvent = (event: VEvent): VEvent[] => {
  const recurrence = event.recurrenceRule;
  const zoneOffset = new Date().getTimezoneOffset();

  if (!recurrence) {
    return [event];
  }
  if (event.summary === 'Prayer Team Mtg') {
    console.log(event);
    if (recurrence.byDay) {
      console.log(convertWeekday(recurrence.byDay));
    }
    console.log(convertWeekStart(recurrence.workweekStart));
  }

  const rule = new RRule({
    freq: convertFrequency(recurrence.frequency),
    interval: recurrence.interval ?? 1,
    count: recurrence.count,
    until: recurrence.until?.date
      ? isFinite(+recurrence.until.date)
        ? addMinutes(recurrence.until.date, -zoneOffset)
        : undefined
      : undefined,
    bysecond: recurrence.bySecond,
    byminute: recurrence.byMinute,
    byhour: recurrence.byHour,
    byweekno: recurrence.byWeekNo,
    byweekday: convertWeekday(recurrence.byDay),
    bymonth: recurrence.byMonth,
    bymonthday: recurrence.byMonthday,
    byyearday: recurrence.byYearday,
    bysetpos: recurrence.bySetPos,
    dtstart: addMinutes(event.start.date, -zoneOffset),
    wkst: convertWeekStart(recurrence.workweekStart),
  });

  return rule
    .between(
      addMinutes(new Date(), -zoneOffset),
      addMinutes(DateTime.now().plus({ days: 30 }).toJSDate(), -zoneOffset)
    )
    .map((time) => {
      time = addMinutes(time, zoneOffset);
      const eventDuration =
        event.start.type === 'DATE-TIME' && !event.end
          ? Duration.fromMillis(0)
          : !event.end
          ? Duration.fromObject({ days: 1 })
          : DateTime.fromJSDate(event.end.date).diff(
              DateTime.fromJSDate(event.start.date)
            );

      const startTime = DateTime.fromJSDate(time).plus({ hours: 1 });
      const endTime = startTime.plus(eventDuration);

      const newEvent: VEvent = {
        ...event,
        start: {
          ...event.start,
          date: startTime.toJSDate(),
        },
      };

      if (event.end) {
        newEvent.end = { ...event.end, date: endTime.toJSDate() };
      }

      if (newEvent.uid === '8khrc42q25h874mr4hdi4vlqot@google.com') {
        console.log(event);
        console.warn(rule);
        if (recurrence.byDay) {
          console.warn(convertWeekday(recurrence.byDay));
        }
        console.warn(time);
      }

      if (newEvent.summary === 'Prayer Team Mtg') {
        console.log(newEvent);
        console.log(rule);
      }
      return newEvent;
    });
};

const convertFrequency = (
  frequency:
    | 'SECONDLY'
    | 'MINUTELY'
    | 'HOURLY'
    | 'DAILY'
    | 'WEEKLY'
    | 'MONTHLY'
    | 'YEARLY'
): Frequency => {
  switch (frequency) {
    case 'SECONDLY':
      return Frequency.SECONDLY;
    case 'MINUTELY':
      return Frequency.MINUTELY;
    case 'HOURLY':
      return Frequency.HOURLY;
    case 'DAILY':
      return Frequency.DAILY;
    case 'WEEKLY':
      return Frequency.WEEKLY;
    case 'MONTHLY':
      return Frequency.MONTHLY;
    case 'YEARLY':
      return Frequency.YEARLY;
  }
};

const convertWeekday = (
  weekdays: WeekdayNumberObject[] | undefined
): Weekday[] | undefined => {
  if (!weekdays) {
    return undefined;
  }

  const convertedDays: Weekday[] = weekdays.map((weekday) => {
    let convertedDay: Weekday;
    switch (weekday.day) {
      case 'SU':
        convertedDay = RRule.SU;
        break;
      case 'MO':
        convertedDay = RRule.MO;
        break;
      case 'TU':
        convertedDay = RRule.TU;
        break;
      case 'WE':
        convertedDay = RRule.WE;
        break;
      case 'TH':
        convertedDay = RRule.TH;
        break;
      case 'FR':
        convertedDay = RRule.FR;
        break;
      case 'SA':
        convertedDay = RRule.SA;
        break;
    }
    return weekday.occurence
      ? convertedDay.nth(weekday.occurence)
      : convertedDay;
  });

  return convertedDays.sort((a, b) => a.weekday - b.weekday);
};

const convertWeekStart = (
  weekStart: 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU' | undefined
): Weekday | undefined => {
  switch (weekStart) {
    case 'MO':
      return RRule.MO;
    case 'TU':
      return RRule.TU;
    case 'WE':
      return RRule.WE;
    case 'TH':
      return RRule.TH;
    case 'FR':
      return RRule.FR;
    case 'SA':
      return RRule.SA;
    case 'SU':
      return RRule.SU;
  }
  return undefined;
};
